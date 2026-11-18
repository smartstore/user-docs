# Withdrawal

The "Withdrawal" plugin supports every step of the online order withdrawal process: from the request to the verification and confirmation to the tracking.

## Withdrawal vs. Return

The "Return items" option remains available as part of the return process, but it has been revised.

Standard workflow:

1. A customer/guest sends a withdrawal request.
2. The shop owner is notified.
3. The shop owner converts the withdrawal into a return request.
4. The return process remains the same.

## The road to Withdrawal

### General

By default, "Withdraw from contract" appears in the service footer and service menu for guests as well. You can change the link's location and visibility in the settings. You can restrict its display to registered customers.

| Withdrawal in the footer                                  | Withdrawal in the menu                                         |
| --------------------------------------------------------- | -------------------------------------------------------------- |
| ![](../../.gitbook/assets/module_withdrawal_frontend.png) | ![](../../.gitbook/assets/module_withdrawal_frontend_menu.png) |

{% hint style="info" %}
Registered customers can withdraw their purchase on the order details page in the "My Account" section.

<img src="../../.gitbook/assets/module_withdrawal_withdrawalpage_user_orderhistory.png" alt="Withdrawal in the &#x27;My Account&#x27; section." data-size="original">
{% endhint %}

Next, an information page appears where the relevant order is selected. To withdraw an order, guests must enter their order number and email address. Registered customers can also select the order from a dropdown menu. For guests without an order number, an optional link to the contact form can be displayed.

![Information page about the withdrawal](../../.gitbook/assets/module_withdrawal_withdrawalpage_user.png)

After selecting the order to be withdrawn, either the entire order or only individual products or items can be withdrawn.

To verify their email account, guests will receive an email with a proceed link. The withdrawal is only complete after this link has been confirmed.

{% hint style="info" %}
Emails with the proceed link are sent directly and do not appear in the email management.
{% endhint %}

After the withdrawal is complete, the customer and, optionally, the shop owner receive an email if the respective notification is enabled (see Configuration).

The status of the withdrawal can be viewed in the order details in the "My Account" section.

![Withdrawal status in the order details](../../.gitbook/assets/module_withdrawal_withdrawalpage_user_orderhistory_confirmed.png)

## Backend

### Listing

A list of all withdrawals can be viewed together with return requests under **Sales** → **Withdrawals and Returns**.

Clicking on the ID of a withdrawal displays the withdrawal and allows it to be edited. In the "Withdrawal details" tab, you can view the data provided by the buyer regarding the withdrawal.

![](../../.gitbook/assets/module_withdrawal_backend_withdrawal_general.png)

#### Order details

The status of the withdrawal is displayed in the order details in the "Products" tab below the product listing.

### Configuration

The configuration is done in the order settings (**Configuration** → **Settings** → **Orders**) in the tab "Withdrawal".

Here you can set the position and visibility of the buttons, the withdrawal period and its starting point, and whether to send emails to customers and shop owners. You can also exclude specific customer roles from online withdrawal and enable the optional contact link for guests.

![Withdrawal configuration](../../.gitbook/assets/module_withdrawal_configuration.png)

In addition to the global setting, the withdrawal period can be set for individual products or for a category (if it should apply to all products in that category). If the value is set to 0 (days), the product generally cannot be withdrawn. With the **Allow withdrawal before shipping** option, a shippable product can nevertheless be withdrawn as long as the corresponding order item has not yet been shipped. The option can be configured globally and overridden for individual products or categories. The product setting takes precedence. If the product belongs to multiple categories, a disabled setting takes precedence. If no override is set, the global value applies.

By default, the withdrawal and return functions are activated simultaneously after installing the plugin.

{% hint style="info" %}
Optionally, returns can be deactivated in the order settings (**Configuration** → **Settings** → **Orders**). This is useful if you do not want the return request button to be displayed alongside the cancellation button in the order details of the "My Account" section.
{% endhint %}

## Customization

The withdrawal button and related notifications can be customized to match the design of the shop.

### Message templates

The following message templates can be used to adjust the texts that are sent in connection with the withdrawal process.

| Message template                | Meaning                                                                     |
| ------------------------------- | --------------------------------------------------------------------------- |
| Withdrawal.CustomerNotification | Notification that customers receive after a successful withdrawal.          |
| Withdrawal.MerchantNotification | Notification that the shop owner receives after a successful withdrawal.    |
| Withdrawal.ProceedLink          | Security check that the customer receives before completing the withdrawal. |

### Change the link's appearance

To customize the withdrawal link, you can add your own CSS instructions to the file "\_user.scss". The selector `a[href='/withdrawal/']` allows for targeted adjustment of the appearance of this link.

The resource for the text of the withdrawal link can be changed in [the language settings](../configuration/managing-languages.md#how-to-add-or-edit-a-single-resource) under `Plugins.Smartstore.Withdrawal.WithdrawContract`.

### Add link manually

The withdrawal link is automatically included by default. If you want it to be displayed in an additional or customized position, you can also insert it manually. For the link to work properly, it must:

* point to `/withdrawal/`
* have the **rel** attribute set to `nofollow`

Example: `<a href="/withdrawal/" rel="nofollow">Withdraw from contract</a>`

{% include "../../.gitbook/includes/consultation_request_plugin.md" %}
