import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TwoFactorAuthScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const isVerified = route.params?.verified || false;

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
        <Typography style={styles.title}>Two-Factor Authentication</Typography>
        <Typography style={styles.subtitle}>
          Add your phone number to receive a secure login code every time you sign in.
        </Typography>

        {isVerified ? (
          <View style={styles.verifiedCard}>
            <View style={styles.cardHeader}>
              <View style={styles.countryBadge}>
                <Image 
                  source={{uri: 'https://flagcdn.com/w40/us.png'}} 
                  style={styles.flagIcon} 
                />
                <Typography style={styles.countryCode}>+1</Typography>
                <Feather name="chevron-down" size={rs(16)} color="#9CA3AF" />
              </View>
              <View style={styles.cardDivider} />
              <View style={styles.phoneDetails}>
                <Typography style={styles.phoneNumber}>+1 (514) 550-3281</Typography>
                <View style={styles.statusRow}>
                  <View style={styles.verifiedBadge}>
                    <Feather name="check-circle" size={rs(14)} color="#10B981" />
                    <Typography style={styles.verifiedText}>Verified</Typography>
                  </View>
                </View>
                <Typography style={styles.cardNote}>Codes are sent by text message</Typography>
              </View>
              <TouchableOpacity style={styles.deleteButton}>
                <Feather name="trash-2" size={rs(20)} color="#EF4444" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity 
            style={styles.addButton} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AddPhoneNumber')}
          >
            <Feather name="phone" size={rs(20)} color="#111827" style={styles.addIcon} />
            <Typography style={styles.addText}>Add 2FA Phone Number</Typography>
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={styles.backupButton} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AddPhoneNumber')}
        >
          <Feather name="plus" size={rs(20)} color="#000000" style={styles.addIcon} />
          <Typography style={styles.backupText}>Add a Backup 2FA Phone Number</Typography>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FAFAFA',
    paddingBottom: rs(8),
  },
  header: {
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
    paddingTop: rs(20),
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#000000',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(32),
  },
  verifiedCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: rs(16),
    marginBottom: rs(20),
  },
  cardHeader: {
    flexDirection: 'row',
  },
  countryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: rs(12),
  },
  flagIcon: {
    width: rs(22),
    height: rs(16),
    borderRadius: rs(2),
    marginRight: rs(4),
  },
  countryCode: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
    marginRight: rs(4),
  },
  cardDivider: {
    width: 1,
    height: rs(60),
    backgroundColor: '#E5E7EB',
  },
  phoneDetails: {
    flex: 1,
    paddingLeft: rs(16),
  },
  phoneNumber: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#000000',
    marginBottom: rs(4),
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(4),
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#10B981',
    marginLeft: rs(4),
  },
  cardNote: {
    fontSize: rs(12),
    color: '#9CA3AF',
  },
  deleteButton: {
    padding: rs(4),
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    paddingHorizontal: rs(20),
    marginBottom: rs(24),
  },
  addIcon: {
    marginRight: rs(12),
  },
  addText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  backupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    paddingHorizontal: rs(20),
    backgroundColor: '#FFFFFF',
  },
  backupText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#000000',
  },
});

export default TwoFactorAuthScreen;

