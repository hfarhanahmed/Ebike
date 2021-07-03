import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';
import Font from '../../../Theme/Font';

/*
  *   This is a simple Button with primary theme color
  *   Component Props:
  **    - heading (Bold heading text)
        - text (description below heading)
        - buttonTitle (title to be displayed on button)
        - onPress (A handler to be called on onPress of the Button)
        - (* Optional) keyName (if a key to be assigned to the button)

    ** Example Use
      <BottomButtonPDP
        heading='Personalized Pricing'
        text='View payments for this vehicle'
        buttonTitle='GET PRICING'
        onPress={() => {}}
      />
*/

function BottomButtonPDP(props) {
  const { theme } = useTheme();
  const style = theme.styles();
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10 }}>
      <View
        style={{ flex: 0.6, flexDirection: 'column', justifyContent: 'center' }}
      >
        <Text
          style={{
            ...Font.h7,
            textAlign: 'left',
          }}
        >
          {props.heading}
        </Text>
        <Text
          style={{
            ...Font.label2,
            textAlign: 'left',
            marginTop: 1,
          }}
        >
          {props.text}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.onPress}
        key={props.keyName}
        style={{
          flex: 0.4,
          ...style.bottomButton,
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            color: theme.colors.whiteColor,
            ...Font.BUTTON,
          }}
        >
          {props.buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomButtonPDP;
