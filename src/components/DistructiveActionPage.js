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

/**
 * Reusable DestructiveActionPage Component
 * For dangerous actions like Delete Account, Remove Data, Cancel Subscription, etc.
 * 
 * @param {string} title - Page title
 * @param {string} headline - Main warning question/text
 * @param {Array} warnings - Array of warning description strings
 * @param {function} onBack - Back button handler
 * @param {function} onPrimaryAction - Main destructive action (e.g., delete)
 * @param {string} primaryActionText - Text for primary button
 * @param {function} onSecondaryAction - Secondary action handler (e.g., go back)
 * @param {string} secondaryActionText - Text for secondary button
 * @param {object} dataExport - Data export option configuration
 * @param {boolean} dataExport.show - Whether to show data export card
 * @param {string} dataExport.title - Card title
 * @param {string} dataExport.description - Card description
 * @param {string} dataExport.linkText - Link text
 * @param {function} dataExport.onLinkPress - Link press handler
 * @param {object} support - Support option configuration
 * @param {boolean} support.show - Whether to show support link
 * @param {string} support.text - Support link text
 * @param {function} support.onPress - Support press handler
 * @param {object} colors - Theme colors
 * @param {boolean} showStatusBar - Whether to handle status bar
 */

const DestructiveActionPage = ({
  title,
  headline,
  warnings = [],
  onBack,
  onPrimaryAction,
  primaryActionText = 'Delete Account',
  onSecondaryAction,
  secondaryActionText = 'Go Back',
  dataExport = { show: false },
  support = { show: false },
  colors = {},
  showStatusBar = true,
}) => {
  const theme = {
    background: colors.background || '#f8f9fa',
    headerBg: colors.headerBg || '#f8f9fa',
    titleColor: colors.titleColor || '#000000',
    backIconColor: colors.backIconColor || '#000000',
    headlineColor: colors.headlineColor || '#000000',
    textColor: colors.textColor || '#666666',
    warningColor: colors.warningColor || '#666666',
    cardBg: colors.cardBg || '#e5e5ea',
    cardText: colors.cardText || '#666666',
    linkColor: colors.linkColor || '#0a84ff',
    primaryButtonBg: colors.primaryButtonBg || '#ff3b30',
    primaryButtonText: colors.primaryButtonText || '#ffffff',
    secondaryButtonBg: colors.secondaryButtonBg || 'transparent',
    secondaryButtonText: colors.secondaryButtonText || '#000000',
    secondaryButtonBorder: colors.secondaryButtonBorder || '#c7c7cc',
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
      <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons 
            name="arrow-back" 
            size={responsiveWidth(6)} 
            color={theme.backIconColor} 
          />
        </TouchableOpacity>
        
        <Text style={[styles.headerTitle, { color: theme.titleColor }]}>
          {title}
        </Text>
        
        <View style={styles.headerRight} />
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

        {/* Warnings */}
        <View style={styles.warningsContainer}>
          {warnings.map((warning, index) => (
            <Text 
              key={index} 
              style={[styles.warningText, { color: theme.warningColor }]}
            >
              {warning}
            </Text>
          ))}
        </View>

        {/* Data Export Card */}
        {dataExport.show && (
          <View style={[styles.card, { backgroundColor: theme.cardBg }]}>
            <Text style={[styles.cardTitle, { color: theme.headlineColor }]}>
              {dataExport.title}
            </Text>
            <Text style={[styles.cardDescription, { color: theme.cardText }]}>
              {dataExport.description}
            </Text>
            <TouchableOpacity 
              onPress={dataExport.onLinkPress}
              activeOpacity={0.7}
            >
              <Text style={[styles.cardLink, { color: theme.linkColor }]}>
                {dataExport.linkText}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Support Link */}
        {support.show && (
          <TouchableOpacity 
            style={styles.supportContainer}
            onPress={support.onPress}
            activeOpacity={0.7}
          >
            <Text style={[styles.supportText, { color: theme.linkColor }]}>
              {support.text}
            </Text>
          </TouchableOpacity>
        )}

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.button, 
              styles.primaryButton, 
              { backgroundColor: theme.primaryButtonBg }
            ]}
            onPress={onPrimaryAction}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.buttonText, 
              { color: theme.primaryButtonText }
            ]}>
              {primaryActionText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button, 
              styles.secondaryButton, 
              { 
                backgroundColor: theme.secondaryButtonBg,
                borderColor: theme.secondaryButtonBorder 
              }
            ]}
            onPress={onSecondaryAction || onBack}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.buttonText, 
              { color: theme.secondaryButtonText }
            ]}>
              {secondaryActionText}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom spacing */}
        <View style={{ height: responsiveHeight(4) }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DestructiveActionPage;

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
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    marginBottom: responsiveHeight(2),
    lineHeight: responsiveHeight(3),
  },
  warningsContainer: {
    marginBottom: responsiveHeight(3),
  },
  warningText: {
    fontSize: responsiveFontSize(1.85),
    lineHeight: responsiveHeight(2.8),
    marginBottom: responsiveHeight(1.5),
  },
  card: {
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(5),
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  cardTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    marginBottom: responsiveHeight(1.5),
  },
  cardDescription: {
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
    lineHeight: responsiveHeight(2.5),
    marginBottom: responsiveHeight(1.5),
  },
  cardLink: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  supportContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  supportText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    gap: responsiveHeight(1.5),
  },
  button: {
    paddingVertical: responsiveHeight(1.8),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    // Background color from theme
  },
  secondaryButton: {
    borderWidth: 1,
  },
  buttonText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
  },
});