import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

// Import local images (PNG, JPG, etc.)
import avatar1 from '../assets/Ellipse63.png';
import avatar2 from '../assets/Ellipse63.png';
import avatar3 from '../assets/Ellipse63.png';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Button } from 'react-native/types_generated/index';
import ButtonSimple from './Button';
import colors from '../utils/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TeamAvatars = () => {
  // For local images → use the imported variable directly in source
  const teamMembers = [
    { id: 1, source: avatar1 },
    { id: 2, source: avatar2 },
    { id: 3, source: avatar3 },
   
  ];

  const maxVisible = 3;
  const visibleMembers = teamMembers.slice(0, maxVisible);
  const remaining = teamMembers.length - maxVisible;

  return (
    <View style={styles.teamContainer}>
      {visibleMembers.map((member) => (
        <Image
          key={member.id}
          source={member.source}          
          style={styles.avatar}
        />
      ))}

    
        <ButtonSimple title={""} leftIcon={
          <Fontisto name="plus-a" size={20} color={colors.white}/>
        }   style={styles.rightButton}  textStyle={styles.addButtonText}    />
 

   
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:responsiveWidth(1),
   
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: -14,     // adjust overlap strength (try -10 to -16)
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF', // iOS blue – change to match your app
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 3,      // should match the negative marginRight of avatars
  },
  addText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
    rightButton: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(50),
    // backgroundColor: colors.blueAccent,
    borderColor:colors.white,
    borderWidth:2,
    flexDirection: 'row',
    gap: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveWidth(4),
    fontWeight: '600',
  },
});

export default TeamAvatars;