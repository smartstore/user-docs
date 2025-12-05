# Understanding Product Variants

Product variants help you to manage various different versions or styles of the same product. You can create variants for a product by going to the **Attributes Tab** in the product detail configuration. 

![](./attachments/2022-10-19%2010_09_38-Edit%20product%20details%20_%20Smartstore%20administration.png)

 ![](./attachments/2022-10-19%2010_17_32-Mein%20Shop.%20ORIGINAL%20WAYFARER%20AT%20COLLECTION.png)

## Usage Scenario

Imagine you're selling T-shirts in your online shop. A T-shirt is usually available in different colors and sizes. Since you don't want to create the same product with different attributes over and over again, you should add attributes to your product to manage the different variations. To create variants for a T-shirt, go to the **Attributes Tab** in the product detail configuration and add the desired attributes (e.g. color and size). When adding the color attribute, you should choose the Control Type **Color Squares**. For the size attribute, you should use the Control Type **Drop-down List**. After you've added these attributes, they don't contain any values yet (e.g. Size > S,M,L,XL), so the next thing to do is to add values to your attributes. To do this, click on the link **View/Edit Value** in the data grid. After you've added the values, there are two options for handling your attribute: you can either stop here or create attribute combinations which allow you to manage individual product data for each attribute combination (e.g. the stock, price, SKU, etc.). You can even specify a product picture that will be shown when a customer chooses the attributes belonging to the combination.

  

## Attributes

Before you can add new attributes, they have to be created by going to **Catalog > Product Attributes**. In this section, you can add a new product attribute by entering its name, which will be the identifier for this attribute in your shop. Once it has been created, you can define different names and descriptions for each of the languages you have configured in your store.

After you have set up your product attribute, you can create Options Sets for it. An Options Set is a group of predefined attribute options, for example **Red, Green, Blue, White** etc. for an attribute **Color**. Options Sets allows you to apply all its options in one go when adding a product attribute to your product. To create Options Sets, go to the **Options Sets Tab** on the product attribute page, create a new record and enter a name for the set, for example **T-Shirt Colors**. After you've added the set, click the small arrow in front of the name and click **Add Option**. For a list of available option properties, see below section **Attribute Values**.

When adding a product attribute to your product, you can configure the following values to it.

250px|AttributeDescriptionAttributeDefines the product attribute.Text PromptDefines a text prompt that is displayed next to the attribute in the frontend. The purpose of this text prompt is to give your users an additional hint as to how this attribute should be used.Is RequiredDefines whether the attribute has to be selected by the customer being able to add it to the basket.Control Type

Defines the control type that is rendered in the frontend. You can choose from the following control types:

| 150px\|Control Type | Description |
| --- | --- |
| Drop-down list | Renders a drop-down list to let the customer choose one item out of the given attribute values. |
| Radio button list | Renders a radio button list to let the customer choose one item out of the given attribute values. |
| Checkboxes | Renders check boxes for each value to let the customer choose multiple attribute values. |
| Textbox | Renders a textbox. |
| Multiline textbox | Renders a multi-line textbox. |
| Date picker | Renders a date picker to let the customer choose a date. |
| File upload | Renders a file upload control to let the customer upload a file. |
| Color squares | Renders color squares to let the customer choose a color. |

Display OrderDetermines the display order in the frontend.ValuesContains the attribute values.

After you have added the attribute to your product, you can apply Options Sets to it, assumed you've defined one and the control type of the attribute is **Drop-Down List**, **Radio Button List**, **Checkboxes** or **Color Squares**. To apply an Options Set, click **Edit** in the attribute grid and choose a set in the column **Values.** In the next step, you will be asked whether to merge existing and new values or to delete all existing options.

## Attribute Values

Depending on the chosen control type, you can edit different fields or none of them. When choosing the control types **Textbox, Multi-line Textbox, Date Picker,** or **File Upload**, you can't add any values because the value of these control types are determined by the customer, who can freely interact with these controls. For the the control type **Color Squares**, you can specify color values which will be rendered as a squares and can be chosen by your customers in the product detail page by clicking one of them. Color squares can also be displayed in the product box of product lists when the following option is activated: **Configuration > Settings > Catalog Setting >  Product Lists >**  **Show color squares in product lists**. When you add values to an attribute, you can specify the following data for it.

| 250px\|Field | Description |
| --- | --- |
| Name | The name of the attribute value as it will be shown in the frontend. Allows different values for each configured language. |
| RGB color  [](http://localhost:63343/Admin/Product/ProductAttributeValueCreatePopup?productAttributeAttributeId=7&btnId=btnRefresh&formId=productvariantattribute-form) | The RGB value for the color that will be rendered in the frontend. Only available for **Color Squares** control. |
| Alias | An URL alias used when searching products in your shop and when the search result is filtered by attribute value. |
| Linked Product | When you choose the value type **Product** instead of **Simple**, the price and weight of the linked product is taken into account in the calculations. |
| Price Adjustment | Price reduction or surcharge. The value will be shown on the product detail page next to the value name if the following option is activated: **Configuration > Settings > Catalog Setting > Product Detail > Show variant combination price adjustments** . |
| Weight Adjustment | Additional or reduced weight. |
| Is Pre-Selected | Specifies whether the value is pre-selected as the customer enters the product detail page. |
| Display Order | Determines the display order. |

  

## Attribute Combinations 

If you want to manage product-related data (e.g. differing SKUs, Prices, etc.) for your attributes, you need to create **Attribute Combinations** by clicking on the button **Create All Combinations** or add attribute combinations manually by clicking on the button **Add Combination**. You can edit the following data for each of your attribute combinations by clicking on the combination in the data grid. All of these values will be loaded with an AJAX-request in the background and displayed on the product details page when a customer chooses the corresponding attribute values. 

| 250px\|Field | Description |
| --- | --- |
| Is Active | Specifies if the combination is active and can be chosen by your customers. |
| Pictures | Select one or more of the product pictures that have been assigned to your product. The selected pictures will be shown if a customer selects the corresponding attribute values. The selected pictures will be excluded from the product detail page once the number of product pictures exceeds the number that has been configured within the following setting: **Configuration > Settings > Catalog Setting > Product Detail > Number from which images are only displayed on variation change** . |
| SKU | The SKU of the combination. |
| Manufacturer Part Number | The manufacturer part number of the combination. |
| GTIN | The GTIN of the combination. |
| Price | The price of the combination. |
| Delivery Time | The delivery time of the combination. |
| Basic Unit | The basic unit of the combination. |
| Amount | The amount of the combination. |
| Length | The length of the combination. |
| Width | The width of the combination. |
| Height | The height of the combination. |
| Stock Quantity | The stock quantity of the combination. Keep in mind that the stock level of a combination will be reduced automatically only if the option **Manage Inventory Method** from the **Inventory Tab** of the product detail configuration page is set to **Track Inventory By Product Attributes**. |
| Allow out of stock | Specifies whether to allow purchases when the attribute combination is out of stock. |

> [!INFO]
> If you add new attribute values, you need to recreate your combinations in order to map all values to your combinations.