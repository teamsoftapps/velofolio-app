import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const INVOICES = [
  { id: '1024', amount: '$49', date: 'Oct 1, 2025', status: 'PAID' },
  { id: '1023', amount: '$49', date: 'Sep 1, 2025', status: 'PAID' },
  { id: '1022', amount: '$49', date: 'Aug 1, 2025', status: 'PAID' },
];

const BillingHistoryScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Paid', 'Overdue'];

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Billing History</Typography>
        </View>

        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.tabButtonActive
              ]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Typography style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive
              ]}>{tab}</Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {INVOICES.map((invoice, index) => (
          <View key={index} style={styles.invoiceCard}>
            <View style={styles.invoiceHeader}>
              <View style={styles.invoiceHeaderLeft}>
                <Feather name="file-text" size={rs(20)} color="#38BDF8" style={styles.fileIcon} />
                <Typography style={styles.invoiceTitle}>INV-{invoice.id}</Typography>
              </View>
              <TouchableOpacity>
                <Feather name="download" size={rs(20)} color="#38BDF8" />
              </TouchableOpacity>
            </View>

            <View style={styles.invoiceBody}>
              <View style={styles.row}>
                <View style={styles.rowLeft}>
                  <Feather name="dollar-sign" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.rowLabel}>Amount</Typography>
                </View>
                <Typography style={styles.rowValueBold}>{invoice.amount}</Typography>
              </View>
              
              <View style={styles.row}>
                <View style={styles.rowLeft}>
                  <Feather name="calendar" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.rowLabel}>Date</Typography>
                </View>
                <Typography style={styles.rowValueBold}>{invoice.date}</Typography>
              </View>
              
              <View style={styles.rowLast}>
                <View style={styles.rowLeft}>
                  <Feather name="refresh-ccw" size={rs(16)} color="#9CA3AF" />
                  <Typography style={styles.rowLabel}>Status</Typography>
                </View>
                <View style={styles.statusBadge}>
                  <Typography style={styles.statusBadgeText}>{invoice.status}</Typography>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: rh(40) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(16), // A bit more padding for tabs
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(16),
  },
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
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: rs(20),
  },
  tabButton: {
    paddingHorizontal: rs(20),
    paddingVertical: rs(8),
    borderRadius: rs(20),
    borderWidth: 1,
    borderColor: '#D1D5DB', // Neutral border for inactive
    marginRight: rs(12),
    backgroundColor: '#FFFFFF',
  },
  tabButtonActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  tabText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#4B5563',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  invoiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F9FF', // Light blue background for header part
    paddingVertical: rs(12),
    paddingHorizontal: rs(14),
    borderRadius: rs(8),
    marginBottom: rs(16),
  },
  invoiceHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    marginRight: rs(10),
  },
  invoiceTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  invoiceBody: {
    paddingHorizontal: rs(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  rowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: rs(100),
  },
  rowLabel: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginLeft: rs(10),
  },
  rowValueBold: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  statusBadge: {
    backgroundColor: '#FEF9C3', // Light yellow tag
    paddingHorizontal: rs(12),
    paddingVertical: rs(4),
    borderRadius: rs(16),
  },
  statusBadgeText: {
    fontSize: rs(12),
    fontWeight: '700',
    color: '#EAB308', // Yellow-500
  },
});

export default BillingHistoryScreen;
