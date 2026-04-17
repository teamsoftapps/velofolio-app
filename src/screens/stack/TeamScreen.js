import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TEAM_DATA = [
  {
    id: 1,
    name: 'Sarah Lee',
    role: 'Lead Photographer',
    avatar: 'https://i.pravatar.cc/150?img=47',
    status: 'Active',
    jobs: 2,
    workload: 'Available',
    workloadColor: '#10B981',
  },
  {
    id: 2,
    name: 'Alex Turner',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/150?img=12',
    status: 'Active',
    jobs: 6,
    workload: 'Busy',
    workloadColor: '#EF4444',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Videographer',
    avatar: 'https://i.pravatar.cc/150?img=45',
    status: 'Active',
    jobs: 9,
    workload: 'Fully Booked',
    workloadColor: '#EF4444',
  },
  {
    id: 4,
    name: 'Peter Smith',
    role: 'Lead Photographer',
    initial: 'P',
    initialBg: '#FBBF24',
    status: 'Active',
    jobs: 4,
    workload: 'Available',
    workloadColor: '#10B981',
  },
];

const TeamScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Team</Typography>
          </View>
          <TouchableOpacity style={styles.messageButton}>
            <Feather name="mail" size={rs(20)} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search by name, role, or email"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {TEAM_DATA.map(member => (
          <TouchableOpacity
            key={member.id}
            style={styles.memberCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TeamProfile', { member })}
          >
            {/* Top row */}
            <View style={styles.cardTopRow}>
              <View style={styles.memberInfo}>
                {member.avatar ? (
                  <Image source={{ uri: member.avatar }} style={styles.avatar} />
                ) : (
                  <View style={[styles.initialAvatar, { backgroundColor: member.initialBg }]}>
                    <Typography style={styles.initialText}>{member.initial}</Typography>
                  </View>
                )}
                <View style={styles.memberText}>
                  <Typography style={styles.memberName}>{member.name}</Typography>
                  <Typography style={styles.memberRole}>{member.role}</Typography>
                </View>
              </View>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Metrics Row */}
            <View style={styles.metricsRow}>
              <View style={styles.metricItem}>
                <Typography style={styles.metricLabel}>Status</Typography>
                <View style={styles.statusRow}>
                  <View style={styles.statusDot} />
                  <Typography style={styles.statusText}>{member.status}</Typography>
                </View>
              </View>
              <View style={styles.metricItem}>
                <Typography style={styles.metricLabel}>Jobs</Typography>
                <Typography style={styles.metricValue}>{member.jobs}</Typography>
              </View>
              <View style={styles.metricItem}>
                <Typography style={styles.metricLabel}>Workload</Typography>
                <Typography style={[styles.metricValue, { color: member.workloadColor }]}>
                  {member.workload}
                </Typography>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: rh(100) }} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={styles.fabContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddMember')}
      >
        <Feather name="plus" size={rs(18)} color="#FFF" style={{ marginRight: rs(6) }} />
        <Typography style={styles.fabText}>Add Member</Typography>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(24),
    marginBottom: rs(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
  messageButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(20),
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginTop: rs(8),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(15),
    color: '#111827',
  },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: rs(16),
  },
  memberCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    marginBottom: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(24),
  },
  initialAvatar: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialText: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  memberText: {
    marginLeft: rs(12),
  },
  memberName: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(2),
  },
  memberRole: {
    fontSize: rs(13),
    color: '#6B7280',
  },
  metricsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: rs(14),
  },
  metricItem: {
    flex: 1,
  },
  metricLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: rs(6),
  },
  metricValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: rs(8),
    height: rs(8),
    borderRadius: rs(4),
    backgroundColor: '#10B981',
    marginRight: rs(6),
  },
  statusText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  fabContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? rh(100) : rh(90),
    right: rs(20),
    backgroundColor: '#000000',
    borderRadius: rs(28),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(14),
    paddingHorizontal: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(15),
  },
});

export default TeamScreen;
