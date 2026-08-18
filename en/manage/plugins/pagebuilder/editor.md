# User interface

In the Page Builder editor, you design a story, manage its blocks, and check its appearance at different screen sizes.

![Page Builder editor with its main work areas](../../../.gitbook/assets/screenshot.png)

## Work areas at a glance

The editor consists of the following areas:

1. **Toolbar:** Save, undo, preview, and other actions.
2. **Device slider:** Selects the screen size currently being edited.
3. **Workspace:** Displays and edits the story in the grid.
4. **Block Manager:** Provides an overview of the blocks used in the story.
5. **Sidebar:** Contains settings for the story, background, grid, and blocks.

## Toolbar

The toolbar above the story contains the main actions.

| Action | Function |
| --- | --- |
| **Save** | Saves the story and its configured settings. |
| **Save as template** | Creates a reusable template from the story. |
| **Undo** | Reverts the last edit. |
| **Redo** | Restores an edit that was previously undone. |
| **Clone** | Creates a copy of the story. |
| **Export** | Exports the story for later reuse. |
| **Preview mode** | Displays the story without the editing grid and with its intended appearance. |
| **Full screen** | Enlarges the editor to use the available screen area. |
| **Delete** | Deletes the story after confirmation. |

![Page Builder editor toolbar](../../../.gitbook/assets/screenshot.png)

Keyboard shortcuts are available for frequently used actions:

- **Ctrl + S:** Save
- **Ctrl + Z:** Undo
- **Ctrl + Y:** Redo
- **Ctrl + Alt + P:** Toggle Preview mode
- **Ctrl + F11:** Toggle full-screen mode

{% hint style="info" %}
Save regularly while making extensive changes. Preview mode does not save the story.
{% endhint %}

## Device slider

Use the device slider to select the screen size for which you are currently editing the story.

The following sizes are available:

- **Mobile**
- **Mobile Landscape**
- **Tablet**
- **Tablet Landscape**
- **Desktop**
- **Desktop&plus;**

![Device slider with the six screen sizes](../../../.gitbook/assets/screenshot.png)

The Page Builder follows the mobile-first principle. Settings from a smaller screen size are passed to the next larger level unless a separate value has been configured there.

Start with **Mobile** and work step by step up to **Desktop&plus;**. For more information, see [Working with the grid](grid.md#designing-a-responsive-story).

## Workspace

The workspace displays the grid and the blocks placed in it. Here you can:

- select blocks,
- move blocks using drag and drop,
- resize blocks,
- edit rows and columns,
- open block actions.

The workspace provides an editable approximation of the final result. Backgrounds, media, or effects may look different or may not yet be visible in edit mode. Use Preview mode to check them.

## Block Manager

The Block Manager is located on the right side of the workspace and displays all blocks in the story as a list. It is especially useful for complex stories and for blocks that overlap in the workspace.

At wide workspace sizes, the sidebar may cover the Block Manager depending on the available screen resolution. In this case, drag the device slider to the left to reduce the workspace size and make the Block Manager visible again.

![Block Manager with multiple blocks and their actions](../../../.gitbook/assets/screenshot.png)

In the Block Manager, you can:

- select and edit a block,
- change the display order,
- copy or delete a block,
- configure visibility for the selected screen size.

The display order in the Block Manager is built from bottom to top. A block that appears higher in the list is placed in front of the blocks below it. The first block is therefore **top-most** and appears in the foreground when blocks overlap.

{% hint style="info" %}
If the Block Manager does not display any blocks even though the story contains blocks, reload the page completely using **Ctrl + F5**. In most cases, this rebuilds the block list.
{% endhint %}

Visibility can have three states:

| State | Meaning |
| --- | --- |
| **Visible** | The block is displayed for the selected screen size. |
| **Not visible** | The block is hidden for the selected screen size. |
| **Not specified** | The setting is inherited from the preceding smaller screen size. |

For detailed information about working with content elements, see [Using blocks](blocks.md).

## Sidebar

The sidebar displays settings either for the entire story or for the currently selected block.

### Story settings

When no block is selected, the **Layout**, **Background**, and **Blocks** areas are available.

Under **Layout**, you can configure:

- system name and publication status,
- publication period and display order,
- restrictions to stores or customer roles,
- visibility rules,
- widget zones and target pages,
- grid and style settings.

Under **Background**, you design the background of the entire story. In **Blocks**, you select new content elements.

### Block settings

When you select a block, the sidebar switches to edit mode for that block. Here you can configure:

- visibility and alignment,
- position in the grid,
- spacing and size,
- background and box appearance,
- effects,
- advanced CSS settings.

Open the block's content settings using **Edit** or the gear icon on the selected block.

## Using Preview mode

Enable Preview mode using the eye icon or **Ctrl + Alt + P**.

Check the following:

- how all blocks work together,
- backgrounds and overlaps,
- animations and hover effects,
- videos and other embedded media,
- the appearance at every screen size.

Finally, check a published story on its actual target page in the store.
