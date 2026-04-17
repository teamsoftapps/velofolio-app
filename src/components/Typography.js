import React from 'react';
import { Text } from 'react-native';

/**
 * Typography - An optimized Text component for the Velofolio design system.
 * Centralizes font scaling and global text properties.
 */
const Typography = ({
  children,
  style,
  allowFontScaling = false,
  ...props
}) => {
  return (
    <Text style={style} allowFontScaling={allowFontScaling} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
