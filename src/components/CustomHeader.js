import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomText from './CustomText';
import ButtonSimple from './Button';
import Fontisto from 'react-native-vector-icons/Fontisto';


const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        <TouchableOpacity style={styles.leftIcon}>
          <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.sideContainer}>
        <ButtonSimple title={`Add ${title==="Calendar"?"New":title.slice(0,-1)}`} leftIcon={
          <Fontisto name="plus-a" size={20} color={colors.white}/>
        }   style={styles.rightButton}  textStyle={styles.addButtonText}    />
       
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(4),
    // paddingHorizontal: responsiveWidth(3),
  },
  headerTitle: {
    fontSize: responsiveWidth(6),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  leftSide: {
    width: responsiveWidth(28),
    alignItems: 'center',
    flexDirection: 'row',
    gap: responsiveWidth(4),
  },
  leftIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderColor: colors.inputBorder,
    borderWidth: 2,
    borderRadius: responsiveWidth(3),

    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: responsiveWidth(7),
    textAlign: 'center',
    tintColor: colors.white,
    color: colors.white,
  },
  rightButton: {
    width: responsiveWidth(36),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    // backgroundColor: colors.blueAccent,
    flexDirection: 'row',
    gap: responsiveWidth(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveWidth(4),
    fontWeight: '600',
    marginLeft:responsiveWidth(2)
  },
});
