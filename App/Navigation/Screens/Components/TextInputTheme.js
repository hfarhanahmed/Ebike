import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';

/*
  *   This is a Text Input
  *   Component Props:
  **    - text (text to be displayed)
        - style (if you want to add any styles apart from default theme styles)
        - placeholder (The placeholder value for the TextInput)
        - onChangeText (A hander to be called on onChangeText)
        - onBind  (A handler to be called on onBind)
        - value (initial value if any)
*/

function TextInputTheme(props) {
  const { theme } = useTheme();
  const style = theme.styles();
  return (
    <TextInput
      style={{
        ...props.style,
        ...style.textInput,
      }}
      placeholder={props.placeholder}
      placeholderTextColor={theme.colors.placeholderColor}
      numberOfLines={1}
      ellipsizeMode='tail'
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    >
      {props.text}
    </TextInput>
  );
}

export default TextInputTheme;
