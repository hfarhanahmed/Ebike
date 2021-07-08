import React from 'react';
import {Text} from 'react-native';
// import {useTheme} from '../../../customHook/ThemeContext';
import {getTheme} from '../../../Theme';

/*
  *   This is a simple Text Label to show the price whereever needed
  *   Component Props:
  **    - text (Price to be displayed)
        - fontWeight (If you want to make font bold you can use this prop)
*/

function TextLabel(props) {
  const theme = getTheme('');
  return (
    <Text
      style={{
        color: theme.colors.primary,
        fontSize: props.fontSize,
        fontWeight: 'bold',
      }}
      numberOfLines={1}
      ellipsizeMode="tail">
      ${props.text}.00
    </Text>
  );
}

export default TextLabel;
