import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WrapperContainer from './src/components/ScreenWrapper';
import ScreenWrapper from './src/components/ScreenWrapper';

const App = () => {
  return (
    <ScreenWrapper backgroundColor="#f5f5f5">
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>This is now below the status bar!</Text>
      </View>
    </ScreenWrapper>
  );
};

export default App;

const styles = StyleSheet.create({});
