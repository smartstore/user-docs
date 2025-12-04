# Mit digitalen Produkten umgehen (ESD)

Smartstore ist optimal dafür geeignet, digitale Produkte wie MP3s oder E-Books zu verkaufen. Um digitale Produkte zu verkaufen, müssen Sie lediglich Ihr Produkt als **Ist Download** in der Registerkarte **Allgemein** in der Produktkonfiguration markieren. Wenn Sie dies tun, erhalten Sie die folgenden, zusätzlichen Eingabefelder.

![](./attachments/2022-10-24%2010_33_15-Produktdetails%20_%20Smartstore%20Administration.png)

|     |     |
| --- | --- |
| Datei für den Download | Legt fest, ob das Produkt ein downloadbares, digitales Produkt ist. Ein Kunde, der ein digitales Produkt kauft, kann den Download in seinem Account-Bereich im Shop durchführen. |
| Version | Geben Sie die Versionsnummer in korrektem Format an (z.B.: 1.0.0.0, 2.0 oder 3.1.5). |
| Unbegrenztes Downloaden | Legt fest, ob ein Download-Produkt nach dem Kauf unbegrenzt oft heruntergeladen werden kann. |
| Max. Anzahl Downloads | Legt die maximale Anzahl der Downloads fest. |
| Aktivierungsdauer | Anzahl der Tage, die der Kunde die Datei herunterladen kann. Lassen Sie das Feld leer, falls der Link unbegrenzt lange aktiv bleiben soll. |
| Aktivierungstyp | Bestimmt, wann der Kunde den Download durchführen kann. Es gibt zwei Möglichkeiten zur Auswahl: **Wenn der Auftrag bezahlt ist** oder **Manuell**. |
| Hat Benutzervereinbarung | Legt fest, ob das Produkt eine Benutzervereinbarung hat, der der Kunde zustimmen muss. |
| Text der Benutzervereinbarung | Der Text der Benutzervereinbarung. |
| Hat Probedownload | Legt fest, ob der Kunde eine Beispieldatei vor dem Checkout runterladen kann. |
| Beispiel-Download-Datei | Legt eine Download-Datei als Beispiel fest. Sie können die Datei entweder auf den Server laden oder einfach eine Download-URL angeben. |

Die Datei, die Sie hochgeladen haben, kann durch Ihre Kunden nach erfolgreicher Bezahlung heruntergeladen werden, dies geht erst, wenn der Auftragsstatus den Wert **Komplett** hat. Wenn Sie die Option **Wenn der Auftrag bezahlt ist** aktiviert haben und der Kunde mit einem Online-Bezahlsystem bezahlt hat, wechselt der Auftragsstatus automatisch zu **Komplett**, sobald der Bezahlungsvorgang abgeschlossen ist. Ihr Kunde erhält dann eine E-Mail, die sie informiert, dass die Bestellung komplett ist (*OrderCompleted.CustomerNotification*) und außerdem eine Auftragsbestätigung per E-Mail (*OrderPlaced.CustomerNotification*)*.* Die *OrderCompleted* E-Mail enthält einen Link zum Download der erworbenen Datei. Kunden können die Datei auch in Ihrem Login-Bereich herunterladen. Wenn Kunden eine Zahlungsart wählen, die offline abläuft wie Nachnahme oder Vorkasse, müssen Sie als Shopbetreiber den Auftrag manuell als **Bezahlt** und **Komplett** markieren, bevor der Kunde die *OrderCompleted* E-Mail mit dem Download-Link erhält. 

Wenn Sie möchten, dass Ihre Kunden einer **Benutzervereinbarung** zustimmen müssen, bevor sie die erworbene Datei herunterladen können, müssen Sie diese Funktion durch das Anklicken des Kästchens **Hat Benutzervereinbarung** aktivieren und den Text, dem die Kunden zustimmen müssen, in das entsprechende Feld eingeben. Dieser Text wird Nutzern angezeigt, sobald sie auf den Download-Link klicken, und sie müssen diesem Text zustimmen, indem sie ein Kästchen markieren und **Bestätigen** klicken.

> [!INFO]
> ### Versand erforderlich deaktivieren
> Vergessen Sie nicht die Option **Versand erforderlich** für digitale Produkte, die nicht verschickt werden müssen, zu deaktivieren. In diesem Fall müssen Sie den Auftrag nicht manuell auf **Komplett** stellen. Der Auftrag wird diesen Status automatisch erhalten, sobald er als **Bezahlt** markiert ist.