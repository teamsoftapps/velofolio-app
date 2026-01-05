import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn'; // Import your actual screens
import SignUpScreen from '../screens/SignUp';

import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

// const AuthNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Welcome"
//       screenOptions={{
//         headerShown: false,
//         animation: 'slide_from_right',
//       }}
//     >
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen name="SignIn" component={SignInScreen} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//     </Stack.Navigator>
//   );
// };

const AuthNavigator = ({ setIsAuthenticated }: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn">
        {props => (
          <SignInScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
