import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Notes = ({
  content = 'During our initial consultation, Sarah mentioned that she prefers a pastel color theme for the wedding and wants extra focus on candid shots. She also requested a highlight reel for social media, in addition to the full video package. Need to confirm the exact start time for the reception.',
  maxLines,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Notes</Text>
      <View style={styles.contentBox}>
        <Text 
          style={styles.content}
          numberOfLines={maxLines}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(1),
  },
  contentBox: {
    backgroundColor: colors.gray3,
    padding: responsiveWidth(3.5),
    borderRadius: 12,
  },
  content: {
    fontSize: responsiveFontSize(1.6),
    color: colors.textSecondary,
    lineHeight: responsiveHeight(2.2),
  },
});