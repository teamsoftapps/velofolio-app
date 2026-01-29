// components/CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
  text,
  style,
  fontSize,
  color,
  fontWeight,
  onPress,
  children,
  ...restProps
}) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles.default,
        fontSize && { fontSize },
        color && { color },
        fontWeight && { fontWeight },
        style, // last one wins
      ]}
      allowFontScaling={false}
      {...restProps}
    >
      {text}
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    // fontFamily: 'Inter-Regular',
  },
});

export default CustomText;
