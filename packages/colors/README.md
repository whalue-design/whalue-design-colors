# Whalue Design Colors

:art: Color palettes calculator based on [Ant Design](https://ant.design/docs/spec/colors).

[![npm package](https://img.shields.io/npm/v/@whalue-design/colors.svg?style=flat-square)](https://www.npmjs.org/package/@whalue-design/colors)
[![NPM downloads](http://img.shields.io/npm/dm/@whalue-design/colors.svg?style=flat-square)](http://npmjs.com/@whalue-design/colors)

![example.png](./example.png)

## Install

```bash
$ npm install @whalue-design/colors
# or
$ yarn add @whalue-design/colors
```

## Usage

```bash
$ npm install @whalue-design/colors --save
```

```js
import { red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@whalue-design/colors';

console.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(blue.primary); // '#1890FF'
```

```js
import { generate, presetPalettes } from '@whalue-design/colors';

// Generate color palettes by a given color
const colors = generate('#1890ff');
console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(presetPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

```js
import { generate, presetDarkPalettes } from '@whalue-design/colors';

// Generate dark color palettes by a given color
const colors = generate('#1890ff', {
  theme: 'dark',
  backgroundColor: '#141414'
});
console.log(colors); // ["#111d2c", "#112a45", "#15395b", "#164c7e", "#1765ad", "#177ddc", "#3993dc", "#65b7f3", "#8bcbf3", "#b2dcf3"]
console.log(presetDarkPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

## License

[MIT](./LICENSE)
