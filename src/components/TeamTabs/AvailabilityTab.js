import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_NAMES = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const YEARS = [2025, 2026, 2027, 2028];

// Pre-defined availability data for demo (day number -> type)
const AVAILABILITY_MAP = {
  4: 'available',
  18: 'available',
  8: 'booked',
  22: 'booked',
  13: 'partial',
  29: 'partial',
  27: 'today',
};

const TYPE_COLORS = {
  available: '#10B981',
  booked: '#EF4444',
  partial: '#FBBF24',
  today: '#38BDF8',
};

const AvailabilityTab = () => {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(0); // January = 0
  const [viewMode, setViewMode] = useState('Month');
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // Build month+year list for dropdown
  const monthYearOptions = [];
  YEARS.forEach(year => {
    MONTH_NAMES.forEach((month, index) => {
      monthYearOptions.push({ label: `${month} ${year}`, month: index, year });
    });
  });

  const handleSelectMonth = (item) => {
    setCurrentMonth(item.month);
    setCurrentYear(item.year);
    setMonthModalVisible(false);
  };

  const renderCalendarGrid = () => {
    const rows = [];
    let cells = [];

    // Previous month filler days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      cells.push(
        <View key={`prev-${i}`} style={styles.dayCell}>
          <Typography style={styles.dayTextFaded}>{day}</Typography>
        </View>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const type = AVAILABILITY_MAP[day];
      const bgColor = type ? TYPE_COLORS[type] : 'transparent';
      const textColor = type ? '#FFFFFF' : '#111827';

      cells.push(
        <TouchableOpacity key={`cur-${day}`} style={styles.dayCell}>
          <View
            style={[
              styles.dayCircle,
              type && { backgroundColor: bgColor },
            ]}
          >
            <Typography style={[styles.dayText, { color: textColor }]}>
              {day}
            </Typography>
          </View>
        </TouchableOpacity>
      );

      if ((firstDayOfMonth + day) % 7 === 0) {
        rows.push(
          <View key={`row-${rows.length}`} style={styles.weekRow}>
            {cells}
          </View>
        );
        cells = [];
      }
    }

    // Next month filler days
    if (cells.length > 0) {
      let nextDay = 1;
      while (cells.length < 7) {
        cells.push(
          <View key={`next-${nextDay}`} style={styles.dayCell}>
            <Typography style={styles.dayTextFaded}>{nextDay}</Typography>
          </View>
        );
        nextDay++;
      }
      rows.push(
        <View key={`row-${rows.length}`} style={styles.weekRow}>
          {cells}
        </View>
      );
    }

    return rows;
  };

  return (
    <View style={styles.container}>
      {/* Month/Year Header + View Toggle */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.monthPicker}
          onPress={() => setMonthModalVisible(true)}
        >
          <Feather name="calendar" size={rs(16)} color="#111827" style={{ marginRight: rs(6) }} />
          <Typography style={styles.monthText}>
            {MONTH_NAMES[currentMonth]} {currentYear}
          </Typography>
          <Feather name="chevron-down" size={rs(16)} color="#111827" style={{ marginLeft: rs(4) }} />
        </TouchableOpacity>
        <View style={styles.rightControls}>
          <TouchableOpacity style={styles.viewToggle}>
            <Typography style={styles.viewToggleText}>{viewMode}</Typography>
            <Feather name="chevron-down" size={rs(14)} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus" size={rs(20)} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Day Names Header */}
      <View style={styles.weekRow}>
        {DAY_NAMES.map((d, i) => (
          <View key={i} style={styles.dayCell}>
            <Typography style={styles.dayNameText}>{d}</Typography>
          </View>
        ))}
      </View>

      {/* Calendar Grid */}
      {renderCalendarGrid()}

      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendRow}>
          <View style={[styles.legendPill, { backgroundColor: '#10B981' }]}>
            <Typography style={styles.legendPillText}>Available</Typography>
          </View>
          <View style={[styles.legendPill, { backgroundColor: '#EF4444' }]}>
            <Typography style={styles.legendPillText}>Booked</Typography>
          </View>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendPill, { backgroundColor: '#FBBF24' }]}>
            <Typography style={styles.legendPillText}>Partial</Typography>
          </View>
          <View style={[styles.legendPill, { backgroundColor: '#E5E7EB' }]}>
            <Typography style={[styles.legendPillText, { color: '#111827' }]}>Time Off</Typography>
          </View>
        </View>
      </View>

      {/* Month Selection Modal */}
      <Modal
        visible={monthModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMonthModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMonthModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Typography style={styles.modalTitle}>Select Month</Typography>
              <TouchableOpacity onPress={() => setMonthModalVisible(false)}>
                <Feather name="x" size={rs(24)} color="#111827" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={monthYearOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                const isSelected =
                  item.month === currentMonth && item.year === currentYear;
                return (
                  <TouchableOpacity
                    style={[
                      styles.modalItem,
                      isSelected && styles.modalItemSelected,
                    ]}
                    onPress={() => handleSelectMonth(item)}
                  >
                    <Typography
                      style={[
                        styles.modalItemText,
                        isSelected && styles.modalItemTextSelected,
                      ]}
                    >
                      {item.label}
                    </Typography>
                    {isSelected && (
                      <Feather name="check" size={rs(18)} color="#38BDF8" />
                    )}
                  </TouchableOpacity>
                );
              }}
              showsVerticalScrollIndicator={false}
              initialScrollIndex={Math.max(
                0,
                monthYearOptions.findIndex(
                  i => i.month === currentMonth && i.year === currentYear
                ) - 2
              )}
              getItemLayout={(data, index) => ({
                length: rs(56),
                offset: rs(56) * index,
                index,
              })}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(40),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  monthPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(10),
    borderRadius: rs(10),
  },
  monthText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(10),
    borderRadius: rs(10),
    marginRight: rs(10),
  },
  viewToggleText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
    marginRight: rs(4),
  },
  addButton: {
    width: rs(42),
    height: rs(42),
    borderRadius: rs(12),
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: rs(6),
  },
  dayCell: {
    width: rs(42),
    height: rs(42),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayNameText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#9CA3AF',
  },
  dayCircle: {
    width: rs(36),
    height: rs(36),
    borderRadius: rs(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: rs(15),
    fontWeight: '500',
  },
  dayTextFaded: {
    fontSize: rs(15),
    fontWeight: '400',
    color: '#D1D5DB',
  },
  legendContainer: {
    marginTop: rs(24),
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(10),
  },
  legendPill: {
    flex: 1,
    height: rs(44),
    borderRadius: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: rs(4),
  },
  legendPillText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(24),
    borderTopRightRadius: rs(24),
    maxHeight: '60%',
    paddingBottom: rs(20),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    height: rs(56),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemSelected: {
    backgroundColor: '#F0F9FF',
  },
  modalItemText: {
    fontSize: rs(16),
    color: '#1A1A1A',
  },
  modalItemTextSelected: {
    color: '#38BDF8',
    fontWeight: '600',
  },
});

export default AvailabilityTab;
