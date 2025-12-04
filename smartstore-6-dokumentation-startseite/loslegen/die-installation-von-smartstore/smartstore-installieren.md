# Smartstore installieren

Rufen Sie die Smartstore-Installationsseite durch Eingabe von `<Server-IP>` oder `localhost` in Ihrem Browser auf.

Oben rechts auf der Seite haben Sie die Möglichkeit, die *Sprache* zu ändern, *die für die Installation verwendet werden soll*.

Unten auf der Seite können Sie die *Sprache des installierten Shops auswählen*. Weitere Sprachen können nach der Installation im Backend hinzugefügt werden.

![](./attachments/smartstore-installation-startpage-de.png)

| **Feldname** | **Beschreibung** | **Beispiel** |
| --- | --- | --- |
| Administrator E-Mail | Die E-Mail-Adresse des Admin-Benutzers. |     |
| Administrator Passwort | Das Kennwort des Admin-Benutzers. |     |
| Passwort bestätigen | Bestätigung des Admin-Benutzers. |     |
| Datenbanksystem | Wählen Sie hier das Zieldatenbanksystem aus. Derzeit werden MS SQL Server und MySQL unterstützt. |     |
| Verbindung | Wählen Sie hier, ob Sie die Verbindungsdaten einzeln oder als Connectionstring eingeben möchten. | **MS SQL-Server Daten einzeln:**<br><br>Servername: mssqlexpress<br><br>Datenbankname: smartstore<br><br>SQL Server-Authentifizierung<br><br>Anmeldename: dbuser\_smartstore<br><br>Kennwort: smartstore<br><br>**Connectionstring:**<br><br>DataConnectionString: Data Source=mssqlexpress;Initial Catalog=smartstore;Integrated Security=False;Persist Security Info=False;User ID=dbuser\_smartstore;Password=smartstore; |
| Servername | Geben Sie hier den Namen oder die IP-Adresse ein (je nachdem, wie der Datenbankserver erreicht werden kann und eingerichtet ist). |     |
| Datenbankname | Geben Sie hier den Namen der Datenbank ein. Wenn keine Datenbank mit diesem Namen existiert, wird sie erstellt. |     |
| Authentifizierung | Wählen Sie aus, wie die Authentifizierung am Datenbankserver erfolgen soll. Je nach Datenbankserver und Betriebssystem stehen verschiedene Auswahlmöglichkeiten zur Verfügung. |     |
| Anmeldename | Geben Sie hier den Benutzernamen für die Authentifizierung am Datenbankserver für die Datenbank ein. |     |
| Kennwort | Geben Sie hier das Kennwort für die Authentifizierung am Datenbankserver für die Datenbank ein. |     |
| Primäre Sprache | Wählen Sie hier die Hauptsprache des Shops. Sie können nach der Installation weitere Sprachen hinzufügen und auch die primäre Sprache ändern. |     |
| Dateispeicher für Medien | Wählen Sie aus, wo die Mediendateien gespeichert werden sollen. |     |
| Beispieldaten erzeugen | Wählen Sie aus, ob Demodaten erstellt werden sollen. Die Demodaten umfassen einige Produkte, Kategorien, Hersteller usw. |     |

Wenn Sie die vollständigen Datenbankinformationen eingegeben haben, klicken Sie auf “**Installieren”**. Es erscheint eine Meldung, in der Sie aufgefordert werden, zu bestätigen, dass Sie mit der Installation von Smartstore beginnen möchten. Wenn Sie auf Bestätigen klicken, wird Smartstore mit der Installation Ihres Shops beginnen. Sobald die Datenbank erstellt ist und alle Plugins installiert sind, wird die Installation erfolgreich abgeschlossen und eine Erfolgsmeldung angezeigt.