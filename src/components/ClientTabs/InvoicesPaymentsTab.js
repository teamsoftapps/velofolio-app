import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const InvoiceMetric = ({ label, value, isStatus }) => (
  <View style={styles.metricRow}>
    <View style={styles.metricLabelWrap}>
      {label === 'Due Date' && <Feather name="calendar" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
      {label === 'Amount' && <Feather name="dollar-sign" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
      {label === 'Paid' && <Feather name="download" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
      {label === 'Status' && <Feather name="refresh-cw" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />}
      <Typography style={styles.metricLabelText}>{label}</Typography>
    </View>
    {isStatus ? (
      <View style={styles.statusBadge}>
        <Typography style={styles.statusBadgeText}>{value}</Typography>
      </View>
    ) : (
      <Typography style={styles.metricValue}>{value}</Typography>
    )}
  </View>
);

const InvoiceCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.headerInfo}>
        <View style={styles.fileIconContainer}>
          <Feather name="file-text" size={rs(20)} color="#111827" />
        </View>
        <View>
          <Typography style={styles.invoiceTitle}>Invoice 20251126-01</Typography>
          <Typography style={styles.invoiceDate}>Issued: Mar 1, 2026</Typography>
        </View>
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Feather name="send" size={rs(14)} color="#111827" style={{ marginRight: rs(6) }} />
        <Typography style={styles.sendText}>Send</Typography>
      </TouchableOpacity>
    </View>

    <View style={styles.divider} />

    <View style={styles.metricsContainer}>
      <InvoiceMetric label="Due Date" value="Mar 14, 2026" />
      <InvoiceMetric label="Amount" value="$4999.00" />
      <InvoiceMetric label="Paid" value="$2000.00" />
      <InvoiceMetric label="Status" value="PENDING" isStatus={true} />
    </View>
  </View>
);

const InvoicesPaymentsTab = () => {
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

      <InvoiceCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(100), // for FAB
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
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIconContainer: {
    width: rs(40),
    height: rs(40),
    backgroundColor: '#F9FAFB',
    borderRadius: rs(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  invoiceTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  invoiceDate: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginTop: rs(2),
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(8),
  },
  sendText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: rs(20),
  },
  metricsContainer: {
    gap: rs(12),
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricLabelText: {
    fontSize: rs(13),
    color: '#6B7280',
    fontWeight: '500',
  },
  metricValue: {
    fontSize: rs(14),
    fontWeight: '700',
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

export default InvoicesPaymentsTab;
