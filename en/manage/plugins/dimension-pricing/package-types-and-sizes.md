# Package types and sizes

A **package type** groups related forms of transport, such as parcel, pallet, or container. A **package size** describes a specific cuboid format and its limits, such as Parcel S or Half pallet.

## Create a package type

1. Open **Configuration** &rarr; **Regional settings** &rarr; **Shipping rate computation methods**. Open the submenu for **Dimension-based shipping**, select **Configure**, and open the **Package types and sizes** tab.
2. Select **New package type**.
3. Enter a unique name, such as `Parcel shipping` or `Pallet shipping`.
4. Set the **Display order**. Lower values have higher priority during selection.
5. Save the package type.

## Create a package size

Open a saved package type, select **Package sizes**, and click **New package size**.

| Field | Meaning |
| --- | --- |
| Name | Unique administrative name, such as `Parcel S` or `Half pallet`. |
| Max. width, Max. height, Max. length | Maximum dimensions of the package size. The packing algorithm tries to arrange products within these limits. |
| Max. weight | Maximum package weight. It is considered during packing when weight calculation is enabled. |
| Fraction of a full unit | Relates partial sizes to a full unit. `1` represents a full unit. Smaller values are preferred when priority is otherwise equal. |
| Max. girth | Optional maximum. `0` disables the limit. |
| Girth formula | Optional formula using `Width`, `Height`, and `Length` that calculates the girth of the packed result. |
| Max. volume | Optional maximum for the sum of product volumes in the package. `0` disables the limit. |
| Volumetric weight factor | Multiplies the packed volume by a factor. The greater of actual weight and volumetric weight becomes the chargeable weight. `0` disables the conversion. |
| Max. loading meters | Optional maximum per package. Its meaning depends on the selected [loading-meter mode](settings.md#loading-meter-calculation). `0` disables the limit. |

Example girth formula:

```text
Length + 2 * Width + 2 * Height
```

The formula is applied to the actual occupied dimensions of the packed result. If a maximum girth is set but the formula cannot be evaluated, the package size is not eligible.

Use the buttons below the formula field to insert `Width`, `Height`, and `Length`. The girth formula is validated when you save; errors are reported directly on the field.

## Use in shipping conditions

A [shipping condition](shipping-conditions.md) connects a package size to a shipping method, destination, and price. Therefore, create the required package types and sizes first.

## When no package size fits

Check:

- the maximum dimensions and weight of the package sizes,
- the product-dimension source in the [settings](settings.md),
- girth, volume, and loading-meter limits,
- packing formulas for non-cuboid products,
- carts containing multiple products or higher quantities.
