# Mit mehreren Sprachen arbeiten

Smartstore beinhaltet nach der Installation die ausgewählte Standardsprache. Sie können aber eine unbegrenzte Anzahl weiterer Sprachen hinzufügen.

## So fügen Sie eine Sprache hinzu

Um eine weitere Sprache hinzuzufügen, gehen Sie zu **Konfiguration > Regionale Einstellungen > Sprachen**.

Hier gibt es zwei Möglichkeiten, Sprachen hinzuzufügen. Über die Funktion **„Verfügbare Sprachen“** können Sie kostenlose Sprachpakete herunterladen. Nach dem Download muss die neue Sprache nur noch veröffentlicht werden. Wenn die gewünschte Sprache nicht unter **„Verfügbare Sprachen“** aufgeführt ist, können Sie sie über **Neu** manuell anlegen und die Sprachressourcen über eine XML-Datei zu importieren.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_.png)

## Eine Sprache manuell hinzufügen

| **Eingabefeld**   | **Beschreibung**                                                                                                                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Der Name der Sprache. Dieser Name wird angezeigt, wenn ein Nutzer im Frontend den Mauszeiger über die Flagge bewegt. Dort kann er seine bevorzugte Sprache auswählen.                                                                                                            |
| Gebietsschema     | Das sprachspezifische Gebietsschema. Das sprachspezifische Gebietsschema enthält den Namen des Gebiets, das Zeichensystem, den Kalender und die Formatierungsarten für Daten und zur Sortierung von Zeichenfolgen.                                                               |
| SEO Code          | Der eindeutige SEO-Code. Er wird verwendet, um URLs wie '[http://www.yourStore.de/de/](http://www.yourstore.de/de/)' zu erzeugen, wenn Sie mehr als eine Sprache veröffentlicht haben. Die Option 'SEO freundliche URLs mit Mehrsprachunterstützung' muss auch aktiviert werden. |
| Flaggenbild       | Legt das Flaggenbild fest. Wenn Sie ein anderes Bild auswählen möchten, muss dieses in dem Ordner _content/images/flags/_ liegen.                                                                                                                                                |
| Rechts nach links | Legt fest, ob für diese Sprache die Schreibrichtung "rechts nach links" aktiviert wird. Das verwendete Theme muss dies ebenfalls unterstützen.                                                                                                                                   |

Sobald Sie Ihre gewünschte Sprache erstellt haben, müssen Sie die Ressourcen für diese Sprache hinzufügen, indem Sie auf **Ressourcen importieren** klicken, wodurch Sie eine XML-Datei für den Import auswählen können. Sie finden die XML-Dateien für Englisch und Deutsch in dem Ordner /_App\_Data/Localization/App._

## Wie Sie eine einzelne Ressource hinzufügen oder bearbeiten

Manchmal kommt es vor, dass Sie eine einzelne Ressource verändern möchten. Beispielsweise könnte es sein, dass Sie den Titel für das Forum von _Foren_ zu _Forum_ verändern möchten. Dies können Sie tun, indem Sie zu **Konfiguration > Regionale Einstellungen > Sprachen** gehen und dort auf **Ressourcen editieren** klicken.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_einzelne\_ressource\_hinzufuegen.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_einzelne_ressource_hinzufuegen.png)

Dort sehen Sie eine Tabelle, die alle hinzugefügten Ressourcen für diese Sprache anzeigt. Filtern Sie die Einträge, um die Ressource zu finden, die Sie suchen. Sie können entweder nach Wert oder Ressourcenname filtern. Da Sie den Text kennen, den Sie verändern möchten, klicken Sie auf das Filtersymbol und geben Sie in der Zelle Ressourcenwert =_Foren_ ein. Unter dem Tooltip "?" werden weitere Suchoperatoren angezeigt. Es wird Ihnen nun eine Liste mit unterschiedlichen Ressourcen angezeigt, die den Filterkriterien entsprechen. Einer dieser Einträge hat die Vorsilbe _admin_. Daran erkennen Sie, dass er zum Administrationsbereich gehört und für dieses Beispiel nicht relevant ist. Die Ressource, die Sie bearbeiten möchten, heißt in diesem Fall _Forum.PageTitle.Default._ Über den Drei-Punkte-Schaltfläche kann der gewünschte Wert geändert werden.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_einzelne\_ressource\_bearbeiten.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_einzelne_ressource_bearbeiten.png)

## Lokalisierte Objekte

Es gibt zahlreiche Objekte (z. B. Produkte, Warengruppen, Seiten) in Smartstore, bei denen Sie Texte, die dem Nutzer angezeigt werden sollen, angeben können, dazu gehören Produktnamen, Produktbeschreibungen oder auch verschiedene Anzeigenamen (z. B. Lieferzeit, Mengenangabe usw.). Wenn ein solcher Wert im Backend angegeben werden kann, finden Sie auch ein Steuerelement, mit dem Sie Texte in allen konfigurierten Sprachen Ihres Shops anzugeben. So können Sie alternative Ressourcen für spezifische Sprachen sowie einen Standardtext festlegen, welcher angezeigt wird, wenn keine andere Ressource für die von Ihrem Kunden ausgewählte Sprache angegeben wurde.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_lokalisierte\_objekte.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_lokalisierte_objekte.png)

## Sprachauswahl

Wenn Sie mehrere Sprachen konfiguriert haben, können Ihre Nutzer zwischen den Sprachen im Header-Bereich Ihres Shops wechseln.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_sprachauswahl.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_sprachauswahl.png)

## Sprachressourcen herunterladen

Alle verfügbaren Sprachressourcen aller Versionen können im [Smartstore-Übersetzungsportal](https://translate.smartstore.com/) ([http://translate.smartstore.com](http://translate.smartstore.com) ) als XML-Datei heruntergeladen werden.
