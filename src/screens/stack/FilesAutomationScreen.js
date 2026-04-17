import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FilesAutomationScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [prefs, setPrefs] = useState({
    clientUploads: true,
    autoInvoice: true,
    autoReceipt: true, // Mockup has "Auto-send Invoice Email" twice, corrected second to avoid duplicate keys logically
    autoRemind: true,
  });

  const [reminderActive, setReminderActive] = useState(false);
  const [reminderDays, setReminderDays] = useState(3);

  const [fileSizeActive, setFileSizeActive] = useState(false);
  const [fileSizeMB, setFileSizeMB] = useState(50);

  const toggleSwitch = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderToggleRow = (label, key, isLast) => (
    <View style={[styles.toggleRow, !isLast && styles.rowBorder]}>
      <Typography style={styles.toggleLabel}>{label}</Typography>
      <Switch
        trackColor={{ false: '#E5E7EB', true: '#38BDF8' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#E5E7EB"
        onValueChange={() => toggleSwitch(key)}
        value={prefs[key]}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
      />
    </View>
  );

  const renderClickableRow = (label, value, onPress, isLast) => (
    <TouchableOpacity 
      style={[styles.clickableRow, !isLast && styles.rowBorder]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Typography style={styles.toggleLabel}>{label}</Typography>
      <View style={styles.rightContent}>
        <Typography style={styles.valueText}>{value}</Typography>
        <Feather name="chevron-right" size={rs(18)} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Files & Automation</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.sectionHeader}>Files & Automation</Typography>
        
        <View style={styles.sectionCard}>
          {renderToggleRow('Allow Client Uploads', 'clientUploads')}
          {renderToggleRow('Auto-send Invoice Email', 'autoInvoice')}
          {renderToggleRow('Auto-send Invoice Email', 'autoReceipt')}
          {renderToggleRow('Auto-remind overdue', 'autoRemind')}
          {renderClickableRow('Reminder After', `${reminderDays} days`, () => setReminderActive(true))}
          {renderClickableRow('Max File Upload Size', `${fileSizeMB}MB`, () => setFileSizeActive(true), true)}
        </View>

        <View style={{ height: rh(100) }} />
      </ScrollView>

      {/* Reminder After Modal */}
      <Modal visible={reminderActive} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Typography style={styles.modalTitle}>Reminder After</Typography>
            <Typography style={styles.modalDesc}>
              Set how many days after the invoice due date an automatic reminder should be sent.
            </Typography>

            <View style={styles.stepperContainer}>
              <TouchableOpacity 
                style={styles.stepperBtn} 
                onPress={() => setReminderDays(prev => Math.max(1, prev - 1))}
              >
                <Feather name="minus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
              <View style={styles.stepperValueBox}>
                <Typography style={styles.stepperValue}>{reminderDays}</Typography>
              </View>
              <TouchableOpacity 
                style={styles.stepperBtn} 
                onPress={() => setReminderDays(prev => prev + 1)}
              >
                <Feather name="plus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>
            <Typography style={styles.stepperLabel}>Days</Typography>

            <TouchableOpacity style={styles.saveButton} onPress={() => setReminderActive(false)}>
              <Typography style={styles.saveButtonText}>Save</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Max File Size Modal */}
      <Modal visible={fileSizeActive} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Typography style={styles.modalTitle}>Max File Upload Size</Typography>
            <Typography style={styles.modalDesc}>
              Limit the maximum file size clients can upload. Use the plus/minus buttons to adjust.
            </Typography>

            <View style={styles.stepperContainer}>
              <TouchableOpacity 
                style={styles.stepperBtn} 
                onPress={() => setFileSizeMB(prev => Math.max(1, prev - 5))}
              >
                <Feather name="minus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
              <View style={[styles.stepperValueBox, { width: rs(80) }]}>
                <Typography style={styles.stepperValue}>{fileSizeMB}</Typography>
              </View>
              <TouchableOpacity 
                style={styles.stepperBtn} 
                onPress={() => setFileSizeMB(prev => Math.max(1, prev + 5))}
              >
                <Feather name="plus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>
            <Typography style={styles.stepperLabel}>MB</Typography>

            <TouchableOpacity style={styles.saveButton} onPress={() => setFileSizeActive(false)}>
              <Typography style={styles.saveButtonText}>Save</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  sectionHeader: {
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
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rs(16),
    paddingHorizontal: rs(16),
  },
  clickableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rs(18),
    paddingHorizontal: rs(16),
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  toggleLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
    flex: 1,
    paddingRight: rs(16),
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginRight: rs(8),
  },
  
  // Modal specifics
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    padding: rs(24),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  modalDesc: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(22),
    marginBottom: rs(24),
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(8),
  },
  stepperBtn: {
    width: rs(44),
    height: rs(44),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperValueBox: {
    width: rs(60),
    height: rs(44),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: rs(12),
  },
  stepperValue: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
  },
  stepperLabel: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginBottom: rs(24),
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(14),
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default FilesAutomationScreen;
