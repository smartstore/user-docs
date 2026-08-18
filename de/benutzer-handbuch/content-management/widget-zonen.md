# Widget-Zonen

Widget-Zonen sind vordefinierte Positionen auf den Seiten Ihres Shops. Sie bestimmen, **an welcher Stelle** ein Inhalt erscheint, zum Beispiel oberhalb des Seiteninhalts, innerhalb eines bestimmten Seitenbereichs oder vor dem Footer.

Widget-Zonen können unter anderem für folgende Inhalte verwendet werden:

- Widgets installierter Plugins,
- Storys aus dem [Page Builder](../plugins/pagebuilder.md),
- eigene Inhalte aus [Seiten & Inhalte verwalten](seiten-inhalte-verwalten.md).

Die Widget-Zonen selbst sind für Kunden nicht sichtbar.

## Anzeige der Widget-Zonen aktivieren

Damit Sie die verfügbaren Widget-Zonen im Shop sehen können, muss die Anzeige zuerst in den Developer Tools aktiviert werden.

1. Öffnen Sie im Administrationsbereich **Plugins > Developer Tools**.
2. Aktivieren Sie **Widget-Zonen darstellen**.
3. Speichern Sie die Konfiguration.
4. Öffnen Sie anschließend das Frontend Ihres Shops.

Die Widget-Zonen werden nur angezeigt, wenn Sie mit einem Administratorkonto angemeldet sind. Für reguläre Kunden bleibt die Anzeige unsichtbar.

![Aktivierte Option „Widget-Zonen darstellen“ in der Konfiguration der Developer Tools](../../.gitbook/assets/screenshot.png)

{% hint style="info" %}
Die Developer Tools müssen installiert und aktiviert sein, damit die Widget-Zonen im Frontend angezeigt werden können.
{% endhint %}

## Widget-Zonen im Shop anzeigen

Seit Smartstore 5.1 werden die Widget-Zonen über ein eigenes Menü am rechten Rand des Shop-Frontends angezeigt. Die frühere Ansicht, bei der der Name einer Zone nur direkt auf der Seite eingeblendet wurde, wurde damit ersetzt.

Öffnen Sie das Widget-Zonen-Menü über das Ebenensymbol am rechten Rand des Browserfensters.

![Shop-Frontend mit Schaltfläche zum Öffnen des Widget-Zonen-Menüs](../../.gitbook/assets/screenshot.png)

Das Menü enthält eine nach Seitenbereichen gegliederte Liste der Widget-Zonen, die auf der aktuell geöffneten Seite zur Verfügung stehen.

![Geöffnetes Widget-Zonen-Menü mit den verfügbaren Zonen der aktuellen Seite](../../.gitbook/assets/screenshot.png)

Sie können das Menü folgendermaßen verwenden:

| Aktion | Funktion |
| --- | --- |
| **Widget-Zone auswählen** | Scrollt zur entsprechenden Position auf der Seite und hebt sie kurz hervor. |
| **Kopiersymbol** | Kopiert den Namen der Widget-Zone in die Zwischenablage. |
| **Ein-/Ausschalter** | Legt fest, ob die Widget-Zonen dauerhaft angezeigt werden sollen. |
| **Augensymbol** | Blendet die Markierungen vorübergehend ein oder aus. |
| **Schließen** | Schließt das Widget-Zonen-Menü. |

Mit der Tastenkombination **Alt + K** können Sie die Markierungen ebenfalls ein- und ausblenden.

![Auf der Shopseite hervorgehobene Widget-Zone](../../.gitbook/assets/screenshot.png)

{% hint style="info" %}
Das Menü zeigt die Widget-Zonen der aktuell geöffneten Seite. Wechseln Sie beispielsweise zwischen Startseite, Produktseite und Warengruppe, um die dort verfügbaren Positionen zu prüfen.
{% endhint %}

## Widget-Zone verwenden

Für die Platzierung eines Inhalts werden normalerweise zwei Angaben benötigt:

1. **Zielseite:** Legt fest, auf welcher Seite oder bei welchen Inhalten die Ausgabe erfolgen soll.
2. **Widget-Zone:** Bestimmt die Position innerhalb dieser Seite.

Eine Page-Builder-Story kann beispielsweise einer Produktseite als Ziel und einer Widget-Zone oberhalb der Produktbeschreibung zugeordnet werden.

Welche Widget-Zonen zur Auswahl stehen, hängt von der jeweiligen Seite, dem verwendeten Theme und der eingesetzten Funktion ab. Einige Plugins bestimmen ihre Widget-Zone automatisch.

![Auswahl einer Zielseite und einer Widget-Zone](../../.gitbook/assets/screenshot.png)

## Die passende Position auswählen

Die Namen der Widget-Zonen geben häufig einen Hinweis auf ihre Position. Zusätze wie `before` und `after` kennzeichnen beispielsweise Bereiche vor oder nach einem bestimmten Seiteninhalt.

Gehen Sie bei der Auswahl folgendermaßen vor:

1. Öffnen Sie die gewünschte Seite im Shop.
2. Öffnen Sie das Widget-Zonen-Menü.
3. Wählen Sie eine Zone aus, um ihre Position hervorzuheben.
4. Kopieren Sie bei Bedarf den Namen der Zone.
5. Hinterlegen Sie diese Widget-Zone beim gewünschten Inhalt.

Prüfen Sie das Ergebnis anschließend direkt auf der vorgesehenen Seite.

## Mehrere Inhalte in einer Widget-Zone

Werden mehrere Inhalte derselben Widget-Zone zugeordnet, bestimmt deren Sortierung die Reihenfolge der Ausgabe.

Bei Plugin-Widgets kann die Reihenfolge unter **CMS > Widgets** per Drag-and-drop angepasst werden. Weitere Informationen finden Sie unter [Widgets anordnen](widgets-anordnen.md).

## Wenn ein Inhalt nicht angezeigt wird

Prüfen Sie in diesem Fall:

- Ist der Inhalt veröffentlicht oder aktiviert?
- Wurde die richtige Zielseite ausgewählt?
- Ist eine passende Widget-Zone zugewiesen?
- Ist die Widget-Zone auf der aufgerufenen Seite vorhanden?
- Wird die Anzeige durch eine zeitliche, Shop- oder Kundengruppen-Einstellung eingeschränkt?
- Befindet sich der Inhalt wegen seiner Sortierung weiter oben oder unten als erwartet?

Für eine Kontrolle mit unterschiedlichen Themes oder Shops können Sie die [Vorschau für Designs & Shops](../allgemeine-konzepte/vorschau-fur-designs-shops.md) verwenden.