# Troubleshooting the Media Manager

Find possible causes of common problems when uploading, deleting, restoring, and displaying media files.

## Why can't I upload a file in a particular area?

Uploads are not possible in virtual views such as **All files**, **Trash**, **Transient**, **Orphaned**, and **Unassigned**. Select a regular album or folder. Also check your edit permission.

## Why is a file rejected during upload?

Possible causes include:

- The file exceeds the maximum permitted file size.
- The file extension is not permitted in the media settings.
- The image file is corrupt or cannot be processed.
- An additional upload limit imposed by the server or hosting provider has been exceeded.

## Why can't I delete a file?

The file may still be used by a data entity or locked by another operation. Check **References** in the details pane.

## Why can't a file be restored?

The original folder must still exist for automatic restoration. Unassigned files without a valid folder assignment must be copied manually to a folder.

## Why does a modified image still look unchanged in the browser?

The browser or a proxy may have cached an older version. Enable file versioning for media URLs or clear the browser cache for testing purposes. Also check any CDN that may be in use.

## Why aren't new thumbnail sizes immediately visible everywhere?

Thumbnails are generated as needed and may be cached. Browser, proxy, or CDN caches may continue to serve the previous version. In contrast, the **Reprocess** feature affects the selected original images and should not be used solely to clear thumbnail caches.

For additional technical settings, see [Media Settings](../../configuration/general-settings-preferences/media-settings.md).
