import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ActionModal from "./ActionModal"
import colors from '../utils/colors';
import CustomText from './CustomText';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const icons = {
  Home: {
    active: require('../assets/icons/home_black.png'),
    inactive: require('../assets/icons/home_gray.png'),
  },
  Jobs: {
    active: require('../assets/icons/jobs_black.png'),
    inactive: require('../assets/icons/jobs_gray.png'),
  },
  Clients: {
    active: require('../assets/icons/clients_black.png'),
    inactive: require('../assets/icons/clients_gray.png'),
  },
  Calendar: {
    active: require('../assets/icons/calendar_gray.png'),
    inactive: require('../assets/icons/calendar_gray.png'),
  },
};

const CustomTabBar = ({ state, navigation ,setModal,modal}) => {
 
  const handleCenterPress = () => {
   setModal(!modal)
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
if (route.name === 'Notifications'||route.name==="AddJobs" ||route.name==="AddClients"||route.name==="Settings"||route.name==="Teams"|| route.name==="AddTeams") return null;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const iconSource =
          icons[route.name]?.[isFocused ? 'active' : 'inactive'];

        const tabStyle = index < 2 ? styles.leftTab : styles.rightTab;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={tabStyle}
            activeOpacity={0.8}
          >
            <Image
              source={iconSource}
              style={[styles.sideIcon, { opacity: isFocused ? 1 : 0.5 }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}

      {/* CENTER BUTTON */}
      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={handleCenterPress}
          activeOpacity={0.85}
        >
          <CustomText style={styles.plusText}>+</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white, // ✅ themed
    borderTopWidth: 1,
    borderTopColor: colors.borderLight, // ✅ themed
    height: responsiveHeight(9),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(6),
    paddingBottom: responsiveHeight(1),
  },

  leftTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(10),
  },

  rightTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveWidth(10),
  },

  sideIcon: {
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
  },

  centerButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: responsiveHeight(2.2),
    alignItems: 'center',
  },

  centerButton: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
    backgroundColor: colors.blueAccent, // ✅ themed
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow, // ✅ themed
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },

  plusText: {
    color: colors.white, // ✅ themed
    fontSize: responsiveFontSize(4),
    fontWeight: '300',
    marginTop: -2,
  },
});
