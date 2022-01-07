import { FONT_SIZE_UNIT, SIZE_UNIT } from '~constants/theme';

import { FontWeight } from './typography.type';

export const fontWeights: FontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const fontSizes = (size: number) => size * SIZE_UNIT + FONT_SIZE_UNIT;
