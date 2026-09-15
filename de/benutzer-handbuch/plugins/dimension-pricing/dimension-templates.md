# Maßvorlagen

Maßvorlagen sind wiederverwendbare Datensätze zusätzlicher Produktmaße. Sie können außerdem den [Maß- und Mengenrechner](dimension-and-quantity-calculator.md) auf der Produktdetailseite bereitstellen und Packformeln für die platzsparende Kombination gleichartiger Produkte enthalten.

Sie benötigen keine Maßvorlage, wenn ausschließlich die regulären Produktfelder für Breite, Höhe und Länge verwendet werden und weder ein Maß- und Mengenrechner noch eine Packformel erforderlich ist.

## Maßvorlage anlegen

1. Öffnen Sie die [Konfiguration des Plugins](../dimension-pricing.md#zugriff) und wechseln Sie zur Registerkarte **Maßvorlagen**.
2. Klicken Sie auf **Neue Maßvorlage**.
3. Geben Sie einen administrativen **Namen** ein.
4. Wählen Sie eine **Startvorlage**.
5. Legen Sie die **Anzeigereihenfolge** fest.
6. Speichern Sie die Vorlage. Anschließend bleibt die Bearbeitungsseite geöffnet, sodass Sie die angelegten Maße und Einstellungen direkt prüfen können.

| Startvorlage | Angelegte Inhalte |
| --- | --- |
| Leere Vorlage | Legt keine Maße oder Berechnungsformel an. |
| Breite, Höhe und Länge | Legt die drei Standardmaße `Width`, `Height` und `Length` an. |
| Fläche (Breite × Höhe) | Legt `Width` und `Height` sowie die Formel `Width * Height` an. |
| Volumen (Breite × Höhe × Länge) | Legt `Width`, `Height` und `Length` sowie die entsprechende Volumenformel an. |
| Zuschnitt (Breite × Länge) | Legt `Width` und `Length` sowie die Formel `Width * Length` an. |

## Maße hinzufügen

Öffnen Sie die gespeicherte Vorlage, wechseln Sie zu **Maße** und klicken Sie auf **Neues Maß**.

| Feld | Bedeutung |
| --- | --- |
| Standardmaß | Wählen Sie **Breite**, **Höhe** oder **Länge**, um den zugehörigen Systemnamen automatisch zu übernehmen. Wählen Sie **Eigenes Maß** für weitere Maße. |
| Systemname | Technische Bezeichnung des Maßes in Berechnungs- und Packformeln. Bei einem eigenen Maß vergeben Sie den Systemnamen selbst. |
| Minimalwert | Kleinster administrativ oder vom Kunden eingegebener Wert. |
| Maximalwert | Größter administrativ oder vom Kunden eingegebener Wert. |
| Standardwert | Wert, der für ein Produkt gilt, solange dort kein abweichender Wert eingetragen ist. |
| Bezeichnung | Sichtbare Bezeichnung des Maßes. |
| Hilfetext | Erläuterung für Administratoren oder Kunden. |
| Anzeigereihenfolge | Niedrigere Werte erscheinen zuerst. |
| Im Frontend anzeigen | Zeigt das für das Produkt angewendete Maß im Bereich **Maße** der Produktdetailseite an. |

{% hint style="warning" %}
Wenn die gewählte [Quelle für Breite, Höhe und Länge](settings.md#quelle-für-breite-höhe-und-länge) Maße aus der Vorlage verwendet, benötigt sie Maße mit den Systemnamen `Width`, `Height` und `Length`.
{% endhint %}

## Maßvorlagen zuweisen

Maßvorlagen lassen sich als allgemeine Vorgabe, über Warengruppen oder direkt an einzelnen Produkten festlegen. Für jedes Produkt wird die angewendete Maßvorlage in dieser Reihenfolge ermittelt:

1. Vorgabe am Produkt
2. Vorgabe der spezifischsten zugeordneten Warengruppe
3. globale Standardmaßvorlage
4. keine Maßvorlage

Sie können deshalb mit einer globalen Vorlage beginnen, Warengruppen abweichend konfigurieren und nur noch einzelne Produkte gesondert behandeln.

### Globale Vorgabe festlegen

1. Öffnen Sie die [Einstellungen](settings.md#globale-standardmaßvorlage) des Plugins.
2. Wählen Sie unter **Globale Standardmaßvorlage** die gewünschte Vorlage.
3. Speichern Sie die Einstellungen.

Die globale Vorgabe gilt für alle Produkte, für die weder über eine Warengruppe noch direkt am Produkt eine andere Auswahl getroffen wurde. Mit **Keine Maßvorlage** deaktivieren Sie die globale Vorgabe.

### Vorgabe für eine Warengruppe festlegen

1. Öffnen Sie im Administrationsbereich **Katalog** &rarr; **Warengruppen**.
2. Öffnen Sie die gewünschte Warengruppe und wechseln Sie zur Registerkarte **Maßberechnung**.
3. Wählen Sie unter **Verwendung** den gewünschten Modus.
4. Wählen Sie bei **Andere Maßvorlage auswählen** die Vorlage aus.
5. Legen Sie bei Bedarf die **Priorität** fest und speichern Sie die Warengruppe.

| Modus | Verhalten |
| --- | --- |
| Automatisch (Vorgabe übernehmen) | Übernimmt die Vorgabe einer übergeordneten Warengruppe oder, wenn dort keine festgelegt ist, die globale Vorgabe. |
| Keine Maßvorlage | Verwendet für diese Warengruppe und ihre untergeordneten Warengruppen keine Maßvorlage. Eine spezifischere Warengruppen- oder Produktvorgabe kann dies wieder ändern. |
| Andere Maßvorlage auswählen | Verwendet die ausgewählte Maßvorlage für die Warengruppe und ihre untergeordneten Warengruppen. Eine spezifischere Vorgabe hat Vorrang. |

Die Maske zeigt an, welche Vorgabe ohne eine eigene Auswahl geerbt würde und woher sie stammt.

Ist ein Produkt mehreren Warengruppen zugeordnet, wird zunächst die Vorgabe der tiefsten und damit spezifischsten Warengruppe verwendet. Liegen mehrere Vorgaben auf derselben Ebene, entscheidet die niedrigere **Priorität**. Ist auch diese identisch, entscheidet die Anzeigereihenfolge der Warengruppenzuordnungen am Produkt.

### Vorgabe für ein Produkt festlegen

1. Öffnen Sie im Administrationsbereich **Katalog** &rarr; **Produkte**.
2. Öffnen Sie das gewünschte Produkt und wechseln Sie zur Registerkarte **Maße**.
3. Wählen Sie unter **Verwendung** den gewünschten Modus.
4. Wählen Sie bei **Andere Maßvorlage auswählen** die Vorlage aus.
5. Tragen Sie nur die Maße ein, die für dieses Produkt vom Vorlagenwert abweichen, und speichern Sie das Produkt.

| Modus | Verhalten |
| --- | --- |
| Automatisch (Vorgabe übernehmen) | Verwendet die Vorgabe der spezifischsten Warengruppe oder die globale Vorgabe. |
| Keine Maßvorlage | Deaktiviert die Maßvorlage für dieses Produkt. |
| Andere Maßvorlage auswählen | Verwendet für dieses Produkt die ausgewählte Maßvorlage. |

Unter **Angewendete Maßvorlage** sehen Sie die aktuell verwendete Vorlage und deren Herkunft. Eine Vorgabe am Produkt hat immer Vorrang vor Warengruppen und der globalen Vorgabe.

{% hint style="warning" %}
Wenn mehrere gleichrangige Warengruppen unterschiedliche Vorgaben liefern, erscheint am Produkt ein Hinweis. Prüfen Sie dann die Prioritäten und die Anzeigereihenfolge der Warengruppenzuordnungen oder treffen Sie direkt am Produkt eine eindeutige Auswahl.
{% endhint %}

### Produktspezifische Maßwerte verwenden

Die Maßfelder am Produkt sind Abweichungen von den Standardwerten der angewendeten Maßvorlage. Lassen Sie ein Feld leer, wenn der Standardwert der Vorlage verwendet werden soll.

Ändern Sie später den Standardwert in der Maßvorlage, gilt der neue Wert automatisch für alle Produkte ohne produktspezifische Abweichung. Löschen Sie einen eingetragenen Produktwert, um wieder den jeweils aktuellen Vorlagenwert zu verwenden.

Wenn Sie am Produkt **Keine Maßvorlage** auswählen, werden dort gespeicherte produktspezifische Maßwerte entfernt.

## Maßvorlage duplizieren oder löschen

Öffnen Sie eine vorhandene Maßvorlage und klicken Sie auf **Duplizieren**, um eine Kopie einschließlich der Maße, Packformeln und Übersetzungen anzulegen. Die Kopie wird anschließend zur Bearbeitung geöffnet und kann unabhängig angepasst werden.

Beim Löschen zeigt die Bestätigung an, wie vielen Produkten und Warengruppen die Vorlage direkt zugeordnet ist. Ist sie als globale Standardmaßvorlage ausgewählt, wird auch darauf hingewiesen. Durch das Löschen werden diese Zuordnungen sowie die enthaltenen Maße und Packformeln entfernt.

## Packformeln

Packformeln eignen sich für gleichartige, nicht quaderförmige Produkte, die sich zu einem kleineren quaderförmigen Packelement zusammenlegen lassen.

Öffnen Sie eine Maßvorlage und wechseln Sie zu **Packformeln**. Für jede Formel legen Sie fest:

- die Anzahl der gemeinsam berechneten Artikel,
- die Breite des Packelements,
- die Höhe des Packelements,
- die Länge des Packelements,
- die Priorität; niedrigere Werte werden zuerst ausgewertet.

Beispiel: Zwei L-förmige Teile lassen sich ineinanderlegen. Höhe und Länge bleiben unverändert, die kombinierte Breite besteht aus `Width + A`.

```text
Anzahl zusammengefasster Artikel: 2
Breite des Packelements: Width + A
Höhe des Packelements: Height
Länge des Packelements: Length
Priorität: 0
```

Wenn Formeln für Gruppen zu 10 und zu 2 Artikeln vorhanden sind und die Zehnergruppe die höhere Priorität besitzt, werden 25 Artikel als zwei Zehnergruppen, zwei Zweiergruppen und ein einzelner Artikel behandelt.

Unter jedem Formelfeld werden die verfügbaren Variablen als Schaltflächen angeboten. Klicken Sie auf eine Variable, um sie an der aktuellen Cursorposition einzufügen.

Die Formeln werden beim Speichern geprüft. Unbekannte Variablen oder syntaktisch fehlerhafte Ausdrücke werden direkt am betreffenden Feld gemeldet. Testen Sie Mengen dennoch unmittelbar unter, genau auf und unmittelbar über jeder Gruppengröße.

Wird ein Systemname bereits in einer Formel verwendet, passen Sie zuerst die betreffenden Formeln an, bevor Sie das Maß umbenennen oder löschen.

## Wenn Produktmaße nicht verwendet werden

- Prüfen Sie die [Quelle für Breite, Höhe und Länge](settings.md#quelle-für-breite-höhe-und-länge).
- Verwenden Sie für eigene Standardmaße die Systemnamen `Width`, `Height` und `Length`.
- Prüfen Sie am Produkt, welche Maßvorlage angewendet wird und woher die Vorgabe stammt.
- Berücksichtigen Sie Maße von Varianten oder Attributkombinationen, da diese die Basiswerte des Produkts beeinflussen können.
