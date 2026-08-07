# Mit mehreren Shops arbeiten

Mit einer Multi-Shop-Konfiguration richten Sie Produktangebot und Darstellung gezielt auf unterschiedliche Zielgruppen aus. Jeder Shop kann über eine eigene Domain erreichbar sein und [individuell konfiguriert](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md) werden.

## Anwendungsszenario

Betreiben Sie beispielsweise ein Modelabel, können Sie getrennte Shops für unterschiedliche Zielgruppen oder Marken einrichten. Mit eigenen Farben und Layouts erhält jeder Shop eine passende Ansprache.

## Voraussetzung

Konfigurieren Sie die Website im IIS so, dass alle verwendeten Hostnamen Ihrer Smartstore-Installation zugeordnet sind. Fügen Sie dazu für jeden Hostnamen eine passende Sitebindung hinzu.

![](../../.gitbook/assets/iis-site-bindings.png)

## Einen neuen Shop anlegen

Öffnen Sie im Administrationsbereich **Konfiguration > Shops** und klicken Sie auf **Neu**. Legen Sie anschließend Shopname, URL und bei Bedarf ein eigenes Logo fest. Weitere Einstellungen erläutert die folgende Tabelle.

| **Eingabefeld**              | **Beschreibung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content Delivery Network URL | Die URL eines CDN, z. B. [https://xxx.cloudfront.net](https://xxx.cloudfront.net) oder [http://xxx.cloudflare.net](http://xxx.cloudflare.net). Diese Einstellung bewirkt, dass statische Mediendateien durch das CDN bereitgestellt werden.                                                                                                                                                                                                                                                                   |
| Leitwährung                  | Legt die Leitwährung des Shops fest.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Umrechnungswährung           | Legt die Umrechnungswährung für diesen Shop fest.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SSL                          | Aktivieren Sie diese Option, wenn Ihr Shop SSL-verschlüsselt sein soll.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| HOST-Werte                   | <p>Kommaseparierte Liste möglicher HTTP_HOST-Werte (z. B. "<a href="http://mein-shop.com">mein-shop.com</a>,<a href="http://www.mein-shop.de">www.mein-shop.de</a>"). Diese Einstellung wird nur in einer Multi-Shop-Umgebung benötigt, um den aktuellen Shop zu ermitteln.<br><br><strong>Info</strong><br>Die HOST-Werte müssen den Sitebindungen entsprechen, die im IIS angegeben wurden. Sie sind verantwortlich für die korrekte Zuordnung und Weiterleitung von HTTP-Serveranfragen zu Ihrem Shop.</p> |
| ID des HTML-Body             | <p>Ermöglicht es, individuelles CSS und JavaScript für einen Shop zu verwenden. Wenn Sie einen Wert eingeben (z. B. <strong>my-first-shop</strong>), haben Sie einen eindeutigen Bezeichner, durch den Sie die DOM-Struktur des Shops unabhängig von anderen konfigurierten Shops erreichen können.<br><br><code>&#x3C;br>#my-first-shop table {&#x3C;br> border: 1px solid black;&#x3C;br>}&#x3C;br></code></p>                                                                                              |
| Reihenfolge                  | <p>Bestimmt die Position des Shops in der Liste; 1 steht für den ersten Eintrag.<br><br><strong>Achtung</strong><br>Erhöhen Sie die Reihenfolge für jeden zusätzlichen Shop. Andernfalls kann es zu Problemen mit dem TaskScheduler kommen.</p>                                                                                                                                                                                                                                                               |

## Produkte & Warengruppen zu einem Shop hinzufügen

Neue Produkte und Warengruppen werden standardmäßig in allen konfigurierten Shops angezeigt. Um die Anzeige einzuschränken, öffnen Sie das Produkt oder die Warengruppe, aktivieren **Auf Shops begrenzt** und wählen die gewünschten Shops aus.

## Einstellungen in einer Multistore-Umgebung konfigurieren

Sie können unterschiedliche Einstellungen für jeden Ihrer angelegten Shops vornehmen. Für weitere Informationen lesen Sie bitte [den Einstellungsbereich festlegen](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md).

## Plugins bei mehreren Shops konfigurieren

Sie können Plugins für einzelne Shops aktivieren beziehungsweise deaktivieren. Für weitere Informationen lesen Sie bitte [Plugins verwalten](../plugins/plugins-verwalten.md).
