import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import CustomText from './CustomText';
import colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DashboardHeader = ({ name = 'Akshay', onMenuPress }) => {
  return (
    <View style={styles.container}>
      {/* Left: Profile + Greeting */}
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/Profile.png')}
          style={styles.avatar}
          resizeMode="cover"
        />

        <View style={styles.greeting}>
          <CustomText style={styles.hiText} fontWeight="bold">
            Hi, {name}
          </CustomText>

          <CustomText style={styles.subtitle}>
            Here's your studio overview{'\n'}for today.
          </CustomText>
        </View>
      </View>

      {/* Right: Menu Icon */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        {/* <View style={styles.hamburger}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View> */}
        <Ionicons name='exit-outline' size={responsiveWidth(9)}/>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(3),

    backgroundColor: colors.white,
    borderRadius: responsiveWidth(6), 
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
    marginRight: responsiveWidth(4),
  },

  greeting: {
    justifyContent: 'center',
  },

  hiText: {
    fontSize: responsiveFontSize(3.2),
    color: colors.black,
  },

  subtitle: {
    fontSize: responsiveFontSize(1.9),
    lineHeight: responsiveFontSize(2.6),
    marginTop: responsiveHeight(0.4),
    color: colors.textSecondary, // ✅ themed (no hardcode)
  },

  menuButton: {
    padding: responsiveWidth(2),
  },

  hamburger: {
    width: responsiveWidth(6),
    height: responsiveHeight(2.3),
    justifyContent: 'space-between',
  },

  line: {
    height: responsiveHeight(0.35),
    width: '100%',
    backgroundColor: colors.black,
    borderRadius: responsiveWidth(1),
  },
});
