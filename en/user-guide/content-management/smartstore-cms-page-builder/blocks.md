# Blocks

## Blocks Overview

Blocks are an essential component of the Page Builder. All content is displayed using blocks. Depending on the desired content, various blocks are available to you.

![](../../../.gitbook/assets/Blocks.jpg)

**① Text:** Displays formatted text. Furthermore, the text block can display buttons, icons, backgrounds, effects, and much more.

**② Image:** Displays a single image. The image block is best suited when an image is to be displayed without text.

**③ Product List:** Presents products in a list, a grid, or as a slider. The products to be displayed are determined by a manual product selection or by a category-related selection.

**④ Categories:** Similar to the product list, categories are listed in this block.

**⑤ Manufacturer List:** Similar to the product list, manufacturers are listed in this block.

**⑥ IFrame:** Displays external pages within an IFrame.

**⑦ Gallery:** Presents images in a list, a grid, or as a slider.

**⑧ Video:** Displays a video. The MP4 format should be stored here, as this format is supported by almost all browsers.

**⑨ YouTube:** Embeds YouTube videos by storing a YouTube ID or URL.

**⑩ SoundCloud:** Embeds SoundCloud audio streams.

**⑪ Google Maps:** Displays a location with Google Maps.

**⑫ Blog:** Displays entries from your blog.

**⑬ News:** Displays entries from your news.

**⑭ Newsletter:** Offers customers the option to subscribe to your newsletter.

**⑮ Poll:** With this block, you can create short polls.

**⑯ Code:** Used to embed custom JavaScript, HTML, or CSS code. IntelliSense (autocomplete) supports your work.

**⑰ ViewComponent:** This block is intended for developers. With the ViewComponent block, you can embed your own modules.

**⑱ Story:** Inserts existing stories as an atomic block. In this way, you can easily and quickly design very extensive and large stories composed of several smaller stories.

All these blocks share the same basic settings, such as background and effects. You can learn more about the basic settings under [_Block Basic Settings_](blocks/block-basic-settings.md). Furthermore, you can find out more about individual blocks under [_Block-Specific Settings_](blocks/block-specific-settings.md).

**Note:** Remember that some blocks like Video or Google Maps, as well as block effects, do not display content in _Edit Mode_. Switch to _Preview Mode_ to see all content.

A video about the blocks in the overview can be found on [YouTube](https://www.youtube.com/watch?v=j43k8nUgKUs&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s&index=3).

## Edit Block

You can add a block to your story by simply dragging and dropping the desired block from the Blocks tab into a cell within [_the grid_](user-interface/the-grid.md). To modify the size of the block, select it. Now you can determine the size of the block by clicking and dragging on the top, bottom, or right edge. Alternatively, you can also drag one of the two right corners of the block to change the size. To move the block to your desired position, simply drag and drop the block into the desired cell, just like when inserting. The size of a cell is determined by the row and column specifications. If these are set to [_auto_](things-to-know.md) or [_min/max-content_](things-to-know.md), the cell size is determined by the block content.

To modify a block, call up the Block Actions by selecting the desired block. Alternatively, you can also access the Block Actions via the [_Block Manager_](user-interface/block-manager.md). To do this, simply click on the desired block in the Block Manager.

![](../../../.gitbook/assets/image076.jpg)

**① Configure:** Opens the Block Editor. Depending on the block type, a different editor opens. Here you can adjust the content of the block.

**② Up:** Increases the [_z-index_](blocks/toolbox-block-options.md) value of the block.

**③ Down:** Decreases the z-index value of the block. The z-index cannot fall below 0.

**④ Duplicate:** Creates an exact copy of the block and inserts it into the next free column/row.

**⑤ Delete:** Permanently deletes the block from the story.

A video on arranging blocks can be found on [YouTube](https://www.youtube.com/watch?v=_XqRv4of_4M&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s&index=6).

## Block Actions

To display the Block Actions, hover over the desired block in the Block Manager. The Block Actions now displayed match exactly the controls displayed on the left edge of the block when it was selected.

![](../../../.gitbook/assets/blockoptionen_2.jpg)

Here you can access various Block Actions, such as the block's edit mode to adjust the content. With the arrows, you can increase or decrease the z-index of the block, allowing the block order to be adjusted.

In the following example, the block order within the story is slightly modified, as the _Get the look_ block is assigned the highest z-index.

![](../../../.gitbook/assets/image055.jpg)

Note the order of the blocks in the Block Manager and how the _Get the look_ block now covers the _%_ image within the story.

Blocks are displayed in descending order of z-index in the story. Accordingly, all blocks of a story are also listed in the Block Manager. Since the _Get the look_ block has a higher z-index than other blocks in the story, it is displayed as the top element in the Block Manager and within the story.
