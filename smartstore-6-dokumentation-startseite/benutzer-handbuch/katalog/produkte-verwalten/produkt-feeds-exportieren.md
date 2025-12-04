# Produkt-Feeds exportieren

Wenn Sie Produkte in einem Onlineshop verkaufen, müssen Sie diese bewerben, so dass mögliche Kunden sie in Ihrem Shop finden. Eine Möglichkeit besteht darin, Ihre Produkte in einem Preisvergleichsportal wie *Google Shopping* einzustellen, wodurch Ihre Produkte in der Registerkarte *Produkte* der Suchmaschine erscheinen.

Produkt-Feeds werden in Smartstore durch Export-Profile generiert. Sie können so viele Profile erstellen, wie Sie möchten. Um ein Export-Profil zu erzeugen, navigieren Sie zu **Konfiguration > Exportieren**.

Das Export-Profil nutzt einen Export Provider, um die Daten in das gewünschte Format zu überführen. Export-Provider werden in der Regel durch Plugins gestellt. Sie können den Feed manuell erzeugen in der Konfigurationsansicht des Plugins und in der Profilliste unter **Konfiguration > Export**. Sie können Feeds auch durch eine geplante Aufgabe, die für ein Export-Profil eingerichtet wurde, automatisch ausführen lassen. Für weitere Informationen zu Export-Profilen lesen Sie bitte [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md). Abhängig von der Anzahl der installierten Feed-Plugins gibt es unterschiedliche Portale, zu denen Sie Ihre Produkte exportieren können.

## Das Dateiformat

Um Ihre Produkte in ein Portal wie *Google Shopping* zu überführen, benötigen Sie eine Datei (normalerweise CSV oder XML), in einem Format welches in der Regel durch das Portal selbst vorgegeben wird. Diese Datei enthält die Daten der Produkte, die Sie in dem Portal anzeigen möchten. Ein Export-Provider formatiert Ihre Daten in ein spezifisches Dateiformat, welches darauf abgestimmt ist, die Erfordernisse des Portals zu erfüllen. Es wird bestimmte Spaltennamen und speziell formatierte Spalteninhalte aufweisen, wie sie vom Preisportal zur Weiterverarbeitung benötigt werden. Um die URLs zu den erstellten Dateien zu erhalten, navigieren Sie zu **Konfiguration > Exportieren**, und klicken Sie auf die Dateinummer in der Export-Profil-Liste.

## Feed Aufgaben 

Wenn Sie ein Export-Profil erstellen, wird eine geplante Aufgabe für die Generation des Produkt-Feeds angelegt, welche den Zyklus definiert, in dem die Produktdaten der Dateien aktualisiert werden. Für weitere Information über die Planung von Aufgaben lesen Sie bitte [Geplante Aufgaben verwalten](../../../benutzer-handbuch/system-wartung/geplante-aufgaben-verwalten.md).

## Wie sie weitere Feed-Plugins erhalten

Mehr Feed-Plugins können Sie im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/) erhalten. Im **Smartstore Community Marketplace** finden Sie alle für Smartstore entwickelten Ressourcen, dort können Sie entweder kostenlos heruntergeladen oder gekauft werden. Für weitere Informationen, wie Plugins gekauft und installiert werden, lesen Sie bitte [Wie kaufe ich eine Erweiterung?](https://docs.smartstore.com/pages/viewpage.action?pageId=3768460) and [Wie installiere ich eine Erweiterung?](../../../../smartstore-6-dokumentation-startseite/loslegen/community-marketplace/wie-installiere-ich-eine-erweiterung.md).