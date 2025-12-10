# MegaSearch Plugin

In Smartstore, the existing search function can be replaced by a search based on Apache Lucene. Even while entering the search term, the instant search can display relevant suggestions for the current search below the input line.

## Configuration of the MegaSearch Plugin

### Tab "General"

| **Input Field / Option**                    | **Description**                                                                                                                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active                                      | Activates/deactivates the MegaSearch plugin.                                                                                                                                                                                    |
| Always rebuild index                        | Determines whether the search index should always be rebuilt instead of updated by the scheduled task.                                                                                                                          |
| Monitor database changes                    | Determines whether changes to the data should be monitored in order to include them in the search index during the next indexing.                                                                                               |
| Enable filters for product attributes       | Determines whether filters or facets for product attributes are enabled. This setting is only effective when using the 'MegaSearchPlus' plugin. For information on filters/facets, please read "How Filters/Facets Work".       |
| Enable filters for specification attributes | Determines whether filters or facets for specification attributes are enabled. This setting is only effective when using the 'MegaSearchPlus' plugin. For information on filters/facets, please read "How Filters/Facets Work". |
| Show hit count                              | Determines whether the respective number of hits should be displayed for filters or facets.                                                                                                                                     |
| Enable "Did you mean"                       | Determines whether suggestions with similar terms should be displayed based on the search term.                                                                                                                                 |
| Maximum number of suggestions               | Sets the maximum number of suggestions to be displayed under 'Did you mean'.                                                                                                                                                    |
| Minimum length of search term               | Sets the minimum length of the search term. Suggestions under 'Did you mean' will not be displayed for shorter lengths.                                                                                                         |
| Maximum hit count                           | Sets the maximum number of product hits up to which suggestions under 'Did you mean' are displayed.                                                                                                                             |
| Enable top categories                       | Determines whether category suggestions should be displayed for a search term.                                                                                                                                                  |
| Maximum suggestions                         | Sets the maximum number of displayed categories.                                                                                                                                                                                |
| Enable top manufacturers                    | Determines whether suggestions for manufacturers/brands should be displayed for a search term.                                                                                                                                  |
| Maximum suggestions                         | Sets the maximum number of displayed manufacturers/brands.                                                                                                                                                                      |

### Search Field Weighting (Boost)

The weighting of fields can influence the order of search results.

{% hint style="info" %}
Weight fields to influence the order of search results. In the event of a hit in the respective field, a higher value ranks the product higher in the list of search results.
{% endhint %}

### Tab "Text Analysis"

Text analysis can be used to increase the number of hits. Synonyms, among other things, can also be used.

{% hint style="info" %}
Changes to extended text analysis only take effect after re-indexing!
{% endhint %}

| **Input Field / Option**      | **Description**                                                                                                                                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable extended text analysis | Determines whether extended text analysis should be activated.                                                                                                                                                              |
| Type of text analysis         | Determines the type of text analysis. "Whitespace" is a simplified analysis where separation occurs only by spaces.                                                                                                         |
| Abbreviations                 | Defines abbreviations (e.g., cm, kg, W) to achieve more search terms. Search terms with and without spaces are found. Example: A product with the text "23cm" in the product name is also found when searching for "23 cm". |
| Synonyms                      | Allows the definition of synonym groups. Enter all values of a group per line, separated by commas. Example: notebook,laptop,convertible,ipad.                                                                              |

### Status Bar

The status bar displays the status of the last indexing and the fields that are considered for the search.\
Using the button on the right, the search index can be re-indexed, updated, optimized, and edited.

### MegaSearchPlus Plugin

Extensions for the MegaSearch Plugin. Supplements the product data of the search index with localized data as well as multi-store and access restrictions.

## Keywords

When editing products, keywords can be defined in the **Search** tab, via which the product can be found during a search. For printer paper, for example, the names of compatible printers could be entered here. One keyword is always defined per line. For the keywords to be taken into account, they must be selected as a search field in the search settings. In the MegaSearch configuration, the order of search hits via the keyword field can also be influenced using the search field weighting.

Keywords can be imported as part of a product data import. To do this, use the column **MegaSearch.Product.Keywords** for keywords to be imported in the shop's default language. If keywords are to be imported in another language, append the corresponding locale code in square brackets to the column name. For English, for example, the column name is **MegaSearch.Product.Keywords\[en-US]**. Multiple values per field are separated by a semicolon, comma, or pipe symbol |.
