# Cookie Store jQuery Plugin
A jQuery plugin that allows you to define cookie-stored input fields so that a user's previous information is stored upon input.

To define a cookie stored input field such as:
```
<input type="text" name="fieldExample" id="example"></input>
```
It is as simple as:
```
 $("#example").cookieStore();
 ```

This will store the input whenever a user enters information into it. The cookie name will be equal to the input name. In this case it will be `fieldExample`. The cookie will last 365 days by default.

If you would like to add custom configuration to the cookie then you can use the following initialization:
```
 $("#example").cookieStore({
   name: "CustomConfig",
   expire: 120,
   debug: true
 });
```
This will define the field with the cookie name `CustomConfig` and an expiration of 120 days.
