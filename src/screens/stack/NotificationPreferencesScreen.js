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

const NOTIFICATION_GROUPS = [
  {
    title: 'Job Notifications',
    items: [
      { id: 'job_assigned', label: 'Job Assigned to You', initial: true },
      { id: 'job_deadline', label: 'Job Deadline Approaching', initial: true },
      { id: 'job_completed', label: 'Job Marked as Completed', initial: false },
    ],
  },
  {
    title: 'Client & Lead Notifications',
    items: [
      { id: 'lead_added', label: 'New Lead Added', initial: true },
      { id: 'lead_assigned', label: 'Lead Assigned to You', initial: true },
      { id: 'client_updated', label: 'Client Updated Their Info', initial: false },
    ],
  },
  {
    title: 'Payment Notifications',
    items: [
      { id: 'payment_received', label: 'New Payment Received', initial: true },
      { id: 'payment_overdue', label: 'Payment Overdue', initial: true },
      { id: 'payment_reminder', label: 'Payment Reminder Sent', initial: false },
    ],
  },
  {
    title: 'System Alerts',
    items: [
      { id: 'sys_comment', label: 'New Comment Tagging You', initial: true },
      { id: 'sys_report', label: 'Weekly Summary Report', initial: false },
      { id: 'sys_maintenance', label: 'System Maintenance Updates', initial: false },
    ],
  },
];

const NotificationPreferencesScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  // Initialize state with all items' initial values
  const [preferences, setPreferences] = useState(() => {
    const initialState = {};
    NOTIFICATION_GROUPS.forEach(group => {
      group.items.forEach(item => {
        initialState[item.id] = item.initial;
      });
    });
    return initialState;
  });

  const toggleSwitch = (id) => {
    setPreferences(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Notification Preferences</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {NOTIFICATION_GROUPS.map((group, gIndex) => (
          <View key={gIndex} style={styles.groupContainer}>
            <Typography style={styles.groupTitle}>{group.title}</Typography>
            <View style={styles.itemsContainer}>
              {group.items.map((item, iIndex) => (
                <View key={item.id} style={styles.settingItem}>
                  <Typography style={styles.settingLabel}>{item.label}</Typography>
                  <Switch
                    trackColor={{ false: '#D1D5DB', true: '#38BDF8' }}
                    thumbColor="#FFFFFF"
                    ios_backgroundColor="#D1D5DB"
                    onValueChange={() => toggleSwitch(item.id)}
                    value={preferences[item.id]}
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
  itemsContainer: {
    
  },
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

export default NotificationPreferencesScreen;
