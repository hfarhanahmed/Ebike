import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';

/*
  *   This is a simple Button with primary theme color
  *   Component Props:
  **    - title (Title to be displayed)
        - style (if you want to add any styles apart from default theme styles)
        - onPress (A handler to be called on onPress of the Button)
        - keyName (if a key to be assigned to the button)
*/

function BottomButton(props) {
  const { theme } = useTheme();
  const style = theme.styles();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      key={props.keyName}
      style={{
        ...props.style,
        ...style.bottomButton,
      }}
    >
      <Text
        style={{
          alignItems: 'center',
          color: theme.colors.whiteColor,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default BottomButton;
