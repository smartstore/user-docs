# Faceted Search / Filter

The MegaSearchPlus plugin, included in the Premium and Enterprise editions, allows search results to be narrowed down using faceted navigation.

![Faceted navigation](../../../.gitbook/assets/module_megasearchplus_facetedsearch.png)

The content displayed in the faceted navigation is determined in the [MegaSearch plugin](../../plugins/megasearch.md), in the product details under the [Specification Attributes](../../catalog/managing-specification-attributes.md) tab, and in the [Product Attributes](../../catalog/managing-products/understanding-product-variants.md).

The settings in the product details take precedence over the specification attribute settings. In turn, the specification attribute settings take precedence over the global settings in the MegaSearch plugin.

Examples:

Product details: Allow filtering = yes\
Specification attribute settings: Allow filtering = yes\
The specification attribute is displayed in the faceted search.

Product details: Allow filtering = no\
Specification attribute settings: Allow filtering = yes\
The respective specification attribute is not displayed in the faceted search.

Product details: Allow filtering = not specified\
Specification attribute settings: Allow filtering = yes\
The specification attribute is displayed in the faceted search.

Product details: Allow filtering = not specified\
Specification attribute settings: Allow filtering = no\
The respective specification attribute is not displayed in the faceted search.

Product details: Allow filtering = yes\
Specification attribute settings: Allow filtering = yes\
MegaSearch: Enable filters for specification attributes = No\
The respective specification attribute is not displayed in the faceted search.
