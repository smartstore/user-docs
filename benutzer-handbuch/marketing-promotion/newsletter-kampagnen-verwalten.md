# Newsletter-Kampagnen verwalten

Marketing ist ein wichtiges Thema für Shopbetreiber. Daher liegt ein besonderer Schwerpunkt jedes Shop-Betreibers darauf, neue Kunden durch Suchmaschinenoptimierung und andere Formen des Onlinemarketings zu gewinnen. Newsletter Marketing ist eine wichtige Form des Onlinemarketings, da hier das Potential des bereits vorhandenen Kundenstamms ausgeschöpft werden kann. Wenn Kunden eine gute Erfahrungen beim Einkauf in Ihrem Shop hatten, ist es wahrscheinlicher, dass sie erneut bei Ihnen einkaufen. Daher sollten Sie Ihre Kunden hin und wieder daran erinnern, dass Sie weiterhin eine interessante Produktauswahl im Angebot haben und sie über besondere Rabatte oder neue Produkte in Kenntnis setzen.

Mit der Einstellung **Konfiguration > Einstellungen > Kunden-Einstellungen > Verberge Newsletter Anmeldeformular** aktivieren oder deaktivieren Sie das Anmeldeformular für den Newsletter im Fußbereich Ihres Shops. Hier können sich Ihre Shopbesucher für Ihren Newsletter anmelden oder ihn abbestellen.

![](./attachments/newsletter_kampagnen_verwalten_1.png)

## Kampagnen verwalten

Sie können Ihre Kampagnen verwalten, indem Sie zu **Admin > Marketing > Kampagnen** gehen. Um eine neue Kampagne zu erstellen, klicken Sie auf **Neu**. Nun können Sie eine **Bezeichnung** für die Kampagne zur internen Verwendung angeben, einen **Betreff** für die zu erstellende E-Mail und den Text der HTML **Nachricht**, der den Inhalt der E-Mail darstellt.

![](./attachments/newsletter%20campaings.png)

### Platzhalter für Nachrichten

Platzhalter für Nachrichten (intern auch MessageTokens), werden während der Laufzeit durch Werte ersetzt, die Sie in Ihrem Shop konfiguriert haben oder mit Werten, die mit Daten in Verbindung stehen, die im gegebenen Kontext gültig sind.

Die verfügbaren Platzhalter werden angezeigt sobald Sie auf **\+ Platzhalter auswählen** klicken.

![](./attachments/platzhalter.PNG)

Beispiele von möglichen Platzhaltern für Nachrichten bei Newsletter Kampagnen werden in der folgenden Tabelle aufgelistet.

| **Token** | **Beschreibung** |
| --- | --- |
| %Store.Name% | Name des Shops, für den die Kampagne verschickt wird. |
| %Store.URL% | Die URL des Shops, für den die Kampagne verschickt wird. |
| %Store.Email% | Die E-Mail-Adresse des Shops, für den die Kampagne verschickt wird. |
| %NewsLetterSubscription.Email% | Die E-Mail-Adresse des Kunden, an den die Kampagne verschickt wird. |
| %NewsLetterSubscription.ActivationUrl% | Der Link, mit dem die E-Mail-Adresse aktiviert werden kann, um Newsletter von Ihrem Shop zu erhalten. |
| %NewsLetterSubscription.DeactivationUrl% | Der Link, mit dem E-Mail-Adressen deaktiviert werden können, an die keine Newsletter Ihres Shops mehr gehen sollen. |
| %Store.SupplierIdentification% | Die Supplier Identification ist eine HTML-Tabelle, die aus unterschiedlichen Daten gespeist wird, die Sie in den Einstellungen konfiguriert haben. Sie beinhaltet Informationen über Ihr Unternehmen wie zum Beispiel den Unternehmensnamen, die Unternehmensadresse, Kontakt- und Rechnungsdaten. |

In der Registerkarte **Shops** können Sie die Kampagne auf bestimmte Shops einschränken. Sobald Sie die Kampagne gespeichert haben, kann sie an all Ihre Abonnenten verschickt werden, indem Sie auf **Senden** klicken. Sie können nun auch eine Test-E-Mail senden, indem Sie auf **Vorschau** klicken. Es öffnet sich ein Vorschaufenster in dem Sie bei **Test E-Mail an ...** den Empfänger des Test-Newsletters eintragen können. Das Senden einer Test-E-Mail empfehlen wir mit **Nachdruck**, da Sie dadurch eine Vorschau Ihres Newsletters erhalten, bevor Sie diesen an tausende Ihrer Kunden versenden.

![](./attachments/newsletter-vorschau.PNG)

## Abonnenten verwalten

Um Ihre Newsletter Abonnenten zu verwalten, gehen Sie zu **Admin > Marketing > Newsletter Abonnenten**. Dort sehen Sie eine Liste all Ihrer Kunden, die sich für Ihren Newsletter angemeldet haben. Sie können die Liste durchsuchen und einzelne Abonnenten manuell aktivieren bzw. deaktivieren. Wenn Sie Ihre Newsletter-Kampagnen bisher mit einem anderen Tool verwaltet haben, können Sie Ihre Abonnentenliste mittels einer CSV-Datei in Smartstore importieren. Die Liste muss in der ersten Reihe Werte enthalten, die die E-Mail-Adresse des Abonnenten angeben. Sie kann darüber hinaus zwei weitere Werte pro Zeile enthalten. Zum Beispiel kann in der zweiten Reihe ein Wert stehen, der anzeigt, ob der Abonnent aktiv ist und in der dritten Reihe kann ein bestimmter Shop angegeben werden (z. B. mittels der jeweiligen Shop-ID). Überschriften für die Reihen sind nicht notwendig.

Erstellen Sie ein [Importprofil](../../benutzer-handbuch/datenaustausch/import/importprofile-verwalten.md), um Ihre Newsletter-Abonnenten zu importieren. Erstellen Sie ein [Exportprofil](../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md), wenn Sie Newsletter-Abonnenten exportieren möchten.