# @vidhill/fortawesome-regular-11ty-shortcode

[![CircleCI](https://circleci.com/gh/vidhill/fortawesome-regular-svg-11ty-shortcode/tree/main.svg?style=shield)](https://circleci.com/gh/vidhill/fortawesome-regular-svg-11ty-shortcode/tree/main)

[![codecov](https://codecov.io/gh/vidhill/fortawesome-regular-svg-11ty-shortcode/branch/main/graph/badge.svg?token=HRBZY3BN0Z)](https://codecov.io/gh/vidhill/fortawesome-regular-svg-11ty-shortcode)

![NPM Version](https://img.shields.io/npm/v/@vidhill/fortawesome-free-regular-11ty-shortcode?style=flat-square)

[Eleventy](https://www.11ty.dev/) shortcode.

Allows [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons) to be embedded as inline svg into [11ty](https://www.11ty.dev/) templates.

See available icons here: [font-awesome-5-regular](https://fortawesome.com/sets/font-awesome-5-regular)

```bash
$ npm install @vidhill/fortawesome-free-regular-11ty-shortcode --save
```

## Setup

**Option A:** Import as a plugin, shortcodes names are fixed, if you want to name the shortcodes yourself see Option B

```javascript
const {
    fortawesomeFreeRegularPlugin,
} = require('@vidhill/fortawesome-free-regular-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(fortawesomeFreeRegularPlugin);

    return {
        // normal eleventy config
    };
};
```

**Option B:** import the render function so that a custom shortcode name can be defined

```javascript
const {
    fortawesomeFreeRegularShortcode,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode(
        'fortawesomeRegular',
        fortawesomeFreeRegularShortcode
    );

    return {
        // normal eleventy config
    };
};
```

## Usage

### Input

```javascript
{% fortawesomeRegular 'bell' %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="bell"
    class="svg-inline--fa fa-bell fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

### Input

Specifying a css class to be added to the `svg` element

```javascript
{% fortawesomeBrand 'bell', "social-icon" %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="bell"
    class="svg-inline--fa fa-bell fa-w-16 social-icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

Multiple css class to be added to they svg by passing a comma separated string:

```javascript
{% fortawesomeBrand 'bell', "social-icon,unicorn-icon" %}
```

## Development

-   Build: `npm run build`
-   Watch build: `npm run dev`
-   Run tests: `npm run test`
-   Watch tests: `npm run test:watch`
