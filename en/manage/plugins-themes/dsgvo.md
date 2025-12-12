# GDPR

Since Smartstore version 3.1.5, Smartstore meets the requirements of the GDPR.
These include, in particular, the EU Cookie Directive, deletion of customer data, anonymization function for customers, and download functionality of customer data for the customers themselves.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## Configuration of the GDPR Plugin

| **Input field / Option** | **Description** |
| :--- | :--- |
| Display "Privacy" menu in customer menu | Determines whether a new item "Privacy" should be offered in the "My Account" customer menu. |
| Offer account deactivation | When deactivating an account, all data that could identify a customer (email, IP address, name, address, etc.) is anonymized. |
| Offer deletion of user-generated content | User-generated content includes product reviews, forum posts, news and blog comments, etc. Data is merely masked/pseudonymized. Actual deletion at the record level never takes place. |
| Customers can deactivate account independently | Determines whether a customer can deactivate their account independently or whether a request must first be sent to the shop operator. In both cases, multiple confirmations by the customer are required. |
| Enable download of customer data | Determines whether a customer can download their data independently in JSON format. |
| Anonymize automatically after deletion process | Determines whether anonymization should occur automatically after a customer deletion process in the backend. Please note: in Smartstore, customer records are generally not removed from the database, but merely marked as deleted. |