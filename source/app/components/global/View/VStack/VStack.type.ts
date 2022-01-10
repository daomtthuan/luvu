import { FunctionComponent, PropsWithoutRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type VStackViewProps = PropsWithoutRef<{
  space?: number;

  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export type VStackViewComponent = FunctionComponent<VStackViewProps>;
