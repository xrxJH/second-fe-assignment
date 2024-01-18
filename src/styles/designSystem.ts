import { DefaultTheme } from 'styled-components';

const fonts = {
  displayS: '400 13px/18px Roboto, sans-serif; letter-spacing: 0.16px',
  displayM: '400 18px/normal Inter, sans-serif',
  displayL: '400 25px/normal Inter, sans-serif',
};

const colors = {
  black: '#000000',
  textBlack: '#000000',
  textWhite: '#FFFFFF',
  bgDisabled: '#C1C1C1',
  gray: '#D9D9D9',
  white: '#FFFFFF',
  orange100: '#F75A2F',
  orange50: 'rgba(247, 90, 47, 0.10)',
};

const radius = {
  small10: '10px',
  medium15: '15px',
  large20: '20px',
};

export const theme: DefaultTheme = {
  fonts,
  colors,
  radius,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type RadiusTypes = typeof radius;
