import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {formatDate} from "../utils/formateDate"
import colors from '../utils/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SimpleLineIcons
 from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EventCard = ({
    

 event

}) => {

  const getStatusStyle = (status) => {
    switch (status) {
      case 'In Progress':
        return { backgroundColor: colors.white, color: colors.black,container:colors.blueAccent,contentColor:colors.white };
      case 'Completed':
        return { backgroundColor: colors.black, color: colors.white,container:colors.yellowAccent,contentColor:colors.black }; 
      default:
        return { backgroundColor: '#e0e0e0', color: '#555',container:colors.blueAccent };
    }
  };

  const statusStyle = getStatusStyle(event.status);

  return (
    <View style={[styles.card, { backgroundColor: statusStyle.container }]}>
      <View style={[styles.dateContainer, { backgroundColor: statusStyle.contentColor }]}>
        <Text style={[styles.date, { color: statusStyle.color }]}>
          {formatDate(event.date).split(',').join('\n')}
        </Text>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.dataRow}>
          <Text style={[styles.eventname, { color: statusStyle.contentColor }]} numberOfLines={1}>
            {event.name}
          </Text>
          <TouchableOpacity>
            <SimpleLineIcons name='options-vertical' size={responsiveWidth(5)} color={statusStyle.contentColor} />
          </TouchableOpacity>
        </View>

        <View style={styles.timeRow}>
          <Ionicons name='time-outline' size={responsiveWidth(4.2)} color={statusStyle.contentColor} />
          <Text style={[styles.time, { color: statusStyle.contentColor }]}>
            {event.startTime} – {event.endTime}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.client}>
            <Ionicons name="person-outline" size={responsiveWidth(4.5)} color={statusStyle.contentColor} />
            <Text style={[styles.clientName, { color: statusStyle.contentColor }]}>{event.client}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: statusStyle.backgroundColor }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>{event.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: responsiveWidth(3.5),
    marginBottom: responsiveHeight(1.5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    flexDirection: "row",
    gap: responsiveWidth(4),
    width: "92%",
    alignSelf: 'center',
  },
  eventname: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '700',
    flex: 1,
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  date: {
    fontSize: responsiveFontSize(1.8),
    textAlign: "center",
    fontWeight: 'bold',
    lineHeight: responsiveFontSize(2.2),
  },
  dateContainer: {
    padding: responsiveWidth(2),
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeRow: {
    marginTop: responsiveHeight(0.5),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(1.5),
  },
  time: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  clientName: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  client: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(1.5),
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
  },
});

export default EventCard;