import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OVERVIEW_CARDS = [
  {
    label: 'Payments Received',
    value: '$42,750',
    change: '+15.01%',
    bg: '#38BDF8',
    changeBg: '#0EA5E9',
    textColor: '#FFFFFF',
  },
  {
    label: 'Pending Payments',
    value: '$8,500',
    change: '+15.01%',
    bg: '#FBBF24',
    changeBg: '#F59E0B',
    textColor: '#FFFFFF',
  },
  {
    label: 'Overdue Payments',
    value: '$3,200',
    change: '+15.01%',
    bg: '#6B7280',
    changeBg: '#4B5563',
    textColor: '#FFFFFF',
  },
  {
    label: 'Upcoming Due',
    value: '5',
    change: '+15.01%',
    bg: '#D1D5DB',
    changeBg: '#9CA3AF',
    textColor: '#374151',
  },
];

const INVOICES = [
  {
    id: 1,
    name: 'Sarah Johnson',
    project: 'Wedding Film',
    dueDate: 'Oct 12, 2025',
    invoiceId: '20251126-01',
    amount: '$4999.00',
    paid: '$2000.00',
    status: 'PENDING',
    statusColor: '#FBBF24',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 2,
    name: 'Michael Chen',
    project: 'Corporate Event',
    dueDate: 'Nov 5, 2025',
    invoiceId: '20251128-03',
    amount: '$3200.00',
    paid: '$3200.00',
    status: 'PAID',
    statusColor: '#10B981',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const PaymentsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Payments</Typography>
          </View>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search by name, event, email"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Payments Overview */}
        <View style={styles.overviewHeader}>
          <Typography style={styles.overviewTitle}>Payments Overview</Typography>
          <TouchableOpacity style={styles.timeFilterPill}>
            <Typography style={styles.timeFilterText}>{timeFilter}</Typography>
            <Feather name="chevron-down" size={rs(14)} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.overviewGrid}>
          {OVERVIEW_CARDS.map((card, index) => (
            <View key={index} style={[styles.overviewCard, { backgroundColor: card.bg }]}>
              <Typography style={[styles.overviewLabel, { color: card.textColor, opacity: 0.85 }]}>
                {card.label}
              </Typography>
              <Typography style={[styles.overviewValue, { color: card.textColor }]}>
                {card.value}
              </Typography>
              <View style={[styles.changeBadge, { backgroundColor: card.changeBg }]}>
                <Typography style={styles.changeText}>{card.change} ↗</Typography>
              </View>
            </View>
          ))}
        </View>

        {/* Invoice Cards */}
        {INVOICES.map(invoice => (
          <View key={invoice.id} style={styles.invoiceCard}>
            {/* Invoice header */}
            <View style={styles.invoiceHeader}>
              <Image source={{ uri: invoice.avatar }} style={styles.invoiceAvatar} />
              <View style={styles.invoiceHeaderText}>
                <Typography style={styles.invoiceName}>{invoice.name}</Typography>
                <Typography style={styles.invoiceProject}>
                  {invoice.project} • Due Date: <Typography style={styles.dueDateHL}>{invoice.dueDate}</Typography>
                </Typography>
              </View>
            </View>

            {/* Invoice details */}
            <View style={styles.invoiceDetails}>
              <View style={styles.invoiceRow}>
                <View style={styles.invoiceRowLeft}>
                  <Feather name="file-text" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.invoiceDetailLabel}>Invoice ID</Typography>
                </View>
                <Typography style={styles.invoiceDetailValue}>{invoice.invoiceId}</Typography>
              </View>
              <View style={styles.invoiceRow}>
                <View style={styles.invoiceRowLeft}>
                  <Feather name="dollar-sign" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.invoiceDetailLabel}>Amount</Typography>
                </View>
                <Typography style={styles.invoiceDetailValue}>{invoice.amount}</Typography>
              </View>
              <View style={styles.invoiceRow}>
                <View style={styles.invoiceRowLeft}>
                  <Feather name="download" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.invoiceDetailLabel}>Paid</Typography>
                </View>
                <Typography style={styles.invoiceDetailValue}>{invoice.paid}</Typography>
              </View>
              <View style={[styles.invoiceRow, { borderBottomWidth: 0 }]}>
                <View style={styles.invoiceRowLeft}>
                  <Feather name="activity" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.invoiceDetailLabel}>Status</Typography>
                </View>
                <Typography style={[styles.invoiceDetailValue, { color: invoice.statusColor, fontWeight: '700' }]}>
                  {invoice.status}
                </Typography>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: rh(100) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(24),
    marginBottom: rs(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginTop: rs(8),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: { flex: 1, marginLeft: rs(10), fontSize: rs(15), color: '#111827' },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: { paddingHorizontal: rs(16) },

  // Overview
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
    paddingHorizontal: rs(4),
  },
  overviewTitle: { fontSize: rs(18), fontWeight: '700', color: '#111827' },
  timeFilterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(20),
    paddingHorizontal: rs(14),
    paddingVertical: rs(6),
  },
  timeFilterText: { fontSize: rs(12), color: '#6B7280', fontWeight: '500', marginRight: rs(4) },

  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: rs(24),
  },
  overviewCard: {
    width: '48%',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(12),
  },
  overviewLabel: { fontSize: rs(12), fontWeight: '500', marginBottom: rs(6) },
  overviewValue: { fontSize: rs(28), fontWeight: '800', marginBottom: rs(8) },
  changeBadge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: rs(12),
    paddingHorizontal: rs(8),
    paddingVertical: rs(3),
  },
  changeText: { fontSize: rs(11), color: '#FFFFFF', fontWeight: '600' },

  // Invoice Cards
  invoiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    marginBottom: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  invoiceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(16),
    paddingBottom: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  invoiceAvatar: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    marginRight: rs(12),
  },
  invoiceHeaderText: { flex: 1 },
  invoiceName: { fontSize: rs(16), fontWeight: '700', color: '#111827', marginBottom: rs(2) },
  invoiceProject: { fontSize: rs(13), color: '#6B7280' },
  dueDateHL: { color: '#EF4444', fontWeight: '600' },

  invoiceDetails: {},
  invoiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rs(10),
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  invoiceRowLeft: { flexDirection: 'row', alignItems: 'center' },
  invoiceDetailLabel: { fontSize: rs(14), color: '#6B7280', marginLeft: rs(10) },
  invoiceDetailValue: { fontSize: rs(14), fontWeight: '600', color: '#111827' },
});

export default PaymentsScreen;
