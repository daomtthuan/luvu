export type Color = string;

export type GradientColor = Color[];

export type SolidColorName = 'black' | 'white' | 'light';

export type SolidColor = {
  [name in SolidColorName]: Color;
};
