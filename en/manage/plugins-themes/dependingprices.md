# DependingPrices

With this plugin, customer-specific prices can be mapped based on customer groups, customer numbers, shop, language, and quantity.

## How it works

For every price you want to specifically change, create a record in the DependingPrices plugin.
In this record, you determine the price and calculation method.

Possible calculation methods:

- Fixed price
- Percentage deduction or surcharge from the original price
- Surcharge/discount depending on the original price

You control the application of a deviating price by defining the customer group, customer number, shop, and/or language.

## Product Detail

The "Price Dependencies" tab is located in the product detail configuration. Here you define the individual prices for the product.
You can either select a globally defined price construct or maintain the records for the price configuration directly on the product. More on global configuration can be found in the [Product Groups](dependingprices.md#product-groups) section.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

To define a deviating price:

1. Click on "New".
2. Set the price and calculation method.
3. Define the target group via customer group, customer number, shop, or language.

Examples and Notes:

- If you want to offer a deviating price for a specific customer, enter their customer number (as stored in the customer record).
- If the deviating price should apply to an entire customer group, select the corresponding group.
- Conditions act cumulatively. For example, if you select a customer group and a shop, the deviating price only applies to customers of the selected group in the specified shop. If the customer is in another shop, the original price is applied.
- Exception: The customer number works across shops, languages, and customer groups.

## Attributes

**Simple Attributes (without combinations)**: If a percentage value or a fixed surcharge/discount is defined for the product and the criteria are met, this is applied to the final price.

**Attribute Combinations**: In the detail view of the attribute combination, a separate tab with the same grid is available as in the tab in the product detail configuration, via which you can maintain deviating prices for this attribute combination.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## Product Groups

Recurring rules do not have to be maintained per product. Create global definitions and assign them via product group IDs.

Procedure:

1. In the plugin configuration, a grid for global price configurations is available (analogous to product/attribute combinations). A product group ID must be defined in the record created here.
2. In the product, enable "Use global configuration" and store the product group ID.
3. All records defined for this group are applied to the product.

## Plugin Configuration

Here you will find the same grid as in the product detail configuration and for attribute combinations.
The difference: Additionally, **Product ID**, **Attribute Combination ID**, and **Product Group ID** are visible and configurable here.
Furthermore, a filter option is available, as all price definitions stored in the shop are displayed at this point.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Via the plugin settings, further options for price presentation can be used:

- **Customer groups for purchase price**: Determines the customer groups for which the purchase price of products should be calculated.
- **Customer groups for price suppression**: Determines the customer groups for which no price should be displayed if no criterion has been defined for this customer group.
- **Use tier price as basis**: Determines whether the tier price should be used as the basis for the price calculation if a tier price with quantity 1 is stored for the customer's customer group.
- **Hide tier prices**: Determines whether tier prices are hidden if deviating prices have been defined.

## Import & API

To import records for this plugin, run a normal CSV import via **Admin** > **Configuration** > **Import**.
Select the field `ID` as the key field.

The file to be imported must contain the following fields:
`ID`, `DP_CustomerGroupId`, `DP_LanguageId`, `DP_StoreId`, `DP_CustomerNumber`, `DP_Price`, `DP_CalculationMethod`

Optional fields can be used:
`DP_ItemGroupId`, `DP_VariantCombinationId`

Additionally, a WebAPI endpoint is available via which records can be maintained programmatically.