import React, { memo } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { DEFAULT_OPACITY } from '~constants/theme';
import { solidColors } from '~theme/color';

import { FlatButtonStyles as styles } from './Flat.style';
import { FlatButtonComponent } from './Flat.type';

export const FlatButton: FlatButtonComponent = function ({
  text,

  opacity = DEFAULT_OPACITY,

  textStyle,
  containerStyle,
  contentContainerStyle,

  children,

  ...props
}) {
  return (
    <TouchableHighlight style={[containerStyle]} underlayColor={solidColors.black} activeOpacity={opacity} {...props}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children}
      </View>
    </TouchableHighlight>
  );
};

export const MemoFlatButton = memo(FlatButton);
