import React from 'react';
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
import ReportsHeader from  "../components/ReportsHeader"
const TeamUtilization = ({
  title = 'Team Utilization',
  members = [
    {
      id: '1',
      name: 'John Smith',
      role: 'Videographer',
      jobs: '12 JOBS',
      utilization: 0.85,
      avatar: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: '2',
      name: 'Sarah Lee',
      role: 'Editor',
      jobs: '9 JOBS',
      utilization: 0.70,
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ],
  onViewAll,
  onMemberPress,
}) => {
  const renderMember = ({ item }) => (
    <TouchableOpacity 
      style={styles.memberRow} 
      onPress={() => onMemberPress?.(item)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.jobsBadge}>
          <Text style={styles.jobsText}>{item.jobs}</Text>
        </View>
        
        <View style={styles.progressContainer}>
          <Progress.Circle
            size={responsiveWidth(10)}
            progress={item.utilization}
            thickness={3}
            color={colors.bluePrimary}
            unfilledColor={colors.borderLight}
            borderWidth={0}
            showsText={true}
            formatText={(progress) => `${Math.round(progress * 100)}%`}
            textStyle={styles.progressText}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
<ReportsHeader title={"Team Utilization"} onViewAll={onViewAll}/>

      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default TeamUtilization;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    borderRadius: 12,
    // padding: responsiveWidth(4),

    marginVertical: responsiveHeight(2),
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