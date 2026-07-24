# Cleaning up the media library

Manage deleted, transient, orphaned, and unassigned files, and carefully review which files are no longer needed.

## Using special views

The Media Manager provides the following virtual views:

| View | Meaning |
| --- | --- |
| **All files** | The entire active media library |
| **Trash** | Files that have not yet been permanently deleted |
| **Transient** | Files that can be deleted during the next automatic cleanup operation |
| **Orphaned** | Files without a known reference from a data entity |
| **Unassigned** | Files that are not assigned to a folder |

Empty special views may be hidden. You cannot upload files or create folders in these views.

## Moving files to the Trash

Outside the Trash, the **Delete** action initially moves the selected files to the Trash. The files can then be restored.

Files that are in use or locked may not be deleted. In this case, the Media Manager displays a warning.

## Deleting files permanently

The **Delete permanently** action removes files irreversibly.

{% hint style="danger" %}
Permanently deleted files cannot be restored through the Media Manager. The action is also available in the context menu outside the Trash.
{% endhint %}

## Restoring files

1. Open the **Trash**.
2. Select one or more files.
3. Select **Restore**.

The file is returned to its original folder. If an active file with the same name already exists there, the restored file is automatically given a unique name.

A file without a valid folder assignment cannot be restored automatically. Manually copy such a file to a folder of your choice.

## Detecting orphaned files

An orphaned file is a media file for which no known use by a data entity was found.

1. Open the album's context menu.
2. Select **Detect orphaned files**.
3. Confirm the operation.

The Media Manager checks all files in the album. With a large media library, this check may take some time. Files without a detected reference then appear in the **Orphaned** view.

{% hint style="warning" %}
Review orphaned files carefully before deleting them. A file may be used through manually entered URLs, custom code, or external systems without having a reference that the system can detect.
{% endhint %}

## Taking automatic cleanup into account

The general media settings can specify that orphaned files are marked as transient and deleted during a later cleanup operation.

For more information, see [Media Settings](../../configuration/general-settings-preferences/media-settings.md).
