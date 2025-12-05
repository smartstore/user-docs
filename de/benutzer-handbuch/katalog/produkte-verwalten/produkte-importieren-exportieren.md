# Produkte importieren & exportieren

Smartstore ermöglicht Ihnen den Import und Export Ihrer Produktdaten in unterschiedlichen Formaten. Wenn Sie bereits eine Datenbank haben, die den Produktkatalog, den Sie online anbieten möchten, enthält, dann wollen Sie natürlich nicht alle Daten manuell erneut eingeben, sondern diese automatisch importieren. Ein verbreitetes Datenformat für strukturierte Daten ist CSV (delimiter separated values). CSV-Exporte können beispielsweise durch Excel bearbeitet werden.

> [!INFO]
> ### Export Plugins
> Ein Datenexport erfordert einen Export-Provider, der Smartstore mitteilt, in welchem Format die Daten ausgegeben werden sollen. Export-Provider werden im allgemeinen durch Plugins bereit gestellt. Sie können diese im [Smartstore Community Marketplace](http://community.smartstore.com/marketplace/) beziehen.

## Export

Sie können Ihre Produktdaten in XML, CSV oder PDF exportieren. Bei einem PDF-Export können Sie die Daten all Ihrer Produkte oder ausgewählter Produkte in einen visuell ansprechenden PDF-Katalog exportieren. Für weitere Informationen zum PDF-Format lesen Sie bitte [Als PDF herunterladen](../../../benutzer-handbuch/allgemeine-konzepte/als-pdf-herunterladen.md).

## Import

Sie können Produktdaten importieren, indem Sie ein Importprofil nutzen. Um ein Importprofil zu erstellen, gehen Sie zu **Konfiguration > Import**. Für Informationen zu Importprofilen lesen Sie bitte [Importprofile verwalten](../../../benutzer-handbuch/datenaustausch/import/importprofile-verwalten.md). 

Das Importprofil lässt Sie CSV-Dateien und auch Excel-Dateien hochladen, die die zu importierenden Katalogdaten enthalten. Um neue Produkte zu importieren, ist die Spalte **Name** das einzig erforderliche Feld, das einen Wert enthalten muss. Wenn Sie Ihre vorhandenen Produktdaten aktualisieren möchten, benötigen Sie zwingend Werte in den Feldern **SKU, GTIN (EAN), Herstellernummer** oder **ID.** Diese werden genutzt, um vorhandene Daten in Ihrem Katalog zu erkennen. Wenn ein Produkt mit einem dieser eindeutigen Schlüsselfelder gefunden wird, wird es aktualisiert. Wenn kein Produkt gefunden wird und ein Wert in der Spalte **Name** angegeben ist, wird ein neues Produkt erstellt und die Daten der Zeile werden entsprechend importiert. Eine vollständige Liste von Werten, die importiert werden, finden Sie in der unten stehende Liste. 

> [!INFO]
> ### Felder mit IDs formatieren
> Felder, die IDs enthalten können mehrere Werte enthalten, die durch | getrennt werden. (z.B.: CategoryIds, StoreIds)

### Allgemein

ProductTypeId ParentGroupedProductId VisibleIndividually Name ShortDescription FullDescription ProductTemplateId ShowOnHomePage MetaKeywords MetaDescription MetaTitle SeName AllowCustomerReviews Published Sku ManufacturerPartNumber Gtin IsGiftCard GiftCardTypeId RequireOtherProducts RequiredProductIds AutomaticallyAddRequiredProductsIsRecurring  
RecurringCycleLength  
RecurringTotalCycles  
IsShipEnabled  
IsFreeShipping  
AdditionalShippingCharge  
IsTaxExempt  
TaxCategoryId  
Weight  
Length  
Width  
Height  
CreatedOnUtc  
CategoryIds  
ManufacturerIds  
PictureThumbPaths  
DeliveryTimeId  
BundleTitleText  
BundlePerItemShipping  
BundlePerItemPricing  
BundlePerItemShoppingCart  
BundleItemSkus  
AvailableStartDateTimeUtc  
AvailableEndDateTimeUtc  
StoreIds  
LimitedToStores 

### Bilder

Produktbilder können unter anderem durch die Angabe einer URL importiert werden. Mehrere URLs können durch | getrennt werden.

ImageUrls

Wenn `ImageUrls` nur Dateinamen oder verknüpfte Pfade enthält, durchsucht der Produkt-Importer den Ordner des Importprofils nach Bilddateien. Beispiel: Für einen Importwert von `Content\MyImages\ProductPicture.jpg` erwartet der Produkt Importer die Datei unter `\App_Data\ImportProfiles\name-of-my-import-profile\Content\MyImages\ProductPicture.jpg`.

### Download

IsDownload  
DownloadId  
UnlimitedDownloads  
MaxNumberOfDownloads  
DownloadActivationTypeId  
HasSampleDownload  
SampleDownloadId  
HasUserAgreement  
UserAgreementText

### Lager

IsDownload  
ManageInventoryMethodId  
StockQuantity  
DisplayStockAvailability  
DisplayStockQuantity  
MinStockQuantity  
LowStockActivityId  
NotifyAdminForQuantityBelow  
BackorderModeId  
AllowBackInStockSubscriptions  
OrderMinimumQuantity  
OrderMaximumQuantity  
AllowedQuantities  
DisableBuyButton  
DisableWishlistButton  
AvailableForPreOrder

### Preise

AvailableForPreOrder  
CallForPrice  
Price  
OldPrice  
ProductCost  
SpecialPrice  
SpecialPriceStartDateTimeUtc  
SpecialPriceEndDateTimeUtc  
CustomerEntersPrice  
MinimumCustomerEnteredPrice  
MaximumCustomerEnteredPrice  
BasePriceEnabled  
BasePriceMeasureUnit  
BasePriceAmount  
BasePriceBaseAmount

### Lokalisierung

Lokalisierte Werte können für Produktnamen, Kurz- und Langbeschreibungen importiert werden. Der Sprachcode zwischen den Klammern muss dem SEO Code der in Ihrem Shop aktivierten Sprache entsprechen

BasePriceBaseAmount  
Name\[en\]  
ShortDescription\[en\]  
FullDescription\[en\]  
Name\[de\]  
ShortDescription\[de\]  
FullDescription\[de\]  
etc.