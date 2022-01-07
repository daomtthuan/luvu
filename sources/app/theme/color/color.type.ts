export type Color = string;

export type GradientColor = Color[];

export type SolidColorName = 'black' | 'white';

export type SolidColor = {
  [name in SolidColorName]: Color;
};
