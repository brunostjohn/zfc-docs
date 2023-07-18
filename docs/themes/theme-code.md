---
outline: deep
---

# Writing the theme

```
.
└── Zefir's Flashy Cooler
    └── Your theme's folder
        ├── theme.json
        ├── preview.jpeg
        └── index.html // [!code focus]
```

Now that we have the `theme.json` and `preview.jpeg` ready, let's actually write the theme.

## Getting started

Let's bootstrap a basic theme template. This will be the content of our `index.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Your CSS goes here. */
    </style>
  </head>
  <body>
    <!-- Your HTML goes here. -->
    <script>
      // Your JavaScript goes here.
    </script>
  </body>
</html>
```

Teaching HTML and Web Design is beyond the scope of these docs. Here, I'd like to refer you to any online resource that can teach you how to write webpages.

## Keeping your project organised

At some point, your theme may be complex enough so that you need to keep files separated. You can do that here. For example, if you'd like to keep your stylesheet in a separate file, you can do this:

```html {3}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <!-- Your HTML goes here. -->
    <script>
      // Your JavaScript goes here.
    </script>
  </body>
</html>
```

## Theme assets

Sometimes, you may want to include an image or anything else. In your theme's code, assume the `/` is your theme's folder (the one with `index.html`). You can use folders etc. to organise stuff further. You can serve anything you want to the theme.

::: warning INFO
`../` will not take you outside the themes folder and will give you a `404 Not Found` error instead. Remember to bundle all the assets you'll need _with the theme_. This is done to protect users from themes reading their personal files.
:::

## Receiving customisable parameters

If you've set up your theme to receive some controllable parameter from the user in `theme.json` you need to handle that in the theme code. How it basically works is this: at first, the theme uses your default value. Once a different one is received, this should change. To make this simpler to understand, we'll be working with an example theme. Here's its `theme.json` file.

```json
{
  "name": "Test Theme",
  "author": "Bruno St John",
  "description": "stuff",
  "version": "1.0.0",
  "tested_on": ["capellix"],
  "customisable_parameters": [
    {
      "type": "boolean",
      "display_as": "Should the text be red?",
      "name": "redText",
      "default": "true"
    }
  ]
}
```

Now, let's code the theme.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #changeMe {
        /* Let's set our default here. */
        color: #00ff00;
      }
    </style>
  </head>
  <body>
    <!-- This is the element we'll be changing -->
    <h1 id="changeMe">This is text.</h1>

    <script>
      // Let's listen to the configLoaded event which relays
      // customisable parameters to our theme.
      document.addEventListener("configLoaded", (config) => {
        // When a parameter is changed, do the following:

        // Find the element you want to change.
        const h1 = document.getElementById("changeMe");

        // Check whether the user wants it red or not.
        // As you can see, config.detail provides all the
        // configuration options that have been set.
        // Their names are dependant on what you've set
        // in your theme.json file.
        const shouldRed = config.detail.redText.value === "true" ? true : false;

        // If they do, change it. If they don't, change it back.
        if (shouldRed) {
          h1.style.color = "#FF0000";
        } else {
          // You should include changing back to the original
          // setting as the user may change their mind at some
          // point. Without this, the text would just stay red.
          h1.style.color = "#00FF00";
        }
      });
    </script>
  </body>
</html>
```

Only sensors get special treatment in how they work. Every other customisable parameter will give you its value this way. This includes `file`, where the value given to you is where your theme can find this file.

## Receiving sensor values.

Let's take that example theme a step further and receive some sensor values.

We'll edit the `theme.json` to this:

```json
{
  "name": "Test Theme",
  "author": "Bruno St John",
  "description": "stuff",
  "version": "1.0.0",
  "tested_on": ["capellix"],
  "customisable_parameters": [
    {
      "type": "boolean",
      "display_as": "Should the text be red?",
      "name": "redText",
      "default": "true"
    },
    {
      "type": "sensor",
      "display_as": "Sensor to show",
      "name": "sensor1"
    }
  ]
}
```

Now, let's make the theme display the sensor value and name.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #changeMe {
        color: #00ff00;
      }
    </style>
  </head>
  <body>
    <!-- This is the element we'll be changing -->
    <h1 id="changeMe">This is text.</h1>

    <script>
      document.addEventListener("configLoaded", (config) => {
        const h1 = document.getElementById("changeMe");

        const shouldRed = config.detail.redText.value === "true" ? true : false;

        if (shouldRed) {
          h1.style.color = "#FF0000";
        } else {
          h1.style.color = "#00FF00";
        }
      });

      document.addEventListener("sensorUpdate", (sensors) => {
        // Every time the sensors' value updates, do this.

        // Get the text element
        const h1 = document.getElementById("changeMe");

        // Change the elements' text to the sensor name and value.
        h1.textContent = `${sensors.detail.sensor1.name}: ${sensors.detail.sensor1.value}`;
      });
    </script>
  </body>
</html>
```

## Theme guidelines and theme store tips
