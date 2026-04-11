import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const PerformanceTab = () => {
  const [activeTrend, setActiveTrend] = useState('Jobs'); // 'Jobs' or 'Revenue'

  return (
    <View style={styles.container}>
      {/* 1. Summary Cards */}
      <View style={styles.summaryRow}>
        <View style={[styles.summaryCard, { backgroundColor: '#E0F2FE' }]}>
          <View style={[styles.iconBox, { backgroundColor: '#00B1E7' }]}>
            <Feather name="briefcase" size={18} color={colors.white} />
          </View>
          <Text style={styles.summaryLabel}>Active Jobs</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>12</Text>
            <Text style={styles.summarySub}>Active</Text>
          </View>
        </View>

        <View style={[styles.summaryCard, { backgroundColor: '#FEF3C7' }]}>
          <View style={[styles.iconBox, { backgroundColor: '#F59E0B' }]}>
            <MaterialCommunityIcons name="check-circle" size={18} color={colors.white} />
          </View>
          <Text style={styles.summaryLabel}>Jobs Completed</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>48</Text>
            <Text style={styles.summarySub}>This Month</Text>
          </View>
        </View>
      </View>

      {/* 2. Performance Trend */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Performance Trend</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Last 6 Months</Text>
            <Feather name="chevron-down" size={14} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleBtn, activeTrend === 'Jobs' && styles.toggleBtnActive]}
            onPress={() => setActiveTrend('Jobs')}
          >
            <Text style={[styles.toggleText, activeTrend === 'Jobs' && styles.toggleTextActive]}>
              Jobs Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, activeTrend === 'Revenue' && styles.toggleBtnActive]}
            onPress={() => setActiveTrend('Revenue')}
          >
            <Text style={[styles.toggleText, activeTrend === 'Revenue' && styles.toggleTextActive]}>
              Revenue Generated
            </Text>
          </TouchableOpacity>
        </View>

        {/* Custom SVG Chart */}
        <View style={styles.chartContainer}>
          <Svg height="200" width={responsiveWidth(80)} style={styles.svg}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#F59E0B" stopOpacity="0.3" />
                <Stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
              </LinearGradient>
            </Defs>
            {/* Grid Lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Path
                key={i}
                d={`M 0 ${30 + i * 30} L ${responsiveWidth(80)} ${30 + i * 30}`}
                stroke="#F3F4F6"
                strokeWidth="1"
              />
            ))}
            
            {/* Area Path */}
            <Path
              d={`M 0 180 Q 20 170 40 160 T 80 140 T 120 150 T 160 100 T 200 90 T 240 80 T 280 40 L 280 180 L 0 180 Z`}
              fill="url(#grad)"
            />
            {/* Line Path */}
            <Path
              d={`M 0 180 Q 20 170 40 160 T 80 140 T 120 150 T 160 100 T 200 90 T 240 80 T 280 40`}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3"
            />

            {/* Data points */}
            <Circle cx="0" cy="180" r="4" fill="#F59E0B" />
            <Circle cx="60" cy="145" r="4" fill="#F59E0B" />
            <Circle cx="120" cy="150" r="4" fill="#F59E0B" />
            <Circle cx="180" cy="100" r="4" fill="#F59E0B" />
            <Circle cx="240" cy="90" r="4" fill="#F59E0B" />
            <Circle cx="300" cy="40" r="4" fill="#F59E0B" />

            {/* Tooltip mockup */}
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>December – 14 Jobs Completed</Text>
            </View>
          </Svg>
          
          <View style={styles.chartLabels}>
            <Text style={styles.labelMonth}>Jul</Text>
            <Text style={styles.labelMonth}>Aug</Text>
            <Text style={styles.labelMonth}>Sep</Text>
            <Text style={styles.labelMonth}>Oct</Text>
            <Text style={styles.labelMonth}>Nov</Text>
            <Text style={styles.labelMonth}>Dec</Text>
          </View>
        </View>
      </View>

      {/* 3. Task Efficiency */}
      <View style={[styles.sectionCard, { marginBottom: 40 }]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Task Efficiency</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>December</Text>
            <Feather name="chevron-down" size={14} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Segmented Bar */}
        <View style={styles.segmentedBar}>
          <View style={[styles.segment, { width: '40%', backgroundColor: '#00B1E7', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]} />
          <View style={[styles.segment, { width: '20%', backgroundColor: '#6B7280' }]} />
          <View style={[styles.segment, { width: '25%', backgroundColor: '#F59E0B' }]} />
          <View style={[styles.segment, { width: '15%', backgroundColor: '#22C55E', borderTopRightRadius: 10, borderBottomRightRadius: 10 }]} />
        </View>

        {/* Metrics List */}
        <View style={styles.metricsContainer}>
          <MetricRow dotColor="#00B1E7" label="Tasks Completed" value="42" />
          <MetricRow dotColor="#6B7280" label="Overdue Tasks" value="2" />
          <MetricRow dotColor="#F59E0B" label="Average Completion Time" value="2.4 Days" />
          <MetricRow dotColor="#22C55E" label="Revisions Required" value="3 Projects" />
        </View>
      </View>
    </View>
  );
};

const MetricRow = ({ dotColor, label, value }) => (
  <View style={styles.metricRow}>
    <View style={styles.metricLeft}>
      <View style={[styles.dot, { backgroundColor: dotColor }]} />
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
    <Text style={styles.metricValue}>{value}</Text>
  </View>
);

export default PerformanceTab;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
  },
  summaryCard: {
    width: '48%',
    padding: 16,
    borderRadius: 20,
    gap: 8,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  summaryValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },
  summarySub: {
    fontSize: 12,
    color: '#6B7280',
  },
  sectionCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 24,
    marginBottom: responsiveHeight(3),
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    gap: 4,
  },
  dropdownText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    padding: 4,
    borderRadius: 12,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  toggleBtnActive: {
    backgroundColor: '#00B1E7',
  },
  toggleText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
  },
  toggleTextActive: {
    color: colors.white,
  },
  chartContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  svg: {
    overflow: 'visible',
  },
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 2,
  },
  labelMonth: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  tooltip: {
    position: 'absolute',
    top: -10,
    right: 0,
    backgroundColor: '#111827',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  tooltipText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '500',
  },
  segmentedBar: {
    height: 36,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 25,
  },
  segment: {
    height: '100%',
  },
  metricsContainer: {
    gap: 16,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  metricLabel: {
    fontSize: 15,
    color: '#4B5563',
    fontWeight: '500',
  },
  metricValue: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
  },
});
