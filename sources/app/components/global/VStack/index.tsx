import { memo } from 'react';
import { View } from 'react-native';

import { VStackStyles } from './.style';
import { VStackComponent } from './.type';

const styles = VStackStyles;

const VStack: VStackComponent = memo(function () {
  return <View></View>;
});

export { VStack };
