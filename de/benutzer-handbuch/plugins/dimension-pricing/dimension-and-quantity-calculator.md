# Maß- und Mengenrechner

Der Maß- und Mengenrechner ist ein optionaler Konfigurator auf der Produktdetailseite. Er ersetzt die reguläre Mengeneingabe und eignet sich beispielsweise für Zuschnitte, Platten, Stoffe, Bodenbeläge oder andere Produkte, deren benötigte Menge oder Preis von Maßen abhängt.

Der Rechner kann:

- ein vom Kunden eingegebenes Gesamtmaß in eine Artikelmenge umrechnen,
- aus mehreren eingegebenen Einzelmaßen die benötigte Artikelmenge bestimmen,
- einen maßabhängigen Preis berechnen,
- bei maßabhängigen Preisen zusätzlich eine frei wählbare Artikelmenge anbieten.

Sie richten den Rechner in einer [Maßvorlage](dimension-templates.md) ein. Eine Maßvorlage kann mehreren Produkten zugewiesen werden, sodass sie dieselbe Berechnungslogik verwenden. Konkrete Anwendungen aller Betriebsarten finden Sie unter [Praxisbeispiele](practical-examples.md).

## Voraussetzungen

Bevor Sie den Rechner konfigurieren, sollte die Maßvorlage alle Maße enthalten, die in der Berechnung benötigt werden. Für jedes Maß legen Sie unter [**Maße**](dimension-templates.md#maße-hinzufügen) unter anderem Systemname, Minimalwert, Maximalwert, Standardwert und sichtbare Bezeichnung fest.

Der Rechner verwendet diese Angaben später für die Eingabefelder und die Berechnung.

## Einstellungen des Maß- und Mengenrechners

Die Einstellungen sind in die Bereiche **Darstellung** und **Berechnung** gegliedert. Unter **Darstellung** aktivieren und beschriften Sie den Rechner. Unter **Berechnung** bestimmen Sie, welche Eingaben möglich sind und wie daraus Maßwert, Artikelmenge oder Preis entstehen.

### Darstellung

| Einstellung | Beschreibung |
| --- | --- |
| **Maß- und Mengenrechner anzeigen** | Aktiviert den Rechner für alle Produkte mit dieser Maßvorlage. Er erscheint auf der Produktdetailseite oberhalb des Preises und ersetzt dort die reguläre Mengeneingabe. |
| **Bezeichnung des Maßwerts** | Beschriftet den berechneten Wert, zum Beispiel **Fläche in m²**, **Länge in m** oder **Volumen in m³**. |

Die Bezeichnung der Artikelmenge übernimmt der Rechner aus der [**Verpackungseinheit**](../../konfiguration/gewichte-verpackungseinheiten-abmessungen-verwalten.md) des Produkts. Dabei verwendet er automatisch deren Einzahl oder Mehrzahl, zum Beispiel **1 Paket** oder **2 Pakete**.

### Berechnung

Diese Einstellungen bestimmen, welche Angaben der Kunde macht und wie der Rechner daraus Maßwert, Artikelmenge oder Preis ermittelt.

| Einstellung | Beschreibung |
| --- | --- |
| **Betriebsart** | Bestimmt, ob der Kunde ein Gesamtmaß oder einzelne Maße eingibt und ob daraus Artikelmenge oder Preis berechnet werden. |
| **Berechnungsformel** | Verbindet die Maße zu einem Maßwert. `Width * Length` berechnet beispielsweise eine Fläche aus Breite und Länge. |
| **Divisor** | Rechnet den Formelwert bei Bedarf in eine andere Einheit um. |
| **Anzahl Dezimalstellen** | Bestimmt, wie genau der Maßwert angezeigt und verwendet wird. |

#### Betriebsart auswählen

Wählen Sie die Betriebsart anhand von zwei Fragen:

- Gibt der Kunde einen Gesamtbedarf oder einzelne Maße ein?
- Soll der Rechner daraus die Artikelmenge oder den Preis berechnen?

| Betriebsart | Eingabe des Kunden | Ergebnis | Menge im Warenkorb | Beispiel |
| --- | --- | --- | --- | --- |
| Gesamtmaß eingeben – Artikelmenge berechnen | ein Gesamtwert | benötigte Artikelmenge | nicht änderbar | [Bodenfliesen](practical-examples.md#bodenfliesen-pakete-aus-einer-gesamtfläche-berechnen) |
| Einzelmaße eingeben – Artikelmenge berechnen | einzelne Maße | Maßwert und benötigte Artikelmenge | nicht änderbar | [Vliestapete](practical-examples.md#vliestapete-rollen-aus-wandmaßen-berechnen) |
| Einzelmaße eingeben – Preis berechnen | einzelne Maße | maßabhängiger Preis | keine Mengenauswahl | [Glasplatte](practical-examples.md#glasplatte-preis-eines-zweidimensionalen-zuschnitts-berechnen) |
| Einzelmaße eingeben – Preis berechnen und Menge wählen | einzelne Maße und Artikelmenge | maßabhängiger Einzel- und Gesamtpreis | frei wählbar | [Akustikschaum](practical-examples.md#akustikschaum-dreidimensionale-blöcke-konfigurieren) |

##### Gesamtmaß eingeben – Artikelmenge berechnen

Der Kunde gibt den insgesamt benötigten Maßwert ein, beispielsweise eine Fläche. Die einzelnen Produktmaße werden nicht angezeigt und können nicht verändert werden.

Aus den festen Produktmaßen berechnet die Formel, welchen Maßwert ein Artikel abdeckt. Der Rechner teilt den eingegebenen Gesamtbedarf durch diesen Wert und rundet das Ergebnis auf eine vollständige Artikelmenge auf.

Eine vollständige Konfiguration zeigt das Beispiel [Bodenfliesen](practical-examples.md#bodenfliesen-pakete-aus-einer-gesamtfläche-berechnen).

##### Einzelmaße eingeben – Artikelmenge berechnen

Der Kunde gibt die Maße seines Bedarfs ein. Die Formel verbindet diese Eingaben zu einem Maßwert, aus dem der Rechner die benötigte Artikelmenge bestimmt. Reicht die errechnete Menge nicht exakt aus, wird auf einen vollständigen Artikel aufgerundet.

Der Preis basiert auf dem regulären Produktpreis und der berechneten Artikelmenge. Eine vollständige Konfiguration zeigt das Beispiel [Vliestapete](practical-examples.md#vliestapete-rollen-aus-wandmaßen-berechnen).

##### Einzelmaße eingeben – Preis berechnen

Der Kunde gibt die Maße einer Ausführung ein. Der Rechner vergleicht den daraus berechneten Maßwert mit dem Ausgangsmaß des Produkts und passt den regulären Produktpreis proportional an.

Die konfigurierte Ausführung wird als ein Artikel in den Warenkorb gelegt; eine zusätzliche Mengenauswahl wird nicht angeboten. Beispiele für ein- und zweidimensionale Produkte finden Sie unter [Textilkabel](practical-examples.md#textilkabel-preis-aus-einer-länge-berechnen) und [Glasplatte](practical-examples.md#glasplatte-preis-eines-zweidimensionalen-zuschnitts-berechnen).

##### Einzelmaße eingeben – Preis berechnen und Menge wählen

Der Rechner berechnet wie in der vorherigen Betriebsart den Preis einer konfigurierten Ausführung. Zusätzlich wählt der Kunde, wie viele identische Exemplare mit diesen Maßen bestellt werden sollen.

Beispiele für zwei- und dreidimensionale Produkte finden Sie unter [Tischplatte](practical-examples.md#tischplatte-mehrere-identische-zuschnitte-bestellen) und [Akustikschaum](practical-examples.md#akustikschaum-dreidimensionale-blöcke-konfigurieren).

#### Berechnungsformel

Die Berechnungsformel verbindet die benötigten Maße zu einem Maßwert. Welche Aufgabe dieser Wert erfüllt, hängt von der Betriebsart ab:

- Bei der Eingabe eines Gesamtmaßes beschreibt die Formel, welchen Maßwert ein einzelner Artikel abdeckt.
- Bei der Eingabe von Einzelmaßen berechnet die Formel den Maßwert der gewünschten Ausführung.
- In den mengenbasierten Betriebsarten wird daraus die benötigte Artikelmenge bestimmt.
- In den preisbasierten Betriebsarten dient das Verhältnis zum Ausgangsmaß des Produkts zur Berechnung des Preises.

Die Formel verwendet die Systemnamen der Maße aus der Maßvorlage. Die verfügbaren Systemnamen werden unter dem Formelfeld angezeigt. Klicken Sie auf einen Systemnamen, um ihn an der aktuellen Cursorposition in die Formel einzufügen.

Unterstützt werden Zahlen, Dezimalzahlen, Klammern und die vier Grundrechenarten `+`, `-`, `*`, `/`.

Beispiele:

```text
Width * Length
Width / 2
(A + Width) * Height
```

Beim Speichern wird die Formel geprüft. Fehlerhafte Ausdrücke und Variablen, die in der Maßvorlage nicht vorhanden sind, werden direkt am Formelfeld gemeldet.

#### Divisor

Der Formelwert wird durch den Divisor geteilt. Damit rechnen Sie das Ergebnis aus der Standardmaßeinheit des Shops in die Einheit um, die der Rechner anzeigen und verwenden soll.

Ist Millimeter die Standardmaßeinheit, gelten beispielsweise folgende Umrechnungen:

| Gewünschter Maßwert | Beispiel-Formel | Divisor |
| --- | --- | ---: |
| Meter | `Width` | `1.000` |
| Quadratmeter | `Width * Length` | `1.000.000` |
| Kubikmeter | `Width * Height * Length` | `1.000.000.000` |

Der passende Divisor hängt von der [Standardmaßeinheit](../../konfiguration/gewichte-verpackungseinheiten-abmessungen-verwalten.md), der Formel und der gewünschten Ausgabeeinheit ab. Verwenden Sie `1`, wenn keine Umrechnung erforderlich ist.

#### Anzahl Dezimalstellen

Bestimmt, mit wie vielen Dezimalstellen der berechnete Maßwert angezeigt wird. Die Preisberechnung verwendet weiterhin den genaueren, ungerundeten Formelwert.

Die Dezimalstellen und Schrittweiten der Eingabefelder legen Sie separat unter [**Maße**](dimension-templates.md#maße-hinzufügen) fest.

### Darstellung in Warenkorb und Bestellung

Die eingegebenen Maße und der berechnete Maßwert begleiten die Produktposition durch den gesamten Bestellweg. Sie erscheinen im Off-Canvas-Warenkorb, im Warenkorb, im Checkout, in den Bestelldetails des Kunden, in der Bestellansicht der Administration, in der Druckansicht sowie in den Bestell-E-Mails an Kunde und Händler.

- Eine vom Rechner ermittelte Artikelmenge kann im Warenkorb nicht geändert werden.
- Eine vom Kunden gewählte Artikelmenge bleibt im Warenkorb änderbar.
