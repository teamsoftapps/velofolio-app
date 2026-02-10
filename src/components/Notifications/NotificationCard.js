// components/JobNotification.js
import React, { cloneElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons'; // change to your preferred default set
import colors from '../../utils/colors';

export default function NotificationCard({
  iconName = 'movie',
  iconSet = 'MaterialIcons',     // 'MaterialIcons' | 'Feather' | 'Ionicons' | 'MaterialCommunityIcons'
  title = 'Job Update',
  subtitle = '',
  timeAgo = 'just now',
  onPress,
  iconColor = '#007AFF',
  dotColor = '#007AFF',
  showBlueDot = true,
  iconBg,
  iconSize = 32,
}) {
  // Helper to get the correct icon component
  const getIcon = () => {
    let IconComponent;

    switch (iconSet) {
      case 'Feather':
        IconComponent = require('react-native-vector-icons/Feather').default;
        break;
      case 'Ionicons':
        IconComponent = require('react-native-vector-icons/Ionicons').default;
        break;
      case 'MaterialCommunityIcons':
        IconComponent = require('react-native-vector-icons/MaterialCommunityIcons').default;
        break;
      case 'MaterialIcons':
      default:
        IconComponent = Icon;
    }

    return <IconComponent name={iconName} size={iconSize} color={iconColor} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}

    >
        <View style={styles.topRow}>
            <View style={[styles.left,{backgroundColor:iconBg}]}>
                {getIcon()}
            </View>
                        <View style={styles.right}>
                            <View style={styles.topContainer}>
                            <View style={styles.titleContainer}>
                        <View style={styles.unread}></View>
                        <Text style={styles.title}>{title}</Text>
                        </View>
                         <Text style={styles.time}>{timeAgo}</Text>
                        </View>
                          
<Text
  style={styles.subtitle}
  numberOfLines={1}
  ellipsizeMode="tail"
>
  {subtitle}
</Text>
                                                  
                         <Text style={styles.detailAction}>View Details</Text>

                    

                        </View>


        </View>
     

       

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'coloumn',
    // alignItems: 'center',
    padding:responsiveWidth(4),
    // paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
    width:responsiveWidth(92),
    borderRadius:responsiveWidth(4)
  },
  topRow:{
    flexDirection:"row",
    alignItems:"start",
    gap:responsiveWidth(3)
  },
  
  left:{
    backgroundColor:colors.blueSecondary,
    width:responsiveWidth(14),
    height:responsiveHeight(6),
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:responsiveWidth(2)
  },
  right:{
    flexDirection:'coloumn',
       gap:6,
       justifyContent:"space-between",
       flex:1
  },
  topContainer:{
flexDirection:'row',
       alignItems:"center",
       gap:2,
       justifyContent:"space-between"
  },
  titleContainer:{
flexDirection:'row',
       alignItems:"center",
       gap:2,
    
  },
  time:{
fontSize:responsiveWidth(3.5),
color:colors.grayDark
  },
  title:{
fontSize:responsiveWidth(4.2),
fontWeight:"400"
  },
  subtitle:{
fontSize:responsiveWidth(4),
color:colors.grayDark,
  },
  detailAction:{
fontSize:responsiveWidth(4),
color:colors.blueAccent
  },
  unread:{
    width:responsiveWidth(2),
    height:responsiveHeight(1),
    backgroundColor:colors.blueAccent,
    borderRadius:responsiveWidth(50)
  }
 
});