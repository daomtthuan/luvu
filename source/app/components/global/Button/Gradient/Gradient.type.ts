import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { StyleProp, TextStyle, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import { GradientColor } from '~theme/color';

export type GradientButtonProps = PropsWithChildren<
  PropsWithoutRef<
    TouchableWithoutFeedbackProps & {
      text?: string;

      color?: GradientColor;
      opacity?: number;

      textStyle?: StyleProp<TextStyle>;
      containerStyle?: StyleProp<ViewStyle>;
      contentContainerStyle?: StyleProp<ViewStyle>;
    }
  >
>;

export type GradientButtonComponent = FunctionComponent<GradientButtonProps>;
