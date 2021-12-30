import { ExoticComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { ViewStyle } from 'react-native';

type HStackProps = PropsWithChildren<
  PropsWithoutRef<{
    space?: number;
    containerStyle?: ViewStyle;
    itemStyle?: ViewStyle;
  }>
>;

type HStackComponent = ExoticComponent<HStackProps>;

export { HStackProps, HStackComponent };
