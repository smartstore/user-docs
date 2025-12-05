# Preparing Linux (VPS, Cloud or Dedicated Server)

To simplify the documentation, we will only deal with the Linux distribution Ubuntu Server (especially Ubuntu Server 21.10). The installation should be similar on other distributions.

This is about installing Smartstore on a freshly installed Ubuntu instance. If your instance is already pre-installed with NGINX, FTP-Server, etc., you can skip the corresponding section.

* * *

## Requirements

- Smartstore (selfcontained release) for Linux X64
- Ubuntu Server 21.10
- Non-root user with sudo rights

## Workflow

- [Install .NET](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Install-.NET-Core) and other prerequisites
- [Install NGINX Reverse Proxy](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Install-NGINX%5BinlineExtension%5D)
- [Configure Firewall](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Configure-firewall-rules)
- [Install and configure FTP-Server](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Install-and-configure-FTP-Server)
- [Set up NGINX](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Set-up-NGINX)
- [Install MySQL](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Install-MySQL-Server) or [MS SQL Serve](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#Install-MS-SQL-Server)r
- [Set up Smartstore as a service](https://smartstore.atlassian.net/wiki/spaces/SMNET60/pages/2511045022/Preparing+Linux+VPS+Cloud+or+Dedicated+Server#%5BinlineExtension%5DSet-up-Smartstore-as-a-service)

## Install .NET runtime and other prerequisites

> [!NOTE]
> **Note:** Official Smartstore releases are self-contained, which means that no .NET Runtime is required on the target system. If you create your own Framework-Dependent Release, the .NET Runtime must be installed on the target system.

To install .NET Runtime 7, please run the following command in the command line:

```
sudo apt install -y dotnet-runtime-9.0
sudo apt update && sudo apt install -y wget apt-transport-https
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update
```

Checking the installation:

`dotnet --info`

### Install `wkhtmltopdf`

As this component is distribution-dependent, it is not supplied with Smartstore and must be installed manually.

`sudo apt-get update`

`sudo apt -y install wkhtmltopdf`

## Install NGINX

NGINX is an open source web server software with load balancing and media streaming. It also functions as a reverse proxy. Although [ASP.NET](http://ASP.NET) Core has a standard server implementation with Kestrel, the advantages of NGINX under Linux outweigh the rest.

Check whether NGINX is already installed:

`systemctl status nginx`

![](./attachments/nginx_not_installed_w.png)

![](./attachments/NGINX_installed.png)

If NGINX is already installed, the following steps can be skipped.

#### Update the system and install NGINX

This command updates the package information of the package manager , so access to current packages and their dependencies is guaranteed.

`sudo apt-get update`

Now NGINX can be installed:

`sudo apt-get install nginx`

#### Check installation

To be sure, you can check the installation with this command:

`nginx -v`

![](./attachments/linux_check_nginx_installation.png)

NGINX Version 1.18.0 on Ubuntu is installed.

#### Add NGINX service to the system start

In order for NGINX to run after a server restart, it must be set up as a service.

`sudo systemctl enable nginx`

#### Reload the NGINX configuration and start the service

`sudo systemctl reload nginx`

## Configure firewall rules

This section can be skipped if firewall functionality is available elsewhere or if a firewall is not required.

We assume that the ufw (**u**ncomplicated **f**ire**w**all) is installed. First we list the application profiles that have already been set up.

`sudo ufw app list`

> [!NOTE]
> **Note:** If the command is returned with `sudo: ufw: command not found` , then no firewall is installed and this point can be skipped or the firewall must be installed.

Usually three NGINX profiles are available:

- **Nginx Full**: This profile opens port 80 and 443 for NGINX.
- **Nginx HTTP**: This profile only opens port 80 for NGINX.
- **Nginx HTTPS**: This profile opens only port 443 for NGINX.

We activate the full web profile with port 80 and port 443 for SSL:

`sudo ufw allow 'Nginx FULL'`

Check the result of the command:

`sudo ufw status`

If the firewall is not enabled, this output will appear:

![](./attachments/ufw_inactive.png)

If the current access to this server is via SSH, the SSH profile must be activated before the firewall is activated:

`sudo ufw allow 'OpenSSH'`

Now the firewall can be activated with the following command:

`sudo ufw enable`

## Install and configure FTP-Server

The Smartstore installation files must be provided in a folder on the server. If the files are supplied externally and not downloaded directly to the server, FTP access is required. For this purpose, we will install the FTP server `vsftp`.

Use this command to install vsftp:

`sudo apt install vsftpd`

If the firewall is activated, ports 20 and 21 must be opened for FTP and 40000 to 50000 (this range can be freely selected) for passive FTP connections. If TLS is desired, port 990 must also be opened:

```
sudo ufw allow 20/tcp
sudo ufw allow 21/tcp
sudo ufw allow 40000:50000/tcp
sudo ufw allow 990/tcp
```

### Create FTP user

This command creates a user with the identifier "`ftpuser`":

`sudo adduser ftpuser`

If `ftpuser` is not to have SSH access, it must be disabled in the SSH configuration file:

`sudo nano /etc/ssh/sshd_config`

Add to the end of the configuration file:

`DenyUsers ftpuser`

After saving the configuration file, restart the SSH service:

`sudo service sshd restart`

### Folder permissions

We want to transfer files to the `/var/www/html` folder, so we set the folder above it as the home folder for the `ftpuser`:

`sudo usermod -d /var/www ftpuser`

Set the ftpuser as the owner of `/var/www/html`:

`sudo chown ftpuser:ftpuser /var/www/html`

### Further configuration

Rename the existing configuration file:

`sudo mv /etc/vsftpd.conf /etc/vsftpd.conf.bak`

Create a new configuration file and open it with `nano` (Editor):

`sudo nano /etc/vsftpd.conf`

And insert the following and exit the editor after we have saved the file:

```
listen=NO
listen_ipv6=YES
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
use_localtime=YES
xferlog_enable=YES
connect_from_port_20=YES
chroot_local_user=YES
secure_chroot_dir=/var/run/vsftpd/empty
pam_service_name=vsftpd
force_dot_files=YES
pasv_min_port=40000
pasv_max_port=50000
```

### Restart `vsftp`

This command restarts the FTP server:

`sudo systemctl restart vsftpd`

## Set up NGINX

To check whether NGINX is running and accessible, you can call up the NGINX default landing page. If the IP address or host name is unknown, the IP address can be displayed with the following command:

`hostname -I`

Open the start page, e.g. via IP address, as follows:

`http://ip-address`

The default landing page for NGINX is displayed:

![](./attachments/welcome_nginx.png)

### Set up NGINX as a reverse proxy

[ASP.NET](http://ASP.NET) Core apps can also be run directly with the Kestrel web server, but since currently Kestrel is not secure enough to be used directly on the web and does not have all the features that a full-fledged web server like IIS or NGINX has, we use NGINX on Linux. NGINX takes on the role of a reverse proxy here and forwards requests to the Kestrel web server.

Open the following file with an editor and replace the content with the code snippet:

`sudo nano /etc/nginx/sites-available/default`

Replace the content with this code snippet. Replace `example.com` with your own domain name. If there is no domain name yet, the IP of the server can also be entered.

```
server {
	listen        80;
	server_name   example.com *.example.com;
	location / {
			proxy_pass         http://127.0.0.1:5000;
			proxy_http_version 1.1;
			proxy_set_header   Upgrade $http_upgrade;
			proxy_set_header   Connection keep-alive;
			proxy_set_header   Host $host;
			proxy_cache_bypass $http_upgrade;
			proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header   X-Forwarded-Proto $scheme;
    		   }
       }
```

After this, the NGINX configuration must be reloaded:

`sudo systemctl reload nginx`

## Install MySQL Server

Smartstore is designed to work with MySQL or MS SQL Server.  
If you install MySQL, you can of course skip the installation of an MS SQL Server.

As always, we first update the local package index:

`sudo apt update`

Now MySQL can be installed with the following command:

`sudo apt install mysql-server`

We recommend hardening MySQL against attacks.  
To do this, call the script with the following command:

`sudo mysql_secure_installation`

Among other things, this script asks you whether the plugin "Validate Password" should be installed and set up. This plugin tests the strength of passwords.

![](./attachments/linux-mysql-installing-validate-passwd-component.png)

When you install the plugin, you will be asked to choose a level of password validation. If you select the strongest level, level 2, MySQL passwords must be at least eight characters long and contain a mixture of upper and lower case letters, numbers and special characters.

Regardless of the plugin installation, you will also be asked to set a password for the root user. The remaining settings can remain at the default settings.

The newly set root password is not yet configured for the connection to the MySQL shell. For this purpose, the MySQL authentication method must be adjusted as follows:

`mysql -u root -p`

Check authentication method:

`SELECT user,authentication_string,plugin,host FROM mysql.user;`

If the `root` user is authenticated via the `auth-socket` plug-in, the `root` account must be reconfigured. This command changes the previous root password. A strong password should be chosen. Replace `password` with your own password in the command.

`ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';`

After this, the MySQL permission tables must be reloaded:

`FLUSH PRIVILEGES;`

With this command you leave the MySQL shell:

`exit`

### Create dedicated MySQL user for Smartstore

For security considerations, we do not work with the root user, but create a dedicated user for our database.

To do this, we log into the MySQL shell as root user:

`mysql -u root -p`

Now we create a mysql-user "`smartstore`" with the password "`password`". Please customise smartstore and password to your own needs:

`CREATE USER 'smartstore'@'localhost' IDENTIFIED BY 'password';`

Now we have to assign permissions to the new user. With the command below we give the user permissions for all tables as well as permissions to add, change and remove user permissions.

`GRANT ALL PRIVILEGES ON *.* TO 'smartstore'@'localhost' WITH GRANT OPTION;`

With the `exit` command we leave the shell:

`exit`

## Install MS SQL Server

Please follow the instructions from Microsoft on this website: [https://docs.microsoft.com//en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15](https://docs.microsoft.com//en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15)

## Set up Smartstore as a service

### Transfer Files

After everything is installed, the Smartstore installation files must be copied to the server.  
Transfer the files via FTP to the folder `/var/www/html`.

### Setup Service

Smartstore is a .NET application and must therefore be started. This can be done manually for testing, but on a production server the application should be configured as a service. For this we use the `systemd` system and session service.

Create a service definition file for `systemd`:

`sudo nano /etc/systemd/system/kestrel-smartstore.service`

Insert the following code excerpt and save it:

```
[Unit]
Description=Smartstore Core Web App running on Linux

[Service]
WorkingDirectory=/var/www/html
ExecStart=/var/www/html/Smartstore.Web
Restart=always
#Restart service after 10 seconds if dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=smartstore-core
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

> [!NOTE]
> **Note:** Adapt the paths in `WorkingDirectory` and `ExecStart` if necessary.

> [!NOTE]
> **Important:** Code for framework-dependent deployment:
> `ExecStart=/usr/bin/dotnet /var/www/html/Smartstore.Web.dll`
> Code for self-contained deployment:
> `ExecStart=/var/www/html/Smartstore.Web`

### Enable and start the service

Enable service:

`sudo systemctl enable kestrel-smartstore.service`

Start service:

`sudo systemctl start kestrel-smartstore.service`

> [!INFO]
> To stop service:
> `sudo systemctl stop kestrel-smartstore.service`

### Setting the folder permissions

Set own user as owner of the website folder with full read, write and execute rights:

`chown -R www-data/var/www/html/`

Set web server as group owner:

`chgrp -R www-data /var/www/html/`

Recursively set read, write and execute permissions for the owner and the group for all files and folders and no permissions for others:

`chmod -R 750 /var/www/html/`

Inherit group ownership to new files and folders:

`chmod g+s /var/www/html/`

Recursively assign write permissions to special folders for web servers:

`chmod -R g+w /var/www/html/App_Data`

`chmod -R g+w /var/www/html/Modules`

Make `Smartstore.Web` executable:

`chmod +x /var/www/html/Smartstore.Web`

You can now proceed with the [**installation**](../installing-smartstore/starting-smartstore-installation.md) of Smartstore.