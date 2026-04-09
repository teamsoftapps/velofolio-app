import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomText from './CustomText';
import Feather from 'react-native-vector-icons/Feather';

const CustomTabBar = ({ state, navigation, setModal, modal }) => {

  const handleCenterPress = () => {
    setModal(!modal)
  };

  const getIcon = (name, isFocused) => {
    const color = isFocused ? '#000' : '#BDBDBD';
    const size = 26;

    switch (name) {
      case 'Home':
        return <Feather name={isFocused ? "home" : "home"} size={size} color={color} />;
      case 'Jobs':
        return <Ionicons name={isFocused ? "briefcase" : "briefcase-outline"} size={size} color={color} />;
      case 'Clients':
        return <Ionicons name={isFocused ? "people" : "people-outline"} size={size} color={color} />;
      case 'Calendar':
        return <Ionicons name={isFocused ? "calendar-clear" : "calendar-clear-outline"} size={size} color={color} />;
      default:
        return null;
    }
  };

  const getLabel = (name) => {
    if (name === 'Calendar') return 'Calendar';
    return name;
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        if (route.name === 'Notifications' || route.name === "AddJobs" || route.name === "AddClients" || route.name === "Settings" || route.name === "Teams" || route.name === "AddTeams" || route.name === "Payments" || route.name.includes("Profile")) return null;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const tabStyle = [
          styles.tab,
          index === 1 && { marginRight: responsiveWidth(10) },
          index === 3 && { marginLeft: responsiveWidth(10) },
        ];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={tabStyle}
            activeOpacity={0.8}
          >
            {getIcon(route.name, isFocused)}
            <CustomText style={[styles.tabLabel, { color: isFocused ? '#000' : '#BDBDBD' }]}>
              {getLabel(route.name)}
            </CustomText>
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
          <Ionicons name="add" size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    height: responsiveHeight(9.5),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(6),
    paddingBottom: responsiveHeight(1),
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabLabel: {
    fontSize: responsiveWidth(3.1),
    marginTop: 2,
    fontWeight: '400',
  },

  centerButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: responsiveHeight(2.8),
    alignItems: 'center',
  },

  centerButton: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
    backgroundColor: colors.blueAccent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
});

