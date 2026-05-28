# Output Cache

The Output Cache allows for the caching of entire shop pages, thereby contributing to a significant increase in performance.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## General

| **Input field / Option**                 | **Description**                                                                                                                                                                                                                          |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is active                                | Determines whether output caching is active.                                                                                                                                                                                             |
| Active storage provider                  | Determines the active storage provider. 'Local storage' is the fastest, but not suitable for web farms. Choose 'Database' or another distributed storage mechanism - e.g., 'Redis' - if you are running a web farm.                      |
| Default cache duration                   | Sets the duration in seconds that pages should be cached on the server by default.                                                                                                                                                       |
| Automatically invalidate pages           | Determines whether cached pages should be automatically invalidated if at least one dependency has changed (dependencies are entities such as product, category, blog entry, etc.).                                                      |
| Allow caching for authenticated requests | Determines whether caching is active even when the customer is logged in. However, note that variation occurs only by customer roles, not by individual customers. Disable this option if your shop generates customer-specific content. |
| Ignore 'no-cache' headers                | Determines whether pages should be loaded from the cache despite 'Content-cache: no-cache' headers. Recommended for testing.                                                                                                             |
| Debug mode                               | Outputs general information in the response header ((X-SmartStore-Cached-On, X-SmartStore-Cached-Until)).                                                                                                                                |

{% hint style="info" %}
**Attention**

The Routes and Invalidation options should only be used/changed by experienced users.
{% endhint %}

## Statistics

Under the Statistics tab, the pages stored in the cache are displayed and can also be deleted from the cache there.

{% hint style="warning" %}
Missing screenshot
{% endhint %}
