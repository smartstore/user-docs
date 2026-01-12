# Cookie Manager

The ePrivacy Directive 2002/58/EC - also known as the "Cookie Directive" - is an EU directive that aims to increase data protection for internet users. It requires users to agree to the use of cookies before they can be used on websites. The EU's data protection directives state that all websites in the EU must obtain the consent of their visitors before they can store cookies on users' terminals. An exception is made for so-called session cookies. These are cookies that are essential for the functioning of a website.

With the Cookie Manager you make this possibility available to your customers. The information displayed in the cookie manager can either be provided by plug-ins (those that use cookies and which only become active once the use of the respective cookie type has been approved), or they can be added by the shop operator in the backend itself. Cookie Manager in the frontend

When a user visits your shop for the first time, the cookie manager is displayed. The customer therefore has the possibility to choose which cookies he wants to allow.&#x20;

### Cookie types

**Required cookies**

Required cookies are cookies that are used by the shop system and without which the shop cannot operate. According to the guideline, no consent is required for these cookies. For this reason, this option cannot be changed by the shop visitor and is already preselected. Below you will find a list of the required cookies that are set by Smartstore.

| **Cookie Name** | **Usage** |
| :--- | :--- |
| .Smart.Session | This cookie is used to maintain the user session state across HTTP requests. |
| .Smart.Identity | This cookie is used to authenticate and identify registered users across requests. |
| .Smart.Visitor | This cookie is used to track and identify guest users who are not registered. |
| .Smart.CookieConsent | This cookie is used to store the user's cookie preferences and consent choices. |
| .Smart.RecentlyViewedProducts | This cookie stores the product IDs of the products the customer has recently viewed. |
| .Smart.ComparedProducts | This cookie is used to store the list of products that the user wants to compare. |
| .Smart.Antiforgery | This cookie is used to protect the application against Cross-Site Request Forgery (CSRF) attacks. |
| .Smart.Consent | This cookie is used to store the user's GDPR consent status for data processing. |
| .Smart.TempData | This cookie is used to store temporary data between requests, typically used for redirects. |
| .Smart.ExternalAuth | This cookie is used to manage authentication via external providers (e.g., Google, Facebook). |
| .Smart.StoreIdOverride | This cookie is used to override the default store selection in multi-store scenarios. |
| .Smart.PreviewModeOverride | This cookie is used to enable or disable preview mode for testing unpublished content. |
| .Smart.PreviewToolOpen | This cookie is used to remember the open/closed state of the preview tool panel. |
| .Smart.UserThemeChoice | This cookie is used to store the user's preferred theme selection (e.g., light or dark mode). |


**Analytical cookies**

With the help of analytical cookies, statistical web services, such as Google Analytics, collect data on the usage behaviour of a website. These data are used by site operators to improve their own website.

**Third Party Cookies**

Services that offer extended functions, such as LivePerson Chat, sometimes also use cookies to integrate their services into the shop.

## Cookie Manager in the Backend

The Cookie Manager can be enabled or disabled in **Admin > Configuration > Settings > Customers > Privacy**. Depending on the activated plug-ins, the Cookie Manager now already displays information on cookie usage in the frontend.

If you want to include your own scripts that use cookies, you can also provide information about this in the backend under **Privacy**.

To include the corresponding scripts, there is either the possibility to add them as a widget in the backend or to include them directly in views.

#### Topics&#x20;

To mark a script that sets cookies as such, first add it to **Admin > CMS > Pages**. The topic must now be displayed as a widget by checking the option **Display as HTML Widget**. The Cookie Type option now determines whether the script is output depending on the customer selection in the Cookie Manager. Information about the cookie can be stored in the data protection settings as described above.

#### Views

The scripts can also be included in views after asking whether the respective cookie type is allowed.

```
@using SmartStore.Core.Plugins;
@using SmartStore.Services.Customers;
 
@{
    var cm = EngineContext.Current.Resolve<CookieManager>();
    var isMyCookieAllowed = cm.IsCookieAllowed(this.ViewContext, CookieType.Analytics);
}
 
@(isMyCookieAllowed == true)
{
    <script>
        ...
    </script>
}
```

#### Scripts

Within scripts you can query the status of the cookie settings made by the customer via the CookieManager object. The two properties _AllowsAnalytics_ and _AllowsThirdParty_ are available here. An initialisation code of a script could then look like this:

```
if (CookieManager.AllowsAnalytics) {
	// Initialisierung mit Cookies
} else {
	// Initialisierung ohne Cookies
}
```

The Google Tag Manager is a service from Google that allows you to integrate tracking codes and associated code fragments into your store. To initialize it without cookies, you have to give it a ID that is unique for each store visitor. Therefore you can use a variable which was added to the window namespace and can be retrieved with _window.ClientId_.

**Example for initializing Google Tag Manager without cookies**

```
gtag('config', 'GOOGLE_ID', {
	client_storage: 'none',
	client_id: window.ClientId
});
```

### Countries

A cookie hint is only required for countries in the EU, so there is a possibility to turn off the hint at country level. To disable the cookie manager for visitors from a country, go to **Admin > Configuration > Regional settings > Countries > Country** and uncheck the option **Display Cookie Manager**
