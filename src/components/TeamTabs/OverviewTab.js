import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const MetricCard = ({ title, value, change, bgColor, textColor }) => (
  <View style={[styles.metricCard, { backgroundColor: bgColor }]}>
    <Typography style={[styles.metricTitle, { color: textColor || '#FFFFFF' }]}>
      {title}
    </Typography>
    <Typography style={[styles.metricValue, { color: textColor || '#FFFFFF' }]}>
      {value}
    </Typography>
    <View style={styles.metricChangeRow}>
      <Typography style={[styles.metricChange, { color: textColor || '#FFFFFF' }]}>
        {change}
      </Typography>
      <Feather name="trending-up" size={rs(14)} color={textColor || '#FFFFFF'} />
    </View>
  </View>
);

const ActivityItem = ({ name, description, time, avatar }) => (
  <View style={styles.activityItem}>
    <Image source={{ uri: avatar }} style={styles.activityAvatar} />
    <View style={styles.activityContent}>
      <Typography style={styles.activityName}>{name}</Typography>
      <Typography style={styles.activityDesc}>{description}</Typography>
    </View>
    <Typography style={styles.activityTime}>{time}</Typography>
  </View>
);

const OverviewTab = () => {
  return (
    <View style={styles.container}>
      {/* Workload Overview Header */}
      <View style={styles.sectionHeaderRow}>
        <Typography style={styles.sectionTitle}>Workload Overview</Typography>
        <TouchableOpacity style={styles.filterPill}>
          <Typography style={styles.filterPillText}>Last 30 Days</Typography>
          <Feather name="chevron-down" size={rs(14)} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Metric Cards Grid */}
      <View style={styles.metricsGrid}>
        <MetricCard
          title="Total Jobs"
          value="20"
          change="+15.01%"
          bgColor="#38BDF8"
        />
        <MetricCard
          title="Ongoing Jobs"
          value="08"
          change="+15.01%"
          bgColor="#FBBF24"
        />
      </View>
      <View style={styles.metricsGrid}>
        <MetricCard
          title="Completed"
          value="05"
          change="+15.01%"
          bgColor="#34D399"
        />
        <MetricCard
          title="Pending Tasks"
          value="0"
          change="+15.01%"
          bgColor="#E5E7EB"
          textColor="#111827"
        />
      </View>

      {/* Recent Activity */}
      <Typography style={[styles.sectionTitle, { marginTop: rs(28) }]}>
        Recent Activity
      </Typography>

      <ActivityItem
        name="Sarah Lee"
        description="Completed editing for Job #245"
        time="Now"
        avatar="https://i.pravatar.cc/150?img=47"
      />
      <ActivityItem
        name="Sarah Lee"
        description="Assigned to Wedding – March 22"
        time="3 hours ago"
        avatar="https://i.pravatar.cc/150?img=47"
      />
      <ActivityItem
        name="Sarah Lee"
        description="Uploaded 45 edited photos for Job #240"
        time="Yesterday"
        avatar="https://i.pravatar.cc/150?img=47"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(20),
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  sectionTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(20),
  },
  filterPillText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#111827',
    marginRight: rs(4),
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  metricCard: {
    flex: 1,
    borderRadius: rs(16),
    padding: rs(16),
    marginHorizontal: rs(4),
  },
  metricTitle: {
    fontSize: rs(13),
    fontWeight: '500',
    marginBottom: rs(8),
  },
  metricValue: {
    fontSize: rs(32),
    fontWeight: '700',
    marginBottom: rs(8),
  },
  metricChangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignSelf: 'flex-start',
    paddingHorizontal: rs(8),
    paddingVertical: rs(4),
    borderRadius: rs(12),
  },
  metricChange: {
    fontSize: rs(12),
    fontWeight: '600',
    marginRight: rs(4),
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(14),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityAvatar: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    marginRight: rs(12),
  },
  activityContent: {
    flex: 1,
  },
  activityName: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(2),
  },
  activityDesc: {
    fontSize: rs(13),
    color: '#6B7280',
  },
  activityTime: {
    fontSize: rs(12),
    color: '#9CA3AF',
    fontWeight: '500',
  },
});

export default OverviewTab;
