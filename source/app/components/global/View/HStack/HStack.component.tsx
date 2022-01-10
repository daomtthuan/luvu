import React, { Children, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { spaces } from '~theme/layout';

import { BoxView } from '../Box';
import { HStackViewStyles as styles } from './HStack.style';
import { HStackViewComponent } from './HStack.type';

export const HStackView: HStackViewComponent = function ({
  space = 0,

  containerStyle,
  contentContainerStyle,

  children,
}) {
  const itemContainerStyle = useMemo<ViewStyle>(
    () => ({
      marginLeft: spaces(space),
    }),
    [space],
  );

  return (
    <BoxView containerStyle={[containerStyle]} contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
      {Children.map(children, (child, index) => (
        <View key={index} style={[index > 0 && itemContainerStyle]}>
          {child}
        </View>
      ))}
    </BoxView>
  );
};

export const MemoHStackView = memo(HStackView);
