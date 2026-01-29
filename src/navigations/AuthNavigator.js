import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import VerifyOtp from '../screens/VerifyOtp';
import CreateNewPassword from '../screens/CreateNewPassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="forgetPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="otp" component={VerifyOtp} />
      <Stack.Screen name="newpassword" component={CreateNewPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
