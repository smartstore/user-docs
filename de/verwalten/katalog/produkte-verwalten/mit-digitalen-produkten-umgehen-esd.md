# Mit digitalen Produkten umgehen (ESD)

Mit Smartstore können Sie digitale Produkte wie E-Books, Software oder MP3-Dateien verkaufen. Für die Einrichtung sind zwei Einstellungen zu unterscheiden: **Ist Download** stellt eine Datei oder Download-URL bereit. **Ist elektronische Leistung** kennzeichnet ein Produkt für die EU-Umsatzsteuerbehandlung und die optionale Widerrufsverzicht-Checkbox im Checkout. Beide Einstellungen sind unabhängig voneinander.

## Download-Produkt einrichten

Öffnen Sie das Produkt unter **Katalog > Produktverwaltung**. Aktivieren Sie im Reiter **Downloads** die Option **Ist Download** und hinterlegen Sie die Datei oder eine Download-URL.

![](<../../../.gitbook/assets/2022-10-24 10_33_15-Produktdetails _ Smartstore Administration.png>)

| Einstellung | Bedeutung |
| --- | --- |
| Datei für den Download | Datei hochladen oder Download-URL angeben. Gekaufte Downloads stehen dem Kunden nach der Freigabe zur Verfügung. |
| Version | Versionsnummer der Datei. Sie können weitere Versionen hinzufügen; ohne Auswahl einer Version wird die neueste bereitgestellt. |
| Unbegrenztes Downloaden | Erlaubt beliebig viele Abrufe nach dem Kauf. |
| Max. Anzahl Downloads | Begrenzt die Abrufe pro gekaufter Auftragsposition. Das Limit gilt gemeinsam für die verfügbaren Versionen. |
| Aktivierungsdauer | Anzahl der Tage, für die der Download freigegeben ist. Ohne Wert gibt es keine zeitliche Begrenzung. Der Beginn der Frist hängt vom Aktivierungstyp ab. |
| Aktivierungstyp | **Wenn der Auftrag bezahlt ist** oder **Manuell**. Die Unterschiede sind unten beschrieben. |
| Hat Benutzervereinbarung | Fordert die Zustimmung zu einem hinterlegten Vereinbarungstext. |
| Text der Benutzervereinbarung | Text, den der Kunde bestätigt. |
| Hat Probedownload | Bietet eine Beispieldatei vor dem Kauf an. |
| Beispiel-Download-Datei | Beispieldatei hochladen oder eine URL angeben. |

## Download freigeben

Beim Aktivierungstyp **Wenn der Auftrag bezahlt ist** wird der Download freigegeben, sobald der Zahlungsstatus **Bezahlt** lautet und ein Zahlungsdatum vorliegt. Der Auftragsstatus **Komplett** ist dafür keine Voraussetzung. Die optionale Aktivierungsdauer beginnt mit dem Zahlungsdatum. Bei einer offline abgewickelten Zahlung markieren Sie den Auftrag nach Zahlungseingang als **Bezahlt**.

Beim Aktivierungstyp **Manuell** aktivieren Sie den Download an der Auftragsposition im Bereich **Aufträge > Produkte**. Diese Freigabe ist unabhängig vom Zahlungs- und Auftragsstatus; prüfen Sie vor der Aktivierung, ob die Bestellung dafür bereit ist. Eine eingestellte Aktivierungsdauer beginnt hier bereits mit dem Bestelldatum, nicht erst mit der manuellen Freigabe.

{% hint style="info" %}
**Versand erforderlich deaktivieren**

Deaktivieren Sie unter **Produktinformationen** die Option **Versand erforderlich**, wenn das Produkt nicht physisch geliefert wird. Ist für den gesamten Auftrag kein Versand erforderlich, setzt Smartstore ihn nach der Bezahlung in der Regel automatisch auf **Komplett**. Bei einem gemischten Warenkorb kann trotzdem Versand erforderlich sein. Der Auftragsstatus **Komplett** steuert die Download-Freigabe selbst nicht.
{% endhint %}

## Zugriff, Vereinbarung und Lizenzdatei

Freigegebene Downloads finden Kunden im Bereich für herunterladbare Produkte unter **Mein Konto**. Die Einstellung zum Ausblenden dieses Menüeintrags deaktiviert die Download-Funktion nicht. Ein Download-Link kann auch in einer Bestellbenachrichtigung erscheinen, wenn der Download beim Erstellen der Nachricht bereits freigegeben ist. Bei manueller Aktivierung kann eine zuvor versendete Nachricht deshalb noch keinen Link enthalten.

Ist **Hat Benutzervereinbarung** aktiviert, bestätigt der Kunde sie im Checkout und beim späteren Öffnen des Downloads. Diese Vereinbarung ist von der Widerrufsverzicht-Checkbox für elektronische Leistungen getrennt.

Für eine gekaufte Auftragsposition können Sie außerdem im Administrationsbereich eine **Lizenzdatei** hinterlegen. Ist der Download freigegeben, kann der Kunde auch diese Datei in seinem Kontobereich abrufen.

## Elektronische Leistung und rechtlicher Hintergrund

Aktivieren Sie **Ist elektronische Leistung** unter **Produktinformationen**, wenn das Produkt als elektronisch erbrachte Leistung eingeordnet wird. Die Einstellung ist nicht mit **Ist Download** gleichzusetzen: Sie erzeugt weder eine Download-Datei noch gibt sie einen Download frei.

Hintergrund der Steuerfunktion sind die EU-Regeln zum Leistungsort elektronischer Dienstleistungen. Die [Richtlinie 2008/8/EG](https://eur-lex.europa.eu/eli/dir/2008/8/oj/) änderte hierzu die Mehrwertsteuersystemrichtlinie 2006/112/EG, insbesondere deren Artikel 58. Ist die EU-Umsatzsteuerfunktion in Smartstore aktiviert und handelt es sich um einen EU-Verbraucher, verwendet Smartstore bei einem als elektronische Leistung gekennzeichneten Produkt die **Rechnungsadresse als Steueradresse**. Die passende Einordnung des Produkts und die Steuerkonfiguration liegen beim Shopbetreiber.

Zusätzlich können Sie in den [Warenkorb-Einstellungen](../../../benutzer-handbuch/konfiguration/einstellungen/warenkorb-einstellungen.md) die **Widerrufsverzichtbox für elektronische Leistungen** aktivieren. Dann zeigt Smartstore für entsprechend gekennzeichnete Produkte im Checkout eine separate Checkbox. Die [Verbraucherrechte-Richtlinie 2011/83/EU](https://eur-lex.europa.eu/eli/dir/2011/83/oj/) regelt in Artikel 16 Ausnahmen vom Widerrufsrecht für bestimmte Dienstleistungen und digitale Inhalte. Ob die Voraussetzungen im Einzelfall erfüllt sind, muss der Shopbetreiber prüfen. Die Checkbox ersetzt weder die Steuerkonfiguration noch eine gegebenenfalls hinterlegte Download-Benutzervereinbarung.
