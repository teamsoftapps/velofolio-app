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
    tags: [
      { title: "Wedding", color: colors.white, bgColor: colors.blueAccent },
      { title: "In Progress", color: colors.black, bgColor: colors.purpleLight },
    ],
    title: "Wedding Film Mark & Jess",
    details: [
      { label: "Event Date", value: "12 Nov 2025" },
      { label: "Location", value: "New York" },
    ],
    progress: {
      colors: colors.yellowAccent,
      percent: 70,
    },
  },
  {
    tags: [
      { title: "Corporate", color: colors.white, bgColor: colors.greenAccent },
      { title: "Pending", color: colors.white, bgColor: colors.greenAccent },
    ],
    title: "Annual Report Video",
    details: [
      { label: "Event Date", value: "22 Dec 2025" },
      { label: "Location", value: "San Francisco" },
    ],
    progress: {
      colors: colors.greenAccent,
      percent: 45,
    },
  },
  {
    tags: [
      { title: "Birthday", color: colors.white, bgColor: colors.blueAccent},
      { title: "Completed", color: colors.white, bgColor: colors.greenAccent }
    ],
    title: "Emma's 30th Birthday Party",
    details: [
      { label: "Event Date", value: "05 Jan 2026" },
      { label: "Location", value: "Los Angeles" },
    ],
    progress: {
      colors: colors.pinkAccent,
      percent: 100,
    },
  },
  {
    tags: [
      { title: "Festival", color: colors.black, bgColor: colors.purpleLight },
      { title: "In Progress", color: colors.white, bgColor: colors.greenAccent },
    ],
    title: "Music Festival Promo",
    details: [
      { label: "Event Date", value: "18 Feb 2026" },
      { label: "Location", value: "Miami" },
    ],
    progress: {
      colors: colors.purpleAccent,
      percent: 30,
    },
  },
];

const Jobs = () => {
  const navigation = useNavigation();
  const navigatetoJobForm = () => {
    navigation.navigate("AddJobs");
  };
  const [viewType, setViewType] = useState('Board'); // Default to Board as per request
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobPress = (job) => {
    setSelectedJob(job);
    setDetailVisible(true);
  };

  return (
    <ScreenWrapper backgroundColor="#F9FAFB" edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Jobs" />

        <View style={styles.headerActions}>
          <ViewToggle
            options={['List', 'Board']}
            selected={viewType}
            onSelect={setViewType}
          />
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
      
      {/* Modals */}
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
    { viewType==="List"&&   <ScrollView style={styles.mainwrapper}  contentContainerStyle={{
      alignItems: 'center',
      paddingBottom: responsiveHeight(15),
    }}>
         {JobsData.map((job, index) => (
          <JobCard key={index} job={job} onPress={() => handleJobPress(job)} />
         
        ))}
        </ScrollView>}
  {viewType==="Board"&&<JobBoardView onJobPress={handleJobPress} />}

    {/* FAB */}
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
  mainwrapper: {
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2)
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  headerIconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: responsiveHeight(4),
    right: responsiveWidth(5),
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fabText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
  },
});
