# LegacyUrlRewriter

> Alte Links, neue Ziele

Der **LegacyUrlRewriter** leitet veraltete Produkt- und Kategorie-URLs dauerhaft auf die aktuellen SEO-URLs in Smartstore weiter.

Das Plugin eignet sich besonders für Shopmigrationen und Änderungen der URL-Struktur. Bestehende Links aus Suchmaschinen, Lesezeichen, Newslettern oder externen Websites bleiben dadurch erreichbar.

Grundlegende Informationen zu SEO-freundlichen URLs finden Sie unter [SEO](../allgemeine-konzepte/seo.md).

## Typische Einsatzgebiete

Der LegacyUrlRewriter ist hilfreich bei:

- dem Umzug eines bestehenden Shops auf Smartstore,
- dem Wechsel des bisherigen Shopsystems,
- der Neuordnung von Produkt- oder Kategoriestrukturen,
- der Übernahme historischer SEO-URLs,
- mehrsprachigen oder shopbezogenen Migrationen.

## Funktionsweise

Beim Import von Produkten oder Kategorien speichert das Plugin zusätzlich zur Zielentität deren bisherigen URL-Pfad. Wird dieser Pfad später aufgerufen, ermittelt das Plugin die aktuelle aktive SEO-URL der Entität und antwortet mit einer permanenten **HTTP-301-Weiterleitung**.

Die Zieladresse wird nicht fest in der Weiterleitungsregel gespeichert. Ändert sich die SEO-URL des Produkts oder der Kategorie später erneut, verwendet das Plugin nach einer Cache-Aktualisierung automatisch die neue Adresse.

## Voraussetzungen

Für die Weiterleitungen müssen folgende Bedingungen erfüllt sein:

- Das Plugin ist installiert und gültig lizenziert.
- Das Ziel ist ein Produkt oder eine Kategorie.
- Für die Zielentität existiert eine aktive SEO-URL.
- Der alte URL-Pfad wurde über einen Produkt- oder Kategorieimport übernommen.
- Shop- und Sprachzuordnung passen zur aufgerufenen Website.

Informationen zur Installation und Lizenzierung finden Sie unter [Plugins installieren](plugins-installieren.md) und [Plugins verwalten](plugins-verwalten.md).

{% hint style="info" %}
Der LegacyUrlRewriter besitzt keine Oberfläche zum manuellen Anlegen oder Bearbeiten einzelner Weiterleitungen. Die Zuordnungen werden über den Produkt- oder Kategorieimport übernommen.
{% endhint %}

## Weiterleitungen importieren

Erstellen oder bearbeiten Sie zunächst ein Importprofil für Produkte oder Kategorien. Eine Einführung finden Sie unter [Importprofile verwalten](../datenaustausch/import/importprofile-verwalten.md). Ergänzende Informationen zum Produktimport enthält der Beitrag [Produkte importieren & exportieren](../../verwalten/katalog/produkte-verwalten/produkte-importieren-exportieren.md).

Ergänzen Sie die Importdatei um folgende technische Spalten:

| Spalte | Erforderlich | Gültige Werte | Beschreibung |
|---|---:|---|---|
| `LUR_EntityName` | Ja | `Product` oder `Category` | Typ der Zielentität. Groß- und Kleinschreibung müssen exakt übereinstimmen. |
| `LUR_OldSlug` | Ja | Eindeutiger relativer Pfad, bis zu 400 Zeichen | Ohne Protokoll, Domain und führenden Schrägstrich, zum Beispiel `produkte/alter-produktname`.<br>Der Abgleich ist nicht case-sensitiv, ein abschließender Schrägstrich ist jedoch relevant. |
| `LUR_StoreId` | Nein | `0` oder positive Shop-ID | `0` gilt shopübergreifend. Eine konkrete ID beschränkt die Weiterleitung auf diesen Shop. |
| `LUR_LanguageId` | Nein | `0` oder positive Sprach-ID | `0` verwendet die sprachneutrale SEO-URL. Für eine konkrete ID muss eine aktive SEO-URL dieser Sprache existieren.<br>Das Plugin setzt die Arbeitssprache entsprechend. |

Ergänzende Informationen enthalten die Beiträge [Mit mehreren Shops arbeiten](../allgemeine-konzepte/mit-mehreren-shops-arbeiten.md) und [Mit mehreren Sprachen arbeiten](../allgemeine-konzepte/mit-mehreren-sprachen-arbeiten.md).

Die `LUR_`-Spalten sind technische Zusatzspalten. Sie werden vom Plugin direkt aus der Importdatei gelesen und müssen nicht den regulären Eigenschaften eines Produkts oder einer Kategorie zugeordnet werden.

Die Importzeile selbst muss über ein geeignetes Schlüsselfeld, beispielsweise SKU oder ID, einem Produkt beziehungsweise einer Kategorie zugeordnet werden können. Kann Smartstore keine Zielentität bestimmen, wird keine Weiterleitung angelegt.

{% hint style="info" %}
In der Importdatei wird ausschließlich der alte Pfad angegeben. Die aktuelle Zieladresse ermittelt das Plugin über das zugeordnete Produkt beziehungsweise die zugeordnete Kategorie.
{% endhint %}

## Beispiel für ein Produkt

Das Produkt mit der SKU `ART-100` soll über seinen bisherigen Pfad `produkte/klassischer-holztisch` erreichbar bleiben:

```csv
Sku;LUR_EntityName;LUR_OldSlug;LUR_StoreId;LUR_LanguageId
ART-100;Product;produkte/klassischer-holztisch;0;0
```

Das Plugin ordnet den alten Pfad dem Produkt mit der SKU `ART-100` zu. Als Weiterleitungsziel verwendet es die aktuelle aktive SEO-URL dieses Produkts.

## Beispiel für eine Kategorie

Die Kategorie mit der ID `42` soll über ihren bisherigen Pfad `moebel/gartentische` erreichbar bleiben:

```csv
Id;LUR_EntityName;LUR_OldSlug;LUR_StoreId;LUR_LanguageId
42;Category;moebel/gartentische;0;0
```

Das Plugin ordnet den alten Pfad der Kategorie mit der ID `42` zu. Als Weiterleitungsziel verwendet es die aktuelle aktive SEO-URL dieser Kategorie.

## Import durchführen

1. Erstellen oder öffnen Sie ein Produkt- beziehungsweise Kategorie-Importprofil.
2. Ergänzen Sie die Quelldatei um die benötigten `LUR_`-Spalten.
3. Stellen Sie sicher, dass jede Zeile über einen geeigneten Schlüssel einem Produkt oder einer Kategorie zugeordnet werden kann.
4. Starten Sie den Import.
5. Prüfen Sie den Importbericht auf Warnungen.
6. Leeren Sie bei Bedarf den Anwendungscache.
7. Testen Sie ausgewählte alte URLs.

Bereits vorhandene alte Pfade werden nicht überschrieben. Der Import überspringt den betreffenden Datensatz und protokolliert eine Warnung.

## Ergebnis prüfen

Rufen Sie nach dem Import eine alte URL auf. Die Anfrage sollte mit dem Statuscode `301 Moved Permanently` und der aktuellen SEO-URL im `Location`-Header beantwortet werden. Im Browser erscheint anschließend direkt die neue Zielseite.

Testen Sie bei mehreren Shops oder Sprachen jede relevante Kombination separat.

## Cache beachten

Die ermittelten Weiterleitungen werden pro Shop für bis zu 30 Tage zwischengespeichert.

Leeren Sie den Anwendungscache insbesondere, wenn:

- eine neue Weiterleitung noch nicht erkannt wird,
- die SEO-URL der Zielentität geändert wurde,
- Shop- oder Sprachzuordnungen angepasst wurden.

Eine Anleitung finden Sie unter [Cache bereinigen](../system-wartung/cache-bereinigen.md).

## Einschränkungen

- Unterstützt werden ausschließlich Produkte und Kategorien.
- Es gibt keine manuelle Verwaltung einzelner Weiterleitungen.
- Ein alter Pfad kann nur einmal vorkommen.
- Reguläre Ausdrücke und Platzhalter werden nicht unterstützt.
- Das Plugin verarbeitet Pfade, keine vollständigen URLs oder Domains.
- Ohne passende aktive SEO-URL erfolgt keine Weiterleitung.
- Bereits vorhandene Zuordnungen werden durch einen erneuten Import nicht überschrieben.

## Verwandte Themen

- [Plugins installieren](plugins-installieren.md)
- [Plugins verwalten und lizenzieren](plugins-verwalten.md)
- [Importprofile verwalten](../datenaustausch/import/importprofile-verwalten.md)
- [Produkte importieren & exportieren](../../verwalten/katalog/produkte-verwalten/produkte-importieren-exportieren.md)
- [SEO](../allgemeine-konzepte/seo.md)
- [SEO Namen verwalten](../system-wartung/seo-namen-verwalten.md)
- [Mit mehreren Shops arbeiten](../allgemeine-konzepte/mit-mehreren-shops-arbeiten.md)
- [Mit mehreren Sprachen arbeiten](../allgemeine-konzepte/mit-mehreren-sprachen-arbeiten.md)
- [Cache bereinigen](../system-wartung/cache-bereinigen.md)
