import generate from "./generate";

export interface PalettesProps {
  [key: string]: string[] & { primary?: string };
}

const presetPrimaryColors: {
  [key: string]: string;
} = {
  red: "#f44336",
  orange: "#ff9800",
  yellow: "#ffc107",
  lime: "#cddc39",
  green: "#4caf50",
  cyan: "#00bcd4",
  blue: "#2196f3",
  purple: "#9c27b0",
  pink: "#e91e63",
  grey: "#9e9e9e",
};

const presetPalettes: PalettesProps = {};
const presetDarkPalettes: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];

  // dark presetPalettes
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414",
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

const red = presetPalettes.red;
const orange = presetPalettes.orange;
const yellow = presetPalettes.yellow;
const lime = presetPalettes.lime;
const green = presetPalettes.green;
const cyan = presetPalettes.cyan;
const blue = presetPalettes.blue;
const purple = presetPalettes.purple;
const pink = presetPalettes.pink;
const grey = presetPalettes.grey;

export {
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
};
