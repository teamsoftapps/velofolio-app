import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import RecentJobCard from '../../components/RecentJobCard';
import BoardJobCard from '../../components/BoardJobCard';
import JobDetailModal from '../../components/JobDetailModal';
import { rs, rh } from '../../utils/dimensions';

const JOB_DATA = [
  {
    type: 'Wedding',
    status: 'In Progress',
    title: 'Wedding Film – Mark & Jess',
    date: '12 Nov 2025',
    client: 'Sarah Johnson',
    progress: 0,
    showProgress: false,
    hasProgressTasks: true,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#E0F2FE', // Light blue
    statusColor: '#38BDF8', // Blue
  },
  {
    type: 'Music Video',
    status: 'Review',
    title: 'Music Video – Willow Studio',
    date: '10 Nov 2025',
    client: 'Willow Studio',
    progress: 90,
    showProgress: true,
    taskProgress: 'Task 3 of 4',
    hasProgressTasks: false,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#FEF3C7', // Light yellow
    statusColor: '#F59E0B', // Orange/yellow
  },
  {
    type: 'Pre-Wedding',
    status: 'Completed',
    title: 'Pre-Wedding Shoot – Julie & Tom',
    date: '10 Nov 2025',
    client: 'Julie & Tom',
    progress: 100,
    showProgress: true,
    taskProgress: 'Task 4 of 4',
    hasProgressTasks: false,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#D1FAE5', // Light green
    statusColor: '#34D399', // Green
  },
  {
    type: 'Pre-Wedding',
    status: 'Pending',
    title: 'Birthday Shoot',
    date: '10 Nov 2025',
    client: 'Julie & Tom',
    progress: 0,
    showProgress: true,
    taskProgress: 'Task 0 of 4',
    hasProgressTasks: false,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#F3F4F6', // Light gray
    statusColor: '#9CA3AF', // Gray
  },
  {
    type: 'Pre-Wedding',
    status: 'On Hold',
    title: 'Birthday Shoot',
    date: '10 Nov 2025',
    client: 'Julie & Tom',
    progress: 20,
    showProgress: true,
    taskProgress: 'Task 1 of 4',
    hasProgressTasks: false,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#FEF3C7', // Light yellow
    statusColor: '#FBBF24', // Yellow
  },
  {
    type: 'Pre-Wedding',
    status: 'Cancelled',
    title: 'Birthday Shoot',
    date: '10 Nov 2025',
    client: 'Julie & Tom',
    progress: 40,
    showProgress: true,
    taskProgress: 'Task 2 of 4',
    hasProgressTasks: false,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
      'https://i.pravatar.cc/150?img=34',
    ],
    backgroundColor: '#FCE7F3', // Light pink
    statusColor: '#EF4444', // Red
  },
];

const BOARD_DATA_PENDING = [
  {
    id: 'p1',
    title: 'Wedding Film – Mark & Jess',
    client: 'Sarah Johnson',
    date: 'Oct 7, 2025',
    description: 'Footage received from the videographer. Editor...',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', // Example image
    attachmentsCount: 2,
    commentsCount: 4,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=34',
    ],
    clientBgColor: '#E0F2FE',
    clientTextColor: '#38BDF8',
    dateBgColor: '#FFEDD5',
    dateTextColor: '#F87171',
  },
  {
    id: 'p2',
    title: 'Wedding Photo – Alex & Joy',
    client: 'Sarah Johnson',
    date: 'Oct 15, 2025',
    description: 'Highlight footage raw files are missing...',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', // Example image
    attachmentsCount: 1,
    commentsCount: 2,
    members: ['https://i.pravatar.cc/150?img=33'],
    clientBgColor: '#E0F2FE',
    clientTextColor: '#38BDF8',
    dateBgColor: '#FFEDD5',
    dateTextColor: '#F87171',
  },
];

const BOARD_DATA_IN_PROGRESS = [
  {
    id: 'i1',
    title: 'Wedding Film – Mark & Jess',
    client: 'Sarah Johnson',
    date: 'Oct 7, 2025',
    description: 'Highlight Reel (3 min), Full Edited Footage (2 ho...',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389', // Example image
    attachmentsCount: 0,
    commentsCount: 1,
    members: ['https://i.pravatar.cc/150?img=34'],
    clientBgColor: '#E0F2FE',
    clientTextColor: '#38BDF8',
    dateBgColor: '#FFEDD5',
    dateTextColor: '#F87171',
  },
  {
    id: 'i2',
    title: 'Wedding Photo – Alex & Joy',
    client: 'Sarah Johnson',
    date: 'Oct 15, 2025',
    description: 'Color grading photos in progress...',
    image: 'https://images.unsplash.com/photo-1532712938730-4e36bc55b5d8', // Example image
    attachmentsCount: 3,
    commentsCount: 5,
    members: [
      'https://i.pravatar.cc/150?img=32',
      'https://i.pravatar.cc/150?img=33',
    ],
    clientBgColor: '#E0F2FE',
    clientTextColor: '#38BDF8',
    dateBgColor: '#FFEDD5',
    dateTextColor: '#F87171',
  },
];

const JobsScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openJobDetail = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);
  return (
    <ScreenWrapper backgroundColor="#FFFFFF">
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Typography style={styles.headerTitle}>Jobs</Typography>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'list' && styles.activeTabBg]}
            onPress={() => setActiveTab('list')}
          >
            <Typography
              style={
                activeTab === 'list'
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              List
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'board' && styles.activeTabBg]}
            onPress={() => setActiveTab('board')}
          >
            <Typography
              style={
                activeTab === 'board'
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              Board
            </Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="search" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="sliders" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {activeTab === 'list' ? (
        <ScrollView
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        >
          {JOB_DATA.map((job, index) => (
            <View key={index} style={styles.cardWrapper}>
              <RecentJobCard
                {...job}
                onPress={() => navigation.navigate('JobProfile', { job })}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView
          contentContainerStyle={styles.boardContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Pending Section */}
          <View style={styles.boardSection}>
            <View style={styles.boardSectionHeader}>
              <View style={styles.boardSectionTitleRow}>
                <Typography style={styles.boardSectionTitle}>
                  Pending
                </Typography>
                <View style={styles.boardBadge}>
                  <Typography style={styles.boardBadgeText}>
                    {BOARD_DATA_PENDING.length}
                  </Typography>
                </View>
              </View>
              <TouchableOpacity
                style={styles.boardSectionAddIcon}
                onPress={() => navigation.navigate('AddJob')}
              >
                <Feather name="plus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={BOARD_DATA_PENDING}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <BoardJobCard
                  {...item}
                  onPress={() => openJobDetail(item)}
                />
              )}
              contentContainerStyle={styles.boardListContent}
            />
          </View>

          {/* In Progress Section */}
          <View style={styles.boardSection}>
            <View style={styles.boardSectionHeader}>
              <View style={styles.boardSectionTitleRow}>
                <Typography style={styles.boardSectionTitle}>
                  In Progress
                </Typography>
                <View style={styles.boardBadge}>
                  <Typography style={styles.boardBadgeText}>
                    {BOARD_DATA_IN_PROGRESS.length}
                  </Typography>
                </View>
              </View>
              <TouchableOpacity
                style={styles.boardSectionAddIcon}
                onPress={() => navigation.navigate('AddJob')}
              >
                <Feather name="plus" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={BOARD_DATA_IN_PROGRESS}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <BoardJobCard
                  {...item}
                  onPress={() => openJobDetail(item)}
                />
              )}
              contentContainerStyle={styles.boardListContent}
            />
          </View>
        </ScrollView>
      )}

      {/* Floating Add Job Button (if not using tab bar modal) */}
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation.navigate('AddJob')}
      >
        <Feather name="plus" size={20} color="#FFF" style={styles.fabIcon} />
        <Typography style={styles.fabText}>Add Job</Typography>
      </TouchableOpacity>

      <JobDetailModal
        visible={modalVisible}
        job={selectedJob}
        onClose={() => setModalVisible(false)}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(20),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
  },
  headerTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#000',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginBottom: rs(20),
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    padding: rs(4),
    marginRight: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: rs(8),
    alignItems: 'center',
    borderRadius: rs(8),
  },
  activeTabBg: {
    backgroundColor: '#38BDF8',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: rs(14),
  },
  inactiveTabText: {
    color: '#6B7280',
    fontWeight: '600',
    fontSize: rs(14),
  },
  iconButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(8),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: rs(8),
  },
  listContainer: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(120), // Padding for bottom tab and FAB
  },
  cardWrapper: {
    marginBottom: rs(16),
  },
  boardContainer: {
    paddingBottom: rh(120),
  },
  boardSection: {
    marginBottom: rs(32),
  },
  boardSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginBottom: rs(16),
  },
  boardSectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boardSectionTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  boardBadge: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(6),
    paddingHorizontal: rs(8),
    paddingVertical: rs(2),
    marginLeft: rs(8),
  },
  boardBadgeText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#6B7280',
  },
  boardSectionAddIcon: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardListContent: {
    paddingLeft: rs(20),
    paddingRight: rs(4), // the last item has marginRight applied to it
  },
  fabButton: {
    position: 'absolute',
    bottom: rh(90),
    right: rs(20),
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
    borderRadius: rs(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  fabIcon: {
    marginRight: rs(6),
  },
  fabText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: rs(14),
  },
});

export default JobsScreen;
