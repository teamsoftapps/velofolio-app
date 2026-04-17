import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

// Jobs Completed data (Jul–Dec)
const JOBS_CHART_DATA = [
  { month: 'Jul', value: 2 },
  { month: 'Aug', value: 12 },
  { month: 'Sep', value: 22 },
  { month: 'Oct', value: 20 },
  { month: 'Nov', value: 30 },
  { month: 'Dec', value: 45 },
];

// Revenue Generated data (Jul–Dec) in thousands
const REVENUE_CHART_DATA = [
  { month: 'Jul', value: 3 },
  { month: 'Aug', value: 5 },
  { month: 'Sep', value: 18 },
  { month: 'Oct', value: 15 },
  { month: 'Nov', value: 25 },
  { month: 'Dec', value: 45 },
];

const CHART_MAX = 50;
const CHART_HEIGHT = rs(200);
const JOBS_Y_LABELS = [50, 40, 30, 20, 10, 0];
const REVENUE_Y_LABELS = ['$50K', '$40K', '$30K', '$20K', '$10K', '0'];

const CHART_THEMES = {
  jobs: {
    dotBorder: '#FBBF24',
    dotFill: '#FFFFFF',
    highlightColor: '#38BDF8',
    gradientBg: 'rgba(251, 191, 36, 0.12)',
    markerColor: '#FBBF24',
    tooltipText: 'December – 14 Jobs Completed',
  },
  revenue: {
    dotBorder: '#38BDF8',
    dotFill: '#FFFFFF',
    highlightColor: '#38BDF8',
    gradientBg: 'rgba(56, 189, 248, 0.12)',
    markerColor: '#38BDF8',
    tooltipText: 'December – $21,850 Revenue',
  },
};

const MetricCard = ({ icon, iconBg, label, value, sublabel }) => (
  <View style={styles.metricCard}>
    <View style={styles.metricHeader}>
      <View style={[styles.metricIconCircle, { backgroundColor: iconBg }]}>
        <Feather name={icon} size={rs(16)} color="#FFFFFF" />
      </View>
      <Typography style={styles.metricLabel}>{label}</Typography>
    </View>
    <View style={styles.metricValueRow}>
      <Typography style={styles.metricValue}>{value}</Typography>
      <Typography style={styles.metricSublabel}> {sublabel}</Typography>
    </View>
  </View>
);

const EfficiencyRow = ({ color, label, value }) => (
  <View style={styles.efficiencyRow}>
    <View style={styles.efficiencyLeft}>
      <View style={[styles.efficiencyDot, { backgroundColor: color }]} />
      <Typography style={styles.efficiencyLabel}>{label}</Typography>
    </View>
    <Typography style={styles.efficiencyValue}>{value}</Typography>
  </View>
);

const PerformanceTab = () => {
  const [activeChartTab, setActiveChartTab] = useState('jobs');

  const renderChart = () => {
    const isRevenue = activeChartTab === 'revenue';
    const chartData = isRevenue ? REVENUE_CHART_DATA : JOBS_CHART_DATA;
    const yLabels = isRevenue ? REVENUE_Y_LABELS : JOBS_Y_LABELS;
    const theme = CHART_THEMES[activeChartTab];
    const pointSpacing = rs(280) / (chartData.length - 1);

    return (
      <View style={styles.chartContainer}>
        {/* Y-Axis Labels */}
        <View style={styles.yAxis}>
          {yLabels.map((label, i) => (
            <Typography key={i} style={styles.yLabel}>
              {label}
            </Typography>
          ))}
        </View>

        {/* Chart Area */}
        <View style={styles.chartArea}>
          {/* Horizontal grid lines */}
          {yLabels.map((_, i) => (
            <View
              key={i}
              style={[
                styles.gridLine,
                { top: (i / (yLabels.length - 1)) * CHART_HEIGHT },
              ]}
            />
          ))}

          {/* Gradient fill */}
          <View style={styles.gradientFill}>
            {chartData.map((point, index) => {
              const height = (point.value / CHART_MAX) * CHART_HEIGHT;
              const left = index * pointSpacing;
              return (
                <View
                  key={index}
                  style={[
                    styles.gradientBar,
                    {
                      left,
                      height,
                      bottom: 0,
                      width: pointSpacing + rs(2),
                      backgroundColor: theme.gradientBg,
                    },
                  ]}
                />
              );
            })}
          </View>

          {/* Data Points Overlay */}
          <View style={styles.dotsOverlay}>
            {chartData.map((point, index) => {
              const dotSize = index === chartData.length - 1 ? rs(12) : rs(10);
              const bottom = (point.value / CHART_MAX) * CHART_HEIGHT - dotSize / 2;
              const left = index * pointSpacing - dotSize / 2;
              const isLast = index === chartData.length - 1;

              return (
                <React.Fragment key={index}>
                  <View
                    style={[
                      styles.chartDot,
                      {
                        bottom,
                        left,
                        borderColor: theme.dotBorder,
                      },
                      isLast && {
                        backgroundColor: theme.highlightColor,
                        borderColor: theme.highlightColor,
                        width: rs(12),
                        height: rs(12),
                        borderRadius: rs(6),
                      },
                    ]}
                  />
                  {(index === 1 || index === 3 || index === 5) && (
                    <View
                      style={[
                        styles.goldMarker,
                        {
                          left: index * pointSpacing - rs(3),
                          bottom: rs(-8),
                          backgroundColor: theme.markerColor,
                        },
                      ]}
                    />
                  )}
                </React.Fragment>
              );
            })}

            {/* Tooltip */}
            <View style={styles.tooltip}>
              <Typography style={styles.tooltipText}>
                {theme.tooltipText}
              </Typography>
            </View>
          </View>

          {/* X-Axis Labels */}
          <View style={styles.xAxis}>
            {chartData.map((point, i) => (
              <Typography key={i} style={styles.xLabel}>
                {point.month}
              </Typography>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Horizontal scrollable metric cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.metricsScroll}
      >
        <MetricCard
          icon="briefcase"
          iconBg="#38BDF8"
          label="Active Jobs"
          value="12"
          sublabel="Active"
        />
        <MetricCard
          icon="check-circle"
          iconBg="#10B981"
          label="Jobs Completed"
          value="48"
          sublabel="This Month"
        />
        <MetricCard
          icon="clock"
          iconBg="#6B7280"
          label="On-Time"
          value="92%"
          sublabel="Completion"
        />
        <MetricCard
          icon="dollar-sign"
          iconBg="#10B981"
          label="Contribution"
          value="$18,400"
          sublabel=""
        />
      </ScrollView>

      {/* Performance Trend Header */}
      <View style={styles.trendHeader}>
        <Typography style={styles.trendTitle}>Performance Trend</Typography>
        <TouchableOpacity style={styles.filterPill}>
          <Typography style={styles.filterPillText}>Last 6 Months</Typography>
          <Feather name="chevron-down" size={rs(14)} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Chart Toggle Tabs */}
      <View style={styles.chartToggleRow}>
        <TouchableOpacity
          style={[
            styles.chartToggle,
            activeChartTab === 'jobs' && styles.chartToggleActive,
          ]}
          onPress={() => setActiveChartTab('jobs')}
        >
          <Typography
            style={[
              styles.chartToggleText,
              activeChartTab === 'jobs' && styles.chartToggleTextActive,
            ]}
          >
            Jobs Completed
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chartToggle,
            activeChartTab === 'revenue' && styles.chartToggleActive,
          ]}
          onPress={() => setActiveChartTab('revenue')}
        >
          <Typography
            style={[
              styles.chartToggleText,
              activeChartTab === 'revenue' && styles.chartToggleTextActive,
            ]}
          >
            Revenue Generated
          </Typography>
        </TouchableOpacity>
      </View>

      {/* Chart */}
      {renderChart()}

      {/* Task Efficiency Section */}
      <View style={styles.efficiencyHeader}>
        <Typography style={styles.efficiencyTitle}>Task Efficiency</Typography>
        <TouchableOpacity style={styles.filterPill}>
          <Typography style={styles.filterPillText}>December</Typography>
          <Feather name="chevron-down" size={rs(14)} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Color Bars */}
      <View style={styles.colorBarsRow}>
        <View style={[styles.colorBar, { backgroundColor: '#38BDF8', flex: 4 }]} />
        <View style={[styles.colorBar, { backgroundColor: '#374151', flex: 1.5 }]} />
        <View style={[styles.colorBar, { backgroundColor: '#FBBF24', flex: 2 }]} />
        <View style={[styles.colorBar, { backgroundColor: '#10B981', flex: 1.5 }]} />
      </View>

      {/* Efficiency Rows */}
      <View style={styles.efficiencyList}>
        <EfficiencyRow color="#38BDF8" label="Tasks Completed" value="42" />
        <EfficiencyRow color="#374151" label="Overdue Tasks" value="2" />
        <EfficiencyRow color="#FBBF24" label="Average Completion Time" value="2.4 Days" />
        <EfficiencyRow color="#10B981" label="Revisions Required" value="3 Projects" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(40),
  },
  // Metric Cards
  metricsScroll: {
    paddingRight: rs(20),
    marginBottom: rs(28),
  },
  metricCard: {
    width: rs(150),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(16),
    padding: rs(14),
    marginRight: rs(10),
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  metricIconCircle: {
    width: rs(28),
    height: rs(28),
    borderRadius: rs(14),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(8),
  },
  metricLabel: {
    fontSize: rs(12),
    fontWeight: '500',
    color: '#6B7280',
    flex: 1,
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  metricValue: {
    fontSize: rs(26),
    fontWeight: '700',
    color: '#111827',
  },
  metricSublabel: {
    fontSize: rs(13),
    color: '#6B7280',
    fontWeight: '500',
  },
  // Performance Trend
  trendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(14),
  },
  trendTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(20),
  },
  filterPillText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#111827',
    marginRight: rs(4),
  },
  // Chart Toggle
  chartToggleRow: {
    flexDirection: 'row',
    marginBottom: rs(20),
  },
  chartToggle: {
    paddingHorizontal: rs(16),
    paddingVertical: rs(8),
    borderRadius: rs(20),
    backgroundColor: '#F3F4F6',
    marginRight: rs(8),
  },
  chartToggleActive: {
    backgroundColor: '#38BDF8',
  },
  chartToggleText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#6B7280',
  },
  chartToggleTextActive: {
    color: '#FFFFFF',
  },
  // Chart
  chartContainer: {
    flexDirection: 'row',
    marginBottom: rs(32),
  },
  yAxis: {
    width: rs(28),
    height: CHART_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: rs(6),
  },
  yLabel: {
    fontSize: rs(11),
    color: '#9CA3AF',
    fontWeight: '500',
  },
  chartArea: {
    flex: 1,
    height: CHART_HEIGHT + rs(30),
    position: 'relative',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  gradientFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: rs(30),
    height: CHART_HEIGHT,
  },
  gradientBar: {
    position: 'absolute',
    backgroundColor: 'rgba(251, 191, 36, 0.12)',
  },
  dotsOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: rs(30),
    height: CHART_HEIGHT,
  },
  chartDot: {
    position: 'absolute',
    width: rs(10),
    height: rs(10),
    borderRadius: rs(5),
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FBBF24',
  },
  goldMarker: {
    position: 'absolute',
    width: rs(6),
    height: rs(6),
    borderRadius: rs(3),
    backgroundColor: '#FBBF24',
    bottom: rs(24),
  },
  tooltip: {
    position: 'absolute',
    top: CHART_HEIGHT * 0.02,
    right: rs(0),
    backgroundColor: '#111827',
    paddingHorizontal: rs(12),
    paddingVertical: rs(6),
    borderRadius: rs(8),
  },
  tooltipText: {
    fontSize: rs(11),
    color: '#FFFFFF',
    fontWeight: '500',
  },
  xAxis: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  xLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    fontWeight: '500',
  },
  // Task Efficiency
  efficiencyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  efficiencyTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  colorBarsRow: {
    flexDirection: 'row',
    height: rs(20),
    borderRadius: rs(6),
    overflow: 'hidden',
    marginBottom: rs(20),
  },
  colorBar: {
    marginRight: rs(3),
  },
  efficiencyList: {
    marginTop: rs(4),
  },
  efficiencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rs(10),
  },
  efficiencyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  efficiencyDot: {
    width: rs(10),
    height: rs(10),
    borderRadius: rs(5),
    marginRight: rs(10),
  },
  efficiencyLabel: {
    fontSize: rs(14),
    color: '#111827',
    fontWeight: '500',
  },
  efficiencyValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
});

export default PerformanceTab;
