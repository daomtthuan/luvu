import React, { memo } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DEFAULT_GRADIENT_COLOR, DEFAULT_OPACITY } from '~constants/theme';
import { solidColors } from '~theme/color';

import { GradientButtonStyles as styles } from './Gradient.style';
import { GradientButtonComponent } from './Gradient.type';

export const GradientButton: GradientButtonComponent = function ({
  text,

  color = DEFAULT_GRADIENT_COLOR,
  opacity = DEFAULT_OPACITY,

  textStyle,
  containerStyle,
  contentContainerStyle,

  children,

  ...props
}) {
  return (
    <TouchableHighlight style={[containerStyle]} underlayColor={solidColors.black} activeOpacity={opacity} {...props}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={color}
        style={[styles.contentContainer, contentContainerStyle]}
      >
        {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children}
      </LinearGradient>
    </TouchableHighlight>
  );
};

export const MemoGradientButton = memo(GradientButton);
