# Produktsicherheitsverordnung (GPSR)

Seit der Smartstore Version 6 erfüllt Smartstore die Anforderungen [der GPSR](https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/aenderung-produktsicherheitsgesetz.html).

Mit dem GPSR-Plugin können erweiterte Produktinformationen angegeben werden, die für GPSR-Produkte Pflicht sind:

* Angaben zum Hersteller
* Produkthinweise
* Sicherheitshinweise

![Konfiguration.PNG](../../.gitbook/assets/Konfiguration.PNG)

## Konfiguration des GPSR Plugins

| Option                                    | Beschreibung                                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiv                                     |                                                                                                                                                                                                  |
| Informationen in Tabs anzeigen            | Legt fest, ob die GPSR-Informationen auf der Produktdetailseite in Tabs angezeigt werden. Falls deaktiviert, werden sie in Blöcken unter dem Langtext angezeigt.                                 |
| Produkt-Tabs                              | Legt die Tabs auf der Produktdetailseite fest, in denen die Informationen zur Produktsicherheit angezeigt werden.                                                                                |
| Vor Tab x einfügen                        | Legt den Namen des Tabs fest, vor den die GPSR-Tabs eingefügt werden sollen. Leer lassen, um sie anzuhängen.                                                                                     |
| Hersteller vor Textbausteinen anzeigen    |                                                                                                                                                                                                  |
| Hintergrundfarbe Herstellerinformationen  | Legt die Hintergrundfarbe der Hinweis-Box fest, in der die Herstellerinformationen angezeigt werden. Leer lassen, wenn der Hersteller nicht in einer Hinweis-Box angezeigt werden soll.          |
| Nur den ersten Hersteller berücksichtigen | Legt fest, ob nur die Informationen des ersten dem Produkt zugeordneten Herstellers angezeigt werden sollen. Wenn deaktiviert, werden die Informationen aller zugeordneten Hersteller angezeigt. |

{% hint style="info" %}
Die in diesem Artikel angeführten Beispiele sind weder rechtsverbindlich noch rechtskonform. Sie dienen lediglich der Erläuterung und Anwendung.
{% endhint %}

## Herstellerdaten anzeigen

Bei dem Hersteller müssen Daten hinterlegt werden, die dann in den Produktdetails angezeigt werden. Dazu navigieren Sie im Backend auf **Katalog** → **Hersteller** und wechseln dann zum Tab **GPSR**.

![HerstellerTab.PNG](../../.gitbook/assets/HerstellerTab.PNG)

| **Option**              | **Beschreibung**                                                                                                                          | **Beispiel**                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Angaben zum Hersteller  | <p>- Hersteller- bzw. Markenname<br>- Postanschrift<br>- Elektronische Adresse (E-Mail / Website)</p>                                     | <p>TEA Sports Deutschland GmbH<br><br>TEA Sports Deutschland GmbH<br>Musterstraße 123<br>50667 Köln<br>Deutschland<br><br>E-Mail: info@tea-sports.de</p>                                                       |
| Produktverantwortlicher | <p>- Nur wenn es keine Niederlassung innerhalb der EU gibt<br>- Name<br>- Postanschrift<br>- Elektronische Adresse (E-Mail / Website)</p> | <p>Frau Dr. Julia Meyer<br><br>TEA Sports Deutschland GmbH<br>Abteilung Legal &#x26; Compliance<br>Musterstraße 123<br>50667 Köln<br>Deutschland<br><br>E-Mail: julia.meyer@tea-sports.de</p> |

Für alle Produkte, die dem Hersteller zugeordnet sind, werden die hinterlegten Daten automatisch in den Produktdetails angezeigt.

![ProduktDetails\_Hersteller.PNG](../../.gitbook/assets/ProduktDetails_Hersteller.PNG)

## Textbausteine hinzufügen

Warnungs- und Sicherheitshinweise können als Textbausteine manuell, oder automatisch per Regeln hinzugefügt werden. Navigieren Sie dazu im Backend auf **CMS** → **Textbausteine.**

![Textbausteine.PNG](../../.gitbook/assets/Textbausteine.PNG)

Über **Neu** können weitere Textbausteine hinzugefügt werden.

![Textbausteine\_Neu.PNG](../../.gitbook/assets/Textbausteine_Neu.PNG)

| **Option**                        | **Beschreibung**                                                                                                               | **Beispiel**                                                                                                                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Veröffentlicht                    |                                                                                                                                | An                                                                                                                                                                                                                                                   |
| Reihenfolge                       | Legt die Anzeige-Priorität fest. 1 steht bspw. für das erste Element in der Liste.                                             |                                                                                                                                                                                                                                                      |
| Hintergrundfarbe                  | Legt die Hintergrundfarbe der Hinweis-Box fest. Leer lassen, wenn der Text nicht in einer Hinweis-Box angezeigt werden soll.   | warning                                                                                                                                                                                                                                              |
| Titel anzeigen                    |                                                                                                                                | An                                                                                                                                                                                                                                                   |
| Regeln für automatische Zuordnung | Der Textbaustein wird automatisch Produkten zugeordnet, wenn diese eine der gewählten Regeln erfüllen und die Regel aktiv ist. |                                                                                                                                                                                                                                                      |
| Titel                             |                                                                                                                                | Gaming Product Safety Regulation                                                                                                                                                                                                                     |
| Text                              |                                                                                                                                | Wichtiger Hinweis: Sollten Sie feststellen, dass Ihre Reflexe besser, Ihre Konzentration gesteigert und Ihre Hand-Augen-Koordination übermenschlich präzise ist – machen Sie weiter, aber denken Sie daran: der Abwasch macht sich nicht von selbst! |

{% hint style="info" %}
Auch Medien, wie Bilder und PDFs lassen sich problemlos über Textbausteine per Link in HTML einbinden.
{% endhint %}

## Textbausteine zuweisen

Um einem Produkt ein oder mehrere Textbausteine zuzuweisen, navigieren Sie zum gewünschten Produkt und wählen Sie den GPSR-Tab aus.

![ProduktTab.PNG](../../.gitbook/assets/ProduktTab.PNG)

Wählen Sie die gewünschten Textbausteine aus der Liste aus, um sie auf der Produktdetailseite anzuzeigen.

![ProduktDetails\_Hersteller\_Textblock.PNG](../../.gitbook/assets/ProduktDetails_Hersteller_Textblock.PNG)

Die Darstellung der Herstellerdaten und Textbausteine kann in [der Konfiguration](produktsicherheitsverordnung-gpsr.md#konfiguration-des-gpsr-plugins) geändert werden.
