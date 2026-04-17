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

const SwitchToStarterScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConfirm = () => {
    setShowSuccessModal(true);
  };

  const handleGoToDashboard = () => {
    setShowSuccessModal(false);
    navigation.navigate('MainTabs'); 
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
        
        <Typography style={styles.pageTitle}>Switch to Starter?</Typography>
        <Typography style={styles.pageSubtitle}>
          Your plan will change to Starter on <Typography style={styles.boldText}>Nov 28, 2025</Typography>. You'll keep <Typography style={styles.boldText}>PRO</Typography> access until then.
        </Typography>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Starter Plan:</Typography>
            <Typography style={styles.detailValueBold}>$14/month</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Next charge after Nov 28:</Typography>
            <Typography style={styles.detailValueBold}>$14</Typography>
          </View>
        </View>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.confirmButton} 
          activeOpacity={0.9}
          onPress={handleConfirm}
        >
          <Typography style={styles.confirmButtonText}>Confirm</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.keepButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Typography style={styles.keepButtonText}>Keep PRO Plan</Typography>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal visible={showSuccessModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.successCard}>
            <View style={styles.checkCircle}>
              <Feather name="check" size={rs(40)} color="#EAB308" />
            </View>
            
            <Typography style={styles.successTitle}>Plan Updated</Typography>
            
            <Typography style={styles.successBody}>
              Your subscription will change to <Typography style={styles.successHighlight}>Starter</Typography> on <Typography style={styles.boldText}>Nov 28, 2025</Typography>. You can upgrade again anytime.
            </Typography>

            <TouchableOpacity style={styles.dashboardButton} onPress={handleGoToDashboard}>
              <Typography style={styles.dashboardButtonText}>Go to Dashboard</Typography>
            </TouchableOpacity>

            <Typography style={styles.modalFooterText}>
              You can upgrade again anytime.
            </Typography>
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
    marginBottom: rs(12),
  },
  pageSubtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(24),
  },
  boldText: {
    fontWeight: '700',
    color: '#111827',
  },
  detailsContainer: {
    marginTop: rs(8),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  detailLabel: {
    fontSize: rs(15),
    color: '#9CA3AF',
    marginRight: rs(8),
  },
  detailValueBold: {
    fontSize: rs(15),
    fontWeight: '700',
    color: '#111827',
  },
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  confirmButton: {
    backgroundColor: '#38BDF8', // Blue
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
  keepButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F87171', // Red
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  keepButtonText: {
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
  successCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(24),
    padding: rs(24),
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
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  successBody: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(20),
    marginBottom: rs(24),
  },
  successHighlight: {
    color: '#38BDF8',
    fontWeight: '600',
  },
  dashboardButton: {
    backgroundColor: '#38BDF8',
    width: '100%',
    paddingVertical: rs(16),
    borderRadius: rs(24),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  dashboardButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  modalFooterText: {
    fontSize: rs(12),
    color: '#9CA3AF',
    textAlign: 'center',
  },
});

export default SwitchToStarterScreen;
