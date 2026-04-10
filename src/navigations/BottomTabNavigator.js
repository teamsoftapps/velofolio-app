import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';
import Teams from '../screens/Teams';
import CustomTabBar from '../components/CustomTabBar';
import ActonModal from '../components/ActionModal';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ActonModal modal={modal} setModal={setModal} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Teams" component={Teams} />
        <Tab.Screen name="Clients" component={ClientsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
