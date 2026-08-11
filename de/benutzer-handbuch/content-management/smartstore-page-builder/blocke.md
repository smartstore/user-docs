# Blöcke

## Blöcke Übersicht

Blöcke sind ein essenzieller Bestandteil des Page Builders. Sämtliche Inhalte werden mithilfe von Blöcken dargestellt. Je nach gewünschtem Inhalt stehen Ihnen verschiedene Blöcke zur Verfügung.

![](../../../.gitbook/assets/Blocks.png)

**① Text:** Stellt Text formatiert dar. Des Weiteren kann der Text-Block Schaltflächen, Icons, Hintergründe sowie Effekte u. v. m. darstellen.

**② Bild:** Stellt ein einzelnes Bild dar. Der Bild-Block eignet sich am besten, wenn ein Bild ohne Text dargestellt werden soll.

**③ Produktliste:** Präsentiert Produkte in einer Liste, einem Raster oder als Slider. Durch eine manuelle Produktauswahl oder durch eine warengruppenbezogene Auswahl werden die anzuzeigenden Produkte bestimmt.

**④ Warengruppen:** Ähnlich wie bei der Produktliste werden bei diesem Block Warengruppen gelistet.

**⑤ Herstellerliste:** Ähnlich wie bei der Produktliste werden bei diesem Block Hersteller gelistet.

**⑥ IFrame:** Zeigt externe Seiten innerhalb eines IFrames an.

**⑦ Galerie:** Präsentiert Bilder in einer Liste, einem Raster oder als Slider.

**⑧ Video:** Zeigt ein Video an. Hierbei sollte das MP4-Format hinterlegt werden, da dieses Format von nahezu allen Browsern unterstützt wird.

**⑨ YouTube:** Bindet YouTube-Videos durch das Hinterlegen einer YouTube-ID oder -URL ein.

**⑩ SoundCloud:** Bindet SoundCloud-Audiostreams ein.

**⑪ Google Maps:** Zeigt einen Standort mit Google Maps an.

**⑫ Blog**: Zeigt Einträge Ihres Blogs an.

**⑬ News**: Zeigt Einträge Ihrer News an.

**⑭ Newsletter:** Bietet Kunden die Option, Ihren Newsletter zu abonnieren.

**⑮ Umfrage:** Mit diesem Block können Sie kurze Umfragen erstellen.

**⑯ Code:** Dient zum Einbinden von eigenem JavaScript, HTML oder CSS-Code. IntelliSense (Autovervollständigung) unterstützt dabei das Arbeiten.

**⑰ ViewComponent:** Dieser Block ist für Entwickler gedacht. Mithilfe des ViewComponent-Blocks können Sie eigene Module einbinden.

**⑱ Story:** Fügt bereits existierende Stories als atomaren Block ein. Auf diese Art können Sie einfach und schnell sehr umfangreiche und große Stories gestalten, welche aus mehreren kleineren Stories zusammengesetzt werden.

All diese Blöcke verfügen über die gleichen Basiseinstellungen, wie z. B. Hintergrund und Effekte. Sie erfahren mehr zu den Basiseinstellungen unter [_Block-Basiseinstellungen_](blocke/block-basiseinstellungen.md). Des Weiteren können Sie unter [_blockspezifische Einstellungen_](blocke/blockspezifische-einstellungen.md) mehr zu den einzelnen Blöcken erfahren.

\{% hint style="info"} Denken Sie daran, dass manche Blöcke wie Video oder Google Maps sowie Blockeffekte, keinen Inhalt im _Bearbeitungsmodus_ anzeigen. Wechseln Sie, um alle Inhalte anzuzeigen, in den _Vorschaumodus_.

Ein Video über die Blöcke in der Übersicht finden Sie auf [Youtube](https://www.youtube.com/watch?v=j43k8nUgKUs\&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s\&index=3)

## Block bearbeiten

Sie können Ihrer Story einen Block hinzufügen, indem Sie den gewünschten Block einfach per Drag\&Drop aus dem Blöcke-Tab in eine Zelle innerhalb [_des Rasters_](benutzeroberflache/das-raster.md) ziehen. Um die Größe des Blocks zu modifizieren, wählen Sie diesen an. Nun können Sie durch Klicken und Ziehen am oberen, unteren oder rechten Rand die Größe des Blocks bestimmen. Alternativ können Sie auch, um die Größe zu ändern, an einer der beiden rechten Ecken des Blocks ziehen. Um den Block in Ihre gewünschte Position zu bringen, ziehen Sie den Block einfach per Drag\&Drop, wie beim Einfügen, in die gewünschte Zelle. Die Größe einer Zelle wird durch die Zeilen- und Spaltenangaben bestimmt. Wenn diese auf [_auto_](sonstiges/glossar.md) beziehungsweise auf [_min/max-content_](sonstiges/glossar.md) eingestellt sind, wird die Zellengröße durch den Blockinhalt bestimmt.

Um einen Block zu modifizieren, rufen Sie die Block-Aktionen auf, indem Sie den gewünschten Block auswählen. Alternativ können Sie auf die Block-Aktionen auch über den [_Block-Manager_](benutzeroberflache/block-manager.md) zugreifen. Klicken Sie dafür einfach den gewünschten Block im Block-Manager an.

![](../../../.gitbook/assets/image076.jpg)

**① Konfigurieren:** Öffnet den Block-Editor. Je nach Blocktyp öffnet sich ein anderer Editor. Hier können Sie den Inhalt des Blocks anpassen.

**② Nach oben:** Erhöht den [_z-index_](blocke/toolbox-block-optionen.md) Wert des Blocks.

**③ Nach unten:** Verringert den z-index-Wert des Blocks. Der z-index kann nicht unter 0 fallen.

**④ Duplizieren:** Erstellt eine exakte Kopie des Blocks und fügt diesen in der nächsten freien Spalte/Zeile ein.

**⑤ Löschen:** Löscht den Block permanent aus der Story.

Ein Video zur Anordnung von Blöcken finden Sie auf [Youtube](https://www.youtube.com/watch?v=_XqRv4of_4M\&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s\&index=6)

## Block-Aktionen

Um die Block-Aktionen anzeigen zu lassen, fahren Sie mit der Maus über den gewünschten Block im Block-Manager. Die nun angezeigten Block-Aktionen stimmen exakt mit den Steuerelementen überein, die am linken Rand des Blocks angezeigt werden, wenn dieser ausgewählt wurde.

![](../../../.gitbook/assets/blockoptionen_2.png)

Hier können Sie auf verschiedene Block-Aktionen zugreifen, wie zum Beispiel auf den Bearbeitungsmodus des Blocks, um den Inhalt anzupassen. Mit den Pfeilen können Sie den z-index des Blocks erhöhen oder verringern, wodurch die Blockreihenfolge angepasst werden kann.

In dem nachfolgenden Beispiel wird die Blockreihenfolge innerhalb der Story leicht abgeändert, da der Block _Get the look_ den höchsten z-index zugewiesen bekommt.

![](../../../.gitbook/assets/image055.png)

Beachten Sie die Reihenfolge der Blöcke im Block-Manager und wie der Block _Get the look_ nun das _%_-Bild innerhalb der Story überdeckt.

Blöcke werden absteigend nach dem z-index in der Story angezeigt. Dementsprechend werden auch alle Blöcke einer Story im Block-Manager aufgelistet. Da der Block _Get the look_ über einen höheren z-index verfügt als andere Blöcke in der Story, wird dieser als oberstes Element im Block-Manager und innerhalb der Story angezeigt.
