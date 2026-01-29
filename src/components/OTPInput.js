import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import colors from '../utils/colors';

const OTPInput = ({ value, setValue, length = 4 }) => {
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newValue = value.split('');
    newValue[index] = text;
    const final = newValue.join('');
    setValue(final);

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.row}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <TextInput
            key={i}
            ref={r => (inputs.current[i] = r)}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            value={value[i] || ''}
            onChangeText={t => handleChange(t, i)}
            onKeyPress={e => handleBackspace(e, i)}
          />
        ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
  },

  box: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
});
