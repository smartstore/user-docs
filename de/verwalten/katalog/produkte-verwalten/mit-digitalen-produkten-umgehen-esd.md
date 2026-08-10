# Mit digitalen Produkten umgehen (ESD)

Mit Smartstore verkaufen Sie digitale Produkte wie MP3-Dateien oder E-Books. Aktivieren Sie dafür in der Produktkonfiguration unter **Allgemein** die Option **Ist Download**. Anschließend stehen die folgenden Eingabefelder zur Verfügung.

![](<../../../.gitbook/assets/2022-10-24 10_33_15-Produktdetails _ Smartstore Administration.png>)

|                               |                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Datei für den Download        | Legt fest, ob das Produkt ein downloadbares, digitales Produkt ist. Ein Kunde, der ein digitales Produkt kauft, kann den Download in seinem Kontobereich im Shop durchführen. |
| Version                       | Geben Sie die Versionsnummer in korrektem Format an (z. B. 1.0.0.0, 2.0 oder 3.1.5).                                                                                          |
| Unbegrenztes Downloaden       | Legt fest, ob ein Download-Produkt nach dem Kauf unbegrenzt oft heruntergeladen werden kann.                                                                                  |
| Max. Anzahl Downloads         | Legt die maximale Anzahl der Downloads fest.                                                                                                                                  |
| Aktivierungsdauer             | Anzahl der Tage, die der Kunde die Datei herunterladen kann. Lassen Sie das Feld leer, falls der Link unbegrenzt lange aktiv bleiben soll.                                    |
| Aktivierungstyp               | Bestimmt, wann der Kunde den Download durchführen kann. Es gibt zwei Möglichkeiten zur Auswahl: **Wenn der Auftrag bezahlt ist** oder **Manuell**.                            |
| Hat Benutzervereinbarung      | Legt fest, ob das Produkt eine Benutzervereinbarung hat, der der Kunde zustimmen muss.                                                                                        |
| Text der Benutzervereinbarung | Der Text der Benutzervereinbarung.                                                                                                                                            |
| Hat Probedownload             | Legt fest, ob der Kunde eine Beispieldatei vor dem Checkout herunterladen kann.                                                                                               |
| Beispiel-Download-Datei       | Legt eine Download-Datei als Beispiel fest. Sie können die Datei entweder auf den Server laden oder einfach eine Download-URL angeben.                                        |

Kunden können die hochgeladene Datei herunterladen, sobald der Auftrag den Status **Komplett** erreicht hat. Beim Aktivierungstyp **Wenn der Auftrag bezahlt ist** und einer erfolgreichen Onlinezahlung setzt Smartstore den Auftrag automatisch auf **Komplett**. Die Nachricht _OrderCompleted.CustomerNotification_ enthält den Download-Link; zusätzlich bleibt die Datei im Kontobereich verfügbar. Bei offline abgewickelten Zahlungsarten wie Vorkasse oder Nachnahme müssen Sie den Auftrag zunächst manuell als **Bezahlt** und **Komplett** markieren.

Soll vor dem Download eine **Benutzervereinbarung** bestätigt werden, aktivieren Sie **Hat Benutzervereinbarung** und tragen den Vereinbarungstext ein. Beim Öffnen des Download-Links muss der Kunde die Vereinbarung markieren und mit **Bestätigen** akzeptieren.

{% hint style="info" %}
**Versand erforderlich deaktivieren**

Vergessen Sie nicht, die Option **Versand erforderlich** für digitale Produkte, die nicht verschickt werden müssen, zu deaktivieren. In diesem Fall müssen Sie den Auftrag nicht manuell auf **Komplett** stellen. Der Auftrag wird diesen Status automatisch erhalten, sobald er als **Bezahlt** markiert ist.
{% endhint %}
