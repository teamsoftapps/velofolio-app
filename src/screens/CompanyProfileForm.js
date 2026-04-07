
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import colors from '../utils/colors';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form'; // ← new import
import Tag from '../components/Tag';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CompanyProfile = () => {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // → API call, navigation, toast, reset form, etc.
  };
  const fields = [
    {
      name: 'CompanyName',
      label: 'Company/Studio Name',
      type: 'text',
      placeholder: 'Velofolio',
    },
      {
      name: 'website',
      label: 'Website',
      type: 'text',
      placeholder: 'e.g. https://velofolio.app',
    },
    {
      name: 'companyEmail',
      label: 'Company Email',
      type: 'text',
      placeholder: 'e.g. info@sarah.org',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      placeholder: 'e.g. +1 234 567 890',
      keyboardType: 'phone-pad',
    },
  {
      name: 'streetAddress',
      label: 'Street Address',
      type: 'text',
      placeholder: 'Enter Company Address...',
    //   multiline: true,
    //   numberOfLines: 4,
    },
        {
      name: 'city',
      label: 'City / Suburb',
      type: 'text',
      placeholder: 'e.g. New York',
    //   keyboardType: 'email-address',
    //   autoCapitalize: 'none',
    },
       {
      name: 'postcode',
      label: 'Postcode / Zip',
      type: 'text',
      placeholder: 'e.g. 10001',
    },
 
      {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'e.g. United States',
    },
 


            {
      name: 'timezone',
      label: 'Time Zone',
      type: 'text',
      placeholder: 'e.g. GMT-5',
    },
  
  ];

  return (
    <ScreenWrapper backgroundColor="transparent">
      <View style={styles.headWrapper}>
        <CustomHeader title="Company Profile" />
        <View style={styles.actionContainer}>
            
        {/* <Ionicons name='user'   size={responsiveFontSize(2.5)} color={colors.blueAccent} style={styles.actionIcon} /> */}

        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm fields={fields} submitText='CompanyProfile' onSubmit={handleSubmit} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CompanyProfile;

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