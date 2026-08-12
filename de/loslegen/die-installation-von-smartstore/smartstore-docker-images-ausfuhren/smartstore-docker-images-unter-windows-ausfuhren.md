# Smartstore Docker-Images unter Windows ausführen

Mit Docker Desktop können Sie das aktuelle Smartstore-Docker-Image unter Windows herunterladen, als Container starten und anschließend die Installation im Browser aufrufen.

## Docker Desktop installieren

Laden Sie [Docker Desktop für Windows](https://www.docker.com/products/docker-desktop/) herunter und installieren Sie die Anwendung.

![](../../../.gitbook/assets/cU8NT12vTv.png)

## Smartstore-Docker-Image herunterladen

1. Öffnen Sie mit der Tastenkombination `Windows-Taste + R` das Dialogfeld **Ausführen**.
2. Geben Sie `cmd` ein und bestätigen Sie mit der `Eingabetaste`.
3. Führen Sie den folgenden Befehl aus:

```
docker pull ghcr.io/smartstore/smartstore-linux:latest
```

![](../../../.gitbook/assets/github_packages_pull_smartstore-linux.png)

Das Smartstore-Docker-Image ist nun in Docker Desktop unter **Images** verfügbar.

## Container erstellen und starten

1.  Bewegen Sie den Mauszeiger über den Eintrag des Smartstore-Images und klicken Sie rechts auf **Run**.

    ![](../../../.gitbook/assets/git_package_smartstore_image_run.png)
2.  Der Dialog zum Erstellen eines neuen Containers wird geöffnet.

    ![](../../../.gitbook/assets/github-package-smartstore-image-run-no-options.png)
3. Klicken Sie auf den Abwärtspfeil, um die optionalen Einstellungen einzublenden.
4.  Klicken Sie auf das Pluszeichen und ordnen Sie den lokalen Port `80` dem Container-Port `80` zu.

    ![](../../../.gitbook/assets/github-package-smartstore-image-run-options.png)
5. Starten Sie den Container mit einem Klick auf **Run**.

## Smartstore-Installation aufrufen

Öffnen Sie einen Browser und rufen Sie [http://localhost](http://localhost) oder die lokale IP-Adresse des Computers auf. Daraufhin wird die Startseite der Smartstore-Installation geöffnet.

![](../../../.gitbook/assets/smartstore-installation-startseite-de.png)
