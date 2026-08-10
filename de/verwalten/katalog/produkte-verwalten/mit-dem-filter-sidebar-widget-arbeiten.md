# Mit dem Filter Sidebar Widget arbeiten

Das **Filter Sidebar Widget** hilft Ihren Kunden, die Produktauswahl innerhalb einer Warengruppe gezielt einzugrenzen. Es ermittelt automatisch die verfügbaren Hersteller und Preisspannen und zeigt diese gruppiert in der Filterleiste der Warengruppenseite an.

{% hint style="info" %}
**Preis** und **Hersteller** bzw. **Marke** sind _implizite_ Attribute und werden immer ganz oben im Filter Widget angezeigt. Sie müssen keine Attribute für diese Eigenschaften angeben! Die verfügbaren Kriterien für **Preis** können in der **Warengruppenkonfiguration** bearbeitet werden **> Allgemein > Preisfilter**.
{% endhint %}

![](<../../../.gitbook/assets/2022-11-14 10_20_45-Mein Shop. Sports.png>)

## Anwendungsszenario

Enthält eine Warengruppe viele Produkte, kann die Suche für Kunden unübersichtlich werden. Mit dem Filter Sidebar Widget grenzen sie die Auswahl beispielsweise nach Hersteller oder Preisspanne ein und gelangen schneller zum passenden Produkt.

## Welche Elemente können gefiltert werden?

Die Elemente des **Filter Sidebar Widgets**, mit denen Kunden die Produktauswahl eingrenzen, werden automatisch aus den folgenden Produkt- und Warengruppendaten erzeugt:

**Marke:** Das Widget erkennt die Hersteller aller Produkte der jeweiligen Warengruppe und listet sie in der Filtergruppe **Marke**.

**Preisfilter:** Das Widget filtert nach Preisen, wenn die Einstellung **Preisfilter** in der Registerkarte **Allgemein** für die Warengruppen-Konfiguration einen Wert enthält. In diesem Feld können Sie Preisspannen einstellen, die im Filter für diese Warengruppe angezeigt werden, indem Sie durch Kommata getrennte Spannen angeben (z. B. -25;25-50;50-;). Für jeden festgelegten Wert wird in der Filtergruppe **Preise** ein Filterobjekt erstellt.

**Bewertung:** Das Widget filtert nach der Anzahl der vergebenen Sterne für die Bewertungen, wenn bewertete Produkte in der Warengruppe enthalten sind.

**Lieferzeit:** Das Widget filtert nach den in den Produkten enthaltenen Lieferzeiten.

**Verfügbarkeit:** Das Widget zeigt nur die Produkte an, die verfügbar sind. Zusätzlich kann festgelegt werden, ob nicht verfügbare Produkte in Suchergebnissen standardmäßig angezeigt werden sollen oder nicht.

## Darstellung im Frontend

Die Einstellungen, welche die Anzeige des **Filter Sidebar Widget** im Frontend festlegen, können in den [Sucheinstellungen](../../../benutzer-handbuch/konfiguration/einstellungen/suche.md) konfigurieren. Dort aktivieren oder deaktivieren Sie einzelne Filtergruppen und legen deren Reihenfolge fest.
