import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabsNavigator from './AppTabsNavigator';
import ChangePassword from '../screens/ChangePassword';
import AddJobs from '../screens/AddJobs';
import AddClients from '../screens/AddClients';
import AddTeams from '../screens/AddTeams';
import Setting from '../screens/Settings';
import Notifications from '../screens/Notifications';
import Payments from '../screens/Payments';
import ReportAnalysis from '../screens/ReportAnalysis';
import ClientProfile from '../screens/ClientProfile';
import CompanyProfile from '../screens/CompanyProfileForm';
import SecuritynPassword from '../screens/SecuritynPassword';
import Profile from '../screens/Profile';
// import TFA from '../screens/TFA';
import DeleteAccount from "../screens/DeleteAccount"

const Stack = createNativeStackNavigator();

export default function TabsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={AppTabsNavigator} />

      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Setting} />
      <Stack.Screen name="SecuritynPassword" component={SecuritynPassword} />
  
 
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen
  name="DeleteAccount"
  component={DeleteAccount}
//   options={{ presentation: 'modal' }}
/>
      <Stack.Screen name="AddJobs" component={AddJobs} />
      <Stack.Screen name="AddClients" component={AddClients} />
      <Stack.Screen name="AddTeams" component={AddTeams} />

      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="ReportAnalysis" component={ReportAnalysis} />

      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}