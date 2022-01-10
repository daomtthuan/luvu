import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type BoxViewProps = PropsWithChildren<
  PropsWithoutRef<{
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
  }>
>;

export type BoxViewComponent = FunctionComponent<BoxViewProps>;
