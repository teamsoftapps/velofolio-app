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
      { title: "Wedding", bgColor: colors.blueAccent, color: colors.white },
      { title: "Completed", bgColor: colors.greenAccent, color: colors.white },
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
      { title: "Corporate", bgColor: colors.greenAccent, color: colors.white },
      { title: "In Progress", bgColor: colors.purpleLight, color: colors.black },
    ],
    clientName: "Emma Watson",
    email: "emma@email.com",
    phone: "+1 (323) 555-7788",
    itemsCount: 2,
    totalAmount: 260,
    avatarUri: "https://i.pravatar.cc/150?img=10",
  },

  // ➕ New Data
  {
    id: 3,
    tags: [
      { title: "Birthday", bgColor: colors.greenAccent, color: colors.white },
      { title: "Pending", bgColor: colors.yellowAccent, color: colors.black },
    ],
    clientName: "John Carter",
    email: "john.carter@email.com",
    phone: "+1 (212) 444-1199",
    itemsCount: 1,
    totalAmount: 150,
    avatarUri: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    tags: [
      { title: "Music Video", bgColor: colors.red, color: colors.white },
      { title: "In Progress", bgColor: colors.blueAccent, color: colors.white },
    ],
    clientName: "Ariana Mills",
    email: "ariana@email.com",
    phone: "+1 (646) 333-5522",
    itemsCount: 4,
    totalAmount: 780,
    avatarUri: "https://i.pravatar.cc/150?u=arianamills",
  },
  {
    id: 5,
    tags: [
      { title: "Festival", bgColor: colors.purpleLight, color: colors.black },
      { title: "Completed", bgColor: colors.greenAccent, color: colors.white },
    ],
    clientName: "Lucas Brown",
    email: "lucas.b@email.com",
    phone: "+1 (305) 777-9081",
    itemsCount: 6,
    totalAmount: 1120,
    avatarUri: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 6,
    tags: [
      { title: "Corporate", bgColor: colors.greenAccent, color: colors.white },
      { title: "Cancelled", bgColor: colors.red, color: colors.white },
    ],
    clientName: "Sophia Lee",
    email: "sophia.lee@email.com",
    phone: "+1 (408) 666-3321",
    itemsCount: 0,
    totalAmount: 0,
    avatarUri: "https://i.pravatar.cc/150?u=sophialee",
  },
];



const Clients = () => {
  const navigation=useNavigation()
  const navigateToClientForm=()=>{
    navigation.navigate("AddClients")
  }
  return (
    <ScreenWrapper backgroundColor="transparent" >
      <View style={styles.headWrapper}>
        <CustomHeader title="Clients" onPress={navigateToClientForm}/>

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchInput placeholder="Search Clients" />
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
