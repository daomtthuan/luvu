import { StyleSheet } from 'react-native';
import { solidColors } from '~theme/color';
import { spaces } from '~theme/layout';

export const FlatButtonStyles = StyleSheet.create({
  contentContainer: {
    padding: spaces(2),
    backgroundColor: solidColors.light,
  },
  text: {
    color: solidColors.black,
    textAlign: 'center',
  },
});
