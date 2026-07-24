# Medienbestand bereinigen

Verwalten Sie gelöschte, flüchtige, verwaiste und ungeordnete Dateien und prüfen Sie sorgfältig, welche Dateien nicht mehr benötigt werden.

## Besondere Ansichten verwenden

Der Medien-Manager stellt folgende virtuelle Ansichten bereit:

| Ansicht | Bedeutung |
| --- | --- |
| **Alle Dateien** | Gesamter aktiver Medienbestand |
| **Papierkorb** | Noch nicht endgültig gelöschte Dateien |
| **Flüchtig** | Dateien, die beim nächsten automatischen Aufräumvorgang gelöscht werden können |
| **Verwaist** | Dateien ohne bekannte Referenz durch eine Datenentität |
| **Ungeordnet** | Dateien ohne Ordnerzuordnung |

Leere Sonderansichten werden teilweise ausgeblendet. In diesen Ansichten können Sie keine Dateien hochladen und keine Ordner anlegen.

## Dateien in den Papierkorb verschieben

Außerhalb des Papierkorbs verschiebt die Aktion **Löschen** die ausgewählten Dateien zunächst in den Papierkorb. Die Dateien können anschließend wiederhergestellt werden.

Verwendete oder gesperrte Dateien lassen sich gegebenenfalls nicht löschen. In diesem Fall zeigt der Medien-Manager eine Warnung an.

## Dateien endgültig löschen

Die Aktion **Endgültig löschen** entfernt Dateien unwiderruflich.

{% hint style="danger" %}
Endgültig gelöschte Dateien können nicht über den Medien-Manager wiederhergestellt werden. Die Aktion ist auch außerhalb des Papierkorbs im Kontextmenü verfügbar.
{% endhint %}

## Dateien wiederherstellen

1. Öffnen Sie den **Papierkorb**.
2. Wählen Sie eine oder mehrere Dateien aus.
3. Wählen Sie **Wiederherstellen**.

Die Datei wird in ihren ursprünglichen Ordner zurückgelegt. Existiert dort bereits eine aktive Datei mit demselben Namen, erhält die wiederhergestellte Datei automatisch einen eindeutigen Namen.

Eine Datei ohne gültige Ordnerzuordnung kann nicht automatisch wiederhergestellt werden. Kopieren Sie eine solche Datei manuell in einen Ordner Ihrer Wahl.

## Verwaiste Dateien ermitteln

Eine verwaiste Datei ist eine Mediendatei, für die keine bekannte Verwendung durch eine Datenentität gefunden wurde.

1. Öffnen Sie das Kontextmenü des Albums.
2. Wählen Sie **Verwaiste Dateien ermitteln**.
3. Bestätigen Sie den Vorgang.

Der Medien-Manager prüft alle Dateien des Albums. Bei einem großen Medienbestand kann die Prüfung einige Zeit dauern. Anschließend finden Sie Dateien ohne erkannte Referenz in der Ansicht **Verwaist**.

{% hint style="warning" %}
Prüfen Sie verwaiste Dateien vor dem Löschen sorgfältig. Eine Datei kann über manuell eingetragene URLs, individuellen Programmcode oder externe Systeme verwendet werden, ohne dass eine vom System erkennbare Referenz besteht.
{% endhint %}

## Automatische Bereinigung berücksichtigen

Die allgemeinen Medieneinstellungen können festlegen, dass verwaiste Dateien als flüchtig markiert und bei einem späteren Aufräumvorgang gelöscht werden.

Weitere Informationen finden Sie unter [Medien-Einstellungen](../../konfiguration/einstellungen/medien-einstellungen.md).
