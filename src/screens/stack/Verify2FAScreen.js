import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Verify2FAScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const phoneNumber = route.params?.phoneNumber || '+1 (514) 550-3281';
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(53);
  const inputs = useRef([]);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Verify</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.heading}>OTP Verification</Typography>
        <Typography style={styles.subtitle}>
          Enter the 4-digit code we just sent to{'\n'}your phone number <Typography style={styles.phoneText}>{phoneNumber}</Typography>.
        </Typography>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.verifyButton} 
          activeOpacity={0.9} 
          onPress={() => navigation.navigate('TwoFactorAuth', { verified: true })}
        >
          <Typography style={styles.verifyButtonText}>Verify & Continue</Typography>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Typography style={styles.footerText}>Didn't get the code?</Typography>
          <Typography style={styles.footerText}>
            You can resend code in <Typography style={styles.timerText}>{timer}s</Typography>
          </Typography>
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(12),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(40),
    alignItems: 'center',
  },
  heading: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#000000',
    marginBottom: rs(16),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(22),
    marginBottom: rs(48),
  },
  phoneText: {
    color: '#000000',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: rs(16),
    marginBottom: rs(40),
  },
  otpInput: {
    width: rs(64),
    height: rs(64),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    fontSize: rs(24),
    fontWeight: '600',
    color: '#000000',
  },
  verifyButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    paddingVertical: rs(18),
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: rs(40),
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: rs(18),
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: rs(15),
    color: '#9CA3AF',
    marginBottom: rs(4),
  },
  timerText: {
    color: '#000000',
    fontWeight: '700',
  },
});

export default Verify2FAScreen;
