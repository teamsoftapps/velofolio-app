import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Tag from './Tag';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClientMetaRow from "../components/ClientBottomRow"
import ClientAvatarInfo from "../components/AvatarInfro"
import ActionButtons from "../components/ActionButton"
const ClientCard = ({ job = {}, onEdit, onDelete }) => {
  const defaultJob = {
    tags: [],
    clientName: "Unknown Client",
    email: "-",
    phone: "-",
    itemsCount: 0,
    totalAmount: 0,
    avatarUri: "https://i.pravatar.cc/150",
  };

  const data = { ...defaultJob, ...job };


  const {
    tags = [],
    clientName,
    email,
    phone,
    itemsCount = 0,
    totalAmount = 0,
    avatarUri,
  } = data;

  return (
    <View style={styles.card}>

      <View style={styles.topContainer}>
      <View style={styles.topRow}>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.title}
              bgColor={tag.bgColor}
              color={tag.color}
              style={tag.title?.toLowerCase() === 'completed' ? styles.completedTag : null}
            />
          ))}
        </View>

      <ClientAvatarInfo
    avatarUri={avatarUri}
    clientName={clientName}
    email={email}
  />
 
      </View>
        <ActionButtons
  onEdit={onEdit}
  onDelete={onDelete}
  data={data}
  direction="column"
/>
</View>


      
    <ClientMetaRow
        phone={phone}
        itemsCount={itemsCount}
        totalAmount={totalAmount}
      />

    </View>
  );
};

export default ClientCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    backgroundColor: colors.greenSecondary,
    padding: responsiveWidth(4.5),
    borderRadius: responsiveWidth(4.5),
    marginBottom: responsiveHeight(2.4),

  },
topContainer:{
flexDirection:"row",
justifyContent:"space-between",
width:"100%"
},
  topRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width:"auto",
    maxWidth:"84%",
    flex:1
  },

  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    maxWidth: '100%',
  },

  completedTag: {
    backgroundColor: '#4CAF50', // force nice green if not in colors
  },

  actions: {
   
    gap: responsiveWidth(3),
  },

  iconButton: {
    width: responsiveWidth(10.5),
    height: responsiveWidth(10.5),
    borderRadius: 999,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },

  clientContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginVertical: responsiveHeight(1.8),
  },

 
  

});