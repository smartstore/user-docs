# Preparing Windows Server (VPS, Cloud or dedicated)

All [releases provided by Smartstore](https://github.com/smartstore/Smartstore/releases) are independent, so-called "**self-contained**" releases. This type of release includes not only the application, but also **all .NET libraries** and the **target runtime**. On a Windows server, only the [.NET Core hosting bundle](https://builds.dotnet.microsoft.com/dotnet/aspnetcore/Runtime/9.0.9/dotnet-hosting-9.0.9-win.exe) needs to be installed. The .NET Core hosting bundle installs the .NET Core runtime and the [ASP.NET](http://ASP.NET) Core module. With the bundle, [ASP.NET](http://ASP.NET) Core apps can be run in IIS.

The .NET Core hosting bundle is available for download [here](https://builds.dotnet.microsoft.com/dotnet/aspnetcore/Runtime/9.0.9/dotnet-hosting-9.0.9-win.exe).

- After the **download**, run the **installation** programme on the server.
- Then either **restart** the server or start the IIS service via `net stop was /y` and `net start w3svc` in a command line.

## Creating the website in IIS

1. Create a **new folder** in the server's file system and copy or move the Smartstore installation files to it. This folder serves as the **physical app path** in IIS. This folder is also called the "Provisioning Folder".
2. Create a new site in IIS by opening the server node in the **Connections area**, right-clicking on **Websites or Sites** and selecting **Add Website** from the context menu.
3. Enter a **site name** and set the **physical path** to the **provisioning folder**. Configure the **binding** for HTTP and if an SSL certificate is available, also for HTTPS. Click **OK** to create the site in IIS.
4. Please ensure that the default identity of the app pool of the `ApplicationPoolIDentity` site has the necessary **permissions** to access the provisioning folder. In addition to read rights for the complete provisioning folder, the app pool requires **write rights** for `App_Data` and `Modules`.

Continue with the [installation](../installing-smartstore.md) of Smartstore.