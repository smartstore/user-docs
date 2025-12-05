# Tracking Product Inventory

In this section, you can decide whether to track the stock level of a product. If you choose to track it, you can enter the available stock for a product and configure certain actions to be initiated when the stock level of a product is below a critical quantity and needs to be reordered. 

![](./attachments/2022-10-18%2011_06_05-Edit%20product%20details%20_%20Smartstore%20administration.png)

| **250px\|Input Field** | **Description** |
| --- | --- |
| Manage Inventory Method | Select manage inventory method. You can choose whether or not to track the inventory of this product and whether the inventory should be tracked by product attributes. When enabled, stock quantities are automatically adjusted when a customer makes a purchase. You can also set low stock activity actions and receive notifications. |
| Stock Quantity | The current stock quantity of the product. |
| Display Stock Availability | Check to display stock availability. When enabled, customers will see the stock availability of the product. |
| Minimum Stock Quantity | If you have enabled "Manage Stock", you can perform a number of different actions when the current stock level falls below your minimum stock quantity. |
| Low Stock Activity | Action to be taken when your current stock level falls below the "Minimum Stock Quantity".<br><br>**Options**<br><br>- *Nothing* \- Nothing will happen. The product is still available for purchase as it was before the low stock activity event.<br>- *Disable Buy Button* - The *Add to Cart* button won't be displayed for this product, so your customers won't be able to buy the product if the stock level is too low.<br>- *Unpublish* - The product won't be displayed anymore, so your customers will not be able to see or buy the product if the stock level is too low. |
| Notify Admin For Quantity Below | When the current stock quantity falls below this level, the merchant will receive a notification. |
| Backorders | Select backorder mode. The backorder mode allows you to configure a product in such a way that your customers can purchase it even though it is not in stock.<br><br>**Options:**<br><br>- *No Backorders* - Customers aren't able to purchase a product when it isn't in stock<br>- *Allow Qty below 0* - Customers are able to purchase a product even though it isn't in stock.<br>- *Allow Qty below 0 and notify customer* - Customers are able to purchase a product even though it isn't in stock and will be informed that the product is currently not in stock. |
| Allow Back In Stock Subscriptions | Allow customers to subscribe to a notification for a product that has gone out of stock. This way, your customers will automatically be informed when the product is back in stock if they subscribe for the notification. |
| Minimum Cart Quantity | Set the minimum quantity allowed in a customer's shopping cart, e.g. set to 3 to allow customers to purchase only 3 or more of this product. |
| Maximum Cart Quantity | Set the maximum quantity allowed in a customer's shopping cart e.g. set to 5 to allow customers to purchase a maximum of 5 of this product. |