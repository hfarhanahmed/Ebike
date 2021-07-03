import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';
/*
  *   This is a simple Text Label with an icon on the left that will be used in many screens
  *   Component Props:
  **    - text (text to be displayed)
        - fontWeight (If you want to make font bold you can use this prop)
        - numberOfLines (if text is more than 1 line and you want to limit it to 1 line or n lines)
*/
function TextLabel(props) {
  const { theme } = useTheme();
  const style = theme.styles();
  return (
    <Text
      style={{
        ...style.textLabel,
        fontWeight: props.fontWeight,
      }}
      numberOfLines={props.numberOfLines}
      ellipsizeMode='tail'
    >
      {props.text}
    </Text>
  );
}

export default TextLabel;
