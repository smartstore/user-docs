# Mit dem Filter Sidebar Widget arbeiten

Das **Filter Sidebar Widget**  ermöglicht es Ihren Kunden, Warengruppen in Ihrem Shop auf spezifische Weise zu filtern. Das Widget bestimmt dynamisch alle möglichen Hersteller und Preisspannen im Kontext der jeweiligen Warengruppe und zeigt sie gruppiert im Filter an der linken Seite der Detailansicht für Warengruppen. 

> [!INFO]
> **Preis** und **Hersteller** bzw. **Marke** sind *implizite* Atttribute und werden immer ganz oben im Filter Widget angezeigt. Sie müssen keine Attribute für diese Eigenschaften angeben! Die verfügbaren Kriterien für **Preis** können in der **Warengruppenkonfiguration** bearbeitet werden **> Allgemein > Preisfilter**.

![](./attachments/2022-11-14%2010_20_45-Mein%20Shop.%20Sports.png)

## Anwendungsszenario

Stellen Sie sich vor, Sie haben einen Produktkatalog, in dem viele Produkte innerhalb einer Warengruppe enthalten sind. In diesem Fall werden Ihre Kunden Schwierigkeiten haben, die Produkte zu finden, die sie suchen, wenn sie durch die Warengruppen navigieren. Um die Suche zu erleichtern, können Sie die Produkte spezifischer filtern lassen, indem Sie einen Hersteller oder eine Preisspanne angeben. 

## Welche Elemente können gefiltert werden?

Die Elemente des **Filter Sidebar Widgets**, welche Ihre Kunden nutzen können, um bestimmte Produkte herauszufiltern, werden automatisch aus folgenden Elementen erstellt:

**Marke:** Das Widget erkennt die Hersteller aller Produkte der jeweiligen Warengruppe und listet sie in der Filtergruppe **Marke**.

**Preisfilter:** Das Widget filtert nach Preisen, wenn die Einstellung **Preisfilter** in der Registerkarte **Allgemein** für die Warengruppen-Konfiguration einen Wert enthält. In diesem Feld können Sie Preisspannen einstellen, die im Filter für diese Warengruppe angezeigt wird, indem Sie durch Kommata getrennte Spannen angeben (z.B. -25;25-50;50-;). Für jeden festgelegten Wert, wird in der Filtegruppe **Preise** ein Filterobjekt erstellt.

**Bewertung:** Das Widget filtert nach Anzahl der vergebenen Sternen für die Bewertungen, wenn bewertete Produkte in der Warengruppe enthalten sind.

**Lieferzeit:** Das Widget filtert nach den in den Produkten enthaltenen Lieferzeiten.

**Verfügbarkeit:** Das Widget zeigt nur die Produkte an, die verfügbar sind. Zusätzlich kann festgelegt werden ob nicht verfügbare Produkte in Suchergebnissen standardmäßig angezeigt werden sollen oder nicht. 

## Darstellung im Frontend 

Die Einstellungen, welche die Anzeige des **Filter Sidebar Widget** im Frontend festlegen, können in den [Sucheinstellungen](../../../benutzer-handbuch/konfiguration/einstellungen/suche.md) verändert werden. Dort können Sie die gewünschten Filtergruppen aktivieren / deaktivieren und die Reihenfolge der Filtergruppen bestimmen.