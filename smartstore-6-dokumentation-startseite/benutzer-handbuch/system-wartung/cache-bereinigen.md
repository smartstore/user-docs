# Cache bereinigen

Es gibt unterschiedliche Elemente im Frontend Ihres Shops, die aus Performance-Gründen im Cache zwischengespeichert werden. Der Cache wird automatisch aktualisiert, wenn Sie etwas im Administrations-Bereich Ihres Shops verändern. Wenn Sie die Datenbank jedoch direkt verändert haben, müssen Sie den Cache bereinigen, um die Änderungen sehen zu können. Sie können den Cache bereinigen, indem Sie auf das Zahnrad-Symbol im Administrationsbereich klicken und **Cache löschen** auswählen.

![](./attachments/cache-loeschen.PNG)

> [!INFO]
> Folgende Cache-Typen gibt es zusätzlich in Smartstore.

### Datenbank Cache

Sie können den Cache bereinigen, indem Sie auf das Zahnrad-Symbol im Administrationsbereich klicken und **Datenbank Cache löschen** auswählen. Wenn Sie den Datenbank Cache manuell löschen möchten, finden Sie die entsprechenden Dateien in Ihrem Shop-Verzeichnis unter **App\_Data > EfCache**.

### Output Cache

Weitere Informationen zum Output Cache finden Sie [hier](../../benutzer-handbuch/plugins-designs/output-cache-ausgabecache.md).

### ASP.NET Cache

Um den ASP.NET Cache zu löschen gibt es folgende Methoden:

#### 1. Den Wert von numRecompilesBeforeAppRestart ändern

In der Datei Web.config im root Verzeichnis Ihrer Anwendung finden Sie die Variable "*numRecompilesBeforeAppRestart*".

<compilation targetFramework="4.6.1" numRecompilesBeforeAppRestart="251" batch="true" optimizeCompilations="true">

Ändern Sie den Wert auf z.B. 252 und speichern Sie die Datei.

Laden Sie die Shopseite neu, dieser Vorgang sollte nun etwas länger dauern. Ihr ASP.NET Cache wurde erfolgreich gelöscht.

#### 2\. Global.asax umbenennen

Im Root-Verzeichnis Ihrer Anwendung finden Sie die Datei Global.asax.

Benennen diese um in z.B. Global2.asax.

Bestätigen Sie Ihre Änderung.

Machen Sie dies nun wieder rückgängig und ändern den Dateinnamen wieder in Global.asax.

Laden Sie die Shopseite neu, dieser Vorgang sollte nun etwas länger dauern. Ihr ASP.NET Cache wurde erfolgreich gelöscht.

#### 3\. Manuell löschen

Im Backend unter **Admin > System > Systeminformationen > Geladene Assemblies** finden Sie den Dateipfad des ASP.NET Caches.

Stoppen Sie Ihren IIS/Server.

Löschen Sie den angegebenen Ordner.

Starten Sie Ihren IIS/Server.

Dieser Vorgang sollte nun etwas länger dauern. Ihr ASP.NET Cache wurde erfolgreich gelöscht.

### Bilder Cache

Der Bilder Cache kann bei Bedarf unter **System > Wartung** gelöscht werden.

### Redis