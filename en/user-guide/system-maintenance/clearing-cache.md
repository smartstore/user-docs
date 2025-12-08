# Clearing Cache

There are different elements in the frontend of your shop, which are cached for performance reasons. The cache is automatically updated when you change something in the administration area of your shop. However, if you have changed the database directly, you have to clean the cache to see the changes. You can clean the cache by clicking on the cogwheel icon in the administration area and selecting **Clear Cache**.

![](./attachments/cache-loeschen.PNG)

> [!INFO]
> The following cache types are also available in Smartstore

### Database Cache

You can clean up the cache by clicking the gear icon in the administration area and selecting **Clear Database Cache**. If you want to clear the database cache manually, you can find the relevant files in your shop directory under **App\_Data > EfCache**.

### Output Cache

### Image Cache

If necessary, the image cache can be deleted in **System > Maintenance**.

### Redis