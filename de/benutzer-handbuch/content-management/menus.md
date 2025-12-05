# Menüs

Mit dem Menü Builder unter **CMS-> Menüs** können Sie neue Menüs erstellen oder bestehende Menüs bearbeiten und erweitern.  
![](./attachments/menues-1.PNG)

## Bestehende Menüs bearbeiten / erweitern

Für die Bearbeitung der Footer-Menüs, der Menu-Bar im Kopfbereich sowie des Warengruppen-Menüs auf den entsprechenden Systemnamen klicken.  
  
![](./attachments/menue-2.PNG)

## Menü-Typen

Es stehen unterschiedliche Menü-Typen zur Verfügung.  
Internes Objekt oder URL, Route und Warengruppenbaum.

**Internes Objekt oder URL**

| **Eingabefeld** | **Beschreibung** |
| --- | --- |
| Ziel | Legt das Ziel des Links fest. Dies kann ein Link zu einem Produkt, einer Warengruppe, einer Hersteller-Seite, einer eigenen erstellten Seite, einer Datei oder einer beliebigen URL sein. |
| Übergeordnetes Menüelement<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Legt das übergeordnete Menüelement fest. Lassen Sie das Feld leer, um ein Menüelement erster Ebene zu erzeugen. |
| Veröffentlicht<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Legt fest, ob das Menüelement im Shop sichtbar ist. |
| Titel<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Legt den Titel fest. |
| Kurzbeschreibung | Legt eine Kurzbeschreibung fest. Wird als 'title' Attribut für das Menüelement verwendet. |
| Erforderliche Rechte | Legt Zugriffsrechte fest, die für die Anzeige des Menüelementes erforderlich sind (mind. 1 Recht muss gewährt sein). |
| Reihenfolge<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Legt die Reihenfolge des Menüelements innerhalb einer Menüebene fest. |
| Gruppe beginnen<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Fügt vor den Link ein Trennelement sowie optional eine Überschrift ein (Kurzbeschreibung). |
| Icon<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Legt ein optionales Icon fest. |
| nofollow<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=entity&menuId=4&parentItemId=0) | Gibt das HTML-Attribut rel='nofollow' aus. |
| In neuem Browsertab öffnen | Öffnet das Ziel in einem neuen Browsertab. |
| HTML ID | Legt das HTML ID Attribut für das Menüelement fest. |
| CSS Klasse | Legt eine CSS Klasse für das Menüelement fest. |

**Route**

Mit einer Route ist es möglich eine Action direkt, durch klicken auf einen Link, auszuführen zu lassen. Mittels JSON müssen je nach Action der Controller-, Action- sowie Area-Name und ggf. Parameter übergeben werden.

Alternativ können auch z.B. News verlinkt werden. Dabei ist zu beachten, dass anstelle von Controller-Namen etc. der SEO Name übergeben wird.

Diese Konfigurationsoptionen sind eher etwas für Entwickler.

| **Eingabefeld** | **Beschreibung** |
| --- | --- |
| Ziel<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=route&menuId=4&parentItemId=0) | Legt das Ziel des Links fest. In dem unteren Eingabefeld werden die Route Werte als JSON eingetragen. |
| weitere Optionen | Die weiteren Optionen sind identisch mit den Optionen des Menü-Typs **Internes Objekt oder URL.** |

### Beispiel DevTools

Ziel: SmartStore.DevTools  
{  
"Controller":"DevTools",  
"action":"Test",  
"area":"SmartStore.DevTools"  
"parameter":"0"  
}

### Beispiel MenüItem

Ziel: NewsItem  
{  
"SeName":"die-zuse-z3"  
}

**Warengruppenbaum**

| **Eingabefeld** | **Beschreibung** |
| --- | --- |
| Ziel<br><br> [](https://wolfgang.smartstore.com/Admin/Menu/CreateItem?providerName=catalog&menuId=4&parentItemId=0) | Der Warengruppenbaum wird dynamisch in das Menü eingebunden. |
| weitere Optionen | Die weiteren Optionen sind identisch mit den Optionen des Menü-Typs **Internes Objekt oder URL.** |