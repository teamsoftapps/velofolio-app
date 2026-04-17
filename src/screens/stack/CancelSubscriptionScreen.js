import React from 'react';
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

const CancelSubscriptionScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

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
        
        <Typography style={styles.pageTitle}>Cancel Subscription</Typography>
        <Typography style={styles.pageSubtitle}>
          Your plan will remain active until <Typography style={styles.boldText}>Nov 28, 2025</Typography>. After that, you'll lose access to premium features.
        </Typography>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Current Plan:</Typography>
            <Typography style={styles.detailValue}>PRO Studio</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Next Billing Date</Typography>
            <Typography style={styles.detailValueBlack}>Nov 28, 2025</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Renewal Amount</Typography>
            <Typography style={styles.detailValueBlack}>$49/month</Typography>
          </View>
        </View>

        <View style={styles.pauseBox}>
          <Typography style={styles.pauseTitle}>Pause Subscription</Typography>
          <Typography style={styles.pauseSubtitle}>Pause for 1 month and resume anytime.</Typography>
          <TouchableOpacity style={styles.pauseAction}>
            <Typography style={styles.pauseActionText}>Pause Instead</Typography>
          </TouchableOpacity>
        </View>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.confirmButton} 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('HelpUsImprove')}
        >
          <Typography style={styles.confirmButtonText}>Confirm Cancellation</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.keepButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
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
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    marginBottom: rs(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  detailLabel: {
    fontSize: rs(15),
    color: '#6B7280',
  },
  detailValue: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#38BDF8',
  },
  detailValueBlack: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
  },
  pauseBox: {
    backgroundColor: '#F3F4F6', // Lighter grey than mock but standard
    borderRadius: rs(16),
    padding: rs(20),
    alignItems: 'center',
  },
  pauseTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  pauseSubtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    marginBottom: rs(16),
  },
  pauseAction: {
    paddingVertical: rs(4),
  },
  pauseActionText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#38BDF8',
    textDecorationLine: 'underline',
  },
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  confirmButton: {
    backgroundColor: '#EF4444', // Red
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

export default CancelSubscriptionScreen;
