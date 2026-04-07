import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const FilesAutomation = () => {
  const [toggles, setToggles] = useState({
    clientUploads: true,
    autoSendInvoice: true,
    autoSendInvoice2: true, // As per image placeholder
    autoRemind: true,
  });

  const toggleSwitch = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Files & Automation" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <CustomText style={styles.sectionTitle}>Files & Automation</CustomText>
        
        <View style={styles.optionsCard}>
          {/* Toggles */}
          <View style={styles.optionRow}>
            <CustomText style={styles.optionLabel}>Allow Client Uploads</CustomText>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#00B1FF' }}
              thumbColor={colors.white}
              ios_backgroundColor="#D1D1D6"
              onValueChange={() => toggleSwitch('clientUploads')}
              value={toggles.clientUploads}
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.optionRow}>
            <CustomText style={styles.optionLabel}>Auto-send Invoice Email</CustomText>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#00B1FF' }}
              thumbColor={colors.white}
              ios_backgroundColor="#D1D1D6"
              onValueChange={() => toggleSwitch('autoSendInvoice')}
              value={toggles.autoSendInvoice}
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.optionRow}>
            <CustomText style={styles.optionLabel}>Auto-send Invoice Email</CustomText>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#00B1FF' }}
              thumbColor={colors.white}
              ios_backgroundColor="#D1D1D6"
              onValueChange={() => toggleSwitch('autoSendInvoice2')}
              value={toggles.autoSendInvoice2}
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.optionRow}>
            <CustomText style={styles.optionLabel}>Auto-remind overdue</CustomText>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#00B1FF' }}
              thumbColor={colors.white}
              ios_backgroundColor="#D1D1D6"
              onValueChange={() => toggleSwitch('autoRemind')}
              value={toggles.autoRemind}
            />
          </View>
          <View style={styles.divider} />

          {/* Settings */}
          <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
            <CustomText style={styles.optionLabel}>Reminder After</CustomText>
            <View style={styles.optionRight}>
              <CustomText style={styles.optionValue}>3 days</CustomText>
              <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
            <CustomText style={styles.optionLabel}>Max File Upload Size</CustomText>
            <View style={styles.optionRight}>
              <CustomText style={styles.optionValue}>50MB</CustomText>
              <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
          </TouchableOpacity>
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
    paddingBottom: 20,
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
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: responsiveFontSize(1.7),
    color: '#999',
    marginRight: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default FilesAutomation;
