# Blöcke verwenden

Blöcke sind die einzelnen Inhaltselemente einer Story. Jeder Block erfüllt eine bestimmte Aufgabe, zum Beispiel Text darstellen, ein Bild einbinden oder Produkte präsentieren.

Welche Blöcke zur Auswahl stehen, hängt von den installierten und lizenzierten Plugins ab.

## Block hinzufügen

1. Öffnen Sie im Page-Builder-Editor den Bereich **Blöcke**.
2. Ziehen Sie den gewünschten Block auf eine freie Position im Raster.
3. Wählen Sie den eingefügten Block aus.
4. Klicken Sie auf **Bearbeiten** oder auf das Zahnrad-Icon, um seine inhaltlichen Einstellungen zu öffnen.
5. Speichern Sie die Story.

![Auswahl der verfügbaren Blöcke im Page-Builder-Editor](../../../.gitbook/assets/screenshot.png)

{% hint style="info" %}
Eine neu angelegte Story muss zuerst gespeichert werden, bevor Sie Blöcke hinzufügen können.
{% endhint %}

## Blocktypen

### Text

Der Block **Text** stellt Überschriften, Taglines, Einleitungstexte, Fließtext, Icons und Schaltflächen dar. Die einzelnen Textelemente lassen sich unabhängig voneinander formatieren.

Für eine Schaltfläche müssen mindestens ein Anzeigetext oder Icon sowie ein Linkziel hinterlegt sein. Verwenden Sie Überschriften-Tags bewusst, damit die semantische Struktur der Seite erhalten bleibt.

Der Textblock unterstützt außerdem die [Datenbindung](integrations.md#inhalte-an-katalogdaten-binden).

### Bild

Der Block **Bild** zeigt ein einzelnes Bild aus dem Medien-Manager an. Sie können die Bildgröße begrenzen, die Darstellung anpassen und den Block mit einem Link versehen.

Prüfen Sie den Bildausschnitt für alle Bildschirmgrößen. Weitere Informationen zum Hochladen und Organisieren von Bildern finden Sie im [Medien-Manager](../mediamanager.md).

Der Bildblock unterstützt ebenfalls die [Datenbindung](integrations.md#inhalte-an-katalogdaten-binden).

### Produktliste

Der Block **Produktliste** präsentiert Produkte als Liste, Raster oder Slider. Die Produkte können manuell ausgewählt oder anhand einer Warengruppe ermittelt werden.

Je nach Darstellungsart legen Sie unter anderem die Anzahl der Einträge und Spalten fest. Zusätzlich können Informationen wie Preis, Kurzbeschreibung, Bewertung, Hersteller, Lieferzeit, Artikelnummer oder Schaltflächen ein- und ausgeblendet werden.

### Warengruppen

Der Block **Warengruppen** präsentiert ausgewählte Warengruppen als Liste, Raster oder Slider. Er eignet sich beispielsweise für eine Themenübersicht oder den Einstieg in wichtige Sortimentsbereiche.

Verwenden Sie aussagekräftige Namen und Bilder in den zugrunde liegenden Warengruppen, da der Block auf diese Katalogdaten zugreift.

### Herstellerliste

Der Block **Herstellerliste** zeigt ausgewählte Hersteller als Liste, Raster oder Slider an. Damit können Sie beispielsweise Markenwelten oder eine kompakte Markenübersicht erstellen.

Die ausgegebenen Namen, Bilder und Verknüpfungen stammen aus den jeweiligen Herstellerdaten.

### Galerie

Der Block **Galerie** fasst mehrere Bilder oder Videos zu einer Mediengalerie zusammen. Je nach Konfiguration können die Medien als Liste, Raster oder Slider dargestellt und in einer vergrößerten Ansicht geöffnet werden.

Bereiten Sie Bilder möglichst in einheitlichen Seitenverhältnissen vor, damit die Galerie ruhig und konsistent wirkt.

### Video

Der Block **Video** bindet eine Videodatei aus dem Medien-Manager ein. Sie können unter anderem Dateien für verschiedene Browserformate, ein Vorschaubild, das Seitenverhältnis und die Steuerelemente des Players festlegen.

Verwenden Sie nach Möglichkeit MP4 als Hauptformat und prüfen Sie Dateigröße sowie Ladezeit.

### YouTube

Der Block **YouTube** bindet ein YouTube-Video über seine URL oder Video-ID ein. Je nach Einstellung können unter anderem Seitenverhältnis, Startposition und Wiedergabeverhalten angepasst werden.

Beachten Sie beim Einbinden externer Videos die Datenschutz- und Einwilligungskonfiguration Ihres Shops.

### Audio-Player

Der Block **Audio-Player** spielt eine Audiodatei aus dem Medien-Manager ab. Er eignet sich beispielsweise für Hörproben, Interviews oder ergänzende Produktinformationen.

Prüfen Sie, ob das verwendete Dateiformat von den vorgesehenen Browsern unterstützt wird.

### SoundCloud

Der Block **SoundCloud** bindet einen SoundCloud-Track, eine Playlist oder ein Profil über die vollständige SoundCloud-URL ein.

Da der Inhalt von einem externen Dienst geladen wird, sind dessen Verfügbarkeit sowie die Datenschutz- und Einwilligungskonfiguration zu berücksichtigen.

### Newsletter

Der Block **Newsletter** stellt innerhalb einer Story die Anmeldung zum Smartstore-Newsletter bereit. Er kann beispielsweise in Landingpages oder Aktionsflächen eingesetzt werden.

Prüfen Sie vor der Veröffentlichung den vollständigen Anmeldeablauf und die erforderlichen Datenschutzinformationen.

### Google Maps

Der Block **Google Maps** zeigt einen Standort anhand von Längen- und Breitengrad an. Zusätzlich werden ein gültiger Google-Maps-API-Schlüssel und eine Zoomstufe benötigt.

Je nach Konfiguration kann die Street-View-Steuerung ein- oder ausgeblendet werden. Beachten Sie auch hier die Datenschutz- und Einwilligungskonfiguration.

### IFrame

Der Block **IFrame** zeigt eine externe Seite innerhalb eines eingebetteten Bereichs an. Dazu hinterlegen Sie die URL der Zielseite.

Ob eine Seite eingebettet werden darf, hängt von deren Sicherheitseinstellungen ab. Nicht jede externe Website erlaubt die Darstellung in einem IFrame.

### Story

Der Block **Story** fügt eine vorhandene Story in eine andere Story ein. Damit lassen sich wiederkehrende Inhaltsbereiche zentral pflegen und an mehreren Stellen verwenden.

Vermeiden Sie unnötig tiefe Verschachtelungen. Sie erschweren die Bearbeitung und die Fehlersuche bei Darstellung oder Sichtbarkeit.

### Code

Der Block **Code** bindet eigenen HTML-, CSS- oder JavaScript-Code ein. Er ist für individuelle Inhalte vorgesehen, die sich mit den übrigen Blöcken nicht umsetzen lassen.

### ViewComponent

Der Block **ViewComponent** bindet eine von einem Entwickler bereitgestellte ViewComponent ein. Welche Komponenten verwendet werden können und welche Parameter erforderlich sind, hängt von der jeweiligen Implementierung ab.

{% hint style="warning" %}
Verwenden Sie die Blöcke **Code**, **IFrame** und **ViewComponent** nur, wenn Inhalt und technische Auswirkungen bekannt sind. Fehlerhafter oder nicht vertrauenswürdiger Code kann Darstellung, Sicherheit und Funktionsweise des Shops beeinträchtigen.
{% endhint %}

## Blöcke aus anderen Plugins

Installierte Plugins können die Blockauswahl um eigene Inhaltstypen erweitern. Abhängig von Installation und Lizenzierung können dort beispielsweise Blöcke für folgende Inhalte erscheinen:

- Blogbeiträge, News, FAQs oder Umfragen,
- einen Content Slider,
- Social-Sharing-Funktionen,
- Trusted-Shops-Inhalte,
- Wallet- oder Guthabenfunktionen,
- zusätzliche Banner oder Slide-ins.

Diese Blöcke werden vom jeweiligen Plugin bereitgestellt. Ihre Einstellungen und Voraussetzungen unterscheiden sich deshalb von den Standardblöcken des Page Builders.

Weitere Verbindungen zu Smartstore-Funktionen und externen Diensten beschreibt der Beitrag [Integrationen](integrations.md).

## Block auswählen und bearbeiten

Klicken Sie einen Block auf der Arbeitsfläche an. Der ausgewählte Block wird hervorgehoben und kann über seine Aktionen bearbeitet werden.

Alternativ wählen Sie den Block im Block-Manager aus. Das ist besonders hilfreich, wenn sich mehrere Blöcke überlagern.

![Ausgewählter Block mit verfügbaren Aktionen](../../../.gitbook/assets/screenshot.png)

Je nach Block stehen folgende Aktionen zur Verfügung:

- **Bearbeiten** oder Zahnrad-Icon: Öffnet die inhaltlichen Einstellungen.
- **Nach oben** oder **Nach unten:** Ändert die Darstellungsreihenfolge.
- **Kopieren:** Erstellt eine Kopie des Blocks.
- **Löschen:** Entfernt den Block aus der Story.

## Block positionieren und vergrößern

Ziehen Sie einen Block an die gewünschte Position im Raster. Um seine Größe zu ändern, ziehen Sie an einem der eingeblendeten Ränder oder Eckpunkte.

Die mögliche Position und Größe wird durch die Zeilen und Spalten des Rasters bestimmt. Weitere Informationen finden Sie unter [Mit dem Raster arbeiten](grid.md).

## Gemeinsame Einstellungen

Zusätzlich zu seinem eigentlichen Inhalt kann ein Block allgemeine Einstellungen besitzen.

### Sichtbarkeit

Sie können einen Block für einzelne Bildschirmgrößen ein- oder ausblenden. Damit lassen sich beispielsweise unterschiedliche Inhalte für Mobilgeräte und Desktop-Bildschirme bereitstellen.

Prüfen Sie ausgeblendete Blöcke für jede Bildschirmgröße. Eine nicht festgelegte Sichtbarkeit kann von der vorherigen kleineren Auflösungsstufe übernommen werden.

### Ausrichtung und Reihenfolge

Sie können den Inhalt horizontal und vertikal innerhalb des Blocks ausrichten. Die Darstellungsreihenfolge legt fest, welcher Block bei einer Überlagerung vor oder hinter anderen Blöcken liegt.

### Hintergrund und Box

Je nach Gestaltung können Sie unter anderem Farben, Bilder, Verläufe, Abstände, Rahmen und Schatten verwenden. Nutzen Sie Effekte sparsam und achten Sie auf ausreichenden Kontrast zwischen Hintergrund und Text.

### Effekte

Für Blöcke können Einblend- und Hover-Effekte verfügbar sein. Einige Effekte werden erst im Vorschaumodus oder direkt im Shop vollständig dargestellt.

### Datenbindung

Unterstützte Text- und Bildblöcke können Daten eines Produkts, einer Warengruppe oder eines Herstellers übernehmen. Die hinterlegten Platzhalter werden bei der Ausgabe durch die entsprechenden Werte ersetzt.

Weitere Informationen finden Sie unter [Integrationen](integrations.md#inhalte-an-katalogdaten-binden).
