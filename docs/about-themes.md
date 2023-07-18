---
outline: deep
---

# About Themes

Themes are actually tiny web pages rendered straight to your cooler. If you'd like to learn how to make your own themes, [check out this section of the docs](/docs/themes/what-are-themes.md).

## Adjusting theme settings

A lot of the themes you'll use will come with their own settings that you can change in the _Now Playing_ tab.

Feel free to try it out by downloading a theme and changing its settings. Once you adjust something, you'll notice that this change has been reflected on your cooler.

## Installing themes

There's are 2 ways you can install themes. From the Theme Store and manually. Since the theme store is as simple as choosing a theme and downloading it, I'll explain how to install a theme manually.

1. Download your theme.
2. Go to the app's settings, scroll down, and click on "Open Theme Folder".
3. If the theme came in a folder, copy it over. If not, create a new folder and copy the theme there.
4. Restart the app.
5. Your theme should now be visible and available to use in the "Your Themes" section.

If you're going to use a theme that has been installed manually, please read through the section below.

## Themes and privacy

In short, anything a webpage can know about you, a theme also can. To mitigate the risk of personal information being taken from you, a few steps have been taken. I take privacy very seriously, I'd like you to be able to keep yours too.

- Themes do not have write access to any persistent storage and their reads are very limited. Anytime you save a setting, keeping track of it is handled by the app. The theme does not have access to it until it's sent from the app. This means that themes cannot have any cookies, local storage, etc.
- You are informed about which themes need what. For example, if a theme uses sensors, a chip on its Theme Store page will inform you about that.
- Access to sensors is fairly limited and themes never know what hardware is in your computer save for the sensors you choose to provide. Until you make a choice after installing a theme, the app will not expose any sensors to it.
- The Theme Store rules are fairly restrictive as to what a theme is allowed to actually do. Themes cannot access external networked resources (images, scripts, styles, etc.) to be allowed on the Theme Store unless you make an explicit choice to let them do so and only if this resource simply cannot be stored locally. They also **must be** open-source and, if they're using some JS framework, the source from which the final HTML, CSS, and JS was created must be openly accessible. Most importantly, **a theme can never include any tracking pixels, scripts etc**.

As you can see, some of these guarantees are based on the theme coming from the Theme Store. I would very strongly advise you to carefully review every third-party theme you install as even though they are just web pages, it's always worth taking some time to keep yourself from being a number on someone's Google Analytics dashboard.
