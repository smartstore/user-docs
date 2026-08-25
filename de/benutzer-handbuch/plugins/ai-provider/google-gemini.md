# Google Gemini

Mit dem Google-Gemini-Plugin können die KI-Funktionen von Smartstore Texte und Bilder erzeugen sowie Bilder analysieren.

![Konfiguration des Google-Gemini-Plugins](../../../.gitbook/assets/module_gemini_configuration.png)

{% hint style="info" %}
Das Google-Gemini-Plugin stellt die Verbindung zu Google her. Die eigentlichen Funktionen zum Erstellen und Bearbeiten von Inhalten werden vom [AI-Plugin](../ai.md) bereitgestellt.
{% endhint %}

Informationen zum API-Zugang finden Sie in der [offiziellen Gemini-Dokumentation](https://ai.google.dev/gemini-api/docs).

## Konfiguration

| **Option** | **Beschreibung** |
| --- | --- |
| API-Key | Authentifiziert Smartstore gegenüber der Gemini API. Der API-Key ist mit einem Google-Cloud-Projekt verbunden, über das auch Nutzung und Abrechnung verwaltet werden. |
| Bevorzugte KI-Modelle für das Generieren von Text | Legt fest, welche der verfügbaren Textmodelle in den Smartstore-KI-Dialogen angeboten werden. Bleibt das Feld leer, verwendet Smartstore die bevorzugten Standardmodelle des Providers. |
| Bevorzugte KI-Modelle für das Generieren von Bildern | Legt fest, welche der verfügbaren Bildmodelle in den Smartstore-KI-Dialogen angeboten werden. |
| KI-Modell für das Analysieren von Bildern | Legt fest, welches Modell Bildinhalte analysiert und daraus beispielsweise Titel, Alt-Texte und Tags erzeugt. |
| Maximale Token-Anzahl | Begrenzt den Umfang einer Antwort. Ein zu niedriger Wert kann dazu führen, dass längere Ausgaben unvollständig bleiben. Die mögliche Obergrenze hängt vom gewählten Modell ab. |
| Sampling-Temperatur anwenden | Überschreibt die vom gewählten Modell vorgegebene Sampling-Temperatur mit dem nachfolgend eingestellten Wert. Deaktiviert verwendet Gemini den jeweiligen Standardwert. |
| Sampling-Temperatur | Steuert die Variation der Antworten. Niedrigere Werte erzeugen meist vorhersehbarere, höhere Werte abwechslungsreichere Ergebnisse. |
| TopP anwenden | Überschreibt den vom gewählten Modell vorgegebenen TopP-Wert mit dem nachfolgend eingestellten Wert. Deaktiviert verwendet Gemini den jeweiligen Standardwert. |
| TopP | Alternative Methode zur Steuerung der Antwortvariation. In der Regel sollte entweder TopP oder die Sampling-Temperatur angepasst werden, nicht beides. |

### Prüfen

1. Speichern Sie die Einstellungen.
2. Klicken Sie auf **Modelle neu laden**, um die verfügbaren Modelle nachzuladen.
3. Wählen Sie unter **Verbindung testen** ein Textmodell aus und klicken Sie auf **Jetzt testen**.

Wenn die Verbindung nicht hergestellt werden kann, prüfen Sie den API-Key, den Status des zugehörigen Projekts, dessen Abrechnung beziehungsweise Kontingent und die Verfügbarkeit des ausgewählten Modells.

{% hint style="warning" %}
Abhängig vom verwendeten Tarif und Umfang können API-Anfragen Kosten verursachen.
{% endhint %}
