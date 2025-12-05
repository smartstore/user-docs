# Glossary

## Size units

### Fixed units

**px**: Pixel - Fixed size

### Relative units

**%**: Percentage of the container size.

**Em**: An em represents the font size of the element calculated by the browser. The side length of the letters is used as a reference. This corresponds approximately to the dimensions of the capital letter "M". If the font size itself (font-size) is specified in em, the unit refers to the font size of the parent element.

**rem**: A rem (root-em) corresponds to the font size specified for the root element (in HTML, the html element). (Possible font size changes in parent elements can be skipped this way).

**vh**: (Viewport-Height) The unit vh corresponds to the 100th part of the height of the display area (viewport). So: 100vh = height of the viewport.

**vw**: (Viewport-Width) The unit vw corresponds to the 100th part of the width of the viewport. The following applies: 100vw = width of the viewport.

### Flexible units

**fr**: Sets the size to a fraction of the remaining/available space to be filled.  
**auto**: Sets the size to the minimum requirement of the available content. Perfect for height scaling of images.  
**min-content**: The cells will be as large as the smallest content in the axis.  
**max-content**: The cells will be as large as the largest content in the axis.  
**fit-content**: The cells are scaled to fit the content.  
**minmax**: Restricts the size between min and max. Two different units can be used, for example: "at least 200 px, but at most 50%".

> [!INFO]
> Note: repeat is not supported

### Screen breakpoints

**xs**: extra-small (mobile)

**sm**: small (mobile landscape)

**md**: medium (tablet)

**lg**: large (tablet landscape)

**xl**: extra-large (desktop)