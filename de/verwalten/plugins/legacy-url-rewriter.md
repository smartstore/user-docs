---
description: >-
  Leitet URLs aus einem Altsystem per HTTP 301 auf die aktuellen
  Smartstore-Slugs um. Technische Kurzdokumentation für Entwickler.
---

# Legacy URL Rewriter

|                          |                                             |
| ------------------------ | ------------------------------------------- |
| Systemname               | `Smartstore.LegacyUrlRewriter`              |
| Gruppe                   | SEO                                         |
| Version / MinAppVersion  | 6.4.0 / 6.4.0                               |
| Lizenz                   | Lizenzpflichtig (`[LicensableModule]`)      |
| Konfigurationsoberfläche | Keine — Steuerung ausschließlich über Daten |

## Funktionsprinzip

Das Modul antwortet auf hinterlegte Legacy-Pfade mit `301 Moved Permanently` und verweist auf den aktuell aktiven SEO-Slug eines Produkts oder einer Kategorie. Es registriert eine `IRule` in den ASP.NET-Core-`RewriteOptions` und hängt die Rewrite-Middleware bei `StarterOrdering.RewriteMiddleware` (-750) in die Pipeline — also vor Static Files, Routing und Work Context.

Pro Request:

1. Lizenzprüfung. Schlägt sie fehl, endet die Regel wirkungslos.
2. Request-Pfad ohne führenden Slash, kleingeschrieben, als Schlüssel in einer pro Store gecachten Map nachschlagen.
3. Bei Treffer: `HTTP 301` mit `Location: /<aktueller-slug>`.
4. Kein Treffer: Request läuft normal weiter.

Die Map wird beim ersten Zugriff aus `LegacyRewriterUrls` plus `UrlRecords` aufgebaut, batchweise zu 1000 Zeilen.

## Datenmodell

Tabelle `LegacyRewriterUrls`

| Spalte       | Typ                                 | Bedeutung                                                            |
| ------------ | ----------------------------------- | -------------------------------------------------------------------- |
| `Id`         | int, PK                             |                                                                      |
| `EntityId`   | int, NOT NULL, Index                | Id der Zielentität                                                   |
| `EntityName` | nvarchar(400), NOT NULL             | Muss `UrlRecord.EntityName` entsprechen, z. B. `Product`, `Category` |
| `OldSlug`    | nvarchar(400), NOT NULL, **UNIQUE** | Alte URL ohne führenden Slash                                        |
| `StoreId`    | int, NOT NULL, Index                | `0` = gilt für alle Stores                                           |
| `LanguageId` | int, NOT NULL                       | Muss `UrlRecord.LanguageId` entsprechen; `0` = sprachneutral         |

## Daten befüllen

### Über den Import

`Events.cs` konsumiert `ImportBatchExecutedEvent<Product>` und `ImportBatchExecutedEvent<Category>`. Enthält die Importdatei die folgenden Spalten, wird pro Zeile ein Mapping angelegt:

| Spalte           | Pflicht | Default | Inhalt                        |
| ---------------- | ------- | ------- | ----------------------------- |
| `LUR_EntityName` | ja      | —       | `Product` oder `Category`     |
| `LUR_OldSlug`    | ja      | —       | Alte URL ohne führenden Slash |
| `LUR_StoreId`    | nein    | `0`     |                               |
| `LUR_LanguageId` | nein    | `0`     |                               |

```csv
Sku;Name;LUR_EntityName;LUR_OldSlug;LUR_StoreId;LUR_LanguageId
P-1001;Kaffeemühle;Product;shop/artikel/kaffeemuehle-1001.html;0;0
P-1002;Milchkanne;Product;shop/artikel/milchkanne-1002.html;0;0
```

Verhalten:

* Der `EntityId` stammt aus der importierten Entität, ist also auch bei Neuanlagen korrekt gesetzt.
* Existiert `OldSlug` bereits, wird die Zeile **übersprungen** und eine Warnung ins Importprotokoll geschrieben. Bestehende Mappings werden nie aktualisiert.
* Zeilen ohne `EntityId`, `LUR_EntityName` oder `LUR_OldSlug` werden still ignoriert.

### Direkt per SQL

Der Event-Handler ist `public` und ohne Import-Kontext aufrufbar (`context` wird auf `null` geprüft). Für Massenmigrationen ist ein direkter `INSERT` in `LegacyRewriterUrls` der schnellere Weg.

## Auflösung zur Laufzeit

Der Ziel-Slug wird **nicht** gespeichert, sondern beim Cache-Aufbau aus `UrlRecords` aufgelöst:

```
UrlRecord.IsActive == true
  && EntityId   == LegacyRewriterUrl.EntityId
  && EntityName == LegacyRewriterUrl.EntityName
  && LanguageId == LegacyRewriterUrl.LanguageId
```

Ohne passenden `UrlRecord` entsteht kein Map-Eintrag und damit keine Weiterleitung. Das ist der häufigste Grund für „Mapping importiert, Redirect greift trotzdem nicht": `LUR_LanguageId` passt nicht zur Sprache des `UrlRecord`.

Beim Matching gilt:

* Verglichen wird der Pfad ohne führenden Slash, kleingeschrieben. `/Shop/Artikel/X` und `/shop/artikel/x` treffen denselben Eintrag.
* Ein **abschließender Slash zählt mit**. `alte-url` und `alte-url/` sind verschiedene Schlüssel.
* Der **Querystring wird ignoriert und nicht an das Ziel weitergereicht**. `/alte-url?utm_source=x` leitet auf `/neue-url` ohne Parameter.
* Berücksichtigt werden Zeilen mit `StoreId` des aktuellen Stores oder `0`.

{% hint style="warning" %}
Bei aktivierten sprachpräfixierten URLs (`SeoFriendlyUrlsForLanguagesEnabled`) ist das Sprachkürzel Teil des Request-Pfads. `OldSlug` muss es dann enthalten (`de/alte-url`), während das Ziel ohne Präfix ausgeliefert wird.
{% endhint %}

## Caching

|               |                                                     |
| ------------- | --------------------------------------------------- |
| Cache-Key     | `smartstore.legacyurlmapper:urlmap-store-<storeId>` |
| Gültigkeit    | 30 Tage                                             |
| Invalidierung | **Keine automatische**                              |

{% hint style="danger" %}
Weder der Import noch eine Slug-Änderung leeren den Cache. Neue Mappings greifen erst nach _Administration → System → Wartung → Cache leeren_ oder einem Anwendungsneustart. Umgekehrt zeigt ein 30 Tage alter Cache nach einer Slug-Änderung weiterhin auf den alten Zielpfad — und der ausgelieferte 301 wird von Browsern und Proxys dauerhaft gespeichert.
{% endhint %}

## Bekannte Einschränkungen

| Verhalten                        | Auswirkung                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Kein Schutz gegen Selbstverweise | Ist `OldSlug` identisch mit dem aktuellen Slug, entsteht eine Endlosschleife (`ERR_TOO_MANY_REDIRECTS`). |
| Statuscode fest auf 301          | Nicht konfigurierbar. Fehlerhafte Mappings sind bei Besuchern praktisch nicht zurücknehmbar.             |
| Querystring geht verloren        | Kampagnen- und Tracking-Parameter überleben die Weiterleitung nicht.                                     |
| `OldSlug` global eindeutig       | Keine store- oder sprachabhängigen Varianten derselben alten URL.                                        |
| Fehler werden verschluckt        | Ausnahmen in der Regel landen im Log; der Request läuft ohne Weiterleitung weiter.                       |

## Auflösung einer Anfrage

Bei einer Anfrage führt das Plugin folgende Schritte aus:

1. Es normalisiert den Request-Pfad auf Kleinschreibung und entfernt den führenden Slash.
2. Es sucht eine Zuordnung für den aktuellen Store oder für `StoreId = 0`.
3. Es ermittelt über `EntityId`, `EntityName` und `LanguageId` den aktiven `UrlRecord`.
4. Es antwortet mit Status `301` und `Location: /<aktueller-slug>`.

Der Pfad muss ansonsten exakt übereinstimmen; insbesondere sind ein abschließender Slash und Pfadbestandteile relevant. Query-Strings werden weder zur Zuordnung verwendet noch an das Ziel übernommen.

## Inbetriebnahme prüfen

Prüfe jede Store-/Sprachkombination auf dem tatsächlich verwendeten Host:

```bash
curl -I https://shop.example/alter-pfad
```

Erwartet werden `301 Moved Permanently` und der aktuelle Zielpfad im `Location`-Header. Kontrolliere bei fehlenden Redirects die Tabellen `LegacyRewriterUrls` und `UrlRecord`, die Modul-Lizenz sowie das Anwendungslog.
