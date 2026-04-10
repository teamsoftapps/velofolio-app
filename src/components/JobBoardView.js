import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import JobCard from './JobCardBoard';
import ColumnHeader from '../components/ColounmHeader';

const JobBoardView = ({ onJobPress }) => {
  // Sample data for demonstration
  const sampleJob = {
    title: 'Wedding Film – Mark & Jess',
    status: 'In Progress',
    members: [
      'https://i.pravatar.cc/150?u=a',
      'https://i.pravatar.cc/150?u=b',
    ],
    dueDate: 'OCT 7, 2025',
    client: 'SARAH JOHNSON',
    description: 'Footage received from the videographer. Editor to create a 3-minute highlight reel and full-length film by the deadline. Color correction and background music selection in progress.',
    attachments: [
      { id: 1, name: 'Wedding.jpg', time: 'Added Nov 1, 2025, 12:59 PM', uri: 'https://images.unsplash.com/photo-1519741497674-281482c3a157?w=600' }
    ]
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Pending Section */}
        <View style={styles.boardSection}>
          <ColumnHeader
            title={'Pending'}
            count={2}
            onAddPress={() => console.log('Add Pending')}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            <JobCard onPress={() => onJobPress && onJobPress({ ...sampleJob, status: 'Pending' })} />
            <JobCard onPress={() => onJobPress && onJobPress({ ...sampleJob, title: 'Portrait Shoot', status: 'Pending' })} />
          </ScrollView>
        </View>

        {/* In Progress Section */}
        <View style={styles.boardSection}>
          <ColumnHeader
            title={'In Progress'}
            count={2}
            onAddPress={() => console.log('Add In Progress')}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            <JobCard onPress={() => onJobPress && onJobPress({ ...sampleJob, status: 'In Progress' })} />
            <JobCard onPress={() => onJobPress && onJobPress({ ...sampleJob, title: 'Product Video', status: 'In Progress' })} />
          </ScrollView>
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: responsiveHeight(15) }} />
      </ScrollView>
    </View>
  );
};

export default JobBoardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  boardSection: {
    backgroundColor: 'transparent',
    paddingVertical: responsiveHeight(1),
  },
  horizontalScrollContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: responsiveWidth(4),
    paddingBottom: responsiveHeight(2),
  },
});
