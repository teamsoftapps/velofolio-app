import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';

import { rs, rh } from '../../utils/dimensions';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

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

        <Typography style={styles.heading}>Forgot Password</Typography>
        <Typography style={styles.subtitle}>
          Enter your registered email address and we'll send you a secure
          verification code.
        </Typography>

        <TextInput
          label="Email Address"
          placeholder="e.g. noah@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button
          title="Send Verification Code"
          onPress={() => navigation.navigate('VerifyAccount', { email })}
          variant="primary"
        />
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
    marginBottom: rs(16),
  },
});

export default ForgotPasswordScreen;
