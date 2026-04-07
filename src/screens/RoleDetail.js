import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Switch,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const RoleDetail = ({ navigation, route }) => {
  const { roleName } = route.params;

  // Mock initial permission states based on role name
  const getInitialPermissions = () => {
    const defaultPermissions = {
      clients: { view: true, add: false, edit: false, delete: false },
      jobs: { create: true, assign: false, close: false },
      payments: { view: false, createInvoices: false },
      system: { manageRoles: false, editCompany: false },
    };

    if (roleName === 'Admin') {
      return {
        clients: { view: true, add: true, edit: true, delete: true },
        jobs: { create: true, assign: true, close: true },
        payments: { view: true, createInvoices: true },
        system: { manageRoles: true, editCompany: true },
      };
    } else if (roleName === 'Manager') {
      return {
        clients: { view: true, add: true, edit: false, delete: false },
        jobs: { create: true, assign: true, close: false },
        payments: { view: true, createInvoices: false },
        system: { manageRoles: true, editCompany: false },
      };
    } else if (roleName === 'Editor') {
      return {
        clients: { view: true, add: false, edit: false, delete: false },
        jobs: { create: true, assign: false, close: false },
        payments: { view: false, createInvoices: false },
        system: { manageRoles: false, editCompany: false },
      };
    }
    return defaultPermissions;
  };

  const [permissions, setPermissions] = useState(getInitialPermissions());

  const togglePermission = (section, key) => {
    setPermissions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key],
      },
    }));
  };

  const PermissionRow = ({ label, section, permissionKey }) => (
    <View style={styles.row}>
      <CustomText style={styles.rowLabel}>{label}</CustomText>
      <Switch
        value={permissions[section][permissionKey]}
        onValueChange={() => togglePermission(section, permissionKey)}
        trackColor={{ false: '#D1D1D6', true: colors.bluePrimary || '#00B1E7' }}
        thumbColor={Platform.OS === 'ios' ? undefined : colors.white}
        ios_backgroundColor="#D1D1D6"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title={roleName} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Clients Section */}
        <CustomText style={styles.sectionHeader}>Clients</CustomText>
        <View style={styles.section}>
          <PermissionRow label="View Clients" section="clients" permissionKey="view" />
          <PermissionRow label="Add Clients" section="clients" permissionKey="add" />
          <PermissionRow label="Edit Clients" section="clients" permissionKey="edit" />
          <PermissionRow label="Delete Clients" section="clients" permissionKey="delete" />
        </View>

        {/* Jobs Section */}
        <CustomText style={styles.sectionHeader}>Jobs</CustomText>
        <View style={styles.section}>
          <PermissionRow label="Create Jobs" section="jobs" permissionKey="create" />
          <PermissionRow label="Assign Jobs" section="jobs" permissionKey="assign" />
          <PermissionRow label="Close Jobs" section="jobs" permissionKey="close" />
        </View>

        {/* Payments Section */}
        <CustomText style={styles.sectionHeader}>Payments</CustomText>
        <View style={styles.section}>
          <PermissionRow label="View Payments" section="payments" permissionKey="view" />
          <PermissionRow label="Create Invoices" section="payments" permissionKey="createInvoices" />
        </View>

        {/* System Alerts Section */}
        <CustomText style={styles.sectionHeader}>System Alerts</CustomText>
        <View style={styles.section}>
          <PermissionRow label="Manage Roles" section="system" permissionKey="manageRoles" />
          <PermissionRow label="Edit Company Info" section="system" permissionKey="editCompany" />
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
    marginBottom: responsiveHeight(1),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(4),
  },
  sectionHeader: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: colors.grayDark || '#999999',
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(1),
  },
  section: {
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.5),
    borderBottomWidth: 0, // No bottom border as per image
  },
  rowLabel: {
    fontSize: responsiveFontSize(2),
    color: colors.textPrimary || '#222222',
    fontWeight: '400',
  },
});

export default RoleDetail;
