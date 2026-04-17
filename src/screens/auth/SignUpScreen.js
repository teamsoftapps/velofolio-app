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
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';

import { rs, rh } from '../../utils/dimensions';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [agreed, setAgreed] = useState(false);

  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AppLogo />

        <Typography style={styles.heading}>Sign Up</Typography>
        <Typography style={styles.subtitle}>
          Your Studio. Your Workflow.
        </Typography>

        <View style={styles.form}>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={setFirstName}
          />

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
        </View>

        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAgreed(!agreed)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
            {agreed && <Feather name="check" size={rs(14)} color="#FFF" />}
          </View>
          <Typography style={styles.checkboxText}>
            I agree to the{' '}
            <Typography style={styles.linkText}>terms of use</Typography> and{' '}
            <Typography style={styles.linkText}>privacy policy</Typography>
          </Typography>
        </TouchableOpacity>

        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Main')}
          variant="primary"
          disabled={!agreed}
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
          <Typography style={styles.bottomText}>Already a member? </Typography>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Typography style={styles.bottomLinkText}>Sign in</Typography>
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
    marginBottom: rs(8),
  },
  form: {
    marginBottom: rs(4),
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  checkbox: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(4),
    borderWidth: 1.5,
    borderColor: '#D4D4D4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(10),
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  checkboxText: {
    fontSize: rs(13),
    color: '#6B7280',
    flex: 1,
  },
  linkText: {
    color: '#0E9BAF',
    textDecorationLine: 'underline',
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

export default SignUpScreen;
