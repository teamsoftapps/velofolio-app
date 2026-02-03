import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../utils/colors"
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const Tag = ({ color, bgColor, text }) => {
  return (
    <View style={[styles.tagContainer, { backgroundColor: bgColor }]}>
      <Text style={[styles.tagText, { color: color }]}>{text}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  tagContainer: {
    paddingVertical: responsiveWidth(2.3),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(10),
  },
  tagText: {
    fontSize: responsiveFontSize(2),
  },
})
