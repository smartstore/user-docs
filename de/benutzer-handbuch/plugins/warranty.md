# EU-Garantiekennzeichnung

Mit diesem Plugin konfigurieren und zeigen Sie die harmonisierten EU-Label für Gewährleistung und Garantie auf der Produktdetailseite und bei Bedarf im Checkout an.

![Gewährleistungs- und Garantielabel auf der Produktdetailseite](../../.gitbook/assets/module_warranty_produktdetailseite2.png)

![Gewährleistungs- und Garantielabel im Checkout](../../.gitbook/assets/module_warranty_checkout_produktliste.png)

## Gewährleistung

Je nach Konfiguration des Plugins wird das Gewährleistungslabel entweder auf der Produktdetailseite oder auf der Seite zum Bestellabschluss im Checkout-Prozess angezeigt. Beide Bereiche sind separat [steuerbar](warranty.md#plugin-konfiguration).

![Schaltfläche der Gewährleistung](../../.gitbook/assets/module_warranty_gewaehrleistungslabel.png)

Bei Klick auf das Gewährleistungslabel öffnet sich ein Pop-Up mit Informationen zur gesetzlichen Gewährleistung.

![Gewährleistungs-Pop-Up](../../.gitbook/assets/module_warranty_gewaehrleistungspopup.png)

## Garantie

Das Garantielabel wird nur ausgegeben, wenn für die Felder Garantiegeber und Modellkennung Daten hinterlegt sind und eine Garantiedauer von mehr als zwei Jahren festgelegt wurde.

![Schaltfläche der Garantie](../../.gitbook/assets/module_warranty_garantielabel.png)

Genau wie beim Gewährleistungslabel wird auch beim Klick auf das Garantielabel ein Pop-up mit Informationen angezeigt. Das Label wird automatisch aus den [im Produkt-Editor hinterlegten Daten](warranty.md#produkt-editor) generiert.

![Garantie-Pop-Up](../../.gitbook/assets/module_warranty_garantiepopup.png)

{% hint style="info" %}
Die Anzeige der **Download** und **Drucken** Schaltflächen kann [separat gesteuert](warranty.md#plugin-konfiguration) werden.
{% endhint %}

## Labels in der Bestellbestätigung

Das Plugin kann die Gewährleistungs- und Garantielabel automatisch als PNG-Dateien an die Bestellbestätigung anhängen. Kunden erhalten die Informationen dadurch nach dem Kauf in einer dauerhaft speicherbaren, druckbaren Form.

![Dateianhänge der Bestellbestätigung](../../.gitbook/assets/module_warranty_email-attachments.png)

Aktivieren oder deaktivieren Sie diese Funktion in der [Plugin-Konfiguration](warranty.md#plugin-konfiguration) über die Option **Labels an Bestellbestätigung anhängen**. Die Option ist standardmäßig aktiviert.

Die E-Mail enthält:

- die harmonisierte EU-Mitteilung zur gesetzlichen Gewährleistung,
- für jedes betroffene Produkt ein eigenes GARAN-Label zur Haltbarkeitsgarantie.

Die Anhänge werden in der Sprache der Bestellbestätigung erstellt. Ist die gesetzliche Mitteilung in dieser Sprache nicht verfügbar, wird die englische Version verwendet.

Die eingestellten Anzeigeregeln und Produktausnahmen werden auch beim E-Mail-Versand berücksichtigt. Enthält eine Bestellung keine kennzeichnungspflichtigen Produkte, werden keine Dateien angehängt. Kommt dasselbe Produkt mehrfach in einer Bestellung vor, wird das zugehörige GARAN-Label nur einmal hinzugefügt.

{% hint style="info" %}
Kann ein Anhang nicht erzeugt werden, wird die Bestellbestätigung trotzdem versendet. Der Fehler wird im Systemprotokoll aufgezeichnet.
{% endhint %}

## Einstellungen

### Plugin-Konfiguration

![Die Plugin-Konfiguration im Backend](../../.gitbook/assets/module_warranty_configuration.png)

Die Voreinstellungen für die Labels sowie deren Platzierung und die optionalen Schaltflächen können in der Konfiguration festgelegt werden.

{% hint style="info" %}
Weitere Informationen zur Einrichtung sowie allgemeine Hinweise und Informationen zum Import sind im blauen Kasten zu finden.
{% endhint %}

#### Darstellung als Tab

![Die Tab-Darstellung auf der Produktdetailseite](../../.gitbook/assets/module_warranty_produktdetailseite_tab.png)

Wird „Eigenes Tab” als Position auf der Produktdetailseite ausgewählt, wird je nach Produktdaten das Tab „Gewährleistung” oder „Gewährleistung & Garantie” hinzugefügt. Dieses enthält den Inhalt der entsprechenden Pop-ups.

### Produkt-Editor

![Die Konfiguration im Produkt-Editor](../../.gitbook/assets/module_warranty_produktkonfiguration.png)

Im Produkt-Tab „EU-Garantielabel” können produktspezifische Garantiewerte hinterlegt werden. Auf dieser Grundlage wird das Label anschließend im Frontend generiert.

Die Voreinstellungen der einzelnen Felder lauten wie folgt:

| Option                           | Beschreibung                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| Von Kennzeichnung ausgenommen    | Die Einstellung **Standardmäßig sind alle Produkte...** aus der Plugin-Konfiguration. |
| Garantiedauer                    | Leeres Feld → Das Garantielabel wird nicht angezeigt.                                 |
| Garantiegeber (Marke/Hersteller) | Der Hersteller des Produkts.                                                          |
| Modellkennung                    | Die Herstellerproduktnummer (MPN) des Produkts.                                       |

## Import

Die Daten zur Garantiekennzeichnung lassen sich auch per Produktimport importieren.

In der Importdatei müssen das Schlüsselfeld „SKU” sowie die Felder „DurabilityGuaranteeIssuer”, „DurabilityGuaranteeDurationYears” und „ModelIdentifier” enthalten sein.

{% hint style="info" %}
Im Hinweiskasten der Plugin-Konfiguration steht eine Beispieldatei zum Download bereit.
{% endhint %}
