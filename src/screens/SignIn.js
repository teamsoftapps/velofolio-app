import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';
import InputField from '../components/InputField';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';
import { loginWithEmail, loginWithGoogle } from '../services/firebaseAuth';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading,setIsLoading]=useState(false)
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <ScreenWrapper backgroundColor="transparent">
      <ImageBackground
        source={require('../assets/authbg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.container}>
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
              title={isLoading?"Signing In...":"Sign In"}
              backgroundColor={colors.black}
              onPress={async () => {
                try {
                  setIsLoading(true)
                  await loginWithEmail(email, password);
                                    setIsLoading(false)

                } catch (e) {

                  alert(e.message);
                  setIsLoading(false)
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
                } catch (e) {
                  alert(e.message);
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
      </ImageBackground>
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
    paddingTop: responsiveHeight(4),
  },

  logoRow: {
    // alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },

  logo: {
    width: responsiveWidth(30),
    height: responsiveHeight(8),
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
