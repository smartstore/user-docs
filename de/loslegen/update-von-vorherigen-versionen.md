# Update von vorherigen Versionen

Shops der Versionen 2 und 3 müssen zunächst auf Version 4.2, anschließend auf Version 5 und danach auf Version 6 aktualisiert werden.\
Smartstore 5.x kann direkt auf Smartstore 6 aktualisiert werden.

### Achtung

**Nur Shops der Version 4.2 können auf Version 5.0 aktualisiert werden.**\
Wenn Ihr Shop mit einer älteren Version als 4.2 läuft, ist zunächst ein Update auf Version 4.2 erforderlich.\
Die aktuelle Shop-Version können Sie im Adminbereich unter „System -> Systeminformationen“ anzeigen lassen. Vor dem Update müssen die folgenden technischen Voraussetzungen auf dem Server beziehungsweise auf dem Hosting erfüllt werden:

* Das ASP.NET Core Hosting Bundle muss auf dem Server beziehungsweise im Hosting installiert sein. Sie können es hier herunterladen:\
  [https://dotnet.microsoft.com/en-us/download/dotnet/7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
* Der AppPool im IIS muss auf `64-Bit` eingestellt sein. Treffen Sie außerdem die folgenden Vorbereitungen im Shop-Adminbereich:
* Gastbenutzer löschen: Führen Sie vor dem Update und dem Löschen der alten Shop-Dateien im Adminbereich unter „System -> Geplante Aufgaben“ die Aufgabe „Gastbenutzer löschen“ aus.
* Medienspeicherort auf `Dateisystem` setzen: Wenn Sie Medien wie Artikelbilder oder Videos bisher in der Datenbank gespeichert haben, ändern Sie den Speicherort in „Dateisystem“. Diese Einstellung finden Sie unter „Konfiguration -> Einstellungen -> Medien“. Nach dem Update können Sie die Medien wieder in der Datenbank speichern.

1\. Um Ihren Shop der Version 4.2 zu aktualisieren, laden Sie die [neuste Version der Smartstore-Shopsoftware von GitHub](https://github.com/smartstore/Smartstore/releases) herunter.\
Zu jeder neuen Veröffentlichung gibt es den Sourcecode für Entwickler, die Smartstore selbst kompilieren möchten, sowie mehrere vorkompilierte Versionen, die Shop-Administratoren direkt einsetzen können.\
Ab Smartstore 5 werden neben Windows weitere Betriebssysteme unterstützt.\
Wählen Sie die für das Betriebssystem Ihres Hostings (in der Regel Windows oder Linux) und die Serverarchitektur (32-Bit oder 64-Bit, in der Regel 64-Bit) geeignete Version aus.\
Fragen Sie im Zweifel Ihren Hoster, welches Betriebssystem und welche Serverarchitektur Ihr Hosting verwendet. Laden Sie die passende Smartstore-Version anschließend auf Ihren PC herunter.

2. Erstellen Sie vor dem Update Sicherungskopien Ihrer Datenbank und Ihres Dateisystems. So können Sie den vorherigen Zustand Ihres Shops wiederherstellen, falls beim Update ein Fehler auftritt. Besonders wichtig ist die Sicherung der Datenbank. Nutzen Sie dazu geeignete Werkzeuge Ihres Hosting-Anbieters.
3. **4.2 auf 5.x Update**: Nachdem Sie Ihre Backups erstellt haben, sollten Sie alle Verzeichnisse und Dateien Ihres Shops löschen, mit einigen wichtigen Ausnahmen: folgende Verzeichnisse und Dateien dürfen auf **keinen** Fall gelöscht werden:
   * App\_Data/Tenants/Default/InstalledPlugins.txt
   * App\_Data/ Tenants/Default/Settings.txt
   * App\_Data/ Tenants/Default/PageBuilder/Templates (ist nicht bei allen Shops vorhanden)
   * App\_Data/ Tenants/Default/Media/Storage
   * App\_Data/ Tenants/Default/Media/QueuedEmailAttachmentMedia (ist nicht bei allen Shops vorhanden)

3.2 **5.x auf 5.x Update**: Nachdem Sie Ihre Backups erstellt haben, sollten Sie alle Verzeichnisse und Dateien Ihres Shops löschen, mit einigen wichtigen Ausnahmen: folgende Verzeichnisse und Dateien dürfen auf **keinen** Fall gelöscht werden:

* App\_Data einschließlich der Unterverzeichnisse
* wwwroot einschließlich der Unterverzeichnisse

Sollten sich weitere Dateien oder Verzeichnisse (z. B. Favicon oder Google-Dateien) im Installationsordner Ihres Shops befinden, gilt: Dateien und Verzeichnisse, die Sie dort einmal selbst angelegt haben, müssen nicht gelöscht werden.\
Sollten externe Inhalte (Dateien und Verzeichnisse) in den Shop eingebunden worden sein, müssen diese gegebenenfalls im neuen Shop-Unterverzeichnis "wwwroot" abgelegt werden.\\

4\. Entpacken Sie die zuvor heruntergeladene Smartstore-Version auf Ihrem PC. Laden Sie die Dateien anschließend mit FTP oder einem vergleichbaren Werkzeug auf Ihren Webspace hoch und lassen Sie bestehende Dateien überschreiben.

Eventuell muss der AppPool im IIS vor dem Kopiervorgang gestoppt werden.\\

{% hint style="warning" %}
**Troubleshooting**

* Dokumentieren Sie eigene Änderungen am Sourcecode in geeigneter Form, damit Sie diese vor dem Update nachvollziehen und bei Bedarf rückgängig machen können.
* Sichern Sie alle Theme-Anpassungen und eigenen Themes. Sichern Sie ebenfalls alle geänderten oder hinzugefügten cshtml- und scss-Dateien.
* Wenn Sie die Datei _user.scss_, die nur durch den Shop-Admin angepasst werden sollte, verändert haben, dürfen Sie diese NICHT überschreiben oder wiederherstellen, nachdem das Update abgeschlossen wurde.
* Wenn Sie Plugins von Drittanbietern installiert haben, die nach dem Update nicht mehr funktionieren, sollten Sie diese deaktivieren und sich mit dem Entwickler des Plugins in Verbindung setzen.
{% endhint %}

{% hint style="info" %}
**Info**

* Die ersten Seitenaufrufe könnten etwas länger dauern, als Sie es gewohnt sind.
* Wenn beim ersten Shop-Aufruf die HTTP-Fehlermeldung `500 Internal Server Error` erscheint, laden Sie die Seite erneut.
* Smartstore übernimmt Änderungen an der Datenbank automatisch. Sie müssen in Ihrer Datenbankverwaltung keine SQL-Skripte ausführen.
{% endhint %}
