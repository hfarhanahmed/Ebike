import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../Screens/SearchScreen';
import Settings from '../Screens/Settings';
import { useTheme } from '../../customHook/ThemeContext';
import AppBar from '../Screens/Components/AppBar';

const Stack = createStackNavigator();

export default function container() {
  const { theme } = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <AppBar {...props} />,
        }}
      >
        <Stack.Screen
          name='MainActivity'
          component={SearchScreen}
          options={{
            title: 'Ebike',
            subtitle: 'The Future of mobility',
          }}
        />
        <Stack.Screen
          name='Details'
          component={Settings}
          options={{ title: 'Car Details', isBackEnable: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
