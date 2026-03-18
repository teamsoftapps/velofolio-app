import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const AddPhoneNumber = ({ 
  defaultCountry = { code: '+1', flag: '🇺🇸', name: 'US' }
}) => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(defaultCountry);
  const navigation=useNavigation()
  return (
    <View >
      {/* Title */}
           <View style={styles.headWrapper}>
        <CustomHeader title="Add Phone Number" />

      </View>
          <View style={styles.container}>

      {/* Phone Input Container */}
      <Text style={styles.title}>Add a Phone Number</Text>
      <View style={styles.inputContainer}>
        {/* Country Selector */}
        <TouchableOpacity style={styles.countrySelector}>
          <Text style={styles.flag}>{country.flag}</Text>
          <Text style={styles.countryCode}>{country.code}</Text>
          <Feather 
            name="chevron-down" 
            size={responsiveFontSize(2)} 
            color={colors.grayDark || '#6b7280'} 
          />
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Phone Input */}
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          placeholderTextColor={colors.grayDark || '#9ca3af'}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          selectionColor={colors.primary || '#0ea5e9'}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity 
        style={[styles.continueButton, !phone && styles.disabledButton]}
        onPress={() =>
  navigation.navigate("otpTFA", {
    phone: phone,
  })
}
        disabled={!phone}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default AddPhoneNumber;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.white || '#ffffff',
    paddingHorizontal: responsiveWidth(6),
    // paddingTop: responsiveHeight(4),
  },
       headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    marginBottom:responsiveHeight(1)
  },
  title: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: colors.black || '#1f2937',
    marginVertical: responsiveHeight(1.7),
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grayMedium || '#d1d5db',
    borderRadius: responsiveWidth(2.5),
    height: responsiveHeight(7),
    backgroundColor: colors.white || '#ffffff',
    marginBottom: responsiveHeight(3),
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    gap: responsiveWidth(1.5),
  },
  flag: {
    fontSize: responsiveFontSize(2.5),
  },
  countryCode: {
    fontSize: responsiveFontSize(2),
    color: colors.black || '#1f2937',
    fontWeight: '500',
  },
  divider: {
    width: 1,
    height: responsiveHeight(4),
    backgroundColor: colors.grayMedium || '#d1d5db',
  },
  phoneInput: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: colors.black || '#1f2937',
    paddingHorizontal: responsiveWidth(3),
    height: '100%',
  },
  continueButton: {
    width: '100%',
    height: responsiveHeight(6.5),
    backgroundColor: colors.primary || '#0ea5e9',
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary || '#0ea5e9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
  continueText: {
    fontSize: responsiveFontSize(2.1),
    color: colors.white || '#ffffff',
    fontWeight: '600',
  },
});