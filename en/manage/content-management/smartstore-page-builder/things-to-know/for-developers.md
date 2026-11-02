# For Developers

## Block development

To develop your own block, you need three essential classes.

1. **block class**

class \[_Custom_]Block : IBlock

Acts as a block model

2. **blockValidator class**

class \[_Custom_]BlockValidator : AbstractValidator<\[_Custom_]Block>

Implements rules to validate user input when editing the block.

3. **blockHandler class**

class \[_Custom_]BlockHandler : BlockHandlerBase<\[_Custom_]Block>

Acts as a controller and is responsible for loading, saving and rendering the block. Override the _Load_ and _Save_ methods here and, if necessary, the _RenderCore_, and _GetRoute_ methods if you want to use a different story template.

{% hint style="info" %}
Note: You can also use the SampleBlock in the DevTools plugin as a guide here.
{% endhint %}
