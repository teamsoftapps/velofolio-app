import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import OTPInput from '../components/OTPInput';
import ButtonSimple from '../components/Button';

const VerifyAccountScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Get verification type and contact from route params
  // route.params = { type: 'phone' | 'email', contact: '+1 (514) 550-3281' | 'noah@gmail.com' }
  const { type = 'phone', contact = '+1 (514) 550-3281' } = route?.params || {};

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleVerify = () => {
    if (otp.length === 4) {
      console.log('Verifying OTP:', otp);
      // Handle verification logic
    }
     if (type === 'email') {
      navigation.navigate("RecoveryEmail")
      return
    }
    navigation.navigate("BackupPhone")

  };

  const handleResend = () => {
    if (canResend) {
      console.log('Resending code to:', contact);
      setCountdown(30);
      setCanResend(false);
      setOtp('');
    }
  };

  const getDescription = () => {
    if (type === 'email') {
      return `Enter the 4-digit code we just sent to\nyour email ${contact}`;
    }
    return `Enter the 4-digit code we just sent to\nyour phone number ${contact}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={" "} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.heading}>Verify Your Account</Text>
            <Text style={styles.description}>{getDescription()}</Text>
          </View>

          {/* OTP Input */}
          <View style={styles.otpContainer}>
          <OTPInput 
            value={otp} 
            setValue={setOtp} 
            length={4} 
          />
</View>
          {/* Verify Button */}
          <ButtonSimple
            title="Verify & Continue"
            onPress={handleVerify}
            disabled={otp.length !== 4}
            backgroundColor={colors.primary || '#0ea5e9'}
            style={styles.verifyButton}
            textStyle={styles.verifyButtonText}
          />

          {/* Resend Code */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get the code? </Text>
            <TouchableOpacity 
              onPress={handleResend}
              disabled={!canResend}
            >
              <Text style={[
                styles.resendLink,
                !canResend && styles.resendLinkDisabled
              ]}>
                {canResend ? 'Resend Code' : `Resend in ${countdown}s`}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#f8f9fa',
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    // backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    // paddingTop: responsiveWidth(6),
    paddingBottom: responsiveWidth(8),
    flexGrow: 1,
  },
  titleSection: {
    marginBottom: responsiveHeight(2),
  },
  heading: {
    fontSize: responsiveWidth(6),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1.5),
  },
  description: {
    fontSize: responsiveWidth(4),
    color: colors.grayDark12 || '#6b7280',
    lineHeight: responsiveHeight(3),
  },
  verifyButton: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
    borderRadius: responsiveWidth(50),
    height: responsiveHeight(7.5),
  },
  verifyButtonText: {
    color: colors.white,
    fontWeight: '400',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: responsiveWidth(3.8),
    color: colors.textSecondary || '#6b7280',
  },
  resendLink: {
    fontSize: responsiveWidth(3.8),
    color: colors.primary || '#0ea5e9',
    fontWeight: '500',
  },
  resendLinkDisabled: {
    color: colors.textSecondary || '#9ca3af',
  },
  otpContainer:{
    // width:responsiveWidth(20),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:responsiveWidth(4),
  }
});

export default VerifyAccountScreen;