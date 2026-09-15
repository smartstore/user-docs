# Versandbedingungen

Eine **Versandbedingung** verbindet eine [Versandmethode](../../konfiguration/versandarten-einrichten.md) und eine [Verpackungsgröße](package-types-and-sizes.md) mit Zielgebiet, Staffelgrenzen, Preis und Zuschlägen.

Öffnen Sie die [Konfiguration des Plugins](../dimension-pricing.md#zugriff), wechseln Sie zur Registerkarte **Versandbedingungen** und klicken Sie auf **Neue Versandbedingung hinzufügen**.

Im Dialog enthält **Allgemein** den Gültigkeitsbereich, die Verpackungsgröße, den Grundpreis und den Veröffentlichungsstatus. Staffelgrenzen und Zuschläge finden Sie unter **Erweitert**. In der Übersicht sind die allgemeinen Angaben direkt sichtbar; die erweiterten Werte können Sie bei Bedarf über die Spaltenauswahl einblenden.

## Gültigkeitsbereich und Grundpreis

| Feld | Bedeutung |
| --- | --- |
| Store | Gilt für einen ausgewählten Store oder mit `*` für alle Stores. |
| Land | Gilt für das Land der Lieferadresse oder mit `*` für alle Länder. |
| Postleitzahl | Gilt für die Postleitzahl der Lieferadresse. Leer oder `*` passt auf alle Postleitzahlen. Mehrere durch Kommas getrennte Platzhaltermuster sind möglich, zum Beispiel `10*, 12*`. |
| Versandmethode | Versandmethode, für die die Versandbedingung gilt; `*` gilt für alle Methoden. |
| Verpackungsart und -größe | Verpackungsgröße, in die der Warenkorb gepackt wird. |
| Preis | Grundpreis je erzeugtem Packstück in der Primärwährung des Stores. |
| Veröffentlicht | Nur veröffentlichte Bedingungen werden bei der Berechnung berücksichtigt. |

## Staffelgrenzen

| Feld | Bedeutung |
| --- | --- |
| Abrechnungsgewicht von / bis | Optionaler Bereich für das Abrechnungsgewicht eines einzelnen Packstücks. |
| Volumen von / bis | Optionaler Volumenbereich eines einzelnen Packstücks. |
| Menge von / bis | Optionaler Bereich für die Gesamtmenge der versandpflichtigen Artikel im Warenkorb. |

Alle Unter- und Obergrenzen sind **einschließlich**. Eine Versandbedingung mit `Abrechnungsgewicht bis = 10` gilt auch bei exakt 10 Einheiten der [Standardgewichtseinheit](../../konfiguration/gewichte-verpackungseinheiten-abmessungen-verwalten.md).

## Gewichtsabhängiger Aufpreis

Mit den folgenden Feldern bilden Sie einen Grundpreis mit zusätzlichen Gewichtsschritten ab:

- **Zusätzliches Gewicht ab**: Gewicht, das bereits im Grundpreis enthalten ist.
- **Zusätzliche Gewichtseinheit**: Größe eines weiteren Abrechnungsschritts, beispielsweise `1` kg.
- **Preis je zusätzlicher Gewichtseinheit**: Preis für jeden begonnenen Schritt.

Beispiel: Der Grundpreis enthält 10 kg. Jede weitere angefangene Einheit von 2 kg kostet 3 €. Bei 15 kg werden drei zusätzliche Einheiten berechnet: `Grundpreis + 3 × 3 €`.

## Zuschläge

| Feld | Bedeutung |
| --- | --- |
| Fester Zuschlag | Fester Betrag je Packstück, zum Beispiel für Maut oder Klimakosten. |
| Prozentualer Zuschlag | Prozentsatz auf Grundpreis plus zusätzliche Gewichtskosten. |
| Verpackungspreis | Fester Verpackungspreis je Packstück. |
| Lademeter-Zuschlag | Im Festmodus einmaliger Zuschlag je Packstück; im flächenbasierten Modus Preis je berechnetem Lademeter. |
| Sperrgutgrenze | Grenzwert, ab dem der Sperrgutzuschlag gilt. Ist eine Gurtmaßformel vorhanden, wird deren Ergebnis verwendet; andernfalls die längste belegte Kante. |
| Sperrgutzuschlag | Fester Betrag je Packstück ab einschließlich der Sperrgutgrenze. |

## Reihenfolge der Preisberechnung

Der Preis eines einzelnen Packstücks wird in dieser Reihenfolge berechnet:

1. Grundpreis
2. Preis für jede begonnene zusätzliche Gewichtseinheit
3. prozentualer Zuschlag auf diese Zwischensumme
4. fester Zuschlag
5. Verpackungspreis
6. Lademeter-Zuschlag
7. gegebenenfalls Sperrgutzuschlag

Benötigt der Warenkorb mehrere Packstücke, wird jedes Packstück einzeln berechnet und die Ergebnisse werden addiert.

## Überlappende Versandbedingungen

Bei der Vorauswahl werden spezifische Treffer gegenüber allgemeinen Treffern bevorzugt:

- konkrete Versandmethode vor `*`,
- konkreter Store vor `*`,
- konkretes Land vor `*`,
- konkretes Postleitzahlenmuster vor leer oder `*`.

Sind mehrere Bedingungen gleich spezifisch und erfüllen dieselben Staffelgrenzen, wird die Bedingung mit dem niedrigsten berechneten Preis verwendet. Eine eigene Reihenfolge für Versandbedingungen ist nicht erforderlich.

Die Anzeigereihenfolge der Verpackungsart bleibt davon unberührt. Sie entscheidet weiterhin, welche geeignete Verpackungsart bevorzugt wird.

## Wenn eine Versandmethode fehlt

Prüfen Sie der Reihe nach:

1. Ist die Versandmethode vorhanden und aktiv?
2. Ist mindestens eine passende Versandbedingung veröffentlicht?
3. Passt sie zu Store, Land und Postleitzahl der Lieferadresse?
4. Ist das Postleitzahlenmuster korrekt?
5. Kann mindestens eine konfigurierte Verpackungsgröße den Warenkorb aufnehmen?
6. Liegen Gewicht, Volumen und Menge innerhalb der konfigurierten Bereiche?

## Wenn eine Staffel oder ein Zuschlag nicht wirkt

Gewichts- und Volumenbereiche gelten für das einzelne Packstück. Mengenbereiche beziehen sich dagegen auf die Gesamtmenge der versandpflichtigen Artikel im Warenkorb.

Prüfen Sie außerdem:

- Veröffentlichungsstatus der Versandbedingung,
- Spezifität und berechneter Preis überlappender Bedingungen,
- gewählten Lademetermodus,
- Konfiguration der zusätzlichen Gewichtsschritte.
