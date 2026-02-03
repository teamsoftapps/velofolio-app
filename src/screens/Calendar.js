import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CustomHeader from '../components/CustomHeader';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import EventCard from "../components/EventCard";
import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import CalendarDropDown from "../components/CalendarDropDown"
import ScreenWrapper from '../components/ScreenWrapper';

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


const SimpleCalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const buildMarkedDates = () => {
    const marked = {};

    JobsData.forEach(event => {
      // Use the first tag color as the circle color
      const circleColor = TAG_COLORS[event.tags[0]];
      const textColor=event.status==="In Progress"?colors.white:colors.black

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

    // Highlight selected date (blue)
      if (selectedDate && !marked[selectedDate]) {
    marked[selectedDate] = {
      customStyles: {
        container: {
          backgroundColor: colors.blueSecondary,
          borderRadius: 20,
        },
        text: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    };
  }

  return marked;
};



const eventsToShow = selectedDate
  ? JobsData.filter(event => event.date === selectedDate) 
  : JobsData;


  return (
    <ScreenWrapper style={styles.container} >
      <View style={styles.topContainer}>
      <CustomHeader title="Calendar" />
<CalendarDropDown

        selectedDate={selectedDate} 
        onDateChange={setSelectedDate} 
    
/>
    </View>
      <Calendar
        markingType="custom"
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={buildMarkedDates()}
        theme={{
          todayTextColor: '#0066ff',
          arrowColor: '#0066ff',
          
        }}
      />

      {selectedDate && (
        <>
       
          <ScrollView style={styles.cardContainer}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: responsiveHeight(2),
          }}
          >
            {eventsToShow.length > 0 ? (
              eventsToShow.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            ) : (
              <Text style={styles.noEventText}>No events</Text>
            )}
          </ScrollView>
        </>
      )}
    </ScreenWrapper>
  );
};

export default SimpleCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
    backgroundColor: "transparent",
  },
  topContainer:{
backgroundColor:colors.white,

  },

 
  noEventText: {
    textAlign: 'center',
    marginTop: 20,
    color: colors.gray,
    fontSize: responsiveFontSize(3),
    fontStyle: 'italic',
  },
});
