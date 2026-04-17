import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput as RNTextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';

import { rs, rh } from '../../utils/dimensions';

const VerifyAccountScreen = ({ navigation, route }) => {
  const email = route?.params?.email || 'noah@gmail.com';
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={rs(20)} color="#1A1A1A" />
        </TouchableOpacity>

        <Typography style={styles.heading}>Verify Your Account</Typography>
        <Typography style={styles.subtitle}>
          Enter the 4-digit code we just sent to your email {email}
        </Typography>

        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <RNTextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={styles.codeInput}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <Button
          title="Verify & Continue"
          onPress={() => navigation.navigate('CreateNewPassword')}
          variant="primary"
        />

        <View style={styles.resendRow}>
          <Typography style={styles.resendText}>Didn't get the code? </Typography>
          <TouchableOpacity onPress={() => {}}>
            <Typography style={styles.resendLink}>Resend Code</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: rs(20),
    paddingBottom: rh(30),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  heading: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(24),
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: rs(24),
    gap: rs(16),
  },
  codeInput: {
    width: rs(56),
    height: rs(56),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    backgroundColor: '#F9FAFB',
    fontSize: rs(22),
    fontWeight: '600',
    color: '#1A1A1A',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rs(16),
  },
  resendText: {
    fontSize: rs(14),
    color: '#6B7280',
  },
  resendLink: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#1A1A1A',
    textDecorationLine: 'underline',
  },
});

export default VerifyAccountScreen;
