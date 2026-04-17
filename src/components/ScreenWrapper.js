import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const ScreenWrapper = ({
  children,
  style,
  backgroundColor = '#FFFFFF',
  gradientColors,
  barStyle = 'dark-content',
  disablePaddingTop = false,
}) => {
  const insets = useSafeAreaInsets();

  const contentStyle = [
    styles.container,
    {
      paddingTop: disablePaddingTop ? 0 : insets.top,
      paddingBottom: Math.max(insets.bottom, 16),
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    style,
  ];

  if (gradientColors) {
    return (
      <LinearGradient colors={gradientColors} style={styles.wrapper}>
        <StatusBar barStyle={barStyle} translucent backgroundColor="transparent" />
        <View style={contentStyle}>
          {children}
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.wrapper, { backgroundColor }]}>
      <StatusBar 
        barStyle={barStyle} 
        backgroundColor={Platform.OS === 'android' ? '#FFFFFF' : backgroundColor} 
      />
      <View style={contentStyle}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
