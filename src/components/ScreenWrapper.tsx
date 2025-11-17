// src/components/ScreenWrapper.tsx  (or .js)
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  backgroundColor = '#fff',
  style,
}) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }]}
    >
      <View style={[styles.innerContainer, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: { flex: 1 },
});

export default ScreenWrapper;