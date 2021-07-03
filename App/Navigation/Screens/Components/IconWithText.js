import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';
import FontIcon from '../../../Views/FontIcon/FontIcon';

/*
  *   This is a simple Text Label with an icon on the left that will be used in many screens
  *   Component Props:
  **    - iconName (name of the icon to be displayed)
        - text (text to be displayed)
        - fontWeight (If you want to make font bold you can use this prop)
*/

function IconWithText(props) {
  const { theme } = useTheme();
  const style = theme.styles();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontIcon
        name={props.iconName}
        style={{
          fontSize: 16,
          color: theme.colors.IconColor,
        }}
      />
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
    </View>
  );
}

export default IconWithText;
