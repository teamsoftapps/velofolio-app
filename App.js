import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigations/RootNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Jobs from './src/screens/Jobs';
import Clients from './src/screens/Clients';
import MyCalendarScreen from './src/screens/Calendar';
import UserProfileScreen from './src/screens/Profile';
import Workload from "./src/components/Profile/WorkloadOverview"
import Payments from "./src/screens/Payments"
import ReportAnalysis from "./src/screens/ReportAnalysis"
GoogleSignin.configure({
  webClientId:
    '130588342127-kmrjq28tj7eodkio74imb0ouc1cdrdd1.apps.googleusercontent.com',
      offlineAccess: false, // optional, true if you need refresh token

});


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
