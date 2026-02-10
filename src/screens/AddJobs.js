// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ScreenWrapper from '../components/ScreenWrapper'
// import colors from '../utils/colors'
// import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import CustomHeader from '../components/CustomHeader'
// import InputField from '../components/InputField'

// const AddJobs = () => {
//   return (
//     <ScreenWrapper backgroundColor='transparent'>
//                 <View style={styles.headWrapper}>
//         <CustomHeader title="Add Jobs"  />

//       </View>
//       <ScrollView contentContainerStyle={styles.inputContainer}>
//         <InputField
//         labelStyle={styles.label}
//          containerStyle={styles.inputConatiner} 
//         placeholder={"Enter Job Name"}
//         label={"Job Name"}/>
//       </ScrollView>
//     </ScreenWrapper>
//   )
// }

// export default AddJobs

// const styles = StyleSheet.create({
//   headWrapper: {
//     backgroundColor: colors.white,
//     borderBottomLeftRadius: responsiveWidth(6),
//     borderBottomRightRadius: responsiveWidth(6),
//     paddingVertical: responsiveWidth(3),
//     paddingHorizontal:responsiveWidth(3)
//   },
//   inputContainer:{
// flex:1, 
// paddingHorizontal:responsiveWidth(4),
// paddingVertical:responsiveHeight(2),
// // alignItems:"center",
//   },
//   inputConatiner:{
//     backgroundColor:'transparent',
    
  
//   },
 
//   label:{
//     fontSize:responsiveWidth(4.4),
//     fontWeight:'400'
//   }


// })
// screens/AddJobs.jsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form'; // ← new import


  const fields = [
    {
      name: 'jobName',
      label: 'Job Name',
      type: 'text',
      placeholder: 'Enter Job Name',
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
    name: 'priority',
    label: 'Priority',
    type: 'select',
    options: [
      { label: 'Low', value: 'Low' },
      { label: 'Medium', value: 'Medium' },
      { label: 'High', value: 'High' },
    ],
  },
      {
      name: 'eventDate',
      label: 'Wedding / Event Date',
      type: 'date',
      placeholder: 'Select date',
    },
    
    {
      name: 'notes',
      label: 'Notes',
      type: 'textarea',
      placeholder: 'Additional notes...',
      multiline: true,
      numberOfLines: 4,
    },

  
  ];

const AddJobs = () => {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // → API call, navigation, toast, reset form, etc.
  };

  return (
    <ScreenWrapper backgroundColor="transparent">
      <View style={styles.headWrapper}>
        <CustomHeader title="Add Jobs" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <JobForm fields={fields} onSubmit={handleSubmit} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AddJobs;

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
  
});