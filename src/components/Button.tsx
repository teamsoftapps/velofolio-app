// components/ButtonSimple.tsx
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomText from './CustomText';

// Define the props with proper types
interface ButtonSimpleProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonSimple: React.FC<ButtonSimpleProps> = ({
  title,
  onPress,
  backgroundColor = '#00A3FF', // your original blue
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isDisabled ? '#aaaaaa' : backgroundColor },
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" size="small" />
      ) : (
        <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(7),
    paddingHorizontal: 32,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 8,
    shadowColor: '#000',
  },
  disabled: {
    backgroundColor: '#aaaaaa', // gray when disabled
  },
  text: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2.1),
  },
});

export default ButtonSimple;
