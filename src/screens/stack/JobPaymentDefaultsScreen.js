import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const JobPaymentDefaultsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [modalType, setModalType] = useState(null); // 'paymentDue', 'lateFee', 'taxRate'
  const [values, setValues] = useState({
    paymentDue: 7,
    lateFee: 5,
    taxRate: 10,
  });

  const SETTINGS = [
    { id: 'paymentDue', icon: 'pie-chart', label: 'Default Payment Due', value: `${values.paymentDue} days` },
    { id: 'lateFee', icon: 'clock', label: 'Late Fee', value: `${values.lateFee}%` },
    { id: 'taxRate', icon: 'file-text', label: 'Default Tax Rate', value: `${values.taxRate}%` },
    { id: 'invoiceFormat', icon: 'hash', label: 'Invoice Number Format', value: '2025-INV-001', route: 'InvoiceNumberFormat' },
  ];

  const StepperModal = ({ visible, type, onClose }) => {
    const [tempValue, setTempValue] = useState(values[type] || 0);

    const getTitle = () => {
      if (type === 'paymentDue') return 'Default Payment Due';
      if (type === 'lateFee') return 'Late Fee';
      if (type === 'taxRate') return 'Default Tax Rate';
      return '';
    };

    const getSubtitle = () => {
      if (type === 'paymentDue') return 'Set the number of days after invoice creation when payment is due.';
      if (type === 'lateFee') return 'Charge a percentage of the invoice total if payment is overdue.';
      if (type === 'taxRate') return 'Set the standard tax percentage applied to invoices.';
      return '';
    };

    const getUnit = () => {
      if (type === 'paymentDue') return 'Days';
      return '';
    };

    const displayValue = () => {
      if (type === 'paymentDue') return tempValue;
      return `${tempValue}%`;
    };

    const handleSave = () => {
      setValues(prev => ({ ...prev, [type]: tempValue }));
      onClose();
    };

    return (
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Typography style={styles.modalTitle}>{getTitle()}</Typography>
            <Typography style={styles.modalSubtitle}>{getSubtitle()}</Typography>
            
            <View style={styles.stepperContainer}>
              <TouchableOpacity 
                style={styles.stepperButton} 
                onPress={() => setTempValue(Math.max(0, tempValue - 1))}
              >
                <Feather name="minus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
              
              <View style={styles.valueDisplay}>
                <Typography style={styles.valueDisplayText}>{displayValue()}</Typography>
              </View>

              <TouchableOpacity 
                style={styles.stepperButton} 
                onPress={() => setTempValue(tempValue + 1)}
              >
                <Feather name="plus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>

            {getUnit() !== '' && (
              <Typography style={styles.unitText}>{getUnit()}</Typography>
            )}

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Typography style={styles.saveButtonText}>Save</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Job & Payment Defaults</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.sectionTitle}>Job & Payment</Typography>
        
        <View style={styles.sectionCard}>
          {SETTINGS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.settingItem,
                index < SETTINGS.length - 1 && styles.settingItemBorder,
              ]}
              activeOpacity={0.6}
              onPress={() => {
                if (item.route) {
                  navigation.navigate(item.route);
                } else {
                  setModalType(item.id);
                }
              }}
            >
              <View style={styles.settingLeft}>
                <Feather name={item.icon} size={rs(20)} color="#111827" style={styles.settingIcon} />
                <Typography style={styles.settingLabel}>{item.label}</Typography>
              </View>
              <View style={styles.settingRight}>
                <Typography style={styles.settingValue}>{item.value}</Typography>
                <Feather name="chevron-right" size={rs(18)} color="#9CA3AF" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: rh(100) }} />
      </ScrollView>

      {modalType && (
        <StepperModal 
          visible={!!modalType} 
          type={modalType} 
          onClose={() => setModalType(null)} 
        />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
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
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  sectionTitle: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(10),
    paddingLeft: rs(4),
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rs(18),
    paddingHorizontal: rs(16),
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: rs(14),
    width: rs(22),
  },
  settingLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginRight: rs(8),
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(24),
    padding: rs(24),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(20),
    marginBottom: rs(24),
    paddingHorizontal: rs(10),
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(8),
  },
  stepperButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(8),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueDisplay: {
    width: rs(100),
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: rs(12),
  },
  valueDisplayText: {
    fontSize: rs(18),
    fontWeight: '600',
    color: '#111827',
  },
  unitText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginBottom: rs(24),
  },
  saveButton: {
    backgroundColor: '#38BDF8',
    width: '100%',
    paddingVertical: rs(16),
    borderRadius: rs(24),
    alignItems: 'center',
    marginTop: rs(8),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default JobPaymentDefaultsScreen;
