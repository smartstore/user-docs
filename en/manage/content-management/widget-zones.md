# Widget zones

Widget zones are predefined positions on the pages of your store. They determine **where** content appears, for example above the page content, within a specific page area, or before the footer.

Widget zones can be used for the following content, among other things:

- widgets from installed plugins,
- stories created with the [Page Builder](../plugins/pagebuilder.md),
- custom content created under [Managing Pages & Topics](managing-pages-topics.md).

The widget zones themselves are not visible to customers.

## Enabling the widget zone display

In Developer Tools, enable **Display widget zones** to make the available positions visible in the store frontend. When accessing the store normally, the display is restricted to signed-in administrators.

For activation instructions, see [Developer Tools](../plugins/devtools.md#enabling-the-widget-zone-display).

## Displaying widget zones in the store

The widget zone menu shows the positions available on the current store page. You can use the menu to highlight a widget zone and copy its name. The displayed zones vary depending on the page, theme, and enabled features.

For instructions on using the menu, see [Displaying widget zones with Developer Tools](../plugins/devtools.md#displaying-widget-zones-in-the-store).

## Using a widget zone

Placing content usually requires two settings:

1. **Target page:** Specifies the page or content for which the output is rendered.
2. **Widget zone:** Determines the position within that page.

For example, a Page Builder story can target a product page and use a widget zone above the product description.

The available widget zones depend on the respective page, active theme, and feature being used. Some plugins determine their widget zone automatically.

![Selecting a target page and widget zone](../../.gitbook/assets/module_pagebuilder_sidebar_widgetzone.png)

## Selecting the appropriate position

Widget zone names often indicate their position. Suffixes such as **before** and **after**, for example, identify areas before or after specific page content.

To select a position:

1. Open the desired page in the store.
2. Open the widget zone menu.
3. Select a zone to highlight its position.
4. Copy the zone name if required.
5. Assign this widget zone to the desired content.

Then check the result directly on the intended page.

## Multiple items in a widget zone

If several items are assigned to the same widget zone, their display order determines the rendering sequence.

For plugin widgets, you can change the order under **CMS > Widgets** using drag and drop. For more information, see [Arranging Widgets](arranging-widgets.md).

## If content is not displayed

Check the following:

- Is the content published or enabled?
- Was the correct target page selected?
- Has an appropriate widget zone been assigned?
- Is the widget zone available on the page being viewed?
- Is the display restricted by a time period, store, or customer role setting?
- Does the display order place the content higher or lower than expected?

To check different themes or stores, use the preview described under [Previewing a Theme](../configuration/working-with-themes.md#previewing-a-theme).
