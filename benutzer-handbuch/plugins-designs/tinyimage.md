# TinyImage

Mit dem TinyImage Plugin können die hochgeladenen Bilder komprimiert werden.

![](./attachments/tinyimage.PNG)

## Konfiguration des TinyImage Plugins  
  

| **Eingabefeld / Option** | **Beschreibung** |
| --- | --- |
| **Komprimierung** | TinyImage wendet intelligente Komprimierungstechniken auf Bilder an, um ihre Dateigröße um bis zu 80% zu reduzieren. Beachten Sie jedoch, dass dadurch die Verarbeitungs-Geschwindigkeit für Bilder, die noch nicht im Cache liegen, leicht abnimmt. Beachten Sie außerdem, dass während der Komprimierung - je nach Bild - die Speicherauslastung temporär mehrere hundert MB steigen kann. |
| Uploads komprimieren | Wendet Komprimierung auf hochgeladene Bilder an. |
| Thumbnails komprimieren | Wendet Komprimierung auf dynamisch generierte Thumbnails an. |
| **Formate** | > [!INFO]<br>> Wenn Sie alle Formate deaktivieren, findet - unabhängig von anderen Optionen - keine Komprimierung mehr statt. |
| PNG Dateien komprimieren<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.TinyImage) | Reduziert die Größe von PNG-Dateien, indem die Anzahl der Farben selektiv verringert wird. |
| JPG Dateien komprimieren | Reduziert die Größe von JPG-Dateien. Generiert außerdem 'progressive' JPEGs, wenn die Quelldatei größer als 10 KB ist. |
| GIF Dateien komprimieren<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.TinyImage) | Reduziert die Größe von (animierten) GIF-Dateien. |
| **WebP** | WebP ist ein relativ neues Format für die verlustfreie Komprimierung von Bildern und wird derzeit von Chrome, Chrome Mobile und Opera unterstützt (ca. 70 % Markanteil Stand 2018). TinyImage kann dem Browser Bilder im WebP Format liefern, sofern er dies unterstützt. Anderen Browsern werden Bilder in ihrem Ursprungsformat (PNG oder JPG) geliefert. Je nach Bild ist es aber möglich, dass für PNG- und JPG-Dateien bessere Komprimierungsraten erzielt werden. Daher empfehlen wir für Formate, die bereits komprimiert werden, WebP zu deaktivieren. Wenn Sie jedoch Wert auf insgesamt schnelle Bildverarbeitung und minimale Speicherauslastung legen, dann schalten Sie WebP ein, und PNG- sowie JPG-Komprimierung aus. |
| WebP statt PNG<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.TinyImage) | Generiert und liefert WebP- statt PNG-Dateien an WebP-fähige Browser aus. |
| WebP statt JPG | Generiert und liefert WebP- statt JPG-Dateien an WebP-fähige Browser aus. |
| **Tools** | TinyImage verwendet im Hintergrund verschiedene Drittanbieter-Tools für die Komprimierung, wobei die Auswahl vom Dateiformat abhängt. Jedes Tool bietet diverse Optionen zum Festlegen der Ausgabequalität. Die TinyImage Voreinstellungen bieten den besten Kompromiss zwischen Dateigöße und Qualität. Sollten Sie dennoch Anpassungen vornehmen wollen, besuchen Sie die Anbieter-Seiten für mehr Informationen. |
| **Verschiedenes** |     |
| Benachrichtigungen anzeigen | Blendet nach einem Datei-Upload eine kurze Zusammenfassung über die erzielte Komprimierungs-Rate ein. |