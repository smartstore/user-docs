# Set up Shipping Methods

If you run a shop, you must offer shipping methods from which your customers can choose their preferred one. You can set up shipping methods by navigating to **Configuration > Regional Settings > Shipping Methods**.

![](../../.gitbook/assets/shipping-methods.PNG)

Here you can define which shipping methods are offered in your shop by specifying the names and descriptions of the shipping methods. If you activate the option **No additional charges**, the additional costs defined at the product level will be ignored when calculating shipping costs. Use the **Display order** to determine the sequence in which shipping methods appear in the frontend. The prices for the individual shipping methods are not set here, but in the shipping rate computation methods, which are explained below.

## Shipping Method Restrictions

Shipping methods can be restricted so that they are not available during the checkout process. Go to **Configuration > Regional Settings > Shipping Methods** and click on the name of your desired shipping method. In the **Restrictions** tab, select the criteria upon which the shipping method should _not_ appear at checkout (exclusion principle). You can restrict shipping methods based on the following criteria:

* Customer roles
* Countries (distinguished between the customer's billing and shipping address)

## Shipping Rate Computation Methods

With **Shipping Rate Computation Methods**, you determine the prices for the shipping methods you offer. The number of available **Shipping Rate Computation Methods** depends on the plugins active in your shop. You can manage the computation methods by navigating to **Configuration > Regional Settings > Shipping Rate Computation Methods**. There, you can activate or deactivate the computation methods by clicking the respective button. You can also adjust the display order of the shipping methods in the frontend of your shop via _Drag & Drop_. You might notice at this point that you have already defined a display order for shipping methods. The shipping rate computation methods create options and calculate shipping costs for all active shipping methods, making them available for selection by your customers in the frontend. Therefore, you should choose one of the offline computation methods. Offline computation methods are _Fixed Rate Shipping_, _Shipping by Weight_, and _Shipping by Total_. You will find more information on these methods below. For online computation methods (such as UPS and Fedex), the defined shipping methods are completely ignored. Instead of calculating shipping costs for them, online computation methods send information (such as the shipping address country, shipment weight, etc.) to the carrier's server and present the available returned shipping options for your customers to select.

![](../../.gitbook/assets/fixed-rate-shipping.PNG)

## Offline Computation Methods

| | |
| :--- | :--- |
| Fixed Rate Shipping | Allows specifying a fixed price for each of the defined shipping methods. |
| Shipping by Weight | Calculates shipping costs based on the weight of the shipment. |
| Shipping by Total | Calculates shipping costs based on the total value of the order. |

### Fixed Rate Shipping

The **Fixed Rate Shipping** computation method is the simplest variant of shipping cost calculation. You can set a fixed price for each active shipping method in your shop. A use case for this would be a shipping method restricted to one country where shipping costs remain the same regardless of weight and the total order value.

### Shipping by Weight

The **Shipping by Weight** computation method calculates shipping costs based on the total weight of the items ordered.

| | |
| :--- | :--- |
| Store | Select a store for which this shipping condition should apply. If the asterisk is selected, the rate applies to all stores. |
| Country | The destination country. Select asterisk * if the customer's country should not play a role in the evaluation. |
| Zip (Range) | <p>Customer's zip code (range), either as specific values (comma separated) or as a pattern (e.g. 4000-4999 for zip area 4). Wildcards like asterisk * or question mark ? can also be used in a pattern. You can also specify multiple wildcards (comma separated). Leave the field empty if the fee should apply to all customers in the defined country/state regardless of zip code.<br><br><strong>Info</strong><br>Leading zeros in number range<br>NOTE: The lowest and highest value MUST have the same number of leading zeros ("0100-0999" works, whereas "0010-0999" does not).</p> |
| Shipping Method | The shipping method to which this computation method should be applied. |
| Order Weight From | The condition applies if the total weight of all items in the cart is at least this value. |
| Order Weight To | The condition applies if the total weight of all items in the cart is less than this value. Leave the field empty if you do not want to set an upper limit. |
| Use Percentage | Determines whether the shipping fee should be calculated as a percentage of the order value (NOT weight). |
| Charge Amount | The shipping fee as an absolute amount OR calculation factor if the corresponding option has been activated. |
| Small Quantity Surcharge | Determines the value of the small quantity surcharge. |
| Lower Weight Limit | Value up to which a small quantity surcharge should be levied. The surcharge is ignored if no shipping costs are incurred. Use "0" if no surcharge should be levied. |

| **Options** | **Description** |
| :--- | :--- |
| Multiply fee by weight | Determines whether the fee should be multiplied by the total item weight. This option is ignored if a percentage fee is charged. |
| Limit to methods | The customer is offered free shipping as a fallback during checkout if none of the defined conditions apply. Activate this option if this is not desired. |
| Consider weight of free shipping products | Determines whether the weight of products with free shipping should be considered in the calculation. |

## Shipping by Total

The **Shipping by Total** computation method gives you the option to make the calculation of shipping costs dependent on the order total.

![](../../.gitbook/assets/shipping-by-weight.PNG)

| **Add new shipping condition** | **Description** |
| :--- | :--- |
| Store | If the asterisk is selected, the rate applies to all stores. |
| Country | The destination country. Select asterisk * if the customer's country should not play a role in the evaluation. |
| State / Province | Customer's state / region / province. Select asterisk * if the fee should apply to all customers in the defined country regardless of region. |
| Zip (Range) | Customer's zip code (range), either as specific values (comma separated) or as a pattern (e.g. 4000-49999 for zip area 4). Wildcards like asterisk * or question mark ? can also be used in a pattern. You can also specify multiple wildcards (comma separated). Leave the field empty if the fee should apply to all customers in the defined country/state regardless of zip code. |
| Shipping Method | The shipping method to which this computation method should be applied. |
| Order Total From | The condition applies if the order total is at least this value. |
| Order Total To | The condition applies if the order total in the cart is less than this value. Leave the field empty if you do not want to set an upper limit. |
| Use Percentage | Determines whether the shipping fee should be calculated as a percentage of the order total. |
| Charge Amount | The shipping fee as an absolute amount. |

| **Options** | **Description** |
| :--- | :--- |
| Lower limit to order value | Order value up to which a small quantity surcharge should be levied. The surcharge is ignored if no shipping costs are incurred. Use "0" if no surcharge should be levied. |
| Small quantity surcharge | Small quantity surcharge. |
| Limit to methods | The customer is offered free shipping as a fallback during checkout if none of the defined conditions apply. Activate this option if this is not desired. |

## Further Information

Please also read the topic [Shipping Settings](einstellungen/versand-einstellungen.md).

Shipping costs can be deactivated for individual customer roles. If you want to learn more about this possibility, please read [Manage Customer Roles](../kunden/kundengruppen-verwalten.md).

Additional shipping costs that can be defined at the product level are added to the shipping costs you have set in the computation methods. More information on this setting can be found under [Create and Edit Products](../../verwalten/katalog/produkte-verwalten/produkte-erstellen-und-bearbeiten.md).

For a product for which free shipping has been set up, the rates mentioned above are ignored as long as no product without this option is in the order cart. More information on this setting can be found under [Create and Edit Products](../../verwalten/katalog/produkte-verwalten/produkte-erstellen-und-bearbeiten.md).