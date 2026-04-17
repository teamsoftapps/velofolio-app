import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const InfoItem = ({ icon, label, value }) => (
  <View style={styles.detailRow}>
    <Feather name={icon} size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
    <Typography style={styles.detailLabel}>{label}</Typography>
    <Typography style={styles.detailValue}>{value}</Typography>
  </View>
);

const SectionDivider = () => <View style={styles.divider} />;

const AboutTab = ({ client }) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.sectionHeader}>Personal Details</Typography>
      
      <View style={styles.detailsGroup}>
        <InfoItem icon="user" label="Full Name" value={client?.name || 'Sarah Johnson'} />
        <InfoItem icon="globe" label="Country" value="USA" />
        <InfoItem icon="map" label="City" value="New York" />
        <InfoItem icon="map-pin" label="Address" value={"225 Cherry Street #24, \nNew York, NY"} />
      </View>

      <SectionDivider />

      <Typography style={styles.sectionHeader}>Contact Details</Typography>
      <View style={styles.detailsGroup}>
        <InfoItem icon="mail" label="Email" value={client?.email || 'sarahjohnson@gmail.com'} />
        <InfoItem icon="phone" label="Phone" value="+1(514) 550-3281" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: rs(20),
  },
  sectionHeader: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(20),
  },
  detailsGroup: {
    marginBottom: rs(8),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: rs(20),
  },
  detailIcon: {
    marginRight: rs(16),
    marginTop: rs(2),
    width: rs(20),
  },
  detailLabel: {
    fontSize: rs(14),
    color: '#6B7280',
    width: rs(110),
  },
  detailValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
    lineHeight: rs(20),
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: rs(20),
  },
});

export default AboutTab;
