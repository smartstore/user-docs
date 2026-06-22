---
icon: comments-question-check
---

# FAQs

## Docker

<details>

<summary>Can I change or add something in the Docker container, e.g. a plugin?</summary>

**Yes**, you can, but we recommend that you [recreate the image](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045063/Create+Modified+Docker+Image).

</details>

<details>

<summary>How to copy Files and Folder from Host to Docker container?</summary>

The command to copy files or folders into a container is:

`docker cp <TARGET> <CONTAINER>:<SOURCE>`

**Example:** Copying a Plug-in-Folder `My.Module.DoesSomething` into the Modules folder `/app/Modules`:

`docker cp My.Module.DoesSomething web:/app/Modules`

{% hint style="info" %}
`web` is the container name.
{% endhint %}

</details>

<details>

<summary>How to copy Files and Folder from Docker container to Host?</summary>

`docker cp <CONTAINER>:<SOURCE> <TARGET>`

**Example:**

Copying the Content of the Plug-in-Folder `/app/Modules` from the Container with the name `web` to the Host-Directory `./Modules_From_Container` :

`docker cp web:/app/Modules ./Modules_From_Container`

</details>

<details>

<summary>How to delete Files in Docker container?</summary>

`docker exec <CONTAINER> rm -rf <YourFile>`

**Examples:**

Delete `manifest.json` file in Modules-Folder `/My.Module.DoesSomething`:

`docker exec web rm -rf /app/Modules/My.Module.DoesSomething/manifest.json`

Delete `wwwroot` folder in Modules-Folder `/My.Module.DoesSomething`:

`docker exec web rm -rf /app/Modules/My.Module.DoesSomething/wwwroot`

</details>

<details>

<summary>How do I connect to MySQL or MS SQL or what is the hostname?</summary>

If Smartstore is [started together with MySQL or MS SQL as services](../get-started/installing-smartstore/running-docker-images/running-smartstore-and-database-together-as-docker-containers.md), the **container name or the service name can simply be used as the host name**.

**Otherwise**, detailed information about the container can be read out with the command `docker inspect <CONTAINER>`.

**Example:**

The MySQL container has the name `mysql`.

The command `docker inspect mysql` returns the following information, beside others:

![](https://smartstore.atlassian.net/wiki/download/attachments/2511045235/sGqmSILPU5.png?version=1\&modificationDate=1646212170327\&cacheVersion=1\&api=v2)

</details>

<details>

<summary>Can I also use an external (not Docker) MS SQL Server or MySQL Server?</summary>

**Yes**, enter the host name of the database server in the correct form. Possible examples are:

* Specify the **instance name**: `<INSTANCENAME>`
* Specify the **hostname**: `<HOSTNAME>`
* Specify the **IP address**: `<IP>`
* Specify the **IP address and the instance name**: `<IP>\<INSTANCENAME>`
* Specify the **host name and the instance name**: `<HOSTNAME>\<INSTANCENAME>`

</details>

<details>

<summary>Where is the data stored?</summary>

Data is to be stored in volumes. **Docker volumes store container data on the host**.

In Docker Desktop, volumes can be set up in the "Optional settings" when starting images.

![](https://smartstore.atlassian.net/wiki/download/attachments/2511045235/2zVi4wrW18.png?version=1\&modificationDate=1646212396377\&cacheVersion=1\&api=v2)

As the name implies, the host path is on the host computer and the container path is in the Docker container.

Here is an example:

![](https://smartstore.atlassian.net/wiki/download/attachments/2511045235/j1OuVV6xv2.png?version=1\&modificationDate=1646212435053\&cacheVersion=1\&api=v2)

{% hint style="info" %}
If nothing is set up, data is stored in an "intermediate layer" in the container and is lost when the container is removed.
{% endhint %}

</details>

<details>

<summary>Can I also run several Smartstore instances?</summary>

**Yes**, but when running you have to map the container ports (443 and 80) with ports not yet used on the host. E.g. instead of 443 and 80, 444 and 8080, etc.

The mapping is done in Docker Desktop in the "Optional settings".

On Linux or on the command line, the `-p` switch is used.

Mapping the TCP port 80 in the container to port 8080 on the Docker host:

`-p 8080:80`

Here is the complete command line call:

`sudo docker run -p 8080:80 ghcr.io/smartstore/smartstore-linux`

</details>

<details>

<summary>How do I get the IP address of the Docker Container?</summary>

On Linux or on the Windows commandline, the command

`docker inspect <CONTAINER>`

returns the following information, beside others:

![](https://smartstore.atlassian.net/wiki/download/attachments/2511045235/sGqmSILPU5.png?version=1\&modificationDate=1646212170327\&cacheVersion=1\&api=v2)

</details>

## Themes

<details>

<summary>Can I transfer my theme from version 4.2 to version 5?</summary>

**Yes**, copy the 4.2 theme folder to the 5 theme folder.

In the 4.2 theme folder, rename the "Content" folder to "wwwroot".

Probably a restart is necessary after this. After that you can activate the "new" theme in the backend.

</details>

## Updates

<details>

<summary>Can I update from any version number to Smartstore 5?</summary>

**No**, for an update Smartstore must first be updated to version 4.2.

</details>

<details>

<summary>Is an operating system cross update possible?</summary>

**Yes**, an operating system cross update is possible. A Smartstore 4.2 with a MS SQL database from a Windows server or hosting can be updated on a Linux server to Smartstore 5 and MS SQL for Linux.

</details>

<details>

<summary>Is a database cross update possible? (Smartstore 4.2 MS SQL to Smartstore 5 MySQL)</summary>

**No**, this is not provided.

</details>

## PDF Export

<details>

<summary>Error during PDF export, so that no PDF file is created.</summary>

This may be due to the fact that the store URL cannot be accessed internally.

Open the `appsettings.json` file in the main folder of your Smartstore installation and search for the word "PdfEngineBaseUrl" and enter the URL to your Smartstore installation there.

If you are using a reverse proxy (e.g. NGINX) on Linux, enter the locally accessible URL including port there, e.g. `"PdfEngineBaseUrl": "http://localhost:5000/"`.

</details>

## Emails

<details>

<summary>The order confirmation is missing email addresses.</summary>

The customer's email address is not always displayed in the order confirmation received by the shop owner. This occurs when an email address is not entered in the address details.

In Smartstore Version 6.3, entering an email address in the billing and shipping addresses became optional. Consequently, the customer's email address does not always appear in the order confirmation.

This issue can be resolved by adjusting the "**OrderPlaced.StoreOwnerNotification**" message template.

1. Open the message template in the admin area (CMS > Message templates).

2. Go to line `{% include 'address' with Order.Billing %}` (usually line 37) and insert the code below afterwards.

```cshtml
{% if Order.Billing.Email %}
{% else %}
<div class="text-sm mt-1"><strong>Email:</strong> {{ Customer.Email }}</div>
{% endif %}
```

Der Abschnitt sollte wie folgt aussehen:
```cshtml
<h3>Billing address</h3>
{% include 'address' with Order.Billing %}
{% if Order.Billing.Email %}
{% else %}
<div class="text-sm mt-1"><strong>Email:</strong> {{ Customer.Email }}</div>
{% endif %}
{% if Order.PaymentMethod %}
```

This change must be made for each language in which an individual message has been entered.

</details>

## Task Scheduler

<details>

<summary>The Task Scheduler is not executed (HTTP 404, NOT FOUND).</summary>

The Task Scheduler is not executed and the event viewer contains an error message like "Error while calling Taskscheduler endpoint \[...]".

Open the `appsettings.json` file in the main folder of your smartstore installation and search for the word "TaskSchedulerBaseUrl" and enter the URL to your smartstore installation there.

If you use a reverse proxy (e.g. NGINX) on Linux, enter the locally accessible URL incl. port there, e.g. `"TaskSchedulerBaseUrl": "http://localhost:5000/"`.

</details>

## Timeouts

<details>

<summary>How do I change the startup time limit of an ASP.NET Core application like Smartstore?</summary>

Changing the value for `startupTimeLimit` in an [http://ASP.NET](http://asp.net) Core application can be useful in certain situations to ensure that the application starts successfully. Here are some scenarios in which the value for `startupTimeLimit` can be adjusted:

**Set the value high:**

**Long initialization time**: If the [http://ASP.NET](http://asp.net) Core application takes a long time to initialize, for example, if extensive preparations such as database connections, caching, or other services need to be performed, `startupTimeLimit` can be increased to ensure that the application has enough time to start successfully.

**Decrease value:**

**Fast deployment**: If you are sure that your [http://ASP.NET](http://asp.net) Core application usually starts quickly and you want faster feedback on whether the startup was successful or not, you can decrease the `startupTimeLimit`. This will shorten the wait time before an error message is displayed if the startup process takes too long.

**Error analysis**: Lowering the `startupTimeLimit` can be helpful to detect and diagnose startup problems early. If the application fails due to startup problems, you get an error message faster, which can help to fix the problem.

{% hint style="info" %}
It is important to note that `startupTimeLimit` is used to monitor the startup process and ensure that the application is started within a reasonable time. The value should be carefully adjusted to the specific requirements and characteristics of the application. However, in most cases it is not necessary to adjust this parameter, as the default values are usually sufficient.
{% endhint %}

**Configuration using IIS as a hosting server - entry in the `web.config` file:**

```
<configuration>    
	<system.webServer>        
		<aspNetCore startupTimeLimit="3600"....

```

Configuration using **Linux** as a hosting server - entry in the **appsettings.json** file:

```
{
  "Kestrel": {
    "StartupTimeLimit": 3600,
    // Weitere Konfigurationen für Kestrel-Webserver
  },

  // Weitere Einstellungen für die Anwendung
}

```

</details>
