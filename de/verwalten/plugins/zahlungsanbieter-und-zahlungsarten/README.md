# Zahlungsanbieter und Zahlungsarten

> Überblick über die in Smartstore verfügbaren Zahlungsplugins und die von ihnen unterstützten Zahlungsarten.

Smartstore bindet Zahlungsanbieter über eigenständige Plugins ein. Ein Teil dieser stellt eine fest definierte Auswahl an Zahlungsarten bereit. Andere Plugins überlassen die konkrete Auswahl dem angebundenen Zahlungsdienstleister. In diesen Fällen bestimmen unter anderem Händlervertrag, Land, Währung und Kontokonfiguration, welche Zahlungsarten Kunden im Checkout tatsächlich sehen.

{% hint style="info" %}
Die folgende Übersicht beschreibt den Stand vom **Juli 2026**. Zahlungsdienstleister können ihr Angebot unabhängig von Smartstore ändern.
{% endhint %}

## Verfügbare Zahlungsplugins

| Plugin                                                                                                                                                              | Zahlungsanbieter               | Angebotene Zahlungsarten                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><a href="amazon-pay.md"><code>Smartstore.AmazonPay</code></a><br><img src="https://img.shields.io/badge/Plugin-integriert-2563eb" alt="Integriert"></p>          | Amazon Pay                     | Amazon Pay                                                                                                                                                                                                                                                                                                                                                          |
| <p><a href="offlinepayment.md"><code>Smartstore.OfflinePayment</code></a><br><img src="https://img.shields.io/badge/Plugin-integriert-2563eb" alt="Integriert"></p> | Kein externer Zahlungsanbieter | Nachnahme, Rechnung, Zahlung im Ladengeschäft, Vorkasse, manuelle Kreditkartenzahlung, Lastschrift, Zahlung per Bestellnummer                                                                                                                                                                                                                                       |
| <p><a href="paypal.md"><code>Smartstore.PayPal</code></a><br><img src="https://img.shields.io/badge/Plugin-integriert-2563eb" alt="Integriert"></p>                 | PayPal                         | PayPal, Kauf auf Rechnung, SEPA-Lastschrift, Pay Later, Google Pay, Apple Pay, Kreditkarte, Trustly, Bancontact, BLIK, eps, iDEAL, MyBank, Przelewy24                                                                                                                                                                                                               |
| <p><a href="stripe.md"><code>Smartstore.Stripe</code></a><br><img src="https://img.shields.io/badge/Plugin-integriert-2563eb" alt="Integriert"></p>                 | Stripe                         | Kredit- und Debitkarte, Link, Apple Pay, Google Pay, Amazon Pay, PayPal, Revolut Pay, Cash App Pay, Alipay, WeChat Pay, SEPA-Lastschrift, ACH Direct Debit, Bacs Direct Debit, BECS Direct Debit, iDEAL, Bancontact, EPS, Przelewy24, BLIK, Klarna, Affirm, Afterpay/Clearpay, Pay by Bank, PayNow, PromptPay, Swish, Boleto, Konbini, Multibanco, OXXO, Stablecoin |
| <p><code>Smartstore.AdyenPay</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                             | Adyen                          | Visa, Mastercard, American Express, Discover, Diners Club, JCB, UnionPay, Maestro, Apple Pay, Google Pay, PayPal, Alipay, WeChat Pay, Klarna, Afterpay, Affirm, iDEAL, Bancontact, BLIK, EPS, Trustly, TWINT, MB WAY, MobilePay, Multibanco, Pay by Bank, SEPA-Lastschrift                                                                                          |
| <p><code>Smartstore.BilliePay</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                            | Billie                         | B2B-Rechnungskauf, Banküberweisung, Lastschrift                                                                                                                                                                                                                                                                                                                     |
| <p><code>Smartstore.EasyCredit</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                           | easyCredit / TeamBank          | Ratenkauf, Rechnungskauf                                                                                                                                                                                                                                                                                                                                            |
| <p><code>Smartstore.FinApiPay</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                            | finAPI                         | SEPA-Überweisung, SEPA-Echtzeitüberweisung                                                                                                                                                                                                                                                                                                                          |
| <p><code>Smartstore.GiroCode</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                             | EPC-GiroCode / Banking-App     | Banküberweisung                                                                                                                                                                                                                                                                                                                                                     |
| <p><code>Smartstore.IonosPayment</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                         | IONOS ipayment                 | Kreditkarte, Lastschrift                                                                                                                                                                                                                                                                                                                                            |
| <p><code>Smartstore.KlarnaPay</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                            | Klarna                         | Lastschrift, Direktüberweisung, Sofortzahlung, Rechnungskauf, Ratenzahlung                                                                                                                                                                                                                                                                                          |
| <p><code>Smartstore.MolliePay</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                            | Mollie                         | Bancontact, Belfius, BLIK, EPS, KBC, Klarna, Apple Pay, Banküberweisung, Kreditkarte, Giftcard, iDEAL, PayPal, Przelewy24, Paysafecard                                                                                                                                                                                                                              |
| <p><code>Smartstore.Payever</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                              | payever / Openbank / Santander | Santander Direktüberweisung, Openbank später zahlen, Openbank Ratenkauf, Openbank Finanzierung                                                                                                                                                                                                                                                                      |
| <p><code>Smartstore.PostFinance</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                          | PostFinance / Wallee           | PostFinance Pay, TWINT, Visa, Mastercard, Apple Pay, Google Pay, Click to Pay, Rechnung, QR-Rechnung, eBill                                                                                                                                                                                                                                                         |
| <p><code>Smartstore.Skrill</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                               | Skrill Quick Checkout          | Kreditkarte, Alipay, BLIK, Lastschrift, Dankort, ePay, Carte Bleue, Trustly, iDEAL, MB WAY, Multibanco, MyBank, Maestro, Mastercard, EPS, Neteller, Rapid Transfer, Paysafecard, Paysafecash, POLi, PostePay, Przelewy24, Rapyd, Visa, Visa Electron, Skrill Wallet                                                                                                 |
| <p><code>Smartstore.Wallet</code><br><img src="https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b" alt="Kostenpflichtig"></p>                               | Smartstore                     | Guthabenzahlung                                                                                                                                                                                                                                                                                                                                                     |
| <p><code>Smartstore.Santander</code><br><img src="https://img.shields.io/badge/Status-obsolet-dc2626" alt="Obsolet"></p>                                            | Santander Consumer Bank        | Ratenkauf, Rechnungskauf, Finanzierung                                                                                                                                                                                                                                                                                                                              |
| <p><code>Smartstore.Sofortueberweisung</code><br><img src="https://img.shields.io/badge/Status-obsolet-dc2626" alt="Obsolet"></p>                                   | Klarna / Sofort                | Sofortüberweisung                                                                                                                                                                                                                                                                                                                                                   |

## Fest integrierte und dynamische Zahlungsarten

Bei Plugins wie **Offline Payment**, **Amazon Pay**, **easyCredit** oder **IONOS ipayment** ist die Auswahl der vom Smartstore-Plugin bereitgestellten Zahlungsarten klar begrenzt. Einzelne Zahlungsarten können im Backend aktiviert, deaktiviert oder durch Regeln eingeschränkt werden.

Die Plugins **Stripe**, **AdyenPay** und **PostFinance** arbeiten dagegen mit einer dynamischen Auswahl. Das Plugin übermittelt die Zahlungsdaten an den Dienstleister; dieser entscheidet anhand der Händlerkonfiguration und der jeweiligen Transaktion, welche Zahlungsarten angeboten werden. Die Tabelle nennt deshalb bei diesen Plugins eine Auswahl grundsätzlich möglicher Zahlungsarten. Sie stellt keine Zusage dar, dass jede Zahlungsart in jedem Shop verfügbar ist.

Auch bei **PayPal**, **Skrill**, **KlarnaPay** und **MolliePay** können einzelne Zahlungsarten trotz vorhandener Unterstützung fehlen. Typische Ursachen sind:

* die Zahlungsart wurde im Händlerkonto nicht freigeschaltet,
* Land oder Währung werden nicht unterstützt,
* der Bestellwert liegt außerhalb der zulässigen Grenzen,
* der Kunde erfüllt die Voraussetzungen des Zahlungsdienstleisters nicht,
* für die Zahlungsart ist ein zusätzlicher Vertrag erforderlich.

## Interne und offline abgewickelte Zahlungen

Nicht jedes Zahlungsplugin bindet einen externen Zahlungsdienstleister ein. `Smartstore.OfflinePayment` stellt klassische, vom Händler selbst abgewickelte Zahlungsarten bereit. Dazu gehören beispielsweise Vorkasse, Rechnung und Nachnahme.

`Smartstore.Wallet` verwaltet dagegen ein internes Kundenguthaben. Kunden können dieses Guthaben zur vollständigen oder teilweisen Bezahlung einer Bestellung einsetzen.

`Smartstore.GiroCode` ist keine eigenständige Checkout-Zahlungsart. Das Plugin erzeugt einen standardisierten QR-Code mit den Überweisungsdaten. Der Kunde scannt den Code mit einer kompatiblen Banking-App und führt die Überweisung dort aus.

## Besonderheiten einzelner Plugins

* Bei **PayPal** hängt die Verfügbarkeit einzelner Zahlungsarten vom PayPal-Konto, Land und der verwendeten Währung ab.
* **PostFinance** lädt die Zahlungsarten aus der PostFinance-Konfiguration. Checkout Flex kann weitere Akzeptanzpartner und Zahlungsarten verwenden.
* Bei **Skrill** hängt die Verfügbarkeit vom Händlerkonto und Land ab.
* **Billie** bietet einen B2B-Rechnungskauf. Banküberweisung und Lastschrift dienen dabei als Abwicklungsarten.
* Bei **MolliePay** hängt die Verfügbarkeit vom Mollie-Profil ab.

## Obsolete Zahlungsplugins

### Santander

Das frühere eigenständige Santander-Plugin ist nicht mehr Bestandteil der aktuellen Full-Solution und verbleibt auf dem Stand von Smartstore 6.0. Für Santander wird die aktuelle Integration über `Smartstore.Payever` empfohlen.

### Sofortüberweisung

Sofortüberweisung wird nicht mehr als eigenständige Zahlungsart angeboten. Sie wurde in das Klarna-Angebot integriert. Für neue Installationen sollte deshalb `Smartstore.KlarnaPay` oder eine andere aktuelle Klarna-Integration verwendet werden.

{% hint style="warning" %}
Ein vorhandenes obsoletes Plugin sollte nicht ohne vorherige Prüfung entfernt werden. Klären Sie zunächst, ob noch offene oder ältere Bestellungen auf dessen Systemnamen und Transaktionsdaten verweisen.
{% endhint %}

## Weiterführende Informationen

Die aktuellen Zahlungsarten und deren regionale Verfügbarkeit finden Sie direkt bei den jeweiligen Zahlungsdienstleistern:

* [Stripe: unterstützte Zahlungsarten](https://docs.stripe.com/payments/payment-methods)
* [Adyen: Zahlungsarten](https://docs.adyen.com/payment-methods/)
* [PostFinance: Checkout für Onlineshops](https://www.postfinance.ch/de/unternehmen/produkte/zahlungsverkehr/zahlungen-einziehen/onlineshop.html)
* [Mollie: Zahlungsarten](https://docs.mollie.com/docs/payment-methods)
* [Smartstore: aktuelle Plugins](https://marketplace.smartstore.com/de/all-modules/)
