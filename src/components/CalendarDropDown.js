import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import IconButton from "./IconButton"
import { formatDate } from '../utils/formateDate';

const CalendarFilter = ({ selectedDate, onDateChange, availStyle }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  // Sync internal tempDate with the current selectedDate prop when it changes
  useEffect(() => {
    if (selectedDate) {
      setTempDate(new Date(selectedDate));
    } else {
      setTempDate(new Date());
    }
  }, [selectedDate]);

  const handleDateChange = useCallback((event, date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
      if (date) {
        onDateChange(date.toISOString().split('T')[0]);
      }
    } else if (date) {
      setTempDate(date);
    }
  }, [onDateChange]);

  const handleDone = useCallback(() => {
    onDateChange(tempDate.toISOString().split('T')[0]);
    setShowPicker(false);
  }, [onDateChange, tempDate]);

  const handleCancel = useCallback(() => {
    setShowPicker(false);
    // Reset tempDate to current selection on cancel
    if (selectedDate) {
      setTempDate(new Date(selectedDate));
    }
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdown, availStyle]}
        onPress={() => setShowPicker(true)}
        activeOpacity={0.7}
      >
        <View style={styles.dropdownLeft}>
          <Ionicons name="calendar-outline" size={responsiveWidth(4.5)} color={colors.black} />
          <Text style={styles.dateText}>
            {selectedDate ? formatDate(selectedDate) : 'Select Date'}
          </Text>
        </View>
        <Ionicons name="chevron-down" size={responsiveWidth(4)} color={colors.black} />
      </TouchableOpacity>

      <View style={styles.filterContainer}>
        <IconButton name="search-outline" />
        <IconButton name="options-outline" />
      </View>

      {showPicker && Platform.OS === 'android' && (
        <DateTimePicker
          value={selectedDate ? new Date(selectedDate) : new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showPicker && Platform.OS === 'ios' && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={showPicker}
          onRequestClose={() => setShowPicker(false)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setShowPicker(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={handleCancel}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDone}>
                  <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="inline"
                onChange={handleDateChange}
                themeVariant="light"
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default CalendarFilter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: responsiveHeight(1.5),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3.5),
    height: responsiveWidth(12),
    borderWidth: 1.2,
    borderColor: '#E5E7EB',
    borderRadius: responsiveWidth(3),
    backgroundColor: colors.white,
    width: responsiveWidth(60),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dropdownLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  filterContainer: {
    flexDirection: "row",
    gap: responsiveWidth(2.5),
    alignItems: 'center',
  },
  dateText: {
    fontSize: responsiveWidth(4),
    fontWeight: '500',
    color: colors.black,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: responsiveHeight(5),
    paddingTop: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  doneText: {
    color: colors.bluePrimary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cancelText: {
    color: colors.gray,
    fontSize: 18,
  },
});
