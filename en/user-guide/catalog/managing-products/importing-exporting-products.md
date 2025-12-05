# Importing & Exporting Products

Smartstore allows you to import or export your product data in several formats. If you already have a database which contains the product catalog you want to sell online, you obviously would not want to enter all the data again manually, but to import it automatically. One common format for structured data is CSV (delimiter separated values). CSV exports can be edited by Excel for instance.

> [!INFO]
> ### Data export plugins
> A data export requires an export provider that tells Smartstore how to format the data. Export providers are typically provided through plugins. They can be obtained in the [SmartStore Community Marketplace](http://community.smartstore.com/marketplace/).

## Export

You can export your product data to XML, CSV or PDF. With the PDF export, you can export the data of all your products or just the selected products into a visually appealing PDF catalog. For more information about the PDF format, read the topic [Downloading as PDF](../../../user-guide/common-concepts/downloading-as-pdf.md).

## Import

You can import your product data by using an import profile. To create an import profile, go to **Configuration > Import**. For more information about import profiles, please read the topic [Managing Import Profiles](../../../user-guide/data-exchange/import/managing-import-profiles.md). 

The import profile lets you upload CSV files that contains the catalog data to be imported. To import new products, the column **name** is the only mandatory field which must contain a value. If you want to update your existing product data, one of the fields **SKU, Gtin (EAN), ManufacturerPartNumer** or **ID** is mandatory and will be used to match an existing product in your catalog. If a product is found with one of these unique identifiers, it will be updated. If no product is found and a value exists in the **name** column, a new product will be created and the data of this line will be imported into it. For a complete list of values that will be imported, see the list below. 

> [!INFO]
> ### How to format fields which contain IDs
> Fields which contain IDs can contain multiple values that are separated by a pipe |. (e.g. CategoryIds, StoreIds)

### General

ProductTypeId ParentGroupedProductId VisibleIndividually Name ShortDescription FullDescription ProductTemplateId ShowOnHomePage MetaKeywords MetaDescription MetaTitle SeName AllowCustomerReviews Published Sku ManufacturerPartNumber Gtin IsGiftCard GiftCardTypeId RequireOtherProducts RequiredProductIds AutomaticallyAddRequiredProductsIsRecurring  
IsDownload  
DownloadId  
UnlimitedDownloads  
MaxNumberOfDownloads  
DownloadExpirationDays  
DownloadActivationTypeId  
HasSampleDownload  
SampleDownloadId  
HasUserAgreement  
UserAgreementText  
IsRecurring  
RecurringCycleLength  
RecurringCyclePeriodId  
RecurringTotalCycles  
IsShipEnabled  
IsFreeShipping  
AdditionalShippingCharge  
IsEsd  
IsTaxExempt  
TaxCategoryId  
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
HideQuantityControl  
AllowedQuantities  
DisableBuyButton  
DisableWishlistButton  
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
Weight  
Length  
Width  
Height  
DisplayOrder  
DeliveryTimeId  
QuantityUnitId  
BasePriceEnabled  
BasePriceMeasureUnit  
BasePriceAmount  
BasePriceBaseAmount  
BundleTitleText  
BundlePerItemShipping  
BundlePerItemPricing  
BundlePerItemShoppingCart  
BundleItemSkus  
AvailableStartDateTimeUtc  
AvailableEndDateTimeUtc  
CreatedOnUtc  
CategoryIds  
ManufacturerIds  
PictureThumbPaths  
StoreIds  
LimitedToStores  
CustomsTariffNumber  
CountryOfOriginId 

### Images

Product images can be imported by URL. Multiple URLs can be separated by a pipe |.

ImageUrls

If `ImageUrls` just contain file names or relative file paths, the product importer searches the folder of the import profile for image files. Example: For an import value of `Content\MyImages\ProductPicture.jpg` the product importer expects the file under `\App_Data\ImportProfiles\name-of-my-import-profile\Content\MyImages\ProductPicture.jpg`.

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

### Stock

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

### Prices

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

### Localization

Localized values can be imported for product names, description and full description. The language code within the brackets have to match the SEO code of a language that's activated in the shop.

BasePriceBaseAmount  
Name\[en\]  
ShortDescription\[en\]  
FullDescription\[en\]  
Name\[de\]  
ShortDescription\[de\]  
FullDescription\[de\]  
etc.