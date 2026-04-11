import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import JobCard from '../components/JobCard';
import { useNavigation } from '@react-navigation/native';
import ViewToggle from "../components/ViewToggle"
import JobBoardView from "../components/JobBoardView"
import FilterModal from '../components/FilterModal';
import JobDetailModal from '../components/JobDetailModal';

const JobsData = [
  {
    id: 1,
    tags: [
      { title: "Wedding", color: colors.black, bgColor: 'transparent', borderColor: '#D1D5DB' },
      { title: "In Progress", color: colors.white, bgColor: colors.statusInProgress },
    ],
    title: "Wedding Film – Mark & Jess",
    clientName: "Sarah Johnson",
    eventDate: "12 Nov 2025",
    cardColor: colors.cardBlue,
    progress: null, // Shows "ADD TASKS TO TRACK PROGRESS"
  },
  {
    id: 2,
    tags: [
      { title: "Music Video", color: colors.black, bgColor: 'transparent', borderColor: '#D1D5DB' },
      { title: "Review", color: colors.white, bgColor: colors.statusReview },
    ],
    title: "Music Video – Willow Studio",
    clientName: "Willow Studio",
    eventDate: "10 Nov 2025",
    cardColor: colors.cardYellow,
    progress: {
      percent: 90,
      currentTask: 3,
      totalTasks: 4
    },
  },
  {
    id: 3,
    tags: [
      { title: "Pre-Wedding", color: colors.black, bgColor: 'transparent', borderColor: '#D1D5DB' },
      { title: "Completed", color: colors.white, bgColor: colors.statusCompleted },
    ],
    title: "Pre-Wedding – Linda & Tom",
    clientName: "Emily Davis",
    eventDate: "15 Jan 2026",
    cardColor: colors.cardGreen,
    progress: {
      percent: 100,
      currentTask: 5,
      totalTasks: 5
    },
  },
];

const Jobs = () => {
  const navigation = useNavigation();
  const [viewType, setViewType] = useState('List');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigatetoJobForm = () => {
    navigation.navigate("AddJobs");
  };

  const handleJobPress = (job) => {
    if (viewType === 'List') {
      navigation.navigate('JobProfile', { job });
    } else {
      setSelectedJob(job);
      setDetailVisible(true);
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FFFFFF" edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Jobs" />

        <View style={styles.headerActions}>
          <View style={styles.toggleContainer}>
            <ViewToggle
              options={['List', 'Board']}
              selected={viewType}
              onSelect={setViewType}
            />
          </View>
          
          <View style={styles.iconGroup}>
            <TouchableOpacity style={styles.headerIconButton}>
              <Ionicons name="search-outline" size={24} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.headerIconButton} 
              onPress={() => setFilterVisible(true)}
            >
              <Ionicons name="options-outline" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <FilterModal 
        visible={isFilterVisible} 
        onClose={() => setFilterVisible(false)}
        onApply={() => setFilterVisible(false)}
      />

      <JobDetailModal
        visible={isDetailVisible}
        onClose={() => setDetailVisible(false)}
        job={selectedJob}
      />

      <View style={styles.listContainer}>
        {viewType === "List" && (
          <ScrollView 
            style={styles.mainwrapper} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {JobsData.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onPress={() => handleJobPress(job)} 
              />
            ))}
          </ScrollView>
        )}
        {viewType === "Board" && <JobBoardView onJobPress={handleJobPress} />}

        <TouchableOpacity style={styles.fab} onPress={navigatetoJobForm} activeOpacity={0.8}>
          <Ionicons name="add" size={24} color={colors.white} />
          <Text style={styles.fabText}>Add Job</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: colors.white,
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleContainer: {
    flex: 1,
    marginRight: responsiveWidth(4),
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIconButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
  },
  mainwrapper: {
    paddingHorizontal: responsiveWidth(5),
  },
  scrollContent: {
    paddingBottom: responsiveHeight(15),
    paddingTop: responsiveHeight(1),
  },
  fab: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    right: responsiveWidth(5),
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});
