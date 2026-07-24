# Zahlungsanbieter und Zahlungsarten

> Überblick über die in Smartstore verfügbaren Zahlungsplugins und die von ihnen unterstützten Zahlungsarten.

Smartstore bindet Zahlungsanbieter über eigenständige Plugins ein. Ein Teil dieser stellt eine fest definierte Auswahl an Zahlungsarten bereit. Andere Plugins überlassen die konkrete Auswahl dem angebundenen Zahlungsdienstleister. In diesen Fällen bestimmen unter anderem Händlervertrag, Land, Währung und Kontokonfiguration, welche Zahlungsarten Kunden im Checkout tatsächlich sehen.

{% hint style="info" %}
Die folgende Übersicht beschreibt den Stand vom **Juli 2026**. Zahlungsdienstleister können ihr Angebot unabhängig von Smartstore ändern.
{% endhint %}

## Verfügbare Zahlungsplugins

| Plugin | Zahlungsanbieter | Angebotene Zahlungsarten |
|---|---|---|
| `Smartstore.AmazonPay`<br>![Integriert](https://img.shields.io/badge/Plugin-integriert-2563eb) | Amazon Pay | Amazon Pay |
| `Smartstore.OfflinePayment`<br>![Integriert](https://img.shields.io/badge/Plugin-integriert-2563eb) | Kein externer Zahlungsanbieter | Nachnahme, Rechnung, Zahlung im Ladengeschäft, Vorkasse, manuelle Kreditkartenzahlung, Lastschrift, Zahlung per Bestellnummer |
| `Smartstore.PayPal`<br>![Integriert](https://img.shields.io/badge/Plugin-integriert-2563eb) | PayPal | PayPal, Kauf auf Rechnung, SEPA-Lastschrift, Pay Later, Google Pay, Apple Pay, Kreditkarte, Trustly, Bancontact, BLIK, eps, iDEAL, MyBank, Przelewy24 |
| `Smartstore.Stripe`<br>![Integriert](https://img.shields.io/badge/Plugin-integriert-2563eb) | Stripe | Kredit- und Debitkarte, Link, Apple Pay, Google Pay, Amazon Pay, PayPal, Revolut Pay, Cash App Pay, Alipay, WeChat Pay, SEPA-Lastschrift, ACH Direct Debit, Bacs Direct Debit, BECS Direct Debit, iDEAL, Bancontact, EPS, Przelewy24, BLIK, Klarna, Affirm, Afterpay/Clearpay, Pay by Bank, PayNow, PromptPay, Swish, Boleto, Konbini, Multibanco, OXXO, Stablecoin |
| `Smartstore.AdyenPay`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Adyen | Visa, Mastercard, American Express, Discover, Diners Club, JCB, UnionPay, Maestro, Apple Pay, Google Pay, PayPal, Alipay, WeChat Pay, Klarna, Afterpay, Affirm, iDEAL, Bancontact, BLIK, EPS, Trustly, TWINT, MB WAY, MobilePay, Multibanco, Pay by Bank, SEPA-Lastschrift |
| `Smartstore.BilliePay`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Billie | B2B-Rechnungskauf, Banküberweisung, Lastschrift |
| `Smartstore.EasyCredit`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | easyCredit / TeamBank | Ratenkauf, Rechnungskauf |
| `Smartstore.FinApiPay`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | finAPI | SEPA-Überweisung, SEPA-Echtzeitüberweisung |
| `Smartstore.GiroCode`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | EPC-GiroCode / Banking-App | Banküberweisung |
| `Smartstore.IonosPayment`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | IONOS ipayment | Kreditkarte, Lastschrift |
| `Smartstore.KlarnaPay`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Klarna | Lastschrift, Direktüberweisung, Sofortzahlung, Rechnungskauf, Ratenzahlung |
| `Smartstore.MolliePay`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Mollie | Bancontact, Belfius, BLIK, EPS, KBC, Klarna, Apple Pay, Banküberweisung, Kreditkarte, Giftcard, iDEAL, PayPal, Przelewy24, Paysafecard |
| `Smartstore.Payever`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | payever / Openbank / Santander | Santander Direktüberweisung, Openbank später zahlen, Openbank Ratenkauf, Openbank Finanzierung |
| `Smartstore.PostFinance`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | PostFinance / Wallee | PostFinance Pay, TWINT, Visa, Mastercard, Apple Pay, Google Pay, Click to Pay, Rechnung, QR-Rechnung, eBill |
| `Smartstore.Skrill`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Skrill Quick Checkout | Kreditkarte, Alipay, BLIK, Lastschrift, Dankort, ePay, Carte Bleue, Trustly, iDEAL, MB WAY, Multibanco, MyBank, Maestro, Mastercard, EPS, Neteller, Rapid Transfer, Paysafecard, Paysafecash, POLi, PostePay, Przelewy24, Rapyd, Visa, Visa Electron, Skrill Wallet |
| `Smartstore.Wallet`<br>![Kostenpflichtig](https://img.shields.io/badge/Plugin-kostenpflichtig-f59e0b) | Smartstore | Guthabenzahlung |
| `Smartstore.Santander`<br>![Obsolet](https://img.shields.io/badge/Status-obsolet-dc2626) | Santander Consumer Bank | Ratenkauf, Rechnungskauf, Finanzierung |
| `Smartstore.Sofortueberweisung`<br>![Obsolet](https://img.shields.io/badge/Status-obsolet-dc2626) | Klarna / Sofort | Sofortüberweisung |

## Fest integrierte und dynamische Zahlungsarten

Bei Plugins wie **Offline Payment**, **Amazon Pay**, **easyCredit** oder **IONOS ipayment** ist die Auswahl der vom Smartstore-Plugin bereitgestellten Zahlungsarten klar begrenzt. Einzelne Zahlungsarten können im Backend aktiviert, deaktiviert oder durch Regeln eingeschränkt werden.

Die Plugins **Stripe**, **AdyenPay** und **PostFinance** arbeiten dagegen mit einer dynamischen Auswahl. Das Plugin übermittelt die Zahlungsdaten an den Dienstleister; dieser entscheidet anhand der Händlerkonfiguration und der jeweiligen Transaktion, welche Zahlungsarten angeboten werden. Die Tabelle nennt deshalb bei diesen Plugins eine Auswahl grundsätzlich möglicher Zahlungsarten. Sie stellt keine Zusage dar, dass jede Zahlungsart in jedem Shop verfügbar ist.

Auch bei **PayPal**, **Skrill**, **KlarnaPay** und **MolliePay** können einzelne Zahlungsarten trotz vorhandener Unterstützung fehlen. Typische Ursachen sind:

- die Zahlungsart wurde im Händlerkonto nicht freigeschaltet,
- Land oder Währung werden nicht unterstützt,
- der Bestellwert liegt außerhalb der zulässigen Grenzen,
- der Kunde erfüllt die Voraussetzungen des Zahlungsdienstleisters nicht,
- für die Zahlungsart ist ein zusätzlicher Vertrag erforderlich.

## Interne und offline abgewickelte Zahlungen

Nicht jedes Zahlungsplugin bindet einen externen Zahlungsdienstleister ein. `Smartstore.OfflinePayment` stellt klassische, vom Händler selbst abgewickelte Zahlungsarten bereit. Dazu gehören beispielsweise Vorkasse, Rechnung und Nachnahme.

`Smartstore.Wallet` verwaltet dagegen ein internes Kundenguthaben. Kunden können dieses Guthaben zur vollständigen oder teilweisen Bezahlung einer Bestellung einsetzen.

`Smartstore.GiroCode` ist keine eigenständige Checkout-Zahlungsart. Das Plugin erzeugt einen standardisierten QR-Code mit den Überweisungsdaten. Der Kunde scannt den Code mit einer kompatiblen Banking-App und führt die Überweisung dort aus.

## Besonderheiten einzelner Plugins

- Bei **PayPal** hängt die Verfügbarkeit einzelner Zahlungsarten vom PayPal-Konto, Land und der verwendeten Währung ab.
- **PostFinance** lädt die Zahlungsarten aus der PostFinance-Konfiguration. Checkout Flex kann weitere Akzeptanzpartner und Zahlungsarten verwenden.
- Bei **Skrill** hängt die Verfügbarkeit vom Händlerkonto und Land ab.
- **Billie** bietet einen B2B-Rechnungskauf. Banküberweisung und Lastschrift dienen dabei als Abwicklungsarten.
- Bei **MolliePay** hängt die Verfügbarkeit vom Mollie-Profil ab.

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

- [Stripe: unterstützte Zahlungsarten](https://docs.stripe.com/payments/payment-methods)
- [Adyen: Zahlungsarten](https://docs.adyen.com/payment-methods/)
- [PostFinance: Checkout für Onlineshops](https://www.postfinance.ch/de/unternehmen/produkte/zahlungsverkehr/zahlungen-einziehen/onlineshop.html)
- [Mollie: Zahlungsarten](https://docs.mollie.com/docs/payment-methods)
- [Smartstore: aktuelle Plugins](https://marketplace.smartstore.com/de/all-modules/)
