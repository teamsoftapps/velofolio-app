import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or Ionicons / Feather etc.
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CommonActions } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import ScreenWrapper from '../components/ScreenWrapper';

export default function SettingsScreen({ navigation }) {
  // You can pass navigation prop if using react-navigation
  // or replace onPress with your own handlers

  const renderRow = (iconName, title, iconType, onPress = () => { }) => (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      {iconType == "Ion" ? <Ionicons name={iconName} size={responsiveWidth(6)} color="#444" style={styles.rowIcon} /> : <Icon name={iconName} size={responsiveWidth(6)} color="#444" style={styles.rowIcon} />}
      <Text style={styles.rowText}>{title}</Text>
      <Icon
        name="chevron-right"
        size={responsiveWidth(5.5)}
        color="#999"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.headWrapper}>
        <CustomHeader
          title="Settings"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Tabs' }],
              })
            );
          }}
        />
      </View>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" /> */}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionHeader}>Account</Text>
        {/* Account - Personal */}
        <View style={styles.section}>

          {renderRow('person-circle-outline', 'Company Profile', "Ion", () => navigation.navigate('CompanyProfile'))}
          {renderRow('lock-outline', 'Security & Password', "", () => navigation.navigate('SecuritynPassword'))}
          {renderRow('email', 'Email & Notifications', "", () => navigation.navigate('EmailNotificationSettings'))}
        </View>

        {/* Account - Company / Team */}
        <Text style={styles.sectionHeader}>Account</Text>
        <View style={styles.section}>

          {renderRow('group', 'Team & Permissions', "", () => navigation.navigate('RolesPermissions'))}
          {renderRow('color-palette-outline', 'Branding & Customization', "Ion", () => navigation.navigate('BrandingCustomization'))}
        </View>

        {/* Billing */}
        <Text style={styles.sectionHeader}>Billing</Text>
        <View style={styles.section}>

          {renderRow('payment', 'Payments & Billing', "", () => navigation.navigate('PaymentsBilling'))}
        </View>

        {/* System */}
        <Text style={styles.sectionHeader}>System</Text>
        <View style={styles.section}>

          {renderRow('bar-chart', 'Goals & Reports', "", () => navigation.navigate('GoalsReports'))}
          {renderRow('settings-outline', 'System Preferences', "Ion", () => navigation.navigate('SystemPreferences'))}
        </View>

        {/* Optional bottom spacing */}
        <View style={{ height: responsiveHeight(4) }} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // light gray background like many settings screens
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },

  actionContainer: {
    flexDirection: "row",
    width: responsiveWidth(50),
    gap: responsiveWidth(2)

  },
  scrollContent: {
    paddingVertical: responsiveHeight(1),
  },
  section: {
    marginBottom: responsiveHeight(1.2),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
    overflow: 'hidden',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  sectionHeader: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '500',
    color: colors.grayDark,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(0.7),
    paddingBottom: responsiveHeight(1.1),
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(5),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#eee',
  },
  rowIcon: {
    marginRight: responsiveWidth(4),
  },
  rowText: {
    flex: 1,
    fontSize: responsiveFontSize(1.9),
    color: '#222',
    fontWeight: '400',
  },
  chevron: {
    opacity: 0.7,
  },
});