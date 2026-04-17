import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const TASKS_DATA = [
  {
    id: 1,
    priority: 'HIGH',
    priorityColor: '#EF4444',
    title: 'Pre-Wedding Shoot',
    assignee: 'Sarah & John',
    progress: 0.9,
    progressColor: '#38BDF8',
    dueDate: 'Oct 12, 2025',
    dueDateColor: '#111827',
    status: 'In Progress',
    statusColor: '#38BDF8',
    statusBg: '#E0F2FE',
  },
  {
    id: 2,
    priority: 'LOW',
    priorityColor: '#9CA3AF',
    title: 'Wedding Ceremony',
    assignee: 'Sarah & John',
    progress: 1.0,
    progressColor: '#34D399',
    dueDate: 'Oct 12, 2025',
    dueDateColor: '#EF4444',
    status: 'Completed',
    statusColor: '#10B981',
    statusBg: '#D1FAE5',
  },
];

const TaskCard = ({ task }) => (
  <View style={styles.card}>
    {/* Priority + More */}
    <View style={styles.cardHeader}>
      <View style={[styles.priorityPill, { borderColor: task.priorityColor }]}>
        <Typography style={[styles.priorityText, { color: task.priorityColor }]}>
          {task.priority}
        </Typography>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>
    </View>

    <Typography style={styles.taskTitle}>{task.title}</Typography>

    {/* Assignee */}
    <View style={styles.assigneeRow}>
      <Feather name="users" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />
      <Typography style={styles.assigneeText}>{task.assignee}</Typography>
    </View>

    {/* Progress Bar */}
    <View style={styles.progressSection}>
      <View style={styles.progressBarBg}>
        <View
          style={[
            styles.progressBarFill,
            {
              width: `${task.progress * 100}%`,
              backgroundColor: task.progressColor,
            },
          ]}
        />
      </View>
      <Typography style={styles.progressText}>
        {Math.round(task.progress * 100)}%
      </Typography>
    </View>

    {/* Due Date + Status */}
    <View style={styles.bottomRow}>
      <View style={styles.dueDateRow}>
        <Feather name="calendar" size={rs(14)} color="#9CA3AF" style={{ marginRight: rs(6) }} />
        <Typography style={styles.dueDateLabel}>Due Date: </Typography>
        <Typography style={[styles.dueDateValue, { color: task.dueDateColor }]}>
          {task.dueDate}
        </Typography>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: task.statusBg }]}>
        <Typography style={[styles.statusBadgeText, { color: task.statusColor }]}>
          {task.status}
        </Typography>
      </View>
    </View>
  </View>
);

const TasksTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={rs(20)} color="#9CA3AF" />
          <TextInput
            placeholder="Search tasks"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={rs(20)} color="#111827" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus" size={rs(20)} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {TASKS_DATA.map(task => (
        <TaskCard key={task.id} task={task} />
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
    marginRight: rs(12),
  },
  addButton: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(12),
    backgroundColor: '#38BDF8',
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
  priorityPill: {
    borderWidth: 1.5,
    paddingHorizontal: rs(12),
    paddingVertical: rs(4),
    borderRadius: rs(20),
  },
  priorityText: {
    fontSize: rs(11),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  taskTitle: {
    fontSize: rs(17),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  assigneeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(14),
  },
  assigneeText: {
    fontSize: rs(14),
    color: '#6B7280',
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
    borderRadius: rs(4),
  },
  progressText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dueDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueDateLabel: {
    fontSize: rs(13),
    color: '#6B7280',
  },
  dueDateValue: {
    fontSize: rs(13),
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: rs(12),
    paddingVertical: rs(5),
    borderRadius: rs(20),
  },
  statusBadgeText: {
    fontSize: rs(12),
    fontWeight: '600',
  },
});

export default TasksTab;
