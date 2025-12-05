# Setting up External Authentication Methods

Smartstore provides plugins for external authentication. These plugins enable your customers to log into your shop with an account from a third party such as a Facebook or Twitter. This way, your customers don't need to register for an account in your shop. With the click of a button at the checkout process, the authentication in your shop will happen automatically using the login information from the third party, letting your customers proceed with the purchase of their products. You can enable or disable the automatic registration of customers in **Customer Settings > External Authentication Settings** . If this option is active, an account will automatically be created in your shop for the new customer.  You can configure which of the methods for external authentication are active in your shop by navigating to **Customers > External Authentication Methods** .

![](./attachments/external-authentication.png)

After your customer has clicked on one of the buttons, they are asked to agree to the use of their data by your shop. This is a one-time procedure; after they have agreed, they can subsequently log into your shop with just one click.

## How to configure Facebook Authentification

- Create an application with the Facebook login option in the developer area at Facebook to get the Facebook access data.
- Activate auto registration in the customer settings if you want externally authorized visitors to be registered automatically.
- Enter your **Client Key Identifier (App ID)** & **Client Secret (App Secret)**.
- Activate authentication via Facebook by navigating to  **Customers > External Authentication Methods**.

## How to configure Twitter Authentification

- Enter your **Consumer Key** & **Consumer Secret.**
- Activate **Customer Settings > External Authentication Settings >**   **Auto Register Enabled** , otherwise Twitter authentication doesn't work.
- Activate authentication via Twitter by navigating to  **Customers > External Authentication Methods**.