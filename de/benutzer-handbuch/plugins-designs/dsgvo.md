# DSGVO

Seit der Smartstore 3.1.5 Version erfüllt Smartstore die Anforderungen der DSGVO.  
Dies sind insbesondere, die EU-Cookie-Richtlinie, Löschung von Kundendaten, Anonymisierungsfunktion für Kunden und Download-Funktionalität von Kundendaten für die Kunden selbst.

![](./attachments/dsgvo.PNG)

## Konfiguration des DSGVO Plugins

| **Eingabefeld / Option** | **Beschreibung** |
| --- | --- |
| Menü "Privatsphäre" in Kundenmenü anzeigen<br><br> [](https://wolfgang.smartstore.com/Admin/Plugin/ConfigurePlugin?systemName=SmartStore.GDPR) | Bestimmt, ob im "Mein Konto" Kundenmenü ein neues Element "Privatsphäre" angeboten werden soll. |
| Kontodeaktivierung anbieten | Bei der Kontodeaktivierung werden alle Daten anonymisiert, die einen Kunden identifizieren könnten (E-Mail, IP-Adresse, Name, Anschrift etc.) |
| Löschung von benutzergenerierten Inhalten anbieten | Bei benutzergenerierten Inhalten handelt es sich um Produktrezensionen, Forenbeiträge, News- und Blogkommentare etc. Daten werden lediglich maskiert/pseudonymisiert. Eine tatsächliche Löschung auf Datensatz-Ebene findet zu keiner Zeit statt. |
| Kunden können Konto eigenständig deaktivieren | Bestimmt, ob ein Kunde sein Konto eigenständig deaktivieren kann oder ob zunächst eine Anforderung an den Shopbetreiber gesendet werden soll. In beiden Fällen ist eine mehrfache Bestätigung durch den Kunden erforderlich. |
| Download von Kundendaten ermöglichen | Bestimmt, ob ein Kunde seine Daten eigenständig im JSON-Format downloaden kann. |
| Nach Löschvorgang autom. anonymisieren | Legt fest, ob nach einem Kunden-Löschvorgang im Backend automatisch anonymisiert werden soll. Bitte bachten Sie: in Smartstore werden Kundendatensätze grundsätzlich nicht aus der Datenbank entfernt, sondern lediglich als gelöscht markiert. |