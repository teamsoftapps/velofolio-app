import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import DrawerContent from '../components/DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '80%',
          borderTopRightRadius: responsiveWidth(6),
          borderBottomRightRadius: responsiveWidth(0),
          overflow: 'hidden',
        },
        drawerType: 'front',
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen name="AppTabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
