import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zefir's Flashy Cooler",
  base: "/",
  description: "Elevate your LCD cooler with modern and reactive themes.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/getting-started" },
    ],

    footer: {
      message:
        "Released under the <a href='https://github.com/brunostjohn/zefirs-flashy-cooler/blob/main/LICENSE'>GNU AGPL v3.0 Public License</a>.",
      copyright:
        "Copyright © <a href='https://github.com/brunostjohn'>Bruno St John</a>",
    },

    sidebar: [
      {
        text: "Documentation",
        items: [
          {
            text: "Using the app",
            items: [
              { text: "Getting started", link: "/docs/getting-started" },
              { text: "Themes", link: "/docs/about-themes" },
              { text: "Troubleshooting", link: "/docs/troubleshooting" },
            ],
          },
          {
            text: "Theme Development",
            items: [
              {
                text: "What are themes?",
                link: "/docs/themes/what-are-themes.md",
              },
              {
                text: "Theme manifest",
                link: "/docs/themes/theme-manifest.md",
              },
              {
                text: "Preview image",
                link: "/docs/themes/preview-image.md",
              },
              {
                text: "Writing the theme",
                link: "/docs/themes/theme-code.md",
              },
            ],
          },
          {
            text: "Device Plugin Development",
            items: [
              {
                text: "How do devices work?",
                link: "/docs/devices/how-do-devices-work.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/brunostjohn/zefirs-flashy-cooler",
      },
      {
        icon: "discord",
        link: "https://discord.gg/KXmnwA6zWK",
      },
    ],
    logo: "/assets/img/android-chrome-512x512.png",
  },
});
