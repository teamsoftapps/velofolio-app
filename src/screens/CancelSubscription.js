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
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';

const CancelSubscription = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Cancel Subscription" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <CustomText style={styles.title}>Cancel Subscription</CustomText>
        <CustomText style={styles.subtitle}>
          Your plan will remain active until <CustomText style={styles.bold}>Nov 28, 2025.</CustomText>
          {'\n'}After that, you'll lose access to premium features.
        </CustomText>

        {/* Plan Details Card */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <CustomText style={styles.detailLabel}>Current Plan:</CustomText>
            <CustomText style={styles.detailValueBlue}>PRO Studio</CustomText>
          </View>
          <View style={styles.detailRow}>
            <CustomText style={styles.detailLabel}>Next Billing Date</CustomText>
            <CustomText style={styles.detailValue}>Nov 28, 2025</CustomText>
          </View>
          <View style={styles.detailRow}>
            <CustomText style={styles.detailLabel}>Renewal Amount</CustomText>
            <CustomText style={styles.detailValue}>$49/month</CustomText>
          </View>
        </View>

        {/* Pause Banner */}
        <View style={styles.pauseCard}>
          <CustomText style={styles.pauseTitle}>Pause Subscription</CustomText>
          <CustomText style={styles.pauseSubtitle}>
            Pause for 1 month and resume anytime.
          </CustomText>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <CustomText style={styles.pauseLink}>Pause Instead</CustomText>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <ButtonSimple
            title="Confirm Cancellation"
            onPress={() => {}}
            style={styles.confirmButton}
            textStyle={styles.confirmButtonText}
          />
          <TouchableOpacity
            style={styles.keepButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <CustomText style={styles.keepButtonText}>Keep My Plan</CustomText>
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
    paddingHorizontal: responsiveWidth(6),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(4),
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(2),
  },
  subtitle: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    lineHeight: responsiveHeight(2.5),
    marginBottom: responsiveHeight(5),
  },
  bold: {
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  detailsCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(3),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.5),
  },
  detailLabel: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
  },
  detailValue: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
  },
  detailValueBlue: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: colors.bluePrimary || '#00B1E7',
  },
  pauseCard: {
    backgroundColor: '#EBEBEB',
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(6),
    alignItems: 'center',
    marginBottom: responsiveHeight(6),
  },
  pauseTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1.5),
  },
  pauseSubtitle: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    textAlign: 'center',
    marginBottom: responsiveHeight(2),
  },
  pauseLink: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: colors.bluePrimary || '#00B1E7',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    gap: responsiveHeight(1.5),
  },
  confirmButton: {
    backgroundColor: '#F34747', // Red as per image
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  keepButton: {
    height: responsiveHeight(7.5),
    borderRadius: responsiveWidth(10),
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.screenBackground || '#F9F9F9',
  },
  keepButtonText: {
    color: colors.textPrimary || '#222222',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
  },
});

export default CancelSubscription;
