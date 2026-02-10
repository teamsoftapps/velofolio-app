import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../utils/colors"
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const Tag = ({ color, bgColor, text ,borderWidth=0,icon}) => {
  return (
    <View style={[styles.tagContainer, { backgroundColor: bgColor,borderWidth:borderWidth }]}>
      {icon && <>{icon}</>}
      <Text style={[styles.tagText, { color: color }]}>{text}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection:"row",
    alignItems:"center",
    gap:responsiveWidth(2),
    paddingVertical: responsiveWidth(2.3),
    paddingHorizontal: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
    borderColor:colors.gray
  },
  tagText: {
    fontSize: responsiveFontSize(2),
  },
})
