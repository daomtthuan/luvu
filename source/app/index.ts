import 'react-native-gesture-handler';

import { name } from 'package.json';
import { AppRegistry } from 'react-native';
import { MemoAppRoot } from '~containers/AppRoot';

AppRegistry.registerComponent(name, () => MemoAppRoot);
