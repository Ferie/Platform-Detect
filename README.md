# Platform Detect

This repository is develop to identify the platform and the device that the user is using while visiting a website by providing the object ```platform_detect``` that contains the information about the device.

## Usage

Download and import in your main HTML file the following scripts:

```
<script src="path_to_js_folder/platform_detect.js"></script>
```

## Add classes to identify the device client side

The file ```html_platform_classes.js``` adds the device classes to the HTML tag in your code so you can perform various specific actions, i.e. addidng specific CSS rules for your layout.

For this functionality remember to import also the shim for IE 7.

```
<script src="path_to_js_folder/classList_shim.js"></script>
<script src="path_to_js_folder/html_platform_classes.js"></script>
```
