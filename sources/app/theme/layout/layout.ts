import { OPACITY_UNIT, SIZE_UNIT } from '~constants/theme';
import { solidColors } from '~theme/color';

import { Shadow } from './layout.type';

export const spaces = (size: number) => size * SIZE_UNIT;

export const radiuses = (size: number) => size * SIZE_UNIT;

export const opacities = (size: number) => {
  const opacity = size * OPACITY_UNIT;

  if (opacity < 0) {
    return 0;
  }

  if (opacity > 1) {
    return 1;
  }

  return opacity;
};

export const shadows: Shadow[] = [
  {
    shadowColor: solidColors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  {
    shadowColor: solidColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  {
    shadowColor: solidColors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  {
    shadowColor: solidColors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  {
    shadowColor: solidColors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
];
