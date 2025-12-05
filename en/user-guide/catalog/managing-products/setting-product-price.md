# Setting Product Price

In the Price Tab of the product configuration, you specify several elements for the price calculation of the product (i.e. regular price, old price, product cost, and tier prices). For more information about the price chain on which product prices are based, read the topic [Understanding Pricing Rules](../managing-products/understanding-pricing-rules.md).

![](./attachments/2022-10-18%2011_29_16-Edit%20product%20details%20_%20Smartstore%20administration.png)

| **Field** | **Description** |
| --- | --- |
| Price | The price of the product. |
| Old Price | The old price of the product. If you set an old price, this will display alongside the current price on the product page to show the difference in price. |
| Product Cost | The product cost is the cost of all the different components which make up the product. This is either the purchase price if the components are bought from outside suppliers, or the combined cost of materials and manufacturing processes if the component is made in-house. |
| Special Price | Set a special price for the product. This price will be valid between the start and end date. Leave the date fields empty to define a special price without a time limit. |
| Special price start date | The start date of the special price in Coordinated Universal Time (UTC). |
| Special price end date | The end date of the special price in Coordinated Universal Time (UTC). |
| Discounts | Specifies discounts to be applied to the object. |
| Disable buy button | Check this box to disable the buy button for this product. This may be necessary for products that are "available upon request". |
| Disable wishlist button | Check this box to disable the wishlist button for this product. |
| Available for pre-order | Check this box if the item is available for Pre-Order. When this box is checked, the "Pre-order" button is displayed instead of "Add to cart". |
| Call for price | Check this box to show "Call for Pricing" or "Call for Quote" instead of the price. |
| Customer enters price | An option indicating whether customer should enter a price. |
| Minimum amount | Define the minimum amount your customer has to enter. |
| Maximum amount | Define the maximum amount your customer can enter. |

## Price Indication Regulation \[PAngV\]

The purpose of the base price calculation according to Price Indication Regulation \[PAngV\] is to inform your customers about the base price of the packaging unit in which you sell your product. Let's assume you sell tea, and you sell different types of tea in various sizes (e.g. 200g, 300g, 500g). In this case, your customers would be interested in knowing the price of each product per 100g so that they can compare them to each other. Therefore, you would activate the option  **Calculate base price according to Price Indication Regulation \[PAngV\]** a nd enter the **Basic Unit** and the **Amount** that is included in the packaging size you are selling.  

![](./attachments/base-price-backend.png)

   ![](./attachments/base-price-frontend.png)

## Tier Prices

Graduated prices are discounts for different quantity purchases.  

![](./attachments/2022-10-18%2011_30_12-Edit%20product%20details%20_%20Smartstore%20administration.png)