# Smartstore Docker-Images unter Windows ausführen

Es gibt mehrere Möglichkeiten, Docker-Images unter Windows auszuführen. Die einfachste ist mit Docker Desktop für Windows.

Laden Sie **Docker Desktop für Windows** herunter und installieren Sie es von [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/).

![](./attachments/cU8NT12vTv.png)

Öffnen Sie ein Befehlszeilenfenster, indem Sie die `Windows-Taste + R` drücken und `cmd` eingeben.

Geben Sie den folgenden Befehl in die Befehlszeile ein und bestätigen Sie die Ausführung mit der `Eingabetaste`:

`docker pull ghcr.io/smartstore/smartstore-linux:latest`

![](./attachments/github_packages_pull_smartstore-linux.png)

Jetzt ist das Smartstore-Docker-Image in Docker Desktop unter Images verfügbar. Um das Image zu starten, bewegen Sie die Maus auf die Zeile des Eintrags und klicken Sie rechts auf RUN.

![](./attachments/git_package_smartstore_image_run.png)

Der Dialog zum Erstellen eines neuen Containers erscheint:

![](./attachments/github-package-smartstore-image-run-no-options.png)

Klicken Sie auf den Abwärtspfeil, um zu den optionalen Einstellungen zu gelangen. Klicken Sie auf das Pluszeichen und ordnen Sie den lokalen Port 80 dem Container-Port 80 zu.

![](./attachments/github-package-smartstore-image-run-options.png)

Nun kann der Container mit einem Klick auf Ausführen gestartet werden.

Öffnen Sie einen beliebigen Browser und geben Sie **localhost** oder die **lokale IP-Adresse** in die Adresszeile ein. Es öffnet sich die Installationsstartseite von Smartstore.

![](./attachments/smartstore-installation-startseite-de.png)