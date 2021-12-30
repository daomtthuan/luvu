import { Children, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

import { VStackStyles } from './VStack.style';
import { VStackComponent } from './VStack.type';

const styles = VStackStyles;

const VStack: VStackComponent = memo(function ({ space = 0, children, ...props }) {
  const containerStyle = useMemo<ViewStyle>(
    () => ({
      paddingVertical: space ?? 0 / 2,
    }),
    [space],
  );

  const itemStyle = useMemo<ViewStyle>(
    () => ({
      marginVertical: space ?? 0 / 2,
    }),
    [space],
  );

  return (
    <View style={[styles.container, containerStyle, props.containerStyle]}>
      {Children.map(children, (child, index) => (
        <View key={index} style={[styles.item, itemStyle, props.itemStyle]}>
          {child}
        </View>
      ))}
    </View>
  );
});

export { VStack };
