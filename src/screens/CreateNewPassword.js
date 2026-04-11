import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
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
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const CreateNewPassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const isValid =
    password.length >= 6 && confirm.length >= 6 && password === confirm;

  return (
    <ScreenWrapper backgroundColor="transparent" edges={[]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/authbg.png')}
          resizeMode="cover"
          style={styles.bg}
        >
          <View style={styles.container}>
            <CustomHeader title=" " transparent={true} />
            
            <View style={styles.content}>
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
  },
  content: {
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(2),
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
