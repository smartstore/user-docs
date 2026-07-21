# Smartstore Docker-Images ausführen

Ein Container-Image enthält die Dateien, Bibliotheken und Konfigurationen, die zum Starten einer Anwendung erforderlich sind. Aus einem Image wird ein laufender Container erstellt. Container teilen sich Ressourcen des Hostsystems und verursachen dadurch in vielen Szenarien weniger Overhead als vollständige virtuelle Maschinen.

Das offizielle Linux-Image finden Sie im [Smartstore-Linux-Paket auf GitHub](https://github.com/smartstore/Smartstore/pkgs/container/smartstore-linux). Der vollständige Image-Name lautet ghcr.io/smartstore/smartstore-linux. Verwenden Sie für reproduzierbare Installationen einen konkreten Release-Tag. Der Tag latest verweist dagegen auf den jeweils aktuell als latest veröffentlichten Stand.

Voraussetzung ist, dass Docker Desktop oder Docker Engine installiert und gestartet ist. Ein allein gestarteter Smartstore-Container benötigt für die Installation eine erreichbare, unterstützte Datenbank. Für produktive Systeme müssen Sie außerdem persistente Daten, sichere Zugangsdaten und eine kontrollierte Versionsstrategie berücksichtigen.

Wählen Sie den passenden Ablauf:

* [Smartstore unter Windows mit Docker Desktop starten](smartstore-docker-images-ausfuhren/smartstore-docker-images-unter-windows-ausfuhren.md)
* [Smartstore unter Linux mit Docker Engine starten](smartstore-docker-images-ausfuhren/smartstore-docker-images-unter-linux-ausfuhren.md)
* [Smartstore und Datenbank zusammen mit Docker Compose starten](smartstore-docker-images-ausfuhren/smartstore-und-datenbank-zusammen-als-docker-container-betreiben.md)
* [Ein modifiziertes Docker-Image mit Plugins oder anderen Anpassungen erstellen](smartstore-docker-images-ausfuhren/modifiziertes-docker-image-erstellen.md)
