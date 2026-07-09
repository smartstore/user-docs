# Summernote Font Tools Deactivated

## Motivation

As part of the development of Smartstore Version 6, we also redesigned the HTML editor. During this process, we disabled the controls for selecting font family and font size. There are several reasons why we no longer recommend using these features.

The two main reasons are:

* Every time these options are used, they wrap the existing HTML elements and apply the corresponding inline styles. The more often this feature is used, the more nested HTML elements are created. Search engines do not favor overly nested HTML, and pages with excessive nesting may be penalized with lower rankings. Additionally, important keywords, including those in the product description, may be ignored.
* To ensure a consistent appearance throughout the product description, different font families should not be used. Font sizes should also be limited to only a few predefined sizes.

Instead, use different HTML tags to structure your content: [h* tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) for headings (* = 1–6) and [p tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) for paragraphs.

## Headings

The h* tags used for headings can be selected directly in the editor.

Select the line that should become a heading, then open the **Style** dropdown (¶ icon). This menu provides six heading levels, which should be used hierarchically. Subheadings are represented by higher heading numbers. Once you select a heading level, the formatting is applied automatically and displayed in the editor.

In the source code view (</\> icon), you can see that an h* tag has been added around the selected text.

## Upcoming Features

Version 6.0.1 will introduce the ability to change font sizes relatively. These changes will be applied using CSS classes rather than inline styles.

## Bootstrap

If you need to customize the appearance of your text, you can always edit the HTML source directly. We recommend using Bootstrap classes, some of which are already available through the **CSS Class** dropdown menu.

[https://getbootstrap.com/](https://getbootstrap.com/)

## Custom Styles

In combination with the *_user.scss* file, you can also create your own CSS classes for font and text styling and use them in the HTML editor.

You can also define custom formats in *globalinit.js* (*\\wwwroot\\lib\\editors\\summernote\\*). These are made available through the `cssclass` object inside the `formats` section and must be added manually.

```javascript
summernote_global_config = {
    /* Inhalt zu Demonstrationszwecken verkürzt dargestellt. */
    imageAttributes: {
        /* ... */
    },
    cssclass: {
        formats: {
            "link-primary": { inline: true, toggle: /^link-(primary|danger)$/ },
            "link-danger": { inline: true, toggle: /^link-(primary|danger)$/ },
            "text-center": { toggle: /^text-center$/ },
            "custom-class": {
                displayClass: "text-light p-2",
                style: "background: linear-gradient(to bottom right, white, black);",
                inline: true,
                toggle: /^custom-class$/
            },
        }
    }
}; 
```

The `toggle` property determines whether related classes can be applied to the same element at the same time. In the example above, only the most recently assigned class is kept when switching between `link-primary` and `link-danger`. If you change the [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions) to `/^link-primary$/` and `/^link-danger$/`, both classes can be applied simultaneously.

The `inline`, `displayClass`, and `style` properties control how the option is displayed in the dropdown menu. CSS classes are applied using `displayClass`, while explicit CSS styles are defined using `style`.

## Re-enabling the Legacy Font Tools

If font family and font size selection are essential for your workflow, you can re-enable these tools in *globalinit.js* (*\\wwwroot\\lib\\editors\\summernote\\*) (starting around line 79):

```javascript
toolbar: [
    ['edit', ['undo', 'redo']],
    ['text', ['bold', 'italic', 'underline', 'color', 'moreFontStyles']],
    //['color', ['forecolor', 'backcolor']],
    //['font', ['fontname', 'fontsize']],
    ['para', ['ai', 'style', 'cssclass', 'ul', 'ol', 'paragraph', 'clear', 'cleaner']],
    ['insert', ['link', 'image', 'video', 'table', 'hr']],
    ['view', ['codeview', 'fullscreen', 'help']]
],
```

The `font` line is commented out. Remove the comment to restore both tools, or move either `fontname` or `fontsize` to a different toolbar.

| **Method**         | **Before**                              | **After**                                 |
| ------------------ | --------------------------------------- | ----------------------------------------- |
| Remove the comment | `//['font', ['fontname', 'fontsize']],` | `['font', ['fontname', 'fontsize']],`       |
| Move a tool        | `['edit', ['undo', 'redo']],` | `['edit', ['undo', 'redo', 'fontsize']],`       |