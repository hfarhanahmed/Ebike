/* eslint-disable react/prop-types */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {useTheme} from '../../../customHook/ThemeContext';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

/*    officialURL = https://callstack.github.io/react-native-paper/integrate-app-bar-with-react-navigation.html
  **  All screens which aree defined in Stack.Navigator will have this Appbar
  **  Folowing are the options you can add while creating a screen.
      - isBackEnable
      - isAppbarEnable
      - title
      - subtitle
 */

const AppBarWithMenu = props => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
      {props.isBackEnable && (
        <Appbar.BackAction
          onPress={() => {
            navigation.popToTop();
          }}
        />
      )}
      <Appbar.Content title={props.title} subtitle={props.subtitle} />
      <Appbar.Action
        icon="filter"
        onPress={() => {
          props.onActionPress();
        }}
      />
    </Appbar.Header>
  );
};

export default AppBarWithMenu;
