// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppTabsNavigator from './AppTabsNavigator';
// import ChangePasword from '../screens/ChangePassword';
// import AddJobs from '../screens/AddJobs';
// import AddClients from '../screens/AddClients';
// import AddTeams from '../screens/AddTeams';
// import Setting from '../screens/Settings';
// import Notifications from '../screens/Notifications';
// import Payments from '../screens/Payments';
// import ReportAnalysis from '../screens/ReportAnalysis';
// import ClientProfile from '../screens/ClientProfile';
// import CompanyProfile from '../screens/CompanyProfileForm';
// import SecuritynPassword from '../screens/SecuritynPassword';
// import Profile from '../screens/Profile';
// import TFA from '../screens/TFA';

// const Stack = createNativeStackNavigator();

// const MainStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="Main" component={AppTabsNavigator} />
    //   <Stack.Screen name="ChangePassword" component={ChangePasword} />
    //   <Stack.Screen name="AddJobs" component={AddJobs} />
    //   <Stack.Screen name="AddClients" component={AddClients} />
    //   <Stack.Screen name="AddTeams" component={AddTeams} />
    //   <Stack.Screen name="Settings" component={Setting} />
    //   <Stack.Screen name="Notifications" component={Notifications} />
    //   <Stack.Screen name="Payments" component={Payments} />
    //   <Stack.Screen name="ReportAnalysis" component={ReportAnalysis} />
    //   <Stack.Screen name="ClientProfile" component={ClientProfile} />
    //   <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
    //   <Stack.Screen name="SecuritynPassword" component={SecuritynPassword} />
    //   <Stack.Screen name="Profile" component={Profile} />
    //   <Stack.Screen name="2FA" component={TFA} />
//     </Stack.Navigator>
//   );
// };

// export default MainStack;
// MainStack.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DeleteAccount from "../screens/DeleteAccount"

// import TabsStack from './TabsStack';
// import AddJobs from '../screens/AddJobs';
// import AddClients from '../screens/AddClients';

// const Stack = createNativeStackNavigator();

// export default function MainStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Main" component={TabsStack} />
//             <Stack.Screen name="DeleteAccount" component={DeleteAccount} />

//       {/* truly global screens */}
//       <Stack.Screen name="AddJobs" component={AddJobs} />
//       <Stack.Screen name="AddClients" component={AddClients} />
//     </Stack.Navigator>
//   );
// }

import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';
import Teams from '../screens/Teams';
import CustomTabBar from '../components/CustomTabBar';
import ActonModal from '../components/ActionModal';
import VelofolioSidebar from '../components/Sidebar';

import ChangePassword from '../screens/ChangePassword';
import DeleteAccount from '../screens/DeleteAccount';
import SecuritynPassword from '../screens/SecuritynPassword';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import AddJobs from '../screens/AddJobs';
import AddClients from '../screens/AddClients';
import AddTeams from '../screens/AddTeams';
import Payments from '../screens/Payments';
import ReportAnalysis from '../screens/ReportAnalysis';
import ClientProfile from '../screens/ClientProfile';
import CompanyProfile from '../screens/CompanyProfileForm';
import TwoFactorAuthScreen from "../screens/TFA"
import AddPhone from "../screens/AddPhone"
import VerifyOtp from '../screens/VerifyOtp';
import Sessions from "../screens/Sessions"
import AccountRecoveryScreen from "../screens/AccountRecoveryScreen"
import DeleteFeedbackScreen from "../screens/DeleteFeedbackScreen"
import ConfirmDelete from "../screens/ConfirmDeleteScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabsNavigator() {
  const [modal, setModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <ActonModal modal={modal} setModal={setModal} />
      <VelofolioSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      >
        <Tab.Screen name="Home">{props => <HomeScreen {...props} setSidebarVisible={setSidebarVisible} />}</Tab.Screen>
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Teams" component={Teams} />
        <Tab.Screen name="Clients" component={ClientsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tabs */}
      <Stack.Screen name="Tabs" component={AppTabsNavigator} />

      {/* Global screens accessible from tabs */}
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="SecuritynPassword" component={SecuritynPassword} />
            <Stack.Screen name="DeleteFeedbackScreen" component={DeleteFeedbackScreen} />
                        <Stack.Screen name="ConfirmDelete" component={ConfirmDelete} />


      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddJobs" component={AddJobs} />
      <Stack.Screen name="AddClients" component={AddClients} />
      <Stack.Screen name="AddTeams" component={AddTeams} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="ReportAnalysis" component={ReportAnalysis} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="TwoFactor" component={TwoFactorAuthScreen} />
            <Stack.Screen name="Sessions" component={Sessions} />
                        <Stack.Screen name="Recovery" component={AccountRecoveryScreen} />


            <Stack.Screen name="AddPhoneNumber" component={AddPhone} />
     <Stack.Screen 
  name="otpTFA" 
  component={VerifyOtp} 
  initialParams={{ type: 'TFA' }}
/>


    </Stack.Navigator>
  );
}