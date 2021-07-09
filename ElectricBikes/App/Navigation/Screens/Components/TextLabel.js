import React from 'react';
import { Text } from 'react-native';
import { getTheme } from '../../../Theme';

/*
  *   This is a simple Text Label with an icon on the left that will be used in many screens
  *   Component Props:
  **    - text (text to be displayed)
        - fontWeight (If you want to make font bold you can use this prop)
        - numberOfLines (if text is more than 1 line and you want to limit it to 1 line or n lines)
*/

function TextLabel(props) {
  const theme = getTheme('');
  return (
    <Text
      style={{
        ...props.style,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
      }}
      numberOfLines={props.numberOfLines}
      ellipsizeMode='tail'
    >
      {props.text}
    </Text>
  );
}

export default TextLabel;
