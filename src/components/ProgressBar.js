import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const ProgressWithBackground = ({ progress = 0.7 }) => {
  const percent = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress}
        width={responsiveWidth(70)}           // ← most of the width
        height={responsiveHeight(1.3)}
        color={colors.yellowAccent}
        unfilledColor="white"              // ← usually better than transparent
        borderWidth={3}
        borderColor='white'
        borderRadius={responsiveWidth(2)}
      />

      <Text style={styles.percentText}>{percent}%</Text>
    </View>
  );
};

export default ProgressWithBackground;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',      // ← this is the key!
    width: responsiveWidth(83),     
    height:responsiveHeight(4),      // or '100%' if you want full width
  },

  percentText: {
    fontSize: responsiveFontSize(2),
    color: colors.black,
    fontWeight: '600',
    minWidth: responsiveWidth(12),        // prevents jumping when 9% → 10% → 100%
    textAlign: 'right',
  },
});