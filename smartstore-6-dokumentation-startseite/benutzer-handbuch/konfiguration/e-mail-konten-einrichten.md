# E-Mail Konten einrichten

Wenn Sie einen Shop betreiben, gibt es mehrere Ereignisse, bei denen Sie Ihre Kunden über bestimmte Vorgänge informieren möchten. Wenn beispielsweise eine Bestellung getätigt wurde, muss der Kunde eine Auftragsbestätigung erhalten, ansonsten fragt er sich, ob die Bestellung erfolgreich durchgeführt wurde. Der Shop-Administrator muss in diesem Fall ebenfalls sofort informiert werden. Daher versendet Smartstore in diesen Fällen automatisch E-Mails. Dafür müssen Sie mindestens ein E-Mail-Konto in Smartstore einrichten, über die die E-Mails versendet werden können. Sie können E-Mail-Accounts einrichten, indem Sie zu **Konfiguration > E-Mail** gehen, wo Sie eine unbegrenzte Anzahl an E-Mail-Konten einrichten können die sie anschließend mit unterschiedlichen Nachrichtenvorlagen verbinden können. Für weitere Informationen zur Verbindung von E-Mail-Konten mit Nachrichtenvorlagen lesen Sie bitte [E-Mail Konten einrichten](https://smartstore.atlassian.net/wiki/spaces/SDDE60/pages/2510952340/E-Mail+Konten+einrichten).

![](./attachments/e-mail-konto.PNG)

## Ein E-Mail-Konto einrichten

> [!INFO]
> ### Wo erhalte ich die notwendigen Daten?
> Die Daten in den unten beschriebenen Feldern werden Ihnen in der Regel zugeschickt, wenn Sie ein Hosting Paket buchen. Sie können diese Daten auch erhalten, indem Sie im Konfigurationsbereich Ihres Hosting Pakets auf der Webseite Ihres Providers nachschauen. Gehen Sie in den Konfigurationsbereich für E-Mails. Wenn Sie dort keine Informationen finden, kontaktieren Sie Ihren Provider.

|     |     |
| --- | --- |
| E-Mail-Konto | Absenderadresse für alle ausgehenden E-Mails Ihres Shops, z.B. 'bestellungen@meinshop.de' |
| Anzeigename | Angezeigter Name für ausgehende E-Mails Ihres Shops, z.B. 'Mein Shop - Verkaufsabteilung'. |
| Host | Servername oder IP-Adresse des E-Mail-Servers. |
| Port | SMTP-Port für Ihren E-Mail-Server (normalerweise 25) |
| Benutzername | Benutzername für das E-Mail-Konto mit welchem Sie sich bei Ihrem Server authentifizieren |
| Passwort | Passwort für Ihren E-Mail-Server mit welchem Sie sich bei Ihrem Server authentifizieren |
| SSL | Klicken Sie die Box an, um SSL zu aktivieren. |
| Benutze Standard-Zugangsdaten | Standard-Zugangsdaten für die Verbindung benutzen. |

> [!INFO]
> ### Test-E-Mail senden
> Sobald Sie Ihr E-Mail-Konto konfiguriert haben, sollten Sie testen, ob die Daten, die Sie eingegeben haben, korrekt sind, indem Sie eine Test-E-Mail senden. Wenn eine E-Mail an die E-Mail-Adresse, die Sie bei **E-Mail senden an** eingegeben haben, gesendet werden kann, können Sie sicher sein, dass das Konto korrekt angelegt wurde.