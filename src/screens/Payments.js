import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
// import colors from '../utils/colors';
import SearchInput from '../components/SearchInput';
import JobCard from '../components/JobCard';
import ClientCard from "../components/ClientCard"
import { useNavigation } from '@react-navigation/native';
import StatsFlowHeader from '../components/Profile/StatsFlowHeader';
import StatCard from '../components/Profile/StatCard';
import InvoiceCard from "../components/InvoiceCard"
import FilterModal from '../components/FilterModal';
import colors from '../utils/colors';
const PaymentsData = [
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


  const stats = [
    {
      id: '1',
      title: 'Payments Received',
      value: '$42,750',
      percentage: '+15.01%',
      color: colors.bluePrimary,
      iconName: 'briefcase',
    },
    {
      id: '2',
      title: 'Pending Paymnets',
      value: '$8500',
      percentage: '+15.01%',
      color: colors.yellowPrimary,
      iconName: 'clock',
    },
    {
      id: '3',
      title: 'OverDue Payments',
      value: '$3,200',
      percentage: '+15.01%',
      color: colors.greenPrimary,
      iconName: 'check-circle',
    },
    {
      id: '4',
      title: 'Upcoming Due Dates',
      value: '5',
      percentage: '+15.01%',
      color: colors.graySecondary, // Using a gray color since it's not in your palette
      iconName: 'alert-circle',
    },
  ];

   const invoices = [
    {
      id: '1',
      customerName: 'Sarah Johnson',
      projectType: 'Wedding Film',
      dueDate: 'Oct 12, 2025',
      invoiceId: '20251126-01',
      amount: '$4999.00',
      paid: '$2000.00',
      status: 'PENDING',
    },
    {
      id: '2',
      customerName: 'Mike Chen',
      projectType: 'Corporate Video',
      dueDate: 'Nov 15, 2025',
      invoiceId: '20251127-02',
      amount: '$3500.00',
      paid: '$3500.00',
      status: 'PAID',
    },
  ];
const Payments = () => {
  const navigation=useNavigation()
  const navigateToClientForm=()=>{
    navigation.navigate("AddPayments")
  }
  const [isFilterVisible, setFilterVisible] = React.useState(false);

  return (
    <ScreenWrapper backgroundColor="transparent"  >
      <View style={styles.headWrapper}>
        <CustomHeader title="Payments" onPress={navigateToClientForm}/>

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchInput placeholder="Search Payments" />
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

      <ScrollView  contentContainerStyle={styles.mainwrapper}
  showsVerticalScrollIndicator={false}>
      <StatsFlowHeader
    title="Payments Overview"
    filterText="Last 30 Days"
  />
   <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
            color={stat.color}
            iconName={stat.iconName}
          />
        ))}
      </View>
     {invoices.map((invoice) => (
        <InvoiceCard
          key={invoice.id}
          customerName={invoice.customerName}
          projectType={invoice.projectType}
          dueDate={invoice.dueDate}
          invoiceId={invoice.invoiceId}
          amount={invoice.amount}
          paid={invoice.paid}
          status={invoice.status}
          onPress={() => console.log('Invoice pressed:', invoice.invoiceId)}
        />
      ))}

</ScrollView>

{/* <FlatList
  data={PaymentsData}
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
/> */}



    </ScreenWrapper>
  );
};

export default Payments;

const styles = StyleSheet.create({
  mainwrapper:{
  flexGrow: 1,   // 🔥 THIS IS THE KEY FIX

paddingHorizontal:responsiveWidth(3),
paddingVertical:responsiveHeight(2),
// paddingBottom:responsiveHeight(9)
  },
    statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
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
