# Organizing Product Categories

To manage your product groups, navigate to **Catalog > Product Groups** in the Smartstore administration area. Use the buttons at the top to switch between the **List view** and the **Tree view**. In both views, you can add, edit, or delete product groups.

The **List view** displays all existing product groups in an ordered list and provides a search box so you can easily find the group you are looking for. The **Tree view** allows you to rearrange the structure of your categories and subcategories by dragging and dropping.

## List View

The list view provides filters that let you search by category **Name** or **Alias**. From this view, you can also export your product groups to an XML file.

![](<../../.gitbook/assets/2022-10-07 08_43_13-Manage Categories _ Smartstore administration.png>)

## Tree View

The order of categories you see in the tree view is applied to the category structure in the storefront and defines the main navigation your shop visitors use to find products.

To rearrange categories, drag a category to the desired position and drop it there.

![](<../../.gitbook/assets/2022-10-07 08_44_41-Manage Categories _ Smartstore administration.png>)

## Category Details View

When you add or edit a category, you are taken to the category details view shown below. Here you can enter all data related to this category in six different tabs. The buttons in the upper-right corner let you preview your changes, save them, or delete the category.

If you choose to delete a category, a dialog appears asking whether the subcategories should also be deleted or moved to the root level.

![](<../../.gitbook/assets/2022-10-07 08_45_16-Edit category details - Basketball _ Smartstore administration.png>)

### Category Info Tab

| **Field**                  | **Description**                                                                                                                                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| External link              | Alternative external URL for this product group in the main menu and in product group listings, e.g. a landing page that contains a link back to the product group.                                                                                                                                         |
| Name                       | Default category name shown to shop visitors in the storefront, unless you provide different values for other languages. For more information about languages, see [Managing Languages](../configuration/managing-languages.md).                                                                            |
| Description                | Default category description shown to shop visitors in the storefront. This field is also multi-language enabled.                                                                                                                                                                                           |
| Alias                      | Optional, language-neutral reference name for internal use.                                                                                                                                                                                                                                                 |
| Category Template          | Defines how the category and its products are displayed to shop visitors.                                                                                                                                                                                                                                   |
| Picture                    | Image shown in the storefront wherever categories are displayed in an overview, for example, the overview of subcategories within a parent category.                                                                                                                                                        |
| Parent Category            | Select the parent category for this category.                                                                                                                                                                                                                                                               |
| Show on Home Page          | Specifies whether the category is shown on the home page of your shop. Categories marked to be shown on the home page are displayed below the introductory text on the start page.                                                                                                                          |
| Published                  | Specifies whether this category is visible to your shop visitors.                                                                                                                                                                                                                                           |
| Display Order              | Defines the order in which categories are displayed within their parent category. The display order is updated automatically when you rearrange categories in the tree view described above.                                                                                                                |
| Discounts                  | Defines discounts applied to this category. Here you can activate discounts for the specific product group. Only discounts of the _Related to categories_ discount type can be managed here. For more information about discounts, see [Managing Discounts](../marketing-promotions/managing-discounts.md). |
| Limited to stores          | Specifies whether the category is available only for specific stores. For more information about multiple stores, see [Working with Multiple Stores](../../discover/common-concepts/working-with-multiple-stores.md).                                                                                       |
| Limited to customer groups | Specifies whether the category is available only to certain groups of customers. For more information about access permissions, see [Controlling Access Permissions](../configuration/controlling-access-permissions.md).                                                                                   |

### Search engines (SEO) Tab

In this tab, you can enter specific SEO values for the category, such as **Meta title**, **Meta keywords**, and an SEO-friendly **URL alias**. For more information about the fields in the **Search engines** tab, read the topic [SEO](../../discover/common-concepts/seo.md).

### Products Tab

In this tab, you add existing products to your category. When you click **Add a new product**, a new window opens that contains a structured list of all products, where you can select several products at once to add them to this category. You can also use the search box to find specific products you want to add.

### Mega Menu Tab

This tab is used to configure the Mega Menu plugin. For more information about Mega Menu, see [Mega Menu](../plugins-themes/mega-menu.md).

### Other Tabs

Additional tabs may appear depending on the plugins you have installed. For information about these tabs, refer to the respective plugin's documentation.
