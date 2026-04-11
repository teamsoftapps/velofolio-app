import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';
import colors from '../../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Availibility = () => {
  const [currentMonth, setCurrentMonth] = useState('January 2025');

  // Specific marked dates to match the image precisely
  const markedDates = {
    '2025-01-27': { customStyles: { container: { backgroundColor: '#111821' }, text: { color: colors.white } } },
    '2025-01-29': { customStyles: { container: { backgroundColor: '#FEF3C7' }, text: { color: '#B45309' } } },
    '2025-02-04': { customStyles: { container: { backgroundColor: '#22C55E' }, text: { color: colors.white } } },
    '2025-02-08': { customStyles: { container: { backgroundColor: '#22C55E' }, text: { color: colors.white } } },
    '2025-02-13': { customStyles: { container: { backgroundColor: '#F59E0B' }, text: { color: colors.white } } },
    '2025-02-18': { customStyles: { container: { backgroundColor: '#EF4444' }, text: { color: colors.white } } },
    '2025-02-22': { customStyles: { container: { backgroundColor: '#F59E0B' }, text: { color: colors.white } } },
    '2025-02-27': { customStyles: { container: { backgroundColor: '#111821' }, text: { color: colors.white } } },
  };

  const handleMonthChange = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    setCurrentMonth(`${monthNames[month.month - 1]} ${month.year}`);
  };

  return (
    <View style={styles.container}>
      {/* Redesigned Header */}
      <View style={styles.header}>
        <View style={styles.pickerRow}>
          <TouchableOpacity style={styles.pickerButton}>
            <Icon name="calendar-range" size={20} color={colors.black} />
            <Text style={styles.pickerText}>{currentMonth}</Text>
            <Icon name="chevron-down" size={20} color={colors.black} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.pickerButton}>
            <Text style={styles.pickerText}>Month</Text>
            <Icon name="chevron-down" size={18} color={colors.black} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={26} color={colors.white} />
        </TouchableOpacity>
      </View>

      {/* Styled Calendar */}
      <View style={styles.calendarCard}>
        <Calendar
          markingType="custom"
          markedDates={markedDates}
          onMonthChange={handleMonthChange}
          theme={{
            backgroundColor: colors.white,
            calendarBackground: colors.white,
            textSectionTitleColor: '#9CA3AF',
            dayTextColor: colors.black,
            todayTextColor: '#2563EB',
            textDisabledColor: '#D1D5DB',
            textDayFontWeight: '500',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
          style={styles.calendar}
          hideArrows={true}
          renderHeader={() => null} // Header is handled by custom UI above
        />
      </View>

      {/* Availability Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendRow}>
          <View style={[styles.legendItem, { backgroundColor: '#22C55E' }]}>
            <Text style={styles.legendText}>Available</Text>
          </View>
          <View style={[styles.legendItem, { backgroundColor: '#EF4444' }]}>
            <Text style={styles.legendText}>Booked</Text>
          </View>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendItem, { backgroundColor: '#F59E0B' }]}>
            <Text style={[styles.legendText, { color: colors.white }]}>Partial</Text>
          </View>
          <View style={[styles.legendItem, { backgroundColor: '#E5E7EB' }]}>
            <Text style={[styles.legendText, { color: '#4B5563' }]}>Time Off</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Availibility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  pickerRow: {
    flexDirection: 'row',
    gap: responsiveWidth(3),
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.2),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    gap: 6,
  },
  pickerText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
  addButton: {
    backgroundColor: '#00B1E7',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  calendarCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: responsiveHeight(3),
  },
  calendar: {
    paddingBottom: 10,
  },
  legendContainer: {
    marginTop: 10,
    gap: responsiveHeight(1.5),
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: responsiveWidth(3),
  },
  legendItem: {
    flex: 1,
    height: responsiveHeight(6),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});