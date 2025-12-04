# Toolbox Story-Optionen

# Layout

##### Allgemein

![](./attachments/image057.jpg)

**Systemname:** Name der Story 

**Veröffentlicht:** Bestimmt, ob die Story angezeigt wird (Siehe *Veröffentlichungsoptionen*) 

**Veröffentlichen von…bis:** Beschränkt den Zeitraum, in dem die Story angezeigt wird (optional)

**Sortierung:** Bestimmt die Anzeigereihenfolge mehrerer Storys innerhalb derselben Widget Zone.

**In Unterseiten anzeigen:** Bestimmt, ob die Story auch in Unterseiten angezeigt werden soll. Dazu zählen Listen mit einem Seitenindex größer als 1 oder mit mindestens einem aktiven Filter.

**Widget Zonen:** Bestimmt die Positionierung der Story auf der Seite. (Siehe [*Widget Zonen*](../../smartstore-page-builder/sonstiges/widget-zonen.md))

**Ziele:** Bestimmt die Zielseite(n), auf der die Story angezeigt wird. (Siehe *Veröffentlichungsoptionen*)

# Veröffentlichungsoptionen

Eine Story kann in mehreren Widget Zonen und auf mehreren Zielseiten gleichzeitig dargestellt werden.  
Um Ihre Story auf der gewünschten Seite anzuzeigen, vergewissern Sie sich, dass mindestens eine **Widget Zone** und **Zielseite** angegeben wurden und zudem **Veröffentlicht** angeschaltet ist. Widget Zonen bestimmen die Positionierung Ihrer Story auf der gewünschten Seite.

##### Raster

![](./attachments/image059.jpg)

**Zellenabstand:** Definiert den Abstand zwischen den Zellen. Hier können Sie zwischen relativen und absoluten Angaben wählen. Alle möglichen Maßeinheiten finden Sie unter [*Größeneinheiten*](../../smartstore-page-builder/sonstiges/glossar.md).   
[https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-gap](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-gap)

**Container:** Legt die Breite des äußeren Containers fest. (Siehe *Containergrößen*)

**Inhalt Container:** Legt die Breite des inneren Containers fest. (Siehe *Containergrößen*)

**Zellen horizontal verteilen:** Legt fest, wie Zellen horizontal verteilt werden, wenn der Container breiter ist als alle Zellen zusammen. (Siehe *Zellen horizontal verteilen - justify-content*)  
[https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-content)

**Zellen vertikal verteilen:** Legt fest, wie Zellen vertikal verteilt werden, wenn der Container höher ist als alle Zellen zusammen. (Siehe *Zellen vertikal verteilen - align-content*)  
[https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content)

**Auto flow:** *(Nur für erfahrene Anwender)* Definiert, wie der Algorithmus zur automatischen Platzierung von Elementen vorgeht. (Siehe *Auto flow*)   
[https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow)

**Spalten:** *(Nur für erfahrene Anwender)* Hier können Sie manuell Spalten definieren. Tragen Sie dafür einfach die gewünschte Größe und Einheit Ihrer Spalte ein. Separieren Sie einzelne Einträge mit Leerzeichen. Hierbei ist zu beachten, dass die Bearbeitung des Rasters mithilfe der [*Rasterwerkzeuge*](../../smartstore-page-builder/benutzeroberflache/das-raster.md) komfortabler und intuitiver ist.

**Zeilen:** *(Nur für erfahrene Anwender)* Hier können Sie manuell Zeilen definieren. Tragen Sie dafür einfach die gewünschte Größe und Einheit Ihrer Reihe ein. Separieren Sie einzelne Einträge mit Leerzeichen. Hierbei ist zu beachten, dass die Bearbeitung des Rasters mithilfe der *Rasterwerkzeuge* komfortabler und intuitiver ist.

# Containergrößen

**Volle Breite:** Container beansprucht die volle Anzeigebreite.

**Adaptiv:** Beschränkt die Containergröße auf 88% der verfügbaren Anzeigebreite. Es wird jeweils 6% padding an den beiden Seiten, Links und Rechts, angewendet.

**Boxed:** Beschränkt die Containerbreite auf die Breite des Content-Bereichs.

# Zellen horizontal verteilen – justify-content

Diese Einstellung definiert, wie zusätzlich freier Platz innerhalb des Containers genutzt und auf der horizontalen Achse angeordnet wird. Zusätzlich freier Platz innerhalb Ihrer Story kann entstehen, wenn die Größe aller Zellen kleiner als der Container ist. Zum Beispiel wenn Sie drei Spalten mit absoluten Werten von z.B. 20% definieren. So beanspruchen alle Spalten Ihrer Story nur 60% der Containerbreite, 40% sind freier Platz.

![](./attachments/justify-content_1.jpg)

**Start:** Alle Elemente sind linksbündig ausgerichtet.

**Center:** Alle Elemente sind zur Mitte ausgerichtet.

**End:** Alle Elemente sind rechtsbündig ausgerichtet.

**Space-between:** Elemente werden so angeordnet, dass der freie Platz zwischen den Elementen verteilt wird.

**Space-around:** Der freie Platz wird um jedes Element herum aufgeteilt.

# Zellen vertikal verteilen – align-content

Diese Einstellung definiert, wie zusätzlich freier Platz innerhalb des Containers genutzt und auf der vertikalen Achse angeordnet wird.

![](./attachments/align-content_1.jpg)

**Start:** Alle Elemente sind am oberen Rand ausgerichtet.

**Center:** Alle Elemente sind zur Mitte ausgerichtet.

**End:** Alle Elemente sind am unteren Rand ausgerichtet.

**Space-around:** Elemente werden so angeordnet, dass der freie Platz zwischen den Elementen verteilt wird.

**Stretch:** Alle Elemente werden über den freien Platz gestreckt und füllen den Container komplett aus.

# Auto flow (Für erfahrene Anwender)

Wenn Elemente nicht explizit auf dem Raster platziert sind, werden diese automatisch angeordnet. Dafür verfügen Sie über folgende Konfigurationsoptionen, um die Anordnung durch den Algorithmus anzupassen:

**Reihen:** Füllt zuerst Reihen, fügt bei Bedarf Neue hinzu.

**Spalten:** Füllt zuerst Spalten, fügt bei Bedarf Neue hinzu.

**Reihen ohne Leerräume:** Ähnlich wie Reihen, versucht allerdings Lücken zu füllen, wenn möglich. Sollten nachfolgende Elemente kleiner sein und Zwischenräume füllen können, werden diese dort platziert.

**Spalten ohne Leerräume:** Ähnlich wie Spalten, versucht allerdings Lücken zu füllen, wenn möglich. Sollten nachfolgende Elemente kleiner sein und Zwischenräume füllen können, werden diese dort platziert.

##### Stil

**Invertieren:** Invertiert Textfarbe und Ausblendeffekt. Diese Option ist bei dunklen Hintergrundfarben zu empfehlen, um Text deutlich lesbar darzustellen.

![](./attachments/Stil_Invert_1.png)

![](./attachments/Stil_Invert_2.png)

![](./attachments/Context_Editor_Raster_Stil.JPG)

**Mindesthöhe:** Bestimmt die Mindesthöhe des Containers, unabhängig von Inhalt. Wird erst ab der Tablet-Landscape Auflösung angewendet. Einstellungen sind Mittel (400px) und Hoch (700px).

**HTML ID:** Legt die HTML ID fest.

**CSS Klasse:** Extra CSS-Klassen für den äußeren Container.

**CSS Style:** Inline CSS für den äußeren Container.

**Grid CSS Klasse:** Extra CSS-Klassen für den Story-Container.

**Grid CSS Style:** Inline CSS für den Story-Container.