# Linux Server vorbereiten

Um die Dokumentation zu vereinfachen, werden wir uns nur mit der Linux-Distribution Ubuntu Server (insbesondere Ubuntu Server 21.10) beschäftigen. Die Installation sollte bei anderen Distributionen ähnlich sein. Hier geht es um die Installation von Smartstore auf einer frisch installierten Ubuntu-Instanz. Wenn Ihre Instanz bereits mit NGINX, FTP-Server, etc. vorinstalliert ist, können Sie den entsprechenden Abschnitt überspringen.

* * *

## Anforderungen

- Smartstore (self-contained, framework-unabhängig) für Linux X64
- Ubuntu Server 21.10
- Nicht-Root-Benutzer mit sudo-Rechten

## Ablauf

- .NET Installation und andere Voraussetzungen
- NGINX Reverse Proxy installieren
- Firewall konfigurieren
- FTP-Server installieren und konfigurieren
- NGINX einrichten
- MySQL oder MS SQL-Server einrichten
- Smartstore als Dienst einrichten

## .NET und andere Voraussetzungen

> [!INFO]
> Hinweis: Offizielle Smartstore-Releases sind framework-unabhängig, was bedeutet, dass auf dem Zielsystem keine .NET Runtime benötigt wird. Wenn Sie Ihr eigenes Framework-abhängiges Release erstellen, muss die .NET Runtime auf dem Zielsystem installiert sein.

Um .NET Runtime 7 zu installieren, führen Sie bitte den folgenden Befehl in der Kommandozeile aus:

```
sudo apt install -y dotnet-runtime-9.0
sudo apt update && sudo apt install -y wget apt-transport-https
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update
```

Überprüfen der Installation:

`dotnet --info`

### `wkhtmltopdf` installieren

Da diese Komponente distributionsabhängig ist, wird sie nicht mit Smartstore geliefert und muss manuell installiert werden.

`sudo apt-get update`

`sudo apt -y install wkhtmltopdf`

## NGINX installieren

NGINX ist eine Open-Source-Webserver-Software mit Lastausgleich und Medien-Streaming. Sie funktioniert auch als Reverse Proxy. Obwohl [ASP.NET](http://ASP.NET) Core mit Kestrel eine Standard-Server-Implementierung hat, überwiegen die Vorteile von NGINX unter Linux.

Prüfen Sie, ob NGINX bereits installiert ist:

`systemctl status nginx`

![](./attachments/nginx_not_installed_w.png)

![](./attachments/NGINX_installed.png)

Wenn NGINX bereits installiert ist, können die folgenden Schritte übersprungen werden.

#### Das System aktualisieren und NGINX installieren

Dieser Befehl aktualisiert die Paketinformationen des Paketmanagers, so dass der Zugriff auf aktuelle Pakete und deren Abhängigkeiten gewährleistet ist.

`sudo apt-get update`

Jetzt kann NGINX installiert werden:

`sudo apt-get install nginx`

#### Installation prüfen

Um die Installation zu überprüfen, können Sie diesen Befehl verwenden:

`nginx -v`

![](./attachments/linux_check_nginx_installation.png)

#### NGINX-Dienst zum Systemstart hinzufügen

Damit NGINX nach einem Server-Neustart ausgeführt werden kann, muss es als Dienst eingerichtet werden.

`sudo systemctl enable nginx`

#### NGINX-Konfiguration neu laden und den Dienst neu starten

`sudo systemctl reload nginx`

## Firewall-Regeln konfigurieren

Dieser Abschnitt kann übersprungen werden, wenn die Firewall-Funktionalität an anderer Stelle zur Verfügung steht oder wenn eine Firewall nicht benötigt wird.

Wir gehen davon aus, dass die ufw (**u**ncomplicated **f**ire**w**all) installiert ist. Zunächst listen wir die bereits eingerichteten Anwendungsprofile auf.

`sudo ufw app list`

> [!INFO]
> Hinweis: Wenn der Befehl mit `sudo: ufw: command not found` zurückgegeben wird, dann ist keine Firewall installiert und dieser Punkt kann übersprungen werden oder die Firewall muss installiert werden.

Üblicherweise sind drei NGINX-Profile verfügbar:

- **Nginx Full**: Dieses Profil öffnet Port 80 und 443 für NGINX.
- **Nginx HTTP**: Dieses Profil öffnet nur Port 80 für NGINX.
- **Nginx HTTPS**: Dieses Profil öffnet nur Port 443 für NGINX.

Wir aktivieren das vollständige Webprofil mit Port 80 und Port 443 für SSL:  
`sudo ufw allow 'Nginx FULL'`

Kontrollieren Sie das Ergebnis des Befehls:

`sudo ufw status`

Wenn die Firewall nicht aktiviert ist, wird diese Ausgabe angezeigt:

![](./attachments/ufw_inactive.png)

Wenn der aktuelle Zugriff auf diesen Server über SSH erfolgt, muss das SSH-Profil aktiviert werden, bevor die Firewall aktiviert wird:

`sudo ufw allow 'OpenSSH'`

Nun kann die Firewall mit dem folgenden Befehl aktiviert werden:

`sudo ufw enable`

## FTP-Server installieren und konfigurieren

Die Smartstore-Installationsdateien müssen in einem Ordner auf dem Server bereitgestellt werden. Wenn die Dateien extern bereitgestellt werden und nicht direkt auf den Server heruntergeladen werden, ist ein FTP-Zugang erforderlich. Zu diesem Zweck installieren wir den FTP-Server `vsftp`.

Mit diesem Befehl installieren Sie `vsftp`:

`sudo apt install vsftpd`

Ist die Firewall aktiviert, müssen die Ports 20 und 21 für FTP und 40000 bis 50000 (dieser Bereich ist frei wählbar) für passive FTP-Verbindungen geöffnet werden. Wenn TLS gewünscht ist, muss auch der Port 990 geöffnet werden:

```
sudo ufw allow 20/tcp
sudo ufw allow 21/tcp
sudo ufw allow 40000:50000/tcp
sudo ufw allow 990/tcp
```

### FTP-Benutzer anlegen

Dieser Befehl erstellt einen Benutzer mit der Kennung "`ftpuser`":

`sudo adduser ftpuser`

Wenn `ftpuser` keinen SSH-Zugang haben soll, muss er in der SSH-Konfigurationsdatei deaktiviert werden:

`sudo nano /etc/ssh/sshd_config`

Am Ende der Konfigurationsdatei anfügen:

`DenyUsers ftpuser`

Nachdem Sie die Konfigurationsdatei gespeichert haben, starten Sie den SSH-Dienst neu:

`sudo service sshd restart`

### Berechtigungen für Ordner

Wir wollen Dateien in den Ordner `/var/www/html` übertragen, also legen wir den Ordner darüber als Heimatordner für den `ftpuser` fest:

`sudo usermod -d /var/www ftpuser`

Setzen Sie den `ftpuser` als Eigentümer von `/var/www/html`:

`sudo chown ftpuser:ftpuser /var/www/html`

### Weitere Konfiguration

Benennen Sie die vorhandene Konfigurationsdatei um:

`sudo mv /etc/vsftpd.conf /etc/vsftpd.conf.bak`

Erstellen Sie eine neue Konfigurationsdatei und öffnen Sie sie mit `nano` (Editor):

`sudo nano /etc/vsftpd.conf`

Fügen Sie das unten stehende ein und beenden Sie den Editor, nachdem Sie die Datei gespeichert haben:

```
listen=NO
listen_ipv6=YES
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
use_localtime=YES
xferlog_enable=YES
connect_from_port_20=YES
chroot_local_user=YES
secure_chroot_dir=/var/run/vsftpd/empty
pam_service_name=vsftpd
force_dot_files=YES
pasv_min_port=40000
pasv_max_port=50000
```

### `vsftp` neu starten

Mit diesem Befehl wird der FTP-Server neu gestartet:

`sudo systemctl restart vsftpd`

## NGINX einrichten

Um zu überprüfen, ob NGINX läuft und erreichbar ist, können Sie die NGINX-Standard-Landingpage aufrufen. Wenn die IP-Adresse oder der Hostname unbekannt ist, kann die IP-Adresse mit dem folgenden Befehl angezeigt werden:

`hostname -I`

Öffnen Sie die Startseite, z. B. über die IP-Adresse, wie folgt:

`http://ip-address`

Die Standard-Startseite für NGINX wird angezeigt:

![](./attachments/welcome_nginx.png)

### NGINX als Reverse-Proxy einrichten

[ASP.NET](http://ASP.NET) Core-Apps können auch direkt mit dem Kestrel-Webserver ausgeführt werden, aber da Kestrel derzeit nicht alle Funktionen hat, die ein vollwertiger Webserver wie IIS oder NGINX hat, verwenden wir NGINX auf Linux. NGINX übernimmt hier die Rolle eines Reverse Proxy und leitet die Anfragen an den Kestrel Webserver weiter.

Öffnen Sie die folgende Datei mit einem Editor und ersetzen Sie den Inhalt durch das Codeschnipsel:

`sudo nano /etc/nginx/sites-available/default`

Ersetzen Sie den Inhalt durch dieses Codeschnipsel. Ersetzen Sie `example.com` durch Ihren eigenen Domänennamen. Wenn es noch keinen Domänennamen gibt, kann auch die IP des Servers eingegeben werden.

```
server {
	listen        80;
	server_name   example.com *.example.com;
	location / {
			proxy_pass         http://127.0.0.1:5000;
			proxy_http_version 1.1;
			proxy_set_header   Upgrade $http_upgrade;
			proxy_set_header   Connection keep-alive;
			proxy_set_header   Host $host;
			proxy_cache_bypass $http_upgrade;
			proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header   X-Forwarded-Proto $scheme;
    		   }
       }
```

Danach muss die NGINX-Konfiguration neu geladen werden:

`sudo systemctl reload nginx`

## MySQL-Server installieren

Smartstore ist für den Einsatz mit MySQL oder MS SQL Server ausgelegt.  
Wenn Sie MySQL installieren, können Sie selbstverständlich die Installation eines MS SQL Servers überspringen.

Wie immer aktualisieren wir zunächst den lokalen Paketindex:

`sudo apt update`

Nun kann MySQL mit dem folgenden Befehl installiert werden:

`sudo apt install mysql-server`

Wir empfehlen, MySQL gegen Angriffe abzusichern.  
Dazu rufen Sie das Skript mit dem folgenden Befehl auf:

`sudo mysql_secure_installation`

Dieses Skript fragt Sie unter anderem, ob das Plugin "Validate Password" installiert und eingerichtet werden soll. Dieses Plugin testet die Stärke von Passwörtern.

![](./attachments/linux-mysql-installing-validate-passwd-component.png)

Bei der Installation des Plugins werden Sie aufgefordert, eine Stufe der Passwortvalidierung zu wählen. Wenn Sie die stärkste Stufe, Stufe 2, wählen, müssen MySQL-Passwörter mindestens acht Zeichen lang sein und eine Mischung aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten.

Unabhängig von der Installation des Plugins werden Sie auch aufgefordert, ein Passwort für den Root-Benutzer festzulegen. Die übrigen Einstellungen können auf den Standardwerten bleiben.

Das neu gesetzte root-Passwort ist noch nicht für die Verbindung zur MySQL-Shell konfiguriert. Zu diesem Zweck muss die MySQL-Authentifizierungsmethode wie folgt angepasst werden:

`mysql -u root -p`

Authentifizierungsmethode prüfen:

`SELECT user,authentication_string,plugin,host FROM mysql.user;`

Wenn der `root`\-Benutzer über das `auth-socket`\-Plugin authentifiziert wird, muss das `root`\-Konto neu konfiguriert werden. Dieser Befehl ändert das bisherige Root-Passwort. Es sollte ein sicheres Passwort gewählt werden. Ersetzen Sie `password` durch Ihr eigenes Passwort in dem Befehl.

`ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';`

Danach müssen die MySQL-Berechtigungstabellen neu geladen werden:

`FLUSH PRIVILEGES;`

Mit diesem Befehl verlassen Sie die MySQL-Shell:

`exit`

### Eigenen MySQL-Benutzer für Smartstore anlegen

Aus Sicherheitsgründen arbeiten wir nicht mit dem Root-Benutzer, sondern legen einen eigenen Benutzer für unsere Datenbank an.

Dazu melden wir uns in der MySQL-Shell als root-Benutzer an:

`mysql -u root -p`

Nun erstellen wir einen mysql-Benutzer "`smartstore`" mit dem Passwort "`password`". Bitte passen Sie `smartstore` und p`assword` an Ihre eigenen Bedürfnisse an:

`CREATE USER 'smartstore'@'localhost' IDENTIFIED BY 'password';`

Nun müssen wir dem neuen Benutzer Berechtigungen zuweisen. Mit dem nachstehenden Befehl erteilen wir dem Benutzer Berechtigungen für alle Tabellen sowie Berechtigungen zum Hinzufügen, Ändern und Entfernen von Benutzerberechtigungen.

`GRANT ALL PRIVILEGES ON *.* TO 'smartstore'@'localhost' WITH GRANT OPTION;`

Mit dem Befehl `exit` verlassen wir die Shell:

`exit`

## MS SQL Server installieren

Bitte befolgen Sie die Anweisungen von Microsoft auf dieser Website: [Ubuntu: Install SQL Server on Linux](https://docs.microsoft.com//en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15)

## Smartstore als Dienst einrichten

### Dateien übertragen

Nachdem alles installiert ist, müssen die Smartstore-Installationsdateien auf den Server kopiert werden.  
Übertragen Sie die Dateien per FTP in den Ordner `/var/www/html`.

### Dienst einrichten

Smartstore ist eine .NET-Anwendung und muss daher gestartet werden. Zu Testzwecken kann dies manuell erfolgen, aber auf einem Produktionsserver sollte die Anwendung als Dienst konfiguriert werden. Hierfür verwenden wir den `systemd` System- und Sitzungsdienst.

Erstellen Sie eine Dienstdefinitionsdatei für `systemd`:

`sudo nano /etc/systemd/system/kestrel-smartstore.service`

Fügen Sie den folgenden Codeauszug ein und speichern Sie ihn:

```
[Unit]
Description=Smartstore Core Web App running on Linux

[Service]
WorkingDirectory=/var/www/html
ExecStart=/var/www/html/Smartstore.Web
Restart=always
#Restart service after 10 seconds if dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=smartstore-core
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

> [!INFO]
> Passen Sie ggf. die Pfade in `WorkingDirectory` und `ExecStart` an.

> [!INFO]
> Code für **framework-abhängige** Bereitstellung:
> `ExecStart=/usr/bin/dotnet /var/www/html/Smartstore.Web.dll`
> Code für die **eigenständige** Bereitstellung:
> `ExecStart=/var/www/html/Smartstore.Web`

### Aktivieren und Starten des Dienstes

Dienst aktivieren:

`sudo systemctl enable kestrel-smartstore.service`

Dienst starten:

`sudo systemctl start kestrel-smartstore.service`

> [!INFO]
> Um den Dienst zu stoppen: `sudo systemctl stop kestrel-smartstore.service`

### Einstellen der Ordnerberechtigungen

Setzen Sie den eigenen Benutzer als Eigentümer des Websiteordners mit vollen Lese-, Schreib- und Ausführungsrechten:

`chown -R www-data/var/www/html/`

Webserver als Gruppenbesitzer festlegen:

`chgrp -R www-data /var/www/html/`

Rekursiv Lese-, Schreib- und Ausführungsberechtigungen für den Eigentümer und die Gruppe für alle Dateien und Ordner festlegen und keine Berechtigungen für andere:

`chmod -R 750 /var/www/html/`

Vererbung von Gruppenbesitz an neue Dateien und Ordner:

`chmod g+s /var/www/html/`

Spezielle Ordner rekursiv mit Schreibrechten für Webserver versehen:

`chmod -R g+w /var/www/html/App_Data`

`chmod -R g+w /var/www/html/Modules`

Die Datei `Smartstore.Web` als ausführbar deklarieren:

`chmod +x /var/www/html/Smartstore.Web`

Sie können nun mit der Installation von Smartstore fortfahren.