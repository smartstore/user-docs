# Produktsicherheitsverordnung (GPSR)

Das GPSR-Plugin ergänzt Smartstore um Funktionen zur Pflege und Anzeige von Produktinformationen im Zusammenhang mit [der Verordnung (EU) 2023/988](https://eur-lex.europa.eu/eli/reg/2023/988/oj/deu) (GPSR).

Es können insbesondere folgende Angaben gepflegt und auf der Produktdetailseite angezeigt werden:

* Angaben zum Hersteller
* Produkthinweise
* Sicherheitshinweise

{% hint style="info" %}
Die in diesem Artikel angeführten Beispiele sind weder rechtsverbindlich noch rechtskonform. Sie dienen lediglich der Erläuterung und Anwendung.
{% endhint %}

## Herstellerdaten anzeigen

Die Angaben zum Hersteller hinterlegen Sie im Backend unter **Katalog** → **Hersteller** im Tab **GPSR**.

![Angaben zum Hersteller im GPSR-Tab](../../.gitbook/assets/module_gpsr_hersteller_tab.png)

| **Option**              | **Beschreibung**                                                                                                                           | **Beispiel**                                                                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Angaben zum Hersteller  | <p>- Hersteller- bzw. Markenname<br>- Postanschrift<br>- Elektronische Adresse (E-Mail / Website)</p>                                      | <p><em>TEA Sports Deutschland GmbH</em><br><br><em>TEA Sports Deutschland GmbH</em><br><em>Musterstraße 123</em><br><em>50667 Köln</em><br><em>Deutschland</em><br><br><em>E-Mail: info@tea-sports.de</em></p>                                               |
| Produktverantwortlicher | <p>- Wenn der Hersteller nicht in der EU niedergelassen ist<br>- Name<br>- Postanschrift<br>- Elektronische Adresse (E-Mail / Website)</p> | <p><em>Frau Dr. Julia Meyer</em><br><br><em>TEA Sports Deutschland GmbH</em><br><em>Abteilung Legal &#x26; Compliance</em><br><em>Musterstraße 123</em><br><em>50667 Köln</em><br><em>Deutschland</em><br><br><em>E-Mail: julia.meyer@tea-sports.de</em></p> |

Die hinterlegten GPSR-Angaben eines zugeordneten Herstellers können auf der Produktdetailseite angezeigt werden. Sind einem Produkt mehrere Hersteller zugeordnet, berücksichtigt das Plugin standardmäßig nur den ersten. Diese Einstellung lässt sich in der Plugin-Konfiguration ändern.

![Herstellerinformationen auf der Produktdetailseite](../../.gitbook/assets/module_gpsr_produktdetailseite_herstellerinformationen.png)

## Textbausteine hinzufügen

Warnungs- und Sicherheitshinweise können als Textbausteine manuell, oder automatisch per Regeln hinzugefügt werden. Navigieren Sie dazu im Backend auf **CMS** → **Textbausteine.**

![Übersicht aller Textbausteine](../../.gitbook/assets/module_gpsr_textbaustein_uebersicht.png)

Über **Neu** können weitere Textbausteine hinzugefügt werden.

![Eingabe der Textbaustein-Daten](../../.gitbook/assets/module_gpsr_textbaustein_neu.png)

| **Option**                        | **Beschreibung**                                                                                                               | **Beispiel**                                                                                                                                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Veröffentlicht                    |                                                                                                                                | An                                                                                                                                                                                                                                                     |
| Reihenfolge                       | Legt die Anzeige-Priorität fest. 1 steht bspw. für das erste Element in der Liste.                                             | 5                                                                                                                                                                                                                                                      |
| Hintergrundfarbe                  | Legt die Hintergrundfarbe der Hinweis-Box fest. Leer lassen, wenn der Text nicht in einer Hinweis-Box angezeigt werden soll.   | warning                                                                                                                                                                                                                                                |
| Titel anzeigen                    | Legt fest, ob der Titel angezeigt wird.                                                                                        | An                                                                                                                                                                                                                                                     |
| Regeln für automatische Zuordnung | Der Textbaustein wird automatisch Produkten zugeordnet, wenn diese eine der gewählten Regeln erfüllen und die Regel aktiv ist. | _\<Nicht spezifiziert>_                                                                                                                                                                                                                                |
| Titel                             | Der Titel des Textbausteins.                                                                                                   | _Gaming Product Safety Regulation_                                                                                                                                                                                                                     |
| Text                              | Der Textinhalt des Textbausteins.                                                                                              | _Wichtiger Hinweis: Sollten Sie feststellen, dass Ihre Reflexe besser, Ihre Konzentration gesteigert und Ihre Hand-Augen-Koordination übermenschlich präzise ist – machen Sie weiter, aber denken Sie daran: der Abwasch macht sich nicht von selbst!_ |

{% hint style="info" %}
Auch Medien, wie Bilder und PDFs lassen sich problemlos über Textbausteine per Link in HTML einbinden.
{% endhint %}

## Textbausteine zuweisen

Um einem Produkt ein oder mehrere Textbausteine zuzuweisen, navigieren Sie zum gewünschten Produkt und wählen Sie den GPSR-Tab aus.

![GPSR-Tab im Produkt-Editor](../../.gitbook/assets/module_gpsr_produkteditor_gpsrtab.png)

Wählen Sie die gewünschten Textbausteine aus der Liste aus, um sie auf der Produktdetailseite anzuzeigen.

![Textbausteine auf der Produktdetailseite](../../.gitbook/assets/module_gpsr_produktdetailseite_textblock.png)

Die Darstellung der Herstellerdaten und Textbausteine kann in [der Konfiguration](produktsicherheitsverordnung-gpsr.md#konfiguration) geändert werden.

## Konfiguration

![Plugin-Konfiguration](../../.gitbook/assets/module_gpsr_einstellungen.png)

| Option                                    | Beschreibung                                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiv                                     |                                                                                                                                                                                                  |
| Informationen in Tabs anzeigen            | Legt fest, ob die GPSR-Informationen auf der Produktdetailseite in Tabs angezeigt werden. Falls deaktiviert, werden sie in Blöcken unter dem Langtext angezeigt.                                 |
| Produkt-Tabs                              | Legt die Tabs auf der Produktdetailseite fest, in denen die Informationen zur Produktsicherheit angezeigt werden.                                                                                |
| Vor Tab x einfügen                        | Legt den Namen des Tabs fest, vor den die GPSR-Tabs eingefügt werden sollen. Leer lassen, um sie anzuhängen.                                                                                     |
| Hersteller vor Textbausteinen anzeigen    | Legt fest, ob die Herstellerinformationen vor den Textbausteinen angezeigt werden.                                                                                                               |
| Hintergrundfarbe Herstellerinformationen  | Legt die Hintergrundfarbe der Hinweis-Box fest, in der die Herstellerinformationen angezeigt werden. Leer lassen, wenn der Hersteller nicht in einer Hinweis-Box angezeigt werden soll.          |
| Nur den ersten Hersteller berücksichtigen | Legt fest, ob nur die Informationen des ersten dem Produkt zugeordneten Herstellers angezeigt werden sollen. Wenn deaktiviert, werden die Informationen aller zugeordneten Hersteller angezeigt. |

{% include "../../.gitbook/includes/consultation_request_plugin.md" %}
