import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import TeamAvatars from '../TeamComponent';

const ProfileDetails = ({ type = 'Team' }) => {
  if (type === 'Job') {
    return (
      <View style={styles.container}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Job Details</Text>
          <DetailRow
            icon={<Feather name="briefcase" size={20} color="#6B7280" />}
            label="Job Type"
            value="Wedding"
          />
          <DetailRow
            icon={<Feather name="refresh-cw" size={20} color="#6B7280" />}
            label="Status"
            value="IN PROGRESS"
            isStatus
          />
          <DetailRow
            icon={<Feather name="calendar" size={20} color="#6B7280" />}
            label="Shoot Date & Hours"
            value={`Dec 1, 2025\n(2:20 PM to 4:00 PM)`}
            multiline
          />
          <DetailRow
            icon={<Feather name="map-pin" size={20} color="#6B7280" />}
            label="Location"
            value="225 Cherry Street #24, New York, NY"
            multiline
          />
          <DetailRow
            icon={<Ionicons name="link-outline" size={20} color="#6B7280" />}
            label="Lead Source"
            value="Instagram"
          />
          <DetailRow
            icon={<Feather name="users" size={20} color="#6B7280" />}
            label="Assigned Team"
            value={<TeamAvatars />}
            isComponent
          />
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Client</Text>
          <DetailRow
            icon={<Feather name="mail" size={20} color="#6B7280" />}
            label="Email"
            value="sarah@studio.com"
          />
          <DetailRow
            icon={<Feather name="map-pin" size={20} color="#6B7280" />}
            label="Address"
            value="New York, USA"
          />
        </View>
      </View>
    );
  }

  if (type === 'Client') {
    return (
      <View style={styles.container}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Personal Details</Text>
          <DetailRow
            icon={<Ionicons name="person-outline" size={20} color="#D1D5DB" />}
            label="Full Name"
            value="Sarah Johnson"
          />
          <DetailRow
            icon={<Ionicons name="earth-outline" size={20} color="#D1D5DB" />}
            label="Country"
            value="USA"
          />
          <DetailRow
            icon={<Ionicons name="business-outline" size={20} color="#D1D5DB" />}
            label="City"
            value="New York"
          />
          <DetailRow
            icon={<Ionicons name="location-outline" size={20} color="#D1D5DB" />}
            label="Address"
            value="225 Cherry Street #24, New York, NY"
            multiline
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Contact Details</Text>
          <DetailRow
            icon={<Ionicons name="mail-outline" size={20} color="#D1D5DB" />}
            label="Email"
            value="sarahjohnson@gmail.com"
          />
          <DetailRow
            icon={<Ionicons name="call-outline" size={20} color="#D1D5DB" />}
            label="Phone"
            value="+1(514) 550-3281"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Personal Details</Text>
        <DetailRow
          icon={<Ionicons name="person-outline" size={20} color="#6B7280" />}
          label="Full Name"
          value="Sarah Lee"
        />
        <DetailRow
          icon={<Feather name="calendar" size={20} color="#6B7280" />}
          label="Date of Birth"
          value="January 1, 1987"
        />
        <DetailRow
          icon={<Ionicons name="transgender-outline" size={20} color="#6B7280" />}
          label="Gender"
          value="Female"
        />
        <DetailRow
          icon={<Feather name="map-pin" size={20} color="#6B7280" />}
          label="Address"
          value={`225 Cherry Street #24,\nNew York, NY`}
          multiline
        />
        <DetailRow
          icon={<Feather name="briefcase" size={20} color="#6B7280" />}
          label="Joining Date"
          value="Jan 12, 2024"
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Contact Details</Text>
        <DetailRow
          icon={<Feather name="mail" size={20} color="#6B7280" />}
          label="Email"
          value="sarah@studio.com"
        />
        <DetailRow
          icon={<Feather name="phone" size={20} color="#6B7280" />}
          label="Phone"
          value="+1(514) 550-3281"
        />
      </View>
    </View>
  );
};

const DetailRow = ({
  icon,
  label,
  value,
  multiline = false,
  isStatus = false,
  isComponent = false,
}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
      {isStatus ? (
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>{value}</Text>
        </View>
      ) : isComponent ? (
        <View>{value}</View>
      ) : (
        <Text style={[styles.value, multiline && styles.valueMultiLine]}>
          {value}
        </Text>
      )}
    </View>
  </View>
);

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    paddingBottom: responsiveHeight(5),
    backgroundColor: colors.white,
  },
  sectionCard: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3),
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: responsiveHeight(2.5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(2.8),
  },
  iconContainer: {
    width: 24,
    marginRight: responsiveWidth(4),
    marginTop: 2,
    alignItems: 'center',
  },
  label: {
    width: responsiveWidth(32),
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '400',
  },
  valueContainer: {
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  valueMultiLine: {
    lineHeight: 22,
  },
  statusPill: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00B1E7',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
});
