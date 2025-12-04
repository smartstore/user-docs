# Tipps & Tricks

# Beste Vorgehensweisen

**Mobile First**

Beachten Sie das [*Mobile First*](../../smartstore-page-builder/story/responsive-darstellung.md) Konzept. Gestalten und erstellen Sie Ihre Story von klein nach groß – von Mobile hin zu Desktop.

**Änderungen**

Sollten Sie zu einem späteren Zeitpunkt Änderungen an Ihrer Story vornehmen, vergewissern sie sich, dass diese bei höheren Auflösungsstufen den gewünschten Effekt hat. Wenn dort schon abweichende Einstellungen eingetragen sind, werden diese nicht überschrieben.

 **Testen**

Testen Sie Ihre fertige Story ausführlich für alle verschiedenen Auflösungen und Endgeräte.

**Vorschaumodus**

Verwenden Sie regelmäßig den *Vorschaumodus* um einen besseren Eindruck von Ihrer Story in der Enddarstellung zubekommen. Zudem werden viele Effekte, sowie Story-Hintergründe erst im Vorschaumodus angezeigt.

**Header Tags**

Aufgrund SEO-technischer Gründe sollten Sie mit der Verwendung von h1 und h2 Tags sehr sparsam umgehen. Sie können die Schriftgröße von einem Text-Block unabhängig des h\*-Tags gesondert einstellen.

**Text auf Bild platzieren**

Wenn Sie Text auf einem Bild darstellen wollen, dann nutzen Sie am besten ausschließlich den [*Text-Block*](../../smartstore-page-builder/blocke.md) und fügen das Bild als [*Hintergrund*](https://smartstore.atlassian.net/wiki/spaces/SDDE60/pages/2510950298/Hintergrund) ein.

# FAQ

**Warum wird meine fertige Story nicht angezeigt?**

Vergewissern Sie sich, dass die Story mindestens eine *Zielseite* und eine [*Widget Zone*](../sonstiges/widget-zonen.md) zugewiesen bekommen hat und zudem *Veröffentlicht* aktiviert ist. Siehe [*Veröffentlichungsoptionen*](../../smartstore-page-builder/story/toolbox-story-optionen.md).

**Warum ändert sich das Layout meiner Story je nach Auflösungsstufe?**

Die Story gibt die Einstellungen einer jeden Auflösung von Smartphone bis hin zu Desktop weiter. Wenn Sie Änderungen in der Desktopeinstellung vornehmen, werden diese in der Smartphone Auflösung nicht übernommen . Wenn Sie allerdings Änderungen an der Smartphone-Einstellung vornehmen, kann es sein, dass ihre Desktopeinstellung verändert wird. Siehe [*Responsive Darstellung*](../../smartstore-page-builder/story/responsive-darstellung.md).

**Warum werden Änderungen an meinem Layout von nachfolgenden Auflösungsstufen nicht übernommen?**

Vergewissern Sie sich, dass Einstellungen, einer höheren Auflösungsstufe, die bereits vorhandenen nicht überschreiben. An diesen Stellen wird der Wert von der vorherigen Auflösungsstufe geerbt, wenn kein Wert für die derzeitige Auflösungseinstellung eingetragen ist.

**Wo kann ich Widget Zonen sehen? / Wie kann ich herausfinden wo sich Widget Zonen befinden?**

Aktivieren Sie die Widget Zonen-Darstellung unter **Admin > Plugins > Developer Tools**. Anschließend werden Widget Zonen angezeigt, wenn Sie mit einem Administrator-Account angemeldet sind. Der Name der jeweiligen Widget Zone wird angezeigt, wenn Sie mit der Maus über das Widget Zonen-Tag fahren.

**Wieso finde ich die** ***Toolbox Story-Optionen*** **(Layout / Hintergrund / Blöcke) am rechten Rand nicht mehr?**

Vergewissern Sie sich, dass Sie derzeitig keinen Block ausgewählt haben. Wenn Sie einen Block auswählen, werden anstelle der [*Story-Optionen*](../../smartstore-page-builder/story/toolbox-story-optionen.md) die [*Block-Optionen*](../../smartstore-page-builder/blocke/toolbox-block-optionen.md) angezeigt. Um den Block abzuwählen, drücken Sie auf eine freie Stelle innerhalb Ihrer Story im [*Raster*](../../smartstore-page-builder/benutzeroberflache/das-raster.md) oder wählen Sie den ausgewählten Block erneut an.

**Wo finde ich die Einstellungen für** ***padding*** **&** ***margin*****?**

Klicken Sie einen Block an, welchen Sie konfigurieren möchten. Sie sehen am rechten Rand die [*Toolbox*](../../smartstore-page-builder/benutzeroberflache/toolbox.md). Da ein Block ausgewählt ist, zeigt die Toolbox nun Block-Optionen an. Hier können Sie *padding* & *margin* und weitere Optionen einstellen.

**Wieso kann ich bei** ***margin*** **&** ***padding*** **nichts einstellen, beziehungsweise nichts eintragen?**

Klicken Sie in eines der Felder für *margin* / *padding* und ziehen Sie dabei die Maus mit gedrückter Maustaste nach oben zur Erhöhung und nach unten zur Verminderung des Abstandes.

**Wie kann ich Text auf einem Bild darstellen?**

Wenn Sie Text auf einem Bild darstellen wollen, sollten Sie wenn möglich, nur den Text-Block verwenden. Fügen Sie beim Text-Block Ihr gewünschtes Bild einfach als Hintergrund ein. Die Textformatierung können Sie mithilfe der Text-Block-Einstellungen oder mithilfe der Toolbox Block-Optionen einstellen.

**Wieso wird mein Hintergrundbild/-effekt (Bild / Farbe / Verlauf / Video / Schattierung) beim Bearbeiten nicht angezeigt?**

Aktivieren Sie den *Vorschaumodus*. Siehe [*Allgemeine Steuerelemente*](../../smartstore-page-builder/benutzeroberflache.md).

**Wieso wird meine Schaltfläche nicht angezeigt?**

Damit die Schaltfläche des Text-Blockes dargestellt wird, muss ein *Linkziel* und ein *Anzeigetext* oder *Icon* angegeben sein.

**Wieso lässt sich mein Block nicht auswählen?**

Vergewissern Sie sich, dass Sie den richtigen Block ausgewählt haben. Wenn Sie einen Block in der Story-Ansicht anklicken wird immer der oberste Block ausgewählt. Einen Block, der von einem anderen Block überlagert wird, können Sie nur mithilfe des [*Block-Managers*](../../smartstore-page-builder/benutzeroberflache/block-manager.md) auswählen.