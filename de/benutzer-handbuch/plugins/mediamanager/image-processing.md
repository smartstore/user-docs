# Bilder neu verarbeiten

Kodieren Sie vorhandene Bilder mit den aktuellen Medieneinstellungen neu und verstehen Sie das Zusammenspiel mit Bildoptimierung und Video-Thumbnails.

## Bilder neu verarbeiten

Mit **Neu verarbeiten** werden ausgewählte Bilddateien erneut geladen, dekodiert und mit den aktuell eingestellten Bildverarbeitungsoptionen gespeichert.

Diese Funktion eignet sich beispielsweise nach einer Änderung der JPEG-Qualität oder PNG-Kompression.

1. Wählen Sie eine oder mehrere Bilddateien aus.
2. Öffnen Sie das Kontextmenü.
3. Wählen Sie **Neu verarbeiten**.
4. Bestätigen Sie den Vorgang.

Nach Abschluss zeigt der Medien-Manager die Dateigröße vor und nach der Verarbeitung sowie die Differenz an.

{% hint style="warning" %}
Durch die erneute Kodierung können Dateien kleiner oder größer werden. Die Verarbeitung verändert die gespeicherte Originaldatei. Erstellen Sie bei wichtigen Originaldateien vorher eine Sicherung.
{% endhint %}

Die zugrunde liegenden Optionen werden in den [Medien-Einstellungen](../../konfiguration/einstellungen/medien-einstellungen.md) konfiguriert.

## TinyImage berücksichtigen

Ist [TinyImage](../tinyimage.md) aktiv und für Uploads konfiguriert, wird die Optimierung auch bei der Neuverarbeitung ausgeführt. TinyImage kann abhängig von seiner Konfiguration PNG-, JPEG- und GIF-Dateien komprimieren sowie WebP-Varianten bereitstellen.

## Video-Thumbnails erzeugen

Der Medien-Manager kann aus Videos automatisch Vorschaubilder erzeugen. Dafür wird FFmpeg auf dem Server benötigt. Smartstore versucht, die benötigte native Komponente bereitzustellen. Ist dies nicht möglich, muss ein Administrator oder Hostinganbieter FFmpeg installieren.

Die FFmpeg-Parameter sind keine reguläre Einstellung für Shopbetreiber und sollten nur durch technisch erfahrene Administratoren geändert werden.
