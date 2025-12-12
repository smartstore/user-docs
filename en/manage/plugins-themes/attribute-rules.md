# AttributeRules

## Rules

Attributes can be dynamically shown or hidden depending on other attributes. This significantly increases clarity and flexibility when configuring products.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

### Old vs. New

Previously, the process was much more complex. An example is [the Josef Hoffmann Sofa (3-seater, Cubus 1910)](https://core.smartstore.com/backend/josef-hoffmann-sofa-3-sitzer-cubus-1910/):

* The old approach required creating numerous variants, leading to an unmanageable number of configuration possibilities.
* Prices had to be entered manually for each variant, which was time-consuming and error-prone.

The new approach simplifies this process significantly. Using the [same product](https://52a.smartstore.com/-josef-hoffmann-sofa-3-sitzer-cubus-1910-/) as an example, only three qualities and ten colors are now defined. Prices are entered at the quality level, reducing administrative effort and making the variant logic clearer.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

This improvement allows for more efficient and user-friendly handling of attributes and prices.

### Example

Let's take the [Playstation 4 Pro](https://52a.smartstore.com/playstation-4-pro/) as an example and the requirement *"Color selection only when purchasing with controller"*:

This product has the attribute Controller with two options: with Controller and without Controller.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

With the new rules, it is possible to configure the product so that a color is offered only when a controller is selected. To do this, a new attribute **Color** with two options (**Yellow** and **Blue**) is created.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

In the edit view of the color attribute, switch to the **Rules** tab and add the group **Controller**. This defines the dependency of the attribute. Now select the condition **is one of** and the option **with Controller**.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

After saving, the color attribute is now offered on the product detail page when the option **with Controller** is selected.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

{% hint style="warning" %}
Missing screenshot
{% endhint %}

### Further Application Scenarios

#### Engraving

An example is optional engraving for a watch. The user is first asked if they want an engraving. If the answer is "No", no further input is required. However, if the user decides for "Yes", a surcharge of 10 EUR is charged and further input options are unlocked. The user can then enter text for the engraving on the front and back of the watch in corresponding text fields. Additionally, a font can be selected via a dropdown box.

1. Attribute Engraving desired
2. No
3. Yes (+10 EUR)
    1. Text field Engraving front
    2. Text field Engraving back
    3. Font (Combobox)

#### Print

Another example is a T-shirt with the option of a print. The user is asked if they want a print. If the answer is "No", no further input is required. However, if the user selects "Yes", a surcharge of 20 EUR is charged and an additional attribute becomes visible. In this case, the user must upload a file for the print. Uploading the file is mandatory to complete the order process.

1. Attribute With Print
2. No
3. Yes (+20 EUR)
    1. File upload (required)

#### Operating System

Another example is the selection of an operating system. The user first selects the attribute "OS". When selecting "Linux", no further input is required. When selecting "Windows", further options are displayed. The user can now choose between different Windows versions, each associated with different surcharges. The choices are Windows Home (+50 EUR), Windows Server (+200 EUR), and Windows Pro (+100 EUR).

1. Attribute OS
2. Linux
3. Windows
    1. Windows Operating Systems
        1. Windows Home (+50 EUR)
        2. Windows Server (+200 EUR)
        3. Windows Pro (+100 EUR)

#### Bundle

A complex example is a bundle offer, for instance, the Samsung Galaxy S23 with a Galaxy Watch. The user is first asked if they want to buy the smartphone in a bundle with a Galaxy Watch. If the answer is "No", no further input is required. If "Yes", a surcharge of 200 EUR is charged and additional attributes for configuring the Galaxy Watch are displayed.

The user can first choose the size of the Galaxy Watch: either 40 mm or 44 mm. Selecting the 44 mm variant incurs a surcharge of 100 EUR and displays another attribute allowing the user to decide if the Galaxy Watch should be delivered with a screen protector. Selecting "Yes" incurs a surcharge of 5 EUR for the screen protector.

Additionally, the user can select the connectivity type for the Galaxy Watch, choosing between Bluetooth and LTE. For LTE, a surcharge of 100 EUR is charged. Finally, the color of the Galaxy Watch can be chosen between red, black, and green.

1. Attribute In bundle with Galaxy Watch
2. No
3. Yes (+ 200 EUR)
    1. Galaxy Watch Size
        1. 40mm
        2. 44mm (+100 EUR)
        3. With screen protector
            1. No
            2. Yes (+5 EUR)
    2. Galaxy Watch Connectivity
        1. Bluetooth
        2. LTE (+100 EUR)
    3. Galaxy Watch Colors
        1. Red
        2. Black
        3. Green

## Copying Elements

Attributes, rules, and options can be efficiently copied from another product, which means a significant time saving.

The process is as follows: The user selects the product to be edited in the admin area and navigates to the **Attributes** tab.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Clicking the **Copy attributes...** button opens a popup where the product can be selected from which attributes, options, and rules should be copied.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

After selection, the corresponding values of the product are displayed in the popup. Clicking **Copy** permanently enters the values into the current product.

This procedure facilitates administration and saves time during product configuration.