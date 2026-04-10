
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form'; // ← new import
import Tag from '../components/Tag';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SuccessModal from '../components/Success';
import { useNavigation } from '@react-navigation/native';
const AddTeams = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = data => {
    console.log('Form submitted:', data);
    // → API call, navigation, toast, reset form, etc.
      setShowSuccess(true);
  };
  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter first name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter last name',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'e.g. info@sarah.org',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      placeholder: 'Phone Number',
      keyboardType: 'phone-pad',
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      placeholder: 'Select member role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
        { label: 'Photographer', value: 'photographer' },
        { label: 'Editor', value: 'editor' },
        { label: 'Assistant', value: 'assistant' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'Select member status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Invited', value: 'invited' },
      ],
    },
    {
      name: 'joinedDate',
      label: 'Joined Date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      name: 'availability',
      label: 'Availability',
      type: 'select',
      placeholder: 'Select availability e.g. Free, Busy',
      options: [
        { label: 'Free', value: 'free' },
        { label: 'Busy', value: 'busy' },
        { label: 'Partial', value: 'partial' },
      ],
    },
    {
      name: 'dob',
      label: 'Date of Birth',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      placeholder: 'Select Gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      placeholder: 'Enter member address',
      multiline: true,
      numberOfLines: 4,
    },
  ];

  return (
    <ScreenWrapper backgroundColor="transparent" edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Add New Member" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm
          fields={fields}
          submitText="Send Invitation"
          onSubmit={handleSubmit}
          onCancel={() => navigation.goBack()}
        />
      </ScrollView>
      <SuccessModal
  visible={showSuccess}
  onClose={() => setShowSuccess(false)}
  onInviteAnother={() => {
    // Reset form or navigate to invite again
    console.log('Invite another clicked');
  }}
/>
    </ScreenWrapper>
  );
};

export default AddTeams;

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
    paddingBottom: responsiveHeight(2),
  },
  actionContainer:{
    flexDirection:"row",
    width:responsiveWidth(50),
    gap:responsiveWidth(2)

  }
});