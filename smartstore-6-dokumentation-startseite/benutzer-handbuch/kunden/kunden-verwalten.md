# Kunden verwalten

Jedes Konto, das in Smartstore angelegt wird, ist ein Kundenkonto welches unterschiedlichen Kundengruppen wie Gäste, Administratoren, Registriert u.s.w.. Deshalb werden selbst Besucher, die Ihren Shop gerade erst betreten haben oder sich nur registriert, aber nichts gekauft haben, intern als Kunden behandelt. Sie können Ihre Kunden über **Kunden > Kunden** verwalten. Hier können Sie die Kunden Ihres Shops anhand der zugeordneten Kundengruppen filtern oder Kunden über ihre E-Mail-Adresse, Nutzernamen, Vor- und Nachname, Geburtsdatum oder Unternehmen suchen.

![](./attachments/Kunden_verwalten_1.png)

## Kunden-Detailansicht

Indem Sie in der Tabelle auf eine E-Mail-Adresse oder den **Bearbeiten**\-Link klicken, können Sie die Kunden-Detailansicht einsehen über welche Sie Ihren Kunden eine E-Mail oder PM senden oder das Kundenkonto löschen. 

![](./attachments/benutzerdaten.PNG)

### Registerkarte Benutzerinformation

| **Feld** | **Beschreibung** |
| --- | --- |
| Benutzername | Der Benutzername des Kunden. |
| Passwort | Passwort des Kunden. Das Feld enthält keine Daten, da das Passwort des Kunden vertraulich ist. Der Zweck des Feldes besteht darin, dass Sie das Passwort des Kunden ändern können. |
| Admin-Kommentar | Kommentar für internen Gebrauch. Wird nicht veröffentlicht. |
| Mehrwertsteuerfrei | Legt fest, ob der Kunde von der Mehrwertsteuer befreit ist. (Nicht relevant in deutschem Recht) |
| Steuernummer | Steuernummer mit vorangestelltem Länderkennzeichen (z. B. GB 111 111 11). |
| Affiliate | Wenn der Kunde durch ein Partnerprogramm zu Ihnen kam, wird der verknüpfte Affiliate hier verzeichnet, so dass Sie ihn direkt ansteuern können. Für weitere Informationen zu Partnerprogrammen lesen Sie bitte [Partnerprogramme verwalten](../../benutzer-handbuch/marketing-promotion/partnerprogramme-verwalten.md). |
| Zuletzt besuchte Seite | Zuletzt vom Kunden besuchte Seite. |

> [!INFO]
> Felder wie **Geschlecht, Geburtsdatum, Unternehmen** und viele andere werden nur in der Registerkarte Benutzerinformation angezeigt, wenn sie in den **Kunden-Einstellungen** aktiviert wurden. Für weitere Informationen zu Kunden-Einstellungen lesen Sie bitte [Kunden-Einstellungen](../../benutzer-handbuch/konfiguration/einstellungen/kunden-einstellungen.md).

### Registerkarte Kundengruppen

Diese Registerkarte zeigt alle verfügbaren Kundengruppen an. Sie können den Kunden in dieser Registerkarte Ihren Kundengruppen zuordnen oder Zuordnungen entfernen, indem Sie die zugehörigen Kästchen neben den Kundengruppen anklicken.

### Registerkarte Aufträge

Diese Registerkarte zeigt alle Aufträge des Kunden in einer klar geordneten Tabelle an. Die hier dargestellten Daten zeigen im Überblick **Auftragswert, Auftragsstatus, Zahlungsstatus, Versandstatus**, den **Shop**, in dem der Auftrag getätigt wurde und das Erstellungsdatum jedes Auftrags. Über **Ansicht** gelangen Sie zur Detailansicht des dazu gehörigen Auftrags, in welchem Sie ihn bearbeiten können. Für weitere Informationen zum Bearbeiten von Auftragsdetails, gehen Sie bitte zu [Aufträge verwalten](../../benutzer-handbuch/verkauf/auftrage-verwalten.md).

### Registerkarte Bonuspunkte

Bonuspunkte müssen unter  **Konfiguration > Einstellungen > Bonuspunkte-Einstellungen**  aktiviert werden. Ihre Kunden können durch bestimmte Handlungen wie die Anmeldung zu einem Newsletter Bonuspunkte erhalten. Die Registerkarte  **Bonuspunkte** zeigt einen Überblick über alle Bonuspunkte eines Kunden und auch Informationen dazu, wofür und wann der Kunde die Bonuspunkte erhalten hat. Sie können manuell Bonuspunkte und auch eine beschreibende Nachricht eingeben, weshalb der Kunde diese Punkte bekommen hat. Für weitere Informationen zu Bonuspunkten lesen Sie bitte  [Mit Bonuspunkten arbeiten](../kunden/mit-bonuspunkten-arbeiten.md) . 

### Registerkarte Adressen

In der Registerkarte **Adressen** finden Sie alle Adressen, die ein Kunde in Ihrem Shop angelegt hat. Sie können die Detailansicht der Adresse öffnen, in welcher Sie diese bearbeiten können, indem Sie **Bearbeiten** drücken oder die Adresse löschen, indem Sie auf **Löschen** drücken.

### Registerkarte Aktueller Warenkorb

Diese Registerkarte zeigt sowohl alle Produkte, die der Kunde derzeit in seinem Warenkorb hat als auch die Produkte, die der Kunde derzeit auf seiner Wunschliste hat.

### Registerkarte Imitieren

Wenn Sie auf  Auftragserteilung beginnen klicken, können Sie Ihren Shop durch die Augen Ihres Kunden sehen. Sie sehen dann nahezu das Gleiche wie Ihr Kunde, wenn er durch Ihren Shop geht, mit Ausnahme des Header Menüs, wo Sie einen zusätzlichen Link mit dem Nutzernamen des Kunden sehen. Wenn Sie da drauf klicken, beenden Sie die Sitzung als Kunde und kehren zurück in die Kundendetailansicht. Indem Sie als Ihr Kunde auftreten, können Sie nicht nur Aufträge in seinem Namen erteilen, sondern auch überprüfen ob ACL- und Kundengruppen-Einschränkungen für diesen Account so funktionieren, wie von Ihnen vorgesehen. Daher ist diese Funktion auch ideal dazu geeignet, die Konfiguration Ihres Shops zu testen.

![](./attachments/kunden_verwalten_3.png)

## Gastkonten löschen

Wie oben bereits erwähnt, erhalten alle Besucher Ihres Shops ein eigenes Gastkonto. Daher müssen Sie in regelmäßigen Abständen Gastkonten löschen. Das machen Sie natürlich nicht manuell. Es gibt eine *Geplante Aufgabe*, die **Gastbenutzer löschen** heißt. Diese wird standardmäßig automatisch alle 10 Minuten durchgeführt. Für weitere Informationen zu geplanten Aufgaben lesen Sie bitte [Geplante Aufgaben verwalten](../../benutzer-handbuch/system-wartung/geplante-aufgaben-verwalten.md).