---
icon: puzzle-piece
---

# Plugins

Plugins extend Smartstore with additional features, integrations, and payment, shipping, or marketing services. Availability and licensing depend on the Smartstore edition and, where applicable, on a contract with an external provider.

## Using, Installing, and Managing Plugins

Depending on the offering, you can obtain new plugins through the [Smartstore Community & Marketplace](../../get-started/community-marketplace/README.md), directly from Smartstore, or from a third-party provider. See [Installing Plugins](installing-plugins.md) for step-by-step instructions.

Use the administration area to activate, configure, update, or remove installed plugins. For details, see [Managing Plugins](managing-plugins.md).

## Plugin Groups

The plugins are organized by functional area, similar to the structure of the Smartstore backend. You can also go directly to the [alphabetical list](#plugins-from-a-to-z).

### Administration

Plugins for administrative workflows, number formats, and search analysis.

* [OrderNumberFormatter](#ordernumberformatter)
* [SearchLog](#searchlog)

### Analytics

Plugins for collecting, analyzing, and presenting visitor and shop data.

* [ETracker](#etracker)
* [Google.Analytics](#googleanalytics)

### B2B

Features for approval workflows and business-customer purchasing.

* [CartApproval](#cartapproval)

### Content Management

Plugins for creating, managing, and presenting content and media.

* [Blog](#blog)
* [ContentSlider](#contentslider)
* [Faq](#faq)
* [FileManager](#filemanager)
* [Forums](#forums)
* [MediaEditor.Pixlr](#mediaeditorpixlr)
* [MediaManager](#mediamanager)
* [MegaMenu](#megamenu)
* [News](#news)
* [PageBuilder](#pagebuilder)
* [Polls](#polls)
* [RemoveBadge](#removebadge)
* [Timeline](#timeline)

### Data

Interfaces and exports for structured product, order, and catalog data.

* [BMEcat (BMEcat.de data exchange)](#bmecat-bmecatde-data-exchange)
* [CommonExportProviders (Data Exports)](#commonexportproviders-data-exports)
* [PdfExport](#pdfexport)

### Developer

Tools and interfaces for development, integration, and automation.

* [DevTools](#devtools)
* [WebApi](#webapi)

### Artificial Intelligence (AI)

AI features and provider integrations for automated content creation and processing.

* [AI (Smartstore basic AI plugin)](#ai-smartstore-basic-ai-plugin)
* [ChatGPT (OpenAI ChatGPT)](#chatgpt-openai-chatgpt)
* [Claude (Anthropic Claude)](#claude-anthropic-claude)
* [DeepSeek](#deepseek)
* [Google.Gemini](#googlegemini)
* [Ollama (AI Provider)](#ollama-ai-provider)

### Marketing

Features for reach, customer engagement, product recommendations, and external marketing services.

* [AddToAny](#addtoany)
* [AttributeRules (Rules for product attributes)](#attributerules-rules-for-product-attributes)
* [BeezUp (BeezUP Feed)](#beezup-beezup-feed)
* [Billiger](#billiger)
* [Botsonic](#botsonic)
* [Brevo (Email Synchronization)](#brevo-email-synchronization)
* [cXmlPunchout](#cxmlpunchout)
* [EmailReminder](#emailreminder)
* [Google.MerchantCenter (Google Merchant Center feed)](#googlemerchantcenter-google-merchant-center-feed)
* [Google.Remarketing](#googleremarketing)
* [Guenstiger (Guenstiger feed)](#guenstiger-guenstiger-feed)
* [Idealo (Idealo Feed)](#idealo-idealo-feed)
* [MailChimp (e-mail synchronization)](#mailchimp-e-mail-synchronization)
* [PersonalPromo (Personalized Product Recommendations)](#personalpromo-personalized-product-recommendations)

### Mobile

Integrations for mobile communication services.

* [Clickatell (Clickatell SMS Provider)](#clickatell-clickatell-sms-provider)

### Performance

Plugins for accelerating, scaling, and optimizing the storefront and its media.

* [Azure (Microsoft Azure Services)](#azure-microsoft-azure-services)
* [MegaSearch](#megasearch)
* [MegaSearchPlus](#megasearchplus)
* [OutputCache](#outputcache)
* [Redis](#redis)
* [TinyImage](#tinyimage)

### Legal

Plugins supporting legal information, privacy, and labeling obligations.

* [GDPR](#gdpr)
* [GPSR (General Product Safety Regulation)](#gpsr-general-product-safety-regulation)
* [TrustedShops (TrustedShops Widgets)](#trustedshops-trustedshops-widgets)
* [Warranty (EU Warranty Labelling)](#warranty-eu-warranty-labelling)
* [Withdrawal (Contract withdrawal of orders)](#withdrawal-contract-withdrawal-of-orders)

### Security

Plugins for bot protection and geographic or network-based access control.

* [Apple.Auth (Apple Login)](#appleauth-apple-login)
* [CaptchaFox (CaptchaFox CAPTCHA)](#captchafox-captchafox-captcha)
* [Facebook.Auth (Facebook Login)](#facebookauth-facebook-login)
* [FriendlyCaptcha](#friendlycaptcha)
* [GeoBlocker](#geoblocker)
* [Google.Auth (Google Login)](#googleauth-google-login)
* [Microsoft.Auth (Microsoft Login)](#microsoftauth-microsoft-login)
* [Twitter.Auth (X Login)](#twitterauth-x-login)

### Tax

Standard providers for tax calculation in Smartstore.

* [Tax (Standard Tax calculation)](#tax-standard-tax-calculation)

### Search Engine Optimization (SEO)

Tools for redirects, URL migrations, and preserving existing search-engine references.

* [BizUrlMapper (SmartStore.biz URL Mapper)](#bizurlmapper-smartstorebiz-url-mapper)
* [LegacyUrlRewriter](#legacyurlrewriter)
* [UrlRewriter](#urlrewriter)

### Sales

Features for pricing, quick orders, and procurement-system integrations.

* [DependingPrices](#dependingprices)
* [DirectOrder](#directorder)
* [Oci](#oci)
* [OpenTrans (OpenTrans export)](#opentrans-opentrans-export)

### Shipping

Shipping-cost calculation and standard providers for different shipping models.

* [DimensionPricing (Dimension-based shipping)](#dimensionpricing-dimension-based-shipping)
* [Shipping](#shipping)
* [ShippingByWeight](#shippingbyweight)

### Payment

Payment methods and service providers for different markets and business models.

* [AdyenPay](#adyenpay)
* [AmazonPay](#amazonpay)
* [BilliePay](#billiepay)
* [EasyCredit](#easycredit)
* [GiroCode](#girocode)
* [IdealPayment](#idealpayment)
* [IonosPayment (ipayment Methods)](#ionospayment-ipayment-methods)
* [KlarnaPay](#klarnapay)
* [MolliePay](#molliepay)
* [OfflinePayment](#offlinepayment)
* [Payever](#payever)
* [PayPal](#paypal)
* [PostFinance](#postfinance)
* [Skrill](#skrill)
* [Sofortueberweisung (Pay Now)](#sofortueberweisung-pay-now)
* [Stripe](#stripe)
* [Wallet](#wallet)

## Plugins from A to Z

### AddToAny

**Paid:** Yes

Adds [AddToAny](https://www.addtoany.com/) social sharing buttons to pages so customers can share content and products through social networks and messaging services.

{% hint style="info" %}
**Key Features**

* Sharing buttons
* Selectable and configurable services
* Customizable storefront placement
{% endhint %}

For setup and usage details, see the [AddToAny](addtoany.md) plugin documentation.

### AdyenPay

**Paid:** Yes

Integrates the [Adyen](https://www.adyen.com/) payment platform into the Smartstore checkout, including secure handoff and asynchronous status updates through webhooks.

{% hint style="info" %}
**Key Features**

* Adyen checkout
* Test and live modes
* Refunds, fees, and webhook processing
{% endhint %}

### AI (Smartstore basic AI plugin)

**Paid:** Yes

Provides Smartstore's shared AI infrastructure and extension points for model providers such as ChatGPT, Claude, Gemini, DeepSeek, and Ollama.

{% hint style="info" %}
**Key Features**

* Central AI configuration
* Provider abstraction and model selection
* Streaming responses and reusable AI services
{% endhint %}

For setup and usage details, see the [AI (Smartstore basic AI plugin)](ai.md) plugin documentation.

### AmazonPay

**Paid:** No

Enables sign-in and payment with [Amazon Pay](https://pay.amazon.com/) using address and payment information stored in the customer's Amazon account.

{% hint style="info" %}
**Key Features**

* Login with Amazon
* Amazon Pay checkout
* Sandbox and production configuration
{% endhint %}

### Apple.Auth (Apple Login)

**Paid:** No

Allows customers to register and sign in with their Apple ID through [Sign in with Apple](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple).

{% hint style="info" %}
**Key Features**

* OAuth/OpenID-based sign-in
* Customer account linking
* Apple client and key configuration
{% endhint %}

For setup and usage details, see the [Apple.Auth (Apple Login)](auth/apple-auth.md) plugin documentation.

### AttributeRules (Rules for product attributes)

**Paid:** Yes

Controls the visibility of product attributes through conditions, enabling guided product configurators that reveal follow-up options only when relevant.

{% hint style="info" %}
**Key Features**

* Conditional attribute display
* Rules based on other attribute values
* Dynamic product selection updates
{% endhint %}

For setup and usage details, see the [AttributeRules (Rules for product attributes)](attribute-rules.md) plugin documentation.

### Azure (Microsoft Azure Services)

**Paid:** Yes

Adds a file-system provider for [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs/) so media and supported files can be stored outside the local web server.

{% hint style="info" %}
**Key Features**

* Azure Blob Storage
* Configurable container and endpoint
* Integration with Smartstore's abstract file system
{% endhint %}

### BeezUp (BeezUP Feed)

**Paid:** Yes

Exports product data to the [BeezUP](https://www.beezup.com/) multichannel platform as CSV or XML feeds for connected marketplaces and price-comparison portals.

{% hint style="info" %}
**Key Features**

* CSV and XML product feeds
* BeezUP-specific field preparation
* Repeatable, configurable exports
{% endhint %}

### BilliePay

**Paid:** Yes

Integrates [Billie](https://www.billie.io/) for B2B purchases on account and transfers the required customer, company, cart, and order data to the provider.

{% hint style="info" %}
**Key Features**

* B2B invoice purchase
* Sandbox and production modes
* Authorization, capture, void, and webhooks
{% endhint %}

### Billiger

**Paid:** Yes

Provides product data to [billiger.de](https://www.billiger.de/) and supports conversion tracking for referred sales.

{% hint style="info" %}
**Key Features**

* billiger.de XML feed
* Product, price, and availability data
* Conversion and sales tracking
{% endhint %}

### BizUrlMapper (SmartStore.biz URL Mapper)

**Paid:** Yes

Redirects legacy static URLs from SmartStore.biz installations to the corresponding Smartstore destinations, helping preserve links and search rankings during migration.

{% hint style="info" %}
**Key Features**

* Legacy URL pattern detection
* Redirects for products, categories, and content
* SEO-friendly migration support
{% endhint %}

### Blog

**Paid:** Yes

Adds an editorial blog whose posts can be published, categorized, tagged, and used for customer communication and content marketing.

{% hint style="info" %}
**Key Features**

* Posts and publishing controls
* Comments and moderation
* RSS, SEO, store, and language support
{% endhint %}

For setup and usage details, see the [Blog](blog.md) plugin documentation.

### BMEcat (BMEcat.de data exchange)

**Paid:** Yes

Supports product and catalog exchange in the standardized [BMEcat format](https://www.bme.de/services/bmecat/), particularly for B2B scenarios and large supplier catalogs.

{% hint style="info" %}
**Key Features**

* BMEcat imports
* Catalog and product structure processing
* Mapping and import logs
{% endhint %}

### Botsonic

**Paid:** Yes

Embeds a [Botsonic](https://botsonic.com/) or Writesonic chatbot in the storefront so visitors can use an externally configured assistant.

{% hint style="info" %}
**Key Features**

* Chatbot widget
* Bot and workspace configuration
* Provider-controlled appearance
{% endhint %}

### Brevo (Email Synchronization)

**Paid:** Yes

Synchronizes newsletter subscribers with [Brevo](https://www.brevo.com/), formerly Sendinblue, including subscription and unsubscription changes.

{% hint style="info" %}
**Key Features**

* Subscriber synchronization
* List mapping and API integration
* Webhook-based status updates
{% endhint %}

### CaptchaFox (CaptchaFox CAPTCHA)

**Paid:** Yes

Integrates [CaptchaFox](https://captchafox.com/) into Smartstore's modular CAPTCHA system to protect supported forms from automated abuse.

{% hint style="info" %}
**Key Features**

* CaptchaFox widget
* Server-side verification
* Site key and secret configuration
{% endhint %}

### CartApproval

**Paid:** Yes

Adds purchaser and approver roles to B2B procurement workflows so carts can be reviewed before an order is placed.

{% hint style="info" %}
**Key Features**

* Purchaser and approver assignments
* Approval and rejection workflow
* Notifications and relationship management
{% endhint %}

### ChatGPT (OpenAI ChatGPT)

**Paid:** Yes

Connects Smartstore AI to [OpenAI models](https://platform.openai.com/). Separate API credentials are required, and API usage is not included in the plugin license.

{% hint style="info" %}
**Key Features**

* OpenAI model selection
* API key and endpoint configuration
* Text generation, streaming, and connection testing
{% endhint %}

For setup and usage details, see the [ChatGPT (OpenAI ChatGPT)](ai-provider/openai-chatgpt.md) plugin documentation.

### Claude (Anthropic Claude)

**Paid:** Yes

Connects [Anthropic Claude models](https://claude.com/platform/api) to Smartstore's central AI layer as an alternative cloud provider.

{% hint style="info" %}
**Key Features**

* Claude model selection
* API configuration
* Streaming through the shared AI infrastructure
{% endhint %}

For setup and usage details, see the [Claude (Anthropic Claude)](ai-provider/anthropic-claude.md) plugin documentation.

### Clickatell (Clickatell SMS Provider)

**Paid:** No

Uses [Clickatell](https://www.clickatell.com/) to send order notifications to shop administrators. A paid Clickatell account and credentials are required.

{% hint style="info" %}
**Key Features**

* Order SMS notifications
* Recipient and credential configuration
* Test messages and workflow integration
{% endhint %}

### CommonExportProviders (Data Exports)

**Paid:** Yes

Provides general CSV and XML export providers for central shop data and makes them available through Smartstore's export system.

{% hint style="info" %}
**Key Features**

* CSV and XML exports
* Reusable export profiles
* Scheduled or repeatable data output
{% endhint %}

### ContentSlider

**Paid:** Yes

Displays responsive sliders for editorial content, images, links, and promotions in the storefront.

{% hint style="info" %}
**Key Features**

* Responsive slides
* Images, text, and links
* Scheduling and placement options
{% endhint %}

For setup and usage details, see the [ContentSlider](content-slider.md) plugin documentation.

### cXmlPunchout

**Paid:** Yes

Connects Smartstore with procurement systems through [cXML PunchOut](https://www.cxml.org/index.html), including session transfer and return of the assembled cart.

{% hint style="info" %}
**Key Features**

* PunchOut sessions
* Customer-specific access
* Structured cart transfer
{% endhint %}

### DeepSeek

**Paid:** Yes

Makes [DeepSeek models](https://api-docs.deepseek.com/) available through Smartstore's shared AI infrastructure.

{% hint style="info" %}
**Key Features**

* DeepSeek model selection
* API and endpoint configuration
* Streaming text generation
{% endhint %}

For setup and usage details, see the [DeepSeek](ai-provider/deepseek.md) plugin documentation.

### DependingPrices

**Paid:** Yes

Calculates prices based on selected product attributes or other configured dependencies.

{% hint style="info" %}
**Key Features**

* Conditional price adjustments
* Attribute-based pricing
* Dynamic recalculation in the storefront
{% endhint %}

For setup and usage details, see the [DependingPrices](dependingprices.md) plugin documentation.

### DevTools

**Paid:** No

Provides development and diagnostics utilities for Smartstore extensions and integrations.

{% hint style="info" %}
**Key Features**

* Developer diagnostics
* Extension inspection
* Tools for implementation and troubleshooting
{% endhint %}

For setup and usage details, see the [DevTools](devtools.md) plugin documentation.

### DimensionPricing (Dimension-based shipping)

**Paid:** Yes

Calculates shipping costs from package or product dimensions for scenarios in which weight alone is insufficient.

{% hint style="info" %}
**Key Features**

* Dimension-based rates
* Configurable thresholds and surcharges
* Integration with shipping rules and destinations
{% endhint %}

For setup and usage details, see the [DimensionPricing (Dimension-based shipping)](dimension-pricing.md) plugin documentation.

### DirectOrder

**Paid:** Yes

Lets customers add products directly by product number and quantity, which is especially useful for repeat and B2B orders.

{% hint style="info" %}
**Key Features**

* Quick-order form
* Product number lookup
* Fast entry of multiple items
{% endhint %}

For setup and usage details, see the [DirectOrder](directorder.md) plugin documentation.

### EasyCredit

**Paid:** Yes

Integrates installment financing from [easyCredit](https://partner.easycredit.de/) into the checkout.

{% hint style="info" %}
**Key Features**

* Financing checkout
* Eligibility and status handling
* Merchant configuration
{% endhint %}

### EmailReminder

**Paid:** Yes

Sends automated email reminders for configured customer and order-related events.

{% hint style="info" %}
**Key Features**

* Automated reminders
* Configurable timing and templates
* Customer and order context
{% endhint %}

### ETracker

**Paid:** Yes

Integrates privacy-focused web analytics from [etracker](https://www.etracker.com/) into the storefront.

{% hint style="info" %}
**Key Features**

* Tracking integration
* Configurable account data
* Storefront analytics events
{% endhint %}

### Facebook.Auth (Facebook Login)

**Paid:** No

Allows customers to register and sign in with a [Facebook account](https://developers.facebook.com/docs/facebook-login/).

{% hint style="info" %}
**Key Features**

* Facebook Login
* Customer account linking
* App ID and secret configuration
{% endhint %}

For setup and usage details, see the [Facebook.Auth (Facebook Login)](auth/facebook-auth.md) plugin documentation.

### Faq

**Paid:** Yes

Adds a structured FAQ area for recurring customer questions and answers.

{% hint style="info" %}
**Key Features**

* FAQ categories and entries
* Storefront presentation
* Central content management
{% endhint %}

### FileManager

**Paid:** Yes

Associates downloadable files and documents with products and manages their storefront availability.

{% hint style="info" %}
**Key Features**

* Product file assignments
* Download presentation
* Central file management
{% endhint %}

For setup and usage details, see the [FileManager](filemanager.md) plugin documentation.

### Forums

**Paid:** Yes

Adds community forums for discussions between customers and administrators.

{% hint style="info" %}
**Key Features**

* Forums, topics, and posts
* Moderation and permissions
* Customer participation
{% endhint %}

### FriendlyCaptcha

**Paid:** Yes

Integrates [Friendly Captcha](https://friendlycaptcha.com/) into Smartstore's CAPTCHA system for privacy-friendly bot protection.

{% hint style="info" %}
**Key Features**

* Friendly Captcha widget
* Server-side verification
* Site key and API configuration
{% endhint %}

### GDPR

**Paid:** Yes

Provides tools that help operate a Smartstore shop in line with GDPR requirements.

{% hint style="info" %}
**Key Features**

* Consent and privacy controls
* Personal-data workflows
* Configurable legal information
{% endhint %}

For setup and usage details, see the [GDPR](dsgvo.md) plugin documentation.

### GeoBlocker

**Paid:** Yes

Restricts storefront access based on geographic or network-related rules.

{% hint style="info" %}
**Key Features**

* Country and region blocking
* IP-based access rules
* Configurable responses and exceptions
{% endhint %}

For setup and usage details, see the [GeoBlocker](geoblocker.md) plugin documentation.

### GiroCode

**Paid:** Yes

Creates EPC QR codes for bank transfers so customers can transfer payment data to a banking app.

{% hint style="info" %}
**Key Features**

* EPC QR code generation
* Order and payment reference data
* Display in payment documents
{% endhint %}

### Google.Analytics

**Paid:** No

Integrates [Google Analytics](https://marketingplatform.google.com/about/analytics/) tracking into the storefront.

{% hint style="info" %}
**Key Features**

* Analytics tracking
* Configurable measurement ID
* Storefront and commerce events
{% endhint %}

### Google.Auth (Google Login)

**Paid:** No

Allows customers to register and sign in with a [Google account](https://developers.google.com/identity/).

{% hint style="info" %}
**Key Features**

* Google sign-in
* Customer account linking
* Client ID and secret configuration
{% endhint %}

For setup and usage details, see the [Google.Auth (Google Login)](auth/google-auth.md) plugin documentation.

### Google.Gemini

**Paid:** Yes

Connects [Google Gemini models](https://ai.google.dev/) to Smartstore's central AI layer.

{% hint style="info" %}
**Key Features**

* Gemini model selection
* API configuration
* Streaming through the shared AI infrastructure
{% endhint %}

For setup and usage details, see the [Google.Gemini](ai-provider/google-gemini.md) plugin documentation.

### Google.MerchantCenter (Google Merchant Center feed)

**Paid:** No

Exports product data for [Google Merchant Center](https://merchants.google.com/) and Shopping destinations.

{% hint style="info" %}
**Key Features**

* Google-compatible product feed
* Price and availability data
* Configurable export settings
{% endhint %}

### Google.Remarketing

**Paid:** Yes

Adds the [Google remarketing tag](https://support.google.com/google-ads/answer/2453998?hl=en) to supported storefront pages.

{% hint style="info" %}
**Key Features**

* Remarketing tag integration
* Conversion-related parameters
* Configurable Google Ads identifiers
{% endhint %}

### GPSR (General Product Safety Regulation)

**Paid:** Yes

Supports the product-information and labeling obligations of the EU General Product Safety Regulation.

{% hint style="info" %}
**Key Features**

* Manufacturer and responsible-person data
* Safety and warning information
* Storefront product labeling
{% endhint %}

For setup and usage details, see the [GPSR (General Product Safety Regulation)](product-safety-regulation-gpsr.md) plugin documentation.

### Guenstiger (Guenstiger feed)

**Paid:** Yes

Exports product data to the [guenstiger.de](https://www.guenstiger.de/) price-comparison portal.

{% hint style="info" %}
**Key Features**

* Portal-specific product feed
* Price and availability data
* Configurable export generation
{% endhint %}

### Idealo (Idealo Feed)

**Paid:** Yes

Exports product data to [idealo](https://www.idealo.de/) for listing on its price-comparison services.

{% hint style="info" %}
**Key Features**

* idealo product feed
* Price, shipping, and availability data
* Configurable export generation
{% endhint %}

### IdealPayment

**Paid:** Yes

Integrates [iDEAL](https://www.ideal.nl/en/businesses/offer-ideal/) as a payment method for supported markets.

{% hint style="info" %}
**Key Features**

* iDEAL checkout
* Redirect and return handling
* Payment status processing
{% endhint %}

### IonosPayment (ipayment Methods)

**Paid:** Yes

Integrates [IONOS ipayment](https://www.ionos.de/eshop-loesungen/ipayment) into the Smartstore checkout.

{% hint style="info" %}
**Key Features**

* ipayment checkout
* Merchant credential configuration
* Status and callback processing
{% endhint %}

### KlarnaPay

**Paid:** Yes

Integrates payment methods from [Klarna](https://www.klarna.com/) into the checkout.

{% hint style="info" %}
**Key Features**

* Klarna payment methods
* Checkout and status handling
* Merchant and environment configuration
{% endhint %}

### LegacyUrlRewriter

**Paid:** No

Redirects legacy storefront URLs to current destinations to preserve bookmarks and search-engine references.

{% hint style="info" %}
**Key Features**

* Legacy URL recognition
* Automatic redirects
* Migration and SEO support
{% endhint %}

For setup and usage details, see the [LegacyUrlRewriter](legacyurlrewriter.md) plugin documentation.

### MailChimp (e-mail synchronization)

**Paid:** Yes

Synchronizes newsletter subscribers with [Mailchimp](https://mailchimp.com/) for email marketing campaigns.

{% hint style="info" %}
**Key Features**

* Subscriber synchronization
* Audience and list mapping
* API-based status updates
{% endhint %}

### MediaEditor.Pixlr

**Paid:** Yes

Opens the [Pixlr image editor](https://pixlr.com/) from Smartstore for browser-based media editing.

{% hint style="info" %}
**Key Features**

* Browser-based image editing
* Media Manager integration
* Saving edited assets
{% endhint %}

For setup and usage details, see the [MediaEditor.Pixlr](pixlr.md) plugin documentation.

### MediaManager

**Paid:** Yes

Provides central management for images, videos, documents, and other media used throughout the shop.

{% hint style="info" %}
**Key Features**

* Folders and media organization
* Upload, search, and reuse
* Metadata and storefront integration
{% endhint %}

For setup and usage details, see the [MediaManager](mediamanager.md) plugin documentation.

### MegaMenu

**Paid:** Yes

Replaces the standard main navigation with a configurable mega menu containing categories, links, images, and editorial content.

{% hint style="info" %}
**Key Features**

* Multi-column navigation
* Category, link, image, and content elements
* Responsive layout and ordering
{% endhint %}

For setup and usage details, see the [MegaMenu](mega-menu.md) plugin documentation.

### MegaSearch

**Paid:** Yes

Adds high-performance Lucene full-text search with a dedicated index for faster and more relevant catalog results.

{% hint style="info" %}
**Key Features**

* Lucene index
* Full-text product search
* Indexing and relevance configuration
{% endhint %}

For setup and usage details, see the [MegaSearch](megasearch.md) plugin documentation.

### MegaSearchPlus

**Paid:** Yes

Extends MegaSearch with additional search logic and convenience features while reusing its index and search pipeline.

{% hint style="info" %}
**Key Features**

* Advanced search logic
* Additional optimization features
* Integration with MegaSearch results
{% endhint %}

### Microsoft.Auth (Microsoft Login)

**Paid:** No

Allows customers to sign in with a [Microsoft account](https://learn.microsoft.com/en-us/entra/identity-platform/), including supported organizational accounts depending on app configuration.

{% hint style="info" %}
**Key Features**

* Microsoft sign-in
* Customer account linking
* OAuth/OpenID client configuration
{% endhint %}

For setup and usage details, see the [Microsoft.Auth (Microsoft Login)](auth/microsoft-auth.md) plugin documentation.

### MolliePay

**Paid:** Yes

Integrates [Mollie](https://www.mollie.com/) as a multi-payment service provider and centrally handles redirects, webhooks, and transaction status.

{% hint style="info" %}
**Key Features**

* Multiple Mollie payment methods
* Test and live API keys
* Refunds, cancellations, fees, and webhooks
{% endhint %}

### News

**Paid:** Yes

Adds a news area for company and product announcements, including scheduled publishing and customer comments.

{% hint style="info" %}
**Key Features**

* News articles
* Publication periods
* Comments, stores, and languages
{% endhint %}

### Oci

**Paid:** Yes

Connects Smartstore to e-procurement systems through the Open Catalog Interface and returns the assembled cart to the external process.

{% hint style="info" %}
**Key Features**

* OCI session handoff
* Customer-specific access
* Cart return and structured export data
{% endhint %}

### OfflinePayment

**Paid:** No

Provides classic payment methods that are processed outside an online payment gateway.

{% hint style="info" %}
**Key Features**

* Bank transfer and cash on delivery
* Payment on pickup and manual invoice methods
* Configurable instructions and fees
{% endhint %}

### Ollama (AI Provider)

**Paid:** Yes

Connects Smartstore to an [Ollama](https://ollama.com/) instance for locally operated or self-hosted language models.

{% hint style="info" %}
**Key Features**

* Configurable Ollama endpoint
* Installed model selection
* Local generation and streaming
{% endhint %}

For setup and usage details, see the [Ollama (AI Provider)](ai-provider/ollama.md) plugin documentation.

### OpenTrans (OpenTrans export)

**Paid:** Yes

Exports order data in OpenTrans XML format for transfer to ERP, inventory, or procurement systems.

{% hint style="info" %}
**Key Features**

* OpenTrans 1.0 order export
* Structured header, customer, and line data
* XML export pipeline integration
{% endhint %}

### OrderNumberFormatter

**Paid:** Yes

Generates order numbers from a configurable pattern so technical IDs can be replaced or supplemented with business-friendly numbering.

{% hint style="info" %}
**Key Features**

* Patterns and placeholders
* Prefixes and suffixes
* Automatic sequential numbering
{% endhint %}

### OutputCache

**Paid:** Yes

Caches fully rendered storefront pages or responses to reduce database and rendering work for repeated requests.

{% hint style="info" %}
**Key Features**

* Full-page and response caching
* Rules, durations, and exclusions
* Cache invalidation after relevant changes
{% endhint %}

For setup and usage details, see the [OutputCache](output-cache.md) plugin documentation.

### PageBuilder

**Paid:** Yes

Provides visual creation of modular content pages and landing pages using reusable story blocks.

{% hint style="info" %}
**Key Features**

* Visual block editing
* Responsive reusable layouts
* Preview and publishing with shop content
{% endhint %}

For setup and usage details, see the [PageBuilder](pagebuilder.md) plugin documentation.

### Payever

**Paid:** Yes

Integrates payment products offered through [payever](https://payever.de/), including instant payment and selected Zinia financing or invoice solutions.

{% hint style="info" %}
**Key Features**

* Multiple payever products
* Central credential configuration
* Status and callback handling
{% endhint %}

### PayPal

**Paid:** No

Integrates [PayPal](https://www.paypal.com/business) into the Smartstore checkout and associates authorization and status feedback with the order.

{% hint style="info" %}
**Key Features**

* PayPal checkout
* Sandbox and live modes
* Status, cancellation, and refund support
{% endhint %}

### PdfExport

**Paid:** Yes

Exports product information to a printable PDF document for product lists and simple catalogs.

{% hint style="info" %}
**Key Features**

* Product PDF export
* Selectable product data
* Integration with the export system
{% endhint %}

### PersonalPromo (Personalized Product Recommendations)

**Paid:** Yes

Replaces generic homepage products with recommendations selected for the visitor or customer context.

{% hint style="info" %}
**Key Features**

* Personalized recommendations
* Dynamic homepage placement
* Configurable logic and fallback
{% endhint %}

### Polls

**Paid:** Yes

Adds customer polls to the storefront with configurable questions, answers, schedules, and store assignments.

{% hint style="info" %}
**Key Features**

* Multiple answer options
* Scheduling and store assignment
* Voting and result display
{% endhint %}

### PostFinance

**Paid:** Yes

Integrates online payment services from [PostFinance](https://www.postfinance.ch/en/business/products/payment-collection/online-shop.html) and maps transactions to Smartstore orders.

{% hint style="info" %}
**Key Features**

* Checkout Flex and All-in-One
* Redirect and callback processing
* Test and production configuration
{% endhint %}

### Redis

**Paid:** Yes

Uses [Redis](https://redis.io/) as distributed infrastructure for scaled Smartstore installations with multiple application instances.

{% hint style="info" %}
**Key Features**

* Distributed business-data cache
* Redis output-cache provider
* Publish/subscribe across nodes
{% endhint %}

### RemoveBadge

**Paid:** Yes

Removes the “Powered by Smartstore” notice from the shop footer without requiring a template modification.

{% hint style="info" %}
**Key Features**

* Footer badge removal
* No template changes
* Update-safe plugin activation
{% endhint %}

### SearchLog

**Paid:** Yes

Records storefront search terms and presents frequent queries in the administration to reveal demand, trends, and searches without useful results.

{% hint style="info" %}
**Key Features**

* Top search terms
* Store and language analysis
* Input for catalog and search optimization
{% endhint %}

### Shipping

**Paid:** No

Provides Smartstore's basic shipping-cost providers for fixed rates or rates based on cart value.

{% hint style="info" %}
**Key Features**

* Fixed-rate shipping
* Calculation by order subtotal
* Rules, surcharges, methods, and destinations
{% endhint %}

### ShippingByWeight

**Paid:** No

Calculates shipping costs from total order weight and supports tiered rates and destination rules.

{% hint style="info" %}
**Key Features**

* Weight ranges and tiered prices
* Fixed and variable cost components
* Method and destination restrictions
{% endhint %}

### Skrill

**Paid:** Yes

Integrates [Skrill Quick Checkout](https://www.skrill.com/en/business/shopping-carts/) as an external online payment option.

{% hint style="info" %}
**Key Features**

* Skrill Quick Checkout
* Redirect and return handling
* Merchant account and status configuration
{% endhint %}

### Sofortueberweisung (Pay Now)

**Paid:** Yes

Provides [Klarna Pay Now](https://www.klarna.com/), historically integrated as Sofort transfer, as a checkout payment method.

{% hint style="info" %}
**Key Features**

* Klarna Pay Now checkout
* Redirect and return handling
* Credentials, status, and environment settings
{% endhint %}

### Stripe

**Paid:** No

Integrates [Stripe](https://stripe.com/) and the online payment methods supported by the plugin and merchant account.

{% hint style="info" %}
**Key Features**

* Checkout or Payment Intent processing
* Webhook feedback
* Test/live modes, cancellations, and refunds
{% endhint %}

### Tax (Standard Tax calculation)

**Paid:** No

Provides Smartstore's standard tax calculations, including fixed rates and rates based on region or tax jurisdiction.

{% hint style="info" %}
**Key Features**

* Fixed tax rates
* Regional tax rates
* Tax categories and customer/address context
{% endhint %}

### Timeline

**Paid:** Yes

Stores events and presents them chronologically, for example as a company, product, or project history.

{% hint style="info" %}
**Key Features**

* Timeline event management
* Dates, text, and media
* Responsive chronological presentation
{% endhint %}

### TinyImage

**Paid:** Yes

Optimizes images for smaller files and faster storefront delivery, including modern WebP output.

{% hint style="info" %}
**Key Features**

* Image compression
* WebP support
* Quality settings and media optimization
{% endhint %}

For setup and usage details, see the [TinyImage](tinyimage.md) plugin documentation.

### TrustedShops (TrustedShops Widgets)

**Paid:** Yes

Integrates [Trusted Shops](https://www.trustedshops.com/) components such as the trust badge, buyer protection, and customer reviews.

{% hint style="info" %}
**Key Features**

* Trustbadge
* Buyer protection and reviews
* Configurable storefront placement
{% endhint %}

### Twitter.Auth (X Login)

**Paid:** No

Uses [X](https://docs.x.com/overview), formerly Twitter, as an external sign-in provider.

{% hint style="info" %}
**Key Features**

* Sign-in with X
* Customer account linking
* API key and callback configuration
{% endhint %}

For setup and usage details, see the [Twitter.Auth (X Login)](auth/twitter-auth.md) plugin documentation.

### UrlRewriter

**Paid:** Yes

Creates simple redirects and more advanced rewrite rules to route obsolete or changed addresses to current content.

{% hint style="info" %}
**Key Features**

* Exact redirects
* Pattern-based rewrite rules
* Permanent or temporary rules with priority
{% endhint %}

For setup and usage details, see the [UrlRewriter](urlrewriter.md) plugin documentation.

### Wallet

**Paid:** Yes

Provides an internal customer balance that can be used for full or partial payment during checkout.

{% hint style="info" %}
**Key Features**

* Customer wallet
* Balance and transaction history
* Payments and administrative entries
{% endhint %}

### Warranty (EU Warranty Labelling)

**Paid:** Yes

Manages legally relevant guarantee and warranty notices and assigns them consistently to products.

{% hint style="info" %}
**Key Features**

* Reusable guarantee and warranty labels
* Product assignment
* Storefront display
{% endhint %}

For setup and usage details, see the [Warranty (EU Warranty Labelling)](warranty.md) plugin documentation.

### WebApi

**Paid:** No

Adds a REST-oriented programming interface based on [OData](https://learn.microsoft.com/en-us/odata/overview) for authorized access to shop data.

{% hint style="info" %}
**Key Features**

* OData endpoints
* Authentication and permissions
* Filtering, sorting, paging, and data exchange
{% endhint %}

For setup and usage details, see the [WebApi](webapi.md) plugin documentation.

### Withdrawal (Contract withdrawal of orders)

**Paid:** Yes

Covers the lifecycle of a cancellation request for an order, from customer submission to administrative review and follow-up.

{% hint style="info" %}
**Key Features**

* Storefront cancellation request
* Order and line-item references
* Review, status, confirmation, and follow-up workflow
{% endhint %}

For setup and usage details, see the [Withdrawal (Contract withdrawal of orders)](withdrawal.md) plugin documentation.

## Interested in a Plugin?

We would be happy to advise you personally on features, use cases, and licensing options. Together, we will determine which plugin fits your requirements and guide you toward the right purchasing decision.

<a href="https://smartstore.com/en/personal-consultation/" class="button primary">Request a personal consultation</a>

