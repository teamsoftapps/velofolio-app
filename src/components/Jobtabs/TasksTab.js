import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs, rh } from '../../utils/dimensions';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';

const TasksTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabContentContainer}>
      <View style={styles.taskCard}>
        <View style={styles.taskCardHeader}>
          <View style={styles.badgeRow}>
            <View style={styles.badgeRed}>
              <Feather
                name="flag"
                size={12}
                color="#FFF"
                style={{ marginRight: rs(4) }}
              />
              <Typography style={styles.badgeTextWhite}>High</Typography>
            </View>
            <View style={styles.badgeBlueBg}>
              <Typography style={styles.badgeTextWhite}>In Progress</Typography>
            </View>
          </View>
          <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
        </View>
        <Typography style={styles.taskTitle}>Edit Wedding Photos</Typography>
        <Typography style={styles.taskDesc}>
          Footage received from the videographer.
        </Typography>

        <View style={styles.taskFooter}>
          <View style={styles.taskDateRow}>
            <Feather name="calendar" size={rs(16)} color="#9CA3AF" />
            <Typography style={styles.taskDateText}>
              Due Date:{' '}
              <Typography style={styles.textRed}>Oct 12, 2025</Typography>
            </Typography>
          </View>
          <View style={styles.avatarsContainer}>
            {[
              'https://i.pravatar.cc/150?img=12',
              'https://i.pravatar.cc/150?img=13',
              'https://i.pravatar.cc/150?img=14',
            ].map((url, i) => (
              <Image
                key={i}
                source={{ uri: url }}
                style={[styles.avatarSmall, i > 0 && { marginLeft: rs(-10) }]}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContentContainer: { flex: 1 },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: rs(10),
    elevation: 2,
  },
  taskCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  badgeRow: {
    flexDirection: 'row',
  },
  badgeRed: {
    backgroundColor: '#EF4444',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(12),
    marginRight: rs(8),
  },
  badgeTextWhite: {
    color: '#FFFFFF',
    fontSize: rs(11),
    fontWeight: '600',
  },
  badgeBlueBg: {
    backgroundColor: '#38BDF8',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(12),
  },
  taskTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  taskDesc: {
    fontSize: rs(14),
    color: '#6B7280',
    marginBottom: rs(20),
  },
  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDateText: {
    marginLeft: rs(8),
    fontSize: rs(13),
    color: '#6B7280',
  },
  textRed: {
    color: '#EF4444',
    fontWeight: '600',
  },
  avatarsContainer: {
    flexDirection: 'row',
  },
  avatarSmall: {
    width: rs(28),
    height: rs(28),
    borderRadius: rs(14),
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addTaskBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#38BDF8',
    borderRadius: rs(28),
    marginTop: rs(24),
  },
  addTaskBtnText: {
    color: '#38BDF8',
  },
});

export default TasksTab;
