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
import { useNavigation } from '@react-navigation/native';

const DashboardHeader = ({ name = 'Akshay', onMenuPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Left: Profile + Greeting */}
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onMenuPress}>
          <Image
            source={require('../assets/Profile.png')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.greeting}>
          <CustomText style={styles.subtitle}>
            Welcome Back! 👋
          </CustomText>
          <CustomText style={styles.hiText} fontWeight="bold">
            {name}
          </CustomText>
        </View>
      </View>

      {/* Right: Buttons */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name='search-outline' size={responsiveWidth(6.5)} color={colors.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={styles.iconButton}>
          <View style={styles.unread}></View>
          <Ionicons name='notifications-outline' size={responsiveWidth(6.5)} color={colors.black} />
        </TouchableOpacity>
      </View>
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
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(6.5),
    marginRight: responsiveWidth(3),
    backgroundColor: colors.gray,
  },

  greeting: {
    justifyContent: 'center',
  },

  subtitle: {
    fontSize: responsiveFontSize(2),
    color: colors.textSecondary,
    marginBottom: responsiveHeight(0.2),
  },

  hiText: {
    fontSize: responsiveFontSize(2.9),
    color: colors.black,
  },

  rightSection: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },

  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    position: 'relative',
  },

  unread: {
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    backgroundColor: colors.yellowAccent,
    borderRadius: responsiveWidth(4),
    position: 'absolute',
    top: responsiveWidth(2),
    right: responsiveWidth(4),
    zIndex: 10,
  },
});
