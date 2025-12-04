# DependingPrices

Mit diesem Plugin lassen sich kundenindividuelle Preise auf Basis von Kundengruppen, Kundennummern, Shop, Sprache und Menge abbilden.

# Funktionsweise

Für jeden Preis, den Sie gezielt ändern möchten, legen Sie einen Datensatz im DependingPrices-Plugin an.  
In diesem Datensatz bestimmen Sie Preis und Berechnungsmethode.

Mögliche Berechnungsmethoden:

- Fester Preis
- Prozentualer Abzug oder Aufschlag vom Originalpreis
- Auf-/Abpreis in Abhängigkeit vom Originalpreis

Die Anwendung eines abweichenden Preises steuern Sie indem Sie Kundengruppe, Kundennummer, Shop und/oder Sprache festlegen.

# Produktdetail

In der Produktdetail-Konfiguration befindet sich das Tab „Preis-Abhängigkeiten“. Hier legen Sie die individuellen Preise für das Produkt fest.  
Sie können entweder ein global definiertes Preiskonstrukt wählen oder die Datensätze für die Preiskonfiguration direkt am Produkt pflegen. Mehr zur globalen Konfiguration finden Sie im Abschnitt Produktgruppen.

So definieren Sie einen abweichenden Preis:

1. Klicken Sie auf „Neu“.
2. Legen Sie Preis und Berechnungsmethode fest.
3. Definieren Sie die Zielgruppe über Kundengruppe, Kundennummer, Shop oder Sprache.

Beispiele und Hinweise:

- Möchten Sie einen abweichenden Preis für einen bestimmten Kunden anbieten, tragen Sie dessen Kundennummer ein (wie im Kundendatensatz hinterlegt).
- Soll der abweichende Preis für eine ganze Kundengruppe gelten, wählen Sie die entsprechende Gruppe.
- Bedingungen wirken kumulativ. Wenn Sie z. B. Kundengruppe und Shop wählen, gilt der abweichende Preis nur für Kunden der gewählten Gruppe im angegebenen Shop. Befindet sich der Kunde in einem anderen Shop, wird der Originalpreis angewendet.
- Ausnahme: Die Kundennummer wirkt shop-, sprach- und kundengruppenübergreifend.

# Attribute

**Einfache Attribute (ohne Kombinationen)**: Ist für das Produkt ein prozentualer Wert oder ein fester Auf-/Abpreis definiert und sind die Kriterien erfüllt, wird dieser auf den finalen Preis angewendet.

**Attributkombinationen**: In der Detailansicht der Attribut-Kombination steht ein eigenes Tab mit derselben Grid zur Verfügung, wie im Tab in der Produktdetailkonfiguration, über die Sie abweichende Preise für diese Attribut-Kombination pflegen können.

# Produktgruppen

Wiederkehrende Regeln müssen nicht pro Produkt gepflegt werden. Legen Sie globale Definitionen an und ordnen Sie diese über Produktgruppen-IDs zu.

Vorgehen:

1. In der Plugin-Konfiguration steht eine Grid für globale Preiskonfigurationen bereit (analog zu Produkt/Attribut-Kombinationen). In dem hier angelegten Datensatz muss eine Produktgruppen-ID festgelegt werden.
2. Im Produkt aktivieren Sie „Globale Konfiguration nutzen“ und hinterlegen die Produktgruppen-ID.
3. Alle für diese Gruppe definierten Datensätze werden auf das Produkt angewendet.

# Plugin-Konfiguration

Hier befindet sich dieselbe Grid wie in der Produktdetail-Konfiguration und bei den Attribut-Kombinationen.  
Der Unterschied: Zusätzlich sind hier **Produkt-ID**, **Attribut-Kombinations-ID** und **Produktgruppen-ID** sichtbar und konfigurierbar.  
Außerdem steht eine Filtermöglichkeit zur Verfügung, da an dieser Stelle alle im Shop hinterlegten Preisdefinitionen angezeigt werden.

Über die Plugin-Einstellungen lassen sich außerdem noch weitere Optionen für die Preisdarstellung nutzen:

- **Kundengruppen für Einkaufpreis** Bestimmt die Kundengruppen, denen der Einkaufspreis von Produkten berechnet werden soll.
- **Kundengruppen für Preisunterdrückung** Bestimmt die Kundengruppen, bei denen kein Preis dargestellt werden soll, wenn kein Kriterium für diese Kundengruppe festgelegt wurde.
- **Staffelpreis als Basis verwenden** Bestimmt, ob der Staffelpreis als Basis für die Preisberechnung verwendet werden soll, wenn für die Kundengruppe des Kunden ein Staffelpreis mit der Menge 1 hinterlegt ist.
- **Staffelpreise verstecken** Bestimmt, ob Staffelpreise versteckt werden, wenn abweichende Preise definert wurden.

# Import & API

Um Datensätze für dieses Plugin zu importieren, führen Sie einen normalen CSV-Import durch **Admin** > **Konfiguration** > **Importieren**.  
Wählen Sie als Schlüsselfeld das Feld `ID`.

Die zu importierende Datei muss folgende Felder enthalten:  
`ID`, `DP_CustomerGroupId`, `DP_LanguageId`, `DP_StoreId`, `DP_CustomerNumber`, `DP_Price`, `DP_CalculationMethod`

Optional können folgende Felder verwendet werden:  
`DP_ItemGroupId`, `DP_VariantCombinationId`

Zusätzlich steht ein WebAPI-Endpoint zur Verfügung, über den Datensätze programmgesteuert eingepflegt werden können.