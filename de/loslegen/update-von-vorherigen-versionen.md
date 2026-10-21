# Update von vorherigen Versionen

### Unterstützte Updatepfade

Der erforderliche Ablauf hängt von Ihrer Ausgangsversion ab:

* **Versionen vor Smartstore.NET 4.2:** Aktualisieren Sie zunächst auf Smartstore.NET 4.2.
* **Smartstore.NET 4.2:** Führen Sie anschließend den gesonderten Plattformwechsel auf Smartstore 5 oder neuer durch.
* **Smartstore 5 oder neuer:** Prüfen Sie in den Release Notes der Zielversion, ob ein direkter Versionssprung unterstützt wird oder Zwischenschritte erforderlich sind.

Die aktuelle Shop-Version finden Sie im Adminbereich unter **System → Systeminformationen**. Verwenden Sie ausschließlich ein für Ihren Updatepfad freigegebenes Zielrelease.

{% hint style="warning" %}
Der vorhandene Ordner `App_Data` darf beim Update weder gelöscht noch mit Dateien aus dem neuen Paket überschrieben werden. Sichern Sie vor dem Dateiaustausch die Datenbank und die gesamte Shopinstallation und testen Sie, ob sich beide Sicherungen wiederherstellen lassen.
{% endhint %}

### Vor dem Update

1. Planen Sie ein Wartungsfenster und stoppen Sie Shopzugriffe.
2. Erstellen Sie vollständige Sicherungen der Datenbank und des Dateisystems.
3. Prüfen Sie, ob sich beide Sicherungen wiederherstellen lassen.
4. Inventarisieren Sie Plugins, Themes, eigene Dateien und Quellcodeänderungen. Beschaffen Sie kompatible Versionen und testen Sie diese vor dem Produktivupdate.
5. Prüfen Sie Betriebssystem, Serverarchitektur, freien Speicherplatz, Dateirechte und die Hostingvoraussetzungen der Zielversion.

{% hint style="info" %}
**Falls die Medienübernahme beim Update scheitert:** Stellen Sie die vor dem Update erstellten Sicherungen von Datenbank und Shopdateien wieder her. Wechseln Sie im wiederhergestellten Shop unter **Konfiguration → Einstellungen → Medien** den Medienspeicherort vorübergehend auf **Dateisystem** um. Prüfen und sichern Sie die ausgelagerten Mediendateien, bevor Sie das Update erneut durchführen.
{% endhint %}

Offizielle Smartstore-Pakete werden standardmäßig plattformspezifisch und self-contained bereitgestellt. Für den Betrieb hinter IIS muss dennoch das zur Zielversion passende ASP.NET Core Module beziehungsweise [.NET Hosting Bundle](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle) installiert sein.

### Updatepaket auswählen

Laden Sie das passende vorkompilierte Paket von der Seite [Smartstore-Releases auf GitHub](https://github.com/smartstore/Smartstore/releases) herunter. Wählen Sie das Paket passend zum Betriebssystem und zur Serverarchitektur Ihres Hostings. Fragen Sie im Zweifel Ihren Hoster.

Entpacken Sie das Paket zunächst auf Ihrem lokalen Rechner und prüfen Sie, ob der Download vollständig ist.

### Anwendung stoppen und vorhandene Dateien sichern

Stoppen Sie vor dem Dateiaustausch den IIS-AppPool beziehungsweise den Smartstore-Dienst oder Container. Dokumentieren und sichern Sie außerdem alle Dateien, die Sie selbst außerhalb der vorgesehenen Datenverzeichnisse angelegt haben.

### Dateien je Ausgangsversion behandeln

#### Smartstore.NET 4.2 auf Smartstore 5 oder neuer

Entfernen Sie alte Anwendungsdateien erst nach erfolgreicher Sicherung. Bewahren Sie den gesamten Ordner `App_Data` einschließlich aller Mandanten und Unterverzeichnisse auf. Sichern Sie eigene statische Dateien gesondert; in Smartstore 5 und neuer gehören sie gegebenenfalls nach `wwwroot`.

#### Update innerhalb von Smartstore 5 oder neuer

Bewahren Sie auch bei Updates innerhalb von Smartstore 5 oder neuer den gesamten Ordner `App_Data` mit allen Unterverzeichnissen auf.

Lassen Sie den Ordner `wwwroot` einschließlich seiner Unterordner bestehen und kopieren Sie die Dateien aus dem Updatepaket darüber. Gleichnamige Dateien werden überschrieben; zusätzliche eigene Dateien bleiben erhalten.

### Neue Version bereitstellen

1. Entfernen Sie nur alte Anwendungsdateien, die nach den Hinweisen für Ihren Updatepfad ausgetauscht werden dürfen. Lassen Sie `App_Data` vollständig bestehen. Bei Updates innerhalb von Smartstore 5 oder neuer bleibt auch `wwwroot` stehen.
2. Übertragen Sie die Anwendungsdateien des neuen Pakets vollständig per FTP oder mit dem Bereitstellungswerkzeug Ihres Hostings. Überschreiben Sie den bestehenden Ordner `App_Data` dabei nicht mit Dateien aus dem Paket.
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
