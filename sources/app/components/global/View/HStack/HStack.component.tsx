import { Children, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { spaces } from '~theme/layout';

import { BoxView } from '../Box';
import { HStackViewStyles as styles } from './HStack.style';
import { HStackViewComponent } from './HStack.type';

export const HStackView: HStackViewComponent = function ({ space = 0, ...props }) {
  const itemContainerStyle = useMemo<ViewStyle>(
    () => ({
      marginLeft: spaces(space),
    }),
    [space],
  );

  return (
    <BoxView
      containerStyle={[props.containerStyle]}
      contentContainerStyle={[styles.contentContainer, props.contentContainerStyle]}
    >
      {Children.map(props.children, (child, index) => (
        <View key={index} style={[index > 0 && itemContainerStyle]}>
          {child}
        </View>
      ))}
    </BoxView>
  );
};

export const MemoHStackView = memo(HStackView);
