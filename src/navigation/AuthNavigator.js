import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import VerifyAccountScreen from '../screens/auth/VerifyAccountScreen';
import CreateNewPasswordScreen from '../screens/auth/CreateNewPasswordScreen';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen name="Main" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
