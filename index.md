---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Zefir's Flashy Cooler"
  text: "Smarter, faster, better."
  tagline: Elevate your LCD cooler with modern and reactive themes.
  image:
    src: /assets/img/android-chrome-512x512.png
    alt: Zefir's Flashy Cooler Logo
  actions:
    - theme: brand
      text: Get Started
      link: https://github.com/brunostjohn/zefirs-flashy-cooler/releases/latest
    - theme: alt
      text: Documentation
      link: /docs/getting-started

features:
  - title: Really fast
    icon: 🔥
    details: We use a light-weight HTML, CSS and JS renderer that uses your GPU to render and don't bloat your system with background services etc. You only get what you want.
  - title: Uniquely yours
    icon: ✨
    details: We encourage and build themes that are as customisable as possible. Gone are the days of hoping a manufacturer adds a good looking theme in an update. You can even make your own very easily.
  - title: Private
    icon: 🔐
    details: We respect your privacy and do our best to not infringe on it. Themes have very limited access to your system and beofre being on the Theme Store, they are vetted to ensure they won't attempt disrespecting your right to privacy.
---

<div class="home-content">
  <h3 class="header">What can this app do?</h3>
  <div class="imgs">
    <img src="/assets/img/hero.png" id="img1" />
    <img src="/assets/img/overview-banner.png" id="img2" />
  </div>
</div>

<style>
  .home-content {
    margin: 2rem 3rem;
  }

  .header {
    font-size: 28px;
    letter-spacing: -0.4px;
    line-height: 30px;
    font-weight: 700;
    white-space: pre-wrap;
    text-align: center;
  }

  .imgs {
    display: flex;
    flex-wrap: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  #img1, #img2 {
    max-width: 40%;
    align-self: center;
    border-radius: 15px;
    margin: 1rem;
  }
</style>
