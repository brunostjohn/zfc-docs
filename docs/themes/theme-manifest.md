---
outline: deep
---

# Theme Manifest

```
.
└── Zefir's Flashy Cooler
    └── Your theme's folder
        ├── theme.json // [!code focus]
        ├── preview.jpeg
        └── index.html
```

The theme manifest is how you tell the app what your theme is and what it needs to function/exposes to the user.

It's stored as a JSON file. If you don't know what they are yet, feel free to read up on them and come back here.

## The basics

Let's get started by telling the app some details about your theme.

```json
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "version": "1.0.0"
}
```

Now, the app knows that this is _My Cool Theme_ made by _Bruno St John_ and that it's the first version ever made. Simple, right?

### Theme Store tips

To get onto the theme store, you should use some system of versioning that makes sense. You won't be able to decrement your version name after releasing an update. I'd recommend [semantic versioning](https://github.com/semver/semver/blob/master/semver.md); however, anything that isn't confusing is okay.

## Description

Let's add a description for your theme. To let you make rich and expressive descriptions, the app supports using markdown in them. If you need tips on how to use Markdown, check out [this page](https://www.markdownguide.org/basic-syntax/) that outlines its basic syntax.

I'd like to tell everyone that my theme is _blazingly fast_ and uses _generative AI to enrich the user experience_.

```markdown
# This theme is **the best thing** you will ever see.

We use generative AI to make ChatGippity-TURBO render worlds beyond your wildest imagination.

_It may seem crazy, but that's just how revolutions start._

Call `ourTheme()` today because it's just too blazingly fast to be caught.
```

Okay, now that I've written the description, let's put it in our `theme.json` file.

```json
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "description": "", // [!code ++]
  "version": "1.0.0"
}
```

If you know a little bit about JSON, you might notice that this Markdown has multiple lines and JSON files don't let you have line-breaks in fields. To make this work, just switch out every enter button press with a `\n`.

```json
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "description": "# This theme is **the best thing** you will ever see.\n\nWe use generative AI to make ChatGippity-TURBO render worlds beyond your wildest imagination.\n\n*It may seem crazy, but that's just how revolutions start.*\n\nCall `ourTheme()` today because it's just too blazingly fast to be caught.", // [!code ++]
  "version": "1.0.0"
}
```

### Theme Store tips

There's no need to describe what your theme's customisable parameters do in here. They should be annotated well enough so that you only need to read their descriptions.

Don't include profanity in the descriptions, let's keep things chill.

## What did you test the theme on?

As time goes on, more LCD coolers will be added to this app. It's always good to let the user know what you tested your theme on.

```json
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "description": "[...]",
  "tested_on": ["capellix", "ttultra"], // [!code ++]
  "version": "1.0.0"
}
```

All devices in this app have their short names. Here's a table outlining them:

| Short name | Device                                                  |
| ---------- | ------------------------------------------------------- |
| capellix   | Any Corsair iCUE cooler currently supported by the app. |
| ttultra    | Thermaltake TOUGHLIQUID 360 AIO                         |

### Theme Store tips

Include this. Themes that don't go on the store won't need this but it's always great to have this in.

## Customisable parameters

Themes that let the user change something about them are always great. The whole point of this app is customisability and the more you let the user change, the cooler your theme can be.

### How to include them in the theme manifest?

```json {7}
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "description": "[...]",
  "tested_on": ["capellix", "ttultra"],
  "customisable_parameters": [
    your parameters go here // [!code ++]
  ], // [!code ++]
  "version": "1.0.0"
}
```

### What properties do all customisable parameters share?

Every single parameter must have 3 pieces of information about it.

| Property   | Value                                                                            |
| ---------- | -------------------------------------------------------------------------------- |
| type       | One of the following: sensor, boolean, range, colour, text, file.                |
| display_as | What the user should see when they get the option to change a parameters' value. |
| name       | How you'd like to refer to this parameter in your code.                          |

Let's start by outlining the 2 parameters that only use these 3 properties.

### The `sensor` parameter

```json
{
  "type": "sensor",
  "display_as": "Your favourite sensor",
  "name": "usersFavouriteSensor"
}
```

This will let the user pick a sensor that you'll be able to later use in your code. Mind you, until the user makes a choice, you won't receive any information about sensors. It's important to make sure your code can run without it.

### The `file` parameter

```json
{
  "type": "sensor",
  "display_as": "Select a cute picture of Zefir",
  "name": "catPicPath"
}
```

This will let the user pick a file on their drive. This file will then be copied to your theme's folder and be accessible for you to use. Your theme should also be able to function without this file.

### The `boolean` parameter

```json
{
  "type": "boolean",
  "display_as": "Do you like frogs?",
  "name": "shouldDisplayFrog",
  "default": "false"
}
```

This is the first parameter that uses an additional property. `default` will let the app know what the default option for this property is. You should also remember to make sure your app makes use of your default until the user makes a choice.

### The `colour` parameter

```json
{
  "type": "colour",
  "display_as": "Your eye colour",
  "name": "userEyeColour",
  "default": "#0000FF"
}
```

This parameter will let the user pick a colour.

### The `text` parameter

```json
{
  "type": "text",
  "display_as": "Your name",
  "name": "userName",
  "default": "Mr Jumpy Legs"
}
```

This parameter will let the user type in some text to be relayed to your theme.

### The `range` parameter

```json
{
  "type": "range",
  "display_as": "How old are you?",
  "name": "userAge",
  "default": "21",
  "min": "0",
  "max": "130",
  "step": "0.5"
}
```

This parameter lets the user pick a number to be sent to your theme. You can specify the accepted range and how much the UI should step when letting the user pick. This works just like a HTML `<select>` element.

### Putting it all together

Alright, we made some parameters, let's put them in the `theme.json` file.

```json
{
  "name": "My Cool Theme",
  "author": "Bruno St John",
  "description": "[...]",
  "tested_on": ["capellix", "ttultra"],
  "customisable_parameters": [
    {
      "type": "colour",
      "display_as": "Your eye colour",
      "name": "userEyeColour",
      "default": "#0000FF"
    },
    {
      "type": "range",
      "display_as": "How old are you?",
      "name": "userAge",
      "default": "21",
      "min": "0",
      "max": "130",
      "step": "0.5"
    },
    {
      "type": "sensor",
      "display_as": "Select a cute picture of Zefir",
      "name": "catPicPath"
    }
  ],
  "version": "1.0.0"
}
```

Our theme is now ready to get information from the app. Great work!
