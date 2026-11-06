# Produkt-Feeds exportieren

Mit Produkt-Feeds stellen Sie Ihre Katalogdaten externen Plattformen wie dem Google Merchant Center bereit. Der Feed enthält die Produktinformationen in dem Format, das der jeweilige Anbieter benötigt.

Smartstore erzeugt Produkt-Feeds über Exportprofile. Für jedes Ziel oder Format können Sie ein eigenes Profil unter **Konfiguration > Exportieren** erstellen.

Ein Exportprofil verwendet einen Export-Provider, der die Daten in das benötigte Format überführt. Der passende Provider wird durch ein installiertes Feed-Plugin bereitgestellt. Starten Sie einen Feed manuell in der Profilliste unter **Konfiguration > Exportieren** mit **Jetzt ausführen** oder direkt im geöffneten Profil mit **Exportieren**. Alternativ richten Sie die regelmäßige Ausführung über die zugehörige geplante Aufgabe ein. Weitere Informationen finden Sie unter [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md). Abhängig von den installierten Feed-Plugins stehen unterschiedliche Zielportale zur Verfügung.

Stimmen Sie das Profil auf das Zielportal ab:

* **Filter:** Begrenzen Sie die Produktauswahl, beispielsweise nach Shop, Veröffentlichungsstatus, Kategorie, Hersteller, Preis oder Bestand.
* **Projektion:** Legen Sie unter anderem Shop, Sprache, Währung und Preisaufbereitung fest. Ob Attributkombinationen als eigene Produkte ausgegeben werden können, hängt vom Export-Provider ab.
* **Konfiguration:** Hier erscheinen die Einstellungen des gewählten Providers, sofern er eine eigene Konfiguration anbietet.
* **Bereitstellung:** Bestimmen Sie, wie das Portal die erzeugten Dateien erhält.

## Das Dateiformat

Das Dateiformat bestimmt der gewählte Export-Provider. Das Plugin **Google Merchant Center Feed** erzeugt beispielsweise XML. Eine allgemeine CSV- oder XML-Produktdatei ist nicht automatisch ein passender Portal-Feed: Feldnamen und Inhalte müssen zum Zielportal passen.

Öffnen Sie nach dem Export in der Profilliste die Anzahl in der Spalte **Exportdateien**. Dort können Sie die Ergebnisdateien herunterladen. Für eine vom Portal abrufbare URL benötigen Sie zusätzlich eine aktive Bereitstellung vom Typ **Öffentlicher Ordner**. Nach erfolgreichem Export und Bereitstellen erscheint der Link unter **Öffentliche Dateien**. Einen Download-Link aus der Administration können Sie dafür nicht verwenden.

Beim Anlegen eines neuen GMC-Profils wird eine Bereitstellung für einen öffentlichen Ordner bereits vorbereitet. Prüfen Sie diese unter **Bereitstellung**. Je nach Anbieter können Sie Dateien auch per FTP oder HTTP übertragen; die verfügbaren Bereitstellungsarten beschreibt [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md).

## Geplante Aufgaben

Beim Erstellen eines neuen Exportprofils legt Smartstore eine zugehörige geplante Aufgabe an. Diese ist zunächst deaktiviert: Das Speichern des Profils allein erzeugt daher keine regelmäßig aktualisierte Feed-Datei. Legen Sie an der Aufgabe den gewünschten Zeitplan fest und aktivieren Sie sie. Auch das Exportprofil muss aktiv sein. Die Aktualisierung erfolgt bei jeder Ausführung, nicht unmittelbar bei jeder Produktänderung. Weitere Informationen finden Sie unter [Geplante Aufgaben verwalten](../../../benutzer-handbuch/system-wartung/geplante-aufgaben-verwalten.md).

Führen Sie vor der regelmäßigen Nutzung einen manuellen Export aus und prüfen Sie die Datei sowie das **Ereignisprotokoll**. Kontrollieren Sie insbesondere Produktauswahl, Preise, Verfügbarkeit, Bilder und Produkt-URLs. Bei einem Abruf über eine feste Feed-URL muss der Dateiname bei späteren Exporten gleich bleiben; verwenden Sie dafür keine wechselnden Zeitstempel oder Zufallswerte im Dateinamenmuster.

## Weiterführende Informationen

* [Google Merchant Center Feed](../../../benutzer-handbuch/plugins/googlemerchantcenter.md)
* [Produkte importieren & exportieren](produkte-importieren-exportieren.md)
