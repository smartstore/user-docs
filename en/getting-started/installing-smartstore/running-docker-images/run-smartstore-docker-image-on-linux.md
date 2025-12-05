# Run Smartstore Docker Image on Linux

## Install Docker Engine on Ubuntu

Please install the Docker Engine according to the instructions at [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/) or use the following command to check if the Docker Engine is installed correctly:

`sudo docker run hello-world`

![](./attachments/docker-run-hello-world-border.png)

With the following command, the current Smartstore Docker image is downloaded from [https://github.com/orgs/smartstore/packages](https://github.com/orgs/smartstore/packages).

`sudo docker pull ghcr.io/smartstore/smartstore-linux:latest`

![](./attachments/linux_pulled_smartstore_from_github.png)

Now the image can be executed as follows. The Container port 80 ist exposed as local port 80.

`sudo docker run -p 80:80 ghcr.io/smartstore/smartstore-linux`

![](./attachments/linux-docker-run-image.png)

Open any browser and enter **localhost** or **the local IP address** in the address bar. The installation start page of Smartstore opens.

![](./attachments/chrome-smartstore-installation-docker.png)

Now you can install Smartstore. To do this, however, you still need an accessible MS SQL Server or a MySQL instance. If you want to run this instance directly with Smartstore as a Docker container, please proceed as [follows](../running-docker-images/running-smartstore-and-database-together-as-docker-containers.md).