export const fontPalette = {
  primaryFont: '#090D31',
  secondaryFont: '#8F8F8F',
};

export const palette = {
  background: '#F8F9FC',
  primary: '#66CFD3',
  secondary: '#ADEBED',
  light: '#ECF8FB',
  white: '#FFF',
  black: '#000',
  green: '#4CBE70',
  gray: '#ECECEC',
  dark: '#939393',
  ...fontPalette,
};

export type Color = keyof typeof palette;

export type FontColor = keyof typeof fontPalette | 'primary';
