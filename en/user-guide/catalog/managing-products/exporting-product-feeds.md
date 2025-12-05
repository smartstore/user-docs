# Exporting Product Feeds

If you're selling products in an online shop, you need to promote your products so that potential customers can navigate to them in your shop. One possibility of doing so is to get your products listed in a product comparison portal such as *Google Shopping*, which will show the listed products in the products tab of the search engine.

Product feeds in Smartstore are generated through export profiles. You can create as many profiles as you want. To create an export profiles, go to **Configuration > Export**.

The export profile always uses an export provider to transfer the data in the desired format. Export providers are typically provided through plugins. You can generate the feed manually in the configuration view of the plugin or in the profile list under **Configuration > Export.** Or you let them be generated automatically by a scheduled task that belongs to an export profile. For more information about export profiles, please read the topic [Managing Export Profiles](../../../user-guide/data-exchange/export/managing-export-profiles.md). Depending on the number of installed feed plugins, there are several portals to which you can export your products.

## The File Format

To import your products into a portal such as *Google Shopping*, you will need a file in a format (usually in CSV or XML) that is usually defined by the third party itself. This file contains the data of the products you want the portal to display. An export provider formats the data in this special file format that is customized to meet the requirements of the third party and will contain certain header names and differing column contents as needed by the third party. To get the URLs to the generated files, go to **Configuration > Export** and click the file number in the export profile list.

## Feed Tasks 

At the time you create an export profile, a task will be created for the generation of the product feed, controlling the frequency at which the product data of the files will be updated. For more information about managing tasks, please read the topic [Managing Scheduled Tasks](../../../user-guide/system-maintenance/managing-scheduled-tasks.md).

## How to Obtain More Feed Plugins

More feed plugins can be obtained in the [SmartStore Community Marketplace](http://community.smartstore.com/marketplace/). The **SmartStore Community Marketplace** is where all the resources created for Smartstore are offered and can either be downloaded for free or purchased. For more information on how to buy and install plugins, please read the topics [How to Buy an Extension](https://smartstore.atlassian.net/wiki/display/SMNET/How+to+Buy+an+Extension) and [How to Install an Extension](../../../../smartstore-6-documentation-home/getting-started/community-marketplace/how-to-install-an-extension.md).