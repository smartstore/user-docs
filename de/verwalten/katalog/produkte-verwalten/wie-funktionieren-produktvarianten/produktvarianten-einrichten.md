# Attribute am Produkt einrichten

Hier legen Sie fest, welche Attribute und Werte Kunden an einem Produkt wählen oder selbst eingeben können. Das T-Shirt-Beispiel verwendet Farbe und Größe. Den Zusammenhang erklärt die Einführung [Produktattribute und Varianten](./).

## Attribute einem Produkt zuweisen <a href="#attribute" id="attribute"></a>

Legen Sie benötigte Attribute zunächst zentral unter **Katalog > Produkt Attribute** an. Die zentrale Verwaltung und wiederverwendbare Options-Sets beschreibt [Produktattribute vorbereiten](../../produktattribute-verwalten.md).

1. Öffnen Sie das Produkt unter **Katalog > Produktverwaltung**. Speichern Sie ein neu angelegtes Produkt zunächst.
2. Wechseln Sie zu **Attribute** und fügen Sie über **Neu** das gewünschte Attribut hinzu.
3. Wählen Sie den **Typ**, legen Sie Pflichtauswahl und Reihenfolge fest und speichern Sie die Zuordnung.
4. Hinterlegen Sie anschließend die Werte des Attributs. Wiederholen Sie die Schritte für weitere Merkmale.

![](<../../../../.gitbook/assets/2022-10-19 10_09_14-Produktdetails _ Smartstore Administration.png>)

| **Einstellung**          | **Wirkung**                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribut                 | Wählt das zentral angelegte Produktattribut aus.                                                                                                |
| Typ                      | Bestimmt, ob Kunden einen Wert auswählen oder selbst etwas eingeben.                                                                            |
| Anzeigetext              | Abweichende Beschriftung für die Eingabe am Produkt. Ohne eigenen Text wird der Attributname verwendet.                                         |
| Benutzerdefinierte Daten | Technische Zusatzdaten für individuelle Erweiterungen. Die Verwendung stimmen Sie mit dem zuständigen Entwickler ab.                            |
| Ist erforderlich         | Verlangt eine Auswahl beziehungsweise Eingabe, bevor das Produkt in den Warenkorb gelegt werden kann.                                           |
| Reihenfolge              | Bestimmt die Position des Attributs in der Produktansicht.                                                                                      |
| Werte                    | Öffnet die Werteverwaltung beziehungsweise übernimmt Werte aus einem Options-Set. Bei freien Eingaben werden keine auswählbaren Werte angelegt. |

### Den passenden Eingabetyp wählen <a href="#verfugbare-typen" id="verfugbare-typen"></a>

| **Typ**              | **Geeignet für**                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| Dropdown-Liste       | Eine Auswahl aus vorgegebenen Werten, beispielsweise S, M oder L.                                 |
| Radiobuttonliste     | Eine Einzelauswahl, deren Optionen unmittelbar sichtbar sein sollen, beispielsweise Ja oder Nein. |
| Kontrollkästchen     | Mehrere gleichzeitig wählbare Werte, beispielsweise zusätzliche Ausstattungsmerkmale.             |
| Textbox              | Eine kurze freie Eingabe, beispielsweise einen Gravurtext.                                        |
| Mehrzeilige Textbox  | Längere Eingaben, beispielsweise Hinweise zur Individualisierung.                                 |
| Kalender             | Die Eingabe eines Datums.                                                                         |
| Datei-Upload         | Eine vom Kunden bereitgestellte Datei, beispielsweise ein Druckmotiv.                             |
| Farb- und Bildmuster | Eine visuelle Einzelauswahl über Farben, Bilder oder größere Auswahlkarten.                       |

Für das T-Shirt verwenden Sie beispielsweise **Farb- und Bildmuster** für Farbe und eine **Dropdown-Liste** für Größe. Für Textfelder, Kalender und Datei-Upload legen Sie keine festen Attributwerte an; die Eingabe stammt vom Kunden.

## Attributwerte festlegen <a href="#attributwerte" id="attributwerte"></a>

Öffnen Sie beim zugewiesenen Attribut die Werteverwaltung und legen Sie seine Auswahlmöglichkeiten an. Für Farbe sind das beispielsweise Blau und Weiß, für Größe S, M und L. Alternativ kopieren Sie Werte aus einem zentralen [Produktattribute vorbereiten](../../produktattribute-verwalten.md). Die Kopie bleibt anschließend unabhängig von der Vorlage.

| **Feld**                    | **Bedeutung**                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Typ                         | Einfach verwendet einen eigenständigen Attributwert. Produkt verknüpft den Wert mit einem vorhandenen Produkt.                       |
| Verknüpftes Produkt / Menge | Bei Typ Produkt: das verwendete Produkt und dessen Menge je bestelltem Hauptprodukt.                                                 |
| Attribut-Wert               | Die sichtbare Bezeichnung, beispielsweise Blau. Übersetzungen können je Shopsprache gepflegt werden.                                 |
| Alias                       | Optionaler SEO-konformer URL-Alias für Suchfilter; ebenfalls übersetzbar.                                                            |
| Bild / Farben               | Bild beziehungsweise bis zu vier Farben des Werts. Die visuelle Darstellung beschreibt die verlinkte Seite zu Farb- und Bildmustern. |
| Mehr-/Minderpreis           | Bei Typ Einfach: positiver Betrag für einen Aufpreis, negativer Betrag für einen Abschlag.                                           |
| Mehr-/Mindergewicht         | Bei Typ Einfach: erhöht oder vermindert das Gewicht bei Auswahl dieses Werts.                                                        |
| Vorausgewählt               | Wählt diesen Wert beim Aufruf der Produktseite vor. Bei einer Einzelauswahl sollten Sie nur einen Wert vorauswählen.                 |
| Reihenfolge                 | Bestimmt die Anzeigereihenfolge der Werte.                                                                                           |

Beispiel: Das T-Shirt kostet regulär 20 €. Hinterlegen Sie für Weiß einen Mehrpreis von 2 €, kostet die Auswahl Weiß ohne weitere Preisänderungen 22 €. Der Aufpreis wird am Wert Weiß erfasst, nicht am Attribut Farbe. Das Zusammenspiel mit Kombinationspreisen und Rabatten erläutert [Preisregeln verstehen](../preisregeln-verstehen.md).

### Ein vorhandenes Produkt als Attributwert verwenden <a href="#produkt-als-attributwert" id="produkt-als-attributwert"></a>

Ein verknüpftes Produkt eignet sich beispielsweise für ein optionales Zubehör. Wählt der Kunde zu einer Leuchte ein Leuchtmittel, können dessen Preis und Lagerbestand berücksichtigt werden. Die hinterlegte Menge gilt je bestellter Leuchte: Bei Menge 2 und drei Leuchten werden sechs Leuchtmittel berücksichtigt.

Bei dieser Variante stammen Preis- und Gewichtsanpassung aus dem verknüpften Produkt. Die entsprechenden manuellen Felder für einen einfachen Attributwert werden ausgeblendet. Prüfen Sie auch die Bestellbarkeit des verknüpften Produkts.

## Eigene Daten je Ausführung hinterlegen <a href="#attribut-kombinationen" id="attribut-kombinationen"></a>

Soll beispielsweise das blaue T-Shirt in Größe M eine eigene SKU, einen abweichenden Preis oder einen getrennten Lagerbestand erhalten, legen Sie dafür eine Attributkombination an. Das Anlegen und die Bestellbarkeit beschreibt [Attributkombinationen verwalten](attributkombinationen-verwalten.md).

## Darstellung und Erweiterungen <a href="#farb-und-bildmuster" id="farb-und-bildmuster"></a>

### Farb- und Bildmuster verwenden <a href="#darstellung-konfigurieren" id="darstellung-konfigurieren"></a>

Verwenden Sie den Typ **Farb- und Bildmuster**, wenn Kunden Werte über Farben, Bilder oder Auswahlkarten wählen sollen. Bilder, mehrfarbige Muster, Preisvorschau und abweichende Darstellung am einzelnen Produkt beschreibt [Farb- und Bildmuster verwenden](farb-und-bildmuster-verwenden.md).

![](../../../../.gitbook/assets/wie_funktionieren_produktvarianten_2.png)

### Plugin-Funktionen <a href="#plugin-funktionen" id="plugin-funktionen"></a>

Mit dem kostenpflichtigen Enterprise-Plugin [AttributeRules](../../../plugins/attributerules-regeln-fur-produktattribute.md) können Sie Attribute abhängig von anderen Auswahlen einblenden, beispielsweise ein Gravurfeld nur bei gewählter Gravur. Das Plugin kann außerdem Attribute einschließlich ihrer Werte und Regeln von einem anderen Produkt übernehmen. Das Kopieren von Werten aus zentralen Options-Sets gehört dagegen zur regulären Attributverwaltung.
