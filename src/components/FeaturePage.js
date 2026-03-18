// FeatureSetupPage.js - For feature setup/info screens with action cards
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from './CustomHeader';
import TFACard from  "../components/TFACard"
import BackupButton from "../components/TFABackupButton"
import { useNavigation } from '@react-navigation/native';
/**
 * Reusable FeatureSetupPage Component
 * For feature setup screens (2FA, Notifications, etc.) with info and action cards
 * 
 * @param {string} title - Page title
 * @param {function} onBack - Back button handler
 * @param {string} headline - Main headline
 * @param {string} description - Description text
 * @param {Array} actions - Array of action cards
 * @param {string} actions[].icon - Icon name
 * @param {string} actions[].iconType - 'Ion' | 'Material'
 * @param {string} actions[].title - Card title
 * @param {function} actions[].onPress - Press handler
 * @param {string} actions[].badge - Optional badge text
 * @param {string} actions[].badgeColor - Badge background color
 * @param {object} colors - Theme colors
 * @param {ReactNode} headerRight - Optional right header element
 */

const FeatureSetupPage = ({
  title,
  onBack,
  headline,
  description,
  actions = [],
  colors = {},
  headerRight,
  isVerified,
   phones = [],
  showStatusBar = true,
}) => {
  const theme = {
    background: colors.background || '#f8f9fa',
    headerBg: colors.headerBg || '#f8f9fa',
    titleColor: colors.titleColor || '#000000',
    backIconColor: colors.backIconColor || '#000000',
    headlineColor: colors.headlineColor || '#000000',
    descriptionColor: colors.descriptionColor || '#666666',
    cardBg: colors.cardBg || '#e5e5ea',
    cardText: colors.cardText || '#000000',
    cardIcon: colors.cardIcon || '#000000',
    badgeBg: colors.badgeBg || '#8e8e93',
    badgeText: colors.badgeText || '#ffffff',
  };

  const renderIcon = (item) => {
    const iconProps = {
      size: responsiveWidth(5.5),
      color: item.iconColor || theme.cardIcon,
      style: styles.actionIcon,
    };

    if (item.iconType === 'Ion' || !item.iconType) {
      return <Ionicons name={item.icon} {...iconProps} />;
    }
    return <Icon name={item.icon} {...iconProps} />;
  };
  const navigation=useNavigation()
const onAddBackup = () => {
  navigation.navigate('AddPhoneNumber') // if needed
};
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {showStatusBar && (
        <StatusBar 
          barStyle={colors.statusBarStyle || "dark-content"} 
          backgroundColor={theme.headerBg} 
        />
      )}
      
      {/* Header */}
            <View style={styles.headWrapper}>
        <CustomHeader title={""}  onPress={()=>navigation.navigate("SecuritynPassword")}/>

      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Headline */}
        <Text style={[styles.headline, { color: theme.headlineColor }]}>
          {headline}
        </Text>

        {/* Description */}
        {description && (
          <Text style={[styles.description, { color: theme.descriptionColor }]}>
            {description}
          </Text>
        )}

        {/* Action Cards */}
    { !isVerified &&   <View style={styles.actionsContainer}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.actionCard, { backgroundColor: theme.cardBg }]}
              onPress={action.onPress}
              activeOpacity={0.7}
            >
              {renderIcon(action)}
              
              <Text style={[styles.actionText, { color: theme.cardText }]}>
                {action.title}
              </Text>

              {action.badge && (
                <View style={[
                  styles.badge, 
                  { backgroundColor: action.badgeColor || theme.badgeBg }
                ]}>
                  <Text style={[styles.badgeText, { color: theme.badgeText }]}>
                    {action.badge}
                  </Text>
                </View>
              )}

              <Ionicons
                name="chevron-forward"
                size={responsiveWidth(5)}
                color={theme.descriptionColor}
                style={styles.chevron}
              />
            </TouchableOpacity>
          ))}
        </View>}
{phones.map((item, index) => (
  <TFACard key={index} phoneNumber={item} />
))}
        {phones.length > 0 && <BackupButton onPress={onAddBackup} />}


        <View style={{ height: responsiveHeight(4) }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeatureSetupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.5),
  },
       headWrapper: {
    // backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
  backButton: {
    padding: responsiveWidth(2),
    marginLeft: -responsiveWidth(2),
  },
  headerTitle: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
  },
  headerRight: {
    width: responsiveWidth(10),
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  headline: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    marginBottom: responsiveHeight(1.5),
  },
  description: {
    fontSize: responsiveFontSize(1.85),
    lineHeight: responsiveHeight(2.7),
    marginBottom: responsiveHeight(3),
  },
  actionsContainer: {
    gap: responsiveHeight(1.5),
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.9),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
  },
  actionIcon: {
    marginRight: responsiveWidth(3),
  },
  actionText: {
    flex: 1,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  badge: {
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.3),
    borderRadius: responsiveWidth(1),
    marginRight: responsiveWidth(2),
  },
  badgeText: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: '700',
  },
  chevron: {
    opacity: 0.6,
  },
});