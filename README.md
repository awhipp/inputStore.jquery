# Input Store jQuery Plugin
A jQuery plugin that allows you to define cookie-stored input fields so that a user's previous information is stored upon input.

## Installation

Just provide the inputStore.jquery.min.js file after you import jQuery (2.0+) proper.

## Compatible Form types

Confirmed to work with the following form block types:
* text input blocks
* number input blocks
* checkbox input blocks
* select blocks
* textarea blocks

For working examples visit: https://inputstore.netlify.com/

## Examples

### Default Usecase

To define a cookie stored input field such as:
```
<input type="text" name="fieldExample" id="example"></input>
```
It is as simple as:
```
 $("#example").inputStore();
 ```

This will store the input whenever a user enters information into it. The cookie name will be equal to the input name. In this case it will be `fieldExample`. The cookie will last 365 days by default.


### Custom Configuration

If you would like to add custom configuration to the cookie then you can use the following initialization:
```
 $("#example").inputStore({
   name: "CustomConfig",
   expire: 120,
   debug: true
 });
```
This will define the field with the cookie name `CustomConfig` and an expiration of 120 days. Further if you enable debug, in the javascript console you will see the the previously stored cookie value and the newly stored values as the user types.
