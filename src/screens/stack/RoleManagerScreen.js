import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PERMISSION_GROUPS = [
  {
    title: 'Clients',
    items: [
      { id: 'view_clients', label: 'View Clients', initial: true },
      { id: 'add_clients', label: 'Add Clients', initial: true },
      { id: 'edit_clients', label: 'Edit Clients', initial: false },
      { id: 'delete_clients', label: 'Delete Clients', initial: false },
    ],
  },
  {
    title: 'Jobs',
    items: [
      { id: 'create_jobs', label: 'Create Jobs', initial: true },
      { id: 'assign_jobs', label: 'Assign Jobs', initial: true },
      { id: 'close_jobs', label: 'Close Jobs', initial: false },
    ],
  },
  {
    title: 'Payments',
    items: [
      { id: 'view_payments', label: 'View Payments', initial: true },
      { id: 'create_invoices', label: 'Create Invoices', initial: false },
    ],
  },
  {
    title: 'System Alerts',
    items: [
      { id: 'manage_roles', label: 'Manage Roles', initial: true },
      { id: 'edit_company', label: 'Edit Company Info', initial: false },
    ],
  },
];

const RoleManagerScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [permissions, setPermissions] = useState(() => {
    const initialState = {};
    PERMISSION_GROUPS.forEach(group => {
      group.items.forEach(item => {
        initialState[item.id] = item.initial;
      });
    });
    return initialState;
  });

  const toggleSwitch = (id) => {
    setPermissions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Manager</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {PERMISSION_GROUPS.map((group, gIndex) => (
          <View key={gIndex} style={styles.groupContainer}>
            <Typography style={styles.groupTitle}>{group.title}</Typography>
            <View style={styles.itemsContainer}>
              {group.items.map((item) => (
                <View key={item.id} style={styles.settingItem}>
                  <Typography style={styles.settingLabel}>{item.label}</Typography>
                  <Switch
                    trackColor={{ false: '#D1D5DB', true: '#38BDF8' }}
                    thumbColor="#FFFFFF"
                    ios_backgroundColor="#D1D5DB"
                    onValueChange={() => toggleSwitch(item.id)}
                    value={permissions[item.id]}
                    style={{ transform: [{ scale: 0.9 }] }}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
        <View style={{ height: rh(40) }} />
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
    marginBottom: rs(10),
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
    paddingHorizontal: rs(24),
    paddingTop: rs(10),
  },
  groupContainer: {
    marginBottom: rs(24),
  },
  groupTitle: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(16),
  },
  itemsContainer: {},
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rs(20),
  },
  settingLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
});

export default RoleManagerScreen;
