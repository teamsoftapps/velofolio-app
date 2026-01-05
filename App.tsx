import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from './src/components/ScreenWrapper';
import ButtonSimple from './src/components/Button';
import CustomText from './src/components/CustomText';
import RootNavigator from './src/navigations/RootNavigator';
const App = () => {
  return <RootNavigator />;
};

export default App;

const styles = StyleSheet.create({});
