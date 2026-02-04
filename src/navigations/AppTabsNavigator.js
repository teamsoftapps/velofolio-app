import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';

import CustomTabBar from '../components/CustomTabBar';
import { TabParamList } from './types';
import ActonModal from "../components/ActionModal"
const Tab = createBottomTabNavigator();

const AppTabsNavigator = () => {
  const [modal,setModal]=useState(false)
  return (<>
      <ActonModal setModal={setModal} modal={modal}/>  
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      screenOptions={{
        headerShown: false,
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Clients" component={ClientsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
    </>
  );
};

export default AppTabsNavigator;
