// // WorkloadOverview.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import colors from '../../utils/colors';

const ActivityItem = ({ name, action, time, avatar }) => {
  return (
    <View style={styles.activityItem}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.activityContent}>
        <Text style={styles.activityName}>{name}</Text>
        <Text style={styles.activityAction}>{action}</Text>
      </View>

      <Text style={styles.activityTime}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
  },

  avatar: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    marginRight: responsiveWidth(3),
  },

  activityContent: {
    flex: 1,
  },

  activityName: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(0.3),
  },

  activityAction: {
    fontSize: responsiveFontSize(1.6),
    color: colors.textSecondary,
  },

  activityTime: {
    fontSize: responsiveFontSize(1.5),
    color: colors.textMuted,
  },
});

export default ActivityItem;