import { FunctionComponent, PropsWithoutRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type HStackViewProps = PropsWithoutRef<{
  space?: number;

  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export type HStackViewComponent = FunctionComponent<HStackViewProps>;
