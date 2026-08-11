# Tipps & Tricks

## Beste Vorgehensweisen

**Mobile First**

Beachten Sie das [_Mobile First_](../story/responsive-darstellung.md) Konzept. Gestalten und erstellen Sie Ihre Story von klein nach groß – von Mobile hin zu Desktop.

**Änderungen**

Sollten Sie zu einem späteren Zeitpunkt Änderungen an Ihrer Story vornehmen, vergewissern Sie sich, dass diese bei höheren Auflösungsstufen die gewünschten Effekte haben. Wenn dort schon abweichende Einstellungen eingetragen sind, werden diese nicht überschrieben.

**Testen**

Testen Sie Ihre fertige Story ausführlich für alle verschiedenen Auflösungen und Endgeräte.

**Vorschaumodus**

Verwenden Sie regelmäßig den _Vorschaumodus_, um einen besseren Eindruck von Ihrer Story in der Enddarstellung zu bekommen. Zudem werden viele Effekte sowie Story-Hintergründe erst im Vorschaumodus angezeigt.

**Header Tags**

Aus SEO-Gründen sollten Sie mit der Verwendung von h1- und h2-Tags sehr sparsam umgehen. Sie können die Schriftgröße von einem Text-Block unabhängig vom h\*-Tags gesondert einstellen.

**Text auf Bild platzieren**

Wenn Sie Text auf einem Bild darstellen wollen, dann nutzen Sie am besten ausschließlich den [_Text-Block_](../blocke.md) und fügen das Bild als [_Hintergrund_](../blocke/block-basiseinstellungen.md#hintergrund) ein.

## FAQ

**Warum wird meine fertige Story nicht angezeigt?**

Vergewissern Sie sich, dass die Story mindestens eine _Zielseite_ und eine [_Widget Zone_](widget-zonen.md) zugewiesen wurden und zudem _Veröffentlicht_ aktiviert ist. Siehe [_Veröffentlichungsoptionen_](../story/toolbox-story-optionen.md).

**Warum ändert sich das Layout meiner Story je nach Auflösungsstufe?**

Die Story gibt die Einstellungen einer jeden Auflösung von Smartphone bis hin zu Desktop weiter. Wenn Sie Änderungen in der Desktopeinstellung vornehmen, werden diese in der Smartphone-Auflösung nicht übernommen. Wenn Sie allerdings Änderungen an der Smartphone-Einstellung vornehmen, kann es sein, dass Ihre Desktop-Einstellung verändert wird. Siehe [_Responsive Darstellung_](../story/responsive-darstellung.md).

**Warum werden Änderungen an meinem Layout von nachfolgenden Auflösungsstufen nicht übernommen?**

Vergewissern Sie sich, dass Einstellungen einer höheren Auflösungsstufe die bereits vorhandenen nicht überschreiben. An diesen Stellen wird der Wert von der vorherigen Auflösungsstufe geerbt, wenn kein Wert für die derzeitige Auflösungseinstellung eingetragen ist.

**Wo kann ich Widget-Zonen sehen? / Wie kann ich herausfinden wo sich Widget-Zonen befinden?**

Aktivieren Sie die Widget-Zonen-Darstellung unter **Admin > Plugins > Developer Tools**. Anschließend werden Widget-Zonen angezeigt, wenn Sie mit einem Administrator-Account angemeldet sind. Der Name der jeweiligen Widget-Zone wird angezeigt, wenn Sie mit der Maus über das Widget-Zonen-Tag fahren.

**Wieso finde ich die** _**Toolbox Story-Optionen**_ **(Layout / Hintergrund / Blöcke) am rechten Rand nicht mehr?**

Vergewissern Sie sich, dass Sie derzeit keinen Block ausgewählt haben. Wenn Sie einen Block auswählen, werden anstelle der [_Story-Optionen_](../story/toolbox-story-optionen.md) die [_Block-Optionen_](../blocke/toolbox-block-optionen.md) angezeigt. Um den Block abzuwählen, drücken Sie auf eine freie Stelle innerhalb Ihrer Story im [_Raster_](../benutzeroberflache/das-raster.md) oder wählen Sie den ausgewählten Block erneut an.

**Wo finde ich die Einstellungen für** _**padding**_ **&** _**margin**_\*\*?\*\*

Klicken Sie einen Block an, den Sie konfigurieren möchten. Sie sehen am rechten Rand die [_Toolbox_](../benutzeroberflache/toolbox.md). Da ein Block ausgewählt ist, zeigt die Toolbox nun Block-Optionen an. Hier können Sie _padding_ & _margin_ und weitere Optionen einstellen.

**Wieso kann ich bei** _**margin**_ **&** _**padding**_ **nichts einstellen, beziehungsweise nichts eintragen?**

Klicken Sie in eines der Felder für _margin_ / _padding_ und ziehen Sie dabei die Maus mit gedrückter Maustaste nach oben zur Erhöhung und nach unten zur Verminderung des Abstandes.

**Wie kann ich Text auf einem Bild darstellen?**

Wenn Sie Text auf einem Bild darstellen wollen, sollten Sie wenn möglich, nur den Text-Block verwenden. Fügen Sie beim Text-Block Ihr gewünschtes Bild einfach als Hintergrund ein. Die Textformatierung können Sie mithilfe der Text-Block-Einstellungen oder mithilfe der Toolbox Block-Optionen einstellen.

**Wieso wird mein Hintergrundbild/-effekt (Bild / Farbe / Verlauf / Video / Schattierung) beim Bearbeiten nicht angezeigt?**

Aktivieren Sie den _Vorschaumodus_. Siehe [_Allgemeine Steuerelemente_](../benutzeroberflache.md).

**Wieso wird meine Schaltfläche nicht angezeigt?**

Damit die Schaltfläche des Textblocks dargestellt wird, muss ein _Linkziel_ und ein _Anzeigetext_ oder _Icon_ angegeben sein.

**Wieso lässt sich mein Block nicht auswählen?**

Vergewissern Sie sich, dass Sie den richtigen Block ausgewählt haben. Wenn Sie einen Block in der Story-Ansicht anklicken, wird immer der oberste Block ausgewählt. Einen Block, der von einem anderen Block überlagert wird, können Sie nur mithilfe des [_Block-Managers_](../benutzeroberflache/block-manager.md) auswählen.
