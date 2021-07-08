/* eslint-disable react/prop-types */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
// import {useTheme} from '../../../customHook/ThemeContext';
import {getTheme} from '../../../Theme';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

/*    officialURL = https://callstack.github.io/react-native-paper/integrate-app-bar-with-react-navigation.html
  **  All screens which aree defined in Stack.Navigator will have this Appbar
  **  Folowing are the options you can add while creating a screen.
      - isBackEnable
      - isAppbarEnable
      - title
      - subtitle
 */

const AppBar = props => {
  const theme = getTheme('');
  const navigation = useNavigation();
  const options = props.scene.descriptor.options;
  if (options.headerShown === false) {
    return <></>;
  }
  return (
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
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
