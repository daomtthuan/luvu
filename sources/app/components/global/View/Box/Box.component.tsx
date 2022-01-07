import { memo } from 'react';
import { View } from 'react-native';

import { BoxViewComponent } from './Box.type';

export const BoxView: BoxViewComponent = function (props) {
  return (
    <View style={[props.containerStyle]}>
      <View style={[props.contentContainerStyle]}>{props.children}</View>
    </View>
  );
};

export const MemoBoxView = memo(BoxView);
