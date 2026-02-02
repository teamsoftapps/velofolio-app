import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const SearchInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={responsiveWidth(6)}
        style={styles.icon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || 'Search'}
        placeholderTextColor={colors.gray}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: responsiveHeight(6.5),
    borderWidth: 2,
    borderColor: colors.inputBorder,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: colors.white,
  },

  icon: {
    marginRight: responsiveWidth(2),
    color: colors.iconSecondary,
  },

  input: {
    flex: 1,
    fontSize: responsiveWidth(4),
    color: colors.black,
  },
});
