# General Settings

In the section **General Settings**, you can edit global settings for several areas. There won't be an explanation for every setting, as some of them are self-explanatory. If the setting you are looking for isn't documented, hover over the space between the title and input field of the setting. A question mark will appear, containing a hint about the usage of this setting.

![](<../../../.gitbook/assets/general settings7.png>)

## General

| Input field | Explanation |
| :--- | :--- |
| Store closed | With this option, you can close the shop for maintenance purposes. |
| Allow an admin to view the closed store | If this option is activated, a user that's assigned to the administration group can see the shop even though it is closed. |

## SEO Settings

| Input field | Explanation |
| :--- | :--- |
| Page title separator | Specify page title separator. This separator will separate the shop name from the page name. |
| Page title SEO adjustment | Select a page title SEO adjustment. For example, the generated page title could be `Page Name | Yourstore.com` instead of `Yourstore.com | Page Name`. |
| Default title | The default title for pages in your store. |
| Default meta keywords | The default meta keywords for pages in your store. You can override these for individual categories/products/manufacturer pages. |
| Default meta description | The default meta description for pages in your store. You can override this for individual categories/products/manufacturer pages. |
| Convert non-western chars | Check the box to take out the accent marks in the letters of SEO names while keeping the letter. |
| Enable canonical URLs | The goal of the canonicalization process is to transform a URL into a canonical URL so that it is possible to determine whether two syntactically different URLs are equivalent. |
| Canonical host name rule | Enforces permanent redirection to a single domain name for a better page rank. |
| Extra Disallows for robots.txt | Enter additional paths that should be included as *Disallow* entries in your `robots.txt`. Each entry has to be entered in a new line. |

## Security Setting

| Input field | Explanation |
| :--- | :--- |
| Encryption Private Key | The encryption private key used for storing sensitive data. |
| Admin Area Allowed Ip | IP address allowed to access the backend. Leave this field empty if you do not want to restrict access to the backend. Use a comma to separate multiple IPs. |
| Hide Admin Menu Items Based On Permissions | Hide admin menu items when access to them is denied according to the access control list (permissions). |
| CAPTCHA Enabled | A CAPTCHA is an automated test that distinguishes real users from bots, e.g. through a short task or an invisible risk check. It protects forms and logins from spam and abuse.<br><br>This option activates spam protection using **Google reCAPTCHA**. Smartstore supports both Version 2 and Version 3.<br><br>To use the service, you need an account at [Google reCAPTCHA](https://www.google.com/recaptcha/admin).<br><br>1. Create a new key there.<br>2. Enter the **Site key (Public Key)** and the **Secret key (Private Key)** in the corresponding fields.<br>3. Choose the theme setting matching your key (V2 or V3). |
| Show On Pages | If you have enabled CAPTCHA, you can determine here on which forms (e.g. contact page, registration) it should be active. |

{% hint style="info" %}
**Problems with reCAPTCHA V3?**

If the button in the form does not respond ("flickers") and a `400 ERR_BLOCKED_BY_ORB` error appears in the browser console, please check our troubleshooting guide. This is often due to an incorrect key type.

[Solve problem: Google reCAPTCHA V3 Error](../../../miscellaneous/troubleshooting/google-recaptcha-v3-error.md)
{% endhint %}

## Localization Settings

| Input field | Explanation |
| :--- | :--- |
| Load All Language Resources On Startup | When enabled, all language resources will be loaded on application startup. The application start will be slower, but pages will be opened much faster. |
| Seo Friendly Urls With Multiple Languages Enabled | When enabled, your URLs will be `http://www.yourstore.com/en/` or `http://www.yourstore.com/de/` (SEO friendly). |
| Default Language Redirect Behavior | Specifies the redirect behavior when a page is requested in the default language (the default language is the first active store language). |
| Invalid Language Redirect Behavior | Specifies the redirect behavior when the given SEO code is invalid or the corresponding language does not exist or is unpublished. |
| Use Images For Language Selection | Check the box if you want to use images for language selection. |
| Detect Browser User Language | Specifies whether the visitor's browser language should be detected and assigned on his/her first visit (when inactive, the default store language will be assigned). |

## Pdf Settings

| Input field | Explanation |
| :--- | :--- |
| Enabled | Check the box to enable pdf. |
| Use Letter Page Size | If selected, this option uses the letter page size for PDF documents. Otherwise, the A4 page size is used. |
| PDF Logo | Image file that will be displayed in PDF order invoices. A small image is recommended. |

## Company & Contact Data

You can enter all company specific data here (e.g. company address, e-mails, phone number, bank account data, etc.). This data will be displayed in several places all over your shop such as the footer, order confirmation e-mails, pdfs, etc..

## Social Networks

In the tab social networks, you can determine whether to show any social networks, and you can enter all the URLs to your social network channels. If you don’t want a particular social network icon to be shown, just leave the field blank.

## Full Text Settings

In this tab, you can set up Full Text Search. Your SQL server has to support the MS SQL Server feature Full Text Search. If your server does not support this feature, Smartstore will detect this and display a corresponding message. 

Full text search works faster than the normal search function if big volumes of data are involved, and it gives you the opportunity to control the search results.

* **Exact match (using CONTAINS with prefix_term):** Results match the entered words exactly in the order they are entered
* **Using CONTAINS and OR with prefix_term:** Results contain one of the entered words 
* **Using CONTAINS and AND with prefix_term:** Results contain all of the entered words, which don't have to be found in the exact order they are entered