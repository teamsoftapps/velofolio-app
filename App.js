import React from 'react';
import { Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthNavigator from './src/navigation/AuthNavigator';

// Disable global font scaling to ensure UI remains as designed
const disableFontScaling = () => {
  if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
  } else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  if (TextInput.defaultProps) {
    TextInput.defaultProps.allowFontScaling = false;
  } else {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
};

disableFontScaling();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
