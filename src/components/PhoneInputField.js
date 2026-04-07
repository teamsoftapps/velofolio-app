import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const PhoneInputField = ({
  value,
  onChangeText,
  country,
  onPressCountry,
  placeholder = 'Phone Number',
}) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.countrySelector} onPress={onPressCountry}>
        <Text style={styles.flag}>{country?.flag}</Text>
        <Text style={styles.countryCode}>{country?.code}</Text>
        <Feather
          name="chevron-down"
          size={responsiveFontSize(2)}
          color={colors.grayDark || '#6b7280'}
        />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TextInput
        style={styles.phoneInput}
        placeholder={placeholder}
        placeholderTextColor={colors.grayDark || '#9ca3af'}
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        selectionColor={colors.primary || '#0ea5e9'}
      />
    </View>
  );
};

export default PhoneInputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grayMedium || '#d1d5db',
    borderRadius: responsiveWidth(2.5),
    height: responsiveHeight(7),
    backgroundColor: colors.white || '#ffffff',
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
});