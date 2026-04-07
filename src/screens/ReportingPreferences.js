import React, { useState } from 'react';
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

const ReportingPreferences = () => {
  const [preferences, setPreferences] = useState({
    last7Days: true,
    last30Days: true,
    customRange: false,
    weeklyEmail: true,
    monthlyReport: true,
    revenueGoals: true,
    jobTargets: true,
    teamUtilization: false,
  });

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSection = (title, items) => (
    <View style={styles.section}>
      <CustomText style={styles.sectionTitle}>{title}</CustomText>
      {items.map((item) => (
        <View key={item.key} style={styles.preferenceRow}>
          <CustomText style={styles.itemText}>{item.label}</CustomText>
          <Switch
            value={preferences[item.key]}
            onValueChange={() => togglePreference(item.key)}
            trackColor={{ false: '#E0E0E0', true: colors.bluePrimary || '#00B1E7' }}
            thumbColor={colors.white}
            ios_backgroundColor="#E0E0E0"
          />
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Reporting Preferences" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderSection('Default Report Period', [
          { key: 'last7Days', label: 'Last 7 Days' },
          { key: 'last30Days', label: 'Last 30 Days' },
          { key: 'customRange', label: 'Custom Range' },
        ])}

        {renderSection('Summary Reports', [
          { key: 'weeklyEmail', label: 'Send weekly performance summary email' },
          { key: 'monthlyReport', label: 'Send monthly goal progress report' },
        ])}

        {renderSection('Include in Reports', [
          { key: 'revenueGoals', label: 'Revenue goals' },
          { key: 'jobTargets', label: 'Job targets' },
          { key: 'teamUtilization', label: 'Team utilization' },
        ])}
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
    marginBottom: responsiveHeight(2),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(4),
  },
  section: {
    marginBottom: responsiveHeight(2.5),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.7),
    color: '#999999',
    marginBottom: responsiveHeight(1.5),
    fontWeight: '400',
  },
  preferenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.8),
  },
  itemText: {
    fontSize: responsiveFontSize(1.9),
    color: '#333333',
    fontWeight: '400',
    flex: 1,
    marginRight: responsiveWidth(4),
  },
});

export default ReportingPreferences;
