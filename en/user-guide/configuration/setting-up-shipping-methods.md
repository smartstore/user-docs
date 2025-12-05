# Setting up Shipping Methods

If you're running a shop, you need to offer shipping methods from which customers can choose their preferred one. You can set up shipping methods by going to **Configuration > Regional Settings > Shipping Methods**.

![](./attachments/shipping-methods.png)

Here, you can define the shipping methods that are active in your shop by defining a name and a description for the shipping methods you provide. If you activate the option **No Additional Charges**, the additional charges that are defined in your product details will be ignored during the calculation of the shipping costs. With the display order, you determine the display order of the shipping methods in the frontend. The prices of the individual shipping methods won't be defined here, but in the shipping calculation methods explained below.

## Shipping Method Restrictions

Shipping methods may be restricted to prevent them from being offered at checkout. Navigate to **Configuration > Regional Settings > Shipping Methods** and click the name of the desired shipping method. In the restriction tab, select the criteria for which the shipping method should *not* appear in checkout (the exclusion technique). You can restrict shipping methods by the following criteria:

- Customer Roles
- Countries (distinguished between billing and shipping address of the customer)

## Shipping Rate Computation Methods

With **Shipping Rate Computation Methods**, you define the prices of the shipping methods you provide. The number of available **Shipping Rate Computation Methods** depends on the plugins that are active in your shop. You can manage the computation methods by going to **Configuration > Regional Settings > Shipping Rate Computation Methods** . In this area, you can activate or deactivate computation rate methods by clicking the corresponding button, and you can organize the display order of shipping methods in the frontend of your shop by *Drag&Drop*. At this point, you may notice that you've already defined a display order for your shipping methods. However, shipping rate computation methods will provide calculations for all defined shipping methods and render them into your frontend. Therefore, you should choose one of the offline computation methods. Offline shipping rate computation methods are Shipping by Weight, Fixed Rate Shipping and Shipping by Total. You will find more information about these methods below. For online shipping methods (like UPS and Fedex), the defined shipping methods will be ignored completely. Instead of using them and populating them with prices, an online computation method will send certain information (such as shipping address country, total order weight, etc.) to the server of the shipping provider, and will populate the shipping methods and prices with new options for shipment.

![](./attachments/shipping-rate-computation-methods.png)

## Offline Computation Methods 

|     |     |
| --- | --- |
| Fixed Rate Shipping | Provides fixed rates for each of the defined shipping methods. |
| Shipping by Weight | Calculates shipping costs based on the total weight of the order. |
| Shipping by Total | Calculates shipping costs based on the total amount of the order. |

## Fixed Rate Shipping

The fixed rate computation method is the simplest form of shipping calculation. You just define a fixed price for each of the shipping methods that are active in your shop. A usage scenario for this would be shipping that's restricted to one country, with the shipping costs staying the same regardless of weight and order total.

![](./attachments/fixed-rate-shipping.png)

### Shipping by Weight

The calculation method **Shipping by Weight** provides the means to base the calculation of shipment costs on the weight of the purchased items of an order.

![](./attachments/shipping-by-weight.png)

|     |     |
| --- | --- |
| Store | Select a store to which this record should be applied. If an asterisk is selected, then this shipping rate will apply to all stores. |
| Country | Select a country to which this record should be applied. If an asterisk is selected, then this shipping rate will apply to all countries. |
| Zip-(Range) | Zip/postal code (range), either as a specific value or range pattern (e.g. 4000-4999). You can also define wildcard characters such as \* or ?. If zip is empty, then this shipping rate will apply to all customers from the given country or state/province, regardless of the zip code.<br><br>> [!INFO]<br>> ### Leading Zeros in Ranges<br>> NOTE: Both min and max part MUST have the same amount of leading zeroes ("0100-0999" is valid, whereas "0010-0999" is invalid) |
| Shipping Method | The shipping method to which this record should be applied. |
| Order Weight From | Order weight from. |
| Order Weight To | Order weight to. |
| Use Percentage | Check the box to use 'charge percentage' value. |
| Charge Amount | Charge amount. |
| Surcharge For Small Quantities | Determines the value of the small quantity surcharge. |
| Threshold For Small Quantities | Subtotal up to which a "small quantity surcharge" should be added. The surcharge will be ignored if no shipping fee is applied. Use "0" if no fee will be charged. |

|     |     |
| --- | --- |
| Calculate Per Weight Unit | If you check this option, rates are multiplied per weight unit (lb, kg, etc). This option is used for fixed rates (without percentages). |
| Limit Shipping Methods To Configured Ones | If you check this option, your customers will be limited to the shipping options configured here. Otherwise, they'll be able to choose any existing shipping options even if they have not been configured here (zero shipping fee in this case). (**Recommended to be activated**) |

### Shipping by Total

The calculation method **Shipping by Total** provides the means to base the calculation of shipment costs on the amount of the order total.

![](./attachments/shipping-by-total.png)

| 250px\|Options for Shipping by Total Records | Description |
| --- | --- |
| Store | Select a store to which this record should be applied. If an asterisk is selected, then this shipping rate will apply to all stores. |
| Country | Select a country to which this record should be applied. If an asterisk is selected, then this shipping rate will apply to all countries . |
| State / Province | If an asterisk is selected, this shipping rate will apply to all customers from the given country, regardless of the state/province. |
| Zip-(Range) | Zip/postal code (range), either as a specific value or range pattern (e.g. 4000-4999). You can also define wildcard characters such as \* or ?. If zip is empty, then this shipping rate will apply to all customers from the given country or state/province, regardless of the zip code. |
| Shipping Method | The shipping method to which this record should be applied. |
| Order Total From | Order total from. |
| Order Total To | Order total to. |
| Use Percentage | Check to use 'charge percentage' value. |
| Charge | Charge amount. |

| 250px\|Global Options for Shipping by Total | Description |
| --- | --- |
| Threshold For Small Quantities | Subtotal up to which a "small quantity surcharge" should be added. The surcharge will be ignored if no shipping fee is applied. Use "0" if no fee will be charged. |
| Surcharge For Small Quantities | Surcharge for small quantities. |
| Limit Shipping Methods To Configured Ones | If you check this option, your customers will be limited to shipping options configured here. Otherwise, they'll be able to choose any existing shipping options even they have not been configured here (zero shipping fee in this case). (**Recommended to be activated**) |

## More Information

Please also read the topic [Shipping Settings](../configuration/general-settings-preferences/shipping-settings.md). 

Shipping costs can be deactivated for customer groups. To read more about this option, please read the topic [Managing Customer Roles](../../user-guide/customers/managing-customer-roles.md).

Additional shipping costs that have been defined on the product level will be added to the shipping charge you've defined within the computation methods. More Information about this setting can be found in the topic [Creating and Editing Products](../../user-guide/catalog/managing-products/creating-and-editing-products.md).

For a product that's configured to be free of shipping costs, the rates explained above will be ignored as long as no products without this option are in the shopping cart of the order. More Information about this setting can be found in the topic [Creating and Editing Products](../../user-guide/catalog/managing-products/creating-and-editing-products.md).