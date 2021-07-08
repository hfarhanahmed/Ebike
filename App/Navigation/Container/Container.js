import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../Screens/SearchScreen';
import Details from '../Screens/BikeDetails';
import {useTheme} from '../../customHook/ThemeContext';
import AppBar from '../Screens/Components/AppBar';

const Stack = createStackNavigator();

export default function Container() {
  const {theme} = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          header: props => <AppBar {...props} />,
        }}>
        <Stack.Screen
          name="MainActivity"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Bike Details', isBackEnable: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
