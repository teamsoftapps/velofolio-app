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

const CurrentPlanScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Current Plan</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.planCard}>
          <View style={styles.planCardHeader}>
            <View>
              <Typography style={styles.planTitle}>PRO Studio</Typography>
              <View style={styles.priceRow}>
                <Typography style={styles.priceAmount}>$49</Typography>
                <Typography style={styles.pricePeriod}>/month</Typography>
              </View>
            </View>
            <View style={styles.activeBadge}>
              <Feather name="check-circle" size={rs(12)} color="#CA8A04" style={{ marginRight: rs(4) }} />
              <Typography style={styles.activeBadgeText}>Active</Typography>
            </View>
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressLabelRow}>
              <Typography style={styles.progressLabel}>Team Members</Typography>
              <Typography style={styles.progressValue}><Typography style={styles.progressValueBold}>12</Typography> of 20 member</Typography>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '60%' }]} />
            </View>
          </View>

          <View style={styles.benefitsContainer}>
            <Typography style={styles.benefitsTitle}>Benefits</Typography>
            <View style={styles.benefitItem}>
              <Feather name="check" size={rs(18)} color="#111827" style={styles.benefitIcon} />
              <Typography style={styles.benefitText}>20 Team Members</Typography>
            </View>
            <View style={styles.benefitItem}>
              <Feather name="check" size={rs(18)} color="#111827" style={styles.benefitIcon} />
              <Typography style={styles.benefitText}>100GB Storage</Typography>
            </View>
            <View style={styles.benefitItem}>
              <Feather name="check" size={rs(18)} color="#111827" style={styles.benefitIcon} />
              <Typography style={styles.benefitText}>Limited Jobs</Typography>
            </View>
          </View>
        </View>

        <View style={styles.bottomActions}>
          <TouchableOpacity 
            style={styles.upgradeButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('UpgradePlan')}
          >
            <Typography style={styles.upgradeButtonText}>Upgrade Plan</Typography>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.cancelButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CancelSubscription')}
          >
            <Typography style={styles.cancelButtonText}>Cancel Subscription</Typography>
          </TouchableOpacity>
        </View>
        
        <View style={{ height: rh(40) }} />
      </ScrollView>
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
    flexGrow: 1,
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: rs(40),
  },
  planCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rs(20),
  },
  planTitle: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#38BDF8', // Light blue seen in mockup
    marginBottom: rs(4),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceAmount: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#111827',
  },
  pricePeriod: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginLeft: rs(4),
  },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3', // Light yellow bg
    paddingHorizontal: rs(10),
    paddingVertical: rs(6),
    borderRadius: rs(20),
  },
  activeBadgeText: {
    fontSize: rs(12),
    fontWeight: '600',
    color: '#111827',
  },
  progressSection: {
    marginBottom: rs(24),
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(10),
  },
  progressLabel: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  progressValue: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  progressValueBold: {
    color: '#111827',
    fontWeight: '600',
  },
  progressBarBg: {
    height: rs(6),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(3),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: rs(3),
  },
  benefitsContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    padding: rs(16),
  },
  benefitsTitle: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginBottom: rs(12),
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(10),
  },
  benefitIcon: {
    marginRight: rs(10),
  },
  benefitText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  bottomActions: {
    marginTop: 'auto',
  },
  upgradeButton: {
    backgroundColor: '#38BDF8', // Blue
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(16),
  },
  upgradeButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },
});

export default CurrentPlanScreen;
