import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import JobCard from '../components/JobCard';
import ClientCard from "../components/ClientCard"
import { useNavigation } from '@react-navigation/native';
const ClientsData = [
  {
    id: 1,
    tags: [
      { title: "Active", bgColor: colors.yellowSecondary, color: colors.black },
      { title: "Lead Photographer", bgColor: colors.gray, color: colors.black },
    ],
    clientName: "Mark & Jess",
    email: "markjess@email.com",
    phone: "+1 (415) 222-9087",
    itemsCount: 3,
    totalAmount: 420,
    avatarUri: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 2,
    tags: [
      { title: "On Leave", bgColor: colors.blueSecondary, color: colors.black },
      { title: "Editor", bgColor: colors.gray, color: colors.black },
    ],
    clientName: "Emma Watson",
    email: "emma@email.com",
    phone: "+1 (323) 555-7788",
    itemsCount: 2,
    totalAmount: 260,
    avatarUri: "https://i.pravatar.cc/150?img=10",
  },

 
];



const Clients = () => {
  const navigation=useNavigation()
  const navigateToTeamForm=()=>{
    navigation.navigate("AddTeams")
  }
  
  return (
    <ScreenWrapper backgroundColor="transparent" >
      <View style={styles.headWrapper}>
        <CustomHeader title="Teams" onPress={navigateToTeamForm}/>

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchInput placeholder="Search by Name,Role,Email" />
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
<FlatList
  data={ClientsData}
  keyExtractor={(item) => item.id.toString()}
  style={styles.mainwrapper}
  renderItem={({ item }) => (
    <ClientCard
      job={item}
      onPress={()=>navigation.navigate("Profile")}
      teamColor={colors.white}
      onEdit={() => console.log('Edit', item.id)}
      onDelete={() => console.log('Delete', item.id)}
    />
  )}
  contentContainerStyle={{
    alignItems: 'center',
    paddingBottom: responsiveHeight(2),
  }}
  initialNumToRender={3}
  maxToRenderPerBatch={3}
  windowSize={3}
  showsVerticalScrollIndicator={false}
/>



    </ScreenWrapper>
  );
};

export default Clients;

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
