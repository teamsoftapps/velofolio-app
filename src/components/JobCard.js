import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import Tag from './Tag';
import ProgressBar from './ProgressBar';
import TeamComponent from './TeamComponent';

const JobCard = ({ job, onPress }) => {
  const hasProgress = job.progress !== null;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, { backgroundColor: job.cardColor || colors.cardBlue }]}
    >
      {/* Header: Tags & Menu */}
      <View style={styles.cardHeader}>
        <View style={styles.tagsContainer}>
          {job.tags?.map((tag, index) => (
            <Tag
              key={index}
              color={tag.color}
              bgColor={tag.bgColor}
              text={tag.title}
              borderColor={tag.borderColor}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="more-horizontal" size={24} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.jobTitle}>{job.title}</Text>

      {/* Details Grid */}
      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Event Date</Text>
          <Text style={styles.detailValue}>{job.eventDate}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Client Name</Text>
          <Text style={styles.detailValue}>{job.clientName}</Text>
        </View>
      </View>

      {/* Tasks Tracking / Progress */}
      <View style={styles.progressSection}>
        {!hasProgress ? (
          <TouchableOpacity style={styles.addTasksButton}>
            <Text style={styles.addTasksText}>ADD TASKS TO TRACK PROGRESS</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.progressWrapper}>
            <View style={styles.progressRow}>
              <View style={styles.progressBarWrapper}>
                <ProgressBar progress={job.progress.percent / 100} height={8} />
              </View>
              <Text style={styles.progressPercent}>{job.progress.percent}%</Text>
            </View>
          </View>
        )}
      </View>

      {/* Footer: Team & Checkmark */}
      <View style={styles.cardFooter}>
        <View style={styles.teamSection}>
          <TeamComponent />
        </View>
        
        <TouchableOpacity style={styles.checkButton}>
          <Ionicons name="checkmark-circle-outline" size={30} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: responsiveWidth(5),
    borderRadius: 20,
    marginBottom: responsiveHeight(2.5),
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  menuButton: {
    padding: 4,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: responsiveHeight(2.5),
  },
  detailsGrid: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2.5),
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  progressSection: {
    marginBottom: responsiveHeight(2),
  },
  addTasksButton: {
    paddingVertical: 4,
  },
  addTasksText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    textDecorationLine: 'underline',
  },
  progressWrapper: {
    marginTop: responsiveHeight(1),
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  progressBarWrapper: {
    flex: 1,
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(2.5),
  },
  teamSection: {
    flex: 1,
  },
  checkButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});
