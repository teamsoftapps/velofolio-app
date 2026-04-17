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

const PLANS = [
  {
    id: 'starter',
    title: 'Starter',
    price: '$14',
    features: ['5 Team Members', '50GB Storage', 'Limited Jobs'],
  },
  {
    id: 'pro',
    title: 'PRO Studio',
    price: '$29',
    features: ['20 Team Members', '100GB Storage', 'Limited Jobs'],
    isCurrent: true,
  },
  {
    id: 'business',
    title: 'Business',
    price: '$59',
    features: ['Unlimited Team Members', 'Unlimited Storage', 'Unlimited Jobs'],
    isRecommended: true,
  },
];

const UpgradePlanScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [billingCycle, setBillingCycle] = useState('Monthly'); // Monthly or Yearly
  const [selectedPlan, setSelectedPlan] = useState('business');

  const selectedPlanData = PLANS.find(p => p.id === selectedPlan);

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerTextCenter}>
          <Typography style={styles.headerTitle}>Upgrade Your Plan</Typography>
          <Typography style={styles.headerSubtitle}>
            Unlock more features and expand your team as your business grows.
          </Typography>
        </View>

        <View style={styles.toggleContainerCenter}>
          <View style={styles.toggleWrapper}>
            <TouchableOpacity 
              style={[styles.toggleBtn, billingCycle === 'Monthly' && styles.toggleBtnActive]}
              onPress={() => setBillingCycle('Monthly')}
            >
              <Typography style={[styles.toggleBtnText, billingCycle === 'Monthly' && styles.toggleBtnTextActive]}>Monthly</Typography>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, billingCycle === 'Yearly' && styles.toggleBtnActive]}
              onPress={() => setBillingCycle('Yearly')}
            >
              <Typography style={[styles.toggleBtnText, billingCycle === 'Yearly' && styles.toggleBtnTextActive]}>Yearly</Typography>
            </TouchableOpacity>
            
            <View style={styles.saveBadge}>
              <Typography style={styles.saveBadgeText}>SAVE 20%</Typography>
            </View>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {PLANS.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          
          return (
            <TouchableOpacity
              key={plan.id}
              activeOpacity={0.8}
              onPress={() => setSelectedPlan(plan.id)}
              style={[
                styles.planCard,
                isSelected && styles.planCardSelected
              ]}
            >
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                  <Typography style={styles.planTitle}>{plan.title}</Typography>
                  {plan.isCurrent && (
                    <View style={styles.currentBadge}>
                      <Typography style={styles.currentBadgeText}>CURRENT</Typography>
                    </View>
                  )}
                  {plan.isRecommended && (
                    <View style={styles.recommendedBadge}>
                      <Feather name="zap" size={rs(12)} color="#111827" style={{marginRight: rs(4)}} />
                      <Typography style={styles.recommendedBadgeText}>RECOMMENDED</Typography>
                    </View>
                  )}
                </View>
                
                <View style={styles.radioWrapper}>
                  {isSelected ? (
                    <View style={styles.radioInner} />
                  ) : (
                    <View style={styles.radioUnselected} />
                  )}
                </View>
              </View>
              
              <View style={styles.priceRow}>
                <Typography style={styles.planPrice}>{plan.price}</Typography>
                <Typography style={styles.pricePeriod}>/month</Typography>
              </View>

              <View style={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <View key={i} style={styles.featureItem}>
                    <Feather name="check" size={rs(16)} color="#F59E0B" style={styles.checkIcon} />
                    <Typography style={styles.featureText}>{feature}</Typography>
                  </View>
                ))}
              </View>

              {isSelected && plan.id === 'business' && (
                <View style={styles.upgradeBar}>
                  <Typography style={styles.upgradeBarText}>+$30/month from your current plan</Typography>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* Inlined Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity 
            style={styles.upgradeButton} 
            activeOpacity={0.9}
            onPress={() => {
              if (selectedPlan === 'business') {
                navigation.navigate('UpgradeBusiness');
              }
            }}
          >
            <Typography style={styles.upgradeButtonText}>
              Upgrade to {selectedPlanData?.title}
            </Typography>
          </TouchableOpacity>
          <Typography style={styles.footerNote}>You'll be charged the prorated difference today.</Typography>
        </View>

        <View style={{ height: rh(60) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F0FDFA', // Light mint green hint like the mockup
    paddingBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(10),
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
  headerTextCenter: {
    alignItems: 'center',
    paddingHorizontal: rs(40),
    marginBottom: rs(24),
  },
  headerTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(10),
  },
  headerSubtitle: {
    fontSize: rs(14),
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: rs(20),
  },
  toggleContainerCenter: {
    alignItems: 'center',
    marginBottom: rs(10),
  },
  toggleWrapper: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: rs(24),
    borderWidth: 1,
    borderColor: '#111827',
    padding: rs(2),
    position: 'relative',
  },
  toggleBtn: {
    paddingVertical: rs(10),
    paddingHorizontal: rs(24),
    borderRadius: rs(22),
  },
  toggleBtnActive: {
    backgroundColor: '#38BDF8',
  },
  toggleBtnText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  toggleBtnTextActive: {
    color: '#FFFFFF',
  },
  saveBadge: {
    position: 'absolute',
    top: -rs(12),
    right: rs(10),
    backgroundColor: '#F59E0B',
    paddingHorizontal: rs(8),
    paddingVertical: rs(4),
    borderRadius: rs(12),
  },
  saveBadgeText: {
    fontSize: rs(10),
    fontWeight: '700',
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
  },
  planCard: {
    backgroundColor: '#FDFBF7', // slight off-white/beige tone seen in mockup
    borderRadius: rs(16),
    paddingTop: rs(20),
    paddingBottom: rs(20),
    paddingHorizontal: rs(20),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  planCardSelected: {
    borderColor: '#111827', // Dark black border when selected
    borderWidth: 1.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#38BDF8',
    marginRight: rs(10),
  },
  currentBadge: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    paddingHorizontal: rs(8),
    paddingVertical: rs(2),
  },
  currentBadgeText: {
    fontSize: rs(10),
    fontWeight: '600',
    color: '#4B5563',
  },
  recommendedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
    borderRadius: rs(12),
    paddingHorizontal: rs(8),
    paddingVertical: rs(4),
  },
  recommendedBadgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    color: '#111827',
  },
  radioWrapper: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    borderWidth: 1.5,
    borderColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    backgroundColor: 'transparent',
  },
  radioInner: {
    width: rs(12),
    height: rs(12),
    borderRadius: rs(6),
    backgroundColor: '#111827',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: rs(16),
  },
  planPrice: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#111827',
  },
  pricePeriod: {
    fontSize: rs(14),
    color: '#4B5563',
    marginLeft: rs(4),
  },
  featuresList: {},
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(10),
  },
  checkIcon: {
    marginRight: rs(10),
  },
  featureText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  upgradeBar: {
    backgroundColor: '#F59E0B',
    marginHorizontal: -rs(20),
    marginBottom: -rs(20),
    marginTop: rs(20),
    paddingVertical: rs(12),
    alignItems: 'center',
  },
  upgradeBarText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: rs(14),
  },
  bottomActions: {
    paddingTop: rs(20),
    backgroundColor: 'transparent',
  },
  upgradeButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  upgradeButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
  footerNote: {
    textAlign: 'center',
    fontSize: rs(13),
    color: '#111827',
  },
});

export default UpgradePlanScreen;
