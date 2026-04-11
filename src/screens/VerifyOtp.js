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
import CustomHeader from '../components/CustomHeader';

import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const VerifyOtp = ({ route }) => {
  const { type = 'default' } = route.params || {};
  const { phone } = route.params || {};
  const isTFA = type === 'TFA';
  
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  return (
    <ScreenWrapper backgroundColor={isTFA ? colors.grayLight : 'transparent'} edges={[]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {isTFA ? (
          // TFA: Gray background, no image
          <View style={[styles.container, styles.tfaContainer]}>
            <CustomHeader title=" " transparent={true} />
            
            <View style={styles.content}>
               <CustomText
                style={[
                  styles.title,
                  { textAlign: 'center', color: colors.black, fontSize: responsiveFontSize(3) },
                ]}
                fontWeight="500"
              >
                OTP VERIFICATION
              </CustomText>

              <CustomText style={[styles.subtitle, { textAlign: 'center' }]}>
                Enter the 4-digit code we just sent to{'\n'}
                your phone number{' '}
                <CustomText fontWeight="600">+1 (514) 550-3281</CustomText>
              </CustomText>

              <View style={styles.tfaOtpWrapper}>
                <OTPInput 
                  value={otp} 
                  setValue={setOtp} 
                />
              </View>

              <ButtonSimple
                textStyle={{ color: colors.white }}
                onPress={() => {
                  navigation.navigate('TwoFactor', { phone });
                }}
                title="Verify & Continue"
                backgroundColor={colors.blueAccent}
              />

              <TouchableOpacity style={styles.resendRow}>
                <CustomText color={colors.textSecondary}>
                  Didn't get the code?{' '}
                </CustomText>
                <CustomText color={colors.primary} fontWeight="600">
                  Resend Code
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          // Default: Image background
          <ImageBackground
            source={require('../assets/authbg.png')}
            style={styles.bg}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <CustomHeader title=" " transparent={true} />
              
              <View style={styles.content}>
                <CustomText style={styles.title} fontWeight="700">
                  Verify Your Account
                </CustomText>

                <CustomText style={styles.subtitle}>
                  Enter the 4-digit code we just sent to{'\n'}
                  <CustomText fontWeight="600">
                    your email noah@gmail.com
                  </CustomText>
                </CustomText>

                <OTPInput value={otp} setValue={setOtp} />

                <ButtonSimple
                  textStyle={{ color: colors.white }}
                  onPress={() => {
                    navigation.navigate('newpassword');
                  }}
                  title="Verify & Continue"
                  backgroundColor={colors.black}
                  disabled={otp.length !== 4}
                />

                <TouchableOpacity style={styles.resendRow}>
                  <CustomText color={colors.textSecondary}>
                    Didn't get the code?{' '}
                  </CustomText>
                  <CustomText color={colors.black} fontWeight="600">
                    Resend Code
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        )}
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
  },
  content: {
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(2),
  },
  tfaContainer: {
    backgroundColor: colors.grayLight || '#f3f4f6',
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(1),
  },
  subtitle: {
    fontSize: responsiveFontSize(1.9),
    color: colors.textSecondary,
    marginBottom: responsiveHeight(4),
  },
  tfaOtpWrapper: {
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
  },
});