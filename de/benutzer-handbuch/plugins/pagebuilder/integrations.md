# Integrationen

Der Page Builder verwendet Inhalte und Funktionen aus verschiedenen Bereichen von Smartstore. Zusätzlich können externe Dienste oder technische Komponenten eingebunden werden.

{% hint style="info" %}
Welche Integrationen und Blöcke verfügbar sind, hängt von den installierten Plugins, der Konfiguration, den Benutzerrechten und gegebenenfalls der Lizenzierung ab.
{% endhint %}

## Medien-Manager

Bild-, Galerie-, Video- und Audio-Blöcke greifen auf Dateien aus dem Smartstore Medien-Manager zu. Dort können Sie Dateien hochladen, ordnen und für die Verwendung im Shop auswählen.

Weitere Informationen finden Sie unter [Medien-Manager](../mediamanager.md) und [Dateien und Ordner verwalten](../mediamanager/files-and-folders.md).

![Medienauswahl aus einem Page-Builder-Block](../../../.gitbook/assets/screenshot.png)

{% hint style="info" %}
Beim Export einer Story können die von ihr verwendeten Medien als zugehörige Ressourcen berücksichtigt werden. Prüfen Sie eine importierte Story trotzdem auf fehlende Dateien und ungültige Verknüpfungen.
{% endhint %}

## Kataloginhalte darstellen

Mit den Blöcken **Produktliste**, **Warengruppen** und **Herstellerliste** binden Sie vorhandene Kataloginhalte in eine Story ein.

Je nach Block können Sie Einträge auswählen und die Ausgabe beispielsweise als Liste, Raster oder Slider gestalten. Änderungen an den zugrunde liegenden Katalogdaten werden bei der Ausgabe berücksichtigt.

![Konfiguration eines Produktlisten-Blocks](../../../.gitbook/assets/screenshot.png)

## Inhalte an Katalogdaten binden

Unterstützte Text- und Bildblöcke können an ein Produkt, eine Warengruppe oder einen Hersteller gebunden werden. Dabei werden Blockeigenschaften mit Platzhaltern versehen, die bei der Ausgabe durch Werte des gewählten Katalogeintrags ersetzt werden.

Die Datenbindung eignet sich beispielsweise, um einen gestalteten Teaser mit dem Namen, Bild oder Link eines Produkts zu verbinden.

Gehen Sie folgendermaßen vor:

1. Öffnen Sie die Einstellungen eines unterstützten Blocks.
2. Wechseln Sie zur Registerkarte **Datenbindung**.
3. Wählen Sie als Quelle ein Produkt, eine Warengruppe oder einen Hersteller.
4. Übernehmen Sie die Datenbindung. Dabei werden passende Blockeigenschaften mit den vorgesehenen Platzhaltern belegt.
5. Speichern Sie den Block und prüfen Sie das Ergebnis im Vorschaumodus.

![Datenbindung eines Blocks an einen Katalogeintrag](../../../.gitbook/assets/screenshot.png)

## Storys über Widget-Zonen ausgeben

Eine veröffentlichte Story wird in einer oder mehreren Widget-Zonen ausgegeben. Zusätzlich legen Sie fest, für welche Zielseiten die Zuordnung gilt.

Als Ziel können je nach Konfiguration unter anderem folgende Seitentypen verwendet werden:

- Seiten und Inhalte,
- URLs,
- Warengruppen,
- Hersteller,
- Produkte.

Eine Story kann mehreren Widget-Zonen und Zielseiten zugeordnet werden. Die **Sortierung** bestimmt die Reihenfolge, wenn mehrere Storys dieselbe Widget-Zone verwenden.

Weitere Informationen zur Positionierung finden Sie unter [Widget-Zonen](../../content-management/widget-zonen.md).

## Sichtbarkeit einschränken

Storys können auf bestimmte Shops oder Kundengruppen beschränkt werden. Darüber hinaus lassen sich Sichtbarkeitsregeln zuweisen.

Prüfen Sie Einschränkungen mit einem geeigneten Testkonto. Eine Story kann im Editor sichtbar sein, obwohl sie für den aktuell aufgerufenen Shop oder die Kundengruppe im Frontend ausgeblendet wird.

{% hint style="info" %}
Beschränken Sie eine neue Story während der Einrichtung auf die Administrator-Rolle. So können Sie die veröffentlichte Story auf ihrer tatsächlichen Zielseite testen, ohne sie bereits für andere Besucher sichtbar zu machen. Entfernen oder ändern Sie die Einschränkung erst nach erfolgreicher Prüfung.
{% endhint %}

## Newsletter-Anmeldung

Der Block **Newsletter** stellt innerhalb einer Story eine Anmeldung zum Smartstore-Newsletter bereit. Verwenden Sie ihn, um eine vorhandene Landingpage oder Aktionsfläche um eine Anmeldemöglichkeit zu ergänzen.

## Externe Medien und Dienste

### YouTube

Der Block **YouTube** bindet ein Video über eine YouTube-URL oder Video-ID ein. Je nach Einstellung können Darstellungs- und Wiedergabeoptionen angepasst werden.

### SoundCloud

Der Block **SoundCloud** bindet eine vollständige SoundCloud-URL ein. Als Quelle kann beispielsweise ein Track, eine Playlist oder ein Profil dienen.

### Google Maps

Der Block **Google Maps** zeigt einen Standort anhand seiner Koordinaten an. Für die Nutzung muss ein gültiger Google-Maps-API-Schlüssel konfiguriert sein.

### IFrame

Mit dem Block **IFrame** zeigen Sie eine externe Seite innerhalb der Story an. Ob die Einbettung funktioniert, hängt auch von den Sicherheitseinstellungen der Zielseite und des Browsers ab.

{% hint style="warning" %}
Externe Inhalte können zusätzliche Cookies setzen oder personenbezogene Daten übertragen. Berücksichtigen Sie bei der Einbindung Ihre Datenschutz- und Einwilligungskonfiguration.
{% endhint %}

## Vorhandene Story einbinden

Mit dem Block **Story** verwenden Sie eine bestehende Story innerhalb einer anderen Story. Das eignet sich für wiederkehrende Inhaltsbereiche, die zentral gepflegt werden sollen.

Vermeiden Sie unnötig tiefe Verschachtelungen. Sie erschweren die Bearbeitung und können die Fehlersuche bei Darstellung oder Sichtbarkeit aufwendiger machen.

## Technische Erweiterungen

Die Blöcke **Code** und **ViewComponent** sind für technische Erweiterungen vorgesehen:

- **Code** bindet eigenen HTML-, CSS- oder JavaScript-Code ein.
- **ViewComponent** verwendet eine durch einen Entwickler bereitgestellte Komponente.

Darüber hinaus können installierte Module eigene Blocktypen für den Page Builder bereitstellen. Diese erscheinen anschließend in der Blockauswahl.

{% hint style="warning" %}
Eigener Code und individuelle Komponenten sollten nur von entsprechend qualifizierten Personen eingebunden und nach Shop- oder Theme-Updates erneut getestet werden.
{% endhint %}

Eine vollständige Einordnung der standardmäßig verfügbaren Inhaltselemente finden Sie unter [Blöcke verwenden](blocks.md).
