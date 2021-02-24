## Hosting Locally

In some cases, you may wish to host a copy of the Former2 website locally or externally for security reasons. You can do that by performing the following steps:

* Clone this repository to the root of your web server OR run a web server with the [Dockerfile](Dockerfile)

If you are hosting on 127.0.0.1, extension support will be provided by default and there are no more steps.

If you are serving from another host, you should perform the following additional steps to achieve extension support:

_Google Chrome or Microsoft Edge_

* Ensure the official Former2 Helper extension is uninstalled (you can remove it via chrome://extensions)
* Clone the [Former2 Helper](https://github.com/iann0036/former2-helper) repository locally
* Edit the `chrome/manifest.json` file to add your URL to the `externally_connectable` section, for example:

```
  ...
  "externally_connectable": {
    "matches": [
      "https://former2.com/*",
      "https://*.former2.com/*",
      "http://127.0.0.1/*",
      "https://127.0.0.1/*",
      "http://localhost/*",
      "https://localhost/*",
      "http://ec2-12-34-56-78.compute-1.amazonaws.com/*
    ]
  }
}
```

> Take care to ensure the protocol is correct and that you append the `/*` to the end.

* Edit line 3 of the `chrome/bg.js` file to include your hostname, for example:

```
if (["127.0.0.1", "localhost", "former2.com", "www.former2.com", "ec2-12-34-56-78.compute-1.amazonaws.com"].includes(new URL(sender.url).hostname)) {
```

> Note that protocol or path is not used in this case.

* Load the extension by visiting chrome://extensions, clicking the "Load unpacked" button and selecting the `chrome/` directory.
* Note the extension ID of the loaded Former2 Helper extension
* In the website files, open the `js/app.js` file and change the first or second line to reflect the noted extension ID for your extension, for example:

```
var CHROME_HELPER_EXTENSION_ID = "zwnrjxwlcsomeotherexamplehere"; // Chrome
```

* Finally, reload the page on your web server - remember that your credentials may not be input on the new address

_Mozilla Firefox_

* Ensure the official Former2 Helper extension is uninstalled (you can remove it via about:addons)
* Clone the [Former2 Helper](https://github.com/iann0036/former2-helper) repository locally
* Edit the `firefox/manifest.json` file to add your URL to the `content_scripts` section, for example:

```
  ...
  "content_scripts": [
    {
      "matches": [
        "https://former2.com/*",
        "https://www.former2.com/*",
        "http://127.0.0.1/*",
        "https://127.0.0.1/*",
        "http://localhost/*",
        "https://localhost/*",
        "http://ec2-12-34-56-78.compute-1.amazonaws.com/*"
      ],
  ...
```

> Take care to ensure the protocol is correct and that you append the `/*` to the end.

* Edit line 3 of the `firefox/bg.js` file to include your hostname, for example:

```
if (["127.0.0.1", "localhost", "former2.com", "www.former2.com", "ec2-12-34-56-78.compute-1.amazonaws.com"].includes(new URL(sender.url).hostname)) {
```

> Note that protocol or path is not used in this case.

* Load the extension by visiting about:addons, clicking the cog icon, then "Debug Add-ons", then click the "Load Temporary Add-on..." button and select the `firefox/manifest.json` file.
* Finally, reload the page on your web server - remember that your credentials may not be input on the new address
