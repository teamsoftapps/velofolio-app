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
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const GeneralSettings = ({ navigation }) => {
  const settings = [
    {
      id: 1,
      title: 'Language',
      value: 'English',
      icon: 'globe-outline',
      screen: 'LanguageSettings',
    },
    {
      id: 2,
      title: 'Date Format',
      value: 'DD/MM/YYYY',
      icon: 'calendar-outline',
      screen: 'DateFormatSettings',
    },
    {
      id: 3,
      title: 'Time Format',
      value: '12-hour',
      icon: 'time-outline',
      screen: 'TimeFormatSettings',
    },
    {
      id: 4,
      title: 'Currency',
      value: 'USD ($)',
      icon: 'sync-outline',
      screen: 'CurrencySettings',
    },
    {
      id: 5,
      title: 'First Day of Week',
      value: 'Monday',
      icon: 'calendar-outline',
      screen: 'FirstDaySettings',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="General Settings" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <CustomText style={styles.sectionTitle}>General</CustomText>
        
        <View style={styles.optionsCard}>
          {settings.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => item.screen && navigation.navigate(item.screen)}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  <Ionicons name={item.icon} size={22} color={colors.textPrimary || '#222222'} style={styles.icon} />
                  <CustomText style={styles.optionTitle}>{item.title}</CustomText>
                </View>
                <View style={styles.optionRight}>
                  <CustomText style={styles.optionValue}>{item.value}</CustomText>
                  <Ionicons name="chevron-forward" size={18} color={colors.grayDark || '#999999'} />
                </View>
              </TouchableOpacity>
              {index < settings.length - 1 && <View style={styles.divider} />}
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
  icon: {
    marginRight: responsiveWidth(3),
  },
  optionTitle: {
    fontSize: responsiveFontSize(2),
    color: colors.textPrimary || '#222222',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default GeneralSettings;
