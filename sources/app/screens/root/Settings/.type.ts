import { ExoticComponent, PropsWithoutRef } from 'react';

import { RootNavigationScreenProps } from '../../../navigation/Root/.type';

type SettingsScreenProps = RootNavigationScreenProps<'Settings'> & PropsWithoutRef<{}>;

type SettingsScreenComponent = ExoticComponent<SettingsScreenProps>;

export { SettingsScreenProps, SettingsScreenComponent };
