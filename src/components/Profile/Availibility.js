// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Calendar } from 'react-native-calendars'
// import CalendarFilter from '../CalendarDropDown'
// import colors from '../../utils/colors'
// import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

// const Availibility = () => {
//   return (
//     <View style={styles.conatiner}>
//       <View>
//         <CalendarFilter availStyle={styles.availCalendar} />
//       </View>
//         <Calendar
//         markingType="custom"
//         // onDayPress={(day) => setSelectedDate(day.dateString)}
//         // markedDates={buildMarkedDates()}
//         theme={{
//           todayTextColor: '#0066ff',
//           arrowColor: '#0066ff',
          
//         }}
//       />
//     </View>
//   )
// }

// export default Availibility

// const styles = StyleSheet.create({
//     conatiner:{
//         paddingHorizontal:responsiveWidth(4)
//     },
//     availCalendar:{
//         backgroundColor:colors.white,
//         borderWidth:0,
//         marginBottom:responsiveHeight(2)
//     }
// })

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';
import CalendarFilter from '../CalendarDropDown';
import colors from '../../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Availibility = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState('January 2025');

  // Sample marked dates based on your image
  const markedDates = {
    '2026-02-04': {
      customStyles: {
        container: {
          backgroundColor: colors.greenPrimary,
          borderRadius: 20,
        },
        text: {
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
    '2026-02-08': {
      customStyles: {
        container: {
          backgroundColor: colors.greenPrimary,
          borderRadius: 20,
        },
        text: {
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
    '2026-02-13': {
      customStyles: {
        container: {
          backgroundColor: colors.yellowPrimary,
          borderRadius: 20,
        },
        text: {
          color: colors.black,
          fontWeight: 'bold',
        },
      },
    },
    '2026-02-18': {
      customStyles: {
        container: {
          backgroundColor: colors.red,
          borderRadius: 20,
        },
        text: {
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
    '2026-02-22': {
      customStyles: {
        container: {
          backgroundColor: colors.yellowPrimary,
          borderRadius: 20,
        },
        text: {
          color: colors.black,
          fontWeight: 'bold',
        },
      },
    },
    '2026-02-27': {
      customStyles: {
        container: {
          backgroundColor: colors.gray,
          borderRadius: 20,
        },
        text: {
          color: colors.black,
          fontWeight: 'bold',
        },
      },
    },
    '2025-01-29': {
      customStyles: {
        container: {
          backgroundColor: colors.yellowSecondary,
          borderRadius: 20,
        },
        text: {
          color: colors.textDark,
          fontWeight: 'bold',
        },
      },
    },
  };

  // Handle month change
  const handleMonthChange = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    setCurrentMonth(`${monthNames[month.month - 1]} ${month.year}`);
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <View style={styles.row}>
        <View style={styles.headerLeft}>
          <Icon name="calendar-month" size={20} color={colors.textPrimary} />
          <Text style={styles.monthText}>{currentMonth}</Text>
          <Icon name="chevron-down" size={20} color={colors.textPrimary} />
        </View>
        
        <View style={styles.headerCenter}>
          <Text style={styles.viewText}>Month</Text>
          <Icon name="chevron-down" size={16} color={colors.textPrimary} />
        </View>
</View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

    

      {/* Custom Calendar */}
      <Calendar
        markingType="custom"
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        onMonthChange={handleMonthChange}
        hideExtraDays={false}
        showSixWeeks={true}
        firstDay={0} // Sunday starts
        theme={{
          backgroundColor: colors.white,
          calendarBackground: colors.white,
          textSectionTitleColor: colors.textPrimary,
          selectedDayBackgroundColor: colors.bluePrimary,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.bluePrimary,
          dayTextColor: colors.textPrimary,
          textDisabledColor: colors.textMuted,
          dotColor: colors.bluePrimary,
          selectedDotColor: colors.white,
          arrowColor: colors.bluePrimary,
          monthTextColor: colors.textPrimary,
          indicatorColor: colors.bluePrimary,
          textDayFontFamily: 'System',
          textMonthFontFamily: 'System',
          textDayHeaderFontFamily: 'System',
          textDayFontWeight: '400',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '600',
          textDayFontSize: responsiveFontSize(1.8),
          textMonthFontSize: responsiveFontSize(2),
          textDayHeaderFontSize: responsiveFontSize(1.6),
        }}
        style={styles.calendar}
      />

      {/* Status Buttons */}
      <View style={styles.statusContainer}>
        <View style={styles.statusRow}>
          <TouchableOpacity style={[styles.statusButton, styles.availableButton]}>
            <Text style={styles.statusText}>Available</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statusButton, styles.bookedButton]}>
            <Text style={styles.statusText}>Booked</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusRow}>
          <TouchableOpacity style={[styles.statusButton, styles.partialButton]}>
            <Text style={[styles.statusText, styles.partialText]}>Partial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statusButton, styles.timeOffButton]}>
            <Text style={[styles.statusText, styles.timeOffText]}>Time Off</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Availibility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: colors.screenBackground,
  },
  row:{
   flexDirection: 'row',
    alignItems: 'center',
    gap:responsiveWidth(2)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(1),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  monthText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: colors.textPrimary,
    marginHorizontal: responsiveWidth(1),
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  viewText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary,
    marginRight: responsiveWidth(1),
  },
  addButton: {
    backgroundColor: colors.bluePrimary,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  availCalendar: {
    backgroundColor: colors.white,
    borderWidth: 0,
    marginBottom: responsiveHeight(2),
  },
  calendar: {
    borderRadius: 12,
    marginBottom: responsiveHeight(2),
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statusContainer: {
    marginTop: responsiveHeight(1),
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.5),
  },
  statusButton: {
    width: '48%',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  availableButton: {
    backgroundColor: colors.greenPrimary,
  },
  bookedButton: {
    backgroundColor: colors.red,
  },
  partialButton: {
    backgroundColor: colors.yellowPrimary,
  },
  timeOffButton: {
    backgroundColor: colors.gray,
  },
  statusText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: colors.white,
  },
  partialText: {
    color: colors.textDark,
  },
  timeOffText: {
    color: colors.textDark,
  },
});