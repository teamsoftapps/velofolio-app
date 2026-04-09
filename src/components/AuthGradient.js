import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../utils/colors';

const AuthGradient = ({ children, style }) => {
  return (
    <LinearGradient
      colors={[
        colors.greenSecondary || '#E0F9ED',
        colors.yellowSecondary || '#FFF2C0',
        colors.blueSecondary || '#E2F5FF',
      ]}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default AuthGradient;
