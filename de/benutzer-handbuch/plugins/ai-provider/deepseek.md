# DeepSeek

Mit dem DeepSeek-Plugin können die KI-Funktionen von Smartstore Texte erzeugen und Inhalte übersetzen.

![Konfiguration des DeepSeek-Plugins](../../../.gitbook/assets/module_deepseek_configuration.png)

{% hint style="info" %}
Das DeepSeek-Plugin stellt die Verbindung zu DeepSeek her. Die eigentlichen Funktionen zum Erstellen und Bearbeiten von Inhalten werden vom [AI-Plugin](../ai.md) bereitgestellt.
{% endhint %}

Informationen zum API-Zugang finden Sie in der [offiziellen DeepSeek-Dokumentation](https://api-docs.deepseek.com/).

## Konfiguration

| **Option** | **Beschreibung** |
| --- | --- |
| API-Key | Authentifiziert Smartstore gegenüber der DeepSeek API. |
| Bevorzugte KI-Modelle für das Generieren von Text | Legt fest, welche der verfügbaren Textmodelle in den Smartstore-KI-Dialogen angeboten werden. Bleibt das Feld leer, verwendet Smartstore die bevorzugten Standardmodelle des Providers. |
| Maximale Token-Anzahl | Begrenzt den Umfang einer Antwort. Ein zu niedriger Wert kann dazu führen, dass längere Ausgaben unvollständig bleiben. Die mögliche Obergrenze hängt vom gewählten Modell ab. |
| Sampling-Temperatur | Steuert die Variation der Antworten. Niedrigere Werte erzeugen meist vorhersehbarere, höhere Werte abwechslungsreichere Ergebnisse. |
| TopP | Alternative Methode zur Steuerung der Antwortvariation. In der Regel sollte entweder TopP oder die Sampling-Temperatur angepasst werden, nicht beides. |

Das Plugin unterstützt in Smartstore keine Bilderstellung oder Bildanalyse. Entsprechende Auswahlfelder werden deshalb nicht angezeigt.

### Prüfen

1. Speichern Sie die Einstellungen.
2. Klicken Sie auf **Modelle neu laden**, um die verfügbaren Modelle nachzuladen.
3. Wählen Sie unter **Verbindung testen** ein Textmodell aus und klicken Sie auf **Jetzt testen**.

Wenn die Verbindung nicht hergestellt werden kann, prüfen Sie den API-Key, das verfügbare Guthaben, mögliche Nutzungslimits und die Verfügbarkeit des ausgewählten Modells.

{% hint style="warning" %}
API-Anfragen können nutzungsabhängige Kosten verursachen.
{% endhint %}
