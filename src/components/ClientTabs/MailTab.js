import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const MailCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.headerLeft}>
        <View style={styles.mailIconCircle}>
           <Feather name="mail" size={rs(20)} color="#111827" />
        </View>
        <View>
          <Typography style={styles.mailTitle}>Follow Up</Typography>
          <Typography style={styles.mailDate}>Mar 1, 2026</Typography>
        </View>
      </View>
      <TouchableOpacity style={styles.viewButton}>
        <Feather name="eye" size={rs(16)} color="#111827" style={{ marginRight: rs(6) }} />
        <Typography style={styles.viewText}>View</Typography>
      </TouchableOpacity>
    </View>

    <View style={styles.divider} />

    <View style={styles.detailsSection}>
      <View style={styles.detailRow}>
        <View style={styles.detailLabelWrap}>
          <Feather name="arrow-up" size={rs(16)} color="#9CA3AF" style={{ marginRight: rs(8) }} />
          <Typography style={styles.detailLabel}>To</Typography>
        </View>
        <Typography style={styles.detailValue}>sarahjohnson@gmail.com</Typography>
      </View>

      <View style={styles.detailRow}>
        <View style={styles.detailLabelWrap}>
          <Feather name="refresh-cw" size={rs(16)} color="#9CA3AF" style={{ marginRight: rs(8) }} />
          <Typography style={styles.detailLabel}>Status</Typography>
        </View>
        <View style={styles.statusBadge}>
          <Typography style={styles.statusText}>DELIVERED</Typography>
        </View>
      </View>
    </View>
  </View>
);

const MailTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={rs(20)} color="#9CA3AF" />
          <TextInput 
            placeholder="Search" 
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={rs(20)} color="#111827" />
        </TouchableOpacity>
      </View>

      <MailCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(100),
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
    borderRadius: rs(20),
    padding: rs(20),
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
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mailIconCircle: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  mailTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  mailDate: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginTop: rs(2),
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(8),
  },
  viewText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3FAFF', // Slightly tinted divider per design
    marginVertical: rs(20),
  },
  detailsSection: {
    gap: rs(12),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: rs(14),
    color: '#6B7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
  },
  statusBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: rs(12),
    paddingVertical: rs(4),
    borderRadius: rs(20),
  },
  statusText: {
    color: '#10B981',
    fontSize: rs(11),
    fontWeight: '700',
  },
});

export default MailTab;
