# Produkt-Feeds exportieren

Wenn Sie Produkte in einem Onlineshop verkaufen, müssen Sie diese bewerben, sodass potenzielle Kunden sie in Ihrem Shop finden. Eine Möglichkeit besteht darin, Ihre Produkte in einem Preisvergleichsportal wie _Google Shopping_ einzustellen, wodurch Ihre Produkte in der Registerkarte _Produkte_ der Suchmaschine erscheinen.

Produkt-Feeds werden in Smartstore durch Exportprofile generiert. Sie können so viele Profile erstellen, wie Sie möchten. Um ein Exportprofil zu erstellen, navigieren Sie zu **Konfiguration > Exportieren**.

Das Exportprofil verwendet einen Export-Provider, um die Daten in das gewünschte Format zu überführen. Export-Provider werden in der Regel durch Plugins bereitgestellt. Sie können den Feed in der Konfigurationsansicht des Plugins und in der Profilliste unter **Konfiguration > Export** manuell erzeugen. Sie können Feeds außerdem durch eine geplante Aufgabe, die für ein Exportprofil eingerichtet wurde, automatisch erzeugen lassen. Weitere Informationen zu Exportprofilen finden Sie unter [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md). Abhängig von der Anzahl der installierten Feed-Plugins gibt es unterschiedliche Portale, zu denen Sie Ihre Produkte exportieren können.

## Das Dateiformat

Um Ihre Produkte an ein Portal wie _Google Shopping_ zu übermitteln, benötigen Sie eine Datei (normalerweise CSV oder XML) in einem Format, das in der Regel vom Portal vorgegeben wird. Diese Datei enthält die Daten der Produkte, die Sie im Portal anzeigen möchten. Ein Export-Provider formatiert Ihre Daten so, dass sie die Anforderungen des Portals erfüllen. Es wird bestimmte Spaltennamen und speziell formatierte Spalteninhalte aufweisen, wie sie vom Preisportal zur Weiterverarbeitung benötigt werden. Um die URLs zu den erstellten Dateien zu erhalten, navigieren Sie zu **Konfiguration > Exportieren** und klicken Sie auf die Dateinummer in der Exportprofilliste.

## Feed-Aufgaben

Wenn Sie ein Exportprofil erstellen, wird eine geplante Aufgabe für die Erstellung des Produkt-Feeds angelegt. Sie legt den Zyklus fest, in dem die Produktdaten der Dateien aktualisiert werden. Weitere Informationen zur Planung von Aufgaben finden Sie unter [Geplante Aufgaben verwalten](../../../benutzer-handbuch/system-wartung/geplante-aufgaben-verwalten.md).

## Wie Sie weitere Feed-Plugins erhalten

Weitere Feed-Plugins erhalten Sie im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/) erhalten. Im **Smartstore Community Marketplace** finden Sie alle für Smartstore entwickelten Ressourcen, die Sie kostenlos herunterladen oder kaufen können. Weitere Informationen zum Kauf und zur Installation von Plugins finden Sie unter [Wie kaufe ich eine Erweiterung?](https://docs.smartstore.com/pages/viewpage.action?pageId=3768460) und [Wie installiere ich eine Erweiterung?](https://github.com/smartstore/user-docs/blob/main/smartstore-6-dokumentation-startseite/loslegen/community-marketplace/wie-installiere-ich-eine-erweiterung.md).
