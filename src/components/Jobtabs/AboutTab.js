import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const AboutTab = () => (
  <View style={styles.tabContentContainer}>
    <Typography style={styles.sectionHeader}>Job Details</Typography>
    
    <View style={styles.detailRow}>
      <Feather name="briefcase" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Job Type</Typography>
      <Typography style={styles.detailValue}>Wedding</Typography>
    </View>

    <View style={styles.detailRow}>
      <Feather name="refresh-cw" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Status</Typography>
      <View style={styles.badgeBlue}>
        <Typography style={styles.badgeBlueText}>IN PROGRESS</Typography>
      </View>
    </View>

    <View style={styles.detailRow}>
      <Feather name="calendar" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Shoot Date {"\n"}& Hours</Typography>
      <Typography style={styles.detailValue}>Dec 1, 2025 {"\n"}(2:20 PM to 4:00 PM)</Typography>
    </View>

    <View style={styles.detailRow}>
      <Feather name="map-pin" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Location</Typography>
      <Typography style={[styles.detailValue, { flex: 1, flexWrap: 'wrap' }]}>
        225 Cherry Street #24, {"\n"}New York, NY
      </Typography>
    </View>

    <View style={styles.detailRow}>
      <Feather name="magnet" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Lead Source</Typography>
      <Typography style={styles.detailValue}>Instagram</Typography>
    </View>

    <View style={styles.detailRow}>
      <Feather name="users" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Assigned Team</Typography>
      <View style={styles.avatarsContainer}>
        {['https://i.pravatar.cc/150?img=32', 'https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=34'].map((url, i) => (
          <Image key={i} source={{ uri: url }} style={[styles.avatarSmall, i > 0 && { marginLeft: rs(-10) }]} />
        ))}
      </View>
    </View>

    <View style={styles.divider} />

    <Typography style={styles.sectionHeader}>Client</Typography>
    <View style={styles.detailRow}>
      <Feather name="mail" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Email</Typography>
      <Typography style={styles.detailValue}>sarah@studio.com</Typography>
    </View>

    <View style={styles.detailRow}>
      <Feather name="map-pin" size={rs(16)} color="#9CA3AF" style={styles.detailIcon} />
      <Typography style={styles.detailLabel}>Address</Typography>
      <Typography style={styles.detailValue}>New York, USA</Typography>
    </View>
  </View>
);

const styles = StyleSheet.create({
  tabContentContainer: { flex: 1 },
  sectionHeader: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(20),
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
  },
  divider: {
     height: 1,
     backgroundColor: '#E5E7EB',
     marginVertical: rs(20),
  },
  badgeBlue: {
     backgroundColor: '#E0F2FE',
     paddingHorizontal: rs(10),
     paddingVertical: rs(4),
     borderRadius: rs(12),
  },
  badgeBlueText: {
     color: '#38BDF8',
     fontSize: rs(11),
     fontWeight: '700',
  },
  avatarsContainer: {
     flexDirection: 'row',
  },
  avatarSmall: {
     width: rs(28),
     height: rs(28),
     borderRadius: rs(14),
     borderWidth: 2,
     borderColor: '#FFFFFF',
  },
});

export default AboutTab;
