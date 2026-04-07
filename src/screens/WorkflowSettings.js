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

const WorkflowSettings = () => {
  const [settings, setSettings] = useState({
    quoteAcceptance: true,
    contractSigning: true,
    invoicePayment: true,
  });

  const toggleSwitch = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const workflowOptions = [
    { key: 'quoteAcceptance', label: 'Auto-convert on Quote Acceptance' },
    { key: 'contractSigning', label: 'Auto-convert on Contract Signing' },
    { key: 'invoicePayment', label: 'Auto-convert on Invoice Payment' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Workflow Settings" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <CustomText style={styles.sectionTitle}>Workflow</CustomText>
        
        <View style={styles.optionsCard}>
          {workflowOptions.map((option, index) => (
            <React.Fragment key={option.key}>
              <View style={styles.optionRow}>
                <CustomText style={styles.optionLabel}>{option.label}</CustomText>
                <Switch
                  trackColor={{ false: '#D1D1D6', true: '#00B1FF' }}
                  thumbColor={colors.white}
                  ios_backgroundColor="#D1D1D6"
                  onValueChange={() => toggleSwitch(option.key)}
                  value={settings[option.key]}
                />
              </View>
              {index < workflowOptions.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
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
    marginBottom: responsiveHeight(2),
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.8),
    color: '#999999',
    marginBottom: responsiveHeight(2),
  },
  optionsCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionLabel: {
    fontSize: responsiveFontSize(1.9),
    color: '#333333',
    flex: 1,
    marginRight: responsiveWidth(4),
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default WorkflowSettings;
