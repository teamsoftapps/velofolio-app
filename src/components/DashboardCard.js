import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { rs } from '../utils/dimensions';

const DashboardCard = ({
  title,
  value,
  subtitle,
  icon,
  backgroundColor = '#FFFFFF',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <Feather name={icon} size={rs(24)} color="#000000" />
      </View>

      <View style={styles.bottomContent}>
        <View style={styles.textContainer}>
          <Typography style={styles.title}>{title}</Typography>
          {value ? (
            <Typography style={styles.value}>{value}</Typography>
          ) : null}
          {subtitle ? (
            <Typography style={styles.subtitle}>{subtitle}</Typography>
          ) : null}
        </View>
        <View style={styles.arrowContainer}>
          <Feather name="arrow-right" size={rs(20)} color="#000000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: rs(24),
    padding: rs(16),
    marginBottom: rs(12),
    justifyContent: 'space-between',
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: rs(10) },
    shadowOpacity: 0.05,
    shadowRadius: rs(15),
    elevation: 2,
  },
  iconContainer: {
    width: rs(44),
    height: rs(44),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(8),
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    marginRight: rs(8),
  },
  title: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#000000',
    marginBottom: rs(2),
  },
  value: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: rs(2),
  },
  subtitle: {
    fontSize: rs(13),
    color: '#6B7280',
    marginTop: rs(2),
    lineHeight: rs(18),
  },
  arrowContainer: {
    paddingBottom: rs(4),
  },
});

export default DashboardCard;
