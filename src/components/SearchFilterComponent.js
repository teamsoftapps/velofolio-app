import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import SearchInput from "./SearchInput";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SearchHeader = ({
  placeholder = "Search...",
  showPlus = false,
  onFilterPress,
  onPlusPress,
  colors,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputWrapper}>
        <SearchInput placeholder={placeholder} />
      </View>

      <TouchableOpacity
        style={[styles.rightIcon, { borderColor: colors.inputBorder }]}
        onPress={onFilterPress}
      >
        <Ionicons
          name="options-outline"
          size={responsiveWidth(9)}
          color={colors.text}
        />
      </TouchableOpacity>

      {showPlus && (
        <TouchableOpacity
          style={[
            styles.rightIcon,
            styles.plusIcon,
            { backgroundColor: colors.blueAccent },
          ]}
          onPress={onPlusPress}
        >
          <Octicons
            name="plus"
            size={responsiveWidth(9)}
            color={colors.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(4),
    gap: responsiveWidth(3),
  },
  inputWrapper: {
    flex: 1,
    marginVertical: responsiveWidth(4),
  },
  rightIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(3),
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(1),
  },
  plusIcon: {
    borderWidth: 0,
  },
});