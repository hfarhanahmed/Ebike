import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
// import {useTheme} from '../../../customHook/ThemeContext';
import {getTheme} from '../../../Theme';

/*
  *   This is a simple Button with primary theme color
  *   Component Props:
  **    - title (Title to be displayed)
        - style (if you want to add any styles apart from default theme styles)
        - onPress (A handler to be called on onPress of the Button)
        - keyName (if a key to be assigned to the button)
*/

function BottomButton(props) {
  const theme = getTheme('');
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      key={props.keyName}
      style={{
        ...props.style,
        alignItems: 'center',
        backgroundColor: theme.colors.buttonPrimary,
        borderRadius: 2,
        padding: 15,
      }}>
      <Text
        style={{
          alignItems: 'center',
          color: theme.colors.white,
          fontSize: theme.fontSizes.ButtonText,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default BottomButton;
