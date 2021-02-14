import {
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
  presetDarkPalettes,
} from "../src";
import { blueColors, blueDarkColors } from "./index.test";

test(`import { blue } from '@whalue-design/colors'`, () => {
  expect(blue.primary).toEqual(blueColors[5]);
  expect([...blue]).toEqual(blueColors);
});

test(`import { presetDarkPalettes } from '@whalue-design/colors'`, () => {
  const darkBlue = presetDarkPalettes.blue;
  expect([...darkBlue]).toEqual(blueDarkColors);
});

test(`other colors'`, () => {
  expect(red.length).toEqual(10);
  expect(orange.length).toEqual(10);
  expect(yellow.length).toEqual(10);
  expect(lime.length).toEqual(10);
  expect(green.length).toEqual(10);
  expect(cyan.length).toEqual(10);
  expect(blue.length).toEqual(10);
  expect(purple.length).toEqual(10);
  expect(pink.length).toEqual(10);
  expect(grey.length).toEqual(10);

  expect(presetDarkPalettes.red.length).toEqual(10);
  expect(presetDarkPalettes.orange.length).toEqual(10);
  expect(presetDarkPalettes.yellow.length).toEqual(10);
  expect(presetDarkPalettes.lime.length).toEqual(10);
  expect(presetDarkPalettes.green.length).toEqual(10);
  expect(presetDarkPalettes.cyan.length).toEqual(10);
  expect(presetDarkPalettes.blue.length).toEqual(10);
  expect(presetDarkPalettes.purple.length).toEqual(10);
  expect(presetDarkPalettes.pink.length).toEqual(10);
  expect(presetDarkPalettes.grey.length).toEqual(10);
});
