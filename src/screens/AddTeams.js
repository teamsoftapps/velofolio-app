
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
import SuccessModal from "../components/Success"
const AddTeams = () => {
    const [showSuccess, setShowSuccess] = useState(false);


  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // → API call, navigation, toast, reset form, etc.
      setShowSuccess(true);
  };
  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter First Name',
    },
      {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter Last Name',
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
      label: 'Phone',
      type: 'text',
      placeholder: 'e.g. +1 234 567 890',
      keyboardType: 'phone-pad',
    },
    
      {
      name: 'Role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Facebook', value: 'Facebook' },
        { label: 'Google', value: 'Google' },
        { label: 'Referral', value: 'Referral' },
        { label: 'Other', value: 'Other' },
      ],
    },
  
      {
      name: 'joinedDate',
      label: 'Joined Date',
      type: 'date',
      placeholder: 'Select date',
    },
          {
      name: 'Availibility',
      label: 'Availibility',
      type: 'select',
      options: [
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Facebook', value: 'Facebook' },
        { label: 'Google', value: 'Google' },
        { label: 'Referral', value: 'Referral' },
        { label: 'Other', value: 'Other' },
      ],
    },
      {
      name: 'joinedDate',
      label: 'Joined Date',
      type: 'date',
      placeholder: 'Select date',
    },
      {
    name: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Low', value: 'Low' },
      { label: 'Medium', value: 'Medium' },
      { label: 'High', value: 'High' },
    ],
  },
  
    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      placeholder: 'Enter Member Address...',
      multiline: true,
      numberOfLines: 4,
    },

  
  ];

  return (
    <ScreenWrapper backgroundColor="transparent">
      <View style={styles.headWrapper}>
        <CustomHeader title="Add New Memebers" />
    
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm fields={fields} submitText='Save Member' onSubmit={handleSubmit} />
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