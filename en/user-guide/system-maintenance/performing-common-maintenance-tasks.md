# Performing Common Maintenance Tasks

You reach the maintenance section by navigating to **System > Maintenance**. In this section, you can optimize the performance of your shop by clearing the image cache, deleting guest customers or deleting old exported files. You can also run SQL scripts directly against the database. 

## Clear Image Cache

In this section, you can see the count of images that are in the cache and the space they are taking up in your file system. If you clear the cache, all cached images are removed from the file system and will be cached again when they are needed for the first time.

## Deleting Guest Customers

In this section, you can delete guest customers. Your shop automatically creates guest accounts for visitors of your shop so they can perform certain tasks e.g. add items to the basket without registering. This can lead to a lot of guest accounts being stored in the database, increasing its size. Therefore, you need to delete some of them from time to time. You can choose a period for the deletion of guest accounts by selecting a **Start Date** and an **End Date**, so that the latest accounts remain, in case recent visitors return to your shop. You can also choose the option **Only without shopping cart**, as data saved for these accounts are not very relevant to the visitor.

## Deleting Old Exported Files

When you create feeds to be consumed by price comparison portals or search engines, they will be stored on your webspace. If you choose not to be listed in these portals anymore, you may want to delete the corresponding files on your web server. You don't need to search for them directly on your web server. Just choose a period for which you want to delete the exported files and click on **Delete**. 

## Execute SQL Query Directly On Database

Sometimes you may want to execute SQL scripts directly against the database. To do so, paste the script into the designated text area and **Execute** the script directly.

> [!INFO]
> ### Attention
> Be very careful with this function! You could destroy the structure of your database.