import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import JobCard from '../components/JobCard';
import { useNavigation } from '@react-navigation/native';
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
  return (
    <ScreenWrapper backgroundColor="transparent" >
      <View style={styles.headWrapper}>
        <CustomHeader title="Jobs"  onPress={navigatetoJobForm}/>

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchInput placeholder="Search Jobs" />
          </View>

          <TouchableOpacity style={styles.rightIcon}>
            <Ionicons
              name="options-outline"
              size={responsiveWidth(9)}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.mainwrapper}  contentContainerStyle={{
    alignItems: 'center', // or 'flex-start', 'flex-end'
  }}>
       {JobsData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
      </ScrollView>
      {/* <CustomTabBar state={'state'} navigation={'navigation'} /> */}
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
    // paddingHorizontal: responsiveWidth(4),
    flex: 1,
    gap:responsiveWidth(3),
    // alignItems:"center"

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: responsiveWidth(5),
    gap: responsiveWidth(3),
  },

  inputWrapper: {
    flex: 1,
    marginVertical: responsiveWidth(4),
  },

  rightIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(3),
    borderWidth: 2,
    borderColor: colors.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
  },
});
