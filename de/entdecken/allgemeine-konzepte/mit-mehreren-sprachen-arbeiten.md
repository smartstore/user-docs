# Mit mehreren Sprachen arbeiten

Nach der Installation ist die bei der Einrichtung gewählte Standardsprache verfügbar. Weitere Sprachen können Sie jederzeit hinzufügen und veröffentlichen.

## So fügen Sie eine Sprache hinzu

Um eine weitere Sprache hinzuzufügen, gehen Sie zu **Konfiguration > Regionale Einstellungen > Sprachen**.

Sie können Sprachen auf zwei Wegen hinzufügen: Über **„Verfügbare Sprachen“** laden Sie ein vorhandenes Sprachpaket herunter und veröffentlichen es anschließend. Ist die gewünschte Sprache dort nicht aufgeführt, legen Sie sie über **Neu** manuell an und importieren die Sprachressourcen aus einer XML-Datei.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_.png)

## Eine Sprache manuell hinzufügen

| **Eingabefeld**   | **Beschreibung**                                                                                                                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | Der Name der Sprache. Dieser Name wird angezeigt, wenn ein Nutzer im Frontend den Mauszeiger über die Flagge bewegt. Dort kann er seine bevorzugte Sprache auswählen.                                                                                                            |
| Gebietsschema     | Das sprachspezifische Gebietsschema. Das sprachspezifische Gebietsschema enthält den Namen des Gebiets, das Zeichensystem, den Kalender und die Formatierungsarten für Daten und zur Sortierung von Zeichenfolgen.                                                               |
| SEO Code          | Der eindeutige SEO-Code. Er wird verwendet, um URLs wie '[http://www.yourStore.de/de/](http://www.yourstore.de/de/)' zu erzeugen, wenn Sie mehr als eine Sprache veröffentlicht haben. Die Option 'SEO freundliche URLs mit Mehrsprachunterstützung' muss auch aktiviert werden. |
| Flaggenbild       | Legt das Flaggenbild fest. Wenn Sie ein anderes Bild auswählen möchten, muss dieses in dem Ordner _content/images/flags/_ liegen.                                                                                                                                                |
| Rechts nach links | Legt fest, ob für diese Sprache die Schreibrichtung "rechts nach links" aktiviert wird. Das verwendete Theme muss dies ebenfalls unterstützen.                                                                                                                                   |

Nachdem Sie eine Sprache manuell angelegt haben, importieren Sie deren Ressourcen über **Ressourcen importieren** aus einer XML-Datei. Die XML-Dateien für Englisch und Deutsch finden Sie im Ordner /_App\_Data/Localization/App._

## Wie Sie eine einzelne Ressource hinzufügen oder bearbeiten

Einzelne Texte passen Sie direkt in den Sprachressourcen an. Öffnen Sie dazu **Konfiguration > Regionale Einstellungen > Sprachen** und klicken Sie auf **Ressourcen editieren**. Im folgenden Beispiel wird der Forentitel von _Foren_ in _Forum_ geändert.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_einzelne\_ressource\_hinzufuegen.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_einzelne_ressource_hinzufuegen.png)

Die Tabelle enthält alle Ressourcen der gewählten Sprache. Filtern Sie nach Ressourcenwert oder Ressourcenname. Für das Beispiel geben Sie beim Ressourcenwert _Foren_ ein; weitere Suchoperatoren finden Sie über den Tooltip „?“. Einträge mit der Vorsilbe _admin_ gehören zum Administrationsbereich und sind hier nicht relevant. Öffnen Sie bei _Forum.PageTitle.Default_ das Drei-Punkte-Menü und ändern Sie den Wert.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_einzelne\_ressource\_bearbeiten.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_einzelne_ressource_bearbeiten.png)

## Lokalisierte Objekte

Viele Smartstore-Objekte, etwa Produkte, Warengruppen und Seiten, besitzen lokalisierbare Textfelder. Dazu gehören Produktnamen, Beschreibungen und Anzeigenamen wie Lieferzeit oder Mengenangabe. Über das Sprach-Steuerelement pflegen Sie Werte für alle konfigurierten Sprachen und einen Standardtext. Dieser Standardtext wird verwendet, wenn für die ausgewählte Sprache kein eigener Wert hinterlegt ist.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_lokalisierte\_objekte.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_lokalisierte_objekte.png)

## Sprachauswahl

Wenn Sie mehrere Sprachen konfiguriert haben, können Ihre Nutzer zwischen den Sprachen im Header-Bereich Ihres Shops wechseln.

![doku\_mit\_mehreren\_sprachen\_arbeiten\_2025\_sprachauswahl.png](../../.gitbook/assets/doku_mit_mehreren_sprachen_arbeiten_2025_sprachauswahl.png)

## Sprachressourcen herunterladen

Alle verfügbaren Sprachressourcen aller Versionen können im [Smartstore-Übersetzungsportal](https://translate.smartstore.com/) ([http://translate.smartstore.com](http://translate.smartstore.com) ) als XML-Datei heruntergeladen werden.
