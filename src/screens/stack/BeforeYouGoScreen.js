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

const BeforeYouGoScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [selectedReason, setSelectedReason] = useState('Other');

  const REASONS = [
    'I no longer need the app',
    'I found a better alternative',
    'The app is too expensive',
    'I experienced technical issues',
    'Missing features I need',
    "I'm concerned about privacy",
    'Other',
  ];

  const CustomCheckbox = ({ label, isSelected, onSelect }) => (
    <TouchableOpacity style={styles.checkboxRow} onPress={onSelect} activeOpacity={0.7}>
      <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
        {isSelected && <Feather name="check" size={rs(12)} color="#FFFFFF" />}
      </View>
      <Typography style={styles.checkboxLabel}>{label}</Typography>
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
        
        <Typography style={styles.pageTitle}>Before you go...</Typography>
        <Typography style={styles.pageSubtitle}>
          Why did you decide to delete your account?
        </Typography>

        <View style={styles.optionsContainer}>
          {REASONS.map((reason, index) => (
            <CustomCheckbox
              key={index}
              label={reason}
              isSelected={selectedReason === reason}
              onSelect={() => setSelectedReason(reason)}
            />
          ))}
        </View>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.continueButton} 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ConfirmAccountDeletion')}
        >
          <Typography style={styles.continueButtonText}>Continue</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.goBackButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Typography style={styles.goBackButtonText}>Go Back</Typography>
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
  optionsContainer: {
    marginTop: rs(8),
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  checkbox: {
    width: rs(20),
    height: rs(20),
    borderRadius: rs(4),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  checkboxLabel: {
    fontSize: rs(15),
    color: '#111827',
  },
  
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  continueButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  goBackButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },
});

export default BeforeYouGoScreen;
