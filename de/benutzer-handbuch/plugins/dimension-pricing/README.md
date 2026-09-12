# Versandkosten nach Maß

Mit dem Modul **Versandkosten nach Maß** berechnen Sie Versandkosten anhand der Produktmaße und optional des Versandgewichts. Anhand dieser Angaben ermittelt das Modul die benötigten konfigurierten Pakete, Paletten oder anderen quaderförmigen Verpackungsgrößen. Daraus ergeben sich die verfügbaren Versandmethoden und deren Preise.

Das Modul umfasst zwei unabhängig nutzbare Bereiche: Mit dem Maß- und Mengenrechner können Kunden Produkte nach individuellen Maßen konfigurieren und daraus den Preis oder die Artikelmenge berechnen lassen. Unabhängig davon können Sie Versandkosten anhand der Produktmaße berechnen. Für die alleinige Nutzung des Rechners müssen keine Verpackungsgrößen oder Versandbedingungen eingerichtet werden.

Das Modul unterstützt unter anderem:

- Verpackungsgrößen mit festen Höchstmaßen und Höchstgewichten,
- gewichts-, volumen- oder mengenabhängige Versandbedingungen,
- Gurtmaß- und Sperrgutregeln,
- Zuschläge für Verpackung, Energie, Maut oder zusätzliche Gewichtseinheiten,
- Lademeterberechnungen,
- zusätzliche oder vom Kunden eingegebene Produktmaße,
- automatische Maßvorlagen über globale, Warengruppen- und Produktvorgaben,
- Packformeln für nicht quaderförmige Produkte.

## Voraussetzungen

Für die Konfiguration benötigen Sie:

- mindestens eine eingerichtete Versandmethode,
- vollständige Breiten-, Höhen- und Längenangaben für die versandpflichtigen Produkte,
- gepflegte Versandgewichte, wenn das Gewicht in die Berechnung einfließen soll,
- die Preis- und Maßvorgaben Ihres Versanddienstleisters.

{% hint style="warning" %}
Alle Längenangaben beziehen sich auf die **Standardmaßeinheit**, alle Gewichtsangaben auf die **Standardgewichtseinheit**. Prüfen Sie beide Einheiten vor der Konfiguration.

Ein Wert von `120` bedeutet beispielsweise nur dann 120 cm, wenn Zentimeter als Standardmaßeinheit eingestellt ist. Weitere Informationen finden Sie unter [Gewichte und Abmessungen verwalten](../../konfiguration/gewichte-verpackungseinheiten-abmessungen-verwalten.md).
{% endhint %}

## Funktionsweise

Für jede Versandmethode läuft die Berechnung vereinfacht in dieser Reihenfolge ab:

1. Breite, Höhe und Länge der Produkte werden ermittelt.
2. Falls aktiviert, wird zusätzlich das Versandgewicht berücksichtigt.
3. Mengen werden in einzelne Quader aufgeteilt oder anhand einer Packformel zusammengefasst.
4. Das Modul sucht veröffentlichte Versandbedingungen für Versandmethode, Store, Lieferland, Postleitzahl und Warenkorbmenge.
5. Der Packalgorithmus versucht, die Artikel in geeigneten Verpackungsgrößen anzuordnen. Dabei dürfen die Quader gedreht werden.
6. Für jedes Packstück werden Staffelgrenzen und Zuschläge ausgewertet.
7. Abschließend wird die konfigurierte Auswahlregel auf die geeigneten Versandmethoden angewendet.

Kann keine passende Versandbedingung oder Verpackungsgröße ermittelt werden, wird für die betreffende Versandmethode kein Preis angeboten.

## Empfohlene Reihenfolge

1. Legen Sie die benötigten [Versandmethoden](../../konfiguration/versandarten-einrichten.md) an.
2. Prüfen Sie die [Standardmaßeinheit und Standardgewichtseinheit](../../konfiguration/gewichte-verpackungseinheiten-abmessungen-verwalten.md).
3. Konfigurieren Sie die [Einstellungen](einstellungen.md).
4. Legen Sie [Verpackungsarten und -größen](verpackungsarten-und-groessen.md) an.
5. Erfassen und veröffentlichen Sie die [Versandbedingungen](versandbedingungen.md).
6. Legen Sie bei Bedarf [Maßvorlagen](massvorlagen.md) an und konfigurieren Sie deren globale, warengruppen- oder produktspezifische Verwendung.

## Zugriff

Öffnen Sie **Konfiguration** &rarr; **Regionale Einstellungen** &rarr; **Berechnungsmethoden für Versandkosten**. Öffnen Sie bei **Versandkosten nach Maß** das Untermenü und wählen Sie **Konfigurieren**. Die Konfigurationsseite enthält vier Registerkarten:

- [Einstellungen](einstellungen.md)
- [Maßvorlagen](massvorlagen.md)
- [Verpackungsarten und -größen](verpackungsarten-und-groessen.md)
- [Versandbedingungen](versandbedingungen.md)

Der [Maß- und Mengenrechner](mass-und-mengenrechner.md) wird innerhalb einer Maßvorlage konfiguriert. Konkrete Einsatzmöglichkeiten finden Sie unter [Praxisbeispiele](praxisbeispiele.md).

Über **Konfigurationsstatus** in der Werkzeugleiste können Sie prüfen, ob wesentliche Voraussetzungen und gespeicherte Formeln vollständig eingerichtet sind.

### Berechtigungen

Für **Versandkosten nach Maß** stehen getrennte [Berechtigungen](../../konfiguration/zugriffsrechte-kontrollieren.md) zum Lesen, Anlegen, Bearbeiten und Löschen zur Verfügung. Administratoren erhalten diese Berechtigungen standardmäßig. Gewähren Sie anderen administrativen Rollen nur die tatsächlich benötigten Rechte.

## Verhalten in Warenkorb und Checkout

Versandkostenfreie Artikel erzeugen kein eigenes Packstück; ihr Gewicht kann abhängig von den [Einstellungen](einstellungen.md) dennoch die Auswahl und den Preis beeinflussen.

Jede angebotene Versandmethode muss den gesamten relevanten Warenkorb transportieren können. Eine automatische Aufteilung auf mehrere unterschiedliche Versandmethoden findet nicht statt.

## Beispiel: Paketversand

Das folgende vereinfachte Beispiel zeigt das Zusammenspiel der Konfigurationsbereiche:

1. Legen Sie die Versandmethode `Standardpaket` an.
2. Erstellen Sie die Verpackungsart `Paket` mit der Anzeigereihenfolge `10`.
3. Fügen Sie die Verpackungsgröße `Paket M` mit den Höchstmaßen und dem Höchstgewicht Ihres Dienstleisters hinzu. Verwenden Sie für **Anteil an der vollen Einheit** den Wert `1`.
4. Erstellen Sie eine veröffentlichte Versandbedingung für den gewünschten Store, das Lieferland und das Postleitzahlenmuster `*`.
5. Wählen Sie die Versandmethode `Standardpaket` und die Verpackungsgröße `Paket M`.
6. Tragen Sie den Grundpreis ein und ergänzen Sie bei Bedarf Gewichtsbereiche oder Zuschläge.
7. Testen Sie einen Artikel an den Maß- und Gewichtsgrenzen.
8. Testen Sie anschließend eine Menge, die zwei Packstücke benötigt, und kontrollieren Sie die Preisberechnung.

## Bekannte Einschränkungen

- Die flächenbasierte Lademeterberechnung verwendet die rechteckige belegte Grundfläche und leitet keine speditionsspezifischen Sonderregeln ab.
