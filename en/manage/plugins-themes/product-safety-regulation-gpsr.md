# Product Safety Regulation (GPSR)

Since Smartstore version 6, Smartstore meets the requirements of the [GPSR](https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/aenderung-produktsicherheitsgesetz.html).

With the GPSR plugin, extended product information required for GPSR products can be specified:

* Manufacturer information
* Product warnings
* Safety instructions

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## Configuration of the GPSR Plugin

| Option | Description |
| :--- | :--- |
| Active | |
| Show information in tabs | Determines whether the GPSR information is displayed in tabs on the product detail page. If disabled, it is displayed in blocks below the long text. |
| Product tabs | Defines the tabs on the product detail page where product safety information is displayed. |
| Insert before tab x | Specifies the name of the tab before which the GPSR tabs should be inserted. Leave empty to append them. |
| Display manufacturer before text blocks | |
| Background color for manufacturer information | Sets the background color of the alert box where manufacturer information is displayed. Leave empty if the manufacturer should not be displayed in an alert box. |
| Consider first manufacturer only | Determines whether only information from the first manufacturer assigned to the product should be displayed. If disabled, information from all assigned manufacturers is displayed. |

{% hint style="info" %}
The examples cited in this article are neither legally binding nor legally compliant. They serve solely for explanation and application purposes.
{% endhint %}

## Displaying Manufacturer Data

Data must be stored for the manufacturer, which is then displayed in the product details. To do this, navigate to **Catalog** → **Manufacturers** in the backend and then switch to the **GPSR** tab.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option** | **Description** | **Example** |
| :--- | :--- | :--- |
| Manufacturer details | <p>- Manufacturer or brand name<br>- Postal address<br>- Electronic address (Email / Website)</p> | <p>EA Sports Deutschland GmbH<br><br>EA Sports Deutschland GmbH<br>Sample Street 123<br>50667 Cologne<br>Germany<br><br>Email: <a href="mailto:info@ea-sports.de">info@ea-sports.de</a><br>Website: <a href="http://www.ea-sports.de">http://www.ea-sports.de</a></p> |
| Responsible Person | <p>- Only if there is no branch within the EU<br>- Name<br>- Postal address<br>- Electronic address (Email / Website)</p> | <p>Dr. Julia Meyer<br><br>EA Sports Deutschland GmbH<br>Legal & Compliance Dept.<br>Sample Street 123<br>50667 Cologne<br>Germany<br><br>Email: <a href="mailto:julia.meyer@ea-sports.de">julia.meyer@ea-sports.de</a><br>Website: <a href="http://www.ea-sports.de/leitung">www.ea-sports.de/leitung</a></p> |

For all products assigned to the manufacturer, the stored data is automatically displayed in the product details.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## Adding Text Blocks

Warnings and safety instructions can be added as text blocks manually, or automatically via rules. To do this, navigate to **CMS** → **Text Blocks** in the backend.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Additional text blocks can be added via **Add new**.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option** | **Description** | **Example** |
| :--- | :--- | :--- |
| Published | | On |
| Display order | Sets the display priority. For example, 1 stands for the first item in the list. | |
| Background color | Sets the background color of the alert box. Leave empty if the text should not be displayed in an alert box. | warning |
| Show title | | On |
| Rules for automatic assignment | The text block is automatically assigned to products if they meet one of the selected rules and the rule is active. | |
| Title | | Gaming Product Safety Regulation |
| Body | | Important note: If you notice that your reflexes are better, your concentration is increased, and your hand-eye coordination is superhumanly precise – keep going, but remember: the dishes won't do themselves! |

{% hint style="info" %}
Media such as images and PDFs can also be easily integrated via HTML links in text blocks.
{% endhint %}

## Assigning Text Blocks

To assign one or more text blocks to a product, navigate to the desired product and select the GPSR tab.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Select the desired text blocks from the list to display them on the product detail page.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

The display of manufacturer data and text blocks can be changed in [the configuration](product-safety-regulation-gpsr.md#configuration-of-the-gpsr-plugin).