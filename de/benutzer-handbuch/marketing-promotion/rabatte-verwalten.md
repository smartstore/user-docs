# Rabatte verwalten

Mit Rabatten senken Sie gezielt Produktpreise oder Beträge im Warenkorb. Sie können festlegen, worauf ein Rabatt wirkt, wann er gilt und ob ein Rabattcode oder bestimmte Warenkorbbedingungen nötig sind.

## Rabatte finden und anlegen

Öffnen Sie **Admin > Marketing > Rabatte**. Die Übersicht zeigt vorhandene Rabatte mit Typ, Gültigkeitszeitraum, Wert, Rabattcodepflicht und der Anzahl zugeordneter Regeln. Über das Filtersymbol suchen Sie nach Name, Rabatttyp, Prozentwert und Rabattcodepflicht. Klicken Sie auf einen Namen, um den Rabatt zu bearbeiten, oder auf **Neu**, um ihn anzulegen. Markierte Rabatte können Sie in der Übersicht löschen.

## Den passenden Rabatttyp wählen

Der Rabatttyp bestimmt, auf welchen Betrag der Rabatt angewendet wird. Wählen Sie ihn beim Anlegen im Feld **Rabatttyp**:

**Bezogen auf Produkte**: Der Rabatt gilt für die Produkte, denen Sie ihn zuweisen.

**Bezogen auf Warengruppen**: Der Rabatt gilt für Produkte der zugewiesenen Warengruppen.

**Bezogen auf Hersteller**: Der Rabatt gilt für Produkte der zugewiesenen Hersteller.

**Bezogen auf Zwischensumme**: Der Rabatt wird auf die Zwischensumme des Warenkorbs angewendet.

**Bezogen auf Versandkosten**: Der Rabatt vermindert die Versandkosten.

**Bezogen auf Gesamtsumme**: Der Rabatt wird auf die Gesamtsumme des Auftrags angewendet.

Bei Produkt-, Warengruppen- und Herstellerrabatten ordnen Sie den Rabatt in der Bearbeitung des jeweiligen Produkts, der Warengruppe oder des Herstellers über das Feld **Rabatte**. In der Rabattbearbeitung sehen Sie die zugeordneten Produkte, Warengruppen oder Hersteller. Klicken Sie auf einen Namen, um den Eintrag zu öffnen und die Zuordnung dort zu ändern.

## Rabattwert und Zeitraum festlegen

Tragen Sie unter **Name** eine aussagekräftige Bezeichnung für die Verwaltung ein. Anschließend legen Sie den Wert und bei Bedarf den Zeitraum fest:

**Als Prozentwert**: Aktivieren Sie diese Option für einen prozentualen Rabatt. Danach geben Sie den Wert unter **Rabatt in %** ein. Ohne diese Option erfassen Sie einen festen **Rabattbetrag** in der primären Shopwährung. Es erscheint jeweils nur das passende Eingabefeld.

**Anfangsdatum** und **Enddatum**: Begrenzen Sie damit den Zeitraum, in dem der Rabatt gültig ist. Ohne eingetragenes Datum bleibt die jeweilige Grenze offen.

**Angebotsrestzeit, ab der ein Countdown angezeigt werden soll**: Geben Sie bei einem zeitlich begrenzten Rabatt mit Enddatum die verbleibenden Stunden an, ab denen auf der Produktdetailseite ein Countdown erscheinen soll. Ein hier eingetragener Wert ersetzt die entsprechende systemweite Einstellung für diesen Rabatt.

**Angebots-Badge Text**: Legen Sie bei Bedarf einen eigenen Text für das Angebots-Badge fest. Sie können den Text je Sprache eingeben. Ein eigener Text ersetzt die systemweite Beschriftung, sofern für den berechneten Produktpreis ein Angebots-Badge angezeigt wird.

## Rabattcode und Nutzung begrenzen

**Rabattcode erforderlich**: Aktivieren Sie diese Option, wenn Kunden den Rabatt erst durch Eingabe eines Codes im Warenkorb erhalten sollen. Dann wird das Feld **Rabattcode** eingeblendet; tragen Sie dort den Code ein, den Sie weitergeben möchten. Ohne diese Option ist kein Code nötig.

**Gültigkeit**: Diese Auswahl begrenzt die Anzahl der Anwendungen des Rabatts, unabhängig davon, ob ein Rabattcode erforderlich ist. **Unbegrenzt** setzt keine Nutzungsgrenze. **Nur N mal** begrenzt die Anwendungen insgesamt. **N mal pro Benutzer** begrenzt sie für einen registrierten Kunden.

**Wie oft soll der Rabatt angewendet werden**: Dieses Feld erscheint bei den beiden begrenzten Optionen. Geben Sie die maximal zulässige Anzahl ein. Für Gastkunden wird die Begrenzung **N mal pro Benutzer** nicht durchgesetzt; wählen Sie für eine allgemeine Obergrenze **Nur N mal**.

## Bedingungen mit Regeln festlegen

Im Feld Voraussetzungen wählen Sie bestehende Warenkorbregeln aus. Sind mehrere Regelsätze zugeordnet, genügt ein erfüllter Regelsatz. Innerhalb eines Regelsatzes legen Sie fest, welche Bedingungen gemeinsam gelten. Regeln erstellen und bearbeiten Sie unter Admin > Marketing > Warenkorbregeln. Aufbau und Test erläutert die Seite [Regeln](https://docs.smartstore.com/user/docs/verwalten/konfiguration/regeln).

Beispiel: Soll ein Rabatt erst ab einer bestimmten Warenkorb-Zwischensumme gelten, erstellen Sie dafür eine Warenkorbregel und weisen sie anschließend dem Rabatt zu. Ohne zugewiesene Regelsets besteht keine zusätzliche Bedingung aus Regeln.

## Anwendungen im Nutzungsprotokoll prüfen

Nach dem Speichern eines Rabatts steht die Registerkarte **Nutzungsprotokoll** zur Verfügung. Sie zeigt für jede erfasste Anwendung das Datum und einen Link zum zugehörigen Auftrag. Einzelne Einträge und markierte Einträge können gelöscht werden.

Die Nutzungsgrenzen werden anhand der Einträge im Nutzungsprotokoll geprüft. Wenn Sie einen Eintrag löschen, zählt diese Anwendung für die Begrenzung nicht mehr.

## Beispielszenarien

Die folgenden Beispiele zeigen, wie Sie Rabatttyp, Zuordnung und Warenkorbregeln für typische Aktionen kombinieren. Die Bedingungen erstellen Sie als Warenkorbregel und wählen den Regelsatz anschließend im Rabatt unter **Voraussetzungen** aus.

### Wiederverkäufer gezielt rabattieren

Wählen Sie **Bezogen auf Produkte** oder **Bezogen auf Warengruppen** und ordnen Sie den Rabatt den gewünschten Produkten oder Warengruppen zu. Erstellen Sie eine Warenkorbregel mit der Bedingung **In Kundengruppe** für die Wiederverkäufer und weisen Sie den Regelsatz dem Rabatt zu.

### Stammkunden ab einem bisherigen Umsatz belohnen

Wählen Sie **Bezogen auf Zwischensumme** oder **Bezogen auf Gesamtsumme**. Mit der Warenkorbregel **Ausgegebener Betrag** legen Sie fest, wie viel ein Kunde bereits ausgegeben haben muss. Dafür zählen abgeschlossene Aufträge des Kunden im aktuellen Shop. Möchten Sie stattdessen den Wert des aktuellen Warenkorbs prüfen, verwenden Sie eine Regel für die Warenkorb-Zwischensumme.

### Eine Aktion zeitlich begrenzen

Für einen Schlussverkauf oder eine andere befristete Aktion legen Sie einen passenden Rabatt an und tragen **Anfangsdatum** sowie **Enddatum** ein. Ob der Rabatt für Produkte oder für einen Warenkorbbetrag gilt, bestimmen Sie unabhängig davon mit dem Rabatttyp.

### Ein Produkt beim Kauf eines anderen kostenlos anbieten

Legen Sie für das Gratisprodukt einen Rabatt vom Typ **Bezogen auf Produkte** mit **Als Prozentwert** und **Rabatt in %** = 100 an. Ordnen Sie den Rabatt dem Gratisprodukt zu und verknüpfen Sie eine Warenkorbregel **Produkt im Warenkorb** für das Produkt, das gekauft werden muss. Kunden müssen das Gratisprodukt selbst in den Warenkorb legen. Sind mehrere Stück davon im Warenkorb, werden alle Stücke rabattiert. Diese Einrichtung begrenzt die Aktion nicht auf genau ein Gratisstück.

### Einen Rabatt bei Wiederverfügbarkeit anbieten

Wenn Kunden für ein Produkt eine Benachrichtigung bei Wiederverfügbarkeit erhalten, können Sie einen Rabattcode in die Nachrichtenvorlage **Customer.BackInStock** aufnehmen. Legen Sie den Rabatt und den Code zuvor selbst an. Soll jeder registrierte Kunde den Rabatt nur einmal nutzen, wählen Sie **N mal pro Benutzer** und tragen **1** ein. Die Nachrichtenvorlage erzeugt keine individuellen Codes. Die Bearbeitung der Vorlage ist unter [Nachrichtenvorlagen anpassen](https://docs.smartstore.com/user/docs/verwalten/content-management/nachrichtenvorlagen-anpassen) beschrieben.

### Eine bestimmte Zahlart fördern

Legen Sie beispielsweise einen Rabatt vom Typ **Bezogen auf Gesamtsumme** an. Eine Warenkorbregel mit der Bedingung **Zahlart** beschränkt ihn auf die gewünschte Zahlungsart. Der Rabatt wird erst nach Auswahl dieser Zahlart im Checkout berücksichtigt.

### Newsletter-Abonnenten einen Rabatt geben

Mit der Warenkorbregel **Newsletter abonniert** beschränken Sie einen Rabatt auf Kunden mit aktivem Newsletter-Abonnement. Die Anmeldung allein erstellt oder versendet keinen Rabattcode. Wenn Sie einen Code verwenden möchten, müssen Sie ihn im Rabatt anlegen und selbst über eine passende Nachricht oder Kampagne mitteilen. Die Option **N mal pro Benutzer** begrenzt die Nutzung nur für registrierte Kunden.
