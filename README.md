# Decidim Vilanova Static Website

<a href="https://waffle.io/MarsBased/decidim-vilanova-static-website"><img src="https://img.shields.io/badge/Waffle-decidim--vilanova--static--website-blue.svg?colorB=78bdf2" /></a>

Decidim Vilanova is the upcoming participatory democracy platform of Ajuntament de Vilanova i la Geltrú, powered by [Decidim](https://github.com/AjuntamentdeBarcelona/decidim).

This repository contains the static website used to promote and announce the platform.

Developed with [Middleman](https://middlemanapp.com/). Uses Grunt to automatize SVG inline generation.

## Development

```
npm install
bundle install
bower install
bundle exec middleman server
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```

## Compatibility

**Browser compatibility:**

* Chrome (current version)
* Safari (current version)
* Firefox (current version)
* Internet Explorer 10 (and upwards)
* Android (current version)
* iOS (current version)

**Supported Resolutions:**

* 320px to 480px (Landscape and portrait)
* 500px to 768px (Portrait versions)
* 768px to 1024px (Landscape versions)
* 1024px to anything (Desktop versions)
