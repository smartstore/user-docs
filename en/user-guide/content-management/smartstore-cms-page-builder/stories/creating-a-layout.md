# Creating a Layout

If you want to create your own template or a new story, you can start with a completely empty story. Once you have created your new story, first give it a [_System Name_](toolbox-story-options.md) and save it. Now you can create a layout for the story's grid.

## Creating a Simple Layout

To ensure your story has an appealing and [_responsive layout_](responsive-representation.md), you must define your grid accordingly. As an example, we will take the story template _For Sale_, but with a somewhat simplified layout, as the percentage sign in the middle is omitted here.

The finished story should look like this:

![](../../../../.gitbook/assets/image041.jpg)

In this story, 3 blocks are used. These should be arranged as tiles within a grid with dimensions 2x2 (i.e., 2 columns and 2 rows). Although the arrangement of the images changes with mobile or desktop resolutions, the 2x2 grid is sufficient for this functionality. Often you need to expand or adjust your grid if you want a deviation in representation between resolutions.

![](../../../../.gitbook/assets/image043.jpg)

To define the layout as desired, you must delete or add columns and rows using the [_Grid Tools_](../user-interface/the-grid.md).

## Creating an Advanced Layout

Because the text block in the Fashion template overlays ¾ of the first image and ¼ of the second in the desktop view, the grid must also be designed for this. For the text block to achieve the desired overlay of the images, the columns of the images must each be divided by 4. This makes it possible for the text block to overlay ¾ of the first image and ¼ of the second image, effectively three of four columns of the first image, plus one of the next. It looks like this:

![](../../../../.gitbook/assets/image051.jpg)

The rows are provided with the unit _auto_, which means the minimum height of the cells is determined by the content. In this configuration, the text block is at least high enough that the content (with spacing) fits into the cell. The other two rows are also set to auto, so they adapt dynamically to the space requirements of the middle row. A list of all available units of measurement can be found under [_Measurement Units_](../things-to-know.md).

A video on creating a simple story can be found on [YouTube](https://www.youtube.com/watch?v=gCHPlywtAZI&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s&index=1).
