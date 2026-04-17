import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from './Typography';
import { rs, rh } from '../utils/dimensions';

const BUSINESS_ITEMS = [
  { icon: 'users', label: 'Team Members', route: 'Team' },
  { icon: 'target', label: 'Leads', route: 'Leads' },
  { icon: 'credit-card', label: 'Payments & Invoices', route: 'Payments' },
  { icon: 'bar-chart-2', label: 'Reports & Analytics', route: 'Reports' },
  {
    icon: 'award',
    label: 'Goals & Performance',
    route: 'MainTabs',
    screen: 'Home',
  },
  {
    icon: 'layout',
    label: 'Production Board',
    route: 'MainTabs',
    screen: 'Jobs',
    params: { activeTab: 'board' },
  },
  { icon: 'settings', label: 'Settings', route: 'Settings' },
];

const SUPPORT_ITEMS = [
  { icon: 'help-circle', label: 'Help Center / FAQ', route: 'HelpCentre' },
  { icon: 'headphones', label: 'Contact Support', route: 'ContactSupport' },
  { icon: 'refresh-cw', label: "App Updates / What's New", route: 'AppUpdate' },
];

const DrawerMenuItem = ({ icon, label, onPress }) => (
  <TouchableOpacity
    style={styles.menuItem}
    activeOpacity={0.6}
    onPress={onPress}
  >
    <Feather
      name={icon}
      size={rs(20)}
      color="#4B5563"
      style={styles.menuIcon}
    />
    <Typography style={styles.menuLabel}>{label}</Typography>
  </TouchableOpacity>
);

const CustomDrawerContent = ({ navigation: drawerNav }) => {
  const insets = useSafeAreaInsets();

  const handleMenuPress = (item) => {
    drawerNav.closeDrawer();
    if (item.route) {
      setTimeout(() => {
        if (item.screen) {
          // Nested navigation to Tabs
          drawerNav.navigate('MainStack', {
            screen: item.route,
            params: {
              screen: item.screen,
              params: item.params,
            },
          });
        } else {
          // Direct stack navigation
          drawerNav.navigate('MainStack', { screen: item.route });
        }
      }, 300);
    }
  };

  const handleLogout = () => {
    drawerNav.closeDrawer();
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + rs(12),
          paddingBottom: insets.bottom + rs(16),
        },
      ]}
    >
      {/* Profile Header — matches mockup pill style */}
      <View style={styles.profilePill}>
        <View style={styles.avatarWrap}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
            style={styles.avatar}
          />
        </View>
        <Typography style={styles.studioName}>Lumiere Studio</Typography>
        <View>
          <Feather
            name="chevron-up"
            size={rs(16)}
            color="#9CA3AF"
            style={{ marginLeft: rs(6) }}
          />
          <Feather
            name="chevron-down"
            size={rs(16)}
            color="#9CA3AF"
            style={{ marginLeft: rs(6) }}
          />
        </View>
      </View>

      {/* Business & Management Section */}
      <View style={styles.sectionBlock}>
        <Typography style={styles.sectionTitle}>
          BUSINESS & MANAGEMENT
        </Typography>
        {BUSINESS_ITEMS.map((item, index) => (
          <DrawerMenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            onPress={() => handleMenuPress(item)}
          />
        ))}
      </View>

      {/* Support & System Section */}
      <View style={styles.sectionBlock}>
        <Typography style={styles.sectionTitle}>SUPPORT & SYSTEM</Typography>
        {SUPPORT_ITEMS.map((item, index) => (
          <DrawerMenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            onPress={() => handleMenuPress(item)}
          />
        ))}
      </View>

      {/* Spacer to push Log Out to bottom */}
      <View style={{ flex: 1 }} />

      {/* Log Out */}
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.6}
        onPress={handleLogout}
      >
        <Feather
          name="log-out"
          size={rs(20)}
          color="#6B7280"
          style={styles.menuIcon}
        />
        <Typography style={styles.logoutText}>Log Out</Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: rs(24),
  },
  profilePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: rs(28),
    paddingVertical: rs(8),
    paddingHorizontal: rs(10),
    alignSelf: 'flex-start',
    marginBottom: rs(28),
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  avatarWrap: {
    width: rs(34),
    height: rs(34),
    borderRadius: rs(17),
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
    marginRight: rs(8),
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  studioName: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#1A1A1A',
  },
  sectionBlock: {
    marginTop: rs(4),
  },
  sectionTitle: {
    fontSize: rs(11),
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.8,
    marginBottom: rs(12),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(11),
  },
  menuIcon: {
    marginRight: rs(14),
    width: rs(22),
  },
  menuLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#374151',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(12),
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    marginTop: rs(8),
  },
  logoutText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#6B7280',
  },
});

export default CustomDrawerContent;
