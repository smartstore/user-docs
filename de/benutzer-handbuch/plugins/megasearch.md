# MegaSearch

In Smartstore können Sie die bisherige Suchfunktion durch eine auf Apache Lucene basierende Suche ersetzen. Schon während der Eingabe des Suchbegriffes kann die Instant-Suche unterhalb der Eingabezeile relevante Vorschläge zur aktuellen Suche anzeigen.

![](../../.gitbook/assets/megasearch-1.PNG)

## Konfiguration des MegaSearch Plugins

![](../../.gitbook/assets/megasearch-2.PNG)

### Tab "Allgemein"

| **Eingabefeld / Option**                      | **Beschreibung**                                                                                                                                                                                                                                          |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiv                                         | aktiviert/deaktiviert das MegaSearch Plugin                                                                                                                                                                                                               |
| Index immer neu erstellen                     | Legt fest, ob der Suchindex durch die geplante Aufgabe stets neu erstellt anstatt aktualisiert werden soll.                                                                                                                                               |
| Änderungen am Datenbestand beobachten         | Legt fest, ob Änderungen am Datenbestand beobachtet werden sollen, um diese bei der nächsten Indexierung mit in den Suchindex aufzunehmen.                                                                                                                |
| Filter für Produktattribute aktivieren        | Legt fest, ob Filter bzw. Facetten für Produktattribute aktiviert sind. Diese Einstellung ist nur unter Verwendung des 'MegaSearchPlus' Plugins wirksam. Für Informationen über Filter/Facetten lesen Sie bitte wie funktionieren Filter/Facetten.        |
| Filter für Spezifikationsattribute aktivieren | Legt fest, ob Filter bzw. Facetten für Spezifikationsattribute aktiviert sind. Diese Einstellung ist nur unter Verwendung des 'MegaSearchPlus' Plugins wirksam. Für Informationen über Filter/Facetten lesen Sie bitte wie funktionieren Filter/Facetten. |
| Trefferanzahl anzeigen                        | Legt fest, ob bei Filtern bzw. Facetten die jeweilige Trefferanzahl angezeigt werden soll.                                                                                                                                                                |
| "Meinten Sie" aktivieren                      | Legt fest, ob auf Basis des Suchbegriffs Vorschläge mit ähnlichen Begriffen angezeigt werden sollen.                                                                                                                                                      |
| Maximale Anzahl Vorschläge                    | Legt die maximale Anzahl an Vorschlägen fest, die unter 'Meinten Sie' angezeigt werden sollen.                                                                                                                                                            |
| Minimale Länge des Suchbegriffs               | Legt die minimale Länge des Suchbegriffs fest. Bei einer geringeren Länge werden keine Vorschläge unter 'Meinten Sie' angezeigt.                                                                                                                          |
| Maximale Trefferanzahl                        | Legt die maximale Anzahl von Produkttreffern fest, bis zu der Vorschläge unter 'Meinten Sie' angezeigt werden.                                                                                                                                            |
| Top-Warengruppen aktivieren                   | Legt fest, ob zu einem Suchbegriff Vorschläge für Warengruppen angezeigt werden sollen.                                                                                                                                                                   |
| Maximale Vorschläge                           | Legt die maximale Anzahl der angezeigten Warengruppen fest.                                                                                                                                                                                               |
| Top-Hersteller aktivieren                     | Legt fest, ob zu einem Suchbegriff Vorschläge für Hersteller/Marken angezeigt werden sollen.                                                                                                                                                              |
| Maximale Vorschläge                           | Legt die maximale Anzahl der angezeigten Hersteller/Marken fest.                                                                                                                                                                                          |

#### Relevanzbewertung nach Suchfeldern

Die folgenden Einstellungen beeinflussen die Reihenfolge, wenn die Suchergebnisse nach Relevanz („Beste Ergebnisse“) sortiert werden. Sie ändern nicht, welche Treffer gefunden werden. Bei einer anderen Sortierung, beispielsweise nach Preis, haben sie keinen Einfluss auf die sichtbare Reihenfolge.

**Relevanz durch bestes Suchfeld bestimmen:** Wenn aktiviert (Standard), bestimmt grundsätzlich das am höchsten bewertete passende Suchfeld die Relevanz eines Treffers. Dasselbe Produkt erhält nicht allein deshalb eine höhere Platzierung, weil der Suchbegriff zusätzlich in mehreren geringer gewichteten Feldern vorkommt. Die Option kann auch ohne individuell festgelegte Suchfeld-Gewichtungen verwendet werden und gilt für alle MegaSearch-Indizes mit mehreren Suchfeldern.

**Bonus für weitere passende Suchfelder:** Legt fest, wie stark Treffer in weiteren Suchfeldern die Relevanz zusätzlich erhöhen. Bei 0 (Standard) wird ausschließlich das am besten passende Suchfeld berücksichtigt. Bei 10 fließt 1 % der Summe der Bewertungen aller weiteren passenden Felder ein, bei 100 sind es 10 %. Zulässig sind Werte von 0 bis 100. Da die Bewertungen der weiteren Felder zuerst summiert werden, können bereits kleine Werte die Reihenfolge merklich verändern.

{% hint style="info" %}
Beispiel: Das Feld „Keywords“ ist höher gewichtet als „Name“. Bei der Suche nach „Hammer“ kann ein Produkt, das über das Keyword „Hammer“ gefunden wird, vor Produkten mit Namen wie „Hammerbacher“ oder „Hammerbohrer“ erscheinen. Ein Bonus größer als 0 belohnt zusätzlich Produkte, bei denen „Hammer“ in weiteren Suchfeldern vorkommt.
{% endhint %}

### Gewichtung der Suchfelder (Boost)

Mit der Gewichtung der Felder kann die Reihenfolge von Suchtreffern beinflusst werden.

{% hint style="info" %}
Gewichten Sie Felder, um die Reihenfolge von Suchtreffern zu beeinflussen. Im Falle eines Treffers im betreffenden Feld reiht ein höherer Wert das Produkt weiter vorne in der Liste der Suchtreffer ein.
{% endhint %}

![](../../.gitbook/assets/megasearch-3.PNG)

### Tab "Textanalyse"

Mit der Textanalyse kann die Anzahl der Treffer erweitert erhöht werden. Es können u.a. auch Synonyme verwendet werden.

{% hint style="info" %}
Änderungen zur erweiterten Textanalyse werden erst nach einer Reindexierung wirksam!
{% endhint %}

![](../../.gitbook/assets/megasearch-4.PNG)

| **Eingabefeld / Option**          | **Beschreibung**                                                                                                                                                                                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erweiterte Textanalyse aktivieren | Legt fest, ob die erweiterte Textanalyse aktiviert werden soll.                                                                                                                                                                                       |
| Art der Textanalyse               | Legt die Art der Textanalyse fest. Whitespace ist eine vereinfachte Analyse, bei der lediglich nach Leerzeichen getrennt wird.                                                                                                                        |
| Abkürzungen                       | Legt Abkürzungen (z.B. cm, kg, W) fest, um mehr Suchbegriffe zu erzielen. Suchbegriffe mit und ohne Leerzeichen werden gefunden. Beispiel: Ein Produkt mit dem im Produktnamen enthaltenen Text "23cm" wird auch bei der Suche nach "23 cm" gefunden. |
| Synonyme                          | Ermöglicht die Festlegung von Synonym-Gruppen. Geben Sie pro Zeile alle Werte einer Gruppe durch Komma getrennt ein. Beispiel: notebook,laptop,convertible,ipad.                                                                                      |

### Statuszeile

In der Statuszeile wird der Status der letzten Indexierung und die Felder angezeigt, die für die Suche berücksichtigt werden.\
Über den rechten Button kann der Suchindex reindexiert, aktualisiert, optimiert und bearbeitet werden.

![](../../.gitbook/assets/megasearch-5.PNG)

### MegaSearchPlus Plugin

Erweiterungen für das MegaSearch Plugin. Ergänzt die Produktdaten des Suchindex um lokalisierte Daten und um Multistore- und Zugriffsbeschränkungen.

## Keywords

Bei der Produktbearbeitung können im Tab **Suche** Keywords festgelegt werden, über die das Produkt bei einer Suche gefunden wird. Für Druckerpapier könnten hier beispielsweise die Namen kompatibler Drucker eingegeben werden. Pro Zeile wird dabei immer ein Keyword festgelegt. Damit die Keywords berücksichtigt werden, müssen sie in den Sucheinstellungen als Suchfeld ausgewählt sein. In der MegaSearch-Konfiguration lässt sich über die Gewichtung der Suchfelder zudem die Reihenfolge der Suchtreffer über das Keyword-Feld beeinflussen.

Keywords können im Rahmen eines Imports von Produktdaten importiert werden. Verwenden Sie dazu die Spalte **MegaSearch.Product.Keywords** für Keywords, die in der Standardsprache des Shops importiert werden sollen. Sollen Keywords in einer anderen Sprache importiert werden, hängen Sie den entsprechenden Gebietsschema-Code in eckigen Klammern an den Spaltennamen an. Für Englisch lautet der Spaltenname beispielsweise **MegaSearch.Product.Keywords\[en-US]**. Mehrere Werte pro Feld werden wahlweise durch Semikolon, Komma oder Pipe-Symbol | voneinander getrennt.
