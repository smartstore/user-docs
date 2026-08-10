# Produkte importieren & exportieren

Mit Smartstore importieren und exportieren Sie Produktdaten in verschiedenen Formaten. Bestehende Katalogdaten müssen Sie dadurch nicht erneut manuell erfassen. Ein häufig verwendetes Format ist CSV (Comma-Separated Values), das sich beispielsweise mit Excel bearbeiten lässt.

{% hint style="info" %}
**Export-Plugins**

Für einen Datenexport benötigt Smartstore einen Export-Provider, der das Ausgabeformat festlegt. Solche Provider werden in der Regel durch Plugins bereitgestellt, die Sie im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/) beziehen können.
{% endhint %}

## Export

Exportieren Sie alle oder ausgewählte Produktdaten als XML, CSV oder PDF. Ein PDF-Export erzeugt einen gestalteten Produktkatalog. Weitere Informationen finden Sie unter [Als PDF herunterladen](../../../benutzer-handbuch/allgemeine-konzepte/als-pdf-herunterladen.md).

## Import

Für den Produktimport benötigen Sie ein Importprofil. Erstellen Sie es unter **Konfiguration > Import**. Für Informationen zu Importprofilen lesen Sie bitte [Importprofile verwalten](../../../benutzer-handbuch/datenaustausch/import/importprofile-verwalten.md).

Mit einem Importprofil laden Sie Katalogdaten aus CSV- oder Excel-Dateien hoch. Für neue Produkte ist nur die Spalte **Name** erforderlich. Um vorhandene Produkte zu aktualisieren, muss mindestens eines der Felder **SKU, GTIN (EAN), Herstellernummer** oder **ID.** befüllt sein. Anhand dieser eindeutigen Schlüssel erkennt Smartstore bestehende Katalogeinträge und aktualisiert sie. Wird kein passendes Produkt gefunden und enthält die Spalte **Name** einen Wert, legt Smartstore ein neues Produkt mit den Daten dieser Zeile an. Die unterstützten Importfelder sind im Folgenden aufgeführt.

{% hint style="info" %}
**Felder mit IDs formatieren**

Felder, die IDs enthalten, können mehrere Werte enthalten, die durch | getrennt werden (z. B. CategoryIds, StoreIds).
{% endhint %}

### Allgemein

ProductTypeId ParentGroupedProductId VisibleIndividually Name ShortDescription FullDescription ProductTemplateId ShowOnHomePage MetaKeywords MetaDescription MetaTitle SeName AllowCustomerReviews Published Sku ManufacturerPartNumber Gtin IsGiftCard GiftCardTypeId RequireOtherProducts RequiredProductIds AutomaticallyAddRequiredProductsIsRecurring\
RecurringCycleLength\
RecurringTotalCycles\
IsShipEnabled\
IsFreeShipping\
AdditionalShippingCharge\
IsTaxExempt\
TaxCategoryId\
Weight\
Length\
Width\
Height\
CreatedOnUtc\
CategoryIds\
ManufacturerIds\
PictureThumbPaths\
DeliveryTimeId\
BundleTitleText\
BundlePerItemShipping\
BundlePerItemPricing\
BundlePerItemShoppingCart\
BundleItemSkus\
AvailableStartDateTimeUtc\
AvailableEndDateTimeUtc\
StoreIds\
LimitedToStores

### Bilder

Produktbilder können unter anderem durch die Angabe einer URL importiert werden. Mehrere URLs können durch | getrennt werden.

ImageUrls

Wenn `ImageUrls` nur Dateinamen oder verknüpfte Pfade enthält, durchsucht der Produkt-Importer den Ordner des Importprofils nach Bilddateien. Beispiel: Für einen Importwert von `Content\MyImages\ProductPicture.jpg` erwartet der Produkt-Importer die Datei unter `\App_Data\ImportProfiles\name-of-my-import-profile\Content\MyImages\ProductPicture.jpg`.

### Download

IsDownload\
DownloadId\
UnlimitedDownloads\
MaxNumberOfDownloads\
DownloadActivationTypeId\
HasSampleDownload\
SampleDownloadId\
HasUserAgreement\
UserAgreementText

### Lager

IsDownload\
ManageInventoryMethodId\
StockQuantity\
DisplayStockAvailability\
DisplayStockQuantity\
MinStockQuantity\
LowStockActivityId\
NotifyAdminForQuantityBelow\
BackorderModeId\
AllowBackInStockSubscriptions\
OrderMinimumQuantity\
OrderMaximumQuantity\
AllowedQuantities\
DisableBuyButton\
DisableWishlistButton\
AvailableForPreOrder

### Preise

AvailableForPreOrder\
CallForPrice\
Price\
OldPrice\
ProductCost\
SpecialPrice\
SpecialPriceStartDateTimeUtc\
SpecialPriceEndDateTimeUtc\
CustomerEntersPrice\
MinimumCustomerEnteredPrice\
MaximumCustomerEnteredPrice\
BasePriceEnabled\
BasePriceMeasureUnit\
BasePriceAmount\
BasePriceBaseAmount

### Lokalisierung

Lokalisierte Werte können für Produktnamen, Kurz- und Langbeschreibungen importiert werden. Der Sprachcode zwischen den Klammern muss dem SEO-Code der in Ihrem Shop aktivierten Sprache entsprechen.

BasePriceBaseAmount\
Name\[en]\
ShortDescription\[en]\
FullDescription\[en]\
Name\[de]\
ShortDescription\[de]\
FullDescription\[de]\
etc.
