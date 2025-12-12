# TinyImage

The TinyImage plugin allows you to compress uploaded images.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

## Configuration of the TinyImage Plugin

| **Input field / Option** | **Description** |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compression** | TinyImage applies intelligent compression techniques to images to reduce their file size by up to 80%. However, please note that this slightly decreases processing speed for images that are not yet cached. Also note that during compression - depending on the image - memory usage may temporarily increase by several hundred MB. |
| Compress uploads         | Applies compression to uploaded images. |
| Compress thumbnails      | Applies compression to dynamically generated thumbnails. |
| **Formats** | **Info**<br> If you disable all formats, no compression will take place, regardless of other options. |
| Compress PNG files       | Reduces the size of PNG files by selectively decreasing the number of colors. |
| Compress JPG files       | Reduces the size of JPG files. Also generates 'progressive' JPEGs if the source file is larger than 10 KB. |
| Compress GIF files       | Reduces the size of (animated) GIF files. |
| **WebP** | WebP is a relatively new format for lossless image compression and is currently supported by Chrome, Chrome Mobile, and Opera (approx. 70% market share as of 2018). TinyImage can deliver images in WebP format to the browser if supported. Other browsers are served images in their original format (PNG or JPG). Depending on the image, however, better compression rates may be achieved for PNG and JPG files. Therefore, we recommend disabling WebP for formats that are already being compressed. However, if you value overall fast image processing and minimal memory usage, turn on WebP and turn off PNG and JPG compression. |
| WebP instead of PNG      | Generates and delivers WebP instead of PNG files to WebP-enabled browsers. |
| WebP instead of JPG      | Generates and delivers WebP instead of JPG files to WebP-enabled browsers. |
| **Tools** | TinyImage uses various third-party tools in the background for compression, with the selection depending on the file format. Each tool offers various options for defining output quality. The TinyImage default settings offer the best compromise between file size and quality. If you still wish to make adjustments, visit the provider sites for more information. |
| **Miscellaneous** | |
| Display notifications    | Displays a short summary of the achieved compression rate after a file upload. |