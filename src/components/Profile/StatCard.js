// WorkloadOverview.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';

const StatCard = ({ title, value, percentage, color, iconName }) => {
    const isOngoing = title === "Ongoing Jobs" || title==="Pending Paymnets";

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={[styles.cardTitle,  { color: isOngoing ? colors.black : colors.white }]}>{title}</Text>

      <Text style={[styles.cardValue,  { color: isOngoing ? colors.black : colors.white }]}>{value}</Text>

      <View style={[styles.percentageContainer,,  { backgroundColor: isOngoing ? colors.goldPrimary : colors.whiteTransparent1 }]}>
        <Text style={styles.percentageText}>{percentage}</Text>
        <Icon
          name="trending-up"
          size={responsiveFontSize(1.8)}
          color={colors.white}
        />
      </View>
    </View>
  );
};

export default StatCard;

const styles = StyleSheet.create({
  card: {
    width: '49%',
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(1.5),
    minHeight: responsiveHeight(15),
    justifyContent: 'space-between',
  },

  cardTitle: {
    fontSize: responsiveFontSize(1.9),
    color: colors.white,
    opacity: 0.9,
    fontWeight: '500',
  },

  cardValue: {
    fontSize: responsiveFontSize(4.3),
    fontWeight: '500',
    color: colors.white,
    marginVertical: responsiveHeight(0.5),
  },

  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteTransparent1,
    alignSelf: 'flex-start',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: responsiveWidth(1),
  },

  percentageText: {
    fontSize: responsiveFontSize(1.6),
    color: colors.white,
    fontWeight: '600',
    marginRight: responsiveWidth(1),
  },
});