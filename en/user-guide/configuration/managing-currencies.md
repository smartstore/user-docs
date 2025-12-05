# Managing Currencies

In Smartstore, you can configure several currencies depending on your target customer group. This way, you're able to offer your customers the display of prices and the purchase of your products in their preferred currency. To manage currencies, go to **Configuration > Regional Settings > Currencies**.  

![](./attachments/currencies.png)

  

## Primary Exchange Rate Currency

Depending on the number of exchange rate plugins installed, you can choose your preferred  **Current Exchange Rate Provider**  and determine whether this provider should perform automatic updates of exchange rates by checking the box **Auto Update Enabled**. You can also update rates manually by clicking the button **Get Live Rates**. When your **Exchange Rate Provider** performs an update of exchange rates, it will access the current exchange rate from a server (in the case of an ECB provider, it will be the server of the European Central Bank) and overwrite the exchange rate of your currency with the current value of the server. The **Primary Exchange Rate Currency** will be the reference value against which the rates will be calculated. 

## Primary Store Currency

The currency which is defined as the **Primary Store Currency** is the currency in which the prices of your products and other costs will be entered in the store.

## Currency Details 

|     |     |
| --- | --- |
| Name | Localized name of the currency |
| Currency code | The three letter ISO 4217 currency code. |
| Rate | The exchange rate against the primary exchange rate currency. |
| Display Locale | The currency-specific culture code. |
| Custom Formatting | Custom formatting to be applied to the currency values. |
| Domain Endings | Selects this currency as the default currency based on the domain extension. Example: .ch |
| Published | Determines whether the currency is published. |
| Display Order | The display order of this currency. 1 represents the top of the list. |

  

All currencies that are set to be published can be selected by your customers in the frontend of your store, as shown on the following screen.

![](./attachments/language-chooser.png)

## Currency Rounding

|     |     |
| --- | --- |
| Round all order item amounts | Specifies whether to round all order item amounts (products, fees, tax etc.). |
| Round order total amount<br><br> [](http://localhost:1242/Admin/Currency/Edit/5) | Specifies whether to round the order total amount (*cash rounding*). This setting is only effective if currency rounding is enabled for the payment method selected in the checkout. |
| Round to | The nearest multiple of the smallest chosen amount to round the order total to. 0.05 for example will round 9.43 up to 9.45. |
| Rounding rule | The rule for rounding the order total amount. The following rules are available:<br><br>- Round midpoint down (e.g. 0.05 rounding: 9.225 will round to 9.20)  <br>- Round midpoint up (e.g. 0.05 rounding: 9.225 will round to 9.25)<br>- Always round down (e.g. 0.05 rounding: 9.24 will round to 9.20)<br>- Always round up (e.g. 0.05 rounding, 9.26 will round to 9.30) |