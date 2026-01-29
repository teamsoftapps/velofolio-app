import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';

import CustomTabBar from '../components/CustomTabBar';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator();

const AppTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Clients" component={ClientsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
};

export default AppTabsNavigator;
