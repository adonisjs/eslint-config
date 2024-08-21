# @adonisjs/eslint-config

> Compatible with ESLint 9.0 and Prettier 3.0

<hr>
<br />

<div align="center">
  <h3>ESLint presets used by the AdonisJS core team</h3>
  <p>The <code>adonisjs/eslint-config</code> ships with the default set of ESLint rules used by the AdonisJS core team. The presets are tuned to work alongside Prettier.</p>
</div>

<br />

<div align="center">

[![npm-image]][npm-url] [![license-image]][license-url]

</div>

## Installation

Install the package from the npm registry.

```sh
npm i -D @adonisjs/eslint-config@beta

# Install peer dependencies
npm i -D eslint@9 prettier@3
```

## Usage

After installation, use one of the following presets depending on the nature of your application/library.

**For package development**: Use the following preset when developing a package

```ts
// eslint.config.js
import { configPkg } from '@adonisjs/eslint-config'
export default configPkg()
```

**For app development**: Use the following preset when developing an AdonisJS application

```ts
// eslint.config.js
import { configApp } from '@adonisjs/eslint-config'
export default configApp()
```

## Adding additional config blocks

You can pass additional config blocks as multiple arguments to one of the preset functions.

```ts
import { configApp, INCLUDE_LIST, IGNORE_LIST } from '@adonisjs/eslint-config'

export default configApp({
  name: 'Custom config',
  files: INCLUDE_LIST,
  ignores: IGNORE_LIST,
  plugins: {
    // ESLint plugins go here
  },
  rules: {
    // ESLint rules go here
  },
})
```

<div align="center">
  <h3>
    <a href="https://adonisjs.com">
      Website
    </a>
    <span> | </span>
    <a href="https://docs.adonisjs.com">
      Guides
    </a>
    <span> | </span>
    <a href="https://github.com/adonisjs/.github/blob/main/docs/CONTRIBUTING.md">
      Contributing
    </a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/Julien-R44">Julien Ripouteau</a> and <a href="https://github.com/thetutlage">Harminder Virk</a>
</div>

[npm-image]: https://img.shields.io/npm/v/@adonisjs/eslint-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@adonisjs/eslint-config/v/latest 'npm'
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/adonisjs/adonis-framework?style=for-the-badge
