import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const GeneralSettingsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const SETTINGS = [
    { icon: 'globe', label: 'Language', value: 'English', route: 'Language' },
    {
      icon: 'calendar',
      label: 'Date Format',
      value: 'DD/MM/YYYY',
      route: 'DateFormat',
    },
    {
      icon: 'clock',
      label: 'Time Format',
      value: '12-hour',
      route: 'TimeFormat',
    },
    {
      icon: 'refresh-ccw',
      label: 'Currency',
      value: 'USD ($)',
      route: 'Currency',
    },
    { icon: 'calendar', label: 'First Day of Week', value: 'Monday' },
  ];

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>General Settings</Typography>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Typography style={styles.sectionTitle}>General</Typography>

        <View style={styles.sectionCard}>
          {SETTINGS.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.settingItem,
                index < SETTINGS.length - 1 && styles.settingItemBorder,
              ]}
              activeOpacity={0.6}
              onPress={() => item.route && navigation.navigate(item.route)}
            >
              <View style={styles.settingLeft}>
                <Feather
                  name={item.icon}
                  size={rs(20)}
                  color="#111827"
                  style={styles.settingIcon}
                />
                <Typography style={styles.settingLabel}>
                  {item.label}
                </Typography>
              </View>
              <View style={styles.settingRight}>
                <Typography style={styles.settingValue}>
                  {item.value}
                </Typography>
                <Feather name="chevron-right" size={rs(18)} color="#9CA3AF" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

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
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
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
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rs(18),
    paddingHorizontal: rs(16),
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
    color: '#111827',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginRight: rs(8),
  },
});

export default GeneralSettingsScreen;
