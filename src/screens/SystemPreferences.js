import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const SystemPreferences = ({ navigation }) => {
  const options = [
    {
      id: 1,
      title: 'General Settings',
      icon: 'settings-outline',
      iconType: 'Ion',
      screen: 'GeneralSettings',
    },
    {
      id: 2,
      title: 'Job & Payment Defaults',
      icon: 'briefcase-outline',
      iconType: 'Ion',
      screen: 'JobPaymentDefaults',
    },
    {
      id: 3,
      title: 'Workflow Settings',
      icon: 'sync',
      iconType: 'Ion',
      screen: 'WorkflowSettings',
    },
    {
      id: 4,
      title: 'Files & Automation',
      icon: 'vector-combine',
      iconType: 'MCI',
      screen: 'FilesAutomation',
    },
  ];

  const renderIcon = (option) => {
    if (option.iconType === 'Ion') {
      return <Ionicons name={option.icon} size={22} color={colors.textPrimary || '#222222'} />;
    }
    return <MaterialCommunityIcons name={option.icon} size={22} color={colors.textPrimary || '#222222'} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="System Preferences" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <CustomText style={styles.sectionTitle}>System</CustomText>
        
        <View style={styles.optionsCard}>
          {options.map((option, index) => (
            <React.Fragment key={option.id}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => option.screen && navigation.navigate(option.screen)}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  <View style={styles.iconCircle}>
                    {renderIcon(option)}
                  </View>
                  <CustomText style={styles.optionTitle}>{option.title}</CustomText>
                </View>
                <Ionicons name="chevron-forward" size={20} color={colors.grayDark || '#999999'} />
              </TouchableOpacity>
              {index < options.length - 1 && <View style={styles.divider} />}
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
    color: colors.grayDark || '#999999',
    marginBottom: responsiveHeight(2),
  },
  optionsCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    marginRight: responsiveWidth(3),
  },
  optionTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default SystemPreferences;
