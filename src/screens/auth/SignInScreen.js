import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppLogo from '../../components/AppLogo';
import TextInput from '../../components/TextInput';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';
import Button from '../../components/Button';

import { rs, rh } from '../../utils/dimensions';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AppLogo />

        <Typography style={styles.heading}>Sign In</Typography>
        <Typography style={styles.subtitle}>Welcome Back</Typography>

        <View style={styles.form}>
          <TextInput
            label="Email Address"
            placeholder="e.g. noah@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Password"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
            rightIcon={
              <Feather
                name={secureText ? 'eye' : 'eye-off'}
                size={rs(20)}
                color="#9CA3AF"
              />
            }
            onRightIconPress={() => setSecureText(!secureText)}
          />

          <TouchableOpacity
            style={styles.forgotLink}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Typography style={styles.forgotText}>Forget Password?</Typography>
          </TouchableOpacity>
        </View>

        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Main')}
          variant="primary"
        />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Typography style={styles.dividerText}>OR</Typography>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="Sign in with google"
          onPress={() => {}}
          variant="outline"
          iconNode={
            <Image
              source={require('../../assets/Images/googleicon.png')}
              style={styles.googleIcon}
              resizeMode="contain"
            />
          }
        />

        <View style={styles.bottomLink}>
          <Typography style={styles.bottomText}>Not a member? </Typography>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Typography style={styles.bottomLinkText}>Sign up</Typography>
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
  heading: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: rs(4),
  },
  subtitle: {
    fontSize: rs(16),
    color: '#6B7280',
    marginBottom: rs(16),
  },
  form: {
    marginBottom: rs(8),
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginTop: rs(-4),
    marginBottom: rs(8),
  },
  forgotText: {
    fontSize: rs(14),
    color: '#0E9BAF',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rs(16),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D4D4D4',
  },
  dividerText: {
    marginHorizontal: rs(16),
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  googleIcon: {
    width: rs(20),
    height: rs(20),
  },
  bottomLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rs(20),
  },
  bottomText: {
    fontSize: rs(14),
    color: '#6B7280',
  },
  bottomLinkText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#1A1A1A',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
