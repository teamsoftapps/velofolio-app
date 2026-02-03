import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import IconButton from "./IconButton"
import { formatDate } from '../utils/formateDate';

const CalendarFilter = ({ selectedDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowPicker(Platform.OS === 'ios'); // keep open for iOS
    if (date) {
      onDateChange(date.toISOString().split('T')[0]); // YYYY-MM-DD
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowPicker(true)}
        activeOpacity={0.7}
      >
                <Ionicons name="calendar" size={responsiveWidth(4)} color={colors.black} />

        <Text style={styles.dateText}>
          {selectedDate ? formatDate(selectedDate) : 'Select Date'}
        </Text>
        <Ionicons name="chevron-down-outline" size={responsiveWidth(4)} color={colors.black} />
      </TouchableOpacity>

      
      <View style={styles.filterContainer}>
        <IconButton name="search"/>

             <IconButton name="options-outline"/>
             
      </View>
    </View>
  );
};

export default CalendarFilter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-between"
  },

  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.6),
    borderWidth: 2,
    borderColor: colors.inputBorder,
    borderRadius: responsiveWidth(2),
    backgroundColor: colors.lightGray,
    width:responsiveWidth(45)
  },
  filterContainer:{
flexDirection:"row",
gap:responsiveWidth(2)
  },
  dateText: {
    fontSize: responsiveWidth(4),
    color: colors.black,
  },
});
