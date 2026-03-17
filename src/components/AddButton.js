import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

/**
 * Reusable AddButton Component
 * 
 * @param {string} label - Text to display (default: "Add Job")
 * @param {function} onPress - Callback when button is pressed
 * @param {object} colors - Theme colors object
 * @param {string} colors.primary - Background color of the button
 * @param {string} colors.textLight - Color of the text and icon
 * @param {boolean} showIcon - Whether to show the plus icon (default: true)
 * @param {object} style - Additional container styles
 * @param {object} textStyle - Additional text styles
 * @param {boolean} disabled - Whether the button is disabled
 */
const AddButton = ({
  label = "Add Job",
  onPress,
  colors,
  showIcon = true,
  style,
  textStyle,
  disabled = false,
  iconSize,
}) => {
  // Default colors fallback
  const buttonColor = colors?.primary || "#000000";
  const contentColor = colors?.textLight || "#FFFFFF";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: buttonColor },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={styles.content}>
        {showIcon && (
          <Octicons
            name="plus"
            size={iconSize || responsiveWidth(4.5)}
            color={contentColor}
            style={styles.icon}
          />
        )}
        <Text style={[
          styles.label,
          { color: contentColor },
          textStyle
        ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(2),
    // Shadow for iOS
    shadowColor: "#000",

  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: responsiveWidth(2),
  },
  label: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
});