# Papierkorb

Unter Katalog > Papierkorb finden Sie gelöschte Produkte. Sie können diese prüfen, wiederherstellen oder endgültig löschen. Der Produkt-Papierkorb ist unabhängig vom Papierkorb des Medien-Managers.

![Produkt-Papierkorb mit Filter, Produktliste und Aktionen zum Wiederherstellen und endgültigen Löschen](../../.gitbook/assets/screenshot.png)

## Gelöschte Produkte finden

Standardmäßig zeigt die Liste nur Produkte ohne Auftragszuordnung. Wenn Sie ein gelöschtes Produkt vermissen, prüfen Sie im Filter zuerst Mit Auftragszuordnungen. Wählen Sie Ja für Produkte mit Auftragszuordnung oder heben Sie die Einschränkung auf, um beide Gruppen zu sehen.

Weitere Filter grenzen die Liste beispielsweise nach Produktname, Produkttyp, Warengruppe oder Hersteller ein. Über den Produktnamen öffnen Sie eine schreibgeschützte Detailansicht, um das Produkt vor der Wiederherstellung oder endgültigen Löschung zu prüfen.

## Produkte wiederherstellen

1. Markieren Sie die gewünschten Produkte und klicken Sie auf Wiederherstellen. Für ein einzelnes Produkt können Sie auch die entsprechende Zeilenaktion verwenden.
2. Legen Sie im Dialog unter Veröffentlicht fest, ob die Produkte nach der Wiederherstellung veröffentlicht sein sollen. Mit Nicht spezifiziert behalten sie ihren bisherigen Veröffentlichungsstatus.
3. Bestätigen Sie mit OK. Öffnen Sie die wiederhergestellten Produkte anschließend in der Produktverwaltung und prüfen Sie ihre Einstellungen.

{% hint style="info" %}
Eine Wiederherstellung ist für Notfälle gedacht. Nicht alle Daten können wiederhergestellt werden. Zuordnungen zu Lieferzeiten und Verpackungseinheiten, das Herkunftsland und der Vergleichspreiszusatz (z. B. UVP) müssen Sie bei Bedarf erneut hinterlegen.
{% endhint %}

Die Wiederherstellung kann auch zugehörige gelöschte Produkte, etwa Bestandteile eines Bundles oder zusätzlich erforderliche Produkte, sowie zugeordnete gelöschte Hersteller und Warengruppen einschließlich ihrer übergeordneten Warengruppen wiederherstellen. Prüfen Sie deshalb auch diese Einträge. Die Auswahl unter Veröffentlicht kann ebenfalls auf mit wiederhergestellte Hersteller und Warengruppen wirken.

## Produkte endgültig löschen

Markieren Sie die Produkte, wählen Sie Endgültig löschen und bestätigen Sie die Rückfrage. Für ein einzelnes Produkt steht die Aktion auch an der Tabellenzeile zur Verfügung. Endgültig gelöschte Produkte können über den Papierkorb nicht wiederhergestellt werden.

{% hint style="danger" %}
**Warum lassen sich manche Produkte nicht endgültig löschen?**

Produkte, die einem Auftrag zugeordnet sind, können nicht endgültig gelöscht werden. Smartstore schützt diese Produkte, damit die zugehörigen Auftragsdaten erhalten bleiben. Das gilt auch für „Papierkorb leeren“: Bei einer gemischten Auswahl werden die löschbaren Produkte entfernt; Produkte mit Auftragszuordnung bleiben im Papierkorb. Smartstore meldet, wenn Einträge übersprungen wurden.
{% endhint %}

## Papierkorb leeren

Papierkorb leeren löscht nach einer Bestätigung alle endgültig löschbaren Produkte im Papierkorb. Die Aktion wirkt auf den gesamten Papierkorb, unabhängig von den eingestellten Listenfiltern. Produkte mit Auftragszuordnung bleiben erhalten.

Weitere Informationen zur regulären Bearbeitung finden Sie unter [Produkte erstellen und bearbeiten](produkte-verwalten/produkte-erstellen-und-bearbeiten.md).
