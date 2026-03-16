import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
const DetailItem = ({label,text}) => {
  return (
        <View style={styles.detailConatiner}>
        <View style={styles.metaDetail}>
          <Text style={styles.metaLabel}>{label}</Text>
          <Text style={styles.metaText}>{text}</Text>
        </View>

      </View>
  )
}

export default DetailItem

const styles = StyleSheet.create({
  metaLabel:{
    color:colors.textDiscription
  },
  metaText:{
    fontWeight:"600",
    fontSize:responsiveFontSize(2)

  },
  
detailConatiner:{
flexDirection:'row',
gap:responsiveWidth(3)
},


})