# For developers

## Block development

To develop your own block, you need three essential classes.

1. **block class**

class \[*Custom*\]Block : IBlock

Acts as a block model

2. **blockValidator class**

class \[*Custom*\]BlockValidator : AbstractValidator<\[*Custom*\]Block>

Implements rules to validate user input when editing the block.

3. **blockHandler class**

class \[*Custom*\]BlockHandler : BlockHandlerBase<\[*Custom*\]Block>

Acts as a controller and is responsible for loading, saving and rendering the block. Override the *Load* and *Save* methods here and, if necessary, the *RenderCore*, and *GetRoute* methods if you want to use a different story template.

> [!INFO]
> Note: You can also use the SampleBlock in the DevTools plugin as a guide here.