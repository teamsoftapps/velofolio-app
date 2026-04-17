import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const DocItem = ({ label, value, isStatus }) => (
  <View style={styles.docItem}>
    <View style={styles.docLabelRow}>
       {label === 'Type' && <Feather name="file-text" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
       {label === 'Uploaded By' && <Feather name="upload" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
       {label === 'Date' && <Feather name="calendar" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
       {label === 'Status' && <Feather name="refresh-cw" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
       <Typography style={styles.docLabelText}>{label}</Typography>
    </View>
    {isStatus ? (
      <View style={styles.statusBadge}>
        <Typography style={styles.statusBadgeText}>{value}</Typography>
      </View>
    ) : (
      <Typography style={styles.docValue}>{value}</Typography>
    )}
  </View>
);

const DocCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.headerTitleRow}>
        <View style={styles.fileIconContainer}>
          <Feather name="file-text" size={rs(20)} color="#38BDF8" />
        </View>
        <Typography style={styles.fileTitle}>Wedding Contract</Typography>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>
    </View>

    <View style={styles.docDetails}>
      <DocItem label="Type" value="Contract" />
      <DocItem label="Uploaded By" value="Sarah Lee" />
      <DocItem label="Date" value="Oct 1, 2025" />
      <DocItem label="Status" value="SIGNED" isStatus={true} />
    </View>
  </View>
);

const ContractsDocsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={rs(20)} color="#9CA3AF" />
          <TextInput 
            placeholder="Search Contracts & Docs" 
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={rs(20)} color="#111827" />
        </TouchableOpacity>
      </View>

      <DocCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(20),
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
    marginBottom: rs(24),
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIconContainer: {
    width: rs(40),
    height: rs(40),
    backgroundColor: '#F0F9FF',
    borderRadius: rs(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  fileTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  docDetails: {
    gap: rs(12),
  },
  docItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  docLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docLabelText: {
    fontSize: rs(13),
    color: '#6B7280',
    fontWeight: '500',
  },
  docValue: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  statusBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(12),
  },
  statusBadgeText: {
    color: '#FBBF24',
    fontSize: rs(11),
    fontWeight: '700',
  },
});

export default ContractsDocsTab;
