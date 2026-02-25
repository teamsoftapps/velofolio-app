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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileDetails = () => {
  return (
    <>
      {/* Personal Details */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Personal Details</Text>

        <DetailRow
          icon={<Ionicons name="person-outline" size={20} color="#64748b" />}
          label="Full Name"
          value="Sarah Lee"
        />

        <DetailRow
          icon={<MaterialCommunityIcons name="cake-variant-outline" size={20} color="#64748b" />}
          label="Date of Birth"
          value="January 1, 1987"
        />

        <DetailRow
          icon={<MaterialCommunityIcons name="gender-female" size={20} color="#64748b" />}
          label="Gender"
          value="Female"
        />

        <DetailRow
          icon={<Ionicons name="location-outline" size={20} color="#64748b" />}
          label="Address"
          value={`225 Cherry Street #24,\nNew York, NY`}
          multiline
        />

        <DetailRow
          icon={<MaterialIcons name="event-available" size={20} color="#64748b" />}
          label="Joining Date"
          value="Jan 12, 2024"
        />
      </View>

      {/* Contact Details */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Contact Details</Text>

        <DetailRow
          icon={<MaterialIcons name="mail-outline" size={20} color="#64748b" />}
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
  );
};

export default ProfileDetails;

/* Reusable Row Component */
const DetailRow = ({ icon, label, value, multiline = false }) => (
  <View style={styles.row}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.label}>{label}</Text>
    <Text style={multiline ? styles.valueMultiLine : styles.value}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  sectionCard: {
    marginHorizontal: responsiveWidth(5),
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
  value: {
    flex: 1,
    fontSize: responsiveFontSize(1.85),
    fontWeight: '600',
  },
  valueMultiLine: {
    flex: 1,
    fontSize: responsiveFontSize(1.85),
    lineHeight: responsiveFontSize(2.2),
  },
});