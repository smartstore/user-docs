# Produkte erstellen und bearbeiten

Um ein Produkt zu erstellen oder zu bearbeiten, navigieren Sie im Administrationsbereich von Smartstore zu **Katalog > Produktverwaltung**. Sie können hier Ihre Produkte hinzufügen, bearbeiten, löschen, importieren oder exportieren. Um das Produkt zu finden, das Sie bearbeiten möchten, gibt es eine leicht zu bedienende Suchmaske mit Filterfunktion direkt oben links über der Tabelle, die Ihre vorhandenen Produkte anzeigt.

## Filterfunktion in der Produktverwaltung

![](./attachments/2022-10-14%2009_49_57-Produktverwaltung%20_%20Smartstore%20Administration.png)

Nach Aktivierung der Filterfunktion können Sie Produkte nach unterschiedlichen (u.a. Produkttyp, veröffentlicht, ohne Warengruppenzuordnung, nach Warengruppen, nach Herstellern) Merkmalen filtern lassen. Sie können nach Produktnamen suchen oder wenn Sie die Artikelnummer (SKU) Ihres Produkts kennen, können Sie auch direkt in die Bearbeitungsansicht wechseln, indem Sie die SKU eingeben und auf **Ausführen** drücken**.**

## Bearbeitungsansicht

![](./attachments/2022-10-14%2009_50_35-Produktdetails%20_%20Smartstore%20Administration.png)

### Registerkarte für Produktinformationen

In dieser Registerkarte können Sie grundlegende Informationen zu dem Produkt eingeben. Es gibt nicht für jede Einstellung eine Beschreibung, da manche selbsterklärend sind. Wenn es keine Beschreibung für die Einstellung gibt, nach der Sie suchen, fahren Sie mit dem Mauszeiger über die Stelle zwischen Titel und Eingabefeld der Einstellung. Ein Fragezeichen wird auftauchen, das Hinweise zu der Einstellung gibt.

|     |     |
| --- | --- |
| Produkttyp | Der Produkttyp, den Sie verkaufen möchten. Es gibt drei Produkttypen in Smartstore: **Einfaches Produkt, Gruppenprodukt** & **Produkt-Bundle**. **Einfaches Produkt** ist der Standardprodukttyp, den Sie für jede Art von Produkten verwenden können. Für Informationen über **Gruppenprodukte** lesen Sie bitte [Wie funktionieren Gruppenprodukte?](../produkte-verwalten/wie-funktionieren-gruppenprodukte.md). Wenn Sie mehr über **Produkt-Bundles** erfahren möchten, lesen Sie [Wie funktionieren Produkt-Bundles?](../produkte-verwalten/wie-funktionieren-produkt-bundles.md). |
| Sichtbarkeit | Schränkt die Sichtbarkeit des Produktes ein. Bei "Nicht sichtbar" erscheint das Produkt nur noch als verknüpftes Produkt auf der übergeordneten Produktdetailseite, jedoch ohne Verlinkung auf eine eigenständige Seite. |
| Admin Kommentar | Kommentar des Administrators. Zur internen Verwendung |
| Produkt Tags | Eine Komma-getrennte Liste von Schlüsselwörtern, die das Produkt taxonomisch charakterisieren. Je mehr Produkte einem Schlüsselwort (Tag) zugeordnet sind, desto mehr visuelles Gewicht erhält das Tag. Für weitere Informationen über Tags lesen Sie bitte [Tags verwalten](../../katalog/tags-verwalten.md) . |
| Verfügbar ab | Zeitpunkt, ab dem das Produkt erhältlich ist (UTC). |
| Verfügbar bis | Zeitpunkt, ab dem das Produkt nicht mehr erhältlich ist (UTC). |
| Kundenbewertungen erlauben | Legt fest, ob Kunden Produktbewertungen vornehmen dürfen. |
| Auf Homepage anzeigen | Legt fest, ob das Produkt prominent auf der Startseite des Shops platziert werden soll. Empfohlene Einstellung für Ihre beliebtesten Produkte. |
| Veröffentlicht | Aktivieren Sie diese Option, um das Produkt zu veröffentlichen (im Shop sichtbar zu machen). Entfernen Sie das Häkchen, um die Veröffentlichung rückgängig zu machen (das Produkt wird nicht mehr im Shop angezeigt). |
| Andere Produkte erforderlich | Zu diesem Produkt müssen weitere Produkte mitbestellt werden. |
| Erforderliche Produkt ID | Geben Sie eine Liste von Komma getrennten Produkt-IDs ein. HINWEIS: Stellen Sie sicher, dass es keine zirkulären Referenzen gibt (z. B. A benötigt B und B benötigt A). |
| Diese Produkte automatisch dem Warenkorb hinzufügen | Klicken Sie dieses Kästchen, um diese Produkte automatisch dem Warenkorb hinzuzufügen. |
| Ist Geschenkgutschein | Legt fest, ob das Produkt ein Geschenkgutschein ist. |
| Auswahl Geschenkgutschein | Wählen Sie die Art des Geschenkgutscheins. **WARNUNG**: Änderungen sind in der Produktionsumgebung nicht empfohlen. Es gibt zwei Arten von Geschenkgutscheinen in Smartstore. Wählen Sie **virtuell** wenn Sie den Geschenkgutschein nicht postalisch verschicken möchten, und wählen Sie Physisch, wenn Sie einen physischen Geschenkgutschein an den Käufer verschicken möchten. Für weitere Informationen über Geschenkgutscheine lesen Sie bitte [Geschenkgutscheine verwalten](../../../benutzer-handbuch/verkauf/geschenkgutscheine-verwalten.md). |
| Ist Download (ESD) | Klicken Sie das Kästchen, wenn man das Produkt herunterladen kann. Wenn ein Kunde ein Download-Produkt erwirbt, kann er das Produkt sofort aus Ihrem Shop herunterladen, sobald die Bestellung vollständig abgeschlossen ist. Für weitere Informationen zu Download-Produkten, lesen Sie bitte [Mit digitalen Produkten umgehen (ESD)](../produkte-verwalten/mit-digitalen-produkten-umgehen-esd.md). |
| Ist Abo | Aktivieren Sie diese Option, wenn es sich bei dem Produkt um ein Abonnement handelt. Für weitere Informationen zu abonnierbaren Produkten lesen Sie bitte  [Mit Abonnements umgehen](../produkte-verwalten/mit-abonnements-umgehen.md). |
| Erneuerungszeitraum | Geben Sie die Dauer des Produktzyklus an. Im Verbund mit dem Feld  **Erneuerungsperiode** legt der **Erneuerungszeitraum** fest, nach welchem Zeitraum das Produkt erneut bezogen wird. |
| Erneuerungsperiode | Wählen Sie die Erneuerungsperiode. Im Verbund mit dem Feld **Erneuerungszeitraum** legt die **Erneuerungsperiode**   fest, nach welchem Zeitraum das Produkt erneut bezogen wird. |
| Abonnementdauer | Geben Sie die Abonnementdauer an. Legt fest, wie oft ein Produkt erneut bezogen wird, bevor das Abonnement ausläuft. |
| Versand erforderlich | Legt fest, ob ein Produkt versendet wird. |
| Versandkostenfrei | Legt fest, ob der Versand bei diesem Produkt kostenfrei ist. |
| Transportzuschlag | Legt zusätzliche Versandkosten für dieses Produkt fest. |
| Mwst-frei | Legt fest, ob das Produkt mehrwertsteuerfrei ist. Ist diese Option aktiv wird für dieses Produkt während des Bestellvorganges keine MwSt. berechnet. |
| Steuersatz | Legt die Steuerklasse für dieses Produkt fest. Steuerklassen werden unter **Konfiguration > Regionale Einstellungen > Steuernklassen** festgelegt. |
| Ist elektronische Leistung | Legt fest, ob das Produkt elektronisch vertrieben wird und daher gemäß EU Richtlinie 2008/8/EG versteuert werden muss. |
| Auf Shops begrenzt | Legt fest, ob der Eintrag nur für bestimmte Shops verfügbar ist. Für weitere Informationen zu mehreren Shops lesen Sie [Mit mehreren Shops arbeiten](../../../benutzer-handbuch/allgemeine-konzepte/mit-mehreren-shops-arbeiten.md). |
| Auf Kundengruppen begrenzt | Legt fest, ob das Objekt nur für bestimmte Kundengruppen verfügbar ist. Für weitere Informationen zu Zugangsberechtigungen lesen Sie [Zugangsberechtigung Listen (ACL)](../../../benutzer-handbuch/allgemeine-konzepte/zugriffsbeschrankungen-acl.md). |

### Registerkarte Inventar

In dieser Registerkarte konfigurieren Sie den Tracking-Modus für das Produkt. Für weitere Informationen über das Tracken des Bestands lesen Sie bitte [Produktbestand tracken](../produkte-verwalten/lagerbestand-fuhren.md).

### Registerkarte Preis

In dieser Registerkarte konfigurieren Sie die Preise und die Preisanzeige für das Produkt. Für weitere Informationen über die Konfigurationen von Preisen lesen Sie bitte [Preisregeln verstehen](../produkte-verwalten/preisregeln-verstehen.md).  
Zusätzlich können unter der Registerkarte Preis auch Produktrabatte zugeordnet werden. 

### Registerkarte Bilder

In dieser Registerkarte können Sie die Bilder für die Produktansicht hinterlegen. Das Produkt **Hauptbild** wird in Produktlisten überall dort angezeigt, wo Thumbnails von Produkten auftauchen, so zum Beispiel die Übersicht für die Produktkategorie oder die Produktliste im Warenkorb. Alle anderen Bilder werden in der von Ihnen festgelegten **Reihenfolge** im Thumbstrip unter dem Standardbild und in der Gallerie im Frontend Ihres Shops angezeigt. Für weitere Informationen über den Upload von Bildern, lesen Sie [Bilder hochladen](../../../benutzer-handbuch/allgemeine-konzepte/bilder-hochladen.md).

> [!INFO]
> ### Nutzen Sie freigestellte Grafiken
> In der Produktgallerie sehen freigestellte Grafiken viel besser aus.

### Registerkarte Warengruppen

In dieser Registerkarte können Sie dem Produkt Warengruppen zuweisen. Sie können Ihrem Produkt eine beliebige Anzahl an Warengruppen zuordnen und sich entscheiden, ob Sie das Produkt in bestimmten Warengruppen hervorheben möchten. Wenn Sie das Produkt als ein hervorgehobenes Produkt einer Warengruppe festlegen, wird es in der Detailansicht der Warengruppe im Frontend Ihres Shops hervorgehoben dargestellt. Sie können auch eine **Reihenfolge** festlegen und somit Ihre Produkte in dieser Warengruppe in eine bestimmte Reihenfolge bringen. Diese Reihenfolge wird nur dann verwendet, wenn die Sortierungsoption der Warengruppe auf **Position** eingestellt ist.

### Registerkarte Hersteller

In dieser Registerkarte können Sie dem Produkt Hersteller zuordnen. Sie können Ihrem Produkt eine beliebige Anzahl Hersteller zuordnen und festlegen, ob Sie die Produkte als hervorgehobene Produkte bestimmter Hersteller anzeigen möchten. Wenn Sie das Produkt als hervorgehobenes Produkt eines bestimmten Herstellers auswählen, wird es in der Detailansicht des Herstellers im Frontend Ihres Shops hervorgehoben dargestellt . Die Hersteller, die Sie dem Produkt zuweisen, werden auf der Produktdetailseite unterhalb der Produkteigenschaften in Ihrem Shops angezeigt. Für weitere Informationen zur Verwaltung der Hersteller lesen Sie bitte [Hersteller verwalten](../../katalog/hersteller-verwalten.md).

### Registerkarte Promotion

In dieser Registerkarte können Sie Promotionen für ein Produkt verwalten. Sie können **Cross-Selling-Produkte** im unteren Bereich der Produktdetailansicht im Frontend Ihres Shops anzeigen lassen oder **Produkte** konfigurieren, dei dem Kunden im Checkout angezeigt und empfohlen werden. Wenn Sie auf **Cross-Selling-** **Produkt hinzufügen** oder **Checkout-Selling-Produkt hinzufügen** klicken, öffnet sich ein Dialog für die Produktauswahl, in welchem Sie die Produkte auswählen können, die Sie dem jeweiligen Bereich hinzufügen möchten. Für weitere Informationen zur Produktauswahl lesen Sie bitte [Tabellenansichten](../../../benutzer-handbuch/allgemeine-konzepte/tabellenansichten.md). 

#### Anwendungsszenario für Cross-Selling-Produkte 

Stellen Sie sich vor, Sie verkaufen elektronische Geräte, und einige Ihrer Produkte sind MP3-Player. Somit könnten Ihre Kunden auch Interesse daran haben, Kopfhörer zu erwerben. Sie sollten daher in Betracht ziehen, die Kopfhörer auf der Produktseite des MP3-Players hinzuzufügen, indem Sie Kopfhörer als **Cross-Selling-Produkte** dafür festlegen. Wenn der MP3-Player ein iPod ist, sind Ihre Kunden vielleicht auch daran interessiert einen iTunes-Gutschein zu kaufen. 

#### Anwendungsszenario Checkout-Selling-Produkte

Wenn Sie beispielsweise Schmuck verkaufen, wissen Sie, dass Ihre Produkte häufig gekauft werden um verschenkt zu werden. Sie könnten Ihren Kunden beim Bestellvorgang also vorschlagen, Geschenkpapier zu kaufen und dieses als **Checkout-Selling-Produkt** für Ihre Produkte festlegen.

### Registerkarte Attribute

In dieser Registerkarte können Sie Produktattribute verwalten. Für weitere Informationen über die Konfiguration und Verwaltung von Produktattributen lesen Sie [Produktattribute verwalten](../../katalog/spezifikationsattribute-verwalten.md).

### Registerkarte Spezifikationsattribute

In dieser Registerkarte können Sie die Spezifikationsattribute verwalten. Für weitere Informationen zu Spezifikationsattributen lesen Sie [Spezifikationsattribute verwalte](../../katalog/spezifikationsattribute-verwalten.md)n.

### Registerkarte Suchmaschinen (SEO)

In dieser Registerkarte können Sie ausgewählte SEO-Werte für Ihr Produkt festlegen, so zum Beispiel **Meta title**, **Meta Keywords** oder ein **URL Alias**. Für weitere Informationen über die Felder in der Registerkarte **Suchmaschinen** lesen Sie [SEO](../../../benutzer-handbuch/allgemeine-konzepte/seo.md).

### Registerkarte Downloads 

In dieser Registerkarte können Sie downloadfähige Produkte wie z. B. Dateien (PDF, MP3) definieren und konfigurieren. 

### Registerkarte Aufträge 

In dieser Registerkarte werden die Aufträge angezeigt in denen das entsprechende Produkt gekauft wurde. 

### Andere Registerkarten

Abhängig von Ihren Plugins kann es weitere Registerkarten geben. Für weitere Informationen zu diesen Registerkarten wenden Sie sich bitte an den Entwickler des Plugins.