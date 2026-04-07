import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const GoalsDashboard = ({ navigation }) => {
  const goals = [
    {
      id: 1,
      title: 'Revenue Goal',
      current: '$18,200',
      target: '$25,000',
      color: '#00B1E7',
      bgColor: '#E6F7FC',
      progress: 0.728,
    },
    {
      id: 2,
      title: 'Jobs Goal',
      current: '14',
      target: '20',
      color: '#FFCC6A',
      bgColor: '#FFF7E6',
      progress: 0.7,
    },
    {
      id: 3,
      title: 'Payment Goal',
      current: '$18,200',
      target: '$15,000',
      color: '#95E2B9',
      bgColor: '#EDF9F0',
      progress: 1.21,
    },
    {
      id: 4,
      title: 'Team Utilization',
      current: '40%',
      target: '%80%',
      color: '#D1D1D6',
      bgColor: '#F2F2F7',
      progress: 0.5,
    },
  ];

  const insights = [
    {
      id: 1,
      text: 'You need $6,800 more to reach your revenue goal this month.',
    },
    {
      id: 2,
      text: 'Wedding projects are your highest revenue category.',
    },
  ];

  const summaries = [
    {
      id: 1,
      label: 'Revenue Trend',
      value: '+12%',
      subtext: 'vs last month',
      type: 'trend-up',
      bgColor: '#E6F7FC',
    },
    {
      id: 2,
      label: 'Jobs Completed',
      value: '-2',
      subtext: 'jobs behind target',
      type: 'behind',
      bgColor: '#FEF7E1',
    },
    {
      id: 3,
      label: 'Payments',
      value: 'ON TRACK',
      type: 'status',
      bgColor: '#F2F2F7',
    },
  ];

  const renderGoalCard = (goal) => {
    const isOverTarget = goal.progress >= 1;
    
    return (
      <View key={goal.id} style={[styles.goalCard, { backgroundColor: goal.bgColor }]}>
        {/* Progress Fill */}
        {!isOverTarget && (
          <View 
            style={[
              styles.goalProgressFill, 
              { 
                backgroundColor: goal.color, 
                width: `${Math.min(goal.progress * 100, 100)}%`,
                opacity: 0.4
              }
            ]} 
          />
        )}
        {isOverTarget && (
          <View 
            style={[
              styles.goalProgressFill, 
              { 
                backgroundColor: goal.color, 
                width: '100%',
                opacity: 1
              }
            ]} 
          />
        )}
        
        <View style={styles.goalInfo}>
          <CustomText style={styles.goalTitle}>
            {goal.title}
          </CustomText>
          <CustomText style={styles.goalValue}>
            {goal.current} / {goal.target}
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Goals & Reports" showAddButton={true} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Goals Overview Section */}
        <View style={styles.sectionHeader}>
          <CustomText style={styles.sectionTitle}>Goals Overview</CustomText>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="pencil-outline" size={22} color={colors.grayDark || '#999999'} />
          </TouchableOpacity>
        </View>

        <View style={styles.goalsGrid}>
          {goals.map(renderGoalCard)}
        </View>

        {/* Smart Insights Section */}
        <View style={styles.sectionHeader}>
          <CustomText style={styles.sectionTitle}>Smart Insights</CustomText>
          <TouchableOpacity style={styles.viewAllRow}>
            <CustomText style={styles.viewAllText}>View All</CustomText>
            <Ionicons name="chevron-down" size={16} color={colors.grayDark || '#999999'} />
          </TouchableOpacity>
        </View>

        {insights.map((insight) => (
          <View key={insight.id} style={styles.insightCard}>
            <CustomText style={styles.insightText}>{insight.text}</CustomText>
            <MaterialCommunityIcons name="lightbulb-outline" size={24} color={colors.black || '#000000'} />
          </View>
        ))}

        {/* Performance Summary Section */}
        <View style={styles.sectionHeader}>
          <CustomText style={styles.sectionTitle}>Performance Summary</CustomText>
        </View>

        {summaries.map((summary) => (
          <View key={summary.id} style={[styles.summaryCard, { backgroundColor: summary.bgColor }]}>
            <CustomText style={styles.summaryLabel}>{summary.label}</CustomText>
            <View style={styles.summaryRight}>
              {summary.type === 'trend-up' && (
                <View style={[styles.badge, styles.trendUpBadge]}>
                  <Ionicons name="arrow-up" size={14} color={colors.white} />
                  <CustomText style={styles.badgeText}>{summary.value}</CustomText>
                </View>
              )}
              {summary.type === 'behind' && (
                <View style={[styles.badge, styles.behindBadge]}>
                  <Ionicons name="arrow-down" size={14} color={colors.white} />
                  <CustomText style={styles.badgeText}>{summary.value}</CustomText>
                </View>
              )}
              {summary.type === 'status' && (
                <View style={[styles.badge, styles.statusBadge]}>
                  <CustomText style={styles.statusBadgeText}>{summary.value}</CustomText>
                </View>
              )}
              {summary.subtext && <CustomText style={styles.summarySubtext}>{summary.subtext}</CustomText>}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(2),
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(4),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(1),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  goalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
  },
  goalCard: {
    width: '48%',
    borderRadius: responsiveWidth(6),
    marginBottom: responsiveWidth(4),
    height: responsiveHeight(12),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  goalInfo: {
    alignItems: 'center',
    zIndex: 1,
    gap: 4,
  },
  goalTitle: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  goalValue: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
  },
  goalProgressFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    borderTopRightRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
  },
  insightCard: {
    backgroundColor: '#FEF7E1', // Yellowish
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.5),
  },
  insightText: {
    flex: 1,
    fontSize: responsiveFontSize(1.8),
    color: colors.textPrimary || '#222222',
    lineHeight: responsiveHeight(2.5),
    marginRight: responsiveWidth(4),
  },
  summaryCard: {
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.5),
  },
  summaryLabel: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
  },
  summaryRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  trendUpBadge: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
  },
  behindBadge: {
    backgroundColor: '#F34747',
  },
  statusBadge: {
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#999999',
  },
  badgeText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '700',
    color: colors.white,
    marginLeft: 2,
  },
  statusBadgeText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
  },
  summarySubtext: {
    fontSize: responsiveFontSize(1.6),
    color: colors.grayDark || '#999999',
  },
});

export default GoalsDashboard;
