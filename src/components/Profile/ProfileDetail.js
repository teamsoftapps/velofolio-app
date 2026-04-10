// components/ProfileDetails.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TeamAvatars from '../TeamComponent'; // Default export is TeamAvatars

const ProfileDetails = ({ type = 'Team' }) => {
  return (
    <>
      {type !== 'Job' && (
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Personal Details</Text>

          <DetailRow
            icon={<Ionicons name="person-outline" size={20} color="#64748b" />}
            label="Full Name"
            value="Sarah Lee"
          />

          {type === 'Client' && (
            <>
              <DetailRow
                icon={
                  <MaterialCommunityIcons
                    name="cake-variant-outline"
                    size={20}
                    color="#64748b"
                  />
                }
                label="Country"
                value="USA"
              />
              <DetailRow
                icon={
                  <MaterialCommunityIcons
                    name="city"
                    size={20}
                    color="#64748b"
                  />
                }
                label="City"
                value="New York"
              />
            </>
          )}

          {type === 'Team' && (
            <>
              <DetailRow
                icon={
                  <MaterialCommunityIcons
                    name="cake-variant-outline"
                    size={20}
                    color="#64748b"
                  />
                }
                label="Date of Birth"
                value="January 1, 1987"
              />
              <DetailRow
                icon={
                  <MaterialCommunityIcons
                    name="gender-female"
                    size={20}
                    color="#64748b"
                  />
                }
                label="Gender"
                value="Female"
              />
            </>
          )}

          <DetailRow
            icon={
              <Ionicons name="location-outline" size={20} color="#64748b" />
            }
            label="Address"
            value={`225 Cherry Street #24,\nNew York, NY`}
            multiline
          />

          {type === 'Team' && (
            <DetailRow
              icon={
                <MaterialIcons
                  name="event-available"
                  size={20}
                  color="#64748b"
                />
              }
              label="Joining Date"
              value="Jan 12, 2024"
            />
          )}
        </View>
      )}

      {type === 'Job' && (
        <>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionHeader}>Job Details</Text>
            <DetailRow
              icon={<Feather name="briefcase" size={20} color="#64748b" />}
              label="Job Type"
              value="Wedding"
            />
            <DetailRow
              icon={<Feather name="refresh-cw" size={20} color="#64748b" />}
              label="Status"
              value="IN PROGRESS"
              valueStyle={{
                color: colors.blueAccent || '#0EA5E9',
                backgroundColor: colors.blueExtraLight || '#E0F2FE',
                paddingHorizontal: 12,
                paddingVertical: 2,
                borderRadius: 20,
                overflow: 'hidden',
                textAlign: 'center',
              }}
            />
            <DetailRow
              icon={<Feather name="calendar" size={20} color="#64748b" />}
              label="Shoot Date & Hours"
              value={`Dec 1, 2025\n(2:20 PM to 4:00 PM)`}
              multiline
            />
            <DetailRow
              icon={<Feather name="map-pin" size={20} color="#64748b" />}
              label="Location"
              value="225 Cherry Street #24, New York, NY"
              multiline
            />
            <DetailRow
              icon={<Ionicons name="link-outline" size={20} color="#64748b" />}
              label="Lead Source"
              value="Instagram"
            />
            <DetailRow
              icon={<Feather name="users" size={20} color="#64748b" />}
              label="Assigned Team"
              value={<TeamAvatars />}
              isComponent
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.sectionCard}>
            <Text style={styles.sectionHeader}>Client</Text>
            <DetailRow
              icon={
                <MaterialIcons name="mail-outline" size={20} color="#64748b" />
              }
              label="Email"
              value="sarah@studio.com"
            />
            <DetailRow
              icon={
                <Ionicons name="location-outline" size={20} color="#64748b" />
              }
              label="Address"
              value="New York, USA"
            />
          </View>
        </>
      )}

      {type !== 'Job' && (
        <>
          <View style={styles.separator} />
          <View style={styles.sectionCard}>
            <Text style={styles.sectionHeader}>Contact Details</Text>
            <DetailRow
              icon={
                <MaterialIcons name="mail-outline" size={20} color="#64748b" />
              }
              label="Email"
              value="sarah@studio.com"
            />
            <DetailRow
              icon={<Ionicons name="call-outline" size={20} color="#64748b" />}
              label="Phone"
              value="+1(514) 550-3281"
            />
          </View>
        </>
      )}
    </>
  );
};

export default ProfileDetails;

/* Reusable Row Component */
const DetailRow = ({
  icon,
  label,
  value,
  multiline = false,
  valueStyle = {},
  isComponent = false,
}) => (
  <View style={styles.row}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
      {isComponent ? (
        <View>{value}</View>
      ) : (
        <Text
          style={[multiline ? styles.valueMultiLine : styles.value, valueStyle]}
        >
          {value}
        </Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionCard: {
    // marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(5),
  },
  sectionHeader: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '700',
    marginBottom: responsiveHeight(2.2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(2.4),
  },
  icon: {
    marginRight: responsiveWidth(4.5),
    marginTop: responsiveHeight(0.4),
  },
  label: {
    width: responsiveWidth(34),
    fontSize: responsiveFontSize(1.85),
    color: colors.grayDark,
    fontWeight: '500',
  },
  valueContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.borderExtraLight,
    // marginVertical: responsiveHeight(1),
  },
  value: {
    fontSize: responsiveFontSize(1.85),
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  valueMultiLine: {
    fontSize: responsiveFontSize(1.85),
    lineHeight: responsiveFontSize(2.2),
    alignSelf: 'flex-start',
  },
});
