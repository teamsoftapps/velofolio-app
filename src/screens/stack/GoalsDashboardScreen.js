import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const GoalsDashboardScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Goals & Reports</Typography>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Feather name="plus" size={rs(18)} color="#FFFFFF" />
            <Typography style={styles.addButtonText}>Add</Typography>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Section 1: Goals Overview */}
        <View style={styles.sectionHeader}>
          <Typography style={styles.sectionTitle}>Goals Overview</Typography>
          <TouchableOpacity>
            <Feather name="edit-2" size={rs(16)} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>
          <View style={[styles.gridItem, { backgroundColor: '#E0F2FE' }]}>
            {/* Overlay progress bar logic representation (Mockup has left-half darker blue) */}
            <View style={[styles.progressOverlay, { backgroundColor: '#BAE6FD', width: '70%' }]} />
            <Typography style={styles.gridLabel}>Revenue Goal</Typography>
            <Typography style={styles.gridValue}>$18,200 / $25,000</Typography>
          </View>
          
          <View style={[styles.gridItem, { backgroundColor: '#FEF3C7' }]}>
            <View style={[styles.progressOverlay, { backgroundColor: '#FDE68A', width: '70%' }]} />
            <Typography style={styles.gridLabel}>Jobs Goal</Typography>
            <Typography style={styles.gridValue}>14 / 20</Typography>
          </View>

          <View style={[styles.gridItem, { backgroundColor: '#A7F3D0' }]}>
            <View style={[styles.progressOverlay, { backgroundColor: '#6EE7B7', width: '100%' }]} />
            <Typography style={styles.gridLabel}>Payment Goal</Typography>
            <Typography style={styles.gridValue}>$18,200 / $15,000</Typography>
          </View>

          <View style={[styles.gridItem, { backgroundColor: '#F3F4F6' }]}>
            <View style={[styles.progressOverlay, { backgroundColor: '#E5E7EB', width: '40%' }]} />
            <Typography style={styles.gridLabel}>Team Utilization</Typography>
            <Typography style={styles.gridValue}>40% / 80%</Typography>
          </View>
        </View>

        {/* Section 2: Smart Insights */}
        <View style={[styles.sectionHeader, { marginTop: rs(24) }]}>
          <Typography style={styles.sectionTitle}>Smart Insights</Typography>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Typography style={styles.viewAllText}>View All</Typography>
            <Feather name="chevron-down" size={rs(16)} color="#6B7280" style={{marginLeft: rs(4)}} />
          </TouchableOpacity>
        </View>

        <View style={styles.insightCard}>
          <Typography style={styles.insightText}>
            You need $6,800 more to reach your revenue goal this month.
          </Typography>
          <Feather name="zap" size={rs(20)} color="#111827" />
        </View>

        <View style={styles.insightCard}>
          <Typography style={styles.insightText}>
            Wedding projects are your highest revenue category.
          </Typography>
          <Feather name="zap" size={rs(20)} color="#111827" />
        </View>

        {/* Section 3: Performance Summary */}
        <View style={[styles.sectionHeader, { marginTop: rs(24) }]}>
          <Typography style={styles.sectionTitle}>Performance Summary</Typography>
        </View>

        <View style={[styles.perfRow, { backgroundColor: '#E0F2FE' }]}>
          <Typography style={styles.perfLabel}>Revenue Trend</Typography>
          <View style={styles.perfRight}>
            <View style={[styles.badge, { backgroundColor: '#38BDF8' }]}>
              <Feather name="arrow-up" size={rs(12)} color="#FFFFFF" style={{ marginRight: rs(2) }}/>
              <Typography style={styles.badgeTextWhite}>12%</Typography>
            </View>
            <Typography style={styles.perfSubText}>vs last month</Typography>
          </View>
        </View>

        <View style={[styles.perfRow, { backgroundColor: '#FEF3C7' }]}>
          <Typography style={styles.perfLabel}>Jobs Completed</Typography>
          <View style={styles.perfRight}>
            <View style={[styles.badge, { backgroundColor: '#EF4444' }]}>
              <Feather name="arrow-down" size={rs(12)} color="#FFFFFF" style={{ marginRight: rs(2) }}/>
              <Typography style={styles.badgeTextWhite}>2</Typography>
            </View>
            <Typography style={styles.perfSubText}>jobs behind target</Typography>
          </View>
        </View>

        <View style={[styles.perfRow, { backgroundColor: '#F3F4F6' }]}>
          <Typography style={styles.perfLabel}>Payments</Typography>
          <View style={styles.perfRight}>
            <View style={[styles.badgeOutline]}>
              <Typography style={styles.badgeTextDark}>ON TRACK</Typography>
            </View>
          </View>
        </View>

        <View style={{ height: rh(100) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
    justifyContent: 'space-between',
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { 
    fontSize: rs(22), 
    fontWeight: '700', 
    color: '#111827',
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#38BDF8',
    paddingHorizontal: rs(14),
    paddingVertical: rs(10),
    borderRadius: rs(12),
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(14),
    marginLeft: rs(4),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  sectionTitle: {
    fontSize: rs(20),
    fontWeight: '600',
    color: '#111827',
  },
  viewAllText: {
    fontSize: rs(14),
    color: '#6B7280',
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    borderRadius: rs(16),
    paddingVertical: rs(20),
    paddingHorizontal: rs(16),
    marginBottom: rs(16),
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  progressOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  gridLabel: {
    fontSize: rs(12),
    color: '#111827',
    marginBottom: rs(6),
    zIndex: 1,
  },
  gridValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
    zIndex: 1,
  },
  insightCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: rs(12),
    padding: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  insightText: {
    fontSize: rs(14),
    color: '#111827',
    flex: 1,
    marginRight: rs(16),
    lineHeight: rs(20),
  },
  perfRow: {
    borderRadius: rs(12),
    padding: rs(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  perfLabel: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
  perfRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(8),
    paddingVertical: rs(4),
    borderRadius: rs(6),
  },
  badgeTextWhite: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(12),
  },
  perfSubText: {
    fontSize: rs(13),
    color: '#6B7280',
    marginLeft: rs(8),
  },
  badgeOutline: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
  },
  badgeTextDark: {
    color: '#4B5563',
    fontWeight: '600',
    fontSize: rs(11),
  },
});

export default GoalsDashboardScreen;
