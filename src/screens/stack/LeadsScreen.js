import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FILTERS = ['All', 'New', 'Proposal', 'Booked'];

const LEADS_DATA = [
  {
    id: 1,
    status: 'New Lead',
    statusColor: '#FBBF24',
    statusBg: '#FEF3C7',
    priority: 'High',
    priorityColor: '#EF4444',
    priorityBg: '#FEE2E2',
    socialIcon: 'instagram',
    socialColor: '#E1306C',
    name: 'Emma & James - Wedding',
    description: 'Footage received from the videographer. Editor...',
    createdOn: '12 Nov 2025',
    eventDate: '12 Nov 2025',
    thirdLabel: 'Job Type',
    thirdValue: 'Wedding',
  },
  {
    id: 2,
    status: 'Proposal',
    statusColor: '#F59E0B',
    statusBg: '#FEF3C7',
    priority: 'Low',
    priorityColor: '#10B981',
    priorityBg: '#D1FAE5',
    socialIcon: 'facebook',
    socialColor: '#1877F2',
    name: 'Willow Studio',
    description: 'Footage received from the videographer. Editor...',
    createdOn: '12 Nov 2025',
    eventDate: '12 Nov 2025',
    thirdLabel: 'Interested In',
    thirdValue: 'Wedding',
  },
  {
    id: 3,
    status: 'Booked',
    statusColor: '#10B981',
    statusBg: '#D1FAE5',
    priority: 'Medium',
    priorityColor: '#F59E0B',
    priorityBg: '#FEF3C7',
    socialIcon: 'globe',
    socialColor: '#4285F4',
    name: 'Peter Parker',
    description: 'Footage received from the videographer. Editor...',
    createdOn: '12 Nov 2025',
    eventDate: '12 Nov 2025',
    thirdLabel: 'Job Type',
    thirdValue: 'Corporate',
  },
];

const Badge = ({ label, color, bg }) => (
  <View style={[styles.badge, { backgroundColor: bg }]}>
    <View style={[styles.badgeDot, { backgroundColor: color }]} />
    <Typography style={[styles.badgeText, { color }]}>{label}</Typography>
  </View>
);

const LeadsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Leads</Typography>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search Lead"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterRow}>
          {FILTERS.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[styles.filterTab, activeFilter === filter && styles.filterTabActive]}
              onPress={() => setActiveFilter(filter)}
              activeOpacity={0.7}
            >
              <Typography
                style={[styles.filterTabText, activeFilter === filter && styles.filterTabTextActive]}
              >
                {filter}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {LEADS_DATA.map(lead => (
          <View key={lead.id} style={styles.leadCard}>
            {/* Badges Row */}
            <View style={styles.badgesRow}>
              <Badge label={lead.status} color={lead.statusColor} bg={lead.statusBg} />
              <Badge label={lead.priority} color={lead.priorityColor} bg={lead.priorityBg} />
              <View style={styles.socialBadge}>
                <Feather name={lead.socialIcon} size={rs(16)} color={lead.socialColor} />
              </View>
              <View style={{ flex: 1 }} />
              <TouchableOpacity>
                <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Lead Info */}
            <Typography style={styles.leadName}>{lead.name}</Typography>
            <Typography style={styles.leadDescription}>{lead.description}</Typography>

            {/* Metrics */}
            <View style={styles.leadMetrics}>
              <View style={styles.leadMetricItem}>
                <Typography style={styles.leadMetricLabel}>Created On</Typography>
                <Typography style={styles.leadMetricValue}>{lead.createdOn}</Typography>
              </View>
              <View style={styles.leadMetricItem}>
                <Typography style={styles.leadMetricLabel}>Event Date</Typography>
                <Typography style={styles.leadMetricValue}>{lead.eventDate}</Typography>
              </View>
              <View style={styles.leadMetricItem}>
                <Typography style={styles.leadMetricLabel}>{lead.thirdLabel}</Typography>
                <Typography style={styles.leadMetricValue}>{lead.thirdValue}</Typography>
              </View>
            </View>
          </View>
        ))}
        <View style={{ height: rh(100) }} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={styles.fabContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddLead')}
      >
        <Feather name="plus" size={rs(18)} color="#FFF" style={{ marginRight: rs(6) }} />
        <Typography style={styles.fabText}>Add Lead</Typography>
      </TouchableOpacity>
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
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: rs(20),
    marginTop: rs(16),
  },
  filterTab: {
    paddingHorizontal: rs(18),
    paddingVertical: rs(8),
    borderRadius: rs(20),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    marginRight: rs(10),
    backgroundColor: '#FFFFFF',
  },
  filterTabActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  filterTabText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTabTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(16),
  },
  leadCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(18),
    marginBottom: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(10),
    paddingVertical: rs(5),
    borderRadius: rs(16),
    marginRight: rs(8),
  },
  badgeDot: {
    width: rs(7),
    height: rs(7),
    borderRadius: rs(4),
    marginRight: rs(6),
  },
  badgeText: {
    fontSize: rs(12),
    fontWeight: '600',
  },
  socialBadge: {
    width: rs(30),
    height: rs(30),
    borderRadius: rs(15),
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leadName: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(4),
  },
  leadDescription: {
    fontSize: rs(13),
    color: '#6B7280',
    marginBottom: rs(14),
  },
  leadMetrics: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: rs(14),
  },
  leadMetricItem: {
    flex: 1,
  },
  leadMetricLabel: {
    fontSize: rs(11),
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: rs(4),
  },
  leadMetricValue: {
    fontSize: rs(13),
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

export default LeadsScreen;
