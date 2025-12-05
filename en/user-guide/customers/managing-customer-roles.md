# Managing Customer Roles

With **Customer Roles** you can assign several different settings to a whole group of customers by configuring your customer role as desired and then assign the corresponding customers to this role. This way you can not only define if customer groups are **Tax Exempt** or get **Free Shipping** but you can also set visibility restrictions to categories or products as well as defining discounts for certain customer groups. For more information about restricting categories or products to customer roles read the topic [Access Control Lists (ACL)](../../user-guide/common-concepts/access-control-lists-acl.md) and [Controlling Access Permissions](../../user-guide/configuration/controlling-access-permissions.md). You can assign multiple customer roles to each of your customers. Go to **Customers > Customer Roles** to manage **Customer Roles**. Here you can see all configured customer roles of your store and add new ones by clicking the button **Add New**. 

![](./attachments/customer-roles.png)

## Customer Roles Detail Page

| **Field** | **Description** |
| --- | --- |
| Name | The name of the customer role. |
| System Name | The system name of the customer role. For internal purposes only. |
| Free Shipping | Check the box to allow customers in this role to get free shipping on their orders. If a customer is assigned to several groups with different values for this setting, **Free Shipping** will be applied if the option is active in one of the assigned roles. |
| Tax Display Type | Specifies the type of tax display for customers contained in this role. The two values from which you can choose are **Including Tax** and **Excluding Tax**. The default value, if none of the two is selected, is **Including Tax**. |
| Tax Exempt | Check the box to allow customers in this role to make tax-free purchases. If a customer is assigned to several groups with different values for this setting, **Tax Exempt** will be applied if the option is active in one of the assigned roles. |
| Active | Activates or deactivates the role. |
| Is System Role | There are several roles that Smartstore depends on, such as the guest role. Therefore, they are not allowed to be deleted by the shop administrator and are flagged as **System Roles**. |