# Microsoft Auth

> Sign in with your Microsoft account

The **Microsoft Auth** plugin allows customers to sign in to the store with a Microsoft account.

## Required information

You need the following information for the configuration:

- Application ID or Client ID,
- client secret.

For information about app registration, supported account types, redirect URIs, and credentials, see the official Microsoft documentation [Register an application in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).

## Configuring Microsoft Auth in Smartstore

1. Go to **Customers > External authentication methods**.
2. Click **Configure** for **Microsoft Login**.
3. Select the appropriate store scope if required.
4. Enter the Application ID.
5. Enter the value of the client secret.
6. Copy the displayed redirect URL and register it with Microsoft.
7. Click **Save**.
8. Return to the provider list and activate **Microsoft Login**.

The redirect URL has the following format:

`https://shop.example.com/signin-microsoft`

![Smartstore configuration of Microsoft Auth with Application ID, client secret, and redirect URL](../../../.gitbook/assets/module_microsoftauth_configuration.png)

{% hint style="info" %}
Copy the value of the client secret to Smartstore, not its internal secret ID. Also note the validity period displayed by the provider.
{% endhint %}

## Testing the login

Open the store login page in a private browser window and click **Sign in with Microsoft**. Use an account type permitted by the app registration.

If you encounter a problem, see the [general troubleshooting information](../external-auth.md#troubleshooting).
