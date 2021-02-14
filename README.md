<h1 align="center">Whalue Design Colors</h1>

<div align="center">

:art: Color palette calculator of Whalue Design.

[![NPM version](https://img.shields.io/npm/v/@whalue-design/colors.svg?style=flat)](https://npmjs.org/package/@whalue-design/colors) [![NPM downloads](http://img.shields.io/npm/dm/@whalue-design/icons-svg.svg?style=flat)](https://npmjs.org/package/@whalue-design/colors)

</div>

## Install

```bash
$ yarn add @whalue-design/colors
```

## Usage

```js
import {
  generate,
  presetPalettes,
  presetDarkPalettes,
  presetPrimaryColors,
  red,
  orange,
  yellow,
  lime,
  green,
  cyan,
  blue,
  purple,
  pink,
  grey,
} from "@whalue-design/colors";

console.log(blue);
console.log(blue.primary);

const colors = generate('#2196f3');
console.log(colors);
console.log(presetPalettes);

const darkColors = generate('#2196f3', {
  theme: 'dark',
  backgroundColor: '#141414'
});
console.log(darkColors);
console.log(presetDarkPalettes);
```
