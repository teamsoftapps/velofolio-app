import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../utils/colors"
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const Tag = ({ color, bgColor, text, borderWidth = 0, icon }) => {
  return (
    <View style={[styles.tagContainer, { backgroundColor: bgColor, borderWidth: borderWidth }]}>
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
    paddingVertical: responsiveWidth(1.2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(5),
    borderColor: colors.gray,
  },
  icon: {
    marginRight: responsiveWidth(1.5),
  },
  tagText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
  },
});
