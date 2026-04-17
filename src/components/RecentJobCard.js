import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { rs } from '../utils/dimensions';

const RecentJobCard = ({
  type,
  status,
  title,
  date,
  client,
  progress,
  showProgress = true,
  taskProgress,
  hasProgressTasks = false,
  members = [],
  backgroundColor = '#E0F2FE',
  statusColor = '#38BDF8',
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.topRow}>
        <View style={styles.badgeContainer}>
          <View style={styles.typeBadge}>
            <Typography style={styles.typeText}>{type}</Typography>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
            <Typography style={styles.statusText}>{status}</Typography>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <View style={styles.dot} />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>

      <Typography style={styles.title}>{title}</Typography>

      <View style={styles.infoRow}>
        <View style={styles.infoCol}>
          <Typography style={styles.label}>Event Date</Typography>
          <Typography style={styles.value}>{date}</Typography>
        </View>
        <View style={[styles.infoCol, { flex: 1, marginLeft: rs(16) }]}>
          <Typography style={styles.label}>Client Name</Typography>
          <Typography style={styles.value}>{client}</Typography>
        </View>
        {taskProgress && (
          <View style={styles.taskProgressCol}>
            <Typography style={styles.taskProgressText}>{taskProgress}</Typography>
          </View>
        )}
      </View>

      {hasProgressTasks ? (
        <TouchableOpacity style={styles.addTasksLink}>
          <Typography style={styles.addTasksText}>ADD TASKS TO TRACK PROGRESS</Typography>
        </TouchableOpacity>
      ) : showProgress ? (
        <View style={styles.progressContainer}>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${progress}%`, backgroundColor: statusColor }]} />
            </View>
          </View>
          <Typography style={styles.progressPercentageText}>{progress}%</Typography>
        </View>
      ) : null}

      <View style={styles.bottomRow}>
        <View style={styles.avatarsContainer}>
          {members.map((url, index) => (
            <Image
              key={index}
              source={{ uri: url }}
              style={[
                styles.avatar,
                {
                  marginLeft: index === 0 ? 0 : rs(-10),
                  borderColor: backgroundColor,
                },
              ]}
            />
          ))}
          <TouchableOpacity style={[styles.addMemberButton, { borderColor: backgroundColor, backgroundColor: statusColor }]}>
             <Feather name="plus" size={rs(16)} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.checkCircle}>
           <Feather name="check" size={rs(16)} color={progress === 100 ? '#FFF' : '#9CA3AF'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: rs(24),
    padding: rs(20),
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: rs(4) },
    shadowOpacity: 0.05,
    shadowRadius: rs(10),
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeBadge: {
    borderWidth: 1,
    borderColor: '#111827',
    paddingHorizontal: rs(16),
    paddingVertical: rs(6),
    borderRadius: rs(16),
    marginRight: rs(8),
  },
  typeText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#111827',
  },
  statusBadge: {
    paddingHorizontal: rs(16),
    paddingVertical: rs(6),
    borderRadius: rs(16),
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: rs(13),
    fontWeight: '500',
  },
  moreButton: {
    flexDirection: 'row',
    padding: rs(4),
  },
  dot: {
    width: rs(4),
    height: rs(4),
    borderRadius: rs(2),
    backgroundColor: '#9CA3AF',
    marginLeft: rs(4),
  },
  title: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(16),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: rs(16),
  },
  infoCol: {
    // default layout
  },
  label: {
    fontSize: rs(13),
    color: '#6B7280',
    marginBottom: rs(4),
  },
  value: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
  },
  taskProgressCol: {
    justifyContent: 'flex-end',
    paddingBottom: rs(2),
  },
  taskProgressText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#6B7280',
  },
  addTasksLink: {
    marginBottom: rs(20),
  },
  addTasksText: {
    fontSize: rs(13),
    fontWeight: '700',
    color: '#111827',
    textDecorationLine: 'underline',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  progressBarWrapper: {
    flex: 1,
    marginRight: rs(12),
  },
  progressBarBg: {
    height: rs(8),
    backgroundColor: '#FFFFFF',
    borderRadius: rs(4),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: rs(4),
  },
  progressPercentageText: {
    fontSize: rs(15),
    fontWeight: '700',
    color: '#111827',
    width: rs(32),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: rs(4),
    borderRadius: rs(24),
    borderWidth: 1,
    borderColor: '#38BDF8', // Will be dynamic, default here
  },
  avatar: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    borderWidth: 2,
  },
  addMemberButton: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: rs(-10),
  },
  checkCircle: {
     width: rs(32),
     height: rs(32),
     borderRadius: rs(16),
     borderWidth: 1,
     borderColor: '#9CA3AF',
     justifyContent: 'center',
     alignItems: 'center',
  }
});

export default RecentJobCard;
