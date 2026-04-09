import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
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
import FilterModal from '../components/FilterModal';
const ClientsData = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    email: "sarahjohnson@gmail.com",
    status: "Active",
    itemsCount: 3,
    totalAmount: 2400,
    paidAmount: 1800,
    avatarUri: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    clientName: "Willow Studio",
    email: "hello@willowstudio.com",
    status: "Completed",
    itemsCount: 3,
    totalAmount: 2400,
    paidAmount: 1800,
    avatarUri: "https://i.pravatar.cc/150?u=willow",
  },
  {
    id: 3,
    clientName: "Mark & Jess",
    email: "markjess@email.com",
    status: "Active",
    itemsCount: 5,
    totalAmount: 4200,
    paidAmount: 3000,
    avatarUri: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 4,
    clientName: "Emma Watson",
    email: "emma@email.com",
    status: "In Progress",
    itemsCount: 2,
    totalAmount: 1260,
    paidAmount: 800,
    avatarUri: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 5,
    clientName: "Peter Parker",
    email: "peterparker@gmail.com",
    status: "Overdue",
    itemsCount: 3,
    totalAmount: 2400,
    paidAmount: 1800,
    avatarUri: "https://i.pravatar.cc/150?u=peter",
  },
];



const Clients = () => {
  const navigation = useNavigation()
  const navigateToClientForm = () => {
    navigation.navigate("AddClients")
  }
  const [isFilterVisible, setFilterVisible] = React.useState(false);

  return (
    <ScreenWrapper backgroundColor="transparent" >
      <View style={styles.headWrapper}>
        <CustomHeader title="Clients" />

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchInput placeholder="Search Clients" />
          </View>

          <TouchableOpacity style={styles.rightIcon} onPress={() => setFilterVisible(true)}>
            <Ionicons
              name="options-outline"
              size={responsiveWidth(9)}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FilterModal 
        visible={isFilterVisible} 
        onClose={() => setFilterVisible(false)}
        onApply={() => setFilterVisible(false)}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={ClientsData}
          keyExtractor={(item) => item.id.toString()}
          style={styles.mainwrapper}
          renderItem={({ item }) => (
            <ClientCard
              job={item}
              onPress={() => navigation.navigate("ClientProfile")}
              onMenuPress={() => console.log('Menu', item.id)}
            />
          )}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: responsiveHeight(15), // Ensure enough space at bottom for FAB
          }}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
          showsVerticalScrollIndicator={false}
        />

        {/* FAB */}
        <TouchableOpacity style={styles.fab} onPress={navigateToClientForm} activeOpacity={0.8}>
          <Ionicons name="add" size={responsiveWidth(6)} color={colors.white} />
          <Text style={styles.fabText}>Add Client</Text>
        </TouchableOpacity>
      </View>



    </ScreenWrapper>
  );
};

export default Clients;

const styles = StyleSheet.create({
  mainwrapper: {
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2)
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3)
  },
  cardContainer: {
    marginTop: responsiveWidth(4),
    // paddingHorizontal: responsiveWidth(4),
    flex: 1,
    gap: responsiveWidth(3),
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
    borderRadius: responsiveWidth(3.5),
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
});
