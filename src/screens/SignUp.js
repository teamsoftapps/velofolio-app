import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
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
import CheckBoxSimple from '../components/CheckBoxSimple';

import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { loginWithGoogle, signupWithEmail } from '../services/firebaseAuth';
const SignUpScreen = () => {
  const [isLoading,setIsLoading]=useState(false)
  const navigation = useNavigation();
  const [agree, setAgree] = useState(false);
  const [email,setEmail]=useState('')
  const [name, setName] = useState ('');
  const [password, setPassword] = useState('');
  const handleSignup=async () => {
    if (!name || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    if (!agree) {
      alert('Please accept terms & conditions');
      return;
    }
setIsLoading(true)
    try {

      await signupWithEmail(email, password, name);
      setIsLoading(false)
      navigation.replace('Home');
    } catch (e) {
      alert(e.message);
            setIsLoading(false)

    }
  }
  return (
    <ScreenWrapper backgroundColor="transparent">
      <ImageBackground
        source={require('../assets/authbg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* LOGO */}
          <Image
            source={require('../assets/AppLogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* HEADERS */}
          <CustomText style={styles.title} fontWeight="700">
            Sign Up
          </CustomText>

          <CustomText style={styles.subtitle}>
            Your Studio. Your Workflow.
          </CustomText>

          {/* FORM */}
          <View style={styles.form}>
            <InputField
              label="First Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your first name"
            />

            <InputField
            value={email}
            onChangeText={setEmail}
              label="Email Address"
              placeholder="e.g. noah@gmail.com"
              keyboardType="email-address"
            />

            <InputField value={password} onChangeText={setPassword} label="Password" placeholder="********" isPassword />

            {/* Terms */}
            <View style={styles.termsRow}>
              <CheckBoxSimple
                checked={agree}
                onPress={() => setAgree(!agree)}
              />

              <CustomText style={styles.termsText}>
                I agree to the{' '}
                <CustomText color={colors.bluePrimary}>terms of use</CustomText>{' '}
                and{' '}
                <CustomText color={colors.bluePrimary}>
                  privacy policy
                </CustomText>
              </CustomText>
            </View>

            {/* Button */}
           <ButtonSimple
  textStyle={{ color: colors.white }}
  title={isLoading?"Signing Up...":"Sign Up"}
  backgroundColor={colors.black}
  onPress={handleSignup}
/>


            {/* OR */}
            <View style={styles.orRow}>
              <View style={styles.line} />
              <CustomText style={styles.orText}>OR</CustomText>
              <View style={styles.line} />
            </View>

            {/* Google */}
            <ButtonSimple
              title="Sign in with Google"
              backgroundColor={colors.white}
              textStyle={{ color: colors.black }}
              leftIcon={require('../assets/Google.png')}
              style={styles.googleBtn}
                onPress={async () => {
                              try {
                                await loginWithGoogle();
                              } catch (e) {
                                alert(e.message);
                              }
                            }}
            />

            {/* Sign In */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.bottomRow}
            >
              <CustomText color={colors.textMuted}>
                Already a member?{' '}
              </CustomText>
              <CustomText fontWeight="700">Sign in</CustomText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  bg: { flex: 1, width: '100%' },

  container: {
    flexGrow: 1, // ⭐⭐⭐ IMPORTANT
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(8),
  },

  logo: {
    width: responsiveWidth(30),
    height: responsiveHeight(8),
    marginBottom: responsiveHeight(3),
  },

  title: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(0.5),
  },

  subtitle: {
    fontSize: responsiveFontSize(2),
    color: colors.textSecondary,
  },

  form: {
    marginTop: responsiveHeight(3),
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1.5),
  },

  termsText: {
    marginLeft: responsiveWidth(3),
    flex: 1,
    fontSize: responsiveFontSize(1.7),
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

  orText: {
    marginHorizontal: responsiveWidth(3),
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: colors.borderExtraLight,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
  },
});
