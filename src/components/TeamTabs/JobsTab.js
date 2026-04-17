import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const JOBS_DATA = [
  {
    id: 1,
    category: 'Wedding',
    status: 'In Progress',
    statusColor: '#FBBF24',
    title: 'Wedding Film – Mark & Jess',
    eventDate: '12 Nov 2025',
    clientName: 'Mark & Jess',
    progress: 0.9,
    team: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
      'https://i.pravatar.cc/150?img=45',
    ],
  },
  {
    id: 2,
    category: 'Music Video',
    status: 'Review',
    statusColor: '#F472B6',
    title: 'Music Video – Willow Studio',
    eventDate: '10 Nov 2025',
    clientName: 'Willow Studio',
    progress: 0.9,
    team: [
      'https://i.pravatar.cc/150?img=13',
      'https://i.pravatar.cc/150?img=14',
    ],
  },
];

const JobCard = ({ job }) => (
  <View style={styles.card}>
    {/* Tags Row */}
    <View style={styles.cardHeader}>
      <View style={styles.tagsRow}>
        <View style={styles.categoryPill}>
          <Typography style={styles.categoryPillText}>{job.category}</Typography>
        </View>
        <View style={[styles.statusPill, { backgroundColor: job.statusColor }]}>  
          <Typography style={styles.statusPillText}>{job.status}</Typography>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>
    </View>

    <Typography style={styles.jobTitle}>{job.title}</Typography>

    {/* Details Row */}
    <View style={styles.detailsRow}>
      <View style={styles.detailItem}>
        <Typography style={styles.detailLabel}>Event Date</Typography>
        <Typography style={styles.detailValue}>{job.eventDate}</Typography>
      </View>
      <View style={styles.detailItem}>
        <Typography style={styles.detailLabel}>Client Name</Typography>
        <Typography style={styles.detailValue}>{job.clientName}</Typography>
      </View>
    </View>

    {/* Progress Bar */}
    <View style={styles.progressSection}>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${job.progress * 100}%` }]} />
      </View>
      <Typography style={styles.progressText}>{Math.round(job.progress * 100)}%</Typography>
    </View>

    {/* Team Avatars */}
    <View style={styles.teamRow}>
      <View style={styles.teamAvatars}>
        {job.team.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={[
              styles.teamAvatar,
              { marginLeft: index === 0 ? 0 : rs(-10) },
            ]}
          />
        ))}
        <View style={styles.addAvatarBtn}>
          <Feather name="plus" size={rs(14)} color="#38BDF8" />
        </View>
      </View>
      <TouchableOpacity style={styles.checkCircle}>
        <Feather name="check" size={rs(18)} color="#D1D5DB" />
      </TouchableOpacity>
    </View>
  </View>
);

const JobsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={rs(20)} color="#9CA3AF" />
          <TextInput
            placeholder="Search Job"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={rs(20)} color="#111827" />
        </TouchableOpacity>
      </View>

      {JOBS_DATA.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(100),
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(24),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(14),
    color: '#111827',
  },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryPill: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: rs(12),
    paddingVertical: rs(5),
    borderRadius: rs(20),
    marginRight: rs(8),
  },
  categoryPillText: {
    fontSize: rs(12),
    fontWeight: '500',
    color: '#111827',
  },
  statusPill: {
    paddingHorizontal: rs(12),
    paddingVertical: rs(5),
    borderRadius: rs(20),
  },
  statusPillText: {
    fontSize: rs(12),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  jobTitle: {
    fontSize: rs(17),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: rs(16),
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    marginBottom: rs(4),
  },
  detailValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(14),
  },
  progressBarBg: {
    flex: 1,
    height: rs(8),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(4),
    marginRight: rs(12),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: rs(4),
  },
  progressText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamAvatar: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addAvatarBtn: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    borderWidth: 1.5,
    borderColor: '#38BDF8',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: rs(-10),
    backgroundColor: '#F0F9FF',
  },
  checkCircle: {
    width: rs(36),
    height: rs(36),
    borderRadius: rs(18),
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JobsTab;
