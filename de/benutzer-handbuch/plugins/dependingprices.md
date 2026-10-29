# DependingPrices

Mit dem kostenpflichtigen Enterprise-Plugin **DependingPrices** hinterlegen Sie unterschiedliche Preise für dasselbe Produkt, etwa für Händler, einzelne Kunden oder einen bestimmten Shop. Das Plugin muss installiert und lizenziert sein. In der deutschen Administration finden Sie seine Funktionen unter **Preis-Abhängigkeiten**.

## Preisabhängigkeiten verstehen <a href="#funktionsweise" id="funktionsweise"></a>

Jede Zeile in der Tabelle beschreibt eine Preisabhängigkeit: Sie legen einen Preis oder eine Preisänderung fest und bestimmen, für wen und ab welcher Menge sie gilt. Smartstore wählt für den Kunden und seine Bestellung einen passenden Eintrag aus. Mehrere Einträge werden nicht zusammengerechnet.

Für ein einzelnes Produkt pflegen Sie die Einträge direkt am Produkt. Sollen mehrere Produkte dieselben Preise erhalten, verwenden Sie eine gemeinsame Produktgruppen-ID. Für Attributkombinationen können Sie eigene Einträge anlegen.

## Preis für ein Produkt festlegen <a href="#produktdetail" id="produktdetail"></a>

1. Öffnen Sie ein gespeichertes Produkt und wechseln Sie zu **Preis-Abhängigkeiten**.
2. Lassen Sie **Globale Konfiguration nutzen** ausgeschaltet, wenn Sie den Preis direkt an diesem Produkt pflegen möchten.
3. Klicken Sie auf **Neu**. Tragen Sie **Preis** und **Berechnungsmethode** ein und legen Sie die gewünschten Bedingungen fest. Die Felder sind nachfolgend erläutert.
4. Übernehmen Sie die Tabellenzeile mit **Änderungen speichern**.

### Preis und Berechnungsmethode

Im Feld **Preis** geben Sie je nach Berechnungsmethode einen Geldbetrag oder einen Prozentsatz ein. Geldbeträge werden in der Basiswährung des Shops gepflegt.

Ein **fester Wert** legt den abweichenden Stückpreis unmittelbar fest. Für einen **Auf-/Abpreis** oder eine **prozentuale Änderung** verwendet Smartstore normalerweise den regulären Produktpreis als Berechnungsbasis. Bei einer Attributkombination mit eigenem Preis ist es deren Preis. Ein Aktionspreis ersetzt diese Berechnungsbasis nicht.

| **Berechnungsmethode** | **Beispiel bei einer Berechnungsbasis von 100 €**                                            |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| Fester Wert            | Preis 80 ergibt einen Stückpreis von 80 €.                                                   |
| Auf-/Abpreis           | Preis 10 erhöht den Stückpreis auf 110 €. Preis −10 vermindert ihn auf 90 €.                 |
| Prozentual             | Preis 10 vermindert den Stückpreis um 10 % auf 90 €. Preis −10 erhöht ihn um 10 % auf 110 €. |

Mit der Plugin-Einstellung **Staffelpreis als Basis verwenden** können Sie für Auf-/Abpreise und prozentuale Änderungen stattdessen einen ermittelten positiven Staffelpreis als Berechnungsbasis verwenden.

{% hint style="info" %}
Das Vorzeichen beim Auf-/Abpreis wirkt hier anders als bei regulären Staffelpreisen: Ein positiver Wert erhöht den Preis. Ein Preiswert von 0 ist nur mit Preis auf Anfrage zulässig; das gilt auch für Import und API.
{% endhint %}

Aktivieren Sie **Preis auf Anfrage**, wenn der betreffende Kunde statt eines bezifferten Preises einen Anfragehinweis erhalten soll.

### Für wen und ab welcher Menge gilt der Preis?

Beschränken Sie den Eintrag nur dort, wo es für Ihren Anwendungsfall erforderlich ist. Ein nicht eingeschränktes Feld gilt für alle entsprechenden Kunden, Shops oder Sprachen.

| **Feld**     | **Verwendung**                                                                                                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kundengruppe | Wählen Sie beispielsweise Ihre Händler-Kundengruppe. Der Kunde muss dieser aktiven Kundengruppe angehören.                                                                             |
| Kundennummer | Tragen Sie die Kundennummer aus dem Kundendatensatz ein, um einen individuellen Kundenpreis festzulegen. Für direkt zugeordnete Kundenpreise gilt die unten beschriebene Vorrangregel. |
| Shop         | Wählen Sie den Shop, in dem der Eintrag gelten soll.                                                                                                                                   |
| Sprache      | Wählen Sie die Shop-Sprache, für die der Eintrag gelten soll.                                                                                                                          |
| Menge        | Tragen Sie die Mindestbestellmenge ein. Ohne Angabe oder bei 0 besteht keine Mengenbeschränkung.                                                                                       |

Ohne einen direkt zugeordneten Kundennummer-Preis müssen die eingetragenen Bedingungen gemeinsam passen. Ein Händlerpreis für Shop A gilt somit nur für Kunden der betreffenden Händlergruppe in Shop A, sobald die Mindestbestellmenge erreicht ist.

### Individuelle Kundenpreise und mehrere Kundengruppen

Ein direkt zugeordneter Preis mit passender **Kundennummer** hat Vorrang vor allgemeinen Preisen und Kundengruppen-Preisen. Dabei wird die Mindestbestellmenge geprüft; Shop, Sprache und Kundengruppe begrenzen diesen individuellen Kundenpreis nicht zusätzlich.

Sie können für denselben Kunden mehrere Mengenstaffeln hinterlegen. Bei einem Preis von 90 € ab 1 Stück und 75 € ab 10 Stück gilt für 9 Stück der Preis von 90 € und ab 10 Stück der Preis von 75 €.

Gehört ein Kunde mehreren aktiven Kundengruppen an, werden die für diese Gruppen ausgewählten Preise anhand ihrer berechneten Beträge verglichen. Ein passender Kundengruppen-Eintrag mit **Preis auf Anfrage** hat dabei Vorrang vor einem bezifferten Kundengruppen-Preis. Ein direkt zugeordneter Kundennummer-Preis bleibt vorrangig.

Legen Sie für dieselbe Zuordnung und identische Bedingungen nur einen Eintrag an. Doppelte Einträge werden nicht zusammengeführt; für solche Duplikate ist keine Auswahl des günstigsten Endpreises zugesichert.

Vorhandene Zeilen können Sie bearbeiten, einzeln löschen oder für eine gemeinsame Löschung markieren. **Abbrechen** verwirft noch nicht gespeicherte Tabellenänderungen.

## Gemeinsame Preise für mehrere Produkte <a href="#produktgruppen" id="produktgruppen"></a>

Mit einer **Produktgruppen-ID** verwenden mehrere Produkte dieselben Preisabhängigkeiten. Die ID ist eine von Ihnen vergebene positive Zahl. Eine solche Produktgruppe ist unabhängig von den Warengruppen des Shops und vom Produkttyp Gruppenprodukt.

1. Öffnen Sie die Plugin-Konfiguration und dort **Produktgruppen**.
2. Legen Sie die gemeinsamen Preisabhängigkeiten an und tragen Sie bei diesen Einträgen dieselbe **Produktgruppen-ID** ein.
3. Öffnen Sie das erste Produkt. Aktivieren Sie unter **Preis-Abhängigkeiten** die Option **Globale Konfiguration nutzen** und hinterlegen Sie die Produktgruppen-ID.
4. Speichern Sie das Produkt und ordnen Sie die weiteren Produkte auf dieselbe Weise zu.

Die globale Konfiguration blendet die lokale Tabelle am Produkt aus. Bereits vorhandene lokale Einträge bleiben jedoch bestehen und können weiterhin bei der Preisauswahl berücksichtigt werden.

Die Tabelle **Produktgruppen** zeigt auch direkt zugeordnete Einträge. Über **Produkt-ID** oder **Attributkombination-ID** können Sie dort einen Eintrag gezielt zuordnen. Die Filter helfen bei der Suche nach Kundennummer, Kundengruppe, Sprache, Shop, Berechnungsmethode, Produkt-ID und Produktgruppen-ID.

## Preise für Varianten <a href="#attribute" id="attribute"></a>

Öffnen Sie die gewünschte **Attributkombination** und wechseln Sie dort zu **Preis-Abhängigkeiten**. Die Tabelle bedienen Sie wie am Produkt; die Einträge gehören hier zur gewählten Kombination.

Standardmäßig verwendet Smartstore bei einer konkreten Variantenauswahl die Preisabhängigkeiten der Kombination. Fehlt dort ein passender Eintrag, wird nicht automatisch auf die direkt am Produkt hinterlegten Preisabhängigkeiten zurückgegriffen. Zugeordnete Produktgruppen-Einträge können weiterhin berücksichtigt werden.

Sollen stattdessen die Preisabhängigkeiten des Produkts gelten, aktivieren Sie in den Plugin-Einstellungen **Attribut-Kombinationspreise auf Basis der Produktkonfiguration berechnen**. Die Option bestimmt, welche DependingPrices-Einträge verwendet werden. Das Anlegen von Varianten erläutert [Wie funktionieren Produktvarianten?](../../verwalten/katalog/produkte-verwalten/wie-funktionieren-produktvarianten.md).

{% hint style="info" %}
Attributkombinationen mit eigenem Preis werden unterstützt. Zusätzliche Auf- und Abschläge einzelner Attributwerte werden zusammen mit DependingPrices nicht unterstützt.
{% endhint %}

## Plugin-Einstellungen <a href="#plugin-konfiguration" id="plugin-konfiguration"></a>

Die Plugin-Konfiguration enthält die Bereiche **Produktgruppen** und **Einstellungen**. Wählen Sie unter Einstellungen bei mehreren Shops zuerst den gewünschten Geltungsbereich.

| **Einstellung**                                                          | **Wirkung**                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kundengruppen für Einkaufpreis                                           | Verwendet den Einkaufspreis, wenn kein passender DependingPrices-Eintrag vorliegt und der Kunde einer der ausgewählten aktiven Kundengruppen angehört. Ein passender Preiseintrag hat Vorrang. Ein Einkaufspreis von 0 wird nicht verwendet. |
| Kundengruppen für Preisunterdrückung                                     | Blendet Preis und Kaufaktionen für die ausgewählten Kundengruppen aus, wenn die Anzeigeprüfung keinen ausgewählten Eintrag mit positivem Preis findet. Das steuert die Darstellung und ersetzt keine Zugriffs- oder Kaufberechtigung.        |
| Staffelpreis als Basis verwenden                                         | Verwendet einen ermittelten positiven Staffelpreis als Berechnungsbasis für Auf-/Abpreise und prozentuale Änderungen. Das ist nicht auf Staffelpreise ab Menge 1 beschränkt.                                                                 |
| Staffelpreise verstecken                                                 | Steuert das Ausblenden der Staffelpreisanzeige auf Produktdetailseiten bei abweichenden Preisen oder Verkauf zum Einkaufspreis. Die Staffelpreisberechnung bleibt aktiv.                                                                     |
| Attribut-Kombinationspreise auf Basis der Produktkonfiguration berechnen | Verwendet die DependingPrices-Einträge des Produkts anstelle der Einträge der ausgewählten Attributkombination.                                                                                                                              |

## Den resultierenden Verkaufspreis prüfen

Die gewählte Preisabhängigkeit liefert einen abweichenden Preis. Produktrabatte und die reguläre Staffelpreisberechnung können diesen anschließend noch verändern. Ein fester DependingPrices-Preis ist deshalb nicht automatisch der endgültige Verkaufspreis. Das allgemeine Zusammenspiel erläutert [Preisregeln verstehen](../../verwalten/katalog/produkte-verwalten/preisregeln-verstehen.md); die Einrichtung der regulären Preise und Staffeln beschreibt [Produktpreis festlegen](../../verwalten/katalog/produkte-verwalten/produktpreis-festlegen.md).

Bei aktivierter direkter Kundenpreiseingabe oder **Preis auf Anfrage** am Produkt wird die normale Preisberechnung einschließlich DependingPrices übersprungen. Bei Gruppenprodukten gelten die Preise der verknüpften Einzelprodukte; DependingPrices ist kein eigener Preisrechner für einen Bundle-Gesamtpreis.

Kontrollieren Sie nach der Einrichtung den Preis für den betreffenden Kunden im gewünschten Shop, bei Varianten mit der konkreten Auswahl und bei Mengenpreisen mit der jeweiligen Bestellmenge. Vergleichen Sie dabei Produktliste, Produktdetailseite und Warenkorb.

## Import & API

Die CSV-Verarbeitung läuft als Erweiterung des [Produktimports](../../verwalten/katalog/produkte-verwalten/produkte-importieren-exportieren.md). Ordnen Sie die Zeilen dem jeweiligen Produkt zu, beispielsweise über dessen **ID**. Die ID bezeichnet hier das Produkt, nicht die ID eines DependingPrices-Datensatzes. Eine Beispieldatei ist in der Plugin-Konfiguration verlinkt.

Eine Zeile wird für DependingPrices verarbeitet, wenn sie **DP\_Price** oder **DP\_CustomerGroupPrices** enthält. Folgende Zusatzspalten werden ausgewertet:

| **Spalte**                                       | **Inhalt**                                                                                                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DP\_Price                                        | Preiswert für einen einzelnen Datensatz.                                                                                                                                                       |
| DP\_CalculationMethod                            | Fixed, Adjustment oder Percental, mit genau dieser Schreibweise.                                                                                                                               |
| DP\_CustomerGroupId, DP\_LanguageId, DP\_StoreId | IDs der gewünschten Kundengruppe, Sprache und des Shops. Nicht gesetzte Einschränkungen werden als 0 verarbeitet.                                                                              |
| DP\_CustomerNumber                               | Kundennummer für einen kundenspezifischen Datensatz.                                                                                                                                           |
| DP\_ItemGroupId, DP\_VariantCombinationId        | Produktgruppen-ID bzw. Attributkombination-ID.                                                                                                                                                 |
| DP\_Quantity                                     | Mindestbestellmenge des Datensatzes. Ein leerer Wert oder 0 bedeutet keine Mengenbeschränkung. Die Menge unterscheidet Preisstaffeln mit ansonsten gleichen Zuordnungsbedingungen.             |
| DP\_PriceOnRequest                               | true aktiviert Preis auf Anfrage, false deaktiviert es. Ein leerer Wert erhält bei einem vorhandenen Datensatz dessen Einstellung. Ein Preiswert von 0 ist nur bei Preis auf Anfrage zulässig. |
| DP\_CustomerGroupPrices                          | Mehrere Kundengruppenpreise in einer Zeile, etwa 1:90;2:80. Je Eintrag stehen Kundengruppen-ID und Preis, getrennt durch einen Doppelpunkt; Einträge werden durch Semikolon getrennt.          |
| DP\_Delete                                       | Mit true wird der anhand der Zuordnungsbedingungen gefundene Datensatz gelöscht. Ohne Treffer bleibt der Datenbestand unverändert; es wird kein Datensatz angelegt.                            |

Der Import sucht vorhandene Datensätze anhand des Produkts, der jeweiligen Zuordnungsbedingungen und der Mindestbestellmenge. So können Sie bei sonst gleichen Bedingungen mehrere Mengenstaffeln getrennt importieren. Eine leere Mindestbestellmenge und 0 bezeichnen denselben uneingeschränkten Eintrag. Geben Sie beim Ändern oder Löschen einer Staffel die zugehörige Mindestbestellmenge an.

Mit installiertem und eingerichtetem **Web API**-Plugin steht außerdem die OData-Entität **DependingPricesRecords** bereit. Sie unterstützt Lesen, Anlegen, Ändern und Löschen von Datensätzen, einschließlich Menge und Preis auf Anfrage. Dafür sind die passenden DependingPrices-Berechtigungen und ein autorisierter API-Zugang erforderlich.
