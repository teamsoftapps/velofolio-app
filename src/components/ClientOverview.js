import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import LeadSource from './LeadSource';
import AssignedTeam from './AssignedTeam';
import Notes from './Notes';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ClientOverview = () => {
  const teamMembers = [
    { id: '1', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: '2', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: '3', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: '4', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <LeadSource
          source="Instagram"
          iconName="instagram"
          iconColor="#E4405F"
          onEdit={() => console.log('Edit lead source')}
        />
        
        <AssignedTeam
          members={teamMembers}
          onEdit={() => console.log('Edit team')}
        />
        
        <Notes
          content="During our initial consultation, Sarah mentioned that she prefers a pastel color theme for the wedding and wants extra focus on candid shots. She also requested a highlight reel for social media, in addition to the full video package. Need to confirm the exact start time for the reception."
        />
      </View>
    </ScrollView>
  );
};

export default ClientOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  content: {
    padding: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
});