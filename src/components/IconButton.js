import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import colors from "../utils/colors"
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({ name, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.rightIcon} onPress={onPress}>
        <Ionicons
          name={name}
          size={responsiveWidth(6)}
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
  rightIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
    backgroundColor: '#F3F4F6', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
})