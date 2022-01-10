import { StyleSheet } from 'react-native';
import { solidColors } from '~theme/color';
import { spaces } from '~theme/layout';

export const GradientButtonStyles = StyleSheet.create({
  contentContainer: {
    padding: spaces(2),
  },
  text: {
    color: solidColors.white,
    textAlign: 'center',
  },
});
