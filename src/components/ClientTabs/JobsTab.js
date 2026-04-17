import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const JobCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.statusBadge}>
        <Typography style={styles.statusBadgeText}>Completed</Typography>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>
    </View>

    <Typography style={styles.jobTitle}>Pre-Wedding Shoot – Sarah & John</Typography>
    <Typography style={styles.jobSubtitle}>Full Film, Teaser, RAW Photos</Typography>

    <View style={styles.detailsRow}>
      <View style={styles.detailItem}>
        <Typography style={styles.detailLabel}>Event Date</Typography>
        <Typography style={styles.detailValue}>Oct 12, 2025, 5:32 AM</Typography>
      </View>
      <View style={styles.detailItem}>
        <Typography style={styles.detailLabel}>Location</Typography>
        <Typography style={styles.detailValue}>Toronto City Hall</Typography>
      </View>
    </View>

    <View style={styles.teamSection}>
      <Typography style={styles.teamLabel}>Team</Typography>
      <View style={styles.teamList}>
        <View style={styles.teamItem}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={styles.teamAvatar} />
          <Typography style={styles.teamName}>Mike</Typography>
        </View>
        <View style={styles.teamItem}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.teamAvatar} />
          <Typography style={styles.teamName}>Lucas</Typography>
        </View>
      </View>
    </View>
  </View>
);

const JobsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={rs(20)} color="#9CA3AF" />
          <TextInput 
            placeholder="Search Jobs" 
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={rs(20)} color="#111827" />
        </TouchableOpacity>
      </View>

      <JobCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(100), // padding for FAB
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(24),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(14),
    color: '#111827',
  },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  statusBadge: {
    backgroundColor: '#34D399',
    paddingHorizontal: rs(12),
    paddingVertical: rs(6),
    borderRadius: rs(20),
  },
  statusBadgeText: {
    color: '#FFFFFF',
    fontSize: rs(12),
    fontWeight: '700',
  },
  jobTitle: {
    fontSize: rs(17),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(4),
  },
  jobSubtitle: {
    fontSize: rs(14),
    color: '#6B7280',
    marginBottom: rs(16),
  },
  detailsRow: {
    flexDirection: 'row',
    backgroundColor: '#F0F9FF',
    borderRadius: rs(12),
    padding: rs(12),
    marginBottom: rs(16),
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    marginBottom: rs(4),
  },
  detailValue: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  teamSection: {
    marginTop: rs(4),
  },
  teamLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    marginBottom: rs(8),
  },
  teamList: {
    flexDirection: 'row',
  },
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: rs(16),
  },
  teamAvatar: {
    width: rs(28),
    height: rs(28),
    borderRadius: rs(14),
    marginRight: rs(8),
  },
  teamName: {
    fontSize: rs(13),
    color: '#4B5563',
    fontWeight: '500',
  },
});

export default JobsTab;
