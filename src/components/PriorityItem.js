import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from './Typography';
import { rs } from '../utils/dimensions';

const PriorityItem = ({ icon, title, description, color }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
         {/* Using Image since the screenshot shows customized icons/emojis */}
         {typeof icon === 'string' ? (
           <Typography style={styles.emojiIcon}>{icon}</Typography>
         ) : (
           icon
         )}
      </View>
      <View style={styles.textContainer}>
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.description} numberOfLines={1}>{description}</Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: rs(12),
    borderRadius: rs(16),
    marginBottom: rs(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: rs(2) },
    shadowOpacity: 0.03,
    shadowRadius: rs(4),
    elevation: 1,
  },
  iconContainer: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
  },
  emojiIcon: {
    fontSize: rs(24),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(2),
  },
  description: {
    fontSize: rs(14),
    color: '#6B7280',
  },
});

export default PriorityItem;
