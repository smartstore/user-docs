# Smartstore Docker-Images unter Windows ausführen

Es gibt mehrere Möglichkeiten, Docker-Images unter Windows auszuführen. Die einfachste Methode ist die Verwendung von **Docker Desktop für Windows**.

Laden Sie **Docker Desktop für Windows** herunter und installieren Sie es von [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/).

![](../../../.gitbook/assets/cU8NT12vTv.png)

Öffnen Sie die Eingabeaufforderung (Terminal), indem Sie die `Windows-Taste + R` drücken und `cmd` eingeben.

Geben Sie den folgenden Befehl in die Befehlszeile ein und bestätigen Sie die Ausführung mit der `Eingabetaste`:

`docker pull ghcr.io/smartstore/smartstore-linux:latest`

![](../../../.gitbook/assets/github_packages_pull_smartstore-linux.png)

Das Smartstore-Docker-Image ist nun in Docker Desktop unter **Images** verfügbar. Um das Image zu starten, bewegen Sie den Mauszeiger auf die Zeile des Eintrags und klicken Sie rechts auf **Run**.

![](../../../.gitbook/assets/git_package_smartstore_image_run.png)

Der Dialog zum Erstellen eines neuen Containers erscheint:

![](../../../.gitbook/assets/github-package-smartstore-image-run-no-options.png)

Klicken Sie auf den Abwärtspfeil (**Optional settings**), um die erweiterten Einstellungen anzuzeigen. Klicken Sie auf das Pluszeichen und ordnen Sie den lokalen Port **80** dem Container-Port **80** zu.

![](../../../.gitbook/assets/github-package-smartstore-image-run-options.png)

Nun kann der Container mit einem Klick auf **Run** gestartet werden.

Öffnen Sie einen beliebigen Browser und geben Sie **localhost** oder die **lokale IP-Adresse** in die Adresszeile ein. Es öffnet sich die Installationsstartseite von Smartstore.

![](../../../.gitbook/assets/smartstore-installation-startseite-de.png)
