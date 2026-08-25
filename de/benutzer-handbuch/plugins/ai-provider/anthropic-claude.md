# Anthropic Claude

Mit dem Anthropic-Claude-Plugin können die KI-Funktionen von Smartstore Texte erzeugen, Inhalte übersetzen und Bilder analysieren.

![Konfiguration des Anthropic-Claude-Plugins](../../../.gitbook/assets/module_claude_configuration.png)

{% hint style="info" %}
Das Anthropic-Claude-Plugin stellt die Verbindung zu Anthropic her. Die eigentlichen Funktionen zum Erstellen und Bearbeiten von Inhalten werden vom [AI-Plugin](../ai.md) bereitgestellt.
{% endhint %}

Informationen zum API-Zugang finden Sie in der [offiziellen Anthropic-Dokumentation](https://docs.anthropic.com/en/docs/intro-to-claude).

## Konfiguration

| **Option** | **Beschreibung** |
| --- | --- |
| API-Key | Authentifiziert Smartstore gegenüber der Anthropic API. Ein Claude-Abonnement umfasst nicht automatisch die Nutzung der Anthropic API. |
| Bevorzugte KI-Modelle für das Generieren von Text | Legt fest, welche der verfügbaren Textmodelle in den Smartstore-KI-Dialogen angeboten werden. Bleibt das Feld leer, verwendet Smartstore die bevorzugten Standardmodelle des Providers. |
| KI-Modell für das Analysieren von Bildern | Legt fest, welches Modell Bildinhalte analysiert und daraus beispielsweise Titel, Alt-Texte und Tags erzeugt. |
| Maximale Token-Anzahl | Begrenzt den Umfang einer Antwort. Ein zu niedriger Wert kann dazu führen, dass längere Ausgaben unvollständig bleiben. Die mögliche Obergrenze hängt vom gewählten Modell ab. |
| Sampling-Temperatur | Steuert die Variation der Antworten. Niedrigere Werte erzeugen meist vorhersehbarere, höhere Werte abwechslungsreichere Ergebnisse. |

Das Plugin bietet keine Konfiguration für die Bilderstellung. Claude kann Bilder analysieren, erzeugt in Smartstore jedoch keine Bilder.

### Prüfen

1. Speichern Sie die Einstellungen.
2. Klicken Sie auf **Modelle neu laden**, um die verfügbaren Modelle nachzuladen.
3. Wählen Sie unter **Verbindung testen** ein Textmodell aus und klicken Sie auf **Jetzt testen**.

Wenn die Verbindung nicht hergestellt werden kann, prüfen Sie den API-Key, das verfügbare API-Guthaben, mögliche Nutzungslimits und die Berechtigung Ihres API-Kontos für das ausgewählte Modell.

{% hint style="warning" %}
API-Anfragen können nutzungsabhängige Kosten verursachen.
{% endhint %}
