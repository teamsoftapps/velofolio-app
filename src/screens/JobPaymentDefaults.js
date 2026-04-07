import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
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
import IncrementDecrementModal from '../components/IncrementDecrementModal';

const JobPaymentDefaults = ({ navigation }) => {
  const [paymentDue, setPaymentDue] = useState(7);
  const [lateFee, setLateFee] = useState(5);
  const [taxRate, setTaxRate] = useState(10);
  
  const [activeModal, setActiveModal] = useState(null); // 'due', 'fee', 'tax'

  const settings = [
    {
      id: 1,
      title: 'Default Payment Due',
      value: `${paymentDue} days`,
      icon: 'contrast-outline',
      iconType: 'Ion',
      onPress: () => setActiveModal('due'),
    },
    {
      id: 2,
      title: 'Late Fee',
      value: `${lateFee}%`,
      icon: 'calendar-outline',
      iconType: 'Ion',
      onPress: () => setActiveModal('fee'),
    },
    {
      id: 3,
      title: 'Default Tax Rate',
      value: `${taxRate}%`,
      icon: 'clipboard-text-outline',
      iconType: 'MCI',
      onPress: () => setActiveModal('tax'),
    },
    {
      id: 4,
      title: 'Invoice Number Format',
      value: '2025-INV-001',
      icon: 'clipboard-text-outline',
      iconType: 'MCI',
      onPress: () => navigation.navigate('InvoiceFormatSettings'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Job & Payment Defaults" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <CustomText style={styles.sectionTitle}>Job & Payment</CustomText>
        
        <View style={styles.optionsCard}>
          {settings.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  {item.iconType === 'Ion' ? (
                    <Ionicons name={item.icon} size={22} color={colors.textPrimary || '#222222'} style={styles.icon} />
                  ) : (
                    <MaterialCommunityIcons name={item.icon} size={22} color={colors.textPrimary || '#222222'} style={styles.icon} />
                  )}
                  <CustomText style={styles.optionTitle}>{item.title}</CustomText>
                </View>
                <View style={styles.optionRight}>
                  <CustomText style={styles.optionValue}>{item.value}</CustomText>
                  <Ionicons name="chevron-forward" size={18} color={colors.grayDark || '#999999'} />
                </View>
              </TouchableOpacity>
              {index < settings.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>

      {/* Modals */}
      <IncrementDecrementModal
        visible={activeModal === 'due'}
        onClose={() => setActiveModal(null)}
        title="Default Payment Due"
        description="Set the number of days after invoice creation when payment is due."
        value={paymentDue}
        onIncrement={() => setPaymentDue(prev => prev + 1)}
        onDecrement={() => setPaymentDue(prev => Math.max(0, prev - 1))}
        onSave={() => setActiveModal(null)}
        unit="Days"
      />

      <IncrementDecrementModal
        visible={activeModal === 'fee'}
        onClose={() => setActiveModal(null)}
        title="Late Fee"
        description="Charge a percentage of the invoice total if payment is overdue."
        value={lateFee}
        onIncrement={() => setLateFee(prev => prev + 1)}
        onDecrement={() => setLateFee(prev => Math.max(0, prev - 1))}
        onSave={() => setActiveModal(null)}
        suffix="%"
      />

      <IncrementDecrementModal
        visible={activeModal === 'tax'}
        onClose={() => setActiveModal(null)}
        title="Default Tax Rate"
        description="Set the default tax percentage applied to new invoices."
        value={taxRate}
        onIncrement={() => setTaxRate(prev => prev + 1)}
        onDecrement={() => setTaxRate(prev => Math.max(0, prev - 1))}
        onSave={() => setActiveModal(null)}
        suffix="%"
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
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginBottom: responsiveHeight(2),
  },
  optionsCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: responsiveWidth(3),
  },
  optionTitle: {
    fontSize: responsiveFontSize(2),
    color: colors.textPrimary || '#222222',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default JobPaymentDefaults;
