import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';
import OTPInput from '../components/OTPInput';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  return (
    <ScreenWrapper backgroundColor="transparent">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/authbg.png')}
          style={styles.bg}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Back */}
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >
              <Ionicons
                name="arrow-back-outline"
                size={responsiveFontSize(2.8)}
                color={colors.black}
              />
            </TouchableOpacity>

            {/* Title */}
            <CustomText style={styles.title} fontWeight="700">
              Verify Your Account
            </CustomText>

            {/* Subtitle */}
            <CustomText style={styles.subtitle}>
              Enter the 4-digit code we just sent to{'\n'}
              <CustomText fontWeight="600">
                your email noah@gmail.com
              </CustomText>
            </CustomText>

            {/* OTP */}
            <OTPInput value={otp} setValue={setOtp} />

            {/* Button */}
            <ButtonSimple
              onPress={() => {
                navigation.navigate('newpassword');
              }}
              title="Verify & Continue"
              backgroundColor={colors.black}
              disabled={otp.length !== 4}
            />

            {/* Resend */}
            <TouchableOpacity style={styles.resendRow}>
              <CustomText color={colors.textSecondary}>
                Didn't get the code?{' '}
              </CustomText>
              <CustomText color={colors.black} fontWeight="600">
                Resend Code
              </CustomText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default VerifyOtp;
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(4),
  },

  backBtn: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderColor: colors.black,
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },

  backIcon: {
    fontSize: responsiveFontSize(5),
  },

  title: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(1),
  },

  subtitle: {
    fontSize: responsiveFontSize(1.9),
    color: colors.textSecondary,
  },

  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
  },
});
