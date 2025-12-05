# Updating from Previous Versions

Updates from version 2, 3 must first be updated to version 4.2, then to version 5 and then to version 6.  
An update from Smartstore 5.x can be carried out directly to Smartstore 6 without any detours.

> [!WARNING]
> ### Note
> **Only 4.2 stores can / may be updated to version 5.0.**  
> If your store is still running with an older version than version 4.2, an update to version 4.2 is required in advance.  
> You can view the current store version in the admin area under "System -> System information".
> Before the update, the following technical requirements must be met on the server or hosting:
> - The ASP.NET Core Hosting Bundle must be installed on the server / hosting. Download at:  
> [https://dotnet.microsoft.com/en-us/download/dotnet/7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
> - The AppPool in IIS must be set to `64-Bit`.
> Other important preparations in the store admin area:
> - Delete guest users: before starting the update and deleting the old store files accordingly, please perform the "Delete guest users" task in the admin area under "System -> Scheduled tasks".
> - Set media location to file system: if you have previously stored the media (content such as article images, videos, etc.) in the database, please change this to "`File system`". You can make this setting under "Configuration -> Settings -> Media". After the update, the media can be stored in the database again.

1\. To update your 4.2 store, please download the [latest version of Smartstore software from GitHub](https://github.com/smartstore/Smartstore/releases).

With each new release, there are two versions of Smartstore: the source code version, which is more suitable for developers to edit and "self-compile", and several "ready-compiled" versions, which has already been prepared and posted and can be used immediately by you as a store administrator.  
As of Smartstore 5, other operating systems are supported in addition to Windows.  
Now select the version suitable for your hosting operating system (usually Windows or Linux) and server architecture (32 bit or 64 bit, usually 64 bit).  
If in doubt, ask your hoster which operating system and server architecture your hosting has. Download this smartstore version to your PC first. 

2\. Before you update your store, you should create backup copies of your database and file system, so that you can restore the state of your store if necessary, in case something goes wrong during the update. Especially important for a possible store restore is the database backup - don't forget it! Use the appropriate tools of your hosting provider for this purpose.

3.1  **4.2 to 5.x update:** After you have created your backups, you should delete all directories / files of your store, with some important exceptions: the following directories / files **must not be deleted** under any circumstances:

- App\_Data/Tenants/Default/InstalledPlugins.txt
- App\_Data/Tenants/Default/Settings.txt
- App\_Data/Tenants/Default/PageBuilder/Templates (is not available in all stores)
- App\_Data/Tenants/Default/Media/Storage
- App\_Data/Tenants/Default/Media/QueuedEmailAttachmentMedia (is not available in all stores)

3.2  **5.x to 5.x update:** After you have created your backups, you should delete all directories / files of your store, with some important exceptions: the following directories / files **must not be deleted** under any circumstances:

- App\_Data incl. subdirectories
- wwwroot incl. subdirectories

If there are other files or directories (e.g. favicon, Google files) in the installation folder of your shop, the following applies: files/directories that you have created there yourself do not have to be deleted.  
If external contents (files/directories) have been integrated into the shop, they may have to be stored in the new shop subdirectory "wwwroot".  

4. Now you can unpack the Smartstore version you have already downloaded (see point 1 above) on your PC, then use tools like FTP or similar to upload these files from your PC to your web space. Have existing files overwritten.  
It may be necessary to stop the AppPool in IIS for the copy process beforehand.  
That's it!  
After the upload is complete, your store is also already updated and all new features are immediately available.

> [!WARNING]
> ### Trouble Shooting
> - You should document your own changes that you make to the source code in a suitable form so that you can undo your changes once the store has been updated.
> - Save all theme customizations or your own themes. If cshtml and scss files have also been changed or added, back them up as well.
> - If you have modified the user.scss file, which should only be customized by the store admin, DO NOT overwrite or restore it after the update is complete.
> - If you have installed third-party plugins that will not work after the update, you should disable them and contact the developer of the plugin.

> [!INFO]
> ### Info
> - The first page loads may take a little longer than you are used to.
> - If you get a `(HTTP) 500 Internal Server Error` message during the first store call, reload the page.
> - Changes to the database are automatically applied by Smartstore. You do not need to run SQL scripts in your database administration.