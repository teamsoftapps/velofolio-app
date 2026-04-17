import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NOTIFICATION_TABS = ['All', 'Jobs', 'Payments', 'Clients', 'Team'];

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Job Update',
    description: 'Wedding Film for Sarah moved to In Pr...',
    time: '10 minutes ago',
    icon: 'briefcase',
    iconColor: '#38BDF8',
    bgColor: '#E0F2FE',
    hasDot: true,
  },
  {
    id: 2,
    title: 'Payment Received',
    description: 'Invoice #INV-021 paid by Lumière Stu...',
    time: '1 hour ago',
    icon: 'credit-card',
    iconColor: '#10B981',
    bgColor: '#D1FAE5',
    hasDot: true,
  },
  {
    id: 3,
    title: 'Team Activity',
    description: 'Alex added a new job: Music Video Sh...',
    time: '2:30 PM',
    icon: 'users',
    iconColor: '#F59E0B',
    bgColor: '#FEF3C7',
    hasDot: false,
  },
  {
    id: 4,
    title: 'Action Required',
    description: 'Invoice #INV-018 is overdue',
    time: '2:30 PM',
    icon: 'alert-triangle',
    iconColor: '#EF4444',
    bgColor: '#FEE2E2',
    hasDot: false,
  },
];

const NotificationsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <ScreenWrapper backgroundColor="#FFFFFF" disablePaddingTop={true}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Notifications</Typography>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabScroll}
        >
          {NOTIFICATION_TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {NOTIFICATIONS_DATA.map(item => (
          <View key={item.id} style={styles.notificationCard}>
            <View style={styles.cardMain}>
              <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
                <Feather name={item.icon} size={rs(20)} color={item.iconColor} />
              </View>

              <View style={styles.textContainer}>
                <View style={styles.titleRow}>
                  <View style={styles.titleWithDot}>
                    {item.hasDot && <View style={[styles.dot, { backgroundColor: item.iconColor }]} />}
                    <Typography style={styles.cardTitle}>{item.title}</Typography>
                  </View>
                  <Typography style={styles.timeText}>{item.time}</Typography>
                </View>
                <Typography style={styles.descriptionText} numberOfLines={1}>
                  {item.description}
                </Typography>
              </View>
            </View>
            <TouchableOpacity style={styles.viewDetailsBtn}>
              <Typography style={styles.viewDetailsText}>View Details</Typography>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ height: rh(40) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(15),
  },
  backButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: rs(16),
  },
  headerTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
  },
  tabScroll: {
    paddingHorizontal: rs(20),
    marginTop: rs(5),
  },
  tabItem: {
    paddingHorizontal: rs(24),
    paddingVertical: rs(10),
    borderRadius: rs(25),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: rs(12),
    backgroundColor: '#FFFFFF',
  },
  tabItemActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  tabText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  listContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(24),
    paddingBottom: rh(100),
    backgroundColor: '#FAFAFA',
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  cardMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(4),
  },
  titleWithDot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: rs(6),
    height: rs(6),
    borderRadius: rs(3),
    marginRight: rs(6),
  },
  cardTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  timeText: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  descriptionText: {
    fontSize: rs(14),
    color: '#6B7280',
    lineHeight: rs(20),
  },
  viewDetailsBtn: {
    marginTop: rs(12),
    marginLeft: rs(64), // Align with text
  },
  viewDetailsText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#38BDF8',
  },
});

export default NotificationsScreen;
