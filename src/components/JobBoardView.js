import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../utils/colors'
import JobCard from './JobCardBoard'
import ColumnHeader from "../components/ColounmHeader"
const JobBoardView = () => {
  return (
    <ScreenWrapper>
        <ScrollView>
    <View style={styles.boardContainer}>
       <ColumnHeader 
    title={"Pending"} 
    count={4}
    onAddPress={() => {
      // Example: navigate to create job with pre-filled status
      navigation.navigate('AddJobs', { defaultStatus: "status" });
      // or show modal, etc.
    }}
  />
 <ScrollView
  horizontal // enable horizontal scroll
  showsHorizontalScrollIndicator={false} // optional
  contentContainerStyle={{
    flexDirection: "row", // row layout
    alignItems: "flex-start", // align top of cards
    gap: responsiveWidth(2), // optional spacing
    paddingVertical: responsiveHeight(1),
  }}
>
  <JobCard />
  <JobCard />
  <JobCard />
  <JobCard />
</ScrollView>

    </View>


        <View style={styles.boardContainer}>
       <ColumnHeader 
    title={"In Progress"} 
    count={4}
    onAddPress={() => {
      // Example: navigate to create job with pre-filled status
      navigation.navigate('AddJobs', { defaultStatus: "status" });
      // or show modal, etc.
    }}
  />
 <ScrollView
  horizontal // enable horizontal scroll
  showsHorizontalScrollIndicator={false} // optional
  contentContainerStyle={{
    flexDirection: "row", // row layout
    alignItems: "flex-start", // align top of cards
    gap: responsiveWidth(2), // optional spacing
    paddingVertical: responsiveHeight(1),
  }}
>
  <JobCard />
  <JobCard />
  <JobCard />
  <JobCard />
</ScrollView>

    </View>
    </ScrollView>
    </ScreenWrapper>
  )
}

export default JobBoardView

const styles = StyleSheet.create({
    boardContainer:{
        // height:responsiveHeight(40),
        backgroundColor:colors.screenBackground,
          paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveHeight(1.8),
      
    },
    boardWrapper:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
    }
})