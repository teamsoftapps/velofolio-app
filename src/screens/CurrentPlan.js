import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';

const CurrentPlan = ({ navigation }) => {
  const benefits = [
    '20 Team Members',
    '100GB Storage',
    'Limited Jobs',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Current Plan" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.planCard}>
          <View style={styles.planHeader}>
            <View>
              <CustomText style={styles.planName}>PRO Studio</CustomText>
              <View style={styles.priceContainer}>
                <CustomText style={styles.price}>$49</CustomText>
                <CustomText style={styles.period}>/month</CustomText>
              </View>
            </View>
            <View style={styles.activeBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#EBB212" />
              <CustomText style={styles.activeText}>Active</CustomText>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressSection}>
            <View style={styles.progressLabels}>
              <CustomText style={styles.progressLabel}>Team Members</CustomText>
              <View style={styles.progressValueContainer}>
                <CustomText style={styles.progressValueBold}>12</CustomText>
                <CustomText style={styles.progressValue}> of 20 member</CustomText>
              </View>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '60%' }]} />
            </View>
          </View>

          {/* Benefits */}
          <View style={styles.benefitsCard}>
            <CustomText style={styles.benefitsTitle}>Benefits</CustomText>
            {benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitRow}>
                <Ionicons name="checkmark" size={18} color="#222222" />
                <CustomText style={styles.benefitLabel}>{benefit}</CustomText>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <ButtonSimple
            title="Upgrade Plan"
            onPress={() => {}}
            style={styles.upgradeButton}
            textStyle={styles.upgradeButtonText}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('CancelSubscription')}
            activeOpacity={0.7}
          >
            <CustomText style={styles.cancelButtonText}>Cancel Subscription</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(4),
  },
  planCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(6),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: responsiveHeight(5),
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(3),
  },
  planName: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '600',
    color: colors.bluePrimary || '#00B1E7',
    marginBottom: responsiveHeight(0.5),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  period: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginLeft: 2,
  },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  activeText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginLeft: 4,
  },
  progressSection: {
    marginBottom: responsiveHeight(4),
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  progressLabel: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  progressValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressValueBold: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  progressValue: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#EBEBEB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: 4,
  },
  benefitsCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(4),
  },
  benefitsTitle: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginBottom: responsiveHeight(2),
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  benefitLabel: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(3),
  },
  buttonContainer: {
    gap: responsiveHeight(2),
  },
  upgradeButton: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
  },
  upgradeButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  cancelButton: {
    height: responsiveHeight(7.5),
    borderRadius: responsiveWidth(10),
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.screenBackground || '#F9F9F9',
  },
  cancelButtonText: {
    color: colors.textPrimary || '#222222',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
  },
});

export default CurrentPlan;
