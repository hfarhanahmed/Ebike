import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';

/*
  *   This is a simple Text Label to show the price whereever needed
  *   Component Props:
  **    - text (Price to be displayed)
        - fontWeight (If you want to make font bold you can use this prop)
*/

function TextLabel(props) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        color: theme.colors.primary,
        fontSize: theme.fontSizes.priceSize,
        fontWeight: props.fontWeight,
      }}
      numberOfLines={1}
      ellipsizeMode='tail'
    >
      {props.text}
    </Text>
  );
}

export default TextLabel;
