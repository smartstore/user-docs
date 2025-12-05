# Plugins verwalten

Plugins können in Smartstore verschiedene Funktionen haben. Sie können als Zahlungsarten, Versandarten oder Widgets fungieren. Jedes Plugin hat eigene Konfigurationsmöglichkeiten mit denen verschiedene Einstellungen vorgenommen werden können, die das Verhalten des Plugins steuern. Sie können den Konfigurationsbereich ansteuern, indem Sie **Konfigurieren** bei dem jeweiligen Plugin anklicken. Plugins sind in logische Gruppen unterteilt, dazu gehören Administration, Marketing, Zahlung & Gateways, Versand & Logistik, u.s.w. Sie können also einfach gefunden werden, indem man zu der jeweiligen Plugins-Kategorie scrollt. Um ein Plugin zu finden können Sie auch die Suchfunktion nutzen, die sich in der oberen Funktions-Leiste befindet. Jedes Plugin in der Liste zeigt Informationen über sich an, dazu gehören Autor, Version und Systemname des Plugins wie auch die Webseite, über die es bezogen werden kann.

- Für weitere Informationen zu Zahlungsarten lesen Sie bitte [Zahlungsarten einrichten](#). 
- Für weitere Informationen zu Widgets lesen Sie bitte [Widgets anordnen](#). 
- Für weitere Informationen zu Versandarten lesen Sie bitte [Versandarten einrichten](#). 

 Um Plugins zu verwalten, navigieren Sie bitte zu **Plugins > Plugins verwalten**. 

![](./attachments/plugin-list-de.png)

## Wie Sie ein Plugin installieren 

Es gibt zwei Möglichkeiten, ein Plugin zu installieren. Die Auswahl hängt von dem Paket ab, in dem Sie das Plugin erhalten haben. Wenn Sie eine .nupkg Datei erhalten haben (so wie Plugins im [SmartStore Community Marketplace](http://community.smartstore.com/index.php?/files/) angeboten werden), können Sie das Plugin im Verwaltungsbereich für Plugins hochladen und installieren. Wenn Sie ein Plugin-Verzeichnis erhalten haben, installieren sie es manuell, indem Sie es in das Verzeichnis */Plugins der* Smartstore App auf Ihrem Webspace hochladen. Es gibt auch Plugins, die sich bereits mit Smartstore ausgeliefert werden, aber noch nicht installiert wurden, da nicht jeder Shopbetreiber sie benötigt. Ein Plugin, das noch nicht instsalliert wurde, können Sie daran erkennen, dass der Button **Installieren** direkt neben dem Plugin angezeigt wird. Sie können mehrere Plugins in einem Schritt installieren, indem Sie neben jedem der Plugins auf **Installieren** drücken. Sobald Sie alle der zu installierenden Plugins ausgewählt haben, klicken Sie auf den Button **Aufgaben ausführen** oben rechts im Verwaltungsbereich für Plugins, in dem die Anzahl auszuführenden Aufgaben angezeigt wird. Gleichzeitig können Sie auch installierte Plugins deinstallieren. Um diese den auszuführenden Aufgaben hinzuzufügen, klicken Sie auf den Button **Deinstallieren** neben dem jeweiligen Plugin. 

### Installation einer NUPKG-Datei

Navigieren Sie im Menü zu **Plugins -> Plugins verwalten**, und klicken Sie auf **Plugin hochladen**. Wählen Sie die nupkg-Datei, und klicken Sie auf **Hochladen & Installieren**. Das Plugin wird nun installiert und kann konfiguriert werden. 

### Manuelle Installation eines Plugins

Sie können Plugins auch manuell installieren, indem Sie sie in das Verzeichnis */Plugins* laden. Nach dem Hochladen müssen Sie die Liste der Plugins neu laden, indem Sie **Bearbeiten > Plugin-Liste erneut laden** anklicken. Nun wird Ihr neues Plugin in der Plugin-Liste angezeigt und kann konfiguriert und benutzt werden. Wenn Sie ein Plugin auf diese Weise aktualisieren, klicken Sie auch auf **Ressourcen aktualisieren**, um neue textuelle Ressourcen des Plugins zu laden, die noch nicht zu Ihrem Shop hinzugefügt wurden, als Sie das Plugin installiert haben. Sie können die Ressourcen aller Plugins auch in einem Schritt aktualisieren, indem Sie auf **Bearbeiten > Sprachressourcen aller Plugins aktualisiere Plugins**  ob rechts im Verwaltungsbereich der Plugins auswählen.

## Wie man weitere Plugins erhält

Weitere Plugins können Sie über den [SmartStore Community Marketplace](http://community.smartstore.com/index.php?/files/) beziehen. Der **SmartStore Community Marketplace** ist der Ort, wo Sie alle für Smartstore erstellte Ressourcen angeboten finden und kostenlos oder gegen Bezahlung herunterladen können. Für weitere Informationen, wie Sie Plugins kaufen und installieren können, lesen Sie bitte [Wie kaufe ich eine Erweiterung?](#) und [Wie installiere ich eine Erweiterung?](#).

## Wie man ein Plugin lizenziert

Wenn Sie ein Plugin in Smartstore installieren, das eine Lizenz benötigt, können Sie die Funktionalität 30 Tage im Demo Mode testen. Nach Ablauf der Testphase wird das Plugin seine Funktionalität einstellen, bis es lizenziert wurde. Ein grün hinterlegtes Feld zeigt Ihnen an, wie viele Tage Sie sich noch in der Testphase befinden. Die meisten Plugins können in vollem Funktionsumfang getestet werden, wenn Sie im Demo Mode sind. Ausgenommen davon sind die Feed Plugins, die nur 20 Datensätze exportieren. Um ein Plugin zu lizenzieren, klicken Sie einfach auf **Lizenzieren** in der Leiste unter dem Plugin. Daraufhin erscheint ein Dialogfeld für die Lizenzierung für jeden Ihrer Shops. Geben Sie den im [SmartStore Community Marketplace](http://community.smartstore.com/index.php?/files/) erworbenen Lizenz-Schlüssel für das Plugin ein, und klicken Sie auf OK. Wenn der Lizenz-Schlüssel gültig ist, erscheint eine grüne Markierung mit dem Text **Lizenziert** neben dem Plugin. Neben der Angabe  **Auf Shops begrenzt** werden alle Shops aufgeführt, für die das Plugin lizenziert wurde. Mit **Prüfung erneuern** können Sie eine neue Prüfung durchführen, ob die eingegebene Lizenz in der Datenbank des [SmartStore Community Marketplace](http://community.smartstore.com/index.php?/files/) vorhanden ist.

![](./attachments/plugin-licensing-de.png)

![](./attachments/licensing-dialog-de.png)