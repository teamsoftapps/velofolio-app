import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import colors from "../utils/colors"
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({name}) => {
  return (
    <View>
       <TouchableOpacity style={styles.rightIcon}>
            <Ionicons
              name={name}
              size={responsiveWidth(9)}
              color={colors.text}
            />
          </TouchableOpacity>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
        rightIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(3),
    borderWidth: 2,
    borderColor: colors.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
  },
})