import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const CheckBoxSimple = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      {checked && <View style={styles.tick} />}
    </TouchableOpacity>
  );
};

export default CheckBoxSimple;

const styles = StyleSheet.create({
  box: {
    width: responsiveWidth(5.5),
    height: responsiveWidth(5.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  tick: {
    width: '65%',
    height: '65%',
    backgroundColor: colors.bluePrimary,
    borderRadius: 2,
  },
});
