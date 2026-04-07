import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const BillingHistory = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Paid', 'Overdue'];

  const invoices = [
    { id: '1', number: 'INV-1024', amount: '$49', date: 'Oct 1, 2025', status: 'PAID' },
    { id: '2', number: 'INV-1023', amount: '$49', date: 'Sep 1, 2025', status: 'PAID' },
    { id: '3', number: 'INV-1022', amount: '$49', date: 'Aug 1, 2025', status: 'PAID' },
  ];

  const renderInvoice = ({ item }) => (
    <View style={styles.invoiceCard}>
      <View style={styles.invoiceHeader}>
        <View style={styles.invoiceTitleContainer}>
          <MaterialCommunityIcons name="file-document-outline" size={24} color={colors.bluePrimary || '#00B1E7'} />
          <CustomText style={styles.invoiceNumber}>{item.number}</CustomText>
        </View>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <Ionicons name="download-outline" size={24} color={colors.bluePrimary || '#00B1E7'} />
        </TouchableOpacity>
      </View>

      <View style={styles.invoiceBody}>
        <View style={styles.infoRow}>
          <View style={styles.infoLabelContainer}>
            <Ionicons name="cash-outline" size={18} color={colors.grayDark || '#999999'} />
            <CustomText style={styles.infoLabel}>Amount</CustomText>
          </View>
          <CustomText style={styles.infoValueBold}>{item.amount}</CustomText>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoLabelContainer}>
            <Ionicons name="calendar-outline" size={18} color={colors.grayDark || '#999999'} />
            <CustomText style={styles.infoLabel}>Date</CustomText>
          </View>
          <CustomText style={styles.infoValue}>{item.date}</CustomText>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoLabelContainer}>
            <Ionicons name="refresh-outline" size={18} color={colors.grayDark || '#999999'} />
            <CustomText style={styles.infoLabel}>Status</CustomText>
          </View>
          <View style={styles.paidBadge}>
            <CustomText style={styles.paidText}>{item.status}</CustomText>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Billing History" />
      </View>

      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.activeFilterButton
            ]}
            onPress={() => setActiveFilter(filter)}
            activeOpacity={0.8}
          >
            <CustomText
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText
              ]}
            >
              {filter}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id}
        renderItem={renderInvoice}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(2),
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(5),
    gap: responsiveWidth(3),
    marginBottom: responsiveHeight(3),
  },
  filterButton: {
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    backgroundColor: colors.white,
  },
  activeFilterButton: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  filterText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  activeFilterText: {
    color: colors.white,
  },
  listContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(4),
  },
  invoiceCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0FBFF',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
  },
  invoiceTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  invoiceNumber: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(3),
  },
  invoiceBody: {
    padding: responsiveWidth(5),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  infoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  infoLabel: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
  },
  infoValue: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  infoValueBold: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  paidBadge: {
    backgroundColor: '#FFF7E6',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  paidText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '700',
    color: '#EBB212',
  },
});

export default BillingHistory;
