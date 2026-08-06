# Smartstore und Datenbank zusammen als Docker-Container betreiben

Diese Anleitung zeigt zwei getrennte Docker-Compose-Beispiele: eines für MySQL und eines für Microsoft SQL Server. Wählen Sie genau eine Variante. Docker Engine beziehungsweise Docker Desktop muss installiert und gestartet sein; Docker Compose muss als `docker compose` verfügbar sein.

Ersetzen Sie in den Beispielen `<RELEASE-TAG>` durch einen für Ihre Smartstore-Version freigegebenen Image-Tag. Legen Sie die verwendeten Passwörter in einer nicht veröffentlichten `.env`-Datei im selben Ordner ab:

```
MYSQL_ROOT_PASSWORD=<sicheres-mysql-passwort>
MSSQL_SA_PASSWORD=<sicheres-sql-server-passwort>
```

### Smartstore und MySQL zusammen als Docker-Container betreiben

Erstellen Sie eine Datei namens `compose.yaml` mit folgendem Inhalt:

```
services:
  web:
    image: ghcr.io/smartstore/smartstore-linux:<RELEASE-TAG>
    container_name: smartstore
    ports:
      - "80:80"
    restart: unless-stopped
    depends_on:
      db:
        condition: service_healthy
    volumes:
      - smartstore_tenants_mysql:/app/App_Data/Tenants
  db:
    image: mysql:8.4
    container_name: mysql
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: smartstore
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h localhost -p$$MYSQL_ROOT_PASSWORD"]
      interval: 10s
      timeout: 5s
      retries: 10
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  smartstore_tenants_mysql:
  mysql_data:
```

Öffnen Sie ein Befehlsfenster, wechseln Sie in den Ordner der Dateien `compose.yaml` und `.env` und starten Sie die Dienste im Hintergrund:

`docker compose up -d`

Prüfen Sie anschließend mit `docker compose ps`, ob beide Container ausgeführt werden. Die Smartstore-Installation erreichen Sie unter `http://localhost`. Verwenden Sie dort folgende MySQL-Verbindungsdaten:

Server: `db`\
Port: `3306`\
Datenbankname: `smartstore`\
Benutzer: `root`\
Passwort: Wert von `MYSQL_ROOT_PASSWORD` aus der `.env`-Datei

Die Installation sieht dann wie folgt aus:

![](../../../.gitbook/assets/smartstore-installation-mysql-de.png)

### Smartstore und Microsoft SQL Server zusammen als Docker-Container betreiben

Erstellen Sie für diese Variante eine Datei namens `compose.yaml` mit folgendem Inhalt:

```
services:
  web:
    image: ghcr.io/smartstore/smartstore-linux:<RELEASE-TAG>
    container_name: smartstore
    ports:
      - "80:80"
    restart: unless-stopped
    depends_on:
      db:
        condition: service_healthy
    volumes:
      - smartstore_tenants_mssql:/app/App_Data/Tenants
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    container_name: sqlserver
    restart: unless-stopped
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_PID: "Express"
      MSSQL_SA_PASSWORD: ${MSSQL_SA_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P \"$$MSSQL_SA_PASSWORD\" -C -Q \"SELECT 1\" || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 12
      start_period: 30s
    volumes:
      - mssql_data:/var/opt/mssql

volumes:
  smartstore_tenants_mssql:
  mssql_data:
```

Starten und prüfen Sie die Dienste wie in der MySQL-Variante. Verwenden Sie im Smartstore-Installer folgende Verbindungsdaten:

Server: `db`\
Port: `1433`\
Datenbankname: `smartstore`\
Benutzer: `sa`\
Passwort: Wert von `MSSQL_SA_PASSWORD` aus der `.env`-Datei

Die Installation sieht dann wie folgt aus:

![](../../../.gitbook/assets/smartstore-installation-mssql-de.png)

{% hint style="info" %}
Verwenden Sie individuelle, starke Passwörter und veröffentlichen Sie die `.env`-Datei nicht. Die Datenbankports werden in diesen Beispielen nicht auf dem Docker-Host freigegeben, weil Smartstore den Dienst `db` direkt über das Compose-Netzwerk erreicht.
{% endhint %}

Mit `docker compose logs` können Sie die Protokolle anzeigen. `docker compose down` stoppt und entfernt die Container, erhält aber die benannten Volumes. Verwenden Sie `docker compose down -v` nur, wenn die darin gespeicherten Shop- und Datenbankdaten ausdrücklich gelöscht werden sollen.
