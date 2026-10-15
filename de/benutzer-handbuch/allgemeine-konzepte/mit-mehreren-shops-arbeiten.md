# Mit mehreren Shops arbeiten

Mit einer Multi-Shop-Konfiguration richten Sie Produktangebot und Darstellung gezielt auf unterschiedliche Zielgruppen aus. Jeder Shop kann über eine eigene Domain erreichbar sein und [individuell konfiguriert](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md) werden.

## Anwendungsszenario

Betreiben Sie beispielsweise ein Modelabel, können Sie getrennte Shops für unterschiedliche Zielgruppen oder Marken einrichten. Mit eigenen Farben und Layouts erhält jeder Shop eine passende Ansprache.

## Voraussetzung

Alle verwendeten Domains müssen auf dieselbe Smartstore-Installation zeigen. Wenn Sie IIS verwenden, legen Sie dafür passende Sitebindungen für die Hostnamen an. Richten Sie für HTTPS zudem gültige Zertifikate ein.

![](../../.gitbook/assets/iis-site-bindings.png)

## Einen neuen Shop anlegen

Öffnen Sie im Administrationsbereich **Konfiguration > Shops** und klicken Sie auf **Neu**. Erfassen Sie die Shopdaten und speichern Sie den neuen Shop. Die Felder haben folgende Bedeutung:

| **Eingabefeld**              | **Beschreibung**                                                                                                                                                                                                                                                                                               |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shoplogo                     | Logo für diesen Shop. Lassen Sie das Feld leer, wenn Sie kein eigenes Shoplogo verwenden möchten.                                                                                                                                                                                                              |
| Name                         | Name des Shops im Administrationsbereich.                                                                                                                                                                                                                                                                      |
| Shop URL                     | Stamm-URL des Shops einschließlich eines gegebenenfalls verwendeten Basispfads, zum Beispiel `https://mein-shop.de/`.                                                                                                                                                                                          |
| HTTPS erforderlich           | Leitet Aufrufe über HTTP automatisch zu HTTPS weiter. Aktivieren Sie dies erst, wenn ein gültiges Zertifikat für die Domain eingerichtet ist.                                                                                                                                                                  |
| HTTPS Port                   | Optionaler HTTPS-Port für Weiterleitungen, falls Sie keinen Standardport verwenden. Das Feld erscheint bei aktiviertem HTTPS.                                                                                                                                                                                  |
| HOST-Werte                   | Tragen Sie die Domains dieses Shops ohne Protokoll, getrennt durch Kommas, ein, zum Beispiel [mein-shop.com](http://mein-shop.com) und [www.mein-shop.de](http://www.mein-shop.de). Smartstore ordnet Anfragen anhand des Hostnamens dem Shop zu. Die Domains müssen am Webserver auf die Installation zeigen. |
| Content Delivery Network URL | Basis-URL eines für diesen Shop eingerichteten CDN, das die Smartstore-Mediendateien ausliefert. Smartstore verwendet diese Adresse bei der Erzeugung von Medien-URLs.                                                                                                                                         |
| Standardwährung              | Legt fest, welche Währung im Frontend dieses Shops vorausgewählt ist.                                                                                                                                                                                                                                          |
| ID des HTML-Body             | Optionaler Bezeichner im `body`-Element. Damit können Sie CSS und JavaScript gezielt auf diesen Shop anwenden, zum Beispiel über `#my-first-shop`.                                                                                                                                                             |
| Reihenfolge                  | Bestimmt die Sortierung der Shops. Der erste Shop dient außerdem als Standardshop, wenn ein Aufruf keinem konfigurierten Hostnamen zugeordnet werden kann.                                                                                                                                                     |
| Favicon                      | Optionales Icon im `.ico`-Format für diesen Shop.                                                                                                                                                                                                                                                              |
| PNG-Icon                     | Optionales Icon im `.png`-Format für diesen Shop.                                                                                                                                                                                                                                                              |
| Apple-Touch-Icon             | Optionales Icon für Verknüpfungen auf Apple-Geräten.                                                                                                                                                                                                                                                           |
| Microsoft-Kachelbild         | Optionales Bild für eine angeheftete Microsoft-Kachel.                                                                                                                                                                                                                                                         |
| Microsoft-Kachelfarbe        | Optionaler Hintergrundfarbwert für die Microsoft-Kachel.                                                                                                                                                                                                                                                       |

## Verfügbarkeit je Shop festlegen

Nach dem Anlegen bestimmen Sie, welche Einträge in welchen Shops verfügbar sind. Das betrifft Produkte, Warengruppen und Hersteller ebenso wie Seiten, Menüs und Menüeinträge. Auch Sprachen, Währungen, Länder, Kundenkonten, Zahlungs- und Versandarten, Checkout-Attribute, Kampagnen und Nachrichtenvorlagen lassen sich auf Shops begrenzen.

Öffnen Sie den jeweiligen Eintrag und wählen Sie im Feld **Auf Shops begrenzt** die gewünschten Shops. Ohne Auswahl ist der Eintrag in allen Shops verfügbar.

Die Shop-Zuordnung einer Warengruppe gilt nicht automatisch für ihre Unterwarengruppen und Produkte. Im Warengruppen-Editor können Sie die gespeicherte Zuordnung auf diese Einträge übertragen. Dabei werden deren vorhandene Shop-Zuordnungen überschrieben. Prüfen Sie die Auswahl deshalb vor dem Übertragen.

Installierte Plugins können Sie in der Plugin-Übersicht über **Verfügbar für** auf ausgewählte Shops begrenzen. Ohne Begrenzung stehen sie in allen Shops zur Verfügung. Weitere Informationen finden Sie unter [Plugins verwalten](../plugins/plugins-verwalten.md).

## Einstellungen je Shop anpassen

Sie können unterschiedliche Einstellungen für jeden Ihrer angelegten Shops vornehmen. Für weitere Informationen lesen Sie bitte [den Einstellungsbereich festlegen](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md).
