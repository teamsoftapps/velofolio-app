// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import JobCard from "../JobCard"
import TaskCard from "../TaskCard"
import React from 'react'
import colors from '../../utils/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SearchInput from '../SearchInput';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SearchHeader from "../SearchFilterComponent";



const JobsLIst = ({tab="job",Data}) => {
  return (
    <View>
           <SearchHeader
  placeholder="Search by Name, Role, Email"
  showPlus={tab === "task"}
  onFilterPress={() => console.log("Filter")}
  onPlusPress={() => console.log("Add")}
  colors={colors}
/>
        <ScrollView style={styles.mainwrapper}  contentContainerStyle={{
    alignItems: 'center',
  }}>
        {Data.map((item, index) => (
          tab === "task" ? (
            <TaskCard key={index} task={item} />
          ) : (
            <JobCard key={index} job={item} onPress={() => console.log("Job selected")} />
          )
        ))}
      </ScrollView>
    </View>
  )
}

export default JobsLIst

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
paddingHorizontal:responsiveWidth(4),
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
  plusIcon:{
    backgroundColor:colors.blueAccent,
    borderWidth:0
  }
});
