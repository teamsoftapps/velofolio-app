import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import AppTabsNavigator from './AppTabsNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="AppTabs">
            {props => <AppTabsNavigator {...props} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Auth">
            {props => (
              <AuthNavigator
                {...props}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
