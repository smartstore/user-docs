# Mega Menu

Zu den sichtbaren Highlights seit der Smartstore 3 Version gehört das MegaMenu.  
Das MegaMenu wertet Ihren Shop exklusiv auf – z.B. mit attraktivem Layout, Hintergrundbildern, Produkt-Rotator oder vielfältigen Point&Click Optionen.    
![](./attachments/megamenu-1.PNG)

## Konfiguration des Mega Menu Plugins

Das Mega Menu Plugin wird hauptsächlich innerhalb der [Warengruppen-Konfiguration](../../benutzer-handbuch/katalog/warengruppen-organisieren.md) bedient. Zu diesem Zweck gibt es im Administrationsbereich von [Warengruppen](../../benutzer-handbuch/katalog/warengruppen-organisieren.md) ein "Mega Menu"-Tab, in dem jedes Mega Menu individuell konfiguriert werden kann. Im Konfigurations-Bereich des Plugins werden nur Einstellungen vorgenommen, die globale Gültigkeit haben.

![](./attachments/megamenu-2.PNG)

| **Eingabefeld / Option** | **Beschreibung** |
| --- | --- |
| Ist aktiv | aktiviert/deaktiviert das Mega Menu Plugin |
| Produkt-Rotator Zirkulation | Bestimmt ob der Produkt-Rotator zum ersten Element zurück navigiert nachdem das Ende der angegebenen Elemente erreicht wurde. |
| Produkt-Rotator Geschwindigkeit<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.MegaMenu) | Bestimmt die Zeit, die der Produkt-Rotator benötigt um zum nächsten Element zu navigieren. |
| Produkt-Rotator Interval<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.MegaMenu) | Bestimmt das Interval nach dem der Rotator automatisch zum nächtsten Produkt wechselt. |
| Menu-Mindesthöhe | Legt die Mindesthöhe des Dropdown-Menus fest. |
| "Marken"-Menü anzeigen | Erzeugt einen Menü-Eintrag im Katalogmenü, der Links zu Marken bzw. Herstellern enthält. |

## Konfiguration der Einstellungen in den Warengruppen Details

![](./attachments/warengruppen-megamenu-1.PNG)

![](./attachments/warengruppen-megamenu-2.PNG)

| **Eingabefeld / Option** | **Beschreibung** |
| --- | --- |
| Ist aktiv | Bestimmt ob das Mega Menu ausgegeben wird. |
| Im Mega Menu bevorzugen.<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt ob die Warengruppe bei der Erstellung der Navigationsstruktur bevorzugt werden soll (betrifft nur Warenngruppen die innerhalb des Dropdown-Menus ausgegeben werden). |
| [Maximale Anzahl von Elementen pro Spalte](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.MegaMenu) | Bestimmt die maximale Anzahl von Elementen pro Spalte. |
| [Maximale Anzahl von Unterwarengruppen pro Warengruppe](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.MegaMenu) | Bestimmt die maximale Anzahl von Unterwarengruppen pro Warengruppe. |
| Unterwarengruppen kommagetrennt (inline) darstellen<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt ob Unterwarengruppen umbrochen (eine Zeile pro Warengruppe) oder kommagetrennt dargestellt werden. |
| Ausgabe von Unterwarengruppen in nächster Spalte zulassen<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt ob die Ausgabe von Unterwarengruppen unterbrochen und in der nächsten Spalte fortgesetzt werden kann, wenn die noch darzustellende Anzahl von Unterwarengruppen die Menge der erlaubten Navigationselemente pro Spalte übersteigt. |
| Minimale Anzahl von Unterwarengruppen<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Legt die minimale Anzahl von Unterwarengruppen fest, welche ein Menuelement haben muss, damit es ausgegeben wird (0 bedeuted alles wird ausgegeben). |
| Hintergrundgrafik darstellen<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt ob im Mega Menu-Dropdown eine Hintergrundgrafik dargestellt wird.<br><br>> [!INFO]<br>> Hintergrund-Grafiken werden innerhalb des Dropdown-Elements dargestellt. Die besten Ergebnisse erreicht man mit freigestellten PNG-Grafiken. Diese können durch die Angabe der Offset-Eigenschaften sogar über den Bereich des Dropdown-Menus hinausragen. Außerdem können Sie die Grafik frei verlinken, wodurch sie sich hervorragend als Promotion-Werkzeug nutzen lässt. |
| Einleitungsbereich (linke Spalte) | Für den Einleitungsbereich, der sich über die erste Spalte des Dropdown-Elements erstreckt, können Sie festlegen ob das Bild der Hauptwarengruppe dargestellt wird und einen kleinen Einleitungstext erfassen. Bei diesem Text können Sie auch mit HTML-Formatierungen arbeiten (z.B. <i>, <b>, <a>, usw.). Der Text wird nur im Verbund mit der Grafik dargestellt. |
| Warengruppen-Vorschaubild anzeigen | Bestimmt ob das Vorschaubild der Warengruppe innerhalb der ersten Spalte des Mega Menu-Dropdowns angezeigt wird. |
| Einleitungstext<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt einen Einleitungstext der unterhalb des Warengruppen-Vorschaubildes dargestellt wird. Dieser Text wird nur dargestellt, wenn auch auch das Warengruppen-Vorschaubild angezeigt wird. Die Verwendung von Html-Tags innerhalb des Textes wird unterstützt. |
| Teaser | Der Teaser-Bereich in einem Dropdown-Menu bietet ihnen die Möglichkeit mehr Aufmerksamkeit auf Ihre Produkte zu lenken, indem Sie z.B. eine Auswahl von Produkten bereits mit dem Produkt-Rotator innerhalb des Dropdown-Menus darstellen oder vollkommen frei eigenes HTML definieren. |
| Teaser-Typ<br><br> [](https://wolfgang.smartstore.com/Admin/Category/Edit/2) | Bestimmt die Art des Teasers. |