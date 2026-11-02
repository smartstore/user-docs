# Windows Server vorbereiten

Die von Smartstore standardmäßig bereitgestellten [Releases](https://github.com/smartstore/Smartstore/releases) sind eigenständige, sogenannte „**self-contained**“-Releases. Ein solches Release enthält nicht nur die Anwendung, sondern auch **alle .NET-Bibliotheken** und die **Ziel-Laufzeitumgebung**. Für den Betrieb unter IIS muss die Webserver-Rolle (IIS) eingerichtet sein. Installieren Sie danach das [.NET Hosting Bundle](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle?view=aspnetcore-10.0). Das Bundle installiert unter anderem das [ASP.NET](http://asp.net) Core-Modul, damit [ASP.NET](http://asp.net) Core-Anwendungen unter IIS ausgeführt werden. Für diese eigenständigen Releases ist keine separat installierte .NET-Laufzeit erforderlich.

Das .NET Hosting Bundle steht [hier](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle?view=aspnetcore-10.0) zum Download bereit.

* Nach der Einrichtung von IIS und dem **Download** führen Sie das **Installationsprogramm** auf dem Server aus.
* Starten Sie anschließend entweder den Server neu oder starten Sie den IIS-Dienst über `net stop was /y` und `net start w3svc` in einer Befehlszeile.

## Erstellen der Website im IIS

1. Erstellen Sie einen neuen Ordner im Dateisystem des Servers und kopieren oder verschieben Sie die Smartstore-Installationsdateien in diesen Ordner. Dieser Ordner dient als physischer Anwendungspfad im IIS und wird auch „Provisioning Folder“ genannt.
2. Erstellen Sie eine neue Site im IIS, indem Sie den Serverknoten im Bereich Verbindungen öffnen, mit der rechten Maustaste auf Websites oder Sites klicken und im Kontextmenü Website hinzufügen wählen.
3. Geben Sie einen Site-Namen ein und legen Sie den physischen Pfad zum Bereitstellungsordner fest. Konfigurieren Sie für öffentlich erreichbare Sites eine HTTPS-Bindung mit gültigem TLS-Zertifikat. Eine HTTP-Bindung können Sie bei Bedarf für die Weiterleitung auf HTTPS verwenden. Klicken Sie auf OK, um die Site im IIS zu erstellen. Wählen Sie für den zugehörigen Anwendungspool als .NET-CLR-Version „Kein verwalteter Code“.
4. Stellen Sie sicher, dass die Standardidentität `ApplicationPoolIdentity` des App-Pools über die notwendigen Rechte für den Zugriff auf den Bereitstellungsordner verfügt. Zusätzlich zu den Leserechten für den gesamten Bereitstellungsordner benötigt der App-Pool Schreibrechte für `App_Data` und `Modules`.
