import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';

import CustomTabBar from '../components/CustomTabBar';
import { TabParamList } from './types';
import ActonModal from "../components/ActionModal"
import Notifications from "../screens/Notifications"
import AddJobs from "../screens/AddJobs"
import AddClients from "../screens/AddClients"
import VelofolioSidebar from '../components/Sidebar';
import Setting from "../screens/Settings"
import Teams from "../screens/Teams"
import AddTeams from "../screens/AddTeams"
import Profile from "../screens/Profile"
import Payment from "../screens/Payments"
import ReportAnalysis from "../screens/ReportAnalysis"

const Tab = createBottomTabNavigator();

const AppTabsNavigator = () => {
  const [modal, setModal] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (<>
    <ActonModal setModal={setModal} modal={modal} />
    <VelofolioSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home">
        {props => <HomeScreen {...props} setSidebarVisible={setSidebarVisible} />}
      </Tab.Screen>
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Teams" component={Teams} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Payments" component={Payment} />
            <Tab.Screen name="ReportAnalysis" component={ReportAnalysis} />



      <Tab.Screen name="Clients" component={ClientsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="AddJobs" component={AddJobs} options={{
        tabBarStyle: { display: 'none' },
      }} />
      <Tab.Screen name="AddClients" component={AddClients} />
      <Tab.Screen name="AddTeams" component={AddTeams} />

      <Tab.Screen name="Settings" component={Setting} />


      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  </>
  );
};

export default AppTabsNavigator;
