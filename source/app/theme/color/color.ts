import Color from 'color';

import { GradientColor, SolidColor } from './color.type';

export const solidColors: SolidColor = {
  black: '#000000',
  white: '#ffffff',
  light: '#fbfdfd',
};

export const gradientColors: GradientColor[] = [
  ['#ffffff', '#fdfdfd'],
  ['#fce38a', '#f38181'],
  ['#f54ea2', '#ff7676'],
  ['#17ead9', '#6078ea'],
  ['#622774', '#c53364'],
  ['#7117ea', '#ea6060'],
  ['#42e695', '#3bb2b8'],
  ['#f02fc2', '#6094ea'],
  ['#65799b', '#5e2563'],
  ['#184e68', '#57ca85'],
  ['#5b247a', '#1bcedf'],
  ['#74276c', '#c53364', '#fd8263'],
  ['#274b74', '#8233c5', '#e963fd'],
  ['#879af2', '#d3208b', '#fda000'],
  ['#8929ad', '#436aac', '#43b7b8'],
  ['#276174', '#33c58e', '#63fd88'],
  ['#574bcd', '#2999ad', '#41e975'],
  ['#363553', '#903775', '#e8458b'],
  ['#5c2774', '#335cc5', '#637ffd'],
  ['#ea5a6f', '#de791e', '#fccf3a'],
  ['#f17b41', '#e05ba2', '#cd4bc9'],
];

export const mixGradientColor = (gradientColor: GradientColor) => {
  const mixedColor = gradientColor.reduce<Color>((preColor, color, index) => {
    if (index > 0) {
      return preColor.mix(Color(color));
    }

    return Color(gradientColor[0]);
  }, Color());

  return mixedColor.hex();
};
