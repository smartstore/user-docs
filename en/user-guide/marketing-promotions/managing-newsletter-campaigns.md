# Managing Newsletter Campaigns

Promotion is a very important topic for shop administrators. Therefore, a major effort is put into generating new customers through search engine optimization and other forms of online marketing. Newsletter marketing is an important form of online marketing, as there's a lot of potential in existing customers. If they've had a good experience at your shop, they are likely to make purchases again. Therefore, you should remind them every now and again that your shop still has an interesting product assortment and inform them about special discounts or new arrivals.

With the setting **Configuration > Settings > Customer Settings > Hide Newsletter Box**, you activate or deactivate the display of the newsletter box in the footer of your shop. In this area, your shop visitors can subscribe to or unsubscribe from your newsletters.

![](./attachments/newsletter-box.png)

## Managing Campaigns

You can manage campaigns by navigating to **Admin > Promotions > Campaigns**. To create a new campaign, click on **Add New**. Then, you can determine a **Name** for your campaign for internal reference, a **Subject** for the generated e-mail, and the HTML **Body** that will be the content of the e-mail. The content can be equipped with message tokens that will be dissolved at run-time. For more information about message tokens, see the description below. In the tab **Stores**, you can limit the campaign to single stores. Once you've saved the campaign, you can send it to all of your subscribers by clicking on **Send Mass Email**, or just send a test e-mail to yourself by clicking **Send Test Mail** after you've entered a valid e-mail address. Of course, sending a test e-mail to yourself is strongly recommended, as you'll have a preview of the campaign before sending it to thousands of customers.

![](./attachments/newsletter%20campaings.png)

. 

### Message Tokens

Message Tokens are placeholders that will be replaced at run-time with values you've configured in your shop or values corresponding to data that is valid in the given context. Valid message tokens for newsletter campaigns are listed in the following table:

| **Token** | **Description** |
| --- | --- |
| %Store.Name% | The name of the store for which the campaign will be sent. |
| %Store.URL% | The url of the store for which the campaign will be sent. |
| %Store.Email% | The e-mail address of the store for which the campaign will be sent. |
| %NewsLetterSubscription.Email% | The e-mail address of the customer to whom the campaign will be sent. |
| %NewsLetterSubscription.ActivationUrl% | The link where the e-mail address can be activated to receive newsletters from your shop. |
| %NewsLetterSubscription.DeactivationUrl% | The link where the e-mail address can be deactivated to receive newsletters from your shop. |
| %Store.SupplierIdentification% | The supplier identification is a HTML table that will be assembled from different data you've configured in the settings. It holds information about your company such as the company name, company address, contact data and banking information. |

## Managing Subscribers

To manage newsletter subscribers, navigate to **Admin > Promotions > Newsletter Subscribers**. There, you'll see a list of all the customers who have subscribed to receive newsletters from you. You can search this list for certain subscribers and activate or deactivate them manually, and you can see when they subscribed to your mailing list. If you have managed your newsletter campaigns with another tool up to now, you can import your subscriber list into Smartstore via CSV. The list to be imported must contain values in the first column, which holds the e-mail address of each subscriber. The list can also hold two additional values per line. For example, the second column could contain a value indicating whether the subscriber is active, and the third could refer to a particular store (i.e. display the corresponding store ID). Headings for the columns aren't necessary.

Create an [import profile](../../user-guide/data-exchange/import/managing-import-profiles.md) to import newsletter subscribers. Create an [export profile](../../user-guide/data-exchange/export/managing-export-profiles.md) if you want to export newsletter subscribers.