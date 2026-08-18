# Working with the grid

The grid is the foundation of a story. It divides the workspace into rows and columns in which you can place and align blocks.

![Story with a visible grid and multiple blocks](../../../.gitbook/assets/screenshot.png)

## Building the grid

A new story may already contain a grid supplied by the selected template. For an empty story, start with a simple basic grid and extend it as required.

When you select a row or column, the corresponding grid tools appear. You can use them to:

- insert a column on the left or right,
- delete a column,
- insert a row above or below,
- delete a row.

![Grid tools for inserting and deleting rows and columns](../../../.gitbook/assets/screenshot.png)

{% hint style="warning" %}
Before deleting a row or column, check which blocks it contains. Changing the structure can affect the position or size of existing blocks.
{% endhint %}

## Placing a block

Drag a block from **Blocks** to an empty grid cell. An existing block can be moved to another position using drag and drop.

To span multiple cells, select the block and drag its edges or corner handles. The grid indicates which rows and columns the block occupies.

For more information about adding and configuring content, see [Using blocks](blocks.md).

## Sizing rows and columns

The size of a row or column can be configured using different units.

| Unit | Suitable for |
| --- | --- |
| **px** | A fixed size that does not adapt to the available area. |
| **%** | A percentage of the container size. |
| **fr** | A flexible share of the available space in the grid. |
| **auto** | A size based on the contained content. |
| **min-content** | The smallest size required by the content. |
| **max-content** | The size required by the content without wrapping. |
| **minmax()** | A flexible range between a minimum and maximum size. |

Fractions are particularly useful for evenly sized, flexible columns. For example, two equally wide columns can each use **1fr**.

{% hint style="info" %}
Use fixed pixel values selectively. Flexible units generally adapt better to different screen sizes.
{% endhint %}

## Grid settings

The settings for the entire grid are located in the sidebar under **Layout > Grid**. If block settings are displayed there instead, first clear the selection of the current block.

Use these settings to control spacing, container widths, and the distribution of grid cells. Directly entering columns, rows, and automatic placement behavior is intended primarily for experienced users.

### Setting the spacing between grid cells

Use **Cell spacing** to set the horizontal and vertical space between grid cells. Consistent spacing creates a balanced layout and prevents content from visually running together.

Spacing within an individual block is configured in the block settings instead.

### Setting the container width

The grid distinguishes between the outer container and the content container:

- **Container:** Determines the width of the story's background layer.
- **Content container:** Determines the width of the actual grid layer.

For example, a background can extend across the full width of the page while the content remains within the regular store width.

![Story with a full-width background and restricted content container](../../../.gitbook/assets/screenshot.png)

### Distributing content in the grid

If the container is larger than the rows or columns defined within it, you can distribute the remaining space.

Horizontal distribution determines whether the grid cells are placed at the start, in the center, at the end, or with space between them.

Vertical distribution controls the corresponding arrangement from top to bottom.

**Auto flow** and the direct entry of grid rows and columns are intended for experienced users. Use the visual grid tools whenever possible.

## Designing a responsive story

The row and column structure applies to the entire story. The position, size, alignment, and visibility of blocks can be adjusted for the available screen sizes:

1. **Mobile**
2. **Mobile Landscape**
3. **Tablet**
4. **Tablet Landscape**
5. **Desktop**
6. **Desktop&plus;**

Start with the mobile layout. Then move step by step through the larger screen sizes and make only the adjustments required at each level.

![Comparison of a story in mobile and desktop layouts](../../../.gitbook/assets/screenshot.png)

Settings are passed from a smaller screen size to the next larger one unless a separate value has been configured there. A later change to the mobile layout therefore does not automatically overwrite values that were explicitly set for Desktop.

You can also show or hide individual blocks for each screen size. For information about switching between screen sizes and controlling block visibility, see [User interface](editor.md).

## Checking the grid

Check every screen size in Preview mode. Pay particular attention to:

- unintended empty spaces,
- cropped text or images,
- buttons that are too small,
- overlapping content,
- inconsistent spacing,
- horizontal scrolling on mobile devices.

Finally, check the published story on its actual target page. The active theme and surrounding page content also affect the available width.
