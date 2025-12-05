# Customizing Message Templates

If you're running a store, there are several instances where you need to notify a customer about a certain action that has occurred. For instance, when an order has been placed, the customer needs to get a notification, otherwise he will wonder whether or not the order has been placed successfully. The administrator of the shop also needs to be informed instantly. Smartstore sends e-mails automatically, one to the customer informing him about the successfully placed order in your shop, and another one to the shop administrator to inform him about the new order. Other occasions when e-mails are sent are customer registrations, newsletter subscriptions, product recommendations etc. The e-mails are generated using e-mail templates that you can customize to fit your needs. You can edit these templates by navigating to **CMS > Message Templates**.

## How to Configure a Message Template

You can configure a message template by clicking on the **Edit** link in the overview grid. Here, you can specify the e-mail account that will be used to send the e-mail (for information on how to set up e-mail accounts in Smartstore, read the topic [Setting up Email Accounts](../../user-guide/configuration/setting-up-email-accounts.md)), the subject of the e-mail and a blind carbon copy (BCC). Additionally you can specify up to three attachments which will be added to the email. The content of the template will be rendered in the HTML editor where you can also edit the template directly. You can also create alternate versions of the message template for each language you've configured in your shop. For more information about setting up languages, read the topic [Managing Languages](../../user-guide/configuration/managing-languages.md). 

![](./attachments/message-template.png)

## Understanding Tokens

When you configure your message templates, you may want to place information regarding the current action for which the template will be sent. For example, when you're working on the template for informing the customer about a successfully placed order, you would definitely want to place the order number somewhere. For this reason, message tokens exist. You can place available message tokens anywhere in your template, and they will be resolved before the template is sent. The message token for the order number looks like this: *%Order.OrderNumber%*.

> [!INFO]
> ### Choosing Message Tokens
> To place a message token into your template, you can place the cursor anywhere in the HTML editor and choose the desired message token from the list **Available Message Tokens**.