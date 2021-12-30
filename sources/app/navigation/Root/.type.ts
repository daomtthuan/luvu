import { ComponentType, ExoticComponent, PropsWithoutRef } from 'react';

import { DrawerScreenProps } from '@react-navigation/drawer';

type RootNavigationParamList = {
  Settings: undefined;
};

type RootNavigationRouteName = keyof RootNavigationParamList;

type RootNavigationScreenProps<RouteName extends RootNavigationRouteName> = DrawerScreenProps<
  RootNavigationParamList,
  RouteName
>;

type RootNavigationScreens = {
  [routeName in RootNavigationRouteName]: {
    screenComponent: ComponentType<RootNavigationScreenProps<RootNavigationRouteName>>;
    title: string;
    label: string;
    iconName: string;
  };
};

type RootNavigationProps = PropsWithoutRef<{}>;

type RootNavigationComponent = ExoticComponent<RootNavigationProps>;

export {
  RootNavigationParamList,
  RootNavigationRouteName,
  RootNavigationScreenProps,
  RootNavigationScreens,
  RootNavigationProps,
  RootNavigationComponent,
};
