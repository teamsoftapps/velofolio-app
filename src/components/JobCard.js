import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const JobCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.tagsContainer}></View>
      <Text>JobCard</Text>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    backgroundColor: colors.yellowAccent,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
});
