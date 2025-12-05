# Handling Digital Products (ESD)

Smartstore is optimally prepared to sell digital products such as MP3s or E-Books. To sell digital products, you simply need to configure your product as a **Downloadable Product** in the **Product Info** tab. By doing so, you'll get the following additional input fields.

![](./attachments/2022-10-24%2010_32_48-Edit%20product%20details%20_%20Smartstore%20administration.png)

| **Input Field** | **Description** |
| --- | --- |
| Download File | The download file. You can either upload a file onto your server or just enter a download URL. |
| Version | Enter the version number in the correct format (e.g.: 1.0.0.0, 2.0 or 3.1.5). |
| Unlimited Downloads | When customers purchase a download product, they can download the item an unlimited number of times. |
| Max. Downloads | The maximum number of downloads granted to a user. |
| Number Of Days | The number of days during which customers can access the file (e.g. 14). Leave this field blank to allow downloads indefinitely. |
| Download Activation Type | A value indicating when download links will be enabled. You have two options: **When order is paid** or **Manually**. |
| Has User Agreement | Check the box if the product has a user agreement to which the customer needs to agree. |
| User Agreement Text | The text of the user agreement. |
| Has Sample Download File | Check the box if this product has a sample download file that can be downloaded before checkout. |
| Sample Download File | The sample download file. You can either upload a file onto your server or just enter a download URL. |

The file you've uploaded can be downloaded by your customer after the payment has been processed successfully and the order acquires the status **Completed**. If you've chosen the option **When order is paid** and the customers choose to pay with an online payment method that automatically changes the status of the order to **Complete** when the payment process is completed, they receive an e-mail informing them that the order is complete (*OrderCompleted.CustomerNotification*), in addition to an e-mail that the order has been placed (*OrderPlaced.CustomerNotification*)*.* The *OrderCompleted* e-mail contains a link from which they can download the purchased file. Customers can also download the file in their login area. If customers choose an offline payment method such as prepayment, the shop administrator has to mark the order as **Paid** and **Completed** manually before they receive the *OrderCompleted* e-mail and the download link. 

If you want customers to agree to a **User Agreement** before they can download the purchased file, you need to activate this functionality by checking the box **Has User Agreement** and by entering the text to which your users need to agree. This text will be displayed when users click on the download link, and they have to confirm that they agree to it by checking the box and clicking on the **Confirm** button.

> [!INFO]
> ### Deactivate Shipping Enabled
> Don't forget to disable the option **Shipping Enabled** for digital products that don't need to be shipped. In this case, you don't need to set the status of the order to **Completed** manually. The order will acquire this status automatically when it is marked as **Paid**.