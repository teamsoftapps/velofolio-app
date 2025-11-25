// components/MyText.tsx
import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface MyTextProps extends Omit<TextProps, 'style'> {
  text?: string; // optional if using children
  fontSize?: number;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  style?: TextProps['style']; // full style override (merged with inline props)
}

const CustomText: React.FC<MyTextProps> = ({
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
    // You can add default font family here if you want
    // fontFamily: 'Inter-Regular',
  },
});

export default CustomText;
