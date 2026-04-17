import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SETTINGS_SECTIONS = [
  {
    title: 'Account',
    items: [
      { icon: 'user', label: 'Company Profile', route: 'CompanyProfile' },
      { icon: 'shield', label: 'Security & Password', route: 'SecurityPassword' },
      { icon: 'mail', label: 'Email & Notifications', route: 'EmailNotifications' },
    ],
  },
  {
    title: 'Business',
    items: [
      { icon: 'users', label: 'Roles & Permissions', route: 'RolesPermissions' },
      { icon: 'edit-3', label: 'Branding & Customization', route: 'BrandingCustomization' },
    ],
  },
  {
    title: 'Billing',
    items: [
      { icon: 'credit-card', label: 'Payments & Billing', route: 'PaymentsBilling' },
    ],
  },
  {
    title: 'System',
    items: [
      { icon: 'bar-chart-2', label: 'Goals & Reports', route: 'GoalsReports' },
      { icon: 'settings', label: 'System Preferences', route: 'SystemPreferences' },
    ],
  },
];

const SettingsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Settings</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {SETTINGS_SECTIONS.map((section, sIndex) => (
          <View key={sIndex} style={styles.sectionBlock}>
            <Typography style={styles.sectionTitle}>{section.title}</Typography>
            <View style={styles.sectionCard}>
              {section.items.map((item, iIndex) => (
                <TouchableOpacity
                  key={iIndex}
                  style={[
                    styles.settingItem,
                    iIndex < section.items.length - 1 && styles.settingItemBorder,
                  ]}
                  activeOpacity={0.6}
                  onPress={() => {
                    if (item.route) {
                      navigation.navigate(item.route);
                    }
                  }}
                >
                  <View style={styles.settingLeft}>
                    <Feather name={item.icon} size={rs(20)} color="#374151" style={styles.settingIcon} />
                    <Typography style={styles.settingLabel}>{item.label}</Typography>
                  </View>
                  <Feather name="chevron-right" size={rs(20)} color="#D1D5DB" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <View style={{ height: rh(100) }} />
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
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
});

export default SettingsScreen;
