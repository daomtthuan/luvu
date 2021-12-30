import { Children, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

import { HStackStyles } from './HStack.style';
import { HStackComponent } from './HStack.type';

const styles = HStackStyles;

const HStack: HStackComponent = memo(function ({ space = 0, children, ...props }) {
  const containerStyle = useMemo<ViewStyle>(
    () => ({
      paddingHorizontal: space ?? 0 / 2,
    }),
    [space],
  );

  const itemStyle = useMemo<ViewStyle>(
    () => ({
      marginHorizontal: space ?? 0 / 2,
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

export { HStack };
