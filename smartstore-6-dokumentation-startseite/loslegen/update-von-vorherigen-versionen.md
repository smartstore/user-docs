# Update von vorherigen Versionen

Updates von Version 2, 3 müssen zuerst auf Version 4.2, dann auf Version 5 und dann auf Version 6 aktualisiert werden.  
Ein Update von Smartstore 5.x kann ohne Umwege direkt auf Smartstore 6 erfolgen.

> [!WARNING]
> ### Achtung
> **Nur 4.2 Shops können / dürfen auf die Version 5.0 aktualisiert werden.**  
> Sollte Ihr Shop noch mit einer ältere Version als Version 4.2 laufen, ist vorab ein Update auf die Version 4.2 erforderlich.  
> Die aktuelle Shop-Version können Sie sich im Adminbereich unter „System -> Systeminformationen“ anzeigen lassen.
> Vor dem Update müssen die folgenden technischen Voraussetzungen auf dem Server beziehungsweise auf dem Hosting erfüllt werden:
> - Das ASP.NET Core Hosting Bundle muss auf dem Server / Hosting installiert sein. Download unter:  
> [https://dotnet.microsoft.com/en-us/download/dotnet/7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
> - Der AppPool im IIS muss auf `64-Bit` eingestellt sein.
> Weitere wichtige Vorbereitungen im Shop-Adminbereich:
> - Gastbenutzer löschen: vor dem Start des Updates und dem entsprechenden Löschen der alten Shop-Dateien führen Sie bitte im Adminbereich unter „System -> Geplante Aufgaben“ die Aufgabe „Gastbenutzer löschen“ aus.
> - Medien-Speicherort auf `Dateisystem` setzen: sollten Sie die Medien (Inhalte wie Artikelbilder, Videos, etc.) bisher in der Datenbank gespeichert haben, ändern Sie dies bitte in „Dateisystem“. Diese Einstellung können Sie unter „Konfiguration -> Einstellungen -> Medien“ vornehmen. Nach dem Update können die Medien wieder in der Datenbank gespeichert werden.

1\. Um Ihren 4.2 Shop zu aktualisieren, laden Sie sich bitte die [neuste Version der Smartstore-Shopsoftware von GitHub](https://github.com/smartstore/Smartstore/releases) herunter.  
Bei jeder neuen Veröffentlichung gibt es zwei Versionen von Smartstore: die Source-Code-Version, die eher für Entwickler zum bearbeiten und "selbst-kompilieren" geeignet ist, und mehrere "fertig kompilierte" Versionen, die bereits vorbereitet und eingestellt wurde und von Ihnen als Shopadministrator sofort eingesetzt werden kann.  
Ab Smartstore 5 werden neben Windows weitere Betriebssysteme unterstützt.  
Wählen Sie nun die für Ihr Hosting-Betriebssystem (in der Regel Windows oder Linux) und Server-Architektur (32 bit oder 64 bit, in der Regel 64 bit) geeignete Version aus.  
Im Zweifel fragen Sie Ihren Hoster, welches Betriebssystem und welche Server-Architektur Ihr Hosting hat. Laden Sie diese Smartstore-Version zunächst auf Ihren PC herunter. 

2\. Bevor Sie Ihren Shop aktualisieren, sollten Sie Sicherungskopien Ihrer Datenbank und Ihres Dateisystems erstellen, so dass Sie notfalls den Zustand Ihres Shops wiederherstellen können, falls beim Update etwas schief geht. Besonders wichtig für eine eventuelle Shop-Wiederherstellung ist das Datenbank-Backup – nicht vergessen! Nutzen Sie dazu entsprechende Werkzeuge Ihres Hosting-Anbieters.

3.1 **4.2 auf 5.x Update**: Nachdem Sie Ihre Backups erstellt haben, sollten Sie alle Verzeichnisse / Dateien Ihres Shops löschen, mit einigen wichtigen Ausnahmen: folgende Verzeichnisse / Dateien dürfen auf **keinen** Fall gelöscht werden:

- App\_Data/Tenants/Default/InstalledPlugins.txt
- App\_Data/ Tenants/Default/Settings.txt
- App\_Data/ Tenants/Default/PageBuilder/Templates (ist nicht bei allen Shops vorhanden)
- App\_Data/ Tenants/Default/Media/Storage
- App\_Data/ Tenants/Default/Media/QueuedEmailAttachmentMedia (ist nicht bei allen Shops vorhanden)

3.2 **5.x auf 5.x Update**: Nachdem Sie Ihre Backups erstellt haben, sollten Sie alle Verzeichnisse / Dateien Ihres Shops löschen, mit einigen wichtigen Ausnahmen: folgende Verzeichnisse / Dateien dürfen auf **keinen** Fall gelöscht werden:

- App\_Data inkl. Unterverzeichnisse
- wwwroot inkl. Unterverzeichnisse

Sollten sich weitere Dateien oder Verzeichnisse (z.B. Favicon, Google-Dateien) im Installationsordner Ihres Shops befinden, gilt: Dateien/Verzeichnisse, die Sie dort einmal selbst angelegt haben, müssen nicht gelöscht werden.  
Sollten externe Inhalte (Dateien/Verzeichnisse) in den Shop eingebunden worden sein, müssen diese ggf. im neuen Shop-Unterverzeichnis "wwwroot" abgelegt werden.  
4\. Jetzt können Sie die von Ihnen bereits heruntergeladene Smartstore-Version (siehe oben Punkt 1) auf Ihrem PC entpacken, dann mit Werkzeugen wie FTP oder ähnlich diese Dateien vom PC auf Ihren Webspace hochladen. Bestehende Dateien überschreiben lassen.

Evtl. muss vorher der AppPool im IIS für den Kopiervorgang gestoppt werden.  
Das war's schon!

Nachdem der Upload abgeschlossen ist, ist auch Ihr Shop bereits aktualisiert, und alle neuen Funktionen stehen sofort zur Verfügung.

> [!WARNING]
> ### Trouble Shooting
> - Sie sollten eigene Änderungen, die Sie am Source Code vornehmen, in geeigneter Form dokumentieren, so dass Sie Ihre Änderungen rückgängig machen können, sobald der Shop aktualisiert wurde.
> - Alle Theme-Anpassungen bzw. eigene Themes sichern. Sollten auch cshtml- und scss-Dateien geändert oder hinzugefügt worden sein, diese ebenfalls sichern.
> - Wenn Sie die Datei *user.scss*, die nur durch den Shop-Admin angepasst werden sollte, verändert haben, dürfen Sie diese NICHT überschreiben oder wiederherstellen, nachdem das Update abgeschlossen wurde.
> - Wenn Sie Plugins von Drittanbietern installiert haben, die nach dem Update nicht mehr funktionieren, sollten Sie diese deaktivieren und sich mit dem Entwickler des Plugins in Verbindung setzen.

> [!INFO]
> ### Info
> - Die ersten Seitenaufrufe könnten etwas länger dauern, als Sie es gewohnt sind.
> - Sollte es beim ersten Shop-Aufruf zu einer  (HTTP) `500 Internal Server Error` Fehlermeldung kommen, die Seite erneut laden.
> - Änderungen an der Datenbank werden automatisch durch Smartstore übernommen. Sie brauchen in Ihrer Datenbankverwaltung keine SQL-Scripte ausführen.