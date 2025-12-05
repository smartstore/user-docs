Das AI Plugin ![icon.png](./attachments/icon.png) arbeitet mit einem AI Provider (z.B. [OpenAI ChatGPT](../plugins-designs/openai-chatgpt.md)) zusammen und bietet viele Möglichkeiten, Inhalte neu zu erstellen oder umzugestalten.

{% hint style="info" %}
**Hinweise:**
1. Mit diesem Plugin können keine Produktbilder erstellt werden.
2. Es wird keine Gewähr für die Richtigkeit der Inhalte übernommen.
3. Die Massenbearbeitung von Inhalten wird aus folgenden Gründen nicht unterstützt:
	- Der Inhalt muss immer vom Benutzer überprüft werden.
	- Die Leistung würde stark reduziert werden.
{% endhint %}

# Überblick der verschiedenen Dialoge

Das AI Plugin bietet je nach Kontext unterschiedliche Dialoge für die Text- und Bildgenerierung.

## SimpleText

Für einfache Texte ohne Formatierungen (Titel, Kurzbeschreibung, …), wird der SimpleText-Dialog verwendet.

![SimpleText_Kontext.PNG](./attachments/SimpleText_Kontext.PNG)

Ein Klick auf das AI-Symbol ![icon.png](./attachments/icon.png)

 öffnet ein Kontextmenü mit verschiedenen Befehlen, um Texte neu zu generieren, zusammenzufassen, Sprachstil und Tonfall zu ändern, den Schreibstil zu verbessern, den Text zu vereinfachen oder weiter auszuführen. Mit einem Klick auf Senden ![send.png](./attachments/send.png)

, wird ihr Prompt an die KI geschickt.

![SimpleText_Dialog.PNG](./attachments/SimpleText_Dialog.PNG)

Der Dialog bietet eine Vielzahl an Möglichkeiten, den Text zu generieren und bearbeiten. Durch die Eingabe eines Prompts in der Promptleiste können Sie beschreiben, welche Inhalte erstellt werden. Einen tieferen Einblick in die Dialoge finden Sie im Abschnitt [Grundlegende Konzepte](https://smartstore.atlassian.net/wiki/spaces/SDDE60/pages/2530508825/AI#Grundlegende-Konzepte).

![Prompt_AnswerOptions.PNG](./attachments/Prompt_AnswerOptions.PNG)

Durch Klicken auf **Antwort übernehmen** wird der ausgewählte Text in das Feld übertragen. Außerdem kann die Antwort in die Zwischenablage kopiert ![copy.png](./attachments/copy.png)

 und die Stilistik geändert werden ![sliders.png](./attachments/sliders.png)

.

## RichText

Für Texte mit Formatierungen, HTML und Rich-Content, wie z.B. Links, Bilder, Listen und Tabellen, wird der RichText-Dialog verwendet. Bei Klick auf das AI-Symbol ![icon.png](./attachments/icon.png)

 wird dasselbe Kontextmenü wie von SimpleText benutzt. Der Dialog hat zusätzlich eine Sidebar (links) bekommen.

![Richtext_Dialog.PNG](./attachments/Richtext_Dialog.PNG)

### Sidebar

Die Sidebar stellt erweiterte Einstellungsmöglichkeiten zum Erstellen von Inhalten bereit. Je nachdem welche Entität (Produkt, Blog, News, …) bearbeitet wird, werden andere Optionen angezeigt.

![Richtext_Dialog_Sidebar_Language.PNG](./attachments/Richtext_Dialog_Sidebar_Language.PNG)

![Richtext_Dialog_Sidebar_Structure.PNG](./attachments/Richtext_Dialog_Sidebar_Structure.PNG)

![Richtext_Dialog_Sidebar_Keywords.PNG](./attachments/Richtext_Dialog_Sidebar_Keywords.PNG)

![Richtext_Dialog_Sidebar_Pictures.PNG](./attachments/Richtext_Dialog_Sidebar_Pictures.PNG)

![Richtext_Dialog_Sidebar_Links_Blog.PNG](./attachments/Richtext_Dialog_Sidebar_Links_Blog.PNG)

![Richtext_Dialog_Sidebar_AdditionalContent_Blog.PNG](./attachments/Richtext_Dialog_Sidebar_AdditionalContent_Blog.PNG)

> [!TIP]
> Mit dem Button **Einstellungen speichern** können die verwendeten Sidebar-Einstellungen für die aktuell verwendete Entität als Standard gespeichert werden. Dies gewährleistet ein einheitliches Design in Ihrem Shop.

### Bilder generieren

![Richtext_Dialog_Images.PNG](./attachments/Richtext_Dialog_Images.PNG)

Wenn in der Sidebar die Option **Bilder einfügen** aktiviert ist, werden im generierten Text zunächst nur Platzhalter ![file-earmark-image.png](./attachments/file-earmark-image.png)

 angezeigt. Dies dient dazu, die Anzahl der Generierungen gering zu halten und erst dann zu starten, wenn der Text nicht mehr verändert wird. Neben dem Button **Antwort übernehmen** erscheint der Button **Bilder erzeugen**. Wird dieser angeklickt, werden die Bilder nacheinander erzeugt und mit einem Klick auf **Antwort übernehmen** in den MedienManager übertragen und mit dem Text verknüpft.

### HTML-Editor Einbindung

![Summernote_Integration.PNG](./attachments/Summernote_Integration.PNG)

Wenn Sie im HTML-Editor AI nutzen wollen, klicken Sie einfach auf das Icon ![icon.png](./attachments/icon.png)

 in der Toolbar und es öffnet sich der gewohnte Dialog.

![Summernote_SelectedText.PNG](./attachments/Summernote_SelectedText.PNG)

Soll nur ein bestimmter Text überarbeitet werden, markieren Sie im Editor den gewünschten Textabschnitt und klicken wieder auf das Icon ![icon.png](./attachments/icon.png)

 in der Toolbar. Die Option Neu generieren ist jetzt deaktiviert, alle anderen Optionen beziehen sich jetzt auf den selektierten Text.

## Suggestions

Bei neuen Blog und News Beiträgen, können Sie sich zu Themen oder Stichwörtern Titel vorschlagen lassen. Dazu gehen Sie einfach auf das AI-Icon ![icon.png](./attachments/icon.png)

 im leeren Titel-Feld und schon öffnet sich der Suggestions-Dialog. Nachdem Sie in der Promptleiste ihr Thema bzw. Stichwörter eingegeben haben, werden Titel generiert. Diese können Sie mit einem Klick auf **Übernehmen** übertragen.

![Suggestions_Dialog.PNG](./attachments/Suggestions_Dialog.PNG)

{% hint style="info" %}
Bitte vergessen Sie nicht, direkt danach den Beitrag zu **speichern**, da die weitere Bearbeitung sonst nicht möglich ist!
{% endhint %}

## Translations

![Translation_Kontext.PNG](./attachments/Translation_Kontext.PNG)

Im Editor mit Sprachauswahl können die enthaltenen Felder automatisch per AI übersetzt werden. Klicken Sie dazu auf das AI-Icon ![icon.png](./attachments/icon.png)

 und wählen Sie das zu übersetzende Feld aus.

![Translation_Dialog.PNG](./attachments/Translation_Dialog.PNG)

Der Translations-Dialog zeigt Ihnen alle Spracheinträge und bietet Ihnen die Möglichkeit, fehlende Sprachen zu übersetzen oder alle Sprachen neu zu übersetzen. Mit **Übernehmen** und **Alle übernehmen** können Sie Ihre Entität internationalisieren.

1. Wählen Sie zuerst aus, ob alle Sprachen neu übersetzt werden sollen, oder nur die fehlenden Sprachen.
2. Klicken Sie dann auf Senden ![send.png](./attachments/send.png)
, um die Übersetzung des Textes zu starten.

Wenn Sie einzelne Übersetzungen übernehmen wollen, klicken Sie in dem Reiter der jeweiligen Sprache auf **Übernehmen**. Sollen alle Übersetzungen übernommen werden, klicken Sie in der Promptleiste auf **Alle übernehmen**.

## Images

![Bilder_Blog.PNG](./attachments/Bilder_Blog.PNG)

In Blog- und Newsbeiträgen bietet das AI-Tool die Möglichkeit zu erstellten Inhalten ein passendes Bild und eine Vorschau zu generieren.

![Bilder_Dialog.PNG](./attachments/Bilder_Dialog.PNG)

Bei der Generierung von Bildern wird die Sidebar mit optionalen Einstellungsmöglichkeiten gefüllt.

![Richtext_Dialog_Sidebar_Images.PNG](./attachments/Richtext_Dialog_Sidebar_Images.PNG)

## Allgemeiner Dialog

### Model-Auswahl

![Prompt_ModelChoice.PNG](./attachments/Prompt_ModelChoice.PNG)

Wenn Sie auf die Modelauswahl klicken (oben rechts), wird eine Auflistung aller AI-Modelle angezeigt, die für den aktuellen Dialog verwendet werden können. Diese können Sie in der Konfiguration des Providers (z.B. [ChatGPT](../plugins-designs/openai-chatgpt.md)) bearbeiten.

### Promptleiste

![Prompt_Options.PNG](./attachments/Prompt_Options.PNG)

Die Promptleiste bietet mehr als nur ein Eingabefeld für den einfachen Prompt. Sie können den erweiterten Prompt bearbeiten ![chat-square-text.png](./attachments/chat-square-text.png)

, die Wortgrenzen-![hash.png](./attachments/hash.png)

, den Sprachstil- ![vector-pen.png](./attachments/vector-pen.png)

 und den Ton ![emoji-wink.png](./attachments/emoji-wink.png)

 des Textes ändern.

#### RawPrompt

![RawPrompt.PNG](./attachments/RawPrompt.PNG)

Durch Klicken auf das Prompt-Icon ![chat-square-text.png](./attachments/chat-square-text.png)

 gelangt man zum RawPrompt ![chat-square-text-fill.png](./attachments/chat-square-text-fill.png)

 (erweiterter Prompt). Dieser enthält die Anweisungen, die tatsächlich an die KI weitergegeben werden. Hier können detaillierte Änderungen vorgenommen werden, um den Prompt an die eigenen Bedürfnisse anzupassen.

![RawPrompt_Result.PNG](./attachments/RawPrompt_Result.PNG)

> [!TIP]
> Anwendungsbeispiel:
> - Hinzufügen einer Tabelle mit wichtigen Merkmalen
> - Personalisierte Formatierung

## Beispiele

### Produkttexte

### Blog-Eintrag

# Konfiguration

![Konfiguration_TabEinstellungen.png](./attachments/Konfiguration_TabEinstellungen.png)

| **Option** | **Beschreibung** |
| --- | --- |
| Ausdrucksweisen |     |
| Sprachstile |     |
| Medientypen |     |
| Umgebungen |     |
| Beleuchtungsarten |     |
| Farbstile |     |
| Stimmungen |     |
| Kopositionsarten |     |
| Standardsprache übersetzen | Die Standardsprache ist die erste aktive Sprache eines Stores. Ist kein Wert für sie hinterlegt, wird der Wert aus dem Reiter "Standard" genutzt. Daher wird empfohlen, die Standardsprache nicht zu übersetzen. |
| Beispielgenerator anbieten | Stellt einen Chat-Generator zur Verfügung steht, der Beispieldaten erzeugt. |

## Textlängen

![Konfiguration_TabTextlaengen.png](./attachments/Konfiguration_TabTextlaengen.png)

| **Option** | **Beschreibung** |
| --- | --- |
| Maximale Wortzahl für Produkt-Kurzbeschreibung | Legt die maximale Anzahl von Wörtern fest, die für die Kurzbeschreibung eines Produkts generiert werden. |
| Minimale Wortzahl Warengruppenbeschreibung (oben) | Legt die minimale Anzahl von Wörtern fest, die für die obere Warengruppenbeschreibung generiert werden. |
| Maximale Wortzahl Warengruppenbeschreibung (oben) | Legt die maximale Anzahl von Wörtern fest, die für die obere Warengruppenbeschreibung generiert werden. |
| Minimale Wortzahl Herstellerbeschreibung (oben) | Legt die minimale Anzahl von Wörtern fest, die für die obere Herstellerbeschreibung generiert werden. |
| Maximale Wortzahl Herstellerbeschreibung (oben) | Legt die maximale Anzahl von Wörtern fest, die für die obere Herstellerbeschreibung generiert werden. |

## Bild-Metadaten

![Konfiguration_TabBildMetadaten.png](./attachments/Konfiguration_TabBildMetadaten.png)

| **Option** | **Beschreibung** |
| --- | --- |
| Metadaten bei Bild-Upload erstellen | Legt fest, ob beim Hochladen eines Bildes automatisch Metadaten erzeugt werden. |
| Provider für die Bild-Analyse | Definiert den Provider, der für die Erstellung von Metadaten für Bilder verwendet wird. |
| Title-Attribut erzeugen |     |
| Alt-Attribut erzeugen |     |
| Tags erzeugen | Bestimmt, ob Tags zur besseren Auffindbarkeit im Medien-Manager erzeugen werden sollen. |
| Anzahl der Tags |     |
| Bilder berücksichtigen für | Bestimmt die Typen, für die Bilder beim Upload verarbeitet werden. |

> [!TIP]
> Wenn die Option ‘Metadaten bei Bild-Upload erstellen’ aktiviert ist, wird das Bild beim Upload durch die KI analysiert.

## Produkterstellung

![Konfiguration_TabProdukterstellung.png](./attachments/Konfiguration_TabProdukterstellung.png)

| **Option** | **Beschreibung** |
| --- | --- |
| SEO-Eigenschaften hinzufügen | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die SEO-Eigenschaften des Produkts erzeugt werden sollen. |
| Übersetzungen hinzufügen | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch Übersetzungen für das Produkt erzeugt werden sollen. |
| Hersteller zuordnen | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI eine automatische Zuordnung zu einem vorhandenen Hersteller versucht werden soll. |
| EAN ermitteln | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die EAN für das Produkt ermittelt werden soll. |
| Gewicht ermitteln | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch das Gewicht für das Produkt ermittelt werden soll. |
| Abmessungen ermitteln | Bestimmt, ob bei der Erstellung von Produkten mit Hilfe von KI auch die Abmessungen für das Produkt ermittelt werden sollen. |

# Produkterstellung

{% hint style="info" %}
Dies ist ein experimentelles Feature!
{% endhint %}
{% hint style="info" %}
Um lange Wartezeiten zu vermeiden, wird empfohlen, die Einstellung **Übersetzungen hinzufügen** auszuschalten, wenn sie nicht benötigt werden.
{% endhint %}