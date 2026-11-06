# Produkte importieren & exportieren

Mit Smartstore importieren und exportieren Sie Produktdaten in verschiedenen Formaten. Bestehende Katalogdaten müssen Sie dadurch nicht erneut manuell erfassen. Ein häufig verwendetes Format ist CSV (Comma-Separated Values), das sich beispielsweise mit Excel bearbeiten lässt.

{% hint style="info" %}
**Export-Plugins**

Für einen Datenexport benötigt Smartstore einen Export-Provider, der das Ausgabeformat festlegt. Solche Provider werden in der Regel durch Plugins bereitgestellt, die Sie im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/) beziehen können.
{% endhint %}

## Export

Mit dem kostenpflichtigen Enterprise-Plugin **Datenexporte** exportieren Sie alle oder ausgewählte Produkte als CSV oder XML über die Produktliste. Für einen gestalteten PDF-Produktkatalog benötigen Sie das ebenfalls kostenpflichtige Enterprise-Plugin **PDF Export**. Weitere Informationen zur PDF-Ausgabe finden Sie unter [Als PDF herunterladen](../../../benutzer-handbuch/allgemeine-konzepte/als-pdf-herunterladen.md).

Einzelheiten zum CSV- und XML-Export finden Sie unter [Datenexporte](../../../benutzer-handbuch/plugins/commonexportproviders.md). Für wiederkehrende Exporte oder eine gezielte Produktauswahl richten Sie ein Profil unter **Konfiguration > Exportieren** ein. Die Einstellungen sind unter [Exportprofile verwalten](../../../benutzer-handbuch/datenaustausch/export/exportprofile-verwalten.md) beschrieben. Für Daten im Format eines Preisvergleichs- oder Shoppingportals lesen Sie [Produkt-Feeds exportieren](produkt-feeds-exportieren.md).

## Import

Für den Produktimport benötigen Sie ein Importprofil mit dem Objekttyp **Produkt**. Erstellen Sie es unter **Konfiguration > Importieren**, laden Sie Ihre CSV- oder Excel-Datei (`.xlsx`) hoch und prüfen Sie die Zuordnung der Importfelder. Die allgemeinen Einstellungen und die Ausführung sind unter [Importprofile verwalten](../../../benutzer-handbuch/datenaustausch/import/importprofile-verwalten.md) beschrieben.

Ob Smartstore ein Produkt neu anlegt oder aktualisiert, hängt von den Schlüsselfeldern und Einstellungen des Importprofils ab:

* **Neue Produkte:** Wenn kein vorhandenes Produkt gefunden wird, ist ein Wert in `Name` erforderlich. Ist **Nur aktualisieren** aktiviert, wird die Zeile stattdessen übersprungen.
* **Vorhandene Produkte:** Standardmäßig sucht Smartstore nach `Sku`, `Gtin` oder `ManufacturerPartNumber`. Im Profil können Sie außerdem `Id` oder `Name` als Schlüsselfeld wählen. Es genügt ein Treffer in einem der ausgewählten Schlüsselfelder; die Werte müssen nicht gemeinsam übereinstimmen.
* **Mehrere Treffer:** Standardmäßig wird nur das erste passende Produkt aktualisiert. Mit **Alle aktualisieren, die dem Wert eines Schlüsselfelds entsprechen** können mehrere passende Produkte geändert werden. Verwenden Sie eindeutige Werte, wenn nur ein bestimmtes Produkt aktualisiert werden soll.

Die folgenden Abschnitte nennen wichtige Importfelder. Verwenden Sie diese technischen Namen als Spaltenüberschriften oder ordnen Sie abweichende Spaltennamen im Importprofil zu. Ein Export kann zusätzliche Spalten enthalten, die der Produktimport nicht übernimmt.

{% hint style="info" %}
**Felder mit IDs formatieren**

Listenfelder wie `CategoryIds`, `ManufacturerIds` und `StoreIds` können mehrere IDs enthalten, getrennt durch `|`, zum Beispiel `3|7|12`. Die IDs müssen zu den Datensätzen im Zielshop passen. Einzelne ID-Felder wie `DeliveryTimeId` erwarten dagegen nur einen Wert.
{% endhint %}

### Allgemein

* **Identifikation und Texte:** `Id`, `Sku`, `Gtin`, `ManufacturerPartNumber`, `Name`, `ShortDescription`, `FullDescription`, `AdminComment`
* **Produkttyp und Darstellung:** `ProductTypeId`, `ParentGroupedProductId`, `Visibility`, `Condition`, `ProductTemplateViewPath`, `ShowOnHomePage`, `HomePageDisplayOrder`, `DisplayOrder`, `Published`
* **Suchmaschinen und Bewertungen:** `MetaKeywords`, `MetaDescription`, `MetaTitle`, `SeName`, `AllowCustomerReviews`
* **Gutscheine und erforderliche Produkte:** `IsGiftCard`, `GiftCardTypeId`, `RequireOtherProducts`, `RequiredProductIds`, `AutomaticallyAddRequiredProducts`
* **Wiederkehrende Produkte:** `IsRecurring`, `RecurringCycleLength`, `RecurringCyclePeriodId`, `RecurringTotalCycles`
* **Versand, Maße und Steuern:** `IsShippingEnabled`, `IsFreeShipping`, `AdditionalShippingCharge`, `IsEsd`, `IsTaxExempt`, `TaxCategoryId`, `Weight`, `Length`, `Width`, `Height`, `DeliveryTimeId`, `QuantityUnitId`, `CustomsTariffNumber`, `CountryOfOriginId`
* **Zuordnungen:** `CategoryIds`, `ManufacturerIds`, `StoreIds`, `LimitedToStores`, `TagNames`, `RelatedProductIds`, `CrossSellProductIds`
* **Bundles und Verfügbarkeit:** `BundleTitleText`, `BundlePerItemShipping`, `BundlePerItemPricing`, `BundlePerItemShoppingCart`, `AvailableStartDateTimeUtc`, `AvailableEndDateTimeUtc`

### Bilder

Über `ImageUrls` importieren Sie Produktbilder aus erreichbaren URLs oder aus Dateien auf dem Server. Mehrere Einträge werden durch `|` getrennt.

Beispiel für mehrere Bilder: `https://example.com/bild-1.jpg|https://example.com/bild-2.jpg`.

Relative Bildpfade beziehen sich standardmäßig auf den Ordner des Importprofils. Für `Content\MyImages\ProductPicture.jpg` muss die Bilddatei also im Unterordner `Content\MyImages` dieses Profilordners liegen. Ist in den Datenaustausch-Einstellungen ein abweichender Bilderordner festgelegt, dient dieser als Ausgangspunkt. Das Hochladen der CSV- oder Excel-Datei lädt lokale Bilddateien nicht automatisch mit hoch.

### Download

* **Download-Einstellungen:** `IsDownload`, `MaxNumberOfDownloads`, `DownloadExpirationDays`, `DownloadActivationTypeId`
* **Beispieldownload und Vereinbarung:** `HasSampleDownload`, `SampleDownloadId`, `HasUserAgreement`, `UserAgreementText`

Diese Felder steuern die Download-Einstellungen des Produkts. Sie importieren keine Download-Dateien; ein über `SampleDownloadId` zugewiesener Beispieldownload muss im Zielshop vorhanden sein.

### Lager

* **Bestand und Anzeige:** `ManageInventoryMethodId`, `StockQuantity`, `DisplayStockAvailability`, `DisplayStockQuantity`
* **Mindestbestand und Nachbestellung:** `MinStockQuantity`, `LowStockActivityId`, `NotifyAdminForQuantityBelow`, `BackorderModeId`, `AllowBackInStockSubscriptions`
* **Bestellmenge:** `OrderMinimumQuantity`, `OrderMaximumQuantity`, `QuantityStep`, `QuantityControlType`, `HideQuantityControl`, `AllowedQuantities`
* **Kaufmöglichkeiten:** `DisableBuyButton`, `DisableWishlistButton`, `AvailableForPreOrder`

### Preise

* **Preis und Vergleichspreis:** `CallForPrice`, `Price`, `ComparePrice`, `ComparePriceLabelId`, `ProductCost`
* **Angebotspreis:** `SpecialPrice`, `SpecialPriceStartDateTimeUtc`, `SpecialPriceEndDateTimeUtc`
* **Kundeneigener Preis:** `CustomerEntersPrice`, `MinimumCustomerEnteredPrice`, `MaximumCustomerEnteredPrice`
* **Grundpreis:** `BasePriceEnabled`, `BasePriceMeasureUnit`, `BasePriceAmount`, `BasePriceBaseAmount`

### Lokalisierung

Übersetzungen lassen sich für `Name`, `ShortDescription`, `FullDescription`, `MetaKeywords`, `MetaDescription`, `MetaTitle` und `BundleTitleText` importieren. Auch ein sprachabhängiger URL-Name (`SeName`) ist möglich. Ergänzen Sie den Spaltennamen um die Sprachkultur oder den eindeutigen SEO-Sprachcode einer im Shop angelegten Sprache, zum Beispiel `Name[de-DE]` oder `Name[de]`.

* **Englisch:** `Name[en]`, `ShortDescription[en]`, `FullDescription[en]`, `MetaTitle[en]`, `SeName[en]`
* **Deutsch:** `Name[de]`, `ShortDescription[de]`, `FullDescription[de]`, `MetaTitle[de]`, `SeName[de]`

### Zugehörige Daten

Mit dieser Funktion können Sie Staffelpreise, Attributoptionen und Produktvarianten gesammelt in Excel bearbeiten und anschließend wieder in denselben Shop einlesen. Das erspart Ihnen, jedes Produkt und jede Variante einzeln in der Verwaltung zu öffnen. Sie exportieren die vorhandenen Daten, ändern die gewünschten Werte in der Tabelle und übernehmen die Änderungen durch einen Import.

Beim CSV-Export mit **Zugehörige Daten exportieren** erhalten Sie neben der Produktdatei separate CSV-Dateien für die zugehörigen Daten. Darin steht jede Preisstaffel, Attributoption oder Attributkombination in einer eigenen Zeile. Produktname und Artikelnummer helfen Ihnen, die Einträge dem richtigen Produkt zuzuordnen. Je nach Datei können Sie beispielsweise Folgendes bearbeiten:

* **Staffelpreise:** Mengenstaffeln und deren Preise, beispielsweise den Preis ab zehn Stück.
* **Attributoptionen:** Werte eines Produktattributs, beispielsweise den Preisaufschlag für die Größe XXL.
* **Attributkombinationen:** Konkrete Produktvarianten, beispielsweise den Lagerbestand oder Preis eines T-Shirts in Blau und Größe M.

So übernehmen Sie Ihre Änderungen aus Excel zurück in den Shop:

1. **Exportieren:** Öffnen Sie unter **Konfiguration > Exportieren** ein CSV-Exportprofil für Produkte mit dem Plugin **Datenexporte**. Wählen Sie die gewünschten Produkte über die Filter aus, aktivieren Sie **Zugehörige Daten exportieren**, speichern Sie das Profil und führen Sie es aus.
2. **Dateien herunterladen:** Klicken Sie in der Profilliste auf die Anzahl unter **Exportdateien**. Laden Sie die Datei für die Daten herunter, die Sie bearbeiten möchten, zum Beispiel die Datei für Attributkombinationen.
3. **In Excel bearbeiten:** Importieren Sie die CSV-Datei über **Daten > Aus Text/CSV**. Achten Sie auf die korrekte Erkennung von Dezimalzahlen und darauf, dass Artikelnummern ihre führenden Nullen behalten. Ändern Sie die gewünschten Werte und lassen Sie Spaltenüberschriften, IDs und Zuordnungen unverändert.
4. **Datei speichern und hochladen:** Speichern Sie die bearbeitete Tabelle wieder als CSV-Datei. Laden Sie sie unter **Konfiguration > Importieren** in ein Importprofil mit dem Objekttyp **Produkt** hoch. Sie müssen die unveränderte Produktdatei nicht zusätzlich importieren, wenn Sie ausschließlich zugehörige Daten bearbeiten.
5. **Änderungen einlesen:** Aktivieren Sie **Zugehörige Daten importieren** und für die Bearbeitung vorhandener Einträge **Nur aktualisieren**. Prüfen Sie bei CSV-Dateien das Trennzeichen, speichern Sie das Profil und führen Sie den Import aus. Kontrollieren Sie anschließend das Importergebnis und die geänderten Werte am Produkt.

Beispiel: In der Datei für Attributkombinationen finden Sie eine Zeile für das T-Shirt in Blau und Größe M. Sie ändern dort `StockQuantity` von `12` auf `25` und behalten die `Id` bei. Nach dem erneuten Import hat genau diese vorhandene Variante einen Lagerbestand von 25. Es wird weder ein neues T-Shirt noch eine neue Variante angelegt.

{% hint style="info" %}
Behalten Sie die Kennzeichnung des Datentyps am Ende des Dateinamens bei: Vor `.csv` muss der Dateiname auf `TierPrice` (Staffelpreise), `ProductVariantAttributeValue` (Attributoptionen) oder `ProductVariantAttributeCombination` (Attributkombinationen) enden. Daran erkennt Smartstore, welche Daten die Datei enthält. Die Spalte `Id` bezeichnet in diesen Dateien den jeweiligen Staffelpreis, die Attributoption oder die Attributkombination, nicht das Produkt. Attributkombinationen können auf diesem Weg nur aktualisiert, nicht neu angelegt werden.
{% endhint %}

Weitere Informationen zu den Importprofilen finden Sie unter [Importprofile verwalten](../../../benutzer-handbuch/datenaustausch/import/importprofile-verwalten.md).
