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
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TIME_FILTERS = ['7D', '30D', 'MTD', 'YTD', 'Custom'];

const SUMMARY_CARDS = [
  { label: 'Payments Received', value: '$42,750', change: '+12%', changeBg: '#D1FAE5', changeColor: '#059669', bg: '#F0FDF4' },
  { label: 'Pending Payments', value: '$8,500', change: '+5%', changeBg: '#D1FAE5', changeColor: '#059669', bg: '#FEF9C3' },
  { label: 'Jobs Completed', value: '38 / 52', change: '73%', changeBg: '#FEF3C7', changeColor: '#D97706', bg: '#E0F2FE' },
  { label: 'New Leads', value: '14', change: '+3', changeBg: '#D1FAE5', changeColor: '#059669', bg: '#ECFDF5' },
];

const BREAKDOWN = [
  { label: 'Paid', dot: '#10B981', value: '$42,750', change: '+73%', changeBg: '#D1FAE5', changeColor: '#059669' },
  { label: 'Pending', dot: '#FBBF24', value: '$8,500', change: '+15%', changeBg: '#D1FAE5', changeColor: '#059669' },
  { label: 'Overdue', dot: '#EF4444', value: '$3,200', change: '+12%', changeBg: '#FEE2E2', changeColor: '#EF4444' },
];

const TEAM_MEMBERS = [
  { name: 'John Smith', role: 'Videographer', avatar: 'https://i.pravatar.cc/150?img=12', jobs: 12, utilization: 85, color: '#38BDF8' },
  { name: 'Sarah Lee', role: 'Editor', avatar: 'https://i.pravatar.cc/150?img=47', jobs: 9, utilization: 70, color: '#38BDF8' },
];

const TOP_PROJECTS = [
  {
    name: 'Wedding Film',
    progress: '100% Complete',
    amount: '$5,000',
    status: 'Completed',
    statusColor: '#10B981',
    statusBg: '#D1FAE5',
    icon: 'check-circle',
    iconColor: '#10B981',
  },
];

const ReportsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('7D');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Reports & Analytics</Typography>
          </View>
          <TouchableOpacity style={styles.exportButton}>
            <Feather name="file-text" size={rs(20)} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Time Filter Tabs */}
        <View style={styles.filterRow}>
          {TIME_FILTERS.map(f => (
            <TouchableOpacity
              key={f}
              style={[styles.filterTab, activeFilter === f && styles.filterTabActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Typography style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>
                {f}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Summary Cards */}
        <View style={styles.summaryGrid}>
          {SUMMARY_CARDS.map((card, i) => (
            <View key={i} style={[styles.summaryCard, { backgroundColor: card.bg }]}>
              <Typography style={styles.summaryLabel}>{card.label}</Typography>
              <Typography style={styles.summaryValue}>{card.value}</Typography>
              <View style={[styles.changeBadge, { backgroundColor: card.changeBg }]}>
                <Typography style={[styles.changeText, { color: card.changeColor }]}>
                  {card.change} ↗
                </Typography>
              </View>
            </View>
          ))}
        </View>

        {/* Payments Breakdown */}
        <Typography style={styles.sectionTitle}>Payments Breakdown</Typography>
        <View style={styles.breakdownCard}>
          {BREAKDOWN.map((item, i) => (
            <View key={i} style={[styles.breakdownRow, i < BREAKDOWN.length - 1 && styles.breakdownBorder]}>
              <View style={styles.breakdownLeft}>
                <View style={[styles.breakdownDot, { backgroundColor: item.dot }]} />
                <Typography style={styles.breakdownLabel}>{item.label}</Typography>
              </View>
              <View style={styles.breakdownRight}>
                <Typography style={styles.breakdownValue}>{item.value}</Typography>
                <View style={[styles.breakdownChange, { backgroundColor: item.changeBg }]}>
                  <Typography style={[styles.breakdownChangeText, { color: item.changeColor }]}>
                    {item.change}
                  </Typography>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Team Utilization */}
        <View style={styles.sectionHeader}>
          <Typography style={styles.sectionTitle}>Team Utilization</Typography>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Typography style={styles.viewAllText}>View All</Typography>
            <Feather name="chevron-down" size={rs(14)} color="#6B7280" />
          </TouchableOpacity>
        </View>
        <View style={styles.teamCard}>
          {TEAM_MEMBERS.map((member, i) => (
            <View key={i} style={[styles.teamRow, i < TEAM_MEMBERS.length - 1 && { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' }]}>
              <Image source={{ uri: member.avatar }} style={styles.teamAvatar} />
              <View style={styles.teamInfo}>
                <Typography style={styles.teamName}>{member.name}</Typography>
                <Typography style={styles.teamRole}>{member.role}</Typography>
              </View>
              <View style={styles.teamBadge}>
                <Typography style={styles.teamBadgeText}>{member.jobs} JOBS</Typography>
              </View>
              <View style={styles.progressCircle}>
                <Typography style={styles.progressText}>{member.utilization}%</Typography>
              </View>
            </View>
          ))}
        </View>

        {/* Top Performing Projects */}
        <View style={styles.sectionHeader}>
          <Typography style={styles.sectionTitle}>Top Performing Projects</Typography>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Typography style={styles.viewAllText}>View All</Typography>
            <Feather name="chevron-down" size={rs(14)} color="#6B7280" />
          </TouchableOpacity>
        </View>
        {TOP_PROJECTS.map((project, i) => (
          <View key={i} style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <View>
                <Typography style={styles.projectName}>{project.name}</Typography>
                <Typography style={styles.projectProgress}>{project.progress}</Typography>
              </View>
              <Feather name={project.icon} size={rs(24)} color={project.iconColor} />
            </View>
            <View style={styles.projectFooter}>
              <View style={styles.projectAmount}>
                <View style={styles.dollarCircle}>
                  <Typography style={styles.dollarText}>$</Typography>
                </View>
                <Typography style={styles.projectAmountText}>{project.amount}</Typography>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: project.statusBg }]}>
                <Typography style={[styles.statusBadgeText, { color: project.statusColor }]}>
                  {project.status}
                </Typography>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: rh(100) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(20),
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
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
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
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  exportButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: rs(20),
    marginTop: rs(10),
  },
  filterTab: {
    paddingHorizontal: rs(16),
    paddingVertical: rs(8),
    borderRadius: rs(20),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    marginRight: rs(8),
    backgroundColor: '#FFFFFF',
  },
  filterTabActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  filterText: { fontSize: rs(13), fontWeight: '600', color: '#6B7280' },
  filterTextActive: { color: '#FFFFFF' },
  scrollContent: { paddingHorizontal: rs(16) },

  // Summary
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: rs(24),
  },
  summaryCard: {
    width: '48%',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(12),
  },
  summaryLabel: { fontSize: rs(12), color: '#6B7280', fontWeight: '500', marginBottom: rs(6) },
  summaryValue: { fontSize: rs(26), fontWeight: '800', color: '#111827', marginBottom: rs(8) },
  changeBadge: {
    alignSelf: 'flex-start',
    borderRadius: rs(12),
    paddingHorizontal: rs(8),
    paddingVertical: rs(3),
  },
  changeText: { fontSize: rs(11), fontWeight: '600' },

  // Breakdown
  sectionTitle: { fontSize: rs(18), fontWeight: '700', color: '#111827', marginBottom: rs(14) },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(14),
  },
  viewAllBtn: { flexDirection: 'row', alignItems: 'center' },
  viewAllText: { fontSize: rs(13), color: '#6B7280', fontWeight: '500', marginRight: rs(4) },
  breakdownCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(4),
    marginBottom: rs(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rs(14),
    paddingHorizontal: rs(16),
  },
  breakdownBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  breakdownLeft: { flexDirection: 'row', alignItems: 'center' },
  breakdownDot: { width: rs(10), height: rs(10), borderRadius: rs(5), marginRight: rs(12) },
  breakdownLabel: { fontSize: rs(15), fontWeight: '500', color: '#374151' },
  breakdownRight: { flexDirection: 'row', alignItems: 'center' },
  breakdownValue: { fontSize: rs(15), fontWeight: '700', color: '#111827', marginRight: rs(10) },
  breakdownChange: {
    borderRadius: rs(8),
    paddingHorizontal: rs(8),
    paddingVertical: rs(3),
  },
  breakdownChangeText: { fontSize: rs(12), fontWeight: '600' },

  // Team
  teamCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(12),
  },
  teamAvatar: { width: rs(42), height: rs(42), borderRadius: rs(21), marginRight: rs(12) },
  teamInfo: { flex: 1 },
  teamName: { fontSize: rs(15), fontWeight: '600', color: '#111827' },
  teamRole: { fontSize: rs(12), color: '#9CA3AF' },
  teamBadge: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(14),
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    marginRight: rs(10),
  },
  teamBadgeText: { fontSize: rs(11), fontWeight: '600', color: '#374151' },
  progressCircle: {
    width: rs(42),
    height: rs(42),
    borderRadius: rs(21),
    borderWidth: 3,
    borderColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: { fontSize: rs(11), fontWeight: '700', color: '#111827' },

  // Projects
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(18),
    marginBottom: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#FBBF24',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rs(14),
  },
  projectName: { fontSize: rs(16), fontWeight: '700', color: '#111827' },
  projectProgress: { fontSize: rs(13), color: '#6B7280', marginTop: rs(2) },
  projectFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: rs(12),
  },
  projectAmount: { flexDirection: 'row', alignItems: 'center' },
  dollarCircle: {
    width: rs(24),
    height: rs(24),
    borderRadius: rs(12),
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(8),
  },
  dollarText: { fontSize: rs(12), fontWeight: '700', color: '#059669' },
  projectAmountText: { fontSize: rs(15), fontWeight: '700', color: '#059669' },
  statusBadge: {
    borderRadius: rs(14),
    paddingHorizontal: rs(14),
    paddingVertical: rs(6),
  },
  statusBadgeText: { fontSize: rs(12), fontWeight: '600' },
});

export default ReportsScreen;
