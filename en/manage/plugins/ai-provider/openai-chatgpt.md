# OpenAI ChatGPT

The OpenAI ChatGPT plugin enables Smartstore's AI features to generate text and images and to analyze images.

![OpenAI ChatGPT plugin configuration](../../../.gitbook/assets/module_chatgpt_configuration.png)

{% hint style="info" %}
The OpenAI ChatGPT plugin provides the connection to OpenAI. The features for creating and editing content are provided by the [AI plugin](../ai.md).
{% endhint %}

For information about API access, refer to the [official OpenAI documentation](https://developers.openai.com/api/docs/overview).

## Configuration

| **Option** | **Description** |
| --- | --- |
| API key | Authenticates Smartstore with OpenAI. A ChatGPT subscription does not automatically include use of the OpenAI API. |
| Preferred AI models for generating text | Defines which available text models are offered in Smartstore's AI dialogs. If left empty, Smartstore uses the provider's preferred default models. |
| Preferred AI models for generating images | Defines which available image models are offered in Smartstore's AI dialogs. |
| AI model for analyzing images | Defines which model analyzes image content and generates information such as titles, alt text, and tags. |
| Maximum number of tokens | Limits the length of a response. Setting this value too low can result in incomplete longer outputs. The available upper limit depends on the selected model. |
| Sampling temperature | Controls response variation. Lower values generally produce more predictable results, while higher values produce more varied results. |
| TopP | An alternative method for controlling response variation. Usually, either TopP or the sampling temperature should be adjusted, but not both. |

### Verification

1. Save the settings.
2. Click **Reload models** to reload the available models.
3. Under **Test connection**, select a text model and click **Test now**.

If the connection cannot be established, check the API key, API billing, and whether your API account can access the selected model.

{% hint style="warning" %}
API requests can incur usage-based costs.
{% endhint %}
