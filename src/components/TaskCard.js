
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Tag from "./Tag";
import TeamComponent from "./TeamComponent";
import ProgressBar from "./ProgressBar";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.card}>
      {/* Header with Tags and More icon */}
      <View style={styles.header}>
        <View style={styles.tagsContainer}>
          <Tag
            text={task.priority || "HIGH"}
            bgColor={task.priorityColor || colors.red}
            color={colors.white}
          />
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Task Title */}
      <Text style={styles.title}>{task.title}</Text>

      {/* Assignee */}
      <View style={styles.assigneeContainer}>
        <Feather name="users" size={16} color="#9CA3AF" />
        <Text style={styles.assigneeText}>{task.assignee || "Sarah & John"}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressSection}>
        <View style={styles.progressRow}>
          <View style={styles.progressBarWrapper}>
            <ProgressBar progress={(task.progress?.percent || 0) / 100} height={8} />
          </View>
          <Text style={styles.progressPercent}>{task.progress?.percent || 0}%</Text>
        </View>
      </View>

      {/* Footer with Date and Status */}
      <View style={styles.footer}>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={18} color="#9CA3AF" />
          <Text style={styles.dateLabel}>
            Due Date: <Text style={styles.dateValue}>{task.dueDate || "Oct 12, 2025"}</Text>
          </Text>
        </View>

        <View style={[styles.statusPill, { backgroundColor: task.statusBg || '#E0F2FE' }]}>
          <Text style={[styles.statusText, { color: task.statusColor || '#00B1E7' }]}>
            {task.status || "In Progress"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: responsiveWidth(90),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Elevation for Android
    // elevation: 3,
    // // Shadow for iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.05,
    // shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: colors.black,
    marginBottom: responsiveHeight(1.5),
  },
  assigneeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2.5),
    marginBottom: responsiveHeight(2),
  },
  assigneeText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  progressSection: {
    marginBottom: responsiveHeight(2.5),
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  dateLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  dateValue: {
    color: colors.red,
    fontWeight: '600',
  },
  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
