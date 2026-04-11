import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import avatar1 from '../assets/Ellipse63.png';
import colors from '../utils/colors';

const TeamAvatars = () => {
  const teamMembers = [
    { id: 1, source: avatar1 },
    { id: 2, source: avatar1 },
    { id: 3, source: avatar1 },
  ];

  return (
    <View style={styles.teamContainer}>
      <View style={styles.avatarGroup}>
        {teamMembers.map((member, index) => (
          <Image
            key={member.id}
            source={member.source}
            style={[styles.avatar, { zIndex: teamMembers.length - index, marginLeft: index === 0 ? 0 : -15 }]}
          />
        ))}
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Feather name="plus" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00B1E7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginLeft: -10,
    zIndex: 0,
  },
});

export default TeamAvatars;