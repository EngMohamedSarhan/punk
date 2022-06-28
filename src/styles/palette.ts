export const palette = {
  background: '#FBFDFC',
  primary: '#66CFD3',
  secondary: '#ADEBED',
  light: '#ECF8FB',
  white: '#FFF',
  black: '#000',
  green: '#4CBE70',
  gray: '#ECECEC',
  primaryFont: '#090D31',
  secondaryFont: '#8F8F8F',
};

export type Color = keyof typeof palette;

export type FontColor = 'primaryFont' | 'secondaryFont';
