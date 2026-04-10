import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CustomHeader from '../components/CustomHeader';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import EventCard from "../components/EventCard";
import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import CalendarDropDown from "../components/CalendarDropDown"
import ScreenWrapper from '../components/ScreenWrapper';
import { formatDate } from '../utils/formateDate';
import Ionicons from 'react-native-vector-icons/Ionicons';

const JobsData = [
  { date: '2026-02-13', name: 'Wedding Film – Mark & Jess', tags: [ 'In Progress'],client:"Marks", startTime : '10:00',
  endTime :'01:00',

  status: 'In Progress' },
   { date: '2026-02-13', name: 'Wedding Film – Mark & Jess', tags: [ 'In Progress'],client:"Marks", startTime : '23:00',
  endTime :'20:00',

  status: 'In Progress' },
   { date: '2026-02-13', name: 'Wedding Film – Mark & Jess', tags: [ 'In Progress'],client:"Marks", startTime : '23:00',
  endTime :'20:00',

  status: 'Completed' },
   { date: '2026-02-13', name: 'Wedding Film – Mark & Jess', tags: [ 'In Progress'],client:"Marks", startTime : '23:00',
  endTime :'20:00',

  status: 'Completed' },
   { date: '2026-02-13', name: 'Wedding Film – Mark & Jess', tags: [ 'In Progress'],client:"Marks", startTime : '23:00',
  endTime :'20:00',

  status: 'Completed' },
  { date: '2026-02-18', name: 'Wedding Film – Mark & Jess', tags: ['Completed'],client:"Marks", startTime : '00:00',
  endTime :'00:00',
  status: 'Completed'  },
  { date: '2026-02-22', name: 'Annual Report Video', tags: [ 'In Progress'] ,client:"Marks", startTime : '00:00',
  endTime :'00:00',
  status: 'In Progress' },

];

const TAG_COLORS = {
  Completed: colors.yellowAccent,
  'In Progress': colors.blueAccent,
};

const CALENDAR_THEME = {
  textSectionTitleColor: colors.gray,
  selectedDayBackgroundColor: colors.blueSecondary,
  selectedDayTextColor: colors.white,
  todayTextColor: colors.bluePrimary,
  dayTextColor: colors.black,
  textDisabledColor: '#d9e1e8',
  dotColor: colors.bluePrimary,
  selectedDotColor: colors.white,
  arrowColor: colors.bluePrimary,
  monthTextColor: colors.black,
  indicatorColor: 'blue',
  textDayFontWeight: '500',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '600',
  textDayFontSize: 14,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 12,
};

const SimpleCalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDayPress = useCallback((day) => {
    if (selectedDate !== day.dateString) {
      setSelectedDate(day.dateString);
    }
  }, [selectedDate]);

  const markedDates = useMemo(() => {
    const marked = {};

    JobsData.forEach(event => {
      const circleColor = TAG_COLORS[event.tags[0]];
      const textColor = event.status === "In Progress" ? colors.white : colors.black

      marked[event.date] = {
        customStyles: {
          container: {
            backgroundColor: circleColor,
            borderRadius: 20,
          },
          text: {
            color: textColor,
            fontWeight: 'bold',
          },
        },
      };
    });

    if (selectedDate && !marked[selectedDate]) {
      marked[selectedDate] = {
        customStyles: {
          container: {
            backgroundColor: colors.blueSecondary,
            borderRadius: 20,
          },
          text: {
            color: colors.white,
            fontWeight: 'bold',
          },
        },
      };
    }

    return marked;
  }, [selectedDate]);

  const eventsToShow = useMemo(() => {
    return selectedDate
      ? JobsData.filter(event => event.date === selectedDate)
      : JobsData;
  }, [selectedDate]);

  const theme = useMemo(() => ({
    ...CALENDAR_THEME,
    backgroundColor: colors.white,
    calendarBackground: colors.white,
  }), []);

  return (
    <ScreenWrapper edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Calendar" />
        <View style={styles.filterWrapper}>
          <CalendarDropDown
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </View>
      </View>

      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Calendar
          markingType="custom"
          onDayPress={handleDayPress}
          markedDates={markedDates}
          theme={theme}
          style={styles.calendar}
        />

        <View style={styles.eventListHeader}>
          <Text style={styles.eventTitle}>
            {selectedDate ? `Events for ${formatDate(selectedDate)}` : 'All Upcoming Events'}
          </Text>
        </View>

        {eventsToShow.length > 0 ? (
          eventsToShow.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <View style={styles.noEventContainer}>
             <Ionicons name="calendar-clear-outline" size={responsiveWidth(15)} color={colors.gray} />
             <Text style={styles.noEventText}>No events scheduled for this day</Text>
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SimpleCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollContent: {
    paddingBottom: responsiveHeight(12), // Space for fab/tab bar
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingBottom: responsiveHeight(2),
    // Shadow for header elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterWrapper: {
    paddingHorizontal: responsiveWidth(4),
  },
  calendar: {
    marginHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    borderRadius: 15,
  },
  eventListHeader: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  eventTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: colors.black,
  },
  noEventContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
  },
  noEventText: {
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: colors.gray,
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
});
