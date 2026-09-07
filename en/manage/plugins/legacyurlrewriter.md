# LegacyUrlRewriter

> Old links, new destinations

The **LegacyUrlRewriter** permanently redirects obsolete product and category URLs to their current SEO URLs in Smartstore.

The plugin is particularly useful for store migrations and changes to the URL structure. Existing links from search engines, bookmarks, newsletters, or external websites remain accessible.

For general information about SEO-friendly URLs, see [SEO](../../discover/common-concepts/seo.md).

## Typical use cases

The LegacyUrlRewriter is useful for:

- migrating an existing store to Smartstore,
- switching from a previous shop system,
- restructuring products or categories,
- retaining historical SEO URLs,
- multilingual or store-specific migrations.

## How it works

When products or categories are imported, the plugin stores their previous URL paths in addition to the target entities. When one of these old paths is requested, the plugin determines the entity's current active SEO URL and responds with a permanent **HTTP 301 redirect**.

The destination is not stored as a fixed URL in the redirect rule. If the SEO URL of the product or category changes again later, the plugin automatically uses the new destination after the cache has been refreshed.

## Requirements

The following requirements must be met for redirects to work:

- The plugin is installed and has a valid license.
- The destination is a product or category.
- An active SEO URL exists for the destination entity.
- The old URL path was imported with a product or category import.
- The store and language assignments match the requested website.

For information about installation and licensing, see [Installing Plugins](installing-plugins.md) and [Managing Plugins](managing-plugins.md).

{% hint style="info" %}
The LegacyUrlRewriter does not provide a user interface for manually creating or editing individual redirects. The assignments are imported with products or categories.
{% endhint %}

## Importing redirects

First, create or edit an import profile for products or categories. For an introduction, see [Managing Import Profiles](../data-exchange/managing-import-profiles.md). For additional information about product imports, see [Importing & Exporting Products](../catalog/managing-products/importing-exporting-products.md).

Add the following technical columns to the import file:

| Column | Required | Valid values | Description |
|---|---:|---|---|
| `LUR_EntityName` | Yes | `Product` or `Category` | The destination entity type. The value is case-sensitive. |
| `LUR_OldSlug` | Yes | Unique relative path, up to 400 characters | Enter the path without a protocol, domain, or leading slash, for example `products/classic-wooden-table`.<br>Matching is case-insensitive, but a trailing slash is significant. |
| `LUR_StoreId` | No | `0` or a positive store ID | `0` applies to all stores. A specific ID restricts the redirect to that store. |
| `LUR_LanguageId` | No | `0` or a positive language ID | `0` uses the language-neutral SEO URL. For a specific ID, an active SEO URL must exist in that language.<br>The plugin sets the working language accordingly. |

For additional information, see [Working with Multiple Stores](../../discover/common-concepts/working-with-multiple-stores.md) and [Working with Multiple Languages](../../discover/common-concepts/working-with-multiple-languages.md).

The `LUR_` columns are additional technical columns. The plugin reads them directly from the import file, so they do not have to be mapped to regular product or category properties.

The import row itself must be associated with a product or category through a suitable key field, such as SKU or ID. If Smartstore cannot determine a destination entity, no redirect is created.

{% hint style="info" %}
Only the old path is specified in the import file. The plugin determines the current destination URL from the associated product or category.
{% endhint %}

## Product example

The product with SKU `ART-100` should remain accessible through its previous path `products/classic-wooden-table`:

```csv
Sku;LUR_EntityName;LUR_OldSlug;LUR_StoreId;LUR_LanguageId
ART-100;Product;products/classic-wooden-table;0;0
```

The plugin associates the old path with the product whose SKU is `ART-100`. It uses the product's current active SEO URL as the redirect destination.

## Category example

The category with ID `42` should remain accessible through its previous path `furniture/garden-tables`:

```csv
Id;LUR_EntityName;LUR_OldSlug;LUR_StoreId;LUR_LanguageId
42;Category;furniture/garden-tables;0;0
```

The plugin associates the old path with the category whose ID is `42`. It uses the category's current active SEO URL as the redirect destination.

## Running the import

1. Create or open a product or category import profile.
2. Add the required `LUR_` columns to the source file.
3. Make sure that each row can be associated with a product or category through a suitable key.
4. Start the import.
5. Check the import report for warnings.
6. Clear the application cache if necessary.
7. Test a selection of old URLs.

Existing old paths are not overwritten. The import skips the affected record and logs a warning.

## Verifying the result

Open an old URL after the import. The request should return the status code `301 Moved Permanently` and the current SEO URL in the `Location` header. The browser then opens the new destination page directly.

For multiple stores or languages, test each relevant combination separately.

## Cache considerations

The resolved redirects are cached for each store for up to 30 days.

Clear the application cache in particular when:

- a newly imported redirect is not yet recognized,
- the destination entity's SEO URL has changed,
- store or language assignments have been adjusted.

For instructions, see [Clearing Cache](../system-maintenance/clearing-cache.md).

## Limitations

- Only products and categories are supported.
- Individual redirects cannot be managed manually.
- Each old path can occur only once.
- Regular expressions and placeholders are not supported.
- The plugin processes paths, not complete URLs or domains.
- No redirect takes place without a matching active SEO URL.
- Existing assignments are not overwritten by a subsequent import.

## Related topics

- [Installing Plugins](installing-plugins.md)
- [Managing and Licensing Plugins](managing-plugins.md)
- [Managing Import Profiles](../data-exchange/managing-import-profiles.md)
- [Importing & Exporting Products](../catalog/managing-products/importing-exporting-products.md)
- [SEO](../../discover/common-concepts/seo.md)
- [Managing SEO Names](../system-maintenance/managing-seo-names.md)
- [Working with Multiple Stores](../../discover/common-concepts/working-with-multiple-stores.md)
- [Working with Multiple Languages](../../discover/common-concepts/working-with-multiple-languages.md)
- [Clearing Cache](../system-maintenance/clearing-cache.md)
