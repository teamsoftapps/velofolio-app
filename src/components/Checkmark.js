import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const AnimatedCheck = ({
  size = 80,
  color = '#f59e0b',
  checkColor = '#ffffff',
  strokeWidth = 6,
  duration = 800,
  delay = 200,
  onComplete,
}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0);

    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(progress, {
        toValue: 1,
        duration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      onComplete && onComplete();
    });
  }, []);

  const circleScale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const line1Scale = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 1],
  });

  const line2Scale = progress.interpolate({
    inputRange: [0.5, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            // backgroundColor: color,
            transform: [{ scale: circleScale }],
          },
        ]}
      />

      {/* Check */}
      <View style={styles.checkContainer}>
        {/* Short arm */}
        <Animated.View
          style={[
            styles.line,
            {
              width: size * 0.25,
              height: strokeWidth,
              backgroundColor: color,
              borderRadius: strokeWidth,
              transform: [
                { translateX: -size * 0.1 },
                { translateY: size * 0.08 },
                { rotate: '35deg' },
                { scaleX: line1Scale },
              ],
            },
          ]}
        />

        {/* Long arm */}
        <Animated.View
          style={[
            styles.line,
            {
              width: size * 0.5,
              height: strokeWidth,
              backgroundColor: color,
              borderRadius: strokeWidth,
              transform: [
                { translateX: size * 0.12 },
                { translateY: -size * 0.03 },
                { rotate: '-45deg' },
                { scaleX: line2Scale },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 9999,
    position: 'absolute',
    borderColor:colors.yellowAccent,
    borderWidth:5
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    top:2

  },
});

export default AnimatedCheck;