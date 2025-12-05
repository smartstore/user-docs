# Creating and Editing Products

To create or edit a product, navigate to **Catalog > Manage Products** within the administration area of Smartstore. You can add, edit, delete, import and export your products here. To find the product you want to edit, there's a comfortable search mask left above the grid where your existing products are displayed. You can search for a product name or filter all products by category, manufacturer, store or product type. If you know the stock keeping unit (SKU) of your product, you could also go directly into the edit view of this product by entering the SKU and clicking on the **Go** button**.**

## Filter function in the product managementerwaltung

![](./attachments/2022-10-14%2010_27_14-Manage%20products%20_%20Smartstore%20administration.png)

## Edit View

![](./attachments/2022-10-14%2010_27_33-Edit%20product%20details%20_%20Smartstore%20administration.png)

### Product Info Tab

In this tab, you enter general information about the product. There won't be an explanation for every setting, as some of them are self-explanatory. If there is no description for the setting you are looking for, hover over the space between the title and input field of the setting. A question mark will appear which contains a hint about the setting.

| **Input Field** | **Description** |
| --- | --- |
| Product Type | The type of product you want sell. There are three product types in Smarttore: **Simple Product, Grouped Product** & **Bundled Product**. A **Simple Product** is the standard product type which you can use for any product. For more information about **Grouped Products**, read the topic [Understanding Grouped Products](../managing-products/understanding-grouped-products.md). For more information about **Bundle Products**, read the topic [Understanding Bundle Products](../managing-products/understanding-bundle-products.md) |
| Visible Individually | Check the box if you want the product to be visible in your catalog or search results. You can use this field (just uncheck it) to hide associated products from your catalog and make them accessible only from a parent "grouped" product details page. |
| Product Template | Choose a product template. This template defines how this product will be displayed in the frontend of your store. |
| Admin Comment | Admin comment. For internal use. |
| Product Tags | Product tags are keywords by which this product can also be identified. Enter a comma-separated list of tags to be associated with this product. The more products are associated with a particular tag, the larger it will show on the tag cloud. For more information about tags read the topic [Managing Tags](../../catalog/managing-tags.md). |
| Available Start Date | The start of the product's availability in Coordinated Universal Time (UTC). |
| Available End Date | The end of the product's availability in Coordinated Universal Time (UTC). |
| Show On Home Page | Check the box to display the product on your store's home page. Recommended for your most popular products. |
| Published | Check the box to publish this product (visible in store). Uncheck to unpublish (product is not available in store). |
| Require Other Products To Be Added To The Cart | Check the box if this product requires other products to be added to the cart. |
| Required Product IDs | Specify a comma-separated list of required product IDs. NOTE: Ensure that there are no circular references (for example, A requires B, and B requires A). |
| Automatically Add These Products To The Cart | Check the box to automatically add these products to the cart. |
| Is Gift Card | Check the box if the product is a gift card. |
| Gift Card Type | Select gift card type. **WARNING**: Not recommended to be changed within the production environment. There are two gift card types in Smartstore. Choose **Virtual** if you do not wish to ship the gift card and use **Physical** if you intend to ship a physical gift card to the purchaser. For more information about gift cards, read the topic [Managing Gift Cards](../../../user-guide/sales/managing-gift-cards.md). |
| Downloadable Product | Check the box if this product is downloadable. When a customer purchases a downloadable product, they can download the item directly from your store by viewing their completed order. For more information about downloadable products, read the topic [Handling Digital Products (ESD)](../managing-products/handling-digital-products-esd.md). |
| Recurring Product | Check the box if this product is a recurring product. For more information about recurring products, read the topic [Understanding Recurring Products](../managing-products/understanding-recurring-products.md). |
| Cycle Length | Enter cycle length. Together with the field **Cycle Period** the **Cycle Length** determines the period of time after which the product recurs. |
| Cycle Period | Select cycle period. Together with the field **Cycle Length** the **Cycle Period**   determines the period of time after which the product recurs. |
| Total Cycles | Enter total cycles. Determines the number of cycles after which the product no longer recurs. |
| Shipping Enabled | Determines whether the product will be shipped. |
| Free Shipping | Check the box if this product comes with free shipping. |
| Additional Shipping Charge | The additional shipping charge for the product. |
| Tax Exempt | Determines whether this product is tax exempt (tax will not be applied to this product at checkout). |
| Tax Category | The tax classification for this product. You can manage product tax classifications under "Configuration - Tax - Tax Classes". |
| Is Electronic Service | Specifies whether the product is an electronic service bound to EU VAT regulations for digital goods (2008/8/EG directive). |
| Limited to stores | Specifies whether the entry is only available for certain stores. For more information about multiple stores, read the topic [Working with Multiple Stores](../../../user-guide/common-concepts/working-with-multiple-stores.md). |
| Limited to customer groups | Specifies whether the object is available only for certain groups of customers. For more information about access rights, read the topic [Access Control Lists (ACL)](../../../user-guide/common-concepts/access-control-lists-acl.md). |

### Inventory Tab

In this tab, you configure the tracking mode for this product and its details. For more information about tracking inventory, read the topic [Tracking Product Inventory](../managing-products/tracking-product-inventory.md).

### Price Tab

In this tab, you enter and configure the prices and the price display for this product. For more information about configuring prices, read the topic [Understanding Pricing Rules](../managing-products/understanding-pricing-rules.md).  
In addition, product discounts can also be assigned under the Price tab. Keep in mind that only discounts of the **Discount Type**  *Assigned to Products* can be managed here. For more information about discounts, read the topic [Managing Discounts](../../../user-guide/marketing-promotions/managing-discounts.md).

### Pictures Tab

In this tab, you can upload the pictures to be displayed for this product. The **product main** image is displayed in product lists wherever thumbnails of products appear, such as the overview for the product category or the product list in the shopping cart. All of the other pictures you add will be displayed in the thumbstrip beneath the default image, as well as in the gallery of the product details view in the frontend of your shop, according to the **Display Order** you've configured. For more information about the picture upload control, read the topic [Uploading Pictures](../../../user-guide/common-concepts/uploading-pictures.md).

> [!INFO]
> ### Use exempted graphics
> Exempted graphics look a lot better in the product gallery.

### Category Mappings Tab

In this tab, you can assign categories to the product. You can assign an infinite number of categories to your product and decide whether to set them as featured products in certain categories. If you set the product as a featured product of a category, it will be displayed emphasized in the details view of this category in the frontend of your shop. You can also define a **Display Order,** thereby organizing your products within this category into a specific order. This order will only be applied when the sort option of the category is set to **Position**.

### Manufacturer Mappings Tab

In this tab, you can assign manufacturers to the product. You can assign an infinite number of manufacturers to your product and decide whether to set them as featured products of certain manufacturers. If you set the product as a featured product of a manufacturer, it will be displayed in the details view of this manufacturer in the frontend of your shop. The manufacturers you assign to the product will be shown on the product details view in the frontend of your shop, in a list beneath the product properties. For more information about managing manufacturers, read the topic [Managing Manufacturers](../../catalog/managing-manufacturers.md).

### Promotion Tab

In this tab, you can handle the promotion issues for this product. You can add **Related Products** which are displayed at the bottom of the product details view in the frontend of your shop or **Cross-Sell Products** which are shown in the checkout process. When you click on **Add New Related Product** or **Add New Cross-Sell Product**, the product chooser will open to let you choose the products you want to add. For more information about the product chooser, read the topic [The Data Grid](../../../user-guide/common-concepts/the-data-grid.md). 

#### Usage Scenario Related Products 

Imagine you sell electronic eq uipment, and some of your products are MP3 players. In this case, your customers may also be interested in buying earphones. Thus, you should consider placing the earphones on the details page of your MP3 players by adding earphones as **Related Products** to your MP3 players. If the MP3 Player is an Ipod, your customers may also be interested in buying an Itunes voucher. 

#### Usage Scenario Cross-Sell Products

Let's say you sell jewelry. In this case, you know you're selling products that are often bought as presents. Therefore, you could remind your customers to buy some gift wrap paper during the checkout process by adding the gift wrap paper product as a **Cross-Sell Product** to your products.

### Attributes Tab

In this tab, you manage the product attributes. For more information about managing product attributes, read the topic [Managing Product Attributes](../../catalog/managing-specification-attributes.md).

### Specification Attributes Tab

In this tab, you manage the specification attributes of your product. For more information about specification attributes, read the topic [Managing Specification Attributes](../../catalog/managing-specification-attributes.md).

### Search engines (SEO) Tab

In this tab, you can enter specific SEO values for the product, e.g. **Meta title**, **Meta keywords** or an **URL alias**. For more information about the fields in the **Seach engines** tab, read the topic [SEO](../../../user-guide/common-concepts/seo.md).

### Downloads tab

In dieser Registerkarte können Sie downloadfähige Produkte wie z. B. Dateien (PDF, MP3) definieren und konfigurieren. 

### Orders Tab 

This tab displays the orders in which the corresponding product was purchased.

### Other Tabs

There may be other tabs depending on the plugins you've installed. For information about these tabs, refer to the plugin developer.