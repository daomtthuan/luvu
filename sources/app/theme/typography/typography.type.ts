import { TextStyle } from 'react-native';

export type FontWeightName =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type FontWeight = {
  [name in FontWeightName]: TextStyle['fontWeight'];
};
