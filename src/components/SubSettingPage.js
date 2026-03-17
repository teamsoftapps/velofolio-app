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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialDesignIcons from 'react-native-vector-icons/MaterialDesignIcons';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from './CustomHeader';

/**
 * Reusable SubSettingsPage Component
 * A complete sub-settings page with header and grouped list
 * 
 * @param {string} title - Page title (e.g., "Security & Password")
 * @param {function} onBack - Back button press handler
 * @param {Array} sections - Settings sections array
 * @param {object} colors - Theme colors
 * @param {ReactNode} headerRight - Optional right header component
 * @param {boolean} showStatusBar - Whether to handle status bar
 * @param {object} style - Additional container styles
 * @param {object} contentContainerStyle - ScrollView content styles
 */

const SubSettingsPage = ({
  title,
  onBack,
  sections = [],
  colors = {},
  headerRight,
  showStatusBar = true,
  style,
  contentContainerStyle,
}) => {
  const theme = {
    background: colors.background || '#f8f9fa',
    headerBg: colors.headerBg || '#ffffff',
    sectionBg: colors.sectionBg || '#ffffff',
    textPrimary: colors.textPrimary || '#222222',
    textSecondary: colors.textSecondary || '#666666',
    iconColor: colors.iconColor || '#444444',
    chevronColor: colors.chevronColor || '#999999',
    badgeBg: colors.badgeBg || '#e5e5ea',
    badgeText: colors.badgeText || '#8e8e93',
    divider: colors.divider || '#eeeeee',
    headerText: colors.headerText || '#8e8e93',
    titleColor: colors.titleColor || '#000000',
    backIconColor: colors.backIconColor || '#000000',
  };

  const renderIcon = (item) => {
    const iconProps = {
      size: responsiveWidth(5.5),
      color: item.iconColor || theme.iconColor,
      style: styles.rowIcon,
    };

    if (item.iconType === 'Ion') {
      return <Ionicons name={item.icon} {...iconProps} />;
    }
    return <Icon name={item.icon} {...iconProps} />;
  };

  const renderRow = (item, index, totalItems) => {
    const isFirst = index === 0;
    const showBorder = !isFirst;

    return (
      <TouchableOpacity
        key={`${item.title}-${index}`}
        style={[
          styles.row,
          showBorder && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.divider },
          item.danger && styles.dangerRow,
        ]}
        onPress={item.onPress}
        activeOpacity={0.7}
        disabled={item.disabled}
      >
        {renderIcon(item)}
        
        <Text style={[
          styles.rowText, 
          { color: item.danger ? '#ff3b30' : theme.textPrimary }
        ]}>
          {item.title}
        </Text>

        {item.badge && (
          <View style={[
            styles.badge, 
            { backgroundColor: item.badgeColor || theme.badgeBg }
          ]}>
            <Text style={[styles.badgeText, { color: theme.badgeText }]}>
              {item.badge}
            </Text>
          </View>
        )}

        {item.value && (
          <Text style={styles.valueText} numberOfLines={1}>
            {item.value}
          </Text>
        )}

        {!item.hideArrow && (
          <Ionicons
            name="chevron-forward"
            size={responsiveWidth(5)}
            color={theme.chevronColor}
            style={styles.chevron}
          />
        )}
      </TouchableOpacity>
    );
  };

  const renderSection = (section, sectionIndex) => (
    <View key={`section-${sectionIndex}`} style={styles.sectionWrapper}>
      {section.title && (
        <Text style={[styles.sectionHeader, { color: theme.headerText }]}>
          {section.title}
        </Text>
      )}
      
      <View style={[styles.section, { backgroundColor: theme.sectionBg }]}>
        {section.items.map((item, index) => 
          renderRow(item, index, section.items.length)
        )}
      </View>
      
      {section.footer && (
        <Text style={[styles.sectionFooter, { color: theme.textSecondary }]}>
          {section.footer}
        </Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }, style]}>
      {showStatusBar && (
        <StatusBar 
          barStyle={colors.statusBarStyle || "dark-content"} 
          backgroundColor={theme.headerBg} 
        />
      )}
      
      {/* Header */}
            <View style={styles.headWrapper}>
        <CustomHeader title="Security & Password" />

      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
      >
        {sections.map((section, index) => renderSection(section, index))}
        <View style={{ height: responsiveHeight(4) }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubSettingsPage;

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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e5ea',
  },
     headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
  backButton: {
    padding: responsiveWidth(2),
    marginLeft: -responsiveWidth(2),
    backgroundColor:colors.gray,
    borderRadius:responsiveWidth(2)
  },
  headerTitle: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
  },
  headerRight: {
    width: responsiveWidth(10),
    alignItems: 'flex-end',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: responsiveHeight(1.5),
  },
  sectionWrapper: {
    marginBottom: responsiveHeight(2),
  },
  sectionHeader: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(1),
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  section: {
    borderRadius: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  sectionFooter: {
    fontSize: responsiveFontSize(1.5),
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    lineHeight: responsiveHeight(2.2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(4),
  },
  dangerRow: {
    // Additional styling for danger items
  },
  rowIcon: {
    marginRight: responsiveWidth(3.5),
    width: responsiveWidth(6),
  },
  rowText: {
    flex: 1,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
  },
  valueText: {
    fontSize: responsiveFontSize(1.7),
    color: '#8e8e93',
    marginRight: responsiveWidth(1),
    maxWidth: responsiveWidth(40),
  },
  badge: {
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.4),
    borderRadius: responsiveWidth(1.2),
    marginRight: responsiveWidth(2),
  },
  badgeText: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  chevron: {
    opacity: 0.6,
  },
});