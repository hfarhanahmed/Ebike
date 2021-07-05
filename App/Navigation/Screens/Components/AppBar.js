/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Appbar } from 'react-native-paper';
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
    <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
      {options.isBackEnable && (
        <Appbar.BackAction
          onPress={() => {
            navigation.popToTop();
          }}
        />
      )}
      <Appbar.Content title={options.title} subtitle={options.subtitle} />
    </Appbar.Header>
  );
};

export default AppBar;
