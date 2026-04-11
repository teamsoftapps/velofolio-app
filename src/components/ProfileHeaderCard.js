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
  dateAdded,
  status = 'Active',
  statusColor = '#10b981',
  statusBg = '#ecfdf5',
  onMorePress,
  onStatusPress,
  variant = 'default',
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

  if (variant === 'client') {
    return (
      <View style={styles.headerCardClient}>
        <View style={styles.profileRow}>
          <Image source={{ uri: image }} style={styles.avatarClient} />

          <View style={styles.infoContainer}>
            <View style={styles.headingRowClient}>
              <View>
                <Text style={styles.nameClient}>{name}</Text>
                {dateAdded && <Text style={styles.dateAdded}>Date Added: {dateAdded}</Text>}
              </View>

              <TouchableOpacity
                onPress={onMorePress}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                style={styles.moreIcon}
              >
                <Feather
                  name="more-horizontal"
                  size={24}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.statusBadgeClient}
              onPress={onStatusPress}
              activeOpacity={0.8}
            >
              <View style={[styles.statusDot, { backgroundColor: '#FFBE2B' }]} />
              <Text style={styles.statusTextClient}>{status}</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // DEFAULT VIEW (Used for Team Profile)
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
            {[
              'Active',
              'InActive',
              'Completed',
              'Overdue',
              'In Progress',
            ].includes(status) && (
              <View
                style={[styles.statusDot, { backgroundColor: statusColor }]}
              />
            )}
            <Text style={[styles.statusText, { color: statusColor }]}>
              {status}
            </Text>
            {[
              'Active',
              'InActive',
              'Completed',
              'Overdue',
              'In Progress',
            ].includes(status) && (
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
  headerCardClient: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: 10,
    paddingBottom: 20,
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
  avatarClient: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  headingRowClient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  name: {
    fontSize: responsiveWidth(5.5),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(0.4),
  },
  nameClient: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  dateAdded: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
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
  statusBadgeClient: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
  },
  statusTextClient: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginRight: 4,
  },
  jobHeaderCard: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(3),
  },
  jobPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF',
    borderRadius: 20,
    padding: responsiveWidth(5),
    borderWidth: 1,
    borderColor: '#E0F2FE',
  },
  jobAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: responsiveWidth(4),
  },
  jobInfo: {
    flex: 1,
  },
  jobName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  jobEmail: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 2,
  },
});
