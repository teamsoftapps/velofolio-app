import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

const ProfileHeaderCard = ({
  image,
  name,
  role,
  status = 'Active',
  statusColor = '#10b981',
  statusBg = '#ecfdf5',
  onMorePress,
  onStatusPress,
  variant = 'default', // new prop
}) => {
  if (variant === 'job') {
    return (
      <View style={styles.jobHeaderCard}>
        <View style={styles.jobPill}>
          <Image source={{ uri: image }} style={styles.jobAvatar} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobName}>{role}</Text>
            <Text style={styles.jobEmail}>sarahjohnson@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.headerCard}>
      <View style={styles.profileRow}>
        <Image source={{ uri: image }} style={styles.avatar} />

        <View style={styles.infoContainer}>
          <View style={styles.headingRow}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
              onPress={onMorePress}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <Feather
                name="more-horizontal"
                size={responsiveWidth(6.5)}
                color={colors.grayDark || '#6b7280'}
              />
            </TouchableOpacity>
          </View>

          {role && <Text style={styles.role}>{role}</Text>}

          <TouchableOpacity
            style={[styles.statusBadge, { backgroundColor: statusBg }]}
            onPress={onStatusPress}
            activeOpacity={0.8}
          >
            {['Active', 'InActive', 'Completed', 'Overdue', 'In Progress'].includes(
              status
            ) && (
              <View
                style={[styles.statusDot, { backgroundColor: statusColor }]}
              />
            )}
            <Text style={[styles.statusText, { color: statusColor }]}>
              {status}
            </Text>
            {['Active', 'InActive', 'Completed', 'Overdue', 'In Progress'].includes(
              status
            ) && (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={responsiveWidth(5)}
                color={colors.grayDark || '#6b7280'}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeaderCard;

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(2.5),
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    borderRadius: responsiveWidth(9),
    marginRight: responsiveWidth(4),
  },
  infoContainer: {
    flex: 1,
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: responsiveWidth(5.5),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(0.4),
  },
  role: {
    fontSize: responsiveWidth(3.8),
    color: colors.textSecondary || '#6b7280',
    marginBottom: responsiveHeight(0.8),
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.6),
    borderRadius: responsiveWidth(10),
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: responsiveWidth(2.4),
    height: responsiveWidth(2.4),
    borderRadius: responsiveWidth(1.2),
    marginRight: responsiveWidth(2),
  },
  statusText: {
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
  },
  jobHeaderCard: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  jobPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF', // Light cyan from screenshot
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
  },
  jobAvatar: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
    marginRight: responsiveWidth(4),
  },
  jobInfo: {
    flex: 1,
  },
  jobName: {
    fontSize: responsiveWidth(4.5),
    fontWeight: '600',
    color: colors.textPrimary || '#111827',
  },
  jobEmail: {
    fontSize: responsiveWidth(3.8),
    color: colors.textSecondary || '#6b7280',
    marginTop: 2,
  },
});
