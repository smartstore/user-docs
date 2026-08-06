# Modifiziertes Docker-Image erstellen

### Softwarevoraussetzungen

* Docker oder Docker Desktop ist installiert.
* Shell-Skripte können ausgeführt werden.

Angenommen, Sie möchten das [Smartstore Community Edition Docker Image](https://github.com/smartstore/Smartstore/pkgs/container/smartstore-linux) verwenden und zusätzlich ein selbst entwickeltes Plugin oder ein Plugin eines Drittanbieters integrieren. Wie lässt sich dieses Plugin in das Docker-Image aufnehmen?

{% hint style="info" %}
Das Beispiel wird unter Windows ausgeführt. Unter Linux ist das Vorgehen ähnlich.
{% endhint %}

### Download der Community Edition

Laden Sie die Smartstore Community Edition von [GitHub](https://github.com/smartstore/Smartstore/releases) herunter. Die Versionen des Smartstore-Releases und des Plugins müssen übereinstimmen.

Für das Docker-Image benötigen wir die Linux-Version von Smartstore.

![](../../../.gitbook/assets/BVFWng93ph.png)

**Erstellen Sie einen Unterordner**. Dessen Name ist frei wählbar; im Beispiel lautet er `build_my_docker_image`. **Erstellen Sie darin einen weiteren Ordner** namens `smartstore-linux-x64` und **entpacken Sie den Inhalt der Datei** in diesen Ordner.

![](../../../.gitbook/assets/docker_folder.png)

**Platzieren Sie Ihr eigenes Plugin oder das Plugin eines Drittanbieters** im Unterordner `\Modules` von `\smartstore-linux-x64`. **Legen Sie es entpackt und nicht als ZIP-Datei ab**.

![](../../../.gitbook/assets/a8KX1KD3GX.png)

Sie benötigen nun die **Docker-Datei** und die **Skriptdatei** mit den Anweisungen zum **Erstellen des Docker-Images**.

**Erstellen Sie eine leere Textdatei** im Ordner `\build_my_docker_image` und nennen Sie sie `Dockerfile` (ohne Dateiendung). **Kopieren Sie den folgenden Inhalt hinein** und **speichern Sie die Datei**.

```
# -----------------------------------------------------------
# Creates a Docker image from an existing build artifact
# -----------------------------------------------------------

ARG ASPNET_TAG=7.0

FROM mcr.microsoft.com/dotnet/aspnet:${ASPNET_TAG}
EXPOSE 80
EXPOSE 443
ENV ASPNETCORE_URLS "http://+:80;https://+:443"

# Copy
ARG SOURCE=/smartstore-linux-x64

WORKDIR /app
COPY ${SOURCE} ./

# Install wkhtmltopdf
RUN apt update &&\
	apt -y install wget &&\
	wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_amd64.deb &&\ 
	apt -y install ./wkhtmltox_0.12.6-1.buster_amd64.deb &&\
	rm ./wkhtmltox_0.12.6-1.buster_amd64.deb

ENTRYPOINT ["./Smartstore.Web", "--urls", "http://0.0.0.0:80"]
```

Erstellen Sie anschließend die Datei `dockerize.linux.nobuild.sh`. Kopieren Sie den folgenden Inhalt hinein und speichern Sie die Datei.

```
docker build -t smartstore-linux-image -f Dockerfile .
echo 'Press enter to exit...'; read dummy;
```

Mit dem Schalter `-t` wird das Image "**getaggt**", d. h. mit einem Namen versehen. Diesen können Sie **beliebig ändern**.

Das Ergebnis sollte wie folgt aussehen:

![](../../../.gitbook/assets/OPc1TZMkZ0.png)

Durch das **Ausführen** der Datei `dockerize.linux.nobuild.sh` **erstellen Sie das neue Image**.

![](../../../.gitbook/assets/0bmdlaBhkJ.png)
