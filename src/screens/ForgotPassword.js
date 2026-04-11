import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/CustomText';
import InputField from '../components/InputField';
import ButtonSimple from '../components/Button';
import AuthGradient from '../components/AuthGradient';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { forgotPassword } from '../services/firebaseAuth';
import ToastService from '../utils/ToastService';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();

  const handleReset = async () => {
    setLoading(true);
    try {
      await forgotPassword(email.trim());
      ToastService.success('Success', 'Reset link sent — check your email!');
      navigation.goBack();
    } catch (err) {
      ToastService.error('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper backgroundColor="transparent" edges={[]}>
      <AuthGradient style={styles.bg}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <CustomHeader title=" " transparent={true} />
          <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, responsiveHeight(4)) }]}>
            {/* Title */}
            <CustomText style={styles.title} fontWeight="700">
              Forgot Password
            </CustomText>

            {/* Subtitle */}
            <CustomText style={styles.subtitle}>
              Enter your registered email address and we'll send you a secure
              verification code.
            </CustomText>

            {/* Input */}
            <View style={styles.form}>
              <InputField
                label="Email Address"
                placeholder="e.g. noah@gmail.com"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />

              {/* Button */}
              <ButtonSimple
                textStyle={{ color: colors.white }}
                onPress={handleReset}
                title="Send Reset Email"
                backgroundColor={colors.black}
                style={styles.button}
                disabled={!email}
              />
            </View>
          </View>
        </ScrollView>
      </AuthGradient>
    </ScreenWrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(2),
  },

  title: {
    fontSize: responsiveFontSize(3.8),
    marginBottom: responsiveHeight(1),
  },

  subtitle: {
    fontSize: responsiveFontSize(1.9),
    color: colors.textSecondary,
    marginBottom: responsiveHeight(4),
  },

  form: {
    marginTop: responsiveHeight(2),
  },

  button: {
    marginTop: responsiveHeight(2),
  },
});
