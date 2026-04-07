import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import JobCard from '../components/JobCard';
import { useNavigation } from '@react-navigation/native';
import ViewToggle from "../components/ViewToggle"
import JobCardBoard from "../components/JobCardBoard"
import JobBoardView from "../components/JobBoardView"
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
  const navigation=useNavigation()
  const navigatetoJobForm=()=>{
    navigation.navigate("AddJobs")
  }
  const [viewType, setViewType] = useState('List'); 

  return (
    <ScreenWrapper backgroundColor="transparent" >
      <View style={styles.headWrapper}>
        <CustomHeader title="Jobs" />

        <View style={styles.searchContainer}>
<ViewToggle
  options={['List', 'Board']}
  selected={viewType}
  onSelect={setViewType}
/>
          <TouchableOpacity style={styles.rightIcon}>
            <Ionicons
              name="options-outline"
              size={responsiveWidth(9)}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
  <View style={styles.listContainer}>
    { viewType==="List"&&   <ScrollView style={styles.mainwrapper}  contentContainerStyle={{
      alignItems: 'center',
      paddingBottom: responsiveHeight(15),
    }}>
         {JobsData.map((job, index) => (
          <JobCard key={index} job={job} />
         
        ))}
        </ScrollView>}
  {viewType==="Board"&&<JobBoardView/>}

    {/* FAB */}
    <TouchableOpacity style={styles.fab} onPress={navigatetoJobForm} activeOpacity={0.8}>
      <Ionicons name="add" size={responsiveWidth(6)} color={colors.white} />
      <Text style={styles.fabText}>Add Job</Text>
    </TouchableOpacity>
  </View>
    </ScreenWrapper>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  mainwrapper:{
paddingHorizontal:responsiveWidth(3),
paddingVertical:responsiveHeight(2)
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal:responsiveWidth(3)
  },
  cardContainer: {
    marginTop: responsiveWidth(4),
    flex: 1,
    gap:responsiveWidth(3),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    justifyContent:"space-between"
  },

  inputWrapper: {
    flex: 1,
    marginVertical: responsiveWidth(4),
  },

  rightIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
  },
  listContainer: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: responsiveHeight(4),
    right: responsiveWidth(5),
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fabText: {
    color: colors.white,
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
    marginLeft: 4,
  },
  toggleWrapper:{
    width:responsiveWidth(40),
    backgroundColor:colors.gray3,
    height:responsiveHeight(5),
    paddingHorizontal:responsiveWidth(2),
    paddingVertical:responsiveHeight(3.2),
    borderRadius:responsiveWidth(12)
  },
  toggleText:{
    color:colors.black
  }
});
