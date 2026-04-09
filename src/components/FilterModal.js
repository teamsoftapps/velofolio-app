import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BottomSheetModal from './BottomSheetModal';
import colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

const STATUS_OPTIONS = ['Active', 'Inactive', 'Lead', 'Archived'];
const LEAD_SOURCES = ['Website', 'Referral', 'Instagram', 'Facebook', 'Walk-in'];
const EVENT_TYPES = ['Wedding', 'Corporate', 'Pre-wedding', 'Birthday', 'Other'];
const PAYMENT_STATUS = ['Paid', 'Pending', 'Overdue'];
const AVAILABLE_MEMBERS = ['Sarah Johnson', 'Anna David', 'John Doe', 'Jane Smith', 'Alex Reeds'];

export default function FilterModal({ visible, onClose, onApply }) {
  // State for selections matching the screenshot defaults
  const [status, setStatus] = useState('Active');
  const [teamMembers, setTeamMembers] = useState(['Sarah Johnson', 'Anna David']);
  const [leadSource, setLeadSource] = useState('Website');
  const [eventType, setEventType] = useState('Wedding');
  const [paymentStatus, setPaymentStatus] = useState('Paid');
  const [showDropdown, setShowDropdown] = useState(false);

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [activePicker, setActivePicker] = useState(null); // 'from' or 'to'

  const formatDate = (date) => {
    if (!date) return null;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const toggleMember = (member) => {
    if (teamMembers.includes(member)) {
      setTeamMembers(teamMembers.filter(m => m !== member));
    } else {
      setTeamMembers([...teamMembers, member]);
    }
  };

  const removeMember = (memberToRemove) => {
    setTeamMembers(teamMembers.filter(m => m !== memberToRemove));
  };

  const renderChip = (label, isSelected, onPress) => {
    return (
      <TouchableOpacity
        key={label}
        style={[styles.chip, isSelected && styles.chipSelected]}
        onPress={() => onPress(label)}
        activeOpacity={0.7}
      >
        <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetModal visible={visible} onClose={onClose} title="Filter">
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        {/* STATUS */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Status</Text>
          <View style={styles.chipRow}>
            {STATUS_OPTIONS.map(opt => renderChip(opt, status === opt, setStatus))}
          </View>
        </View>

        {/* ASSIGNED TEAM / MEMBER */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Assigned Team / Member</Text>
          <TouchableOpacity 
            style={styles.dropdownToggle} 
            activeOpacity={0.8}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>Choose</Text>
            <Feather name={showDropdown ? "chevron-up" : "chevron-down"} size={18} color="#9CA4AF" />
          </TouchableOpacity>

          {showDropdown && (
            <View style={styles.dropdownList}>
              {AVAILABLE_MEMBERS.map(member => (
                <TouchableOpacity 
                  key={member} 
                  style={styles.dropdownItem}
                  onPress={() => toggleMember(member)}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    teamMembers.includes(member) && styles.dropdownItemTextSelected
                  ]}>
                    {member}
                  </Text>
                  {teamMembers.includes(member) && (
                    <Ionicons name="checkmark" size={18} color={colors.blueAccent || '#00B1FF'} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.selectedMembersRow}>
            {teamMembers.map(member => (
              <View key={member} style={styles.memberPill}>
                <Text style={styles.memberPillText}>{member}</Text>
                <TouchableOpacity onPress={() => removeMember(member)}>
                  <Ionicons name="close" size={14} color="#FFF" style={styles.memberPillClose} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* LEAD SOURCE */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Lead Source</Text>
          <View style={styles.chipRow}>
            {LEAD_SOURCES.map(opt => renderChip(opt, leadSource === opt, setLeadSource))}
          </View>
        </View>

        {/* EVENT TYPE */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Event Type</Text>
          <View style={styles.chipRow}>
            {EVENT_TYPES.map(opt => renderChip(opt, eventType === opt, setEventType))}
          </View>
        </View>

        {/* DATE RANGE */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Date Range</Text>
          <View style={styles.dateRow}>
            <TouchableOpacity 
              style={styles.dateInputBox}
              onPress={() => setActivePicker('from')}
            >
              <Text style={[styles.datePlaceholder, fromDate && { color: '#374151' }]}>
                {formatDate(fromDate) || 'From'}
              </Text>
              <Feather name="calendar" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dateInputBox}
              onPress={() => setActivePicker('to')}
            >
              <Text style={[styles.datePlaceholder, toDate && { color: '#374151' }]}>
                {formatDate(toDate) || 'To'}
              </Text>
              <Feather name="calendar" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {activePicker === 'from' && (
            <DateTimePicker
              value={fromDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setActivePicker(null);
                if (selectedDate) setFromDate(selectedDate);
              }}
            />
          )}

          {activePicker === 'to' && (
            <DateTimePicker
              value={toDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setActivePicker(null);
                if (selectedDate) setToDate(selectedDate);
              }}
            />
          )}
        </View>

        {/* PAYMENT STATUS */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Payment Status</Text>
          <View style={styles.chipRow}>
            {PAYMENT_STATUS.map(opt => renderChip(opt, paymentStatus === opt, setPaymentStatus))}
          </View>
        </View>

        <View style={{ height: responsiveHeight(10) }} /> {/* Bottom padding */}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={onApply}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: responsiveWidth(5),
    maxHeight: responsiveHeight(75), // Allow scrolling if data gets too long
    marginBottom: responsiveHeight(2),
  },
  section: {
    marginBottom: responsiveHeight(2.5),
  },
  sectionLabel: {
    fontSize: responsiveFontSize(1.7),
    color: '#6B7280', // Grey label text
    marginBottom: 8,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  chipSelected: {
    borderColor: colors.blueAccent || '#00B1FF',
  },
  chipText: {
    fontSize: responsiveFontSize(1.6),
    color: '#374151',
    fontWeight: '500',
  },
  chipTextSelected: {
    // Optionally make selected text dark or a specific color, but screenshot shows it stays dark
    color: '#111827',
  },
  dropdownToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  dropdownText: {
    color: '#9CA3AF',
    fontSize: responsiveFontSize(1.7),
  },
  dropdownList: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 10,
    overflow: 'hidden',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  dropdownItemText: {
    fontSize: responsiveFontSize(1.7),
    color: '#374151',
  },
  dropdownItemTextSelected: {
    color: colors.blueAccent || '#00B1FF',
    fontWeight: '600',
  },
  selectedMembersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  memberPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blueAccent || '#00B1FF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
  },
  memberPillText: {
    color: '#FFF',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
  },
  memberPillClose: {
    marginLeft: 2,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  dateInputBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  datePlaceholder: {
    color: '#9CA3AF',
    fontSize: responsiveFontSize(1.6),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(2.5),
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#F3F4F6',
    marginTop: responsiveHeight(1),
  },
  applyButton: {
    backgroundColor: colors.blueAccent || '#00B1FF',
    width: '100%',
    paddingVertical: responsiveHeight(1.8),
    borderRadius: responsiveWidth(12),
    alignItems: 'center',
    marginBottom: responsiveHeight(1),
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  cancelButton: {
    width: '100%',
    paddingVertical: responsiveHeight(1.8),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(12),

    borderColor: '#E5E7EB',
  },
  cancelButtonText: {
    color: '#6B7280',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
});
