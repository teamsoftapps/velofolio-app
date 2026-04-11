import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../utils/colors"
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const Tag = ({ color, bgColor, text, borderWidth, borderColor, icon }) => {
  return (
    <View 
      style={[
        styles.tagContainer, 
        { 
          backgroundColor: bgColor || 'transparent', 
          borderWidth: borderColor ? (borderWidth || 1) : 0,
          borderColor: borderColor || 'transparent'
        }
      ]}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.tagText, { color: color || colors.white }]}>{text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  icon: {
    marginRight: 6,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
