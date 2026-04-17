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

const EmailSenderSettingsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Email Sender Settings</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionBlock}>
          <Typography style={styles.sectionTitle}>Business</Typography>
          <View style={styles.sectionCard}>
            <TouchableOpacity 
              style={[styles.settingItem, styles.settingItemBorder]} 
              activeOpacity={0.6}
              onPress={() => navigation.navigate('DefaultEmail')}
            >
              <View style={styles.settingLeft}>
                <Feather name="mail" size={rs(20)} color="#374151" style={styles.settingIcon} />
                <Typography style={styles.settingLabel}>Default Email</Typography>
              </View>
              <View style={styles.settingRight}>
                <Typography style={styles.valueText}>no-reply@velofolio.app</Typography>
                <Feather name="chevron-right" size={rs(20)} color="#D1D5DB" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.settingItem} 
              activeOpacity={0.6}
              onPress={() => navigation.navigate('GmailConnect')}
            >
              <View style={styles.settingLeft}>
                <Image
                  source={require('../../assets/Images/googleicon.png')}
                  style={[styles.settingIcon, { height: rs(20), width: rs(20), resizeMode: 'contain' }]}
                />
                <Typography style={styles.settingLabel}>Gmail</Typography>
              </View>
              <View style={styles.settingRight}>
                <View style={styles.recommendedBadge}>
                  <Typography style={styles.recommendedBadgeText}>RECOMMENDED</Typography>
                </View>
                <Feather name="chevron-right" size={rs(20)} color="#D1D5DB" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  sectionBlock: {
    marginBottom: rs(24),
  },
  sectionTitle: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(10),
    paddingLeft: rs(4),
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rs(16),
    paddingHorizontal: rs(18),
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: rs(14),
    width: rs(22),
  },
  settingLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#1A1A1A',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginRight: rs(8),
  },
  recommendedBadge: {
    backgroundColor: '#34D399', // Emerald 400ish
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(16),
    marginRight: rs(10),
  },
  recommendedBadgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

export default EmailSenderSettingsScreen;
