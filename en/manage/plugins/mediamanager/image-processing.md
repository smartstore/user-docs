# Reprocessing images

Re-encode existing images using the current media settings and understand how image optimization and video thumbnails work together.

## Reprocessing images

**Reprocess** reloads and decodes selected image files, then saves them using the currently configured image processing options.

This is useful, for example, after changing the JPEG quality or PNG compression.

1. Select one or more image files.
2. Open the context menu.
3. Select **Reprocess**.
4. Confirm the operation.

When processing is complete, the Media Manager displays the file size before and after processing as well as the difference.

{% hint style="warning" %}
Re-encoding can make files smaller or larger. Processing modifies the stored original file. Back up important original files beforehand.
{% endhint %}

The underlying options are configured in the [Media Settings](../../configuration/general-settings-preferences/media-settings.md).

## Taking TinyImage into account

If [TinyImage](../tinyimage.md) is active and configured for uploads, optimization also runs during reprocessing. Depending on its configuration, TinyImage can compress PNG, JPEG, and GIF files and provide WebP variants.

## Generating video thumbnails

The Media Manager can automatically generate preview images from videos. This requires FFmpeg on the server. Smartstore attempts to provide the required native component. If this is not possible, an administrator or hosting provider must install FFmpeg.

The FFmpeg parameters are not regular settings for store operators and should only be changed by technically experienced administrators.
