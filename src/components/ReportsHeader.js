
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ReportsHeader = ({title,onViewAll}) => {
  return (
          <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
          <Icon name="chevron-down" size={16} color={colors.textMuted} />
        </TouchableOpacity>
      </View>
  )
}

export default ReportsHeader

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    borderRadius: 12,
    padding: responsiveWidth(4),
    // marginHorizontal: responsiveWidth(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
  },
  viewAllText: {
    fontSize: responsiveFontSize(1.6),
    color: colors.textMuted,
    fontWeight: '500',
  },
  separator: {
    // height: 1,
    backgroundColor: colors.borderExtraLight,
    marginVertical: responsiveHeight(1),
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    backgroundColor:colors.white,
    paddingHorizontal:responsiveWidth(2),
    borderRadius:responsiveWidth(2)
  },
  avatar: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    marginRight: responsiveWidth(3),
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(0.3),
  },
  role: {
    fontSize: responsiveFontSize(1.5),
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  jobsBadge: {
    backgroundColor: colors.greyLight,
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 12,
  },
  jobsText: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: '700',
    color: colors.textPrimary,
  },
});