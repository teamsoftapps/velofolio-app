
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form'; // ← new import
import Tag from '../components/Tag';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddClients = () => {
  const navigation = useNavigation();
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // → API call, navigation, toast, reset form, etc.
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
      name: 'leadSource',
      label: 'Lead Source',
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
      name: 'assignedTeam',
      label: 'Assigned Team',
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
      name: 'eventDate',
      label: 'Wedding / Event Date',
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
      name: 'streetAddress',
      label: 'Street Address',
      type: 'textarea',
      placeholder: 'Enter Client Address...',
      multiline: true,
      numberOfLines: 4,
    },
      {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'Enter Client Country',
    },
         {
      name: 'city',
      label: 'City',
      type: 'text',
      placeholder: 'Enter Client City',
    },
            {
      name: 'timezone',
      label: 'Time Zone',
      type: 'text',
      placeholder: 'Enter Client Timezone',
    },
    {
      name: 'notes',
      label: 'Notes',
      type: 'textarea',
      placeholder: 'Write Note for Client...',
      multiline: true,
      numberOfLines: 4,
    },

  
  ];

  return (
    <ScreenWrapper backgroundColor="transparent" edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Add Clients" />
        <View style={styles.actionContainer}>
            
        <Tag text={"Client"} bgColor={colors.blueAccent} color={colors.white}  icon={<Ionicons name='people' size={18} color={colors.white}/>} />
        <Tag text={"Company"} borderWidth={2} color={colors.black}  icon={<Ionicons name='briefcase                ' size={18} color={colors.black}/>} />

        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm
          fields={fields}
          submitText="Save Client"
          onSubmit={handleSubmit}
          onCancel={() => navigation.goBack()}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AddClients;

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