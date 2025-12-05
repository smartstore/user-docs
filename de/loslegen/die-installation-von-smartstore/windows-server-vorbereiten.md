# Windows Server vorbereiten

Alle von Smartstore bereitgestellten [Releases](https://github.com/smartstore/Smartstore/releases) sind unabhängige, so genannte "**self-contained**" Releases. Diese Art von Release enthält nicht nur die Anwendung, sondern auch **alle .NET-Bibliotheken** und die **Ziel-Laufzeitumgebung**. Auf einem Windows-Server muss nur das [.NET Core-Hosting-Bundle](https://builds.dotnet.microsoft.com/dotnet/aspnetcore/Runtime/9.0.9/dotnet-hosting-9.0.9-win.exe) installiert werden. Mit dem .NET Core-Hosting-Bundle werden die .NET Core-Laufzeitumgebung und das [ASP.NET](http://ASP.NET) Core-Modul installiert. Mit dem Bundle können [ASP.NET](http://ASP.NET) Core-Anwendungen in IIS ausgeführt werden.

Das .NET Core-Hosting-Bundle steht [hier](https://builds.dotnet.microsoft.com/dotnet/aspnetcore/Runtime/9.0.9/dotnet-hosting-9.0.9-win.exe) zum Download bereit.

- Nach dem **Download** führen Sie das **Installationsprogramm** auf dem Server aus.
- Starten Sie anschließend entweder den Server neu oder starten Sie den IIS-Dienst über `net stop was /y` und `net start w3svc` in einer Befehlszeile.

## Erstellen der Website im IIS

1. Erstellen Sie einen neuen Ordner im Dateisystem des Servers und kopieren oder verschieben Sie die Smartstore-Installationsdateien in diesen Ordner. Dieser Ordner dient als physischer Anwendungspfad im IIS. Dieser Ordner wird auch "Provisioning Folder" genannt.
2. Erstellen Sie eine neue Site im IIS, indem Sie den Serverknoten im Bereich Verbindungen öffnen, mit der rechten Maustaste auf Websites oder Sites klicken und im Kontextmenü Website hinzufügen wählen.
3. Geben Sie einen Site-Namen ein und legen Sie den physischen Pfad zum Bereitstellungsordner fest. Konfigurieren Sie die Bindung für HTTP und, wenn ein SSL-Zertifikat verfügbar ist, auch für HTTPS. Klicken Sie auf OK, um die Site im IIS zu erstellen.
4. Stellen Sie sicher, dass die Standard-Identität des App-Pools der `ApplicationPoolIDentity`\-Site über die notwendigen Rechte für den Zugriff auf den Bereitstellungsordner verfügt. Zusätzlich zu den Leserechten für den gesamten Bereitstellungsordner benötigt der App-Pool Schreibrechte für `App_Data` und `Module`.