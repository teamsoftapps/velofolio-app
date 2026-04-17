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

const REASONS = [
  { id: 'expensive', label: 'Too expensive' },
  { id: 'usage', label: 'Not using it enough' },
  { id: 'alternative', label: 'Switching to another tool' },
  { id: 'features', label: 'Missing features' },
  { id: 'other', label: 'Other' },
];

const HelpUsImproveScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedReason, setSelectedReason] = useState(null);

  const CustomCheckbox = ({ isSelected, onPress }) => (
    <TouchableOpacity 
      style={[styles.checkbox, isSelected && styles.checkboxSelected]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {isSelected && <Feather name="check" size={rs(14)} color="#FFFFFF" />}
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.pageTitle}>Help Us Improve</Typography>
        <Typography style={styles.pageSubtitle}>
          What’s the main reason for canceling?
        </Typography>

        <View style={styles.reasonsContainer}>
          {REASONS.map((reason) => (
            <TouchableOpacity 
              key={reason.id} 
              style={styles.reasonRow}
              onPress={() => setSelectedReason(reason.id)}
              activeOpacity={0.7}
            >
              <View 
                style={[
                  styles.checkbox, 
                  selectedReason === reason.id && styles.checkboxSelected
                ]}
              >
                {selectedReason === reason.id && <Feather name="check" size={rs(14)} color="#FFFFFF" />}
              </View>
              <Typography style={styles.reasonLabel}>{reason.label}</Typography>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={[styles.confirmButton, !selectedReason && styles.confirmButtonDisabled]} 
          activeOpacity={0.9}
          onPress={() => selectedReason && navigation.navigate('AffordableOptions')}
          disabled={!selectedReason}
        >
          <Typography style={styles.confirmButtonText}>Confirm Cancellation</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.keepButton} 
          activeOpacity={0.9}
          onPress={() => navigation.popToTop()} // Navigate back to main plan screen or home
        >
          <Typography style={styles.keepButtonText}>Keep My Plan</Typography>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  pageTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  pageSubtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    marginBottom: rs(24),
  },
  reasonsContainer: {
    marginTop: rs(8),
  },
  reasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  checkbox: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  checkboxSelected: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  reasonLabel: {
    fontSize: rs(16),
    color: '#111827',
  },
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  confirmButton: {
    backgroundColor: '#F87171', // Lighter red seen in mock for "unselected" state or similar
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  confirmButtonDisabled: {
    backgroundColor: '#FCA5A5', // Very light red/pink when disabled
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  keepButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  keepButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },
});

export default HelpUsImproveScreen;
