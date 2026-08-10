# Produkt-Feeds exportieren

Mit Produkt-Feeds stellen Sie Ihre Katalogdaten Preisvergleichsportalen wie _Google Shopping_ bereit. Dort können Ihre Angebote beispielsweise in der Registerkarte _Produkte_ der Suchmaschine erscheinen.

Smartstore erzeugt Produkt-Feeds über Exportprofile. Für jedes Ziel oder Format können Sie ein eigenes Profil unter **Konfiguration > Exportieren** erstellen.

Ein Exportprofil verwendet einen Export-Provider, der die Daten in das benötigte Format überführt. Diese Provider werden in der Regel durch Plugins bereitgestellt. Erzeugen Sie einen Feed manuell in der Plugin-Konfiguration oder in der Profilliste unter **Konfiguration > Export**. Alternativ automatisieren Sie die Erstellung über die geplante Aufgabe des Exportprofils. Weitere Informationen finden Sie unter [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md). Abhängig von den installierten Feed-Plugins stehen unterschiedliche Zielportale zur Verfügung.

## Das Dateiformat

Für ein Portal wie _Google Shopping_ benötigen Sie meist eine CSV- oder XML-Datei im vorgegebenen Format. Der Export-Provider erzeugt die erforderlichen Spaltennamen und formatiert deren Inhalte entsprechend. Die URLs der erzeugten Dateien finden Sie unter **Konfiguration > Exportieren** und über die Dateinummer in der Exportprofilliste.

## Feed-Aufgaben

Wenn Sie ein Exportprofil erstellen, wird eine geplante Aufgabe für die Erstellung des Produkt-Feeds angelegt. Sie legt den Zyklus fest, in dem die Produktdaten der Dateien aktualisiert werden. Weitere Informationen zur Planung von Aufgaben finden Sie unter [Geplante Aufgaben verwalten](../../../benutzer-handbuch/system-wartung/geplante-aufgaben-verwalten.md).

## Wie Sie weitere Feed-Plugins erhalten

Weitere Feed-Plugins finden Sie im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/). Im **Smartstore Community Marketplace** finden Sie alle für Smartstore entwickelten Ressourcen, die Sie kostenlos herunterladen oder kaufen können. Weitere Informationen zum Kauf und zur Installation von Plugins finden Sie unter [Wie kaufe ich eine Erweiterung?](https://docs.smartstore.com/pages/viewpage.action?pageId=3768460) und [Wie installiere ich eine Erweiterung?](https://github.com/smartstore/user-docs/blob/main/smartstore-6-dokumentation-startseite/loslegen/community-marketplace/wie-installiere-ich-eine-erweiterung.md).
