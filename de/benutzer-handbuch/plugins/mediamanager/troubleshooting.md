# Probleme mit dem Medien-Manager lösen

Finden Sie mögliche Ursachen für häufige Probleme beim Upload, Löschen, Wiederherstellen und Anzeigen von Mediendateien.

## Warum kann ich in einem Bereich keine Datei hochladen?

Uploads sind in virtuellen Ansichten wie **Alle Dateien**, **Papierkorb**, **Flüchtig**, **Verwaist** und **Ungeordnet** nicht möglich. Wählen Sie ein reguläres Album oder einen Ordner aus. Prüfen Sie außerdem Ihre Bearbeitungsberechtigung.

## Warum wird eine Datei beim Upload abgewiesen?

Mögliche Ursachen sind:

- Die Datei überschreitet die maximal erlaubte Dateigröße.
- Die Dateiendung ist in den Medieneinstellungen nicht freigegeben.
- Die Bilddatei ist beschädigt oder kann nicht verarbeitet werden.
- Eine zusätzliche Uploadgrenze des Servers oder Hostinganbieters wurde überschritten.

## Warum kann ich eine Datei nicht löschen?

Die Datei kann noch von einer Datenentität verwendet werden oder durch einen anderen Vorgang gesperrt sein. Prüfen Sie im Detailbereich die **Verweise**.

## Warum kann eine Datei nicht wiederhergestellt werden?

Für die automatische Wiederherstellung muss der ursprüngliche Ordner noch vorhanden sein. Ungeordnete Dateien ohne gültige Ordnerzuordnung müssen manuell in einen Ordner kopiert werden.

## Warum sieht ein geändertes Bild im Browser noch unverändert aus?

Der Browser oder ein Proxy kann eine ältere Version zwischengespeichert haben. Aktivieren Sie die Dateiversionierung für Medien-URLs oder leeren Sie zu Testzwecken den Browsercache. Prüfen Sie außerdem ein eventuell eingesetztes CDN.

## Warum werden neue Thumbnailgrößen nicht sofort überall sichtbar?

Thumbnails werden bei Bedarf erzeugt und können zwischengespeichert sein. Browser-, Proxy- oder CDN-Caches können die bisherige Variante weiterhin ausliefern. Die Funktion **Neu verarbeiten** betrifft hingegen die ausgewählten Originalbilder und sollte nicht allein zum Leeren von Thumbnail-Caches verwendet werden.

Weitere technische Einstellungen finden Sie unter [Medien-Einstellungen](../../konfiguration/einstellungen/medien-einstellungen.md).
