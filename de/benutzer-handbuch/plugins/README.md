---
icon: puzzle-piece
---

# Plugins

Plugins erweitern Smartstore um zusätzliche Funktionen, Integrationen und Zahlungs-, Versand- oder Marketingdienste. Welche Plugins verfügbar sind und ob dafür eine Lizenz erforderlich ist, hängt von der eingesetzten Smartstore-Edition und gegebenenfalls einem Vertrag mit einem externen Anbieter ab.

## Plugins nutzen, installieren und verwalten

Neue Plugins erhalten Sie je nach Angebot über den [Smartstore Community & Marketplace](../../loslegen/community-marketplace.md), direkt von Smartstore oder von einem Drittanbieter. Eine Schritt-für-Schritt-Anleitung finden Sie unter [Plugins installieren](plugins-installieren.md).

Installierte Plugins aktivieren, konfigurieren, aktualisieren oder entfernen Sie in der Administration. Weitere Hinweise dazu finden Sie unter [Plugins verwalten](plugins-verwalten.md).

## Plugin-Gruppen

Die Plugins sind nach Funktionsbereichen gegliedert, ähnlich der Struktur im Smartstore-Backend. Hier gelangen Sie direkt zur [alphabetisch sortierten Liste](#plugins-von-a-bis-z).

### Administration

Plugins für administrative Abläufe, Nummernformate und die Auswertung von Suchvorgängen.

* [OrderNumberFormatter (Nummernkreis-Formatierer)](#ordernumberformatter-nummernkreis-formatierer)
* [SearchLog (Suchprotokollierung)](#searchlog-suchprotokollierung)

### Analysen

Plugins zur Erfassung, Auswertung und Visualisierung von Besucher- und Shopdaten.

* [ETracker](#etracker)
* [Google.Analytics](#googleanalytics)

### B2B

Funktionen für Freigabeprozesse und besondere Anforderungen im Geschäftskundenbereich.

* [CartApproval (Warenkorb Genehmigungen)](#cartapproval-warenkorb-genehmigungen)

### Content-Management

Plugins zur Erstellung, Pflege und Präsentation von Inhalten und Medien.

* [Blog](#blog)
* [ContentSlider](#contentslider)
* [Faq](#faq)
* [FileManager](#filemanager)
* [Forums](#forums)
* [MediaEditor.Pixlr (Pixlr Medien-Editor)](#mediaeditorpixlr-pixlr-medien-editor)
* [MediaManager](#mediamanager)
* [MegaMenu](#megamenu)
* [News](#news)
* [PageBuilder](#pagebuilder)
* [Polls (Umfragen)](#polls-umfragen)
* [RemoveBadge](#removebadge)
* [Timeline](#timeline)

### Daten

Schnittstellen und Exportfunktionen für strukturierte Produkt-, Auftrags- und Katalogdaten.

* [BMEcat (Datenaustausch)](#bmecat-datenaustausch)
* [CommonExportProviders (Datenexporte)](#commonexportproviders-datenexporte)
* [PdfExport](#pdfexport)

### Entwicklung

Werkzeuge und Schnittstellen für Entwicklung, Integration und Automatisierung.

* [DevTools](#devtools)
* [WebApi](#webapi)

### Künstliche Intelligenz (KI)

KI-Funktionen und Anbieteranbindungen für die automatisierte Erstellung und Verarbeitung von Inhalten.

* [AI (Smartstore KI Basis-Plugin)](#ai-smartstore-ki-basis-plugin)
* [ChatGPT (OpenAI ChatGPT)](#chatgpt-openai-chatgpt)
* [Claude (Anthropic Claude)](#claude-anthropic-claude)
* [DeepSeek](#deepseek)
* [Google.Gemini](#googlegemini)
* [Ollama (KI-Provider)](#ollama-ki-provider)

### Marketing

Funktionen für Reichweite, Kundenansprache, Produktempfehlungen und externe Marketingdienste.

* [AddToAny](#addtoany)
* [AttributeRules (Regeln für Produktattribute)](#attributerules-regeln-für-produktattribute)
* [BeezUp (BeezUP Feed)](#beezup-beezup-feed)
* [Billiger](#billiger)
* [Botsonic](#botsonic)
* [Brevo (E-Mail-Synchronisierung)](#brevo-e-mail-synchronisierung)
* [cXmlPunchout](#cxmlpunchout)
* [EmailReminder (E-Mail-Erinnerung)](#emailreminder-e-mail-erinnerung)
* [Google.MerchantCenter (Google Merchant Center Feed)](#googlemerchantcenter-google-merchant-center-feed)
* [Google.Remarketing](#googleremarketing)
* [Guenstiger (Guenstiger Feed)](#guenstiger-guenstiger-feed)
* [Idealo (Idealo Feed)](#idealo-idealo-feed)
* [MailChimp (E-Mail Synchronisierung)](#mailchimp-e-mail-synchronisierung)
* [PersonalPromo (Personalisierte Produktempfehlungen)](#personalpromo-personalisierte-produktempfehlungen)

### Mobil

Anbindungen für mobile Kommunikationsdienste.

* [Clickatell (Clickatell SMS-Anbieter)](#clickatell-clickatell-sms-anbieter)

### Performance

Plugins zur Beschleunigung, Skalierung und Optimierung der Storefront und ihrer Medien.

* [Azure (Microsoft Azure Services)](#azure-microsoft-azure-services)
* [MegaSearch](#megasearch)
* [MegaSearchPlus](#megasearchplus)
* [OutputCache (Ausgabecache)](#outputcache-ausgabecache)
* [Redis](#redis)
* [TinyImage](#tinyimage)

### Recht

Plugins zur Unterstützung rechtlicher Informations-, Datenschutz- und Kennzeichnungspflichten.

* [GDPR (DSGVO)](#gdpr-dsgvo)
* [GPSR (Allgemeine Produktsicherheitsverordnung)](#gpsr-allgemeine-produktsicherheitsverordnung)
* [TrustedShops (Trusted Shops Widgets)](#trustedshops-trusted-shops-widgets)
* [Warranty (EU-Garantiekennzeichnung)](#warranty-eu-garantiekennzeichnung)
* [Withdrawal (Vertragswiderruf von Bestellungen)](#withdrawal-vertragswiderruf-von-bestellungen)

### Sicherheit

Plugins zum Schutz vor Bots sowie zur geografischen oder netzwerkbasierten Zugriffskontrolle.

* [Apple.Auth (Apple Login)](#appleauth-apple-login)
* [CaptchaFox (CaptchaFox CAPTCHA)](#captchafox-captchafox-captcha)
* [Facebook.Auth (Facebook Login)](#facebookauth-facebook-login)
* [FriendlyCaptcha](#friendlycaptcha)
* [GeoBlocker](#geoblocker)
* [Google.Auth (Google Login)](#googleauth-google-login)
* [Microsoft.Auth (Microsoft Login)](#microsoftauth-microsoft-login)
* [Twitter.Auth (X Login)](#twitterauth-x-login)

### Steuern

Standardanbieter zur Steuerberechnung in Smartstore.

* [Tax (Standard-Steuerberechnung)](#tax-standard-steuerberechnung)

### Suchmaschinenoptimierung (SEO)

Werkzeuge für Weiterleitungen, URL-Migrationen und den Erhalt bestehender Suchmaschinenverweise.

* [BizUrlMapper (SmartStore.biz URL Mapper)](#bizurlmapper-smartstorebiz-url-mapper)
* [LegacyUrlRewriter](#legacyurlrewriter)
* [UrlRewriter](#urlrewriter)

### Verkauf

Funktionen für Preisgestaltung, Schnellbestellungen und die Anbindung von Beschaffungssystemen.

* [DependingPrices (Preis-Abhängigkeiten)](#dependingprices-preis-abhängigkeiten)
* [DirectOrder (Direktbestellung)](#directorder-direktbestellung)
* [Oci](#oci)
* [OpenTrans (OpenTrans Export)](#opentrans-opentrans-export)

### Versand

Versandkostenberechnung und Standardanbieter für unterschiedliche Versandmodelle.

* [DimensionPricing (Versandkosten nach Maß)](#dimensionpricing-versandkosten-nach-maß)
* [Shipping (Versandarten)](#shipping-versandarten)
* [ShippingByWeight (Versand nach Gewicht)](#shippingbyweight-versand-nach-gewicht)

### Zahlung

Zahlungsarten und Zahlungsdienstleister für unterschiedliche Märkte und Geschäftsmodelle.

* [AdyenPay](#adyenpay)
* [AmazonPay](#amazonpay)
* [BilliePay](#billiepay)
* [EasyCredit](#easycredit)
* [GiroCode](#girocode)
* [IdealPayment](#idealpayment)
* [IonosPayment (ipayment Zahlungsarten)](#ionospayment-ipayment-zahlungsarten)
* [KlarnaPay](#klarnapay)
* [MolliePay](#molliepay)
* [OfflinePayment (Offline Zahlungsarten)](#offlinepayment-offline-zahlungsarten)
* [Payever](#payever)
* [PayPal](#paypal)
* [PostFinance](#postfinance)
* [Skrill](#skrill)
* [Sofortueberweisung](#sofortueberweisung)
* [Stripe](#stripe)
* [Wallet (Guthabenkonto)](#wallet-guthabenkonto)

## Plugins von A bis Z

### AddToAny

**Kostenpflichtig:** Ja

Ergänzt Seiten um Social-Sharing-Schaltflächen des Dienstes [AddToAny](https://www.addtoany.com/). Kunden können Inhalte und Produkte über verschiedene soziale Netzwerke und Kommunikationsdienste teilen.

{% hint style="info" %}
**Wichtigste Features**

* Sharing-Buttons
* Auswahl und Konfiguration der Dienste
* Storefront-Einbindung
* anpassbare Darstellung und Position.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [AddToAny](addtoany.md).

### AdyenPay

**Kostenpflichtig:** Ja

Integriert die [Adyen](https://www.adyen.com/)-Zahlungsplattform in den Smartstore-Checkout. Das Plugin verarbeitet die Zahlungsinitialisierung, die sichere Übergabe an Adyen sowie asynchrone Statusmeldungen über Webhooks.

{% hint style="info" %}
**Wichtigste Features**

* Adyen-Checkout
* Test- und Livebetrieb
* API-, Client- und HMAC-Schlüssel
* Merchant-Account-Konfiguration
* Webhook-Verarbeitung
* vollständige und teilweise Erstattungen
* konfigurierbare feste oder prozentuale Zahlungsgebühren
* optionales Transaktionsprotokoll.
{% endhint %}

### AI (Smartstore KI Basis-Plugin)

**Kostenpflichtig:** Ja

Bildet die gemeinsame KI-Infrastruktur für Smartstore. Das Plugin stellt Oberflächen, Dienste und Erweiterungspunkte bereit, die von konkreten Modell-Providern wie ChatGPT, Claude, Gemini, DeepSeek oder Ollama genutzt werden.

{% hint style="info" %}
**Wichtigste Features**

* zentrale KI-Konfiguration
* Provider-Abstraktion
* Streaming von Antworten
* wiederverwendbare KI-Funktionen für Administrations- und Inhaltsprozesse
* Auswahl des aktiven Modells.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Smartstore AI](ai.md).

### AmazonPay

**Kostenpflichtig:** Nein

Ermöglicht Anmeldung und Bezahlung mit [Amazon Pay](https://pay.amazon.com/). Kunden können bei Amazon hinterlegte Adress- und Zahlungsinformationen im Checkout verwenden.

{% hint style="info" %}
**Wichtigste Features**

* Login mit Amazon
* Amazon-Pay-Checkout
* Übernahme von Liefer- und Zahlungsdaten
* Zahlungsstatus und Rückmeldungen
* Sandbox- und Produktivkonfiguration.
{% endhint %}

### Apple.Auth (Apple Login)

**Kostenpflichtig:** Nein

Ermöglicht Kunden die Registrierung und Anmeldung mit ihrer Apple-ID. Das Plugin ergänzt die externe Authentifizierung von Smartstore um [„Mit Apple anmelden“](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple).

{% hint style="info" %}
**Wichtigste Features**

* OAuth/OpenID-basierter Login
* Verknüpfung mit Kundenkonten
* Konfiguration von Apple-Client und Schlüsseln
* Rückleitung in den Shop nach erfolgreicher Anmeldung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Apple-Anmeldung](auth/apple-auth.md).

### AttributeRules (Regeln für Produktattribute)

**Kostenpflichtig:** Ja

Steuert die Sichtbarkeit von Produktattributen anhand definierter Bedingungen. Damit lassen sich komplexe Konfiguratoren aufbauen, bei denen Folgeoptionen nur bei passenden vorherigen Eingaben erscheinen.

{% hint style="info" %}
**Wichtigste Features**

* bedingte Attributanzeige
* Regeln auf Basis anderer Attributwerte
* mehrere Bedingungen
* dynamische Aktualisierung der Produktauswahl
* übersichtlichere Produktkonfiguration.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [AttributeRules](attributerules-regeln-fur-produktattribute.md).

### Azure (Microsoft Azure Services)

**Kostenpflichtig:** Ja

Aktiviert einen Dateisystem-Provider für [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs/). Medien und andere unterstützte Dateien können damit außerhalb des lokalen Webservers in einem Azure-Container gespeichert werden.

{% hint style="info" %}
**Wichtigste Features**

* Azure-Blob-Speicher
* konfigurierbarer Container und Endpunkt
* Auslagerung von Mediendateien
* Nutzung über Smartstores abstrahiertes Dateisystem.
{% endhint %}

### BeezUp (BeezUP Feed)

**Kostenpflichtig:** Ja

Exportiert Produktdaten für die Multichannel-Plattform [BeezUP](https://www.beezup.com/). Der Katalog kann als CSV- oder XML-Feed für angeschlossene Marktplätze und Preisportale bereitgestellt werden.

{% hint style="info" %}
**Wichtigste Features**

* CSV- und XML-Produktfeeds
* BeezUP-spezifische Feldaufbereitung
* konfigurierbarer Export
* wiederholbare Feed-Erzeugung.
{% endhint %}

### BilliePay

**Kostenpflichtig:** Ja

Bindet [Billie](https://www.billie.io/) als B2B-Zahlungsanbieter ein. Geschäftskunden können – nach erfolgreicher Prüfung durch Billie – auf Rechnung bestellen. Das Plugin übermittelt dazu Kunden-, Firmen-, Warenkorb- und Bestelldaten an den Anbieter.

{% hint style="info" %}
**Wichtigste Features**

* B2B-Kauf auf Rechnung
* Billie-Checkout-Session
* Sandbox- und Produktivbetrieb
* Autorisierung der Zahlung
* nachgelagerte Aktivierung beziehungsweise Capture
* Stornierung/Void
* Webhook-Verarbeitung
* konfigurierbare Zahlungsgebühren
* optionales Webhook-Protokoll.
{% endhint %}

### Billiger

**Kostenpflichtig:** Ja

Stellt Produktdaten für [billiger.de](https://www.billiger.de/) bereit und unterstützt die Erfolgsmessung vermittelter Verkäufe. Das Plugin verbindet damit Katalogexport und Sales-Tracking.

{% hint style="info" %}
**Wichtigste Features**

* billiger.de-XML-Feed
* Produkt-, Preis- und Verfügbarkeitsdaten
* Conversion-/Sales-Tracking
* konfigurierbare Händlerkennung.
{% endhint %}

### BizUrlMapper (SmartStore.biz URL Mapper)

**Kostenpflichtig:** Ja

Leitet alte, statische URLs aus SmartStore.biz-Installationen auf die entsprechenden neuen Smartstore-Ziele um. Das erleichtert Migrationen und bewahrt bestehende Links sowie Suchmaschinenrankings.

{% hint style="info" %}
**Wichtigste Features**

* Erkennung historischer SmartStore.biz-URL-Muster
* Weiterleitung auf neue Produkt-, Kategorie- und Inhaltsseiten
* SEO-freundliche Redirects
* Migrationsunterstützung ohne manuelle Einzelregeln.
{% endhint %}

### Blog

**Kostenpflichtig:** Ja

Ergänzt den Shop um einen redaktionellen Blog. Beiträge können veröffentlicht, kategorisiert beziehungsweise verschlagwortet und für Kundendialog und Content-Marketing genutzt werden.

{% hint style="info" %}
**Wichtigste Features**

* Blogbeiträge und Veröffentlichungssteuerung
* Kommentare und Moderation
* RSS-/Feed-Unterstützung
* SEO-freundliche Detailseiten
* Store- und Sprachbezug.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Smartstore-Blog](blog.md).

### BMEcat (Datenaustausch)

**Kostenpflichtig:** Ja

Unterstützt den Austausch von Produkt- und Katalogdaten im standardisierten [BMEcat-Format](https://www.bme.de/services/bmecat/). Das Plugin richtet sich insbesondere an B2B-Szenarien und die Übernahme umfangreicher Lieferantenkataloge.

{% hint style="info" %}
**Wichtigste Features**

* BMEcat-Import
* Verarbeitung von Katalog- und Produktstrukturen
* Importkonfiguration und Zuordnung
* Protokollierung des Verarbeitungslaufs.
{% endhint %}

### Botsonic

**Kostenpflichtig:** Ja

Integriert einen [Botsonic](https://botsonic.com/)- beziehungsweise Writesonic-Chatbot in den Shop. Besucher können den extern konfigurierten Assistenten direkt im Storefront nutzen.

{% hint style="info" %}
**Wichtigste Features**

* Einbettung des Chatbot-Widgets
* Bot-/Workspace-Konfiguration
* Storefront-weite Aktivierung
* Anpassung der Darstellung über die Anbieterparameter.
{% endhint %}

### Brevo (E-Mail-Synchronisierung)

**Kostenpflichtig:** Ja

Synchronisiert Newsletter-Abonnenten mit [Brevo](https://www.brevo.com/), vormals Sendinblue. Änderungen an An- und Abmeldungen können zwischen Smartstore und dem E-Mail-Marketing-Dienst abgeglichen werden.

{% hint style="info" %}
**Wichtigste Features**

* Abonnentensynchronisation
* Listen-Zuordnung
* API-Anbindung
* Webhook-Verarbeitung
* Abgleich von An- und Abmeldestatus.
{% endhint %}

### CaptchaFox (CaptchaFox CAPTCHA)

**Kostenpflichtig:** Ja

Integriert [CaptchaFox](https://captchafox.com/) als Bot-Schutz in das modulare CAPTCHA-System von Smartstore. Geschützte Formulare können so automatisierte und missbräuchliche Zugriffe erschweren.

{% hint style="info" %}
**Wichtigste Features**

* CaptchaFox-Widget
* serverseitige Verifikation
* Site-Key- und Secret-Konfiguration
* Nutzung an den von Smartstore unterstützten CAPTCHA-Positionen.
{% endhint %}

### CartApproval (Warenkorb Genehmigungen)

**Kostenpflichtig:** Ja

Ergänzt B2B-Beschaffungsprozesse um Rollen für Einkäufer und Genehmiger. Warenkörbe können vor der eigentlichen Bestellung zur Prüfung und Freigabe weitergeleitet werden.

{% hint style="info" %}
**Wichtigste Features**

* Zuordnung von Einkäufern und Beschaffungsverantwortlichen
* Warenkorb-Freigabeworkflow
* Freigabe und Ablehnung
* Benachrichtigungen
* administrative Konfiguration der Beziehungen.
{% endhint %}

### ChatGPT (OpenAI ChatGPT)

**Kostenpflichtig:** Ja

Verbindet die Smartstore-AI-Funktionen mit [Modellen von OpenAI](https://platform.openai.com/). Für die Nutzung werden eigene API-Zugangsdaten benötigt; die API-Kosten sind nicht in der Pluginlizenz enthalten.

{% hint style="info" %}
**Wichtigste Features**

* Auswahl unterstützter OpenAI-Modelle
* API-Schlüssel und Endpunktkonfiguration
* Textgenerierung und Chat-Streaming
* Modellparameter und Verbindungstest.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [OpenAI ChatGPT](ai-provider/openai-chatgpt.md).

### Claude (Anthropic Claude)

**Kostenpflichtig:** Ja

Bindet [Claude-Modelle von Anthropic](https://claude.com/platform/api) in die zentrale Smartstore-AI-Schicht ein. Damit stehen die allgemeinen KI-Funktionen des Shops über einen alternativen Cloud-Provider zur Verfügung.

{% hint style="info" %}
**Wichtigste Features**

* Claude-Modellauswahl
* API-Konfiguration
* gestreamte Textantworten
* Providerwechsel über die gemeinsame KI-Infrastruktur.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Anthropic Claude](ai-provider/anthropic-claude.md).

### Clickatell (Clickatell SMS-Anbieter)

**Kostenpflichtig:** Nein

Bindet [Clickatell](https://www.clickatell.com/) als SMS-Dienst ein und versendet Benachrichtigungen zu Bestellungen an die Shopadministration. Für den Versand sind Zugangsdaten und ein kostenpflichtiges Clickatell-Konto erforderlich.

{% hint style="info" %}
**Wichtigste Features**

* SMS-Benachrichtigungen bei Bestellungen
* konfigurierbare Empfänger- und Zugangsdaten
* Testversand
* Anbindung an den Smartstore-Nachrichtenfluss.
{% endhint %}

### CommonExportProviders (Datenexporte)

**Kostenpflichtig:** Ja

Stellt allgemeine CSV- und XML-Exportprovider für zentrale Shopdaten bereit. Die Exporte können für Datenaustausch, Analyse und nachgelagerte Verarbeitung verwendet werden.

{% hint style="info" %}
**Wichtigste Features**

* Export von Produkten, Kategorien, Herstellern, Kunden, Bestellungen, Warenkorbpositionen und Newsletter-Abonnenten
* CSV und XML
* Feld- und Kontextverarbeitung
* Einbindung in das Smartstore-Exportsystem.
{% endhint %}

### ContentSlider

**Kostenpflichtig:** Ja

Stellt animierte Inhalts-Slider für aufmerksamkeitsstarke Storefront-Bereiche bereit. Bilder, Texte, Links und Produktbezüge lassen sich zu wechselnden Slides kombinieren.

{% hint style="info" %}
**Wichtigste Features**

* mehrere Slides und Übergänge
* zeitliche beziehungsweise sortierte Ausspielung
* responsive Darstellung
* Verlinkungen und Call-to-Action-Inhalte
* konfigurierbare Platzierung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Content Slider](content-slider.md).

### cXmlPunchout

**Kostenpflichtig:** Ja

Bindet Smartstore über [cXML PunchOut](https://www.cxml.org/index.html) an externe E-Procurement-Systeme an. Geschäftskunden starten aus ihrer Beschaffungssoftware eine Shopsitzung und übertragen den zusammengestellten Warenkorb zurück.

{% hint style="info" %}
**Wichtigste Features**

* PunchOut-Setup und Authentifizierung
* Übernahme externer Sitzungsdaten
* Warenkorb-Rückgabe per cXML
* kundenspezifische Konfiguration
* B2B-Beschaffungsintegration.
{% endhint %}

### DeepSeek

**Kostenpflichtig:** Ja

Bindet [DeepSeek-Modelle](https://api-docs.deepseek.com/) als KI-Provider ein. Bestehende Smartstore-AI-Funktionen können damit über die DeepSeek-Schnittstelle ausgeführt werden.

{% hint style="info" %}
**Wichtigste Features**

* Provider- und Modellkonfiguration
* API-Zugang
* Chat- und Textgenerierung
* Streaming
* Integration in die zentrale Modellauswahl.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [DeepSeek](ai-provider/deepseek.md).

### DependingPrices (Preis-Abhängigkeiten)

**Kostenpflichtig:** Ja

Ermöglicht kontextabhängige Produktpreise über die Standardpreislogik hinaus. Preise können insbesondere nach Kundengruppe, Sprache, Store oder individueller Kundennummer differenziert werden.

{% hint style="info" %}
**Wichtigste Features**

* Preise nach Kundengruppe
* Store- und Sprachbezug
* kundennummernspezifische Preise
* Verwaltungsoberfläche für Preisdatensätze
* Priorisierung passender Regeln.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [DependingPrices](dependingprices.md).

### DevTools

**Kostenpflichtig:** Nein

Stellt Diagnose- und Entwicklungswerkzeuge für Entwickler und Administratoren bereit. Im Mittelpunkt steht die Laufzeit- und Performanceanalyse einer Smartstore-Installation.

{% hint style="info" %}
**Wichtigste Features**

* MiniProfiler-Integration
* SQL- und Request-Diagnose
* konfigurierbare Profiler-Anzeige
* Hilfen zum Analysieren von Checkout- und Laufzeitprozessen.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Developer Tools](devtools.md).

### DimensionPricing (Versandkosten nach Maß)

**Kostenpflichtig:** Ja

Berechnet Versandkosten anhand von Abmessungen und Gewicht. Das Plugin eignet sich für sperrige oder individuell verpackte Waren, bei denen eine reine Gewichtsberechnung nicht ausreicht.

{% hint style="info" %}
**Wichtigste Features**

* Berechnung nach Länge, Breite, Höhe und Gewicht
* Dimensions- und Versandvorlagen
* Zuordnung zu Produkten und Sendungen
* Warenkorbprüfung
* eigener Versandkostenprovider.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Versandkosten nach Maß](dimension-pricing.md).

### DirectOrder (Direktbestellung)

**Kostenpflichtig:** Ja

Stellt ein Schnellbestellformular für Kunden bereit, die Artikelnummern und Mengen bereits kennen. Besonders im B2B-Geschäft lassen sich größere Bestellungen so ohne Navigation durch den Katalog erfassen.

{% hint style="info" %}
**Wichtigste Features**

* Direkteingabe von Artikelnummer und Menge
* mehrere Positionen
* Produktprüfung und Fehlermeldungen
* Übernahme in den Warenkorb
* konfigurierbarer Zugriff.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [DirectOrder](directorder.md).

### EasyCredit

**Kostenpflichtig:** Ja

Bindet die Zahlungsangebote von [easyCredit](https://partner.easycredit.de/) in den Checkout ein. Das Plugin unterstützt sowohl Ratenkauf als auch – abhängig von Händlervertrag und Konfiguration – Rechnungslösungen.

{% hint style="info" %}
**Wichtigste Features**

* easyCredit-Ratenkauf
* easyCredit-Rechnung
* Finanzierungsprüfung
* Rückmeldung des Zahlungsstatus
* Test- und Produktivkonfiguration.
{% endhint %}

### EmailReminder (E-Mail-Erinnerung)

**Kostenpflichtig:** Ja

Versendet automatisierte Erinnerungs-E-Mails, um Kunden erneut anzusprechen. Unterstützt werden insbesondere Bewertungsanfragen, verlassene Warenkörbe und Hinweise zur Rückkehr in den Shop.

{% hint style="info" %}
**Wichtigste Features**

* mehrere Reminder-Typen
* Zeitverzögerungen und Bedingungen
* E-Mail-Vorlagen
* geplante Verarbeitung
* Aktivierung je Kampagne beziehungsweise Anlass.
{% endhint %}

### ETracker

**Kostenpflichtig:** Ja

Integriert das Tracking-Skript des deutschen Webanalyse-Anbieters [etracker](https://www.etracker.com/) in den Shop. Die tatsächliche Datenerhebung richtet sich nach der etracker- und Consent-Konfiguration.

{% hint style="info" %}
**Wichtigste Features**

* Einbindung des etracker-Codes
* konfigurierbare Accountkennung
* Shop-weite Aktivierung
* Anschluss an Datenschutz- und Einwilligungsmechanismen.
{% endhint %}

### Facebook.Auth (Facebook Login)

**Kostenpflichtig:** Nein

Ermöglicht die Anmeldung im Shop über ein [Facebook-Konto](https://developers.facebook.com/docs/facebook-login/). Vorhandene oder neue Kundenkonten können mit der externen Identität verbunden werden.

{% hint style="info" %}
**Wichtigste Features**

* Facebook-Login
* Kontoverknüpfung
* App-ID- und Secret-Konfiguration
* Übernahme freigegebener Profildaten.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Facebook-Anmeldung](auth/facebook-auth.md).

### Faq

**Kostenpflichtig:** Ja

Stellt einen Bereich für häufig gestellte Fragen bereit. Fragen und Antworten können redaktionell gepflegt, organisiert und im Storefront beziehungsweise auf Smartstore-eigenen Webseiten ausgegeben werden.

{% hint style="info" %}
**Wichtigste Features**

* Verwaltung von Fragen und Antworten
* Sortierung und Gruppierung
* Storefront-Ausgabe
* konfigurierbare Darstellung
* redaktionelle Pflege über die Administration.
{% endhint %}

### FileManager

**Kostenpflichtig:** Ja

Ordnet Dokumente und andere Dateien Produkten zu und stellt sie in konfigurierbaren Produkt-Tabs bereit. Das eignet sich etwa für Datenblätter, Handbücher, Zertifikate und Downloads.

{% hint style="info" %}
**Wichtigste Features**

* Dokumentzuordnung zu Produkten
* eigene Produkt-Tabs
* Downloadlisten
* Verwaltung von Titel, Reihenfolge und Sichtbarkeit
* zentrale Konfiguration.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [File Manager](filemanager.md).

### Forums

**Kostenpflichtig:** Ja

Stellt ein vollständiges Kundenforum innerhalb des Shops bereit. Händler können Foren und Themen organisieren, während Kunden Beiträge verfassen und private Nachrichten austauschen.

{% hint style="info" %}
**Wichtigste Features**

* Foren, Themen und Beiträge
* Moderation
* Suche
* Abonnements und Benachrichtigungen
* private Nachrichten
* Berechtigungs- und Anzeigeeinstellungen.
{% endhint %}

### FriendlyCaptcha

**Kostenpflichtig:** Ja

Bindet [Friendly Captcha](https://friendlycaptcha.com/) als datenschutzorientierten Bot-Schutz ein. Das Plugin verwendet Smartstores allgemeine CAPTCHA-Schnittstelle und kann an unterstützten Formularen aktiviert werden.

{% hint style="info" %}
**Wichtigste Features**

* Friendly-Captcha-Challenge
* serverseitige Validierung
* konfigurierbarer API-Endpunkt und Schlüssel
* zentrale Aktivierung über das CAPTCHA-Framework.
{% endhint %}

### GDPR (DSGVO)

**Kostenpflichtig:** Ja

Unterstützt die Bearbeitung von Datenschutzrechten im Kundenkonto. Kunden können datenschutzbezogene Anfragen anstoßen, die anschließend im Shop nachvollzogen und bearbeitet werden.

{% hint style="info" %}
**Wichtigste Features**

* Anfragen auf Datenauskunft beziehungsweise Datenexport
* Lösch- und Anonymisierungsprozesse
* Kunden-Self-Service
* administrative Prüfung
* Protokollierung des Bearbeitungsstatus.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [DSGVO](dsgvo.md).

### GeoBlocker

**Kostenpflichtig:** Ja

Beschränkt den Zugriff auf den Shop nach Herkunftsland oder IP-Adresse. Damit lassen sich unerwünschte Regionen, einzelne Netze oder konkrete Adressen sperren.

{% hint style="info" %}
**Wichtigste Features**

* Länderblockierung
* IP- und Netzregeln
* Allow-/Deny-Logik
* konfigurierbare Reaktion auf gesperrte Zugriffe
* administrative Regelpflege.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [GeoBlocker](geoblocker.md).

### GiroCode

**Kostenpflichtig:** Ja

Erzeugt einen standardisierten GiroCode als QR-Code mit vorausgefüllten Überweisungsdaten. Kunden scannen ihn mit einer Banking-App und vermeiden die manuelle Eingabe von Empfänger, IBAN, Betrag und Verwendungszweck.

{% hint style="info" %}
**Wichtigste Features**

* EPC-/GiroCode-QR-Code
* automatische Übernahme von Betrag und Bestellbezug
* konfigurierbare Bankverbindung
* Anzeige in Bestell- und Zahlungsinformationen.
{% endhint %}

### Google.Analytics

**Kostenpflichtig:** Nein

Bindet [Google Analytics](https://marketingplatform.google.com/about/analytics/) in den Shop ein und stellt die dafür benötigten Tracking-Skripte im Storefront bereit. Das Plugin dient der Messung von Besuchern, Seitenaufrufen und Commerce-Ereignissen; für die Nutzung wird ein eigenes Google-Analytics-Konto benötigt.

{% hint style="info" %}
**Wichtigste Features**

* konfigurierbare Tracking-ID
* Einbindung des Google-Tags
* E-Commerce-Tracking
* Berücksichtigung der Shop- und Tracking-Konfiguration.
{% endhint %}

### Google.Auth (Google Login)

**Kostenpflichtig:** Nein

Erweitert den Shop um die Anmeldung mit einem [Google-Konto](https://developers.google.com/identity/). Das Plugin reduziert die Hürde bei Registrierung und Login und nutzt Googles externen Authentifizierungsdienst.

{% hint style="info" %}
**Wichtigste Features**

* Google-Login
* Kontoverknüpfung
* OAuth-Client-Konfiguration
* Übernahme freigegebener Identitätsdaten.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Google-Anmeldung](auth/google-auth.md).

### Google.Gemini

**Kostenpflichtig:** Ja

Verbindet Smartstore AI mit den [Gemini-Modellen von Google](https://ai.google.dev/). Das Plugin übernimmt Authentifizierung, Modellwahl und Kommunikation mit dem Google-KI-Dienst.

{% hint style="info" %}
**Wichtigste Features**

* Gemini-Modellauswahl
* API-Schlüssel-Konfiguration
* Textgenerierung und Streaming
* Nutzung über die einheitliche Smartstore-AI-Schnittstelle.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Google Gemini](ai-provider/google-gemini.md).

### Google.MerchantCenter (Google Merchant Center Feed)

**Kostenpflichtig:** Nein

Exportiert Produktdaten in einem für das [Google Merchant Center](https://merchants.google.com/) geeigneten Feed. Damit lassen sich Shopprodukte für Google Shopping und weitere Google-Commerce-Dienste bereitstellen.

{% hint style="info" %}
**Wichtigste Features**

* XML-Produktfeed
* Zuordnung relevanter Produkt- und Preisdaten
* planbare bzw. wiederholbare Exporte
* Feed-URL zur Übernahme durch Google.
{% endhint %}

### Google.Remarketing

**Kostenpflichtig:** Ja

Integriert das [Google-Remarketing-Tag](https://support.google.com/google-ads/answer/2453998?hl=de) in den Shop. Besucher und relevante Seitenkontexte können damit – vorbehaltlich Einwilligung und Google-Konfiguration – für Remarketing-Zielgruppen erfasst werden.

{% hint style="info" %}
**Wichtigste Features**

* Remarketing-Skript
* konfigurierbare Google-Kennung
* dynamische Seiten- beziehungsweise Produktparameter
* Anschluss an Consent-Einstellungen.
{% endhint %}

### GPSR (Allgemeine Produktsicherheitsverordnung)

**Kostenpflichtig:** Ja

Erweitert Produktinformationen zur Unterstützung der EU-Produktsicherheitsverordnung (GPSR). Sicherheits- und Herstellerinformationen können zentral gepflegt und Produkten zugeordnet werden.

{% hint style="info" %}
**Wichtigste Features**

* wiederverwendbare Textblöcke
* Zuordnung zu Produkten
* Angaben zu Hersteller, Verantwortlichem und Sicherheit
* Storefront-Ausgabe
* zentrale Verwaltung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Produktsicherheitsverordnung (GPSR)](produktsicherheitsverordnung-gpsr.md).

### Guenstiger (Guenstiger Feed)

**Kostenpflichtig:** Ja

Exportiert Produkte im von [guenstiger.de](https://www.guenstiger.de/) erwarteten Feedformat. So können Preise, Verfügbarkeiten und Produktinformationen im Preisvergleich veröffentlicht werden.

{% hint style="info" %}
**Wichtigste Features**

* CSV-Produktfeed
* portalspezifische Felder
* Preis- und Versandinformationen
* konfigurierbare und wiederholbare Exportausgabe.
{% endhint %}

### Idealo (Idealo Feed)

**Kostenpflichtig:** Ja

Stellt einen auf [idealo](https://www.idealo.de/) zugeschnittenen Produktfeed bereit. Er übermittelt die für das Preisportal benötigten Angebots-, Preis- und Verfügbarkeitsinformationen.

{% hint style="info" %}
**Wichtigste Features**

* idealo-CSV-Export
* Produkt- und Angebotsdaten
* Preis, Versand und Lieferbarkeit
* Einbindung in das Smartstore-Exportsystem.
{% endhint %}

### IdealPayment

**Kostenpflichtig:** Ja

Integriert [iDEAL](https://www.ideal.nl/en/businesses/offer-ideal/) als niederländisches Online-Banking-Zahlungsverfahren.

{% hint style="info" %}
**Wichtigste Features**

* iDEAL-Zahlungen
* Weiterleitung zum Zahlungsdienst
* Rückleitung in den Shop
* Statusverarbeitung.
{% endhint %}

### IonosPayment (ipayment Zahlungsarten)

**Kostenpflichtig:** Ja

Integriert [IONOS ipayment](https://www.ionos.de/eshop-loesungen/ipayment) für Kreditkarten- und Lastschriftzahlungen. Die Zahlungsdaten werden über die Schnittstellen des Dienstleisters verarbeitet und der Bestellung zugeordnet.

{% hint style="info" %}
**Wichtigste Features**

* Kreditkarte
* Lastschrift
* getrennte Provider-Konfiguration
* Transaktionsstatus
* Test- und Livebetrieb.
{% endhint %}

### KlarnaPay

**Kostenpflichtig:** Ja

Integriert [Klarna-Zahlungen](https://www.klarna.com/) über die Klarna-Payments-Schnittstelle. Das Plugin erstellt Klarna-Sessions, verarbeitet die Autorisierung im Checkout und ordnet die Klarna-Bestellung der Smartstore-Bestellung zu.

{% hint style="info" %}
**Wichtigste Features**

* Klarna-Payments-Checkout
* Test- und Produktivumgebung
* automatische oder manuelle Zahlungserfassung
* vollständiges und teilweises Capture
* vollständige und teilweise Erstattungen
* Aktualisierung von Bestellpositionen und Beträgen
* Debug-Protokoll
* konfigurierbare Zahlungsgebühren.
{% endhint %}

### LegacyUrlRewriter

**Kostenpflichtig:** Nein

Leitet alte URLs eines Vorgängersystems auf die passenden neuen Smartstore-Adressen um. Es wurde für konkrete Migrationsanforderungen entwickelt und schützt bestehende Links sowie Suchmaschinenrankings.

{% hint style="info" %}
**Wichtigste Features**

* Weiterleitung alter URL-Strukturen
* regel- oder musterbasierte Zielermittlung
* permanente Redirects
* Unterstützung bei Shopmigrationen
* Vermeidung toter Links.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [LegacyUrlRewriter](legacyurlrewriter.md).

### MailChimp (E-Mail Synchronisierung)

**Kostenpflichtig:** Ja

Synchronisiert Kunden und Newsletter-Daten mit [Mailchimp](https://mailchimp.com/). Das Plugin verbindet Smartstore-Adressbestände mit den Zielgruppen- und Kampagnenfunktionen des externen Dienstes.

{% hint style="info" %}
**Wichtigste Features**

* Kunden- und Abonnentensynchronisation
* Audience-/Listen-Zuordnung
* API-Anbindung
* Webhooks
* Statusabgleich bei An- und Abmeldungen.
{% endhint %}

### MediaEditor.Pixlr (Pixlr Medien-Editor)

**Kostenpflichtig:** Ja

Bindet den [Pixlr-Bildeditor](https://pixlr.com/) in den MediaManager ein. Bilder können aus der Smartstore-Medienverwaltung heraus bearbeitet und anschließend wieder im Shop verwendet werden.

{% hint style="info" %}
**Wichtigste Features**

* Start des Pixlr-Editors aus der Medienverwaltung
* Bildbearbeitung ohne lokalen Download
* Rückgabe beziehungsweise Speichern bearbeiteter Medien
* konfigurierbare Pixlr-Anbindung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Pixlr](pixlr.md).

### MediaManager

**Kostenpflichtig:** Ja

Erweitert die Medienverwaltung um eine leistungsfähige Explorer-Oberfläche. Redakteure können Mediendateien komfortabel durchsuchen, organisieren und für Inhalte auswählen.

{% hint style="info" %}
**Wichtigste Features**

* Ordner- und Dateiansicht
* Upload und Organisation
* Suche und Auswahl
* Vorschauen und Metadaten
* Integration in medienbezogene Editorfelder.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Medien-Manager](mediamanager.md).

### MegaMenu

**Kostenpflichtig:** Ja

Ersetzt die normale Hauptnavigation durch ein umfangreich konfigurierbares Mega-Menü. Neben Kategorien können redaktionelle Inhalte, Bilder, Links und mehrspaltige Layouts eingebunden werden.

{% hint style="info" %}
**Wichtigste Features**

* mehrspaltige Navigation
* Kategorie- und Linkelemente
* Bilder und Content-Blöcke
* responsive Ausgabe
* individuelle Reihenfolge und Gestaltung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Mega Menu](mega-menu.md).

### MegaSearch

**Kostenpflichtig:** Ja

Ersetzt beziehungsweise ergänzt die Standardsuche durch eine leistungsfähige Lucene-Volltextsuche für den Produktkatalog. Ein eigener Suchindex ermöglicht schnellere und relevantere Ergebnisse bei größeren Sortimenten.

{% hint style="info" %}
**Wichtigste Features**

* Lucene-Index
* Volltextsuche
* Indexaufbau und Aktualisierung
* Relevanz- und Suchkonfiguration
* performante Suche in großen Katalogen.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [MegaSearch](megasearch.md).

### MegaSearchPlus

**Kostenpflichtig:** Ja

Erweitert MegaSearch um zusätzliche Suchfunktionen und Komfortmerkmale. Das Plugin setzt MegaSearch voraus und baut auf dessen Index und Suchpipeline auf.

{% hint style="info" %}
**Wichtigste Features**

* erweiterte Suchlogik
* zusätzliche Optimierungs- und Komfortfunktionen
* Integration in die MegaSearch-Ergebnisse
* gemeinsame Nutzung des Lucene-Indexes.
{% endhint %}

### Microsoft.Auth (Microsoft Login)

**Kostenpflichtig:** Nein

Ermöglicht die Kundenanmeldung mit einem [Microsoft-Konto](https://learn.microsoft.com/en-us/entra/identity-platform/). Das Plugin eignet sich sowohl für private Microsoft-Konten als auch – abhängig von der App-Konfiguration – für unterstützte Organisationskonten.

{% hint style="info" %}
**Wichtigste Features**

* Microsoft-Login
* Kontoverknüpfung
* Client-ID- und Secret-Konfiguration
* standardisierter OAuth-/OpenID-Anmeldeablauf.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Microsoft-Anmeldung](auth/microsoft-auth.md).

### MolliePay

**Kostenpflichtig:** Ja

Bindet [Mollie](https://www.mollie.com/) als Multi-Payment-Service-Provider ein. Das Plugin stellt mehrere Mollie-Zahlungsarten als eigenständige Smartstore-Payment-Provider zur Verfügung und verarbeitet Rückleitungen, Webhooks und Transaktionsstatus zentral.

{% hint style="info" %}
**Wichtigste Features**

* Test- und Live-API-Schlüssel
* Webhook-Verarbeitung
* vollständige und teilweise Erstattungen
* Stornierung noch offener Zahlungen
* feste oder prozentuale Zahlungsgebühren
* optionales Transaktionsprotokoll.
{% endhint %}

### News

**Kostenpflichtig:** Ja

Ergänzt den Shop um einen klassischen Newsbereich für Unternehmens- und Produktmeldungen. News können geplant veröffentlicht und von Kunden kommentiert werden.

{% hint style="info" %}
**Wichtigste Features**

* Newsbeiträge
* Veröffentlichungszeiträume
* Kommentare und Moderation
* Store- und Sprachzuordnung
* Newsübersicht und Detailseiten.
{% endhint %}

### Oci

**Kostenpflichtig:** Ja

Bindet Smartstore über die Open Catalog Interface-Spezifikation an E-Procurement-Systeme an. Ein externer Beschaffungsprozess öffnet den Shop und übernimmt anschließend den zusammengestellten Warenkorb.

{% hint style="info" %}
**Wichtigste Features**

* OCI-Sitzungsübergabe
* kundenspezifische Zugangskonfiguration
* Warenkorb-Rücktransfer
* B2B-Katalogbeschaffung
* zusätzliche strukturierte Exportdaten.
{% endhint %}

### OfflinePayment (Offline Zahlungsarten)

**Kostenpflichtig:** Nein

Stellt klassische Zahlungsarten bereit, die nicht über ein Online-Payment-Gateway abgewickelt werden. Die eigentliche Zahlung oder Prüfung erfolgt außerhalb des Shops.

{% hint style="info" %}
**Wichtigste Features**

* Vorkasse/Überweisung
* Nachnahme
* Zahlung bei Abholung
* Kauf auf Rechnung beziehungsweise manuell abwickelbare Zahlungsarten
* konfigurierbare Hinweise und Zusatzgebühren.
{% endhint %}

### Ollama (KI-Provider)

**Kostenpflichtig:** Ja

Verbindet Smartstore mit einer eigenen [Ollama](https://ollama.com/)-Instanz und ermöglicht dadurch den Einsatz lokal oder selbst gehostet betriebener Sprachmodelle. Der Betreiber behält mehr Kontrolle über Endpunkt, Modelle und Datenfluss.

{% hint style="info" %}
**Wichtigste Features**

* frei konfigurierbarer Ollama-Endpunkt
* Auswahl installierter Modelle
* lokale Textgenerierung
* Streaming
* Nutzung ohne zwingenden externen Cloud-KI-Anbieter.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Ollama](ai-provider/ollama.md).

### OpenTrans (OpenTrans Export)

**Kostenpflichtig:** Ja

Exportiert Bestelldaten im OpenTrans-XML-Format. Dadurch lassen sich Aufträge standardisiert an ERP-, Warenwirtschafts- oder Beschaffungssysteme weitergeben.

{% hint style="info" %}
**Wichtigste Features**

* OpenTrans-1.0-Bestellexport
* strukturierte Kopf-, Kunden- und Positionsdaten
* XML-Ausgabe
* Einbindung in Smartstores Exportpipeline.
{% endhint %}

### OrderNumberFormatter (Nummernkreis-Formatierer)

**Kostenpflichtig:** Ja

Erzeugt Bestellnummern automatisch nach einem frei definierbaren Muster. So können technische IDs durch sprechende, geschäftlich passende Nummernkreise ersetzt oder ergänzt werden.

{% hint style="info" %}
**Wichtigste Features**

* Muster und Platzhalter
* Präfixe und Suffixe
* fortlaufende Nummerierung
* automatische Vergabe im Bestellprozess.
{% endhint %}

### OutputCache (Ausgabecache)

**Kostenpflichtig:** Ja

Speichert vollständig gerenderte Storefront-Seiten beziehungsweise Antworten zwischen. Wiederholte Aufrufe können dadurch mit deutlich weniger Datenbank- und Rendering-Aufwand bedient werden.

{% hint style="info" %}
**Wichtigste Features**

* Full-Page-/Response-Caching
* konfigurierbare Cache-Regeln und Laufzeiten
* Ausschlüsse für dynamische Inhalte
* Invalidierung bei relevanten Änderungen.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Output Cache](output-cache-ausgabecache.md).

### PageBuilder

**Kostenpflichtig:** Ja

Ermöglicht die visuelle Erstellung modularer Inhaltsseiten und Landingpages. Inhalte werden als Stories mit wiederverwendbaren Blöcken aufgebaut, ohne dass Redakteure Razor- oder HTML-Templates entwickeln müssen.

{% hint style="info" %}
**Wichtigste Features**

* visuelle Blockbearbeitung
* wiederverwendbare Story-Blöcke
* responsive Layouts
* Vorschau und Veröffentlichung
* Einbindung von Text, Medien, Produkten und dynamischen Shopinhalten.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Page Builder](pagebuilder.md).

### Payever

**Kostenpflichtig:** Ja

Bindet mehrere über [payever](https://payever.de/) bereitgestellte Zahlungsprodukte ein. Der konkrete Umfang hängt vom Händlerkonto ab und umfasst unter anderem Sofortzahlung sowie Zinia-Finanzierungs- und Rechnungslösungen.

{% hint style="info" %}
**Wichtigste Features**

* payever Instant Payment
* Zinia Buy Now Pay Later
* Zinia Ratenzahlung und Finanzierung
* zentrale Zugangskonfiguration
* Status- und Callback-Verarbeitung.
{% endhint %}

### PayPal

**Kostenpflichtig:** Nein

Integriert [PayPal](https://www.paypal.com/de/business) als Online-Zahlungsanbieter in den Smartstore-Checkout. Das Plugin steuert Autorisierung, Rückmeldung und Zuordnung der PayPal-Zahlung zur Bestellung.

{% hint style="info" %}
**Wichtigste Features**

* PayPal-Zahlung im Checkout
* Express-orientierter Zahlungsablauf
* Sandbox- und Live-Modus
* Statusabgleich
* Erstattungs- und Storno-Unterstützung im Rahmen der PayPal-API.
{% endhint %}

### PdfExport

**Kostenpflichtig:** Ja

Exportiert Produktinformationen in ein PDF-Dokument. Damit lassen sich druckbare Produktlisten und einfache Katalogunterlagen aus dem aktuellen Datenbestand erzeugen.

{% hint style="info" %}
**Wichtigste Features**

* Produkt-PDF-Export
* Auswahl von Produktdaten
* druckbares Ausgabeformat
* Nutzung über das zentrale Exportsystem.
{% endhint %}

### PersonalPromo (Personalisierte Produktempfehlungen)

**Kostenpflichtig:** Ja

Ersetzt allgemeine Produkte auf der Startseite durch individuell ausgewählte Empfehlungen. Die Ausspielung orientiert sich am Verhalten und Kontext des jeweiligen Besuchers beziehungsweise Kunden.

{% hint style="info" %}
**Wichtigste Features**

* personalisierte Produktempfehlungen
* dynamische Startseitenbelegung
* konfigurierbare Empfehlungslogik
* Fallback für Besucher ohne ausreichende Historie.
{% endhint %}

### Polls (Umfragen)

**Kostenpflichtig:** Ja

Ermöglicht Kundenumfragen direkt im Storefront. Administratoren definieren Fragen und Antwortoptionen und können die Umfrage zeitlich sowie nach Store steuern.

{% hint style="info" %}
**Wichtigste Features**

* Umfragen mit mehreren Antwortoptionen
* Laufzeitsteuerung
* Abstimmung und Ergebnisanzeige
* Store-Zuordnung
* Schutz vor unerwünschten Mehrfachabstimmungen.
{% endhint %}

### PostFinance

**Kostenpflichtig:** Ja

Integriert Zahlungsdienste der Schweizer [PostFinance AG](https://www.postfinance.ch/en/business/products/payment-collection/online-shop.html). Das Plugin unterstützt die neueren Checkout-Angebote und ordnet Transaktionen zuverlässig Smartstore-Bestellungen zu.

{% hint style="info" %}
**Wichtigste Features**

* PostFinance Checkout Flex
* Checkout All-in-One
* Zahlungsweiterleitung
* Callback- und Statusverarbeitung
* Test- und Produktivkonfiguration.
{% endhint %}

### Redis

**Kostenpflichtig:** Ja

Bindet [Redis](https://redis.io/) als verteilte Infrastrukturkomponente in Smartstore ein. Das ist vor allem für skalierte Installationen mit mehreren Anwendungsinstanzen und gemeinsamem Cache relevant.

{% hint style="info" %}
**Wichtigste Features**

* verteilter Business-Data-Cache
* Redis-basierter Output-Cache-Provider
* Publish/Subscribe
* gemeinsame Cache-Nutzung über mehrere Nodes.
{% endhint %}

### RemoveBadge

**Kostenpflichtig:** Ja

Entfernt den Hinweis „Powered by Smartstore“ aus dem Footer des Shops. Das Plugin nimmt ausschließlich diese Branding-Anpassung vor.

{% hint style="info" %}
**Wichtigste Features**

* Entfernung des Footer-Badges
* keine Template-Anpassung erforderlich
* updatefeste Aktivierung über das Pluginsystem.
{% endhint %}

### SearchLog (Suchprotokollierung)

**Kostenpflichtig:** Ja

Protokolliert Suchbegriffe aus dem Storefront und bereitet häufige Suchanfragen für die Administration auf. Dadurch werden Nachfrage, Suchtrends und Begriffe ohne passende Treffer sichtbar.

{% hint style="info" %}
**Wichtigste Features**

* Liste der Top-Suchbegriffe
* Auswertung nach Store und Sprache
* Treffer- und Nutzungskontrolle
* Grundlage für Sortiments- und Suchoptimierung.
{% endhint %}

### Shipping (Versandarten)

**Kostenpflichtig:** Nein

Enthält die grundlegenden Versandkostenanbieter von Smartstore. Versandkosten können als fester Betrag oder abhängig vom Warenkorbwert berechnet werden.

{% hint style="info" %}
**Wichtigste Features**

* Festpreisversand
* Berechnung nach Bestellsumme
* konfigurierbare Regeln und Zuschläge
* Einbindung in die allgemeine Versandarten- und Länderlogik.
{% endhint %}

### ShippingByWeight (Versand nach Gewicht)

**Kostenpflichtig:** Nein

Berechnet Versandkosten anhand des Gesamtgewichts einer Bestellung. Das Plugin eignet sich für gestaffelte Versandtarife und kann die vorhandenen Versand- und Zielgebietsregeln berücksichtigen.

{% hint style="info" %}
**Wichtigste Features**

* Gewichtsbereiche und Staffelpreise
* feste und variable Kostenanteile
* Einschränkung nach Versandart und Ziel
* Berücksichtigung des Warenkorbgewichts.
{% endhint %}

### Skrill

**Kostenpflichtig:** Ja

Integriert [Skrill Quick Checkout](https://www.skrill.com/en/business/shopping-carts/) als externe Online-Zahlung. Kunden wählen eine vom Skrill-Konto unterstützte Zahlungsart und kehren nach Abschluss in den Shop zurück.

{% hint style="info" %}
**Wichtigste Features**

* Skrill Quick Checkout
* Weiterleitung und Rückkehr
* Händlerkonto-Konfiguration
* Zahlungsstatus und Benachrichtigungen.
{% endhint %}

### Sofortueberweisung

**Kostenpflichtig:** Ja

Stellt [Klarna Pay Now](https://www.klarna.com/), historisch als Sofortüberweisung integriert, als Zahlungsart bereit. Kunden werden durch den Online-Überweisungsprozess geführt und anschließend in den Shop zurückgeleitet.

{% hint style="info" %}
**Wichtigste Features**

* Klarna-Pay-Now-Checkout
* Weiterleitung und Rückkehr
* Statusverarbeitung
* Händlerzugangsdaten
* Test- und Produktivmodus.
{% endhint %}

### Stripe

**Kostenpflichtig:** Nein

Bindet [Stripe](https://stripe.com/de) als Zahlungsdienstleister ein. Kunden können die vom Plugin und vom Stripe-Konto unterstützten Online-Zahlungsarten sicher über Stripe abwickeln.

{% hint style="info" %}
**Wichtigste Features**

* Stripe-Checkout beziehungsweise Payment-Intent-Verarbeitung
* Webhook-Rückmeldungen
* Test- und Live-Modus
* Zahlungsstatus, Storno und Erstattung
* PCI-entlastete Eingabe über Stripe-Komponenten.
{% endhint %}

### Tax (Standard-Steuerberechnung)

**Kostenpflichtig:** Nein

Stellt die Standardverfahren zur Steuerberechnung bereit. Dazu gehören feste Steuersätze und eine Berechnung, die sich nach Region beziehungsweise Steuergebiet richtet.

{% hint style="info" %}
**Wichtigste Features**

* feste Steuersätze
* regionale Steuersätze
* Zuordnung zu Steuerkategorien
* Zusammenspiel mit Kunden-, Adress- und Storekontext.
{% endhint %}

### Timeline

**Kostenpflichtig:** Ja

Erfasst Ereignisse und stellt sie als zeitliche Abfolge dar. Das Plugin kann beispielsweise eine Unternehmens-, Produkt- oder Projektgeschichte visualisieren.

{% hint style="info" %}
**Wichtigste Features**

* Verwaltung von Timeline-Ereignissen
* Datum, Titel, Text und Medien
* chronologische Sortierung
* responsive Storefront-Darstellung
* konfigurierbare Ausgabe.
{% endhint %}

### TinyImage

**Kostenpflichtig:** Ja

Optimiert Bilder für kleinere Dateien und schnellere Storefront-Auslieferung. Das Plugin unterstützt hohe Kompressionsraten und moderne WebP-Ausgabe.

{% hint style="info" %}
**Wichtigste Features**

* Bildkompression
* WebP-Unterstützung
* Optimierung bestehender beziehungsweise neu verarbeiteter Medien
* geringerer Traffic und schnellere Ladezeiten
* Qualitätskonfiguration.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [TinyImage](tinyimage.md).

### TrustedShops (Trusted Shops Widgets)

**Kostenpflichtig:** Ja

Integriert zentrale [Trusted-Shops](https://www.trustedshops.de/)-Bausteine in den Shop. Je nach Konfiguration werden Vertrauenssiegel, Käuferschutz und Kundenbewertungselemente angezeigt.

{% hint style="info" %}
**Wichtigste Features**

* Trustbadge
* Käuferschutz
* Kundenbewertungen
* getrennte Provider-Konfiguration
* Einbindung an passenden Storefront-Positionen.
{% endhint %}

### Twitter.Auth (X Login)

**Kostenpflichtig:** Nein

Bindet [X](https://docs.x.com/overview), vormals Twitter, als externen Login-Anbieter ein. Kunden können ihr X-Konto zur Authentifizierung im Shop verwenden.

{% hint style="info" %}
**Wichtigste Features**

* Anmeldung über X
* Kontoverknüpfung
* API-Schlüssel-Konfiguration
* Verarbeitung der externen Login-Rückmeldung.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [X-Anmeldung](auth/twitter-auth.md).

### UrlRewriter

**Kostenpflichtig:** Ja

Ermöglicht einfache URL-Weiterleitungen und komplexere Rewrite-Regeln. Veraltete oder geänderte Adressen können gezielt auf aktuelle Inhalte gelenkt werden.

{% hint style="info" %}
**Wichtigste Features**

* exakte Redirects
* musterbasierte Rewrite-Regeln
* Verwaltung in der Administration
* permanente oder temporäre Weiterleitungen
* Test und Priorisierung von Regeln.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [UrlRewriter](urlrewriter.md).

### Wallet (Guthabenkonto)

**Kostenpflichtig:** Ja

Stellt ein internes digitales Kundenguthaben als Zahlungsart bereit. Guthabenbewegungen werden nachvollziehbar geführt und können im Checkout zur vollständigen oder anteiligen Zahlung genutzt werden.

{% hint style="info" %}
**Wichtigste Features**

* Kunden-Wallet
* Guthaben und Transaktionshistorie
* Zahlung aus Guthaben
* administrative Buchungen
* Kundenansicht und zentrale Einstellungen.
{% endhint %}

### Warranty (EU-Garantiekennzeichnung)

**Kostenpflichtig:** Ja

Verwaltet und zeigt gesetzlich relevante Hinweise zu Garantien und Gewährleistungen auf Produktseiten an. Das Plugin unterstützt eine konsistente Zuordnung entsprechender Kennzeichnungen zu Produkten.

{% hint style="info" %}
**Wichtigste Features**

* Verwaltung von Garantie-/Gewährleistungslabels
* Produktzuordnung
* Anzeige im Storefront
* zentrale Konfiguration und wiederverwendbare Texte.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [EU-Garantiekennzeichnung](warranty.md).

### WebApi

**Kostenpflichtig:** Nein

Erweitert Smartstore um eine REST-orientierte, auf [OData](https://learn.microsoft.com/en-us/odata/overview) basierende Programmierschnittstelle. Externe Anwendungen können darüber ausgewählte Shopdaten lesen, filtern und – abhängig von Berechtigung und Endpunkt – bearbeiten.

{% hint style="info" %}
**Wichtigste Features**

* OData-Endpunkte
* API-Authentifizierung und Berechtigungen
* Filtern, Sortieren und Paging
* strukturierter Datenaustausch für Integrationen und Automatisierungen.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Web API](webapi.md).

### Withdrawal (Vertragswiderruf von Bestellungen)

**Kostenpflichtig:** Ja

Bildet den vollständigen Lebenszyklus eines Widerrufs zu einer Bestellung ab. Kunden können einen Widerruf einreichen; die Administration prüft, bestätigt und verfolgt die weitere Bearbeitung.

{% hint style="info" %}
**Wichtigste Features**

* Widerrufsantrag im Storefront
* Bezug auf Bestellung und Positionen
* Prüf- und Statusworkflow
* Bestätigungen und Folgeschritte
* administrative Übersicht.
{% endhint %}

Weitere Informationen zur Einrichtung und Verwendung finden Sie in der Dokumentation zum Plugin [Widerruf](withdrawal.md).

## Sie interessieren sich für ein Plugin?

Gerne beraten wir Sie persönlich zu Funktionen, Einsatzmöglichkeiten und Lizenzoptionen. Gemeinsam klären wir, welches Plugin zu Ihren Anforderungen passt, und begleiten Sie auf dem Weg zur passenden Kaufentscheidung.

<a href="https://smartstore.com/de/persoenliche-beratung/" class="button primary">Persönliche Beratung anfragen</a>
