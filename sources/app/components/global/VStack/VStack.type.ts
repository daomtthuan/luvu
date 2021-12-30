import { ExoticComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { ViewStyle } from 'react-native';

type VStackProps = PropsWithChildren<
  PropsWithoutRef<{
    space?: number;
    containerStyle?: ViewStyle;
    itemStyle?: ViewStyle;
  }>
>;

type VStackComponent = ExoticComponent<VStackProps>;

export { VStackProps, VStackComponent };
