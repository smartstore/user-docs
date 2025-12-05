# Understanding Bundle Products

Bundling means selling multiple products as one, namely as a bundle. Bundles are typically non-divided, static product packages, and are often classified into *manufacturer bundle* (where products are assembled by a manufacturer) and *merchant bundle* (where products are assembled by a merchant). A bundle is always purchased as a whole, hence the customer cannot add individual items of the bundle into his shopping cart.

## Usage scenario

Imagine you want to sell a video game console together with two wireless controllers and one video game. To do so, you would create a new product with the **Product Type:**  **Bundle Product**. You'll find this setting in the **Product Info Tab**. Once you've saved this product, there will be a new tab named **Bundled Products**, where you can add existing products from your catalog to this bundle. 

> [!INFO]
> To create a sales incentive, the bundle price should obviously be less than what the customer would have to pay for the individual components of the bundle product.

![](./attachments/bundle-product-frontend.png)

![](./attachments/2022-10-20%2010_05_46-Edit%20product%20details%20_%20Smartstore%20administration.png)

## Assigning products to a bundle

A product that is assigned to a bundle is called a bundle item.

1. Switch to the **Bundled Products**  tab of your bundle product and click the **Add New** button.
2. Select one or more products by activating the checkbox in the first column. You can use the search form to find the products you want to bundle more quickly.
3. Click the **Save** button. The selected products will now appear in the grid of bundled products.
4. You can remove the assignment by clicking **Delete** in the grid of bundled products.

> [!INFO]
> All simple products, except those involving recurring payments and downloads, can be part of a bundle. Grouped products and bundles cannot be bundled. A bundle product never has its own attributes.
> Please note that a product can be assigned multiple times to a bundle, and each instance can be configured separately. That could be useful in conjunction with attributes.

## Options to control the bundle

There are three important options that control the behavior of the bundle product. You will find these options above the grid of bundled products.  
  
Per-item pricing

This option controls the price calculation of the bundle. If it's deactivated, the price is determined for the bundle as a whole without taking the prices of the individual components into consideration. If it's activated, the price is the sum of the individual prices of all the products in the bundle.  
 

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Per-item pricing is deactivated...

Price adjustments of attributes and discounts on bundle items are not included in the pricing. Please note that a selection of attributes by the customer is not possible.

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Per-item pricing is activated...

The price calculation of bundle items takes into account special prices, price adjustment of attributes, as well as per bundle item specified discounts and quantities.  
The following items are not taken into account: tier prices, customer enters price, call for price, weight adjustment of attributes, and all other discounts.  
The display of basic prices can be controlled through an option (see **Configuration > Settings > Catalog settings** ).

### Per-item shipping

This option controls the price calculation of shipping costs. If it's deactivated, the shipping costs of the bundle product as a whole are used. If it's activated, the amount of shipping of all the products in the bundle is calculated.  
 

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Per-item shipping is activated...

The calculation of the shipping cost of bundle items takes the following into account: shipping enabled, free shipping, and additional shipping charge.

### Bundle item individually in the shopping cart

If this option is activated, the price and quantity of bundle items will be displayed in the shopping cart. Furthermore, inventory management will be based on the bundle items rather than the bundle as a whole.

## Editing a bundle item

Click **Edit** in the grid of bundled products.

### General tab

| **Fields** | **Description** |
| --- | --- |
| **Product name** | Specify a different product name to be displayed in the bundle item list. |
| **Short description** | Specify a different short description to be displayed in the bundle item list. Enter a space if no short description should appear in the bundle item list, even though the product has one. |
| **Quantity** | Every time the bundle is added to the cart, the quantity of that item will be adjusted based on this quantity. |
| **Discount** | Choose an optional discount for the bundle item. |
| **Discount percentage** | Specifies whether the discount is a percentage or a fixed value, e.g. *$2.60* . |
| **Hide thumbnail** | Hides the product thumbnail in the bundle item list. |
| **Visible** | Allows you to hide a product in the bundle item list. Such a product is still part of the bundle but is hidden to the customer. |
| **Active** | Determines whether the product is included in the bundle. Defining the product as inactive achieves the same result as deleting the bundle item. |
| **Bundle display order** | The position of the product in the bundle item list. |

### Attributes tab

You can filter out attributes that you don't want to offer in a bundle by activating **Exclude Attributes**. Afterwards, you can choose one or more attribute values for each attribute assigned to the product.