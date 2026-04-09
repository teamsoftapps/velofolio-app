import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';
import InputField from '../components/InputField';
import AuthGradient from '../components/AuthGradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../utils/colors';
import { loginWithEmail, loginWithGoogle } from '../services/firebaseAuth';
import ToastService from '../utils/ToastService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  
  return (
    <ScreenWrapper backgroundColor="transparent" edges={[]}>
      <AuthGradient style={styles.bg}>
        <View style={[styles.container, { paddingTop: insets.top + (responsiveHeight(2) || 20) }]}>
          {/* LOGO */}
          <View style={styles.logoRow}>
            <Image
              resizeMode="center"
              source={require('../assets/AppLogo.png')}
              style={styles.logo}
            />
          </View>

          {/* HEADERS */}
          <CustomText fontSize={26} fontWeight="700" style={styles.title}>
            Sign In
          </CustomText>

          <CustomText
            fontSize={14}
            color={colors.textSecondary}
            style={styles.subtitle}
          >
            Welcome Back
          </CustomText>

          {/* FORM */}
          <View style={{ marginTop: 25 }}>
            <InputField
              label="Email Address"
              placeholder="e.g. noah@gmail.com"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            <InputField
              label="Password"
              placeholder="********"
              isPassword
              onChangeText={setPassword}
              value={password}
            />

            {/* Forgot */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('forgetPassword');
              }}
              style={styles.forgot}
            >
              <CustomText color={colors.bluePrimary} fontSize={13}>
                Forget Password?
              </CustomText>
            </TouchableOpacity>

            {/* Sign In Button */}
            <ButtonSimple
              textStyle={{ color: colors.white }}
              title={isLoading ? 'Signing In...' : 'Sign In'}
              backgroundColor={colors.black}
              onPress={async () => {
                try {
                  setIsLoading(true);
                  await loginWithEmail(email, password);
                  setIsLoading(false);
                  ToastService.success('Success', 'Welcome back!');
                } catch (e) {
                  ToastService.error('Login Error', e.message);
                  setIsLoading(false);
                }
              }}
            />

            {/* OR */}
            <View style={styles.orRow}>
              <View style={styles.line} />
              <CustomText style={{ marginHorizontal: 10 }}>OR</CustomText>
              <View style={styles.line} />
            </View>

            {/* Google */}
            <ButtonSimple
              textStyle={{ color: colors.black }}
              title="Sign in with Google"
              backgroundColor={colors.white}
              leftIcon={require('../assets/Google.png')}
              onPress={async () => {
                try {
                  await loginWithGoogle();
                  ToastService.success('Success', 'Signed in with Google!');
                } catch (e) {
                  ToastService.error('Google Login Error', e.message);
                }
              }}
            />

            {/* Sign up */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={styles.signupRow}
            >
              <CustomText color={colors.textMuted}>Not a member? </CustomText>
              <CustomText fontWeight="700">Sign up</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </AuthGradient>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
  },

  logoRow: {
    marginBottom: responsiveHeight(3),
  },

  logo: {
    width: responsiveWidth(35),
    height: responsiveHeight(10),
  },

  title: {
    fontSize: responsiveFontSize(3.4),
    marginTop: responsiveHeight(1),
  },

  subtitle: {
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(0.6),
  },

  forgot: {
    alignSelf: 'flex-end',
    marginVertical: responsiveHeight(1.3),
  },

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(3),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: colors.borderExtraLight,
    marginTop: responsiveHeight(0.5),
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
  },
});
