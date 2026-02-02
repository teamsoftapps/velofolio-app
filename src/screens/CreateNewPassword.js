import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
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

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const CreateNewPassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const isValid =
    password.length >= 6 && confirm.length >= 6 && password === confirm;

  return (
    <ScreenWrapper backgroundColor="transparent">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/authbg.png')}
          resizeMode="cover"
          style={styles.bg}
        >
          <View style={styles.container}>
            {/* Back */}
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >
              <Ionicons
                name="arrow-back-outline"
                size={responsiveFontSize(2.8)}
                color={colors.black}
              />
            </TouchableOpacity>

            {/* Title */}
            <CustomText style={styles.title} fontWeight="700">
              Create New Password
            </CustomText>

            {/* Subtitle */}
            <CustomText style={styles.subtitle}>
              Your new password must be different
              {'\n'}
              from previously used password
            </CustomText>

            {/* Inputs */}
            <View style={styles.form}>
              <InputField
                label="New Password"
                placeholder="********"
                isPassword
                value={password}
                onChangeText={setPassword}
              />

              <InputField
                label="Confirm Password"
                placeholder="********"
                isPassword
                value={confirm}
                onChangeText={setConfirm}
              />

              {/* Button */}
              <ButtonSimple
                textStyle={{ color: colors.white }}
                onPress={() => {
                  navigation.replace('SignIn');
                }}
                title="Update Password"
                backgroundColor={colors.black}
                disabled={!isValid}
                style={styles.button}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateNewPassword;
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(8),
  },
  backBtn: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderColor: colors.black,
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },

  backIcon: {
    fontSize: responsiveFontSize(5),
  },

  title: {
    fontSize: responsiveFontSize(3.5),
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
    marginTop: responsiveHeight(2.5),
  },
});
