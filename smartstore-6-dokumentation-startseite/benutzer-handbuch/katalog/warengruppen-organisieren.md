# Warengruppen organisieren

Um Ihre Warengruppen zu verwalten, navigieren Sie im Administrationsbereich in Smartstore zu **Katalog > Warengruppen.** Über die oberen Buttons können Sie die Listen- oder die Baumansicht aktivieren. Hier können Sie Warengruppen hinzufügen, bearbeiten oder löschen. Die Listenansicht zeigt, alle erstellten Warengruppen in einer geordneten Liste an und stellt Ihnen ein Such-Widget zur Verfügung, so dass Sie die gesuchte Warengruppe einfach finden können. Die Baumansicht erlaubt Ihnen, die Struktur Ihrer Warengruppen und Untergruppen durch Drag & Drop umzuordnen. 

## Listenansicht

Die Listenansicht bietet eine Filter-Funktion, mit der Sie nach unterschiedlichen  **Warengruppennamen** oder den **Alias** filtern können. Hier haben Sie außerdem die Möglichkeit, Ihre Warengruppen in eine XML-Datei zu exportieren.

## Baumansicht

Die Reihenfolge der Warengruppen, die Sie in der Baumansicht sehen, wird auf die Warengruppenstruktur im Frontend Ihres Shops angewendet und erstellt die Hauptnavigation, welche Ihre Shop-Besucher nutzen werden, um Produkte in Ihrem Shop zu finden. Um Ihre Kategorien umzuordnen, können Sie sie einfach via Drag & Drop auf die gewünschte Position ziehen. 

![](./attachments/2022-10-06%2009_55_52-Warengruppen%20verwalten%20_%20Smartstore%20Administration.png)

## Ansicht der Warengruppendetails

Wenn Sie eine Warengruppe hinzufügen oder verändern, wird Ihnen die unten abgebildete Ansicht zur Bearbeitung der Warengruppendetails angezeigt. Hier können Sie alle mit dieser Warengruppe verbundenen Daten in acht unterschiedlichen Registerkarten angeben. Mit den Buttons in der oberen rechten Ecke erhalten Sie eine Vorschau der Warengruppe, können sie speichern oder löschen. Wenn Sie das Löschen einer Warengruppe auswählen, erscheint ein neues Fenster, welches Sie fragt, ob die Unterwarengruppen auch gelöscht werden sollen oder auf einer höheren Ebene erhalten bleiben sollen.

![](./attachments/2022-10-06%2010_01_20-Warengruppen-Details%20-%20Basketball%20_%20Smartstore%20Administration.png)

### Registerkarte Allgemein

|     |     |
| --- | --- |
| Externer Link | Abweichender, externer Verweis für diese Warengruppe im Hauptmenü und in Warengruppen-Listings. Z.B. auf eine Landingpage, die einen Rückverweis auf die Warengruppe enthält. |
| Name | Dies ist der Standardwert für den Warengruppennamen, der auch dem Shopbesucher im Frontend Ihres Shops angezeigt wird, solange Sie nicht unterschiedliche Werte für andere Sprachen angegeben haben.<br><br>Für weitere Informationen zu Sprachen, lesen Sie [Sprachen verwalten](../../benutzer-handbuch/konfiguration/sprachen-verwalten.md). |
| Vollständiger Name | Dies ist der Standardwert für den vollständigen Namen, der als Titel auf der Warengruppenseite angezeigt wird. |
| Obere Beschreibung | Dies ist der Standardwert für die Beschreibung der Warengruppe, die dem Shop-Besucher im Frontend Ihres Shops angezeigt wird. Das Beschreibungsfeld ist ebenfalls für mehrsprachige Ausgaben aktiviert. Über die Funktion "Andere Beschreibung anzeigen" kann eine zusätzliche Warengruppenbeschreibung hinzugefügt werden die dann unterhalb der Warengruppen-Produkte angezeigt wird. |
| Badge-Text | Dies ist der Standardwert für den Badge-Text. Badge werden innerhalb von Menüs neben den Menüeinträgen dargestellt. |
| Badge-Style | Legt den Stil der Badge fest, die innerhalb von Menus neben den Menueinträgen dargestellt wird. |
| Alias | Ein optionaler, sprachneutraler Referenzname für die interne Nutzung. |
| Design Vorlage | Die Design Vorlage legt fest, wie die Warengruppe und ihre Produkte dem Shop-Besucher angezeigt wird. |
| Bild | Das Bild wird im Frontend überall dort angezeigt, wo Warengruppen in einer Übersicht sichtbar sind, z. B. die Übersicht der Untergruppen innerhalb einer übergeordneten Warengruppe. |
| Übergeordnete Warengruppe | Hier können Sie die übergeordnete Warengruppe auswählen. |
| Preisfilter | Legen Sie den Preisbereich für den Preisbereichfilter des Shops fest. Unterschiedliche Preisbereiche trennen Sie mit einem Semikolon, z. B. ‘0-199;200-300;301;’ (301- bedeutet 301 und teurer). Diese Einstellung wirkt sich auf **Filter Sidebar Widget** aus, das auf der rechten Seite jeder Warengruppe angezeigt wird. Für weitere Informationen zum **Filter Sidebar Widget** lesen Sie [Mit dem Filter Sidebar Widget umgehen](../katalog/produkte-verwalten/mit-dem-filter-sidebar-widget-arbeiten.md). |
| Auf der Homepage zeigen | Legt fest, ob die Warengruppe auf der Startseite Ihres Shops angezeigt wird. Die Warengruppen, die zur Anzeige auf der Homepage ausgewählt wurden, werden unterhalb des Einführungstextes auf der Startseite angezeigt. |
| Veröffentlicht | Legt fest, ob die Warengruppe für Ihre Shop-Besucher sichtbar ist. |
| Reihenfolge | Legt die Reihenfolge fest, in der die Warengruppen innerhalb der übergeordneten Warengruppe angezeigt werden. Die Anzeigenreihenfolge wird automatisch angepasst, wenn Sie Ihre Warengruppen wie oben beschrieben in der Strukturansicht ordnen. |
| Standard Listendarstellung<br><br> [](http://wolfgang.smartstore.net/Admin/Category/Edit/12) | Legt fest, wie Produktlisten standardmäßig dargestellt werden sollen. Der Kunde kann die Darstellung im Shop ändern. |
| Kunde kann Listengröße ändern | Kunden können die Listengröße mit Hilfe einer vorgegebenen Optionsliste ändern. |
| Optionen für die Listengröße | Kommagetrennte Liste für optionale Listengrößenänderung (z.B. 10, 5, 15, 20). Die erste Option ist die Standardgröße, wenn keine ausgewählt wurde. |
| Rabatte | Legt auf das Objekt anzuwendende Rabatte fest. In dieser Registerkarte können Sie Rabatte für die jeweilige Warengruppe aktivieren. Denken Sie daran, dass hier nur Rabatte des Rabatt-Typs *Bezogen auf die Kategorien* verwaltet werden können. Für weitere Informationen zu Rabatten lesen Sie bitte [Rabatte verwalten](../../benutzer-handbuch/marketing-promotion/rabatte-verwalten.md). |
| Auf Shops begrenzt | Legt fest, ob der Eintrag nur für bestimmte Shops verfügbar ist. Für weitere Informationen zu mehreren Shops lesen Sie [Mit mehreren Shops arbeiten](../../benutzer-handbuch/allgemeine-konzepte/mit-mehreren-shops-arbeiten.md). |
| Auf Kundengruppen begrenzt | Legt fest, ob das Objekt nur für bestimmte Kundengruppen verfügbar ist. Für weitere Informationen zu Zugangsberechtigungen lesen Sie [Zugriffsbeschränkungen (ACL)](../../benutzer-handbuch/allgemeine-konzepte/zugriffsbeschrankungen-acl.md). |

### Registerkarte Suchmaschinen (SEO)

In dieser Registerkarte können Sie spezifische SEO-Werte für die Warengruppe festlegen, z.B. **Meta Title**, **Meta Keywords** oder einen SEO-freundliches **URL Alias**. Für weitere Informationen über die Felder in der Registerkarte **Suchmaschinen** lesen Sie bitte [SEO](../../benutzer-handbuch/allgemeine-konzepte/seo.md).

### Registerkarte Produkte

In dieser Registerkarte können Sie Ihrer Warengruppe bereits angelegte Produkte hinzufügen. Wenn Sie auf **Produkt hinzufügen** klicken, öffnet sich ein neues Fenster, das eine strukturierte Liste all Ihrer Produkte anzeigt. Hier können Sie mehrere Produkte auswählen und sie zu dieser Warengruppe hinzufügen. Sie können auch das Such-Widget für die Suche nach einzelnen Produkten verwenden. 

### Registerkarte Mega Menu

In dieser Registerkarte wird die Konfiguration des Mega Menu-Plugins vorgenommen. Für weitere Informationen zum Mega Menu lesen Sie bitte [das Mega Menu Plugin](../../benutzer-handbuch/plugins-designs/mega-menu.md).

### Registerkarte ContentSlider

In dieser Registerkarte können Slider für die Warengruppe hinzugefügt werden. Für weitere Informationen zum ContentSlider lesen Sie [das ContentSlider Plugin](../../benutzer-handbuch/plugins-designs/content-slider.md).

### Andere Registerkarten

Abhängig von den installierten Plugins kann es weitere Registerkarten geben. Für weitere Informationen zu diesen Registerkarten wenden Sie sich bitte an den Entwickler des Plugins.