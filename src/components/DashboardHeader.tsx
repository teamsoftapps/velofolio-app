// components/DashboardHeader.tsx
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomText from './CustomText';
import colors from '../utils/colors';

const DashboardHeader = ({
  name = 'Akshay',
  onMenuPress,
}: {
  name?: string;
  onMenuPress?: () => void;
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Profile + Greeting */}
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/Profile.png')} // Your profile photo
          style={styles.avatar}
          resizeMode="cover"
        />

        <View style={styles.greeting}>
          <CustomText style={styles.hiText} fontWeight="bold">
            Hi, {name}
          </CustomText>
          <CustomText style={styles.subtitle} color="#666">
            Here's your studio overview{'\n'}for today.
          </CustomText>
        </View>
      </View>

      {/* Right: Menu Icon */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <View style={styles.hamburger}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(3),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(10),
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
    marginTop: 2,
  },
  menuButton: {
    padding: 8,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  line: {
    height: 2.5,
    width: '100%',
    backgroundColor: colors.black,
    borderRadius: 2,
  },
});

export default DashboardHeader;
