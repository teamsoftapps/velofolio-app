import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomText from './CustomText';
import ButtonSimple from './Button';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({ title,onPress }) => {
  const navigation = useNavigation();

const handleGoBack = () => {
  navigation.goBack();
};
  const isCentered = title === "Company Profile";

  return (
    <View style={styles.header}>
      <View  style={[
    styles.leftSide,
    (title === 'Notifications'||title==="Change Password"   || title === "Security & Password" || title==="Add Jobs"|| title==="Add Clients" || title==="Company Profile" ||title==="Settings" || title==="Add New Memebers"||title==="Profile" || title==="Payments") && { width: '100%' },title==="Report & Analysis" && { width: '80%' },
  ]}>
        <TouchableOpacity style={styles.leftIcon} onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
        </TouchableOpacity>
          {isCentered ? (
        <View style={styles.centerTitle}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}
      </View>
  {title==="Report & Analysis"&&  <View style={[styles.mail,styles.file]}>
                    <FontAwesome5 name="file-export" size={responsiveWidth(7)} color={colors.white} />

          </View>}

      {   !(title === 'Notifications'||title==="Profile" ||title==="Change Password" ||  title === "Security & Password" || title==="Add Jobs"|| title==="Company Profile" || title==="Add Clients"||title==="Settings"|| title==="Add New Memebers" || title==="Payments"||title==="Report & Analysis")&&
      <View style={styles.sideContainer}>
      {title==="Add New Memebers"&&  <View style={styles.mail}>
                    <Ionicons name="mail-outline" size={responsiveWidth(8)} color={colors.white} />

          </View>}
        <ButtonSimple title={`Add ${title==="Calendar"?"New":title==="Teams"?"Member":title.slice(0,-1)}`} onPress={onPress} leftIcon={
          <Fontisto name="plus-a" size={20} color={colors.white}/>
        }   style={styles.rightButton}  textStyle={styles.addButtonText}    />
       
      </View>}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(4),
    backgroundColor:colors.white,
    paddingHorizontal: responsiveWidth(2),
  },
  headerTitle: {
    fontSize: responsiveWidth(6),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  centerTitle: {
  position: 'absolute',
  left: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
},
  leftSide: {
    width: responsiveWidth(28),
    alignItems: 'center',
    flexDirection: 'row',
    gap: responsiveWidth(4),
  },
  mail:{
padding:responsiveWidth(2),
backgroundColor:colors.greenAccent,
width:responsiveWidth(15),
borderRadius:responsiveWidth(3),
justifyContent:"center",
alignItems:"center"
  },
  file:{
width:responsiveWidth(12),
paddingHorizontal:0,
paddingLeft:responsiveWidth(2)

  },
  leftIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderColor: colors.inputBorder,
    borderWidth: 2,
    borderRadius: responsiveWidth(3),

    justifyContent: 'center',
    alignItems: 'center',
  },
  sideContainer:{
    flexDirection:"row",
    gap:responsiveWidth(2)
  },
  plusIcon: {
    fontSize: responsiveWidth(7),
    textAlign: 'center',
    tintColor: colors.white,
    color: colors.white,
  },
  rightButton: {
    width: responsiveWidth(36),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    // backgroundColor: colors.blueAccent,
    flexDirection: 'row',
    gap: responsiveWidth(7),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:responsiveWidth(3)
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveWidth(4),
    fontWeight: '600',
    marginLeft:responsiveWidth(2)
  },
});
