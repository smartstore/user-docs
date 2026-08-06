# Smartstore Docker-Images unter Linux ausführen

## Docker-Engine auf Ubuntu installieren

Installieren Sie die Docker-Engine gemäß den Anweisungen unter [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/). Stellen Sie danach sicher, dass Docker gestartet ist, Ihr Benutzer Docker-Befehle ausführen darf und Host-Port 80 frei ist. Prüfen Sie die Installation anschließend mit folgendem Befehl:

`sudo docker run hello-world`

![](../../../.gitbook/assets/docker-run-hello-world-border.png)

Das folgende Beispiel lädt das Smartstore-Linux-Image mit dem Tag \`latest\` aus dem [Smartstore-Linux-Paket](https://github.com/smartstore/Smartstore/pkgs/container/smartstore-linux) herunter. Prüfen Sie für einen reproduzierbaren Produktivbetrieb vorab, welcher Release-Tag freigegeben ist.

`sudo docker pull ghcr.io/smartstore/smartstore-linux:latest`

![](../../../.gitbook/assets/linux_pulled_smartstore_from_github.png)

Starten Sie das Image anschließend als Testcontainer. Der Container-Port 80 wird dabei auf Port 80 des Docker-Hosts abgebildet. Dieser Einzelcontainer enthält noch keine Datenbank und bindet keine persistenten Shopdaten ein.

`sudo docker run --name smartstore-test -p 80:80 ghcr.io/smartstore/smartstore-linux:latest`

![](../../../.gitbook/assets/linux-docker-run-image.png)

Öffnen Sie auf dem Docker-Host einen Browser und rufen Sie **http://localhost** auf. Von einem anderen Rechner im Netzwerk verwenden Sie **http://\<IP-Adresse-des-Docker-Hosts>**. Stellen Sie dafür sicher, dass Port 80 in der Firewall freigegeben ist. Anschließend öffnet sich die Installationsstartseite von Smartstore.

![](../../../.gitbook/assets/chrome-smartstore-installation-docker.png)

Für die Smartstore-Installation benötigen Sie zusätzlich eine erreichbare MS-SQL-Server- oder MySQL-Instanz. Wenn Smartstore und Datenbank gemeinsam mit Docker Compose gestartet werden sollen, folgen Sie der Anleitung [Smartstore und Datenbank zusammen als Docker-Container betreiben](smartstore-und-datenbank-zusammen-als-docker-container-betreiben.md). Planen Sie für einen dauerhaften Betrieb außerdem persistente Daten, sichere Zugangsdaten und einen freigegebenen Release-Tag ein.
