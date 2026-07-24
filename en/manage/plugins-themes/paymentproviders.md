# Payment providers and payment methods

> Overview of the payment plugins available in Smartstore and the payment methods they support.

Smartstore integrates payment providers through standalone plugins. Some of these provide a predefined set of payment methods. Other plugins leave the specific selection to the connected payment service provider. In these cases, factors such as the merchant agreement, country, currency, and account configuration determine which payment methods customers actually see during checkout.

{% hint style="info" %}
The following overview reflects the status as of **July 2026**. Payment service providers may change their offerings independently of Smartstore.
{% endhint %}

## Available payment plugins

| Plugin | Payment provider | Available payment methods |
|---|---|---|
| `Smartstore.AmazonPay`<br>![Included](https://img.shields.io/badge/Plugin-included-2563eb) | Amazon Pay | Amazon Pay |
| `Smartstore.OfflinePayment`<br>![Included](https://img.shields.io/badge/Plugin-included-2563eb) | No external payment provider | Cash on delivery, invoice, payment in store, prepayment, manual credit card payment, direct debit, payment by purchase order number |
| `Smartstore.PayPal`<br>![Included](https://img.shields.io/badge/Plugin-included-2563eb) | PayPal | PayPal, Pay upon Invoice, SEPA Direct Debit, Pay Later, Google Pay, Apple Pay, credit card, Trustly, Bancontact, BLIK, eps, iDEAL, MyBank, Przelewy24 |
| `Smartstore.Stripe`<br>![Included](https://img.shields.io/badge/Plugin-included-2563eb) | Stripe | Credit and debit cards, Link, Apple Pay, Google Pay, Amazon Pay, PayPal, Revolut Pay, Cash App Pay, Alipay, WeChat Pay, SEPA Direct Debit, ACH Direct Debit, Bacs Direct Debit, BECS Direct Debit, iDEAL, Bancontact, EPS, Przelewy24, BLIK, Klarna, Affirm, Afterpay/Clearpay, Pay by Bank, PayNow, PromptPay, Swish, Boleto, Konbini, Multibanco, OXXO, stablecoin |
| `Smartstore.AdyenPay`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Adyen | Visa, Mastercard, American Express, Discover, Diners Club, JCB, UnionPay, Maestro, Apple Pay, Google Pay, PayPal, Alipay, WeChat Pay, Klarna, Afterpay, Affirm, iDEAL, Bancontact, BLIK, EPS, Trustly, TWINT, MB WAY, MobilePay, Multibanco, Pay by Bank, SEPA Direct Debit |
| `Smartstore.BilliePay`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Billie | B2B invoice purchase, bank transfer, direct debit |
| `Smartstore.EasyCredit`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | easyCredit / TeamBank | Installment purchase, invoice purchase |
| `Smartstore.FinApiPay`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | finAPI | SEPA credit transfer, SEPA instant credit transfer |
| `Smartstore.GiroCode`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | EPC GiroCode / banking app | Bank transfer |
| `Smartstore.IonosPayment`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | IONOS ipayment | Credit card, direct debit |
| `Smartstore.KlarnaPay`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Klarna | Direct debit, bank transfer, immediate payment, invoice purchase, installment payment |
| `Smartstore.MolliePay`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Mollie | Bancontact, Belfius, BLIK, EPS, KBC, Klarna, Apple Pay, bank transfer, credit card, gift card, iDEAL, PayPal, Przelewy24, Paysafecard |
| `Smartstore.Payever`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | payever / Openbank / Santander | Santander instant bank transfer, Openbank pay later, Openbank installment purchase, Openbank financing |
| `Smartstore.PostFinance`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | PostFinance / Wallee | PostFinance Pay, TWINT, Visa, Mastercard, Apple Pay, Google Pay, Click to Pay, invoice, QR-bill, eBill |
| `Smartstore.Skrill`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Skrill Quick Checkout | Credit card, Alipay, BLIK, direct debit, Dankort, ePay, Carte Bleue, Trustly, iDEAL, MB WAY, Multibanco, MyBank, Maestro, Mastercard, EPS, Neteller, Rapid Transfer, Paysafecard, Paysafecash, POLi, PostePay, Przelewy24, Rapyd, Visa, Visa Electron, Skrill Wallet |
| `Smartstore.Wallet`<br>![Paid](https://img.shields.io/badge/Plugin-paid-f59e0b) | Smartstore | Store credit payment |
| `Smartstore.Santander`<br>![Obsolete](https://img.shields.io/badge/Status-obsolete-dc2626) | Santander Consumer Bank | Installment purchase, invoice purchase, financing |
| `Smartstore.Sofortueberweisung`<br>![Obsolete](https://img.shields.io/badge/Status-obsolete-dc2626) | Klarna / Sofort | Sofort bank transfer |

## Fixed and dynamic payment methods

For plugins such as **Offline Payment**, **Amazon Pay**, **easyCredit**, and **IONOS ipayment**, the selection of payment methods provided by the Smartstore plugin is clearly defined. Individual payment methods can be enabled, disabled, or restricted by rules in the administration area.

In contrast, the **Stripe**, **AdyenPay**, and **PostFinance** plugins use a dynamic selection. The plugin sends the payment data to the service provider, which determines the payment methods to offer based on the merchant configuration and the specific transaction. For these plugins, the table therefore lists a selection of payment methods that may be available. It does not guarantee that every payment method will be available in every store.

Individual payment methods may also be unavailable with **PayPal**, **Skrill**, **KlarnaPay**, and **MolliePay**, even when they are supported. Typical reasons include:

- The payment method has not been enabled in the merchant account.
- The country or currency is not supported.
- The order value falls outside the permitted limits.
- The customer does not meet the payment service provider's requirements.
- The payment method requires an additional agreement.

## Internally and offline-processed payments

Not every payment plugin connects to an external payment service provider. `Smartstore.OfflinePayment` provides traditional payment methods processed by the merchant, such as prepayment, invoice, and cash on delivery.

`Smartstore.Wallet`, on the other hand, manages internal customer credit. Customers can use this credit to pay for an order in full or in part.

`Smartstore.GiroCode` is not a standalone checkout payment method. The plugin generates a standardized QR code containing the bank transfer details. The customer scans the code with a compatible banking app and completes the transfer there.

## Notes on individual plugins

- With **PayPal**, the availability of individual payment methods depends on the PayPal account, country, and currency used.
- **PostFinance** loads the payment methods from the PostFinance configuration. Checkout Flex can use additional acceptance partners and payment methods.
- With **Skrill**, availability depends on the merchant account and country.
- **Billie** offers B2B invoice purchases. Bank transfer and direct debit are used as settlement methods.
- With **MolliePay**, availability depends on the Mollie profile.

## Obsolete payment plugins

### Santander

The former standalone Santander plugin is no longer included in the current Full Solution and remains at the Smartstore 6.0 release level. The current integration through `Smartstore.Payever` is recommended for Santander.

### Sofort bank transfer

Sofort bank transfer is no longer offered as a standalone payment method. It has been integrated into Klarna's offering. New installations should therefore use `Smartstore.KlarnaPay` or another current Klarna integration.

{% hint style="warning" %}
Do not remove an existing obsolete plugin without checking it first. Verify whether any open or older orders still reference its system name and transaction data.
{% endhint %}

## Further information

For current payment methods and their regional availability, refer directly to the respective payment service providers:

- [Stripe: supported payment methods](https://docs.stripe.com/payments/payment-methods)
- [Adyen: payment methods](https://docs.adyen.com/payment-methods/)
- [PostFinance: Checkout for online shops](https://www.postfinance.ch/en/business/products/payment-collection/online-shop.html)
- [Mollie: payment methods](https://docs.mollie.com/docs/payment-methods)
- [Smartstore: current plugins](https://smartstore.com/en/all-modules/)
