import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from './src/components/ScreenWrapper';
import ButtonSimple from './src/components/Button';
import CustomText from './src/components/CustomText';
const App = () => {
  return (
    <ScreenWrapper backgroundColor="#f5f5f5">
      <View style={{ padding: 20 }}>
        <CustomText text="hello" />
      </View>
    </ScreenWrapper>
  );
};

export default App;

const styles = StyleSheet.create({});
