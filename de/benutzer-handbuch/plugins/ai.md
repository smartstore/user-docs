# AI

Das AI Plugin ![](../../.gitbook/assets/icon.png) arbeitet mit einem AI Provider (z.B. [OpenAI ChatGPT](openai-chatgpt.md)) zusammen und bietet viele Möglichkeiten, Inhalte neu zu erstellen oder umzugestalten.

{% hint style="info" %}
**Hinweise:**

1. Mit diesem Plugin können keine Produktbilder erstellt werden.
2. Es wird keine Gewähr für die Richtigkeit der Inhalte übernommen.
3. Die Massenbearbeitung von Inhalten wird aus folgenden Gründen nicht unterstützt:
   * Der Inhalt muss immer vom Benutzer überprüft werden.
   * Die Leistung würde stark reduziert werden.
{% endhint %}

## Überblick der verschiedenen Dialoge

Das AI Plugin bietet je nach Kontext unterschiedliche Dialoge für die Text- und Bildgenerierung.

### SimpleText

Für einfache Texte ohne Formatierungen (Titel, Kurzbeschreibung, …) wird der SimpleText-Dialog verwendet.

![SimpleText - Kontextmenü](../../.gitbook/assets/SimpleText_Kontext.PNG)

Ein Klick auf das AI-Symbol ![](../../.gitbook/assets/icon.png) öffnet ein Kontextmenü mit verschiedenen Befehlen, um Texte neu zu generieren, zusammenzufassen, Sprachstil und Tonfall zu ändern, den Schreibstil zu verbessern, den Text zu vereinfachen oder weiter auszuführen. Mit einem Klick auf Senden ![](../../.gitbook/assets/send.png), wird ihr Prompt an die KI geschickt.

![SimpleText-Dialog für eine Produkt-Kurzbeschreibung](../../.gitbook/assets/SimpleText_Dialog.PNG)

Der Dialog bietet eine Vielzahl an Möglichkeiten, den Text zu generieren und bearbeiten. Durch die Eingabe eines Prompts in der Promptleiste können Sie beschreiben, welche Inhalte erstellt werden. Einen tieferen Einblick in die Dialoge finden Sie im Abschnitt [Allgemeiner Dialog](ai.md#allgemeiner-dialog).

![Antwort-Optionen](../../.gitbook/assets/Prompt_AnswerOptions.PNG)

Durch Klicken auf **Antwort übernehmen** wird der ausgewählte Text in das Feld übertragen. Außerdem kann die Antwort in die Zwischenablage kopiert ![](../../.gitbook/assets/copy.png) und die Stilistik geändert werden ![](../../.gitbook/assets/sliders.png).

### RichText

Für Texte mit Formatierungen, HTML und Rich-Content, wie z.B. Links, Bilder, Listen und Tabellen, wird der RichText-Dialog verwendet. Bei Klick auf das AI-Symbol ![](../../.gitbook/assets/icon.png) wird dasselbe Kontextmenü wie von SimpleText benutzt. Der Dialog hat zusätzlich eine Sidebar (links) bekommen.

![RichText-Dialog für einen Produkt-Langtext](../../.gitbook/assets/Richtext_Dialog.PNG)

#### Sidebar

Die Sidebar stellt erweiterte Einstellungsmöglichkeiten zum Erstellen von Inhalten bereit. Je nachdem welche Entität (Produkt, Blog, News, …) bearbeitet wird, werden andere Optionen angezeigt.

*   **Sprache** bietet Optionen für Ton und Stil.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_Language.PNG)
*   **Struktur** bietet Optionen für Überschriften und Absätze.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_Structure.PNG)
*   **Keywords** bietet Optionen für Schlüsselwörter.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_Keywords.PNG)
*   **Bilder** bietet Optionen um Bilder einzufügen.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_Pictures.PNG)
*   **Links** bietet Optionen für Verweise und Schaltflächen.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_Links_Blog.PNG)
*   **Zusätzliche Inhalte** bietet weitere Einstellungsmöglichkeiten.

    ![](../../.gitbook/assets/Richtext_Dialog_Sidebar_AdditionalContent_Blog.PNG)

{% hint style="warning" %}
Mit dem Button **Einstellungen speichern** können die verwendeten Sidebar-Einstellungen für die aktuell verwendete Entität als Standard gespeichert werden. Dies gewährleistet ein einheitliches Design in Ihrem Shop.
{% endhint %}

#### Bilder generieren

![Platzhalter für die Bildgenerierung](../../.gitbook/assets/Richtext_Dialog_Images.PNG)

Wenn in der Sidebar die Option **Bilder einfügen** aktiviert ist, werden im generierten Text zunächst nur Platzhalter ![](../../.gitbook/assets/file-earmark-image.png) angezeigt. Dies dient dazu, die Anzahl der Generierungen gering zu halten und erst dann zu starten, wenn der Text nicht mehr verändert wird. Neben dem Button **Antwort übernehmen** erscheint der Button **Bilder erzeugen**. Wird dieser angeklickt, werden die Bilder nacheinander erzeugt und mit einem Klick auf **Antwort übernehmen** in den MedienManager übertragen und mit dem Text verknüpft.

#### HTML-Editor Einbindung

![AI in der HTML-Editor-Toolbar](../../.gitbook/assets/Summernote_Integration.PNG)

Wenn Sie im HTML-Editor AI nutzen wollen, klicken Sie einfach auf das Icon ![](../../.gitbook/assets/icon.png) in der Toolbar und es öffnet sich der gewohnte Dialog.

![Textabschnitt bearbeiten](../../.gitbook/assets/Summernote_SelectedText.PNG)

Soll nur ein bestimmter Text überarbeitet werden, markieren Sie im Editor den gewünschten Textabschnitt und klicken wieder auf das Icon ![](../../.gitbook/assets/icon.png) in der Toolbar. Die Option Neu generieren ist jetzt deaktiviert, alle anderen Optionen beziehen sich jetzt auf den selektierten Text.

### Suggestions

Bei neuen Blog und News Beiträgen, können Sie sich zu Themen oder Stichwörtern Titel vorschlagen lassen. Dazu gehen Sie einfach auf das AI-Icon ![](../../.gitbook/assets/icon.png) im leeren Titel-Feld und schon öffnet sich der Suggestions-Dialog. Nachdem Sie in der Promptleiste ihr Thema bzw. Stichwörter eingegeben haben, werden Titel generiert. Diese können Sie mit einem Klick auf **Übernehmen** übertragen.

![Suggestions-Dialog eines Blogbeitrags](../../.gitbook/assets/Suggestions_Dialog.PNG)

{% hint style="info" %}
Bitte vergessen Sie nicht, direkt danach den Beitrag zu **speichern**, da die weitere Bearbeitung sonst nicht möglich ist!
{% endhint %}

### Translations

![Translations-Kontextmenü im Produkteditor](../../.gitbook/assets/Translation_Kontext.PNG)

Im Editor mit Sprachauswahl können die enthaltenen Felder automatisch per AI übersetzt werden. Klicken Sie dazu auf das AI-Icon ![](../../.gitbook/assets/icon.png) und wählen Sie das zu übersetzende Feld aus.

![Translations-Dialog](../../.gitbook/assets/Translation_Dialog.PNG)

Der Translations-Dialog zeigt Ihnen alle Spracheinträge und bietet Ihnen die Möglichkeit, fehlende Sprachen zu übersetzen oder alle Sprachen neu zu übersetzen. Mit **Übernehmen** und **Alle übernehmen** können Sie Ihre Entität internationalisieren.

1. Wählen Sie zuerst aus, ob alle Sprachen neu übersetzt werden sollen, oder nur die fehlenden Sprachen.
2. Klicken Sie dann auf Senden ![](../../.gitbook/assets/send.png) , um die Übersetzung des Textes zu starten.

Wenn Sie einzelne Übersetzungen übernehmen wollen, klicken Sie in dem Reiter der jeweiligen Sprache auf **Übernehmen**. Sollen alle Übersetzungen übernommen werden, klicken Sie in der Promptleiste auf **Alle übernehmen**.

### Images

![Images-Dialog bei Blogbeiträgen](../../.gitbook/assets/Bilder_Blog.PNG)

In Blog- und Newsbeiträgen bietet das AI-Tool die Möglichkeit zu erstellten Inhalten ein passendes Bild und eine Vorschau zu generieren.

![Image-Dialog für die Bildgenerierung im Blog](../../.gitbook/assets/Bilder_Dialog.PNG)

Bei der Generierung von Bildern wird die Sidebar mit optionalen Einstellungsmöglichkeiten gefüllt.

![Sidebar für die Bildgenerierung](../../.gitbook/assets/Richtext_Dialog_Sidebar_Images.PNG)

### Allgemeiner Dialog

#### Model-Auswahl

![Modelle des AI-Providers](../../.gitbook/assets/Prompt_ModelChoice.PNG)

Wenn Sie auf die Modelauswahl klicken (oben rechts), wird eine Auflistung aller AI-Modelle angezeigt, die für den aktuellen Dialog verwendet werden können. Diese können Sie in der Konfiguration des Providers (z.B. [ChatGPT](openai-chatgpt.md)) bearbeiten.

#### Promptleiste

![Dialog - Promptleiste](../../.gitbook/assets/Prompt_Options.PNG)

Die Promptleiste bietet mehr als nur ein Eingabefeld für den einfachen Prompt. Sie können den erweiterten Prompt bearbeiten ![](../../.gitbook/assets/chat-square-text.png), die Wortgrenzen-![](../../.gitbook/assets/hash.png), den Sprachstil- ![](../../.gitbook/assets/vector-pen.png) und den Ton ![](../../.gitbook/assets/emoji-wink.png) des Textes ändern.

**RawPrompt**

![Änderung des RawPrompts](../../.gitbook/assets/RawPrompt.PNG)

Durch Klicken auf das Prompt-Icon ![](../../.gitbook/assets/chat-square-text.png) gelangt man zum RawPrompt ![](../../.gitbook/assets/chat-square-text-fill.png) (erweiterter Prompt). Dieser enthält die Anweisungen, die tatsächlich an die KI weitergegeben werden. Hier können detaillierte Änderungen vorgenommen werden, um den Prompt an die eigenen Bedürfnisse anzupassen.

![RawPrompt - Resultat](../../.gitbook/assets/RawPrompt_Result.PNG)

{% hint style="warning" %}
Anwendungsbeispiel: - Hinzufügen einer Tabelle mit wichtigen Merkmalen - Personalisierte Formatierung
{% endhint %}

## Konfiguration

![Konfiguration - Einstellungen](../../.gitbook/assets/Konfiguration_TabEinstellungen.png)

| **Option**                 | **Beschreibung**                                                                                                                                                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ausdrucksweisen            | Beschreibt, wie die KI Emotionen oder Absichten sichtbar macht (z. B. freundlich, fordernd, dramatisch).                                                                                                         |
| Sprachstile                | Legt fest, wie formuliert wird (z. B. sachlich, rechtlich, geschäftlich). So klingt der Output konsistent in Tonalität und Satzbau.                                                                              |
| Medientypen                | Bestimmt das „Format“, das die KI nachbilden soll (z. B. Poster / Storyboard / Foto-Look).                                                                                                                       |
| Umgebungen                 | Definiert den Ort bzw. den Kontext des Bildes (z. B. Büro, Wohnzimmer, Küche).                                                                                                                                   |
| Beleuchtungsarten          | Legt fest, wie Licht wirkt (z. B. warmes Glühen, kaltes Neon, weich, Softbox).                                                                                                                                   |
| Farbstile                  | Gibt vor, welche Farbwelt dominieren soll (z. B. pastellig, monochrom, Cinemascope, High-Saturation).                                                                                                            |
| Stimmungen                 | Steuert die emotionale Gesamtrichtung (z. B. ruhig, gespannt, melancholisch, energiegeladen).                                                                                                                    |
| Kopositionsarten           | Regelt die Anordnung im Bild bzw. die Gliederung im Text (z. b. Portrait, zentriert, Weitwinkel).                                                                                                                |
| Standardsprache übersetzen | Die Standardsprache ist die erste aktive Sprache eines Stores. Ist kein Wert für sie hinterlegt, wird der Wert aus dem Reiter "Standard" genutzt. Daher wird empfohlen, die Standardsprache nicht zu übersetzen. |
| Beispielgenerator anbieten | Stellt einen Chat-Generator zur Verfügung steht, der Beispieldaten erzeugt.                                                                                                                                      |

### Textlängen

![Konfiguration - Textlängen](../../.gitbook/assets/Konfiguration_TabTextlaengen.png)

| **Option**                                        | **Beschreibung**                                                                                         |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Maximale Wortzahl für Produkt-Kurzbeschreibung    | Legt die maximale Anzahl von Wörtern fest, die für die Kurzbeschreibung eines Produkts generiert werden. |
| Minimale Wortzahl Warengruppenbeschreibung (oben) | Legt die minimale Anzahl von Wörtern fest, die für die obere Warengruppenbeschreibung generiert werden.  |
| Maximale Wortzahl Warengruppenbeschreibung (oben) | Legt die maximale Anzahl von Wörtern fest, die für die obere Warengruppenbeschreibung generiert werden.  |
| Minimale Wortzahl Herstellerbeschreibung (oben)   | Legt die minimale Anzahl von Wörtern fest, die für die obere Herstellerbeschreibung generiert werden.    |
| Maximale Wortzahl Herstellerbeschreibung (oben)   | Legt die maximale Anzahl von Wörtern fest, die für die obere Herstellerbeschreibung generiert werden.    |

### Bild-Metadaten

![Konfiguration - Bild-Metadaten](../../.gitbook/assets/Konfiguration_TabBildMetadaten.png)

| **Option**                          | **Beschreibung**                                                                        |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| Metadaten bei Bild-Upload erstellen | Legt fest, ob beim Hochladen eines Bildes automatisch Metadaten erzeugt werden.         |
| Provider für die Bild-Analyse       | Definiert den Provider, der für die Erstellung von Metadaten für Bilder verwendet wird. |
| Title-Attribut erzeugen             |                                                                                         |
| Alt-Attribut erzeugen               |                                                                                         |
| Tags erzeugen                       | Bestimmt, ob Tags zur besseren Auffindbarkeit im Medien-Manager erzeugen werden sollen. |
| Anzahl der Tags                     |                                                                                         |
| Bilder berücksichtigen für          | Bestimmt die Typen, für die Bilder beim Upload verarbeitet werden.                      |

{% hint style="warning" %}
Wenn die Option ‘Metadaten bei Bild-Upload erstellen’ aktiviert ist, wird das Bild beim Upload durch die KI analysiert.
{% endhint %}

### Produkterstellung

![Konfiguration - Produkterstellung](../../.gitbook/assets/Konfiguration_TabProdukterstellung.png)

| **Option**                   | **Beschreibung**                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SEO-Eigenschaften hinzufügen | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die SEO-Eigenschaften des Produkts erzeugt werden sollen.                    |
| Übersetzungen hinzufügen     | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch Übersetzungen für das Produkt erzeugt werden sollen.                         |
| Hersteller zuordnen          | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI eine automatische Zuordnung zu einem vorhandenen Hersteller versucht werden soll. |
| EAN ermitteln                | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die EAN für das Produkt ermittelt werden soll.                               |
| Gewicht ermitteln            | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch das Gewicht für das Produkt ermittelt werden soll.                           |
| Abmessungen ermitteln        | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die Abmessungen für das Produkt ermittelt werden sollen.                     |
