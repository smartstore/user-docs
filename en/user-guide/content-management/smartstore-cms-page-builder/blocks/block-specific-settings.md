# Block-Specific Settings

## Text

The Text block offers comprehensive options for formatting text. With the _Title_ field, you can give the block a formatted title. The title is displayed above the intro and text element. Additionally, the block receives the title as a name in the [_Block Manager_](../user-interface/block-manager.md). Alternatively, you can also hide the title, which prevents it from being displayed as text within the block. The _Tagline_ is displayed above and the _Intro_ below the title. The text field, which is intended for body text, has an extensive text editor with which you can format your body text. Furthermore, the individual text elements offer options to configure font size, font type, font color, HTML tags, and spacing.

![](../../../../.gitbook/assets/Textblock_config_2.jpg)

Alternatively, you can find a video explaining the Text block on [YouTube](https://www.youtube.com/watch?v=TRuKwwOs-nI&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s&index=2).

## Image

In the Image block, in addition to the option to select the graphic, there is also the possibility to limit the maximum size of the longest side of the image in pixels.

## Product List

With the Product List block, you can vividly present a selection of products. Here, display options such as slider, grid, or list view are available to you. Configure the number and presentation of the displayed products. For example, you can determine whether prices, short descriptions, delivery times, or other attributes of the product should be displayed.

![](../../../../.gitbook/assets/Productlist_config_2.jpg)

## Categories

With the Categories block, you can vividly present a selection of categories. The Categories block has the same configuration options as the Product List block.

## Manufacturer List

With the Manufacturer List block, you can vividly present a selection of products (manufacturers). The Manufacturer List block has the same configuration options as the Product List block.

## IFrame

With the IFrame block, you can display an external page within a window. For this, you must specify the page URL.

## Video

You should upload your video as an MP4 file, as this file format is supported by most browsers. Additionally, you can upload WebM and Ogg files. Furthermore, there are various setting options such as aspect ratio or controls to customize your video player.

![](../../../../.gitbook/assets/Videoblock_config_2.jpg)

## YouTube

The YouTube block offers similar setting options to the Video block. Instead of uploading a video, you must specify the YouTube ID or URL. Besides options like aspect ratio and privacy mode, you can also determine a time segment in the video which should be played.

![](../../../../.gitbook/assets/YouTubeBlock_config_2.jpg)

## SoundCloud

With this block, audio streams from the service [_SoundCloud_](https://soundcloud.com/) can be embedded. Simply specify the URL to embed. Additionally, various options for configuring the display are available.

![](../../../../.gitbook/assets/SoundCloudBlock_config_2.jpg)

## Code

With the Code block, you can insert your own code. You can, for example, incorporate custom functionalities or format your text yourself. When coding, you are supported by IntelliSense.

![](../../../../.gitbook/assets/CodeBlock_config_2.jpg)

## Google Maps

With the Google Maps block, you can have an address displayed on Google Maps. For this, you must specify your Google Maps API Key as well as the coordinates - longitude and latitude - of the desired position.

![](../../../../.gitbook/assets/GoogleMaps_config_2.jpg)

## MVC Route

Use the Route block to target an Action directly to output the (partial) ViewResult. For this, you must specify your route as a JSON object. This block is intended for experienced developers.

JSON Example:

```
{
"Area":"",
"Controller":"News",
"Action":"HomePageNews"
}
```

In the example, we target the _News_ controller to get the ViewResult of the _HomePageNews_ action method. With this example, news is output.

A video on the MVC Route block can be found on [YouTube](https://www.youtube.com/watch?v=rsTuHDK47rQ&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s&index=4).

## Story

Using the Story block, you can insert complete [_stories_](../stories.md) as an atomic element into your current story. This makes it possible to organize and manage complex storytelling, which consists of various small stories and extends over the entire page, simply and clearly within a story.
