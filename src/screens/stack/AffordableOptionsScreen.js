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

const AffordableOptionsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConfirmCancellation = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    
    // Auto-dismiss and navigate back after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
      navigation.navigate('Settings'); // Adjust to your preferred destination
    }, 3000);
  };

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
        
        <Typography style={styles.pageTitle}>Looking for a More Affordable Option?</Typography>
        <Typography style={styles.pageSubtitle}>
          You can switch to a lower plan and keep access to essential features.
        </Typography>

        <View style={styles.planCard}>
          <View style={styles.planCardHeader}>
            <View style={styles.starterBadge}>
              <Typography style={styles.starterBadgeText}>STARTER</Typography>
            </View>
            <View style={styles.priceRow}>
              <Typography style={styles.priceAmount}>$14</Typography>
              <Typography style={styles.pricePeriod}>/month</Typography>
            </View>
          </View>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Feather name="check" size={rs(16)} color="#EAB308" style={styles.featureIcon} />
              <Typography style={styles.featureText}>5 Team Members</Typography>
            </View>
            <View style={styles.featureItem}>
              <Feather name="check" size={rs(16)} color="#EAB308" style={styles.featureIcon} />
              <Typography style={styles.featureText}>50GB Storage</Typography>
            </View>
            <View style={styles.featureItem}>
              <Feather name="check" size={rs(16)} color="#EAB308" style={styles.featureIcon} />
              <Typography style={styles.featureText}>Limited Jobs</Typography>
            </View>
          </View>
        </View>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.switchButton} 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SwitchToStarter')}
        >
          <Typography style={styles.switchButtonText}>Switch to Starter</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.continueButton} 
          activeOpacity={0.9}
          onPress={() => setShowConfirmModal(true)}
        >
          <Typography style={styles.continueButtonText}>Continue Cancellation</Typography>
        </TouchableOpacity>
      </View>

      {/* Confirmation Modal */}
      <Modal visible={showConfirmModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.warningIconContainer}>
              <Feather name="alert-triangle" size={rs(40)} color="#111827" />
            </View>
            
            <Typography style={styles.modalTitle}>Confirm Cancellation</Typography>
            
            <Typography style={styles.modalBody}>
              Your <Typography style={styles.modalHighlight}>PRO Studio</Typography> plan will remain active until <Typography style={styles.boldText}>Nov 28, 2025</Typography>. After that, your account will move to the Free plan.
            </Typography>

            <TouchableOpacity style={styles.modalConfirmBtn} onPress={handleConfirmCancellation}>
              <Typography style={styles.modalConfirmText}>Confirm Cancellation</Typography>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalKeepBtn} onPress={() => setShowConfirmModal(false)}>
              <Typography style={styles.modalKeepText}>Keep My Plan</Typography>
            </TouchableOpacity>

            <Typography style={styles.modalFooterText}>
              You can reactivate anytime before your plan expires.
            </Typography>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal visible={showSuccessModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.successCard}>
            <View style={styles.checkCircle}>
              <Feather name="check" size={rs(40)} color="#EAB308" />
            </View>
            <Typography style={styles.successTitle}>Subscription Canceled</Typography>
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
    lineHeight: rs(22),
  },
  planCard: {
    backgroundColor: '#EFFDF5', // Very light green seen in mock
    borderRadius: rs(16),
    padding: rs(20),
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  planCardHeader: {
    marginBottom: rs(16),
  },
  starterBadge: {
    backgroundColor: '#38BDF8',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(8),
    alignSelf: 'flex-start',
    marginBottom: rs(10),
  },
  starterBadgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceAmount: {
    fontSize: rs(32),
    fontWeight: '700',
    color: '#111827',
  },
  pricePeriod: {
    fontSize: rs(16),
    color: '#6B7280',
    marginLeft: rs(4),
  },
  featuresList: {
    marginTop: rs(8),
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(10),
  },
  featureIcon: {
    marginRight: rs(10),
  },
  featureText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  switchButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  switchButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F87171',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(24),
    padding: rs(24),
    alignItems: 'center',
  },
  warningIconContainer: {
    marginBottom: rs(16),
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  modalBody: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(20),
    marginBottom: rs(20),
  },
  modalHighlight: {
    color: '#38BDF8',
    fontWeight: '600',
  },
  boldText: {
    fontWeight: '700',
    color: '#111827',
  },
  modalConfirmBtn: {
    backgroundColor: '#EF4444',
    width: '100%',
    paddingVertical: rs(14),
    borderRadius: rs(24),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  modalConfirmText: {
    color: '#FFFFFF',
    fontSize: rs(15),
    fontWeight: '600',
  },
  modalKeepBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    width: '100%',
    paddingVertical: rs(14),
    borderRadius: rs(24),
    alignItems: 'center',
    marginBottom: rs(16),
  },
  modalKeepText: {
    color: '#111827',
    fontSize: rs(15),
    fontWeight: '500',
  },
  modalFooterText: {
    fontSize: rs(12),
    color: '#9CA3AF',
    textAlign: 'center',
  },

  // Success Card
  successCard: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(24),
    padding: rs(40),
    alignItems: 'center',
  },
  checkCircle: {
    width: rs(80),
    height: rs(80),
    borderRadius: rs(40),
    borderWidth: 4,
    borderColor: '#EAB308',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  successTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
});

export default AffordableOptionsScreen;
