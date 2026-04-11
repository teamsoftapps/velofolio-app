import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const ProgressWithBackground = ({ progress = 0.7 }) => {
  const percent = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <Progress.Bar
          progress={progress}
          width={null} // allows bar to fill its container
          height={10}
          color="#000000"
          unfilledColor="#F3F4F6"
          borderWidth={0}
          borderRadius={10}
        />
      </View>
      <Text style={styles.percentText}>{percent}%</Text>
    </View>
  );
};

export default ProgressWithBackground;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 12,
  },
  barWrapper: {
    flex: 1, // takes remaining space
  },
  percentText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '700',
    minWidth: 40,
    textAlign: 'right',
  },
});