/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

/*    officialURL = https://callstack.github.io/react-native-paper/integrate-app-bar-with-react-navigation.html
  **  All screens which aree defined in Stack.Navigator will have this Appbar
  **  Folowing are the options you can add while creating a screen.
      - isBackEnable
      - isAppbarEnable
      - title
      - subtitle
 */

const AppBar = (props) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const options = props.scene.descriptor.options;
  if (options.isAppbarEnable === false) {
    return <></>;
  }
  return (
    /* TODO:@Farhan Check this primary color undefined error,temporarily hard coded red color because This PR dedicated for Merge conflits issue */
    <View style={{ backgroundColor: theme.colors.primary }}>
      {options.isBackEnable && (
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
          }}
        />
      )}
      <Text subtitle={options.subtitle} >{options.title}</Text>
    </View>
  );
};

export default AppBar;
