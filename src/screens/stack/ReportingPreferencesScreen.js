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

const ReportingPreferencesScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [prefs, setPrefs] = useState({
    last7Days: true,
    last30Days: true,
    customRange: false,
    weeklySummary: true,
    monthlyProgress: true,
    includeRev: true,
    includeJobs: true,
    includeTeam: false,
  });

  const toggleSwitch = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderToggleRow = (label, key) => (
    <View style={styles.toggleRow}>
      <Typography style={styles.toggleLabel}>{label}</Typography>
      <Switch
        trackColor={{ false: '#E5E7EB', true: '#38BDF8' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#E5E7EB"
        onValueChange={() => toggleSwitch(key)}
        value={prefs[key]}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
      />
    </View>
  );

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Reporting Preferences</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.sectionHeader}>Default Report Period</Typography>
        {renderToggleRow('Last 7 Days', 'last7Days')}
        {renderToggleRow('Last 30 Days', 'last30Days')}
        {renderToggleRow('Custom Range', 'customRange')}

        <Typography style={[styles.sectionHeader, { marginTop: rs(24) }]}>Summary Reports</Typography>
        {renderToggleRow('Send weekly performance summary email', 'weeklySummary')}
        {renderToggleRow('Send monthly goal progress report', 'monthlyProgress')}

        <Typography style={[styles.sectionHeader, { marginTop: rs(24) }]}>Include in Reports</Typography>
        {renderToggleRow('Revenue goals', 'includeRev')}
        {renderToggleRow('Job targets', 'includeJobs')}
        {renderToggleRow('Team utilization', 'includeTeam')}

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
  sectionHeader: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(16),
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(24),
  },
  toggleLabel: {
    fontSize: rs(16),
    color: '#111827',
    flex: 1,
    paddingRight: rs(16),
  },
});

export default ReportingPreferencesScreen;
