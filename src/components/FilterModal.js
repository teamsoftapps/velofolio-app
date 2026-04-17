import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { rs, rh } from '../utils/dimensions';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const FilterModal = ({
  visible,
  onClose,
  onApply,
  // States
  status,
  setStatus,
  team,
  setTeam,
  leadSource,
  setLeadSource,
  eventType,
  setEventType,
  paymentStatus,
  setPaymentStatus,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
}) => {
  const statusOptions = ['Active', 'Inactive', 'Lead', 'Archived'];
  const leadSourceOptions = ['Website', 'Referral', 'Instagram', 'Facebook', 'Walk-in'];
  const eventTypeOptions = ['Wedding', 'Corporate', 'Pre-wedding', 'Birthday', 'Other'];
  const paymentOptions = ['Paid', 'Pending', 'Overdue'];

  const renderChip = (label, isSelected, onPress) => (
    <TouchableOpacity
      key={label}
      style={[styles.chip, isSelected && styles.chipSelected]}
      onPress={onPress}
    >
      <Typography style={[styles.chipText, isSelected && styles.chipTextSelected]}>
        {label}
      </Typography>
    </TouchableOpacity>
  );

  const removeTeamMember = (name) => {
    setTeam(team.filter(m => m !== name));
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <View style={styles.content}>
          <View style={styles.header}>
            <Typography style={styles.headerTitle}>Filter</Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Feather name="x" size={rs(20)} color="#111827" />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Status Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Status</Typography>
              <View style={styles.chipGrid}>
                {statusOptions.map(opt => renderChip(opt, status === opt, () => setStatus(opt)))}
              </View>
            </View>

            {/* Assigned Team / Member Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Assigned Team / Member</Typography>
              <TouchableOpacity style={styles.dropdown}>
                <Typography style={styles.dropdownText}>Choose</Typography>
                <Feather name="chevron-down" size={rs(20)} color="#9CA3AF" />
              </TouchableOpacity>
              <View style={styles.tagGrid}>
                {team.map(member => (
                  <View key={member} style={styles.tag}>
                    <Typography style={styles.tagText}>{member}</Typography>
                    <TouchableOpacity onPress={() => removeTeamMember(member)}>
                      <Feather name="x" size={rs(14)} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

            {/* Lead Source Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Lead Source</Typography>
              <View style={styles.chipGrid}>
                {leadSourceOptions.map(opt => renderChip(opt, leadSource === opt, () => setLeadSource(opt)))}
              </View>
            </View>

            {/* Event Type Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Event Type</Typography>
              <View style={styles.chipGrid}>
                {eventTypeOptions.map(opt => renderChip(opt, eventType === opt, () => setEventType(opt)))}
              </View>
            </View>

            {/* Date Range Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Date Range</Typography>
              <View style={styles.dateRow}>
                <View style={styles.dateInput}>
                  <Typography style={styles.dateLabel}>From</Typography>
                  <Feather name="calendar" size={rs(18)} color="#9CA3AF" />
                </View>
                <View style={styles.dateInput}>
                  <Typography style={styles.dateLabel}>To</Typography>
                  <Feather name="calendar" size={rs(18)} color="#9CA3AF" />
                </View>
              </View>
            </View>

            {/* Payment Status Section */}
            <View style={styles.section}>
              <Typography style={styles.sectionLabel}>Payment Status</Typography>
              <View style={styles.chipGrid}>
                {paymentOptions.map(opt => renderChip(opt, paymentStatus === opt, () => setPaymentStatus(opt)))}
              </View>
            </View>

            <View style={{ height: rh(20) }} />
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.applyBtn} onPress={onApply}>
              <Typography style={styles.applyBtnText}>Apply</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(30),
    borderTopRightRadius: rs(30),
    maxHeight: SCREEN_HEIGHT * 0.9,
    paddingTop: rs(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingBottom: rs(15),
  },
  headerTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
  },
  closeBtn: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(20),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(40),
  },
  section: {
    marginTop: rs(20),
  },
  sectionLabel: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(12),
  },
  chipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    paddingHorizontal: rs(16),
    paddingVertical: rs(10),
    borderRadius: rs(10),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: rs(10),
    marginBottom: rs(10),
    backgroundColor: '#FFFFFF',
  },
  chipSelected: {
    borderColor: '#38BDF8',
  },
  chipText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  chipTextSelected: {
    color: '#38BDF8',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#F9FAFB',
    marginBottom: rs(12),
  },
  dropdownText: {
    fontSize: rs(15),
    color: '#9CA3AF',
  },
  tagGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#38BDF8',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(10),
    marginRight: rs(8),
    marginBottom: rs(8),
  },
  tagText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#FFFFFF',
    marginRight: rs(8),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 0.48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#F9FAFB',
  },
  dateLabel: {
    fontSize: rs(15),
    color: '#9CA3AF',
  },
  footer: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rh(20),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  applyBtn: {
    height: rs(54),
    backgroundColor: '#38BDF8',
    borderRadius: rs(16),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  applyBtnText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default FilterModal;
