import React from 'react';
import { StyleSheet } from 'react-native';

import ThemeContext from '../../customHook/ThemeContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchList from './SearchScreen';
import VirtualizedListExample from '../../VirtualizedList/VirtualizedListExample';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Tab.Navigator
          backBehavior='none'
          tabBarOptions={{
            indicatorStyle: {
              backgroundColor: theme.colors.PrimaryColor,
            },
          }}
        >
          <Tab.Screen
            name='Virtualized'
            children={() => <VirtualizedListExample rentalCategoryCode='Car' />}
          />
          <Tab.Screen
            name='Rent a car'
            children={() => <SearchList rentalCategoryCode='Car' />}
          />
          <Tab.Screen
            name='With driver'
            children={() => <SearchList rentalCategoryCode='CarWithDriver' />}
          />
        </Tab.Navigator>
      )}
    </ThemeContext.Consumer>
  );
}

