import { generate, presetPalettes } from "../src";

export const blueColors = [
  "#f0fbff",
  "#c7edff",
  "#9eddff",
  "#75caff",
  "#4db5ff",
  "#2196f3",
  "#1272cc",
  "#0754a6",
  "#003980",
  "#002559",
].map((color) => color.toLowerCase());

export const blueDarkColors = [
  "#121e2a",
  "#142c42",
  "#183b57",
  "#1a4f78",
  "#1c69a5",
  "#1f83d2",
  "#47a5e8",
  "#70c1f3",
  "#9ad7f8",
  "#c3e9fa",
];

test("Generate palettes from a given color", () => {
  expect(generate("#2196f3")).toEqual(blueColors);
});

test("Generate dark palettes from a given color", () => {
  expect(
    generate("#2196f3", {
      theme: "dark",
      backgroundColor: "#141414",
    })
  ).toEqual(blueDarkColors);
});

test("Generate primary color", () => {
  expect(presetPalettes.blue.primary).toEqual("#2196f3");
});

test("should contain preseted palettes", () => {
  expect(Object.keys(presetPalettes)).toEqual([
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "grey",
  ]);
  expect([...presetPalettes.blue]).toEqual(blueColors);
});
