# Shipping conditions

A **shipping condition** connects a [shipping method](../../configuration/setting-up-shipping-methods.md) and a [package size](package-types-and-sizes.md) to a destination, tier limits, price, and surcharges.

Open **Configuration** &rarr; **Regional settings** &rarr; **Shipping rate computation methods**. Open the submenu for **Dimension-based shipping**, select **Configure**, open the **Shipping conditions** tab, and select **New shipping condition**.

In the dialog, **General** contains the scope, package size, base price, and publication status. Tier limits and surcharges are available under **Advanced**. The overview displays the general values directly; use the column selector to show advanced values when needed.

## Scope and base price

| Field | Meaning |
| --- | --- |
| Store | Applies to the selected store or, with `*`, to all stores. |
| Country | Applies to the country of the shipping address or, with `*`, to all countries. |
| Postal code | Applies to the postal code of the shipping address. Empty or `*` matches all postal codes. Multiple comma-separated wildcard patterns are supported, for example `10*, 12*`. |
| Shipping method | Shipping method to which the condition applies; `*` applies to all methods. |
| Package type and size | Package size into which the cart is packed. |
| Price | Base price per created package in the store's primary currency. |
| Published | Only published conditions are considered during calculation. |

## Tier limits

| Field | Meaning |
| --- | --- |
| Weight from / to | Optional range for the chargeable weight of an individual packed unit. |
| Volume from / to | Optional volume range for an individual package. |
| Quantity from / to | Optional range for the total quantity of products requiring shipping in the cart. |

All lower and upper limits are **inclusive**. A shipping condition with `Chargeable weight to = 10` also applies at exactly 10 units of the [base weight unit](../../configuration/managing-weights-quantity-units-dimensions.md).

## Additional weight charge

Use the following fields to combine a base price with additional weight increments:

- **Additional weight from:** Weight already included in the base price.
- **Additional weight unit:** Size of one additional increment, for example `1` kg.
- **Price per additional weight unit:** Price for each started increment.

Example: The base price includes 10 kg. Every additional started unit of 2 kg costs EUR 3. At 15 kg, three additional units are charged: `base price + 3 × EUR 3`.

## Surcharges

| Field | Meaning |
| --- | --- |
| Fixed surcharge | Fixed amount per package, for example for tolls or climate costs. |
| Percentage surcharge | Percentage applied to the base price plus additional weight charges. |
| Packaging price | Fixed packaging price per package. |
| Loading-meter charge | In fixed mode, a one-time charge per packed unit; in area-based mode, a price per calculated loading meter. |
| Oversize threshold | Value from which the oversize surcharge applies. If a girth formula exists, its result is used; otherwise the longest occupied edge is used. |
| Oversize surcharge | Fixed amount per packed unit from and including the oversize threshold. |

## Price calculation order

The price of an individual package is calculated in this order:

1. Base price
2. Price for each started additional weight unit
3. Percentage surcharge on this subtotal
4. Fixed surcharge
5. Packaging price
6. Loading-meter surcharge
7. Oversize surcharge, if applicable

If the cart requires multiple packages, each package is calculated separately and the results are added together.

## Overlapping shipping conditions

During preselection, specific matches are preferred over general matches:

- a specific shipping method before `*`,
- a specific store before `*`,
- a specific country before `*`,
- a specific postal-code pattern before empty or `*`.

If multiple conditions are equally specific and match the same tier limits, the condition with the lowest calculated price is used. A separate order for shipping conditions is not required.

The display order of the package type is unaffected. It still determines which eligible package type is preferred.

## When a shipping method is missing

Check the following in order:

1. Does the shipping method exist and is it active?
2. Is at least one matching shipping condition published?
3. Does it match the store, country, and postal code of the shipping address?
4. Is the postal-code pattern correct?
5. Can at least one configured package size contain the cart?
6. Are weight, volume, and quantity within the configured ranges?

## When a tier or surcharge does not apply

Weight and volume ranges apply to the individual package. Quantity ranges, in contrast, apply to the total quantity of products requiring shipping in the cart.

Also check:

- the publication status of the shipping condition,
- the specificity and calculated price of overlapping conditions,
- the selected loading-meter mode,
- the configuration of additional weight increments.
