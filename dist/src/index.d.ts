import generate from "./generate";
export interface PalettesProps {
    [key: string]: string[] & {
        primary?: string;
    };
}
declare const presetPrimaryColors: {
    [key: string]: string;
};
declare const presetPalettes: PalettesProps;
declare const presetDarkPalettes: PalettesProps;
declare const red: string[] & {
    primary?: string | undefined;
};
declare const orange: string[] & {
    primary?: string | undefined;
};
declare const yellow: string[] & {
    primary?: string | undefined;
};
declare const lime: string[] & {
    primary?: string | undefined;
};
declare const green: string[] & {
    primary?: string | undefined;
};
declare const cyan: string[] & {
    primary?: string | undefined;
};
declare const blue: string[] & {
    primary?: string | undefined;
};
declare const purple: string[] & {
    primary?: string | undefined;
};
declare const pink: string[] & {
    primary?: string | undefined;
};
declare const grey: string[] & {
    primary?: string | undefined;
};
export { generate, presetPalettes, presetDarkPalettes, presetPrimaryColors, red, orange, yellow, lime, green, cyan, blue, purple, pink, grey, };
