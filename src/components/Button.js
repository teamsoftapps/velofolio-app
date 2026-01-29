import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import CustomText from './CustomText';
import colors from '../utils/colors'; // ✅ import colors

const ButtonSimple = ({
  title,
  onPress,
  backgroundColor = colors.bluePrimary, // ✅ theme default
  loading = false,
  disabled = false,
  style,
  textStyle,
  leftIcon,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDisabled ? colors.disabled : backgroundColor,
        },
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.85}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} /> // ✅ themed
      ) : (
        <View style={styles.content}>
          {leftIcon && <Image source={leftIcon} style={styles.icon} />}

          <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonSimple;

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(7.8),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginRight: responsiveWidth(2.5),
    resizeMode: 'contain',
  },

  text: {
    fontSize: responsiveFontSize(2.2),
    color: colors.white, // ✅ themed
  },
});
