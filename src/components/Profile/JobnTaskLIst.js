// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import JobCard from "../JobCard"
import React from 'react'
import colors from '../../utils/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SearchInput from '../SearchInput';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// import React from 'react';
import ScreenWrapper from '../ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';



const JobsLIst = ({tab="job",Data}) => {
  return (
    <View>
              <View style={styles.searchContainer}>
          <View style={[styles.inputWrapper]}>
            <SearchInput placeholder="Search by Name,Role,Email" />
          </View>

          <TouchableOpacity style={styles.rightIcon}>
            <Ionicons
              name="options-outline"
              size={responsiveWidth(9)}
              color={colors.text}
            />
          </TouchableOpacity>
          {
            tab==="task"&&  <TouchableOpacity style={[styles.rightIcon,styles.plusIcon]}>
            <Octicons
              name="plus"
              size={responsiveWidth(9)}
              color={colors.white}
            />
          </TouchableOpacity>
          }
        </View>
        <ScrollView style={styles.mainwrapper}  contentContainerStyle={{
    alignItems: 'center',
  }}>
       {Data.map((job, index) => (
        <JobCard key={index} job={job}  tab={tab}/>
       
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
