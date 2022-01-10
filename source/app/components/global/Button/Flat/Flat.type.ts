import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { StyleProp, TextStyle, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';

export type FlatButtonProps = PropsWithChildren<
  PropsWithoutRef<
    TouchableWithoutFeedbackProps & {
      text?: string;

      opacity?: number;

      textStyle?: StyleProp<TextStyle>;
      containerStyle?: StyleProp<ViewStyle>;
      contentContainerStyle?: StyleProp<ViewStyle>;
    }
  >
>;

export type FlatButtonComponent = FunctionComponent<FlatButtonProps>;
