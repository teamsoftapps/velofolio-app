import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({ 
  placeholder = "Search", 
  value, 
  onChangeText, 
  onFilterPress,
  showFilter = true,
  containerStyle,
  inputStyle 
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Search Input Container */}
      <View style={styles.inputContainer}>
        <Feather 
          name="search" 
          size={responsiveFontSize(2.5)} 
          color={colors.black } 
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.black || '#9ca3af'}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      {/* Filter Button */}
      {showFilter && (
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={onFilterPress}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Feather 
            name="sliders" 
            size={responsiveFontSize(2.5)} 
            color={colors.black || '#6b7280'} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    width: responsiveWidth(90),
    marginVertical:responsiveHeight(2)
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.veryLightGray || '#f3f4f6',
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    height: responsiveHeight(6),
    borderWidth: 2.5,
    borderColor: colors.inputBorder ,
    paddingVertical:responsiveHeight(1)
  },
  searchIcon: {
    marginRight: responsiveWidth(2.5),

  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: colors.black || '#1f2937',
    paddingVertical: 0,
  },
  filterButton: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    backgroundColor: colors.veryLightGray || '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: colors.inputBorder ,
  },
});