import React, { Children, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { spaces } from '~theme/layout';

import { BoxView } from '../Box';
import { VStackViewStyles as styles } from './VStack.style';
import { VStackViewComponent } from './VStack.type';

export const VStackView: VStackViewComponent = function ({
  space = 0,

  containerStyle,
  contentContainerStyle,

  children,
}) {
  const itemContainerStyle = useMemo<ViewStyle>(
    () => ({
      marginTop: spaces(space),
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

VStackView.defaultProps = {};

export const MemoVStackView = memo(VStackView);
