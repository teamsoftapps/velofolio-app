import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import CustomText from './CustomText';
import colors from '../utils/colors';

const InputField = ({
  label,
  containerStyle,
  isPassword = false,
  style,
  ...props
}) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}

      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={colors.textPlaceholder}
          secureTextEntry={secure}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={responsiveFontSize(2.3)}
              color={colors.iconSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: responsiveHeight(2.5),
  },

  label: {
    marginBottom: responsiveHeight(0.8),
    fontSize: responsiveFontSize(1.9),
    color: colors.textPrimary, // ✅ themed
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.inputBorder, // ✅ themed
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(7.5),
    backgroundColor: colors.whiteSoft, // ✅ themed
  },

  input: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: colors.black, // ✅ themed
  },
});
