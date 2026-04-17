import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const UpgradeBusinessScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessModalVisible(true);
    }, 1500);
  };

  const handleGoDashboard = () => {
    setSuccessModalVisible(false);
    navigation.navigate('MainTabs'); 
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.header, { paddingTop: insets.top + rs(10) }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={rs(24)} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.pageTitle}>Upgrade to Business?</Typography>
        <Typography style={styles.pageSubtitle}>
          You'll get immediate access to all Business features.
        </Typography>

        <View style={styles.chargeBox}>
          <Typography style={styles.chargeAmount}>$30.00</Typography>
          <Typography style={styles.chargeLabel}>TODAY'S CHARGE</Typography>
        </View>

        <Typography style={styles.proratedText}>
          (Prorated difference for the remaining 18 days)
        </Typography>

        <View style={styles.planDetailsCard}>
          <View style={styles.badgeWrapper}>
            <View style={styles.planBadge}>
              <Feather name="zap" size={rs(12)} color="#111827" style={{marginRight: rs(4)}} />
              <Typography style={styles.planBadgeText}>BUSINESS PLAN</Typography>
            </View>
          </View>
          
          <View style={styles.rowItem}>
            <Typography style={styles.rowLabel}>Next Billing Date</Typography>
            <Typography style={styles.rowValue}>Nov 28, 2025</Typography>
          </View>
          <View style={[styles.rowItem, styles.noMargin]}>
            <Typography style={styles.rowLabel}>Next renewal</Typography>
            <Typography style={styles.rowValue}>$59/month</Typography>
          </View>
        </View>

        <Typography style={styles.bottomNote}>
          You'll only pay the difference for the remaining time in your billing cycle.
        </Typography>

        <View style={styles.bottomActions}>
          <TouchableOpacity 
            style={styles.confirmButton} 
            activeOpacity={0.9}
            onPress={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Typography style={styles.confirmButtonText}>Confirm Upgrade</Typography>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.cancelButton} 
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}
            disabled={isLoading}
          >
            <Typography style={styles.cancelButtonText}>Cancel</Typography>
          </TouchableOpacity>
        </View>

        <View style={{ height: rh(60) }} />
      </ScrollView>


      {/* Success Modal */}
      <Modal
        visible={successModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModalCard}>
            
            <View style={styles.emojiContainer}>
              <Typography style={styles.emojiText}>🎉</Typography>
            </View>
            
            <Typography style={styles.modalTitle}>Welcome to Business</Typography>
            <Typography style={styles.modalDesc}>
              Your plan has been upgraded successfully. You now have unlimited team members, storage, and jobs.
            </Typography>

            <TouchableOpacity 
              style={styles.dashboardButton}
              activeOpacity={0.9}
              onPress={handleGoDashboard}
            >
              <Typography style={styles.dashboardButtonText}>Go to Dashboard</Typography>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: rs(20),
    marginBottom: rs(20),
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
    lineHeight: rs(22),
    marginBottom: rs(30),
  },
  chargeBox: {
    backgroundColor: '#ECFDF5', // Light green
    borderRadius: rs(16),
    paddingVertical: rs(24),
    alignItems: 'center',
    marginBottom: rs(16),
  },
  chargeAmount: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(4),
  },
  chargeLabel: {
    fontSize: rs(13),
    color: '#9CA3AF',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  proratedText: {
    textAlign: 'center',
    fontSize: rs(14),
    color: '#111827',
    fontWeight: '500',
    marginBottom: rs(32),
  },
  planDetailsCard: {
    borderWidth: 1,
    borderColor: '#F59E0B', // Yellow border
    borderRadius: rs(16),
    padding: rs(20),
    paddingTop: rs(30), // Extra space for top badge
    marginBottom: rs(24),
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  badgeWrapper: {
    position: 'absolute',
    top: -rs(12),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  planBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
    paddingHorizontal: rs(12),
    paddingVertical: rs(4),
    borderRadius: rs(16),
  },
  planBadgeText: {
    fontSize: rs(12),
    fontWeight: '700',
    color: '#111827',
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: rs(16),
  },
  noMargin: {
    marginBottom: 0,
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  rowLabel: {
    fontSize: rs(15),
    color: '#6B7280',
  },
  rowValue: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
  },
  bottomNote: {
    textAlign: 'center',
    fontSize: rs(14),
    color: '#9CA3AF',
    lineHeight: rs(20),
    paddingHorizontal: rs(20),
  },
  bottomActions: {
    paddingTop: rs(16),
    backgroundColor: 'transparent',
  },
  confirmButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },

  /* Modal Styles */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModalCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(24),
    padding: rs(30),
    alignItems: 'center',
  },
  emojiContainer: {
    width: rs(80),
    height: rs(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  emojiText: {
    fontSize: rs(48),
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(22),
    marginBottom: rs(24),
  },
  dashboardButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(14),
    width: '100%',
    alignItems: 'center',
  },
  dashboardButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default UpgradeBusinessScreen;
