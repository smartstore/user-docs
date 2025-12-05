# Setting up Email Accounts

If you're running a store, there are several occasions when you need to notify customers about a certain action that has occurred. For instance, when an order has been placed, customers need to get a notification, otherwise they will wonder whether or not the order has been placed successfully. The shop administrator also needs to be informed instantly. Therefore, Smartstore sends e-mails automatically. To do so, you need to configure at least one email account in Smartstore from which emails can be sent. You can set up email accounts by navigating to **Configuration > Email Accounts**, where you can create an unlimited number of e-mail accounts and assign them to different message templates. For more information how to assign an e-mail account to a certain message template, read the topic [Setting up Email Accounts](https://smartstore.atlassian.net/wiki/pages/resumedraft.action?draftId=1956121154).

![](./attachments/email-account.png)

## Setting up an Email Account

> [!INFO]
> ### Where do I get the neccessary data?
> The data that must be entered in the fields described below will usually be sent to you when you book a hosting package. You can also obtain this data by logging into the configuration area of your hosting package on the website of your provider. Check the e-mail configuration area. If you can't find the information contact your provider.

|     |     |
| --- | --- |
| E-mail Address | This is the from address for all outgoing e-mails from your store e.g. 'sales@[yourstore.com](http://yourstore.com/)'. |
| E-mail Display Name | This is the friendly display name for outgoing e-mails from your store e.g. 'Your Store Sales Department'. |
| Host | This is the host name or IP address of your mail server. You can normally get this data from your ISP or web host. |
| Port | This is the SMTP port of your mail server. This is usually port 25. |
| User | This is the user name you use to authenticate yourself at your mail server. |
| Password | This is the password you use to authenticate yourself at your mail server |
| SSL | Check the box to use Secure Sockets Layer (SSL) to encrypt the SMTP connection. |
| Use Default Credentials | Check to use default credentials for the connection. |

> [!INFO]
> ### Send a test email
> Once you've configured an email account, you should test whether the data you've entered is correct by sending a test email. If an e-mail can be sent to the email address you've entered in the **Send Email To** field, you can be sure the account has been configured correctly.