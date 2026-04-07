import React from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomHeader from './CustomHeader';

const NotificationSettingsPage = ({
  title,
  onBack,
  sections,
  colors = {},
}) => {
  const {
    background = '#f8f9fa',
    headerBg = '#ffffff',
    sectionBg = '#ffffff',
    textPrimary = '#222222',
    textSecondary = '#8e8e93',
    headerText = '#8e8e93',
    switchOnTrack = '#34c759',
    switchOffTrack = '#e5e5ea',
    switchThumb = '#ffffff',
  } = colors;

  const renderToggleItem = (item, index) => (
    <View
      key={index}
      style={[
        styles.item,
        index === 0 && styles.firstItem,
        index === sections[0].items.length - 1 && styles.lastItem,
      ]}
    >
      <Text style={[styles.itemTitle, { color: textPrimary }]}>
        {item.title}
      </Text>
      <Switch
        value={item.value}
        onValueChange={item.onToggle}
        trackColor={{ false: switchOffTrack, true: switchOnTrack }}
        thumbColor={switchThumb}
        
        ios_backgroundColor={switchOffTrack}
      />
    </View>
  );

  const renderSection = (section, index) => (
    <View key={index} style={styles.section}>
      <Text style={[styles.sectionHeader, { color: headerText }]}>
        {section.title}
      </Text>
      <View style={[styles.sectionContent, { backgroundColor: sectionBg }]}>
        {section.items.map(renderToggleItem)}
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {/* Header */}
      <View style={[styles.headWrapper, { backgroundColor: headerBg }]}>
        <CustomHeader title={title} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {sections.map(renderSection)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(4),
    paddingBottom: responsiveWidth(8),
  },
  section: {
    marginBottom: responsiveHeight(3),
  },
  sectionHeader: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: responsiveHeight(1.5),
    letterSpacing: 0.5,
  },
  sectionContent: {
    borderRadius: responsiveWidth(3),
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  firstItem: {
    paddingTop: responsiveHeight(2.5),
  },
  lastItem: {
    borderBottomWidth: 0,
    paddingBottom: responsiveHeight(2.5),
  },
  itemTitle: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
    flex: 1,
    marginRight: responsiveWidth(4),
  },
});

export default NotificationSettingsPage;