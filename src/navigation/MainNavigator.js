import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/tabs/HomeScreen';
import ClientsScreen from '../screens/tabs/ClientsScreen';
import CalendarScreen from '../screens/tabs/CalendarScreen';
import JobsScreen from '../screens/tabs/JobsScreen';
import PlusButtonModal from '../components/PlusButtonModal';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.plusButtonContainer}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.plusButton}>{children}</View>
  </TouchableOpacity>
);

const MainNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="briefcase" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Plus"
          component={HomeScreen} // Placeholder, button handled by tabBarButton
          options={{
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                onPress={() => setModalVisible(true)}
              >
                <Feather name="plus" size={32} color="#FFFFFF" />
              </CustomTabBarButton>
            ),
          }}
        />
        <Tab.Screen
          name="Clients"
          component={ClientsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="calendar" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      <PlusButtonModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Platform.OS === 'ios' ? 88 : 70,
    paddingTop: 10,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: Platform.OS === 'ios' ? 0 : 5,
  },
  plusButtonContainer: {
    top: -25, // Move button up
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#38BDF8', // Light blue from design
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default MainNavigator;
