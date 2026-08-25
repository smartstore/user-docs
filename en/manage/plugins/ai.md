# AI

The AI Plugin works with an AI Provider (e.g. [OpenAI ChatGPT](ai-provider/openai-chatgpt.md)) and offers many possibilities to create new content or restructure existing content.

{% hint style="info" %}
**Notes:**

1. Product images cannot be created with this plugin.
2. No guarantee is assumed for the accuracy of the content.
3. Bulk editing of content is not supported for the following reasons:
   * The content must always be reviewed by the user.
   * Performance would be severely reduced.
{% endhint %}

## Selecting and Configuring an AI Provider

The AI plugin provides the features and dialogs. To connect to an AI service, at least one provider plugin must also be installed and configured.

| **Provider** | **Text and translation** | **Generate images** | **Analyze images** | **Connection** |
| --- | --- | --- | --- | --- |
| [Anthropic Claude](ai-provider/anthropic-claude.md) | Yes | No | Yes | API key |
| [DeepSeek](ai-provider/deepseek.md) | Yes | No | No | API key |
| [Google Gemini](ai-provider/google-gemini.md) | Yes | Yes | Yes | API key |
| [Ollama](ai-provider/ollama.md) | Yes, depending on the model | No | Depending on the model | Ollama instance |
| [OpenAI ChatGPT](ai-provider/openai-chatgpt.md) | Yes | Yes | Yes | API key |

{% hint style="info" %}
Setup, model reloading, connection testing, and provider-specific information are documented on the respective provider page.
{% endhint %}

## Overview of the Different Dialogs

The AI Plugin offers different dialogs for text and image generation depending on the context.

### SimpleText

For simple texts without formatting (title, short description, ...), the SimpleText dialog is used.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Clicking on the AI symbol  opens a context menu with various commands to regenerate texts, summarize, change language style and tone, improve writing style, simplify text, or expand on it. Clicking on Send  sends your prompt to the AI.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

The dialog offers a variety of ways to generate and edit text. By entering a prompt in the prompt bar, you can describe what content should be created. You can find a deeper insight into the dialogs in the [General Dialog](ai.md#general-dialog) section.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Clicking **Apply answer** transfers the selected text into the field. Additionally, the answer can be copied to the clipboard  and the style can be changed .

### RichText

The RichText dialog is used for texts with formatting, HTML, and rich content such as links, images, lists, and tables. Clicking the AI symbol  uses the same context menu as SimpleText. The dialog additionally features a sidebar (left).

{% hint style="warning" %}
Missing screenshot
{% endhint %}

#### Sidebar

The sidebar provides extended setting options for creating content. Depending on which entity (Product, Blog, News, ...) is being edited, different options are displayed.

{% hint style="warning" %}
Missing screenshots (Sidebar options)
{% endhint %}

{% hint style="warning" %}
With the **Save settings** button, the sidebar settings used for the currently active entity can be saved as default. This ensures a consistent design in your shop.
{% endhint %}

#### Generating Images

{% hint style="warning" %}
Missing screenshot
{% endhint %}

If the **Insert images** option is activated in the sidebar, initially only placeholders  are displayed in the generated text. This serves to keep the number of generations low and to only start when the text is no longer being changed. Next to the **Apply answer** button, the **Generate images** button appears. If this is clicked, the images are generated one after the other and, upon clicking **Apply answer**, transferred to the Media Manager and linked to the text.

#### HTML Editor Integration

{% hint style="warning" %}
Missing screenshot
{% endhint %}

If you want to use AI in the HTML editor, simply click on the icon  in the toolbar and the familiar dialog opens.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

If only a specific text should be revised, highlight the desired text section in the editor and click on the icon  in the toolbar again. The option to regenerate is now disabled; all other options now refer to the selected text.

### Suggestions

For new blog and news posts, you can get title suggestions based on topics or keywords. simply go to the AI icon  in the empty title field and the Suggestions dialog opens. After entering your topic or keywords in the prompt bar, titles are generated. These can be transferred by clicking on **Apply**.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

{% hint style="info" %}
Please do not forget to **save** the post immediately afterwards, otherwise further editing is not possible!
{% endhint %}

### Translations

{% hint style="warning" %}
Missing screenshot
{% endhint %}

In the editor with language selection, the contained fields can be automatically translated via AI. To do this, click on the AI icon  and select the field to be translated.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

The Translations dialog shows you all language entries and offers you the possibility to translate missing languages or re-translate all languages. With **Apply** and **Apply all**, you can internationalize your entity.

1. First, select whether all languages should be re-translated or only the missing languages.
2. Then click on Send  to start the translation of the text.

If you want to apply individual translations, click on **Apply** in the tab of the respective language. If all translations should be applied, click on **Apply all** in the prompt bar.

### Images

{% hint style="warning" %}
Missing screenshot
{% endhint %}

In blog and news posts, the AI tool offers the possibility to generate a matching image and a preview for created content.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

When generating images, the sidebar is filled with optional setting possibilities.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

### General Dialog

#### Model Selection

{% hint style="warning" %}
Missing screenshot
{% endhint %}

When you click on the model selection (top right), a list of all AI models that can be used for the current dialog is displayed. The available models depend on the providers that are installed and configured. For selection and setup guidance, see the [provider overview](ai.md#selecting-and-configuring-an-ai-provider).

#### Prompt Bar

{% hint style="warning" %}
Missing screenshot
{% endhint %}

The prompt bar offers more than just an input field for the simple prompt. You can edit the extended prompt , change the word limits , the language style , and the tone  of the text.

**RawPrompt**

{% hint style="warning" %}
Missing screenshot
{% endhint %}

Clicking the prompt icon  takes you to the RawPrompt  (extended prompt). This contains the instructions that are actually passed on to the AI. Detailed changes can be made here to adapt the prompt to your own needs.

{% hint style="warning" %}
Missing screenshot
{% endhint %}

{% hint style="warning" %}
Application example:

* Adding a table with important features
* Personalized formatting
{% endhint %}

### Examples

#### Product Texts

#### Blog Entry

## Configuration

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option**                 | **Description**                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expressions                |                                                                                                                                                                                                            |
| Language styles            |                                                                                                                                                                                                            |
| Media types                |                                                                                                                                                                                                            |
| Environments               |                                                                                                                                                                                                            |
| Lighting types             |                                                                                                                                                                                                            |
| Color styles               |                                                                                                                                                                                                            |
| Moods                      |                                                                                                                                                                                                            |
| Composition types          |                                                                                                                                                                                                            |
| Translate default language | The default language is the first active language of a store. If no value is stored for it, the value from the "Standard" tab is used. Therefore, it is recommended not to translate the default language. |
| Offer sample generator     | Provides a chat generator that creates sample data.                                                                                                                                                        |

### Text Lengths

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option**                                    | **Description**                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------- |
| Max word count for product short description  | Sets the maximum number of words generated for the short description of a product. |
| Min word count category description (top)     | Sets the minimum number of words generated for the top category description.       |
| Max word count category description (top)     | Sets the maximum number of words generated for the top category description.       |
| Min word count manufacturer description (top) | Sets the minimum number of words generated for the top manufacturer description.   |
| Max word count manufacturer description (top) | Sets the maximum number of words generated for the top manufacturer description.   |

### Image Metadata

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option**                      | **Description**                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| Create metadata on image upload | Determines whether metadata is automatically generated when uploading an image.          |
| Provider for image analysis     | Defines the provider used for creating metadata for images.                              |
| Generate Title attribute        |                                                                                          |
| Generate Alt attribute          |                                                                                          |
| Generate tags                   | Determines whether tags should be generated for better findability in the Media Manager. |
| Number of tags                  |                                                                                          |
| Consider images for             | Determines the types for which images are processed during upload.                       |

This feature requires a provider that supports image analysis. See the [provider overview](ai.md#selecting-and-configuring-an-ai-provider) for suitable providers.

{% hint style="warning" %}
If the option ‘Create metadata on image upload’ is activated, the image is analyzed by the AI upon upload.
{% endhint %}

### Product Creation

{% hint style="warning" %}
Missing screenshot
{% endhint %}

| **Option**           | **Description**                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Add SEO properties   | Determines whether SEO properties of the product should also be created when creating products using AI.                    |
| Add translations     | Determines whether translations for the product should also be created when creating products using AI.                     |
| Assign manufacturer  | Determines whether an automatic assignment to an existing manufacturer should be attempted when creating products using AI. |
| Determine EAN        | Determines whether the EAN for the product should also be determined when creating products using AI.                       |
| Determine weight     | Determines whether the weight for the product should also be determined when creating products using AI.                    |
| Determine dimensions | Determines whether the dimensions for the product should also be determined when creating products using AI.                |

## Product Creation

{% hint style="info" %}
This is an experimental feature!
{% endhint %}

{% hint style="info" %}
To avoid long waiting times, it is recommended to turn off the **Add translations** setting if they are not needed.
{% endhint %}
