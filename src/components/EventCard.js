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
  // Dynamic status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'In Progress':
        return { backgroundColor: colors.white, color: colors.black,container:colors.blueAccent,contentColor:colors.white }; // light blue + blue text
      case 'Completed':
        return { backgroundColor: colors.black, color: colors.white,container:colors.yellowAccent,contentColor:colors.black }; // gold + dark text
      default:
        return { backgroundColor: '#e0e0e0', color: '#555',container:colors.blueAccent };
    }
  };

  const statusStyle = getStatusStyle(event.status);

  return (
    <View style={[styles.card, {backgroundColor:statusStyle.container}]}>

      
      <View style={[styles.dateContainer,{backgroundColor:statusStyle.contentColor}]}>
        <Text style={[styles.date,{color:statusStyle.color}]}>
            {formatDate(event.date)}
        </Text>

      </View>

      <View style={styles.dataContainer}> 
           <View style={styles.dataRow}>
        <Text style={[styles.eventname,{color:statusStyle.contentColor}]}>{event.name}</Text>
        <SimpleLineIcons name='options-vertical' size={responsiveWidth(7)}/>
      </View>

          <View style={styles.timeRow}>
<Octicons name='clock' size={responsiveWidth(4.5)} color={statusStyle.contentColor}/>  
        <Text style={[styles.time,{color:statusStyle.contentColor}]}> {event.startTime} – {event.endTime}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.client}>
        <Ionicons name="people"size={responsiveWidth(5.5)} color={statusStyle.contentColor}/> 
        <Text style={[styles.clientName,{color:statusStyle.contentColor}]}>{event.client}</Text>
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

    borderRadius: 12,
    padding: responsiveWidth(2),
    marginRight: 16,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    flexDirection:"row",
    gap:responsiveWidth(3)
  },
  eventname:{
fontSize:responsiveFontSize(2.2)
  },
  dataContainer:{

flex:1,


  },
  dataRow:{
flexDirection:'row',
justifyContent:"space-between"
  },
  date:{
    fontSize:responsiveFontSize(2.2),
    textAlign:"center"
  },
  dateContainer:{

padding:responsiveWidth(1),
width:responsiveWidth(14),

borderRadius:responsiveWidth(2)


  },

 

  timeRow: {
    marginTop: responsiveHeight(0.1),
    flexDirection:"row",
    alignItems:"center",
    gap:responsiveWidth(1)
  },
  time: {
    fontSize: responsiveFontSize(2),
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  client: {
    fontSize: 14,
    color: '#444',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
  },
  client:{
    flexDirection:"row",
    alignItems:"center",
    gap:responsiveWidth(2.5)
  },
  clientName:{
    fontSize:responsiveFontSize(2.3),
    color:colors.white
  }
});

export default EventCard;