import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import CustomText from './CustomText';
import colors from '../utils/colors';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'Wedding Film',
    date: '12 Nov 2025 – 4:00 PM',
    progress: 90,
    tagText: 'In Progress',
    avatars: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
      'https://i.pravatar.cc/150?img=5',
    ]
  },
  {
    id: '2',
    title: 'Product Shoot',
    date: '15 Nov 2025 – 10:00 AM',
    progress: 40,
    tagText: 'Planning',
    avatars: [
      'https://i.pravatar.cc/150?img=68',
      'https://i.pravatar.cc/150?img=47',
    ]
  }
];

const UpcomingJobCard = ({
  title,
  date,
  progress,
  tagText,
  avatars = [],
}) => {
  return (
    <View style={styles.card}>
      <CustomText style={styles.title} fontWeight="500">{title}</CustomText>

      <View style={styles.dateProgressContainer}>
        <CustomText style={styles.date}>{date}</CustomText>
        <CustomText style={styles.progressText} fontWeight="500">{progress}%</CustomText>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.avatarsContainer}>
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              source={{ uri: avatar }} // Remote avatar as visual representation
              style={[
                styles.avatar,
                { marginLeft: index > 0 ? -responsiveWidth(2) : 0, zIndex: 10 - index }
              ]}
            />
          ))}
        </View>
        <View style={styles.tag}>
          <CustomText style={styles.tagText}>{tagText}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default function UpcomingJobsSection() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.sectionTitle} fontWeight="600">
        Today & Upcoming
      </CustomText>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MOCK_JOBS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <UpcomingJobCard
            title={item.title}
            date={item.date}
            progress={item.progress}
            tagText={item.tagText}
            avatars={item.avatars}
          />
        )}
        contentContainerStyle={{ paddingLeft: responsiveWidth(1) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2.8),
    color: colors.black,
    marginBottom: responsiveHeight(1.5),
    paddingLeft: responsiveWidth(1),
  },
  card: {
    backgroundColor: colors.blueSecondary,
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
    marginRight: responsiveWidth(4), // spacing between cards in list
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    color: colors.black,
    marginBottom: responsiveHeight(0.5),
  },
  dateProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1),
  },
  date: {
    fontSize: responsiveFontSize(1.8),
    color: colors.textSecondary,
  },
  progressText: {
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  progressBarContainer: {
    marginBottom: responsiveHeight(2),
  },
  progressBarTrack: {
    height: responsiveHeight(1),
    backgroundColor: colors.white,
    borderRadius: responsiveHeight(0.5),
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.black,
    borderRadius: responsiveHeight(0.5),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarsContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    borderWidth: 2,
    borderColor: colors.blueSecondary,
  },
  tag: {
    backgroundColor: colors.bluePrimary,
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveHeight(0.6),
    borderRadius: responsiveWidth(4),
  },
  tagText: {
    color: colors.white,
    fontSize: responsiveFontSize(1.7),
  },
});
