import { memo } from 'react';
import { Text } from 'react-native';
import { VStack } from '~components/global';
import { HStack } from '~components/global/HStack';

import { AppRootStyles } from './AppRoot.style';
import { AppRootComponent } from './AppRoot.type';

const styles = AppRootStyles;

const AppRoot: AppRootComponent = memo(() => {
  return (
    <HStack space={4} itemStyle={{ backgroundColor: 'red' }}>
      <VStack space={4} itemStyle={{ backgroundColor: 'red' }}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </VStack>
      <VStack space={4} itemStyle={{ backgroundColor: 'red' }}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </VStack>
      <VStack space={4} itemStyle={{ backgroundColor: 'red' }}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </VStack>
    </HStack>
  );
});

export { AppRoot };
