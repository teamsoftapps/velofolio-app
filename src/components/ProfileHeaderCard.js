import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

const ProfileHeaderCard = ({
  image,
  name,
  role,
  status = "Active",
  statusColor = "#10b981",
  statusBg = "#ecfdf5",
  onMorePress,
  onStatusPress,
}) => {
  return (
    <View style={styles.headerCard}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: image }}
          style={styles.avatar}
        />

        <View style={styles.infoContainer}>
          <View style={styles.headingRow}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
              onPress={onMorePress}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <Feather
                name="more-horizontal"
                size={responsiveFontSize(2.8)}
                color={colors.grayDark || '#6b7280'}
              />
            </TouchableOpacity>
          </View>

        {role&&  <Text style={styles.role}>{role}</Text>}

          <TouchableOpacity
            style={[styles.statusBadge, { backgroundColor: statusBg }]}
            onPress={onStatusPress}
            activeOpacity={0.8}
          >
  { status.includes("Active InActive")  &&       <View
              style={[
                styles.statusDot,
                { backgroundColor: statusColor },
              ]}
            />}
            <Text style={[styles.statusText, { color: statusColor }]}>
              {status}
            </Text>
{   status.includes("Active InActive")  &&    <MaterialIcons
              name="keyboard-arrow-down"
              size={responsiveFontSize(2.3)}
              color={colors.grayDark || '#6b7280'}
            />}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(0.4),
  },
  role: {
    fontSize: responsiveFontSize(2.0),
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
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
  },
});