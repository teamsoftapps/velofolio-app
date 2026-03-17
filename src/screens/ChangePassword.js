import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import colors from '../utils/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // Call API, show toast, navigate back, etc.
    // Example: navigation.goBack();
  };

  const fields = [
    { name: 'currentPassword', label: 'Current Password', type: 'password', placeholder: '* * * * * *' },
    { name: 'newPassword', label: 'New Password', type: 'password', placeholder: '* * * * * *' },
    { name: 'confirmNewPassword', label: 'Confirm New Password', type: 'password', placeholder: '* * * * * *' },
  ];

  return (
    <ScreenWrapper backgroundColor="transparent">
      <View style={styles.headWrapper}>
        <CustomHeader title="Change Password" onPress={() => navigation.goBack()} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm fields={fields} submitText="Save Changes" type="passsave" onSubmit={handleSubmit} />

        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot your current password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SecuritynPassword')}>
            <Text style={styles.resetText}>Reset via Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
  scrollContent: {
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
  actionContainer: {
    flexDirection: 'row',
    width: responsiveWidth(50),
    gap: responsiveWidth(2),
  },
  forgotContainer: {
    marginTop: responsiveHeight(3),
    alignItems: 'center',
  },
  forgotText: {
    fontSize: responsiveFontSize(2),
    color: colors.grayDark,
    marginBottom: responsiveHeight(1),
  },
  resetText: {
    fontSize: responsiveFontSize(2),
    color: colors.blueAccent,
    fontWeight: '400',
  },
});