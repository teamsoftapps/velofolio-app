import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const PaymentsBreakdown = ({
  data = [
    { label: 'Paid', amount: '$42,750', percentage: '+73%', color: colors.bluePrimary, bgColor: colors.blueSecondary },
    { label: 'Pending', amount: '$8,500', percentage: '+15%', color: colors.textSecondary, bgColor: colors.lightGray },
    { label: 'Overdue', amount: '$3,200', percentage: '+12%', color: colors.red, bgColor: '#FEE2E2' },
  ],
  title = 'Payments Breakdown',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.listContainer}>
        {data.map((item, index) => (
          <View 
            key={item.label} 
            style={[
              styles.row,
              { backgroundColor: item.bgColor },
              index !== data.length - 1 && styles.rowMargin,
            ]}
          >
            <View style={styles.leftSection}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <Text style={[styles.label]}>
                {item.label}
              </Text>
            </View>
            
            <View style={styles.rightSection}>
              <Text style={styles.amount}>{item.amount}</Text>
              <View style={[styles.badge, { backgroundColor: item.color }]}>
                <Text style={styles.badgeText}>{item.percentage}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PaymentsBreakdown;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.black,
    marginBottom: responsiveHeight(2),
  },
  listContainer: {
    gap: responsiveHeight(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    borderRadius: 10,
    borderColor:colors.gray,
    borderWidth:responsiveWidth(0.3)
  },
  rowMargin: {
    marginBottom: responsiveHeight(1),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  amount: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  badge: {
    paddingHorizontal: responsiveWidth(1.5),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 4,
    minWidth: responsiveWidth(13),
    alignItems: 'center',
  },
  badgeText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    color: colors.white,
  },
});