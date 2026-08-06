# Update von vorherigen Versionen

### Unterstützte Updatepfade

Der erforderliche Ablauf hängt von Ihrer Ausgangsversion ab:

* **Versionen vor Smartstore.NET 4.2:** Aktualisieren Sie zunächst auf Smartstore.NET 4.2.
* **Smartstore.NET 4.2:** Führen Sie anschließend den gesonderten Plattformwechsel auf Smartstore 5 oder neuer durch.
* **Smartstore 5 oder neuer:** Prüfen Sie in den Release Notes der Zielversion, ob ein direkter Versionssprung unterstützt wird oder Zwischenschritte erforderlich sind.

Die aktuelle Shop-Version finden Sie im Adminbereich unter **System → Systeminformationen**. Verwenden Sie ausschließlich ein für Ihren Updatepfad freigegebenes Zielrelease.

{% hint style="warning" %}
Die nachfolgenden Datei- und Verzeichnislisten sind für die jeweiligen Updatepfade unterschiedlich. Prüfen Sie die Liste vor dem Löschen anhand der Release Notes und Ihrer individuellen Installation. Führen Sie das Update nicht ohne eine getestete Wiederherstellungsmöglichkeit durch.
{% endhint %}

### Vor dem Update

1. Planen Sie ein Wartungsfenster und stoppen Sie Shopzugriffe.
2. Erstellen Sie vollständige Sicherungen der Datenbank und des Dateisystems.
3. Prüfen Sie, ob sich beide Sicherungen wiederherstellen lassen.
4. Inventarisieren Sie Plugins, Themes, eigene Dateien und Quellcodeänderungen. Beschaffen Sie kompatible Versionen und testen Sie diese vor dem Produktivupdate.
5. Führen Sie im Adminbereich unter **System → Geplante Aufgaben** die Aufgabe **Gastbenutzer löschen** aus.
6. Wenn Medien in der Datenbank gespeichert sind, setzen Sie unter **Konfiguration → Einstellungen → Medien** den Medienspeicherort vorübergehend auf **Dateisystem**.
7. Prüfen Sie Betriebssystem, Serverarchitektur, freien Speicherplatz, Dateirechte und die Hostingvoraussetzungen der Zielversion.

Offizielle Smartstore-Pakete werden standardmäßig plattformspezifisch und self-contained bereitgestellt. Für den Betrieb hinter IIS muss dennoch das zur Zielversion passende ASP.NET Core Module beziehungsweise [.NET Hosting Bundle](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle) installiert sein. Pflegen Sie die konkrete .NET-Version zentral in den Systemvoraussetzungen, nicht in dieser Updateanleitung.

### Updatepaket auswählen

Laden Sie das passende vorkompilierte Paket von der Seite [Smartstore-Releases auf GitHub](https://github.com/smartstore/Smartstore/releases) herunter. Wählen Sie das Paket passend zum Betriebssystem und zur Serverarchitektur Ihres Hostings. Fragen Sie im Zweifel Ihren Hoster.

Entpacken Sie das Paket zunächst auf Ihrem lokalen Rechner und prüfen Sie, ob der Download vollständig ist.

### Anwendung stoppen und vorhandene Dateien sichern

Stoppen Sie vor dem Dateiaustausch den IIS-AppPool beziehungsweise den Smartstore-Dienst oder Container. Dokumentieren und sichern Sie außerdem alle Dateien, die Sie selbst außerhalb der vorgesehenen Datenverzeichnisse angelegt haben.

### Dateien je Ausgangsversion behandeln

#### Smartstore.NET 4.2 auf Smartstore 5 oder neuer

Entfernen Sie die alten Anwendungsdateien erst nach erfolgreicher Sicherung. Die folgenden vorhandenen Daten dürfen nicht gelöscht werden:

* `App_Data/Tenants/Default/InstalledPlugins.txt`
* `App_Data/Tenants/Default/Settings.txt`
* `App_Data/Tenants/Default/PageBuilder/Templates` (nicht in jedem Shop vorhanden)
* `App_Data/Tenants/Default/Media/Storage`
* `App_Data/Tenants/Default/Media/QueuedEmailAttachmentMedia` (nicht in jedem Shop vorhanden)

#### Update innerhalb von Smartstore 5 oder neuer

Erhalten Sie die folgenden Verzeichnisse einschließlich ihrer Unterverzeichnisse:

* `App_Data`
* `wwwroot`

Prüfen Sie eigene Dateien wie Favicons oder Verifikationsdateien separat. Übernehmen Sie keine alten Programmdateien ungeprüft in den neuen Stand. Externe Webinhalte müssen gegebenenfalls im neuen Unterverzeichnis `wwwroot` abgelegt werden.

### Neue Version bereitstellen

1. Entfernen Sie die alten Anwendungsdateien nach den für Ihren Updatepfad bestätigten Ausnahmeregeln.
2. Übertragen Sie das neue Paket vollständig per FTP oder mit dem Bereitstellungswerkzeug Ihres Hostings.
3. Prüfen Sie Dateirechte und Konfiguration.
4. Starten Sie AppPool, Dienst oder Container kontrolliert.
5. Kopieren Sie alte Binär- oder Programmdateien nicht pauschal über die neue Version.

### Nach dem Update prüfen

* Kontrollieren Sie Startprotokoll und Datenbankmigrationen.
* Öffnen Sie Frontend und Adminbereich.
* Prüfen Sie geplante Aufgaben, Medienzugriff und einen repräsentativen Bestellablauf.
* Prüfen Sie Plugins, Themes und eigene Anpassungen.
* Geben Sie den Shop erst wieder frei, wenn alle Prüfungen erfolgreich waren.

{% hint style="info" %}
Die ersten Seitenaufrufe können wegen Initialisierungs- und Kompilierungsvorgängen länger dauern. Smartstore führt erforderliche Datenbankmigrationen normalerweise automatisch aus; führen Sie keine zusätzlichen SQL-Skripte aus, sofern die Release Notes dies nicht ausdrücklich verlangen.

Ein `500 Internal Server Error` ist kein Erfolgssignal. Prüfen Sie in diesem Fall Protokolle, Hostingvoraussetzungen, Dateirechte und Konfiguration, bevor Sie den Shop wieder freigeben.
{% endhint %}
