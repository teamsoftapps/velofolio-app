import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';

import AboutTab from '../../components/TeamTabs/AboutTab';
import OverviewTab from '../../components/TeamTabs/OverviewTab';
import JobsTab from '../../components/TeamTabs/JobsTab';
import TasksTab from '../../components/TeamTabs/TasksTab';
import AvailabilityTab from '../../components/TeamTabs/AvailabilityTab';
import PerformanceTab from '../../components/TeamTabs/PerformanceTab';

const TABS = [
  'ABOUT',
  'OVERVIEW',
  'JOBS',
  'TASKS',
  'AVAILABILITY',
  'PERFORMANCE',
];

const TeamProfileScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const member = route?.params?.member || {};
  const [activeTab, setActiveTab] = useState('ABOUT');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return <AboutTab member={member} />;
      case 'OVERVIEW':
        return <OverviewTab />;
      case 'JOBS':
        return <JobsTab />;
      case 'TASKS':
        return <TasksTab />;
      case 'AVAILABILITY':
        return <AvailabilityTab />;
      case 'PERFORMANCE':
        return <PerformanceTab />;
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      {/* Top Rounded Header Wrapper */}
      <View style={[styles.headerWrapper, { paddingTop: insets.top }]}>
        {/* Header Area */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Team Profile</Typography>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.profileLeft}>
              <Image
                source={{
                  uri:
                    member?.avatar ||
                    'https://i.pravatar.cc/150?img=47',
                }}
                style={styles.profileAvatar}
              />
              <View style={styles.profileInfo}>
                <Typography style={styles.profileName}>
                  {member?.name || 'Sarah Lee'}
                </Typography>
                <Typography style={styles.profileRole}>
                  {member?.role || 'Lead Photographer'}
                </Typography>
                <TouchableOpacity style={styles.statusDropdown}>
                  <View style={styles.statusDot} />
                  <Typography style={styles.statusText}>Active</Typography>
                  <Feather name="chevron-down" size={rs(14)} color="#111827" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Feather name="more-horizontal" size={rs(24)} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabBarWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScrollContent}
          >
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={styles.tabButton}
                onPress={() => setActiveTab(tab)}
              >
                <Typography
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Typography>
                {activeTab === tab && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderTabContent()}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(32),
    borderBottomRightRadius: rs(32),
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: rs(10) },
    shadowOpacity: 0.03,
    shadowRadius: rs(15),
    elevation: 4,
    zIndex: 10,
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(24),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: rs(22),
    fontWeight: '700',
    color: '#000',
    marginLeft: rs(20),
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rs(20),
  },
  profileLeft: {
    flexDirection: 'row',
  },
  profileAvatar: {
    width: rs(74),
    height: rs(74),
    borderRadius: rs(37),
    marginRight: rs(16),
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(2),
  },
  profileRole: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginBottom: rs(8),
  },
  statusDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(20),
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: rs(8),
    height: rs(8),
    borderRadius: rs(4),
    backgroundColor: '#FBBF24',
    marginRight: rs(6),
  },
  statusText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
    marginRight: rs(4),
  },
  moreButton: {
    marginTop: rs(4),
  },
  tabBarWrapper: {
    backgroundColor: 'transparent',
    paddingBottom: rs(4),
  },
  tabScrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: 0,
  },
  tabButton: {
    paddingVertical: rs(14),
    marginRight: rs(24),
    position: 'relative',
  },
  tabText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: '#111827',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: rs(3),
    backgroundColor: '#38BDF8',
    borderTopLeftRadius: rs(2),
    borderTopRightRadius: rs(2),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(24),
    paddingBottom: rh(120),
  },
});

export default TeamProfileScreen;
