// WorkloadOverview.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import StatCard from "./StatCard"
import ActivityItem from "./ActivityItem"
import ClientOverview from "../ClientOverview"
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import StatsFlowHeader from "./StatsFlowHeader";

const WorkloadOverview = ({type="Team"}) => {
  const stats = [
    {
      id: '1',
      title: 'Total Jobs',
      value: '20',
      percentage: '+15.01%',
      color: colors.bluePrimary,
      iconName: 'briefcase',
    },
    {
      id: '2',
      title: 'Ongoing Jobs',
      value: '08',
      percentage: '+15.01%',
      color: colors.yellowPrimary,
      iconName: 'clock',
    },
    {
      id: '3',
      title: 'Completed',
      value: '05',
      percentage: '+15.01%',
      color: colors.greenPrimary,
      iconName: 'check-circle',
    },
    {
      id: '4',
      title: 'Pending Tasks',
      value: '0',
      percentage: '+15.01%',
      color: '#9CA3AF', // Using a gray color since it's not in your palette
      iconName: 'alert-circle',
    },
  ];

  const recentActivity = [
    {
      id: '1',
      name: 'Sarah Lee',
      action: 'Completed editing for Job #245',
      time: 'Now',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
{type==="Team"&& <StatsFlowHeader
    title="Workload Overview"
    filterText="Last 30 Days"
  />}

{type==="Client"&&<ClientOverview/>
}
      {/* Stats Grid */}
{type==="Team"&&      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
            color={stat.color}
            iconName={stat.iconName}
          />
        ))}
      </View>}

      {/* Recent Activity Section */}
{type==="Team"&&      <>  <Text style={styles.sectionTitle}>Recent Activity</Text>
      <FlatList
        data={recentActivity}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActivityItem
            name={item.name}
            action={item.action}
            time={item.time}
            avatar={item.avatar}
          />
        )}
        showsVerticalScrollIndicator={false}
      /></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.screenBackground,
    padding: responsiveWidth(4),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },

  headerTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary,
  },

  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.8),
    borderRadius: responsiveWidth(5),
    borderWidth: responsiveWidth(0.5),
    borderColor: colors.borderLight,
  },

  dropdownText: {
    fontSize: responsiveFontSize(1.7),
    color: colors.grayDark,
    marginRight: responsiveWidth(1),
    fontWeight: '600',
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
  },

  sectionTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(1.5),
  },
});

export default WorkloadOverview;