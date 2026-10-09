# SEO

Mit Suchmaschinenoptimierung (SEO) helfen Sie Suchmaschinen und Besuchern, passende Inhalte Ihres Shops zu finden. In Smartstore pflegen Sie dafür Titel, Beschreibungen und lesbare URLs direkt an den Inhalten. Technische Einstellungen gelten für den Shop insgesamt.

## Globale SEO-Einstellungen

Öffnen Sie **Konfiguration > Einstellungen > Allgemeine Einstellungen** und wechseln Sie zum Reiter **SEO**. Die übrigen Bereiche beschreibt die Seite [Allgemeine Einstellungen](../konfiguration/einstellungen/allgemeine-einstellungen.md). Hier erklären wir die shopweiten SEO-Einstellungen und ihre Auswirkungen.

### Seitentitel und Meta-Angaben

Beispiel: Der Standard-Titel lautet „Mein Shop“, der Seitentitel einer Produktseite „Rote Jacke“ und das Titel-Trennzeichen „ | “. Mit individuellen Meta-Angaben kann der HTML-Seitenkopf so aussehen:

{% code collapsedlinecount="10" %}
```html
<title>Mein Shop | Rote Jacke</title>
<meta name="description" content="Leichte rote Jacke für Alltag und Freizeit.">
<meta name="keywords" content="rote Jacke, Damenjacke">
```
{% endcode %}

### Einstellungen im Überblick

| Einstellung                                        | Beschreibung                                                                                                                                                                                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titel-Trennzeichen                                 | Trennt den Standard-Titel vom Seitentitel, zum Beispiel durch „ \| “.                                                                                                                                                                                                     |
| Seiten-Titel-Anpassung                             | Bestimmt, ob der Standard-Titel vor oder hinter dem Seitentitel steht.                                                                                                                                                                                                    |
| Standard-Titel                                     | Shopweiter Titel, der mit dem Seitentitel kombiniert wird. Fehlt ein Seitentitel, erscheint nur der Standard-Titel.                                                                                                                                                       |
| Standard-Meta-Keywords                             | Legt die standardmäßigen Meta-Keywords fest. Für einzelne Inhalte können Sie eigene Angaben hinterlegen.                                                                                                                                                                  |
| Standard-Meta-Beschreibung                         | Legt die standardmäßige Meta-Beschreibung fest. Für einzelne Inhalte können Sie eine eigene Beschreibung hinterlegen.                                                                                                                                                     |
| Nicht-westliche Zeichensätze konvertieren          | Konvertiert Buchstaben mit Akzentzeichen aus SEO-relevanten Namen zu Buchstaben ohne Akzentzeichen.                                                                                                                                                                       |
| Kanonische Urls aktivieren                         | Kennzeichnet die bevorzugte Adresse einer Seite für Suchmaschinen. Einzelheiten im Abschnitt Kanonische URLs.                                                                                                                                                             |
| Regel für kanonischen Domänennamen                 | Leitet Aufrufe dauerhaft auf die festgelegte Variante der Shop-Domain mit oder ohne „www“ um. Wählen Sie die Domain, die Besucher und Suchmaschinen verwenden sollen.                                                                                                     |
| Extra Einträge für robots.txt                      | Im Einstellungsbereich „Extra Einträge für `robots.txt`“ gibt es getrennte Reiter für Allow, Disallow und zusätzliche Zeilen. Tragen Sie pro Zeile einen Pfad ein; Smartstore ergänzt Allow: oder Disallow: automatisch. Zusätzliche Zeilen werden unverändert angehängt. |
| Alternate Links für lokalisierte Seiten hinzufügen | Ergänzt im HTML-Kopf Verweise auf die verfügbaren Sprachversionen einer Seite (hreflang). Diese Einstellung ist unabhängig von kanonischen URLs.                                                                                                                          |
| Links mit Schrägstrich abschließen                 | Fügt internen Links am Ende einen Schrägstrich hinzu. Änderungen an Link-Optionen werden erst nach einem Neustart wirksam.                                                                                                                                                |
| Regel für Nichtübereinstimmung                     | Legt fest, ob Aufrufe ohne die eingestellte Form des abschließenden Schrägstrichs zugelassen oder weitergeleitet werden.                                                                                                                                                  |
| Vorrang von Produktbeschreibungen                  | Legt fest, ob für strukturierte Produktdaten der Langtext, die Kurzbeschreibung oder beide verwendet werden. Fehlt die bevorzugte Beschreibung, nutzt Smartstore die andere, sofern vorhanden.                                                                            |

### Kanonische URLs

Beispiel: Bei einer roten Jacke wählen Kunden Größe M oder L. Smartstore kann für die jeweilige Auswahl eine Produkt-URL mit Variantenparametern erzeugen. Wenn Sie **Kanonische Urls aktivieren** einschalten, steht im HTML-Kopf beider Varianten-URLs derselbe Canonical-Link auf die Produktseite ohne Größenauswahl, etwa `<link rel="canonical" href="https://shop.example/rote-jacke">`. Die gewählte Größe bleibt für Kunden sichtbar und auswählbar; der Canonical-Link löst keine Umleitung aus.

In einem mehrsprachigen Shop geschieht das für jede Sprachversion getrennt. Sind sprachabhängige URLs aktiviert und wird der Sprachcode der deutschen Standardsprache weggelassen, kann die deutsche Produktseite unter `https://shop.example/rote-jacke` und die englische unter `https://shop.example/en/red-jacket` liegen. Die englische Seite nennt ihre englische Produkt-URL als kanonisch, nicht die deutsche. Der konkrete Pfad hängt von den Spracheinstellungen und den hinterlegten URL-Aliasen ab.

Die separate Einstellung **Alternate Links für lokalisierte Seiten hinzufügen** ergänzt im HTML-Kopf `hreflang`-Links auf die verfügbaren Sprachversionen. So können Suchmaschinen die deutsche und die englische Seite als Übersetzungen erkennen. Canonical benennt dagegen die bevorzugte URL innerhalb der jeweiligen Sprache. Prüfen Sie in mehrsprachigen Shops beide Einstellungen.

Google wertet den Canonical-Link als starkes Signal für die URL, die in Suchergebnissen erscheinen soll. Signale wie Links auf verschiedene URL-Varianten können dadurch zusammengeführt werden. Google kann dennoch eine andere Adresse auswählen. Die Einstellung leitet Besucher nicht um und garantiert keine bessere Platzierung. Mehr dazu erklärt [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### Meta-Robots

Die Meta-Robots-Auswahl gilt shopweit. Mit `noindex` fügt Smartstore den Shopseiten das Tag `<meta name="robots" content="noindex">` hinzu. Wenn Google diese Seiten crawlen kann, werden neue Seiten nicht indexiert und bereits gelistete Seiten nach erneutem Crawling aus den Suchergebnissen entfernt. Das betrifft auch die Startseite sowie Warengruppen- und Produktseiten. Wählen Sie `noindex` hier nur, wenn der Shop insgesamt nicht in Google erscheinen soll.

### XML-Sitemap

Unter „XML-Sitemap“ schalten Sie die Sitemap ein oder aus. Ist sie deaktiviert, liefert /sitemap.xml keine Sitemap. Sie wählen getrennt, ob Produkte, Warengruppen, Hersteller, Inhaltsseiten, News, Blog und Forum aufgenommen werden, sofern diese Inhalte im Shop vorhanden sind. Eine eigene Option ergänzt Alternate Links für Sprachversionen in der Sitemap; sie ist unabhängig von der gleichnamigen Einstellung für den HTML-Kopf.

Diese Vorgaben betreffen den Shop insgesamt. Für einzelne Inhalte können Sie eigene SEO-Angaben hinterlegen; die folgenden Abschnitte erklären die gemeinsame Registerkarte.

## SEO für einzelne Inhalte

Die Registerkarte **Suchmaschinen (SEO)** finden Sie beim Bearbeiten von Produkten, Warengruppen, Herstellern und Inhaltsseiten. Auch News und Blogbeiträge besitzen diese Felder, wenn die entsprechenden Enterprise-Plugins installiert sind.

### Felder der Registerkarte

* **Meta Title**: Ein eigener Seitentitel für den Inhalt. Er kann im Browser-Tab und als Titel eines Suchergebnisses erscheinen. Suchmaschinen können die Anzeige abweichend gestalten.
* **Meta Description**: Eine kurze Beschreibung des Inhalts. Suchmaschinen können sie als Beschreibung im Suchergebnis verwenden oder einen anderen Text auswählen.
* **Meta Keywords**: Optionale Schlagwörter zum Inhalt. Für die wichtigsten Suchmaschinen haben sie heute kaum Bedeutung; wichtiger sind ein aussagekräftiger Titel und hilfreiche Seiteninhalte.
* **URL Alias**: Der lesbare Teil der Webadresse. Lassen Sie das Feld leer, erzeugt Smartstore ihn aus dem Namen beziehungsweise Titel. Sie können einen passenden Alias selbst eintragen.

Wenn in Ihrem Shop ein Anbieter für KI-Textgenerierung eingerichtet ist, können Sie bei Meta Title, Meta Description und Meta Keywords Textvorschläge erzeugen. Prüfen und bearbeiten Sie diese vor dem Speichern, damit sie zum jeweiligen Inhalt passen.

Für wichtige Seiten lohnt sich ein individueller Meta Title und eine passende Meta Description. Stimmen Sie beide auf den tatsächlichen Inhalt ab. Der sichtbare Name oder Titel des Inhalts wird durch einen Meta Title nicht geändert.

### URL-Aliase ändern und verwalten

Ein URL-Alias muss eindeutig sein. Ist der gewünschte Alias bereits vergeben, passt Smartstore ihn beim Speichern an. Kontrollieren Sie anschließend die tatsächliche Adresse im Shop.

Wenn Sie den Alias später ändern, bleibt der bisherige Eintrag in der URL-Historie erhalten. Aufrufe der alten Adresse werden dauerhaft zur aktuellen Adresse weitergeleitet. Bei Produkten, Warengruppen, Herstellern und Inhaltsseiten können Sie die gespeicherten Aliase neben dem Eingabefeld über **Alle anzeigen** einsehen. Eine Übersicht finden Sie außerdem unter [SEO Namen verwalten](../system-wartung/seo-namen-verwalten.md).

{% hint style="info" %}
Ändern Sie bereits veröffentlichte URLs möglichst selten. Smartstore leitet frühere, gespeicherte URL-Aliase auf den aktuellen Alias weiter. Prüfen Sie nach einer Änderung trotzdem interne und externe Verweise.
{% endhint %}

## Mehrsprachige SEO-Einstellungen

In mehrsprachigen Shops können Sie Meta Title, Meta Description, Meta Keywords und URL-Alias je Sprache bearbeiten. Öffnen Sie dafür im jeweiligen Inhalt die Sprachregisterkarte. Pflegen Sie die Angaben in der Sprache, in der die Seite angezeigt wird; ein deutscher Alias muss nicht für die englische Seite passen.

Ob Smartstore Sprachcodes wie **/de** oder **/en** in URLs verwendet, stellen Sie im Reiter **Lokalisierung** unter [Allgemeine Einstellungen](../konfiguration/einstellungen/allgemeine-einstellungen.md) ein. Die Verweise zwischen Sprachversionen im HTML und in der XML-Sitemap aktivieren Sie im Reiter SEO; diese Optionen sind oben beschrieben.

## Produktfeeds

Produktdaten können über passende Plugins an externe Dienste übermittelt werden.

## Empfehlungen für gute SEO-Inhalte

* Verwenden Sie klare, eindeutige Namen und Überschriften.
* Schreiben Sie für wichtige Seiten individuelle Titel und Beschreibungen, die den Inhalt treffend zusammenfassen.
* Halten Sie URL-Aliase kurz, verständlich und möglichst dauerhaft stabil.
* Prüfen Sie bei mehreren Sprachversionen die Angaben und URLs jeder Sprache.
* Vermeiden Sie nahezu identische Inhalte auf mehreren Seiten, wenn diese keinen eigenen Nutzen bieten.
