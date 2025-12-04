# Summernote Font-Tools deaktiviert

# Motivation

Im Zuge der Entwicklung von Smartstore Version 6 haben wir auch den HTML-Editor überarbeitet. Dabei haben wir die Elemente zur Einstellung von Schriftart und Schriftgröße deaktiviert. Es gibt mehrere Gründe, warum wir diese Funktion(en) nicht mehr verwenden.

Die beiden wichtigsten sind:

- Jedes Mal, wenn sie verwendet werden, umschließen die Einstellungsoptionen die bereits vorhandenen HTML-Elemente und versehen sie mit den entsprechenden Inline-Styles. Je öfter diese Funktion genutzt wird, desto mehr geschachtelte HTML-Elemente werden erzeugt. Ein solcher HTML-Code wird von Suchmaschinen nicht gerne gesehen und Seiten mit zu viel verschachteltem Code werden abgestraft und schlechter gerankt. Außerdem werden wichtige Suchbegriffe, die u.a. auch im Langtext enthalten sind, ignoriert.
- Um ein einheitliches Erscheinungsbild des Fließtextes in der Produktbeschreibung zu gewährleisten, sollten keine unterschiedlichen Schriftarten verwendet werden. Auch bei den Größen sollte man sich auf wenige beschränken.

Stattdessen sollten verschiedene Tags verwendet werden, um den Fließtext zu strukturieren: [h\*-Tags](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements) für Überschriften (\* = 1-6) und [p-Tags](https://developer.mozilla.org/de/docs/Web/HTML/Element/p) für Absätze.

# Gliederung

Die für Überschriften verwendeten h\*-Tags können im Editor ausgewählt werden.

Markieren Sie die Zeile, die der Überschrift entspricht, und wählen Sie das Dropdown-Menü Stil (Symbol: ¶). Dieses Menü bietet eine Auswahl von sechs verschiedenen Überschriften, die in hierarchischer Reihenfolge zu verwenden sind. Unterüberschriften sind durch eine größere Zahl gekennzeichnet. Wenn Sie eine Überschrift auswählen, wird die Formatierung automatisch angewendet und im Editor angezeigt.

Im Quelltext (Symbol: </>) sehen Sie, dass um den ausgewählten Text ein h\*-Tag gesetzt wurde.

# Kommende Funktionen

In Version 6.0.1 wird die Möglichkeit hinzugefügt, die Schriftgröße relativ zu ändern. Diese wird dann mit Hilfe von CSS-Klassen in den Text eingefügt.

# Bootstrap

Wenn die Formatierung des Textes geändert werden soll, besteht immer die Möglichkeit, den Quelltext zu bearbeiten. Dazu empfehlen wir die Verwendung von Bootstrap-Klassen, von denen einige bereits über das CSS-Dropdown-Menü zur Verfügung stehen.

[https://getbootstrap.com/](https://getbootstrap.com/)

# Eigene Styles

In Kombination mit der *\_user.scss* können auch eigene Klassen für Schrift- und Textkombinationen geschrieben und im HTML-Editor verwendet werden.

Es besteht auch die Möglichkeit eigene Formate in der *globalinit.js* (*\\wwwroot\\lib\\editors\\summernote\\*) zu hinterlegen. Diese werden über das Objekt `cssclass` im Unterobjekt `formats` zur Verfügung gestellt und müssen manuell hinzugefügt werden.

```
summernote_global_config = {
    /* Inhalt zu Demonstrationszwecken verkürzt dargestellt. */
    imageAttributes: {
        /* ... */
    },
    cssclass: {
        formats: {
            "link-primary": { inline: true, toggle: /^link-(primary|danger)$/ },
            "link-danger": { inline: true, toggle: /^link-(primary|danger)$/ },
            "text-center": { toggle: /^text-center$/ },
            "custom-class": {
                displayClass: "text-light p-2",
                style: "background: linear-gradient(to bottom right, white, black);",
                inline: true,
                toggle: /^custom-class$/
            },
        }
    }
}; 
```

Die Eigenschaft `toggle` legt fest, ob zusammenhängende Klassen mehrfach zu einem Element hinzugefügt werden können. Im Beispiel von `link-primary` und `link-danger` wird jeweils nur die zuletzt zugewiesene Klasse verwendet. Ändert man z.B. die [RegEx-Ausdrücke](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Regular_expressions) in `/^link-primary$/` und `/^link-danger$/`, können beide Klassen gleichzeitig verwendet werden.

Die Eigenschaften `inline`, `displayClass` und `style` beziehen sich auf die Darstellung des Dropdown-Menüpunktes. Style-Klassen werden mit `displayClass` und explizite Styles mit `style` hinzugefügt.

# Alte Funktionen aktivieren

Falls die Schrift- und Größenauswahl für Sie unverzichtbar ist, können Sie die Tools in *globalinit.js* (*\\wwwroot\\lib\\editors\\summernote\\*) wieder aktivieren (ab Zeile 79):

```
toolbar: [
    ['edit', ['undo', 'redo']],
    ['text', ['bold', 'italic', 'underline', 'color', 'moreFontStyles']],
    //['color', ['forecolor', 'backcolor']],
    //['font', ['fontname', 'fontsize']],
    ['para', ['ai', 'style', 'cssclass', 'ul', 'ol', 'paragraph', 'clear', 'cleaner']],
    ['insert', ['link', 'image', 'video', 'table', 'hr']],
    ['view', ['codeview', 'fullscreen', 'help']]
],
```

Die Zeile `font` ist auskommentiert. Entfernen Sie den Kommentar oder verschieben Sie die Tools `fontname` oder `fontsize` in eine andere Toolbar.

| **Methode** | **Vorher** | **Nachher** |
| --- | --- | --- |
| Kommentar entfernen | `//['font', ['fontname', 'fontsize']],` | `['font', ['fontname', 'fontsize']],` |
| Tool verschieben | `['edit', ['undo', 'redo']],` | `['edit', ['undo', 'redo', 'fontsize']],` |