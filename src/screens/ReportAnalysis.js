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
import DateRangeFilter from "../components/Tabs"
import PaymentsBreakdown from "../components/PaymentBreakdown"
import TopPerfomingProjects from "../components/TopPerfomingProjects"
import TeamUtilization from "../components/TeamUtilization"
import colors from '../utils/colors';

  const handleSelect = (range) => {
    console.log('Selected range:', range);
  };

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

const Payments = () => {
  const navigation=useNavigation()
  const navigateToClientForm=()=>{
    navigation.navigate("AddPayments")
  }
  return (
    <ScreenWrapper backgroundColor="transparent" edges={['bottom', 'left', 'right']}>
      <View style={styles.headWrapper}>
        <CustomHeader title="Report & Analysis" onPress={navigateToClientForm}/>

        <View style={styles.searchContainer}>
             <DateRangeFilter onSelect={handleSelect} />

        </View>
      </View>

      <ScrollView  contentContainerStyle={styles.mainwrapper}
  showsVerticalScrollIndicator={false}>

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
    
            <PaymentsBreakdown />
            <TeamUtilization/>
            <TopPerfomingProjects/>

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

paddingHorizontal:responsiveWidth(4),
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
    paddingHorizontal:responsiveWidth(1)
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
