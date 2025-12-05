# Overload Protection

The Overload Protection is available since Smartstore v6 and can be found in the Settings under the **Performance** tab.

This is a powerful feature that ensures system stability and performance even under heavy load. It protects against overloading of server resources, prevents latency spikes, and keeps the platform functional even during sudden bursts of load, such as advertising campaigns, unexpected traffic spikes, or bot attacks. Overload protection focuses on managing and limiting access for guest users and bots, while exempting registered users from restrictions. With flexible time windows and thresholds for different user groups, you can effectively manage both long-term streams of visitors and short-term peaks. This feature provides a customized way to improve the user experience and ensure platform availability.

Typical use cases:

- Defense against “bad bots”
- Manage sudden user spikes (e.g. due to sales events)
- Protect against performance drops due to unexpectedly high traffic

A key problem addressed by overload protection is the mass creation of guest accounts by unidentifiable "bad bots". These bots often evade traditional identification mechanisms by refusing to accept cookies and creating new sessions for each request. While overload protection cannot completely prevent this, it can effectively mitigate it by limiting the number of new accounts per time window and reducing unnecessary system load. In particular, blocking new guests for secondary requests such as AJAX or script requests prevents bots from overloading the system.

![Bildschirmfoto am 2025-02-14 um 09.46.35 (1).png](./attachments/Bildschirmfoto%20am%202025-02-14%20um%2009.46.35%20(1).png)

# General Settings

| **Option** | **Description** |
| --- | --- |
| Enable Overload Protection | Applies the defined policies. If this option is disabled, no restrictions are applied. |
| If sub request, forbid "new" guests | Blocks new guest users for sub-requests (e.g. AJAX, POST, scripts, media files). This setting prevents "bad bots" that do not accept cookies and masquerade by changing IP addresses or user-agent strings from creating new guest sessions for child requests. |

> [!WARNING]
> Changes to **traffic limit** and **peak** settings will not take effect until you restart the application.

## Traffic Limit (Long Term Monitoring)

With these settings, thresholds can be configured over a longer period of time (e.g., one minute or longer).

| **Option** | **Description** |
| --- | --- |
| Time window | Duration of the time window (hh:mm:ss) in which persistent traffic is measured. |
| Guest limit | Maximum number of guests within the specified timeframe. An empty value means no limit. |
| Bot limit | Maximum number of bots within the specified timeframe. An empty value means no limit. |
| Global limit | Combined limit for guests and bots. If the combined requests of both types exceed this limit, further requests will be denied. An empty value means no limit. |

## Peak (Short Term Monitoring)

These settings become effective during sudden traffic peaks over a very short period of time (e.g. a few seconds).

| **Option** | **Description** |
| --- | --- |
| Time window | Duration of the time window (hh:mm:ss) in which peaks are detected. |
| Guest limit | Maximum number of guest users within the specified timeframe. An empty value means no limit. |
| Bot limit | Maximum number of bots within the specified timeframe. An empty value means no limit. |
| Global limit | Combined limit for guests and bots. If the combined requests of both types exceed this limit, further requests will be denied. An empty value means no limit. |

> [!INFO]
> **Global limit**: This limit is independent of the separate limits for guests and bots.
> Once this limit is reached, the system will block further requests, even if the other limits are not exceeded.