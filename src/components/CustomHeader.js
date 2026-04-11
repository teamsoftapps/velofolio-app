import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../utils/colors';
import ButtonSimple from './Button';

const HEADER_CONFIG = {
  'Company Profile': { showAddButton: false },
  Verify: { transparent: true, showAddButton: false },
  'Delete My Account': { transparent: true, showAddButton: false },
  'Confirm Account Deletion': { showAddButton: false },
  'Report & Analysis': {
    rightIcon: 'export',
    showAddButton: false,
  },
  Notifications: { showAddButton: false },
  Clients: { showAddButton: false },
  Jobs: { showAddButton: false },
  'Add Clients': { showAddButton: false },
  'Add Jobs': { showAddButton: false },
  'Email Templates': { showAddButton: false },
  'Edit Email Template': { showAddButton: false },
  'Email Settings': { showAddButton: false },
  'Notification Preferences': { showAddButton: false },
  'Roles & Permissions': { showAddButton: false },
  'Branding & Customization': { showAddButton: false },
  'Payments & Billing': { showAddButton: false },
  'Billing History': { showAddButton: false },
  'Payment Methods': { showAddButton: false },
  'Add Payment Method': { showAddButton: false },
  'Goals & Reports': { showAddButton: false },
  'Reporting Preferences': { showAddButton: false },
  'System Preferences': { showAddButton: false },
  'General Settings': { showAddButton: false },
  Language: { showAddButton: false },
  'Date Format': { showAddButton: false },
  'Time Format': { showAddButton: false },
  Currency: { showAddButton: false },
  'First Day of Week': { showAddButton: false },
  'Job & Payment Defaults': { showAddButton: false },
  'Invoice Number Format': { showAddButton: false },
  'Workflow Settings': { showAddButton: false },
  'Files & Automation': { showAddButton: false },
  'Current Plan': { showAddButton: false },
  'Cancel Subscription': { showAddButton: false },
  Admin: { showAddButton: false },
  Manager: { showAddButton: false },
  Editor: { showAddButton: false },
  'Email Sender Settings': { showAddButton: false },
  'Recovery Email': { showAddButton: false },
  'Email & Notifications': { showAddButton: false },
  'Backup Phone': { showAddButton: false },
  'Account Recovery': { showAddButton: false },
  'Add Phone Number': { showAddButton: false },
  'Change Password': { showAddButton: false },
  'Security & Password': { showAddButton: false },
  Settings: { showAddButton: false },
  Profile: { showAddButton: false },
  'Client Profile': { showAddButton: false },
  Payments: { showAddButton: false },
  Gmail: { showAddButton: false },
  'Gmail Settings': { showAddButton: false },
  ' ': { showAddButton: false, transparent: true },
  default: {
    showAddButton: true,
  },
};

const getConfig = title => {
  const config = HEADER_CONFIG[title] || HEADER_CONFIG.default;
  if (title.toLowerCase().startsWith('add')) {
    return { ...config, showAddButton: false };
  }
  return config;
};

const CustomHeader = ({
  title = '',
  onPress,
  showMore = false,
  onMorePress,
  showAddButton,
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const config = { ...getConfig(title) };

  if (showAddButton !== undefined) {
    config.showAddButton = showAddButton;
  }

  const handlePress = () => {
    if (route.params?.fromDrawer) {
      navigation.navigate('Tabs', {
        screen: 'AppTabs',
        params: { screen: 'Home' },
      });
    } else if (typeof onPress === 'function' && !config.showAddButton) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  const getAddTitle = () => {
    if (title === 'Calendar') return 'Add New';
    if (title === 'Teams') return 'Add Member';
    if (!title) return 'Add';
    if (title.toLowerCase().startsWith('add')) return title;
    return `Add ${title.endsWith('s') ? title.slice(0, -1) : title}`;
  };

  return (
    <View
      style={{
        backgroundColor: config.transparent ? 'transparent' : colors.white,
        paddingTop: Math.max(insets.top, responsiveWidth(2)),
      }}
    >
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <TouchableOpacity style={styles.leftIcon} onPress={handlePress}>
            <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.rightSide}>
          {config.rightIcon === 'export' && (
            <View style={[styles.mail, styles.file]}>
              <FontAwesome5
                name="file-export"
                size={responsiveWidth(7)}
                color={colors.white}
              />
            </View>
          )}

          {showMore && (
            <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
              <Ionicons
                name="ellipsis-vertical"
                size={responsiveWidth(6)}
                color={colors.black || '#000'}
              />
            </TouchableOpacity>
          )}

          {config.showAddButton && !showMore && (
            <View style={styles.sideContainer}>
              <ButtonSimple
                title={getAddTitle()}
                onPress={onPress}
                leftIcon={
                  <Fontisto name="plus-a" size={20} color={colors.white} />
                }
                style={styles.rightButton}
                textStyle={styles.addButtonText}
              />
            </View>
          )}
        </View>

        {/* Centered Title (Relative to the padded content row) */}
        <View style={styles.centerTitleContainer} pointerEvents="none">
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    minHeight: responsiveWidth(10),
    marginBottom: responsiveWidth(2),
  },
  headerTitle: {
    fontSize: responsiveWidth(4.8),
    fontWeight: '600',
    color: colors.textPrimary || '#111827',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  centerTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(1),
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: responsiveWidth(1),
  },
  leftIcon: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderColor: '#E5E7EB',
    borderWidth: 1.5,
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  mail: {
    padding: responsiveWidth(2),
    backgroundColor: colors.greenAccent,
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  file: {
    width: responsiveWidth(12),
    paddingHorizontal: 0,
    paddingLeft: responsiveWidth(2),
  },
  rightButton: {
    width: responsiveWidth(36),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveWidth(4),
    fontWeight: '600',
    marginLeft: responsiveWidth(2),
  },
  moreButton: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
