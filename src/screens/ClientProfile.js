
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors'; // your colors file

// ────────────────────────────────────────────────
// Import icons from react-native-vector-icons
// ────────────────────────────────────────────────
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../components/CustomHeader';
import ProfileTabs from "../components/Profile/ProfileTabs"
import ProfileDetails from "../components/Profile/ProfileDetail"
import WorkloadOverview from '../components/Profile/WorkloadOverview';
import JobList from "../components/Profile/JobnTaskLIst"
import Availibility from "../components/Profile/Availibility"
import ProfileHeaderCard from "../components/ProfileHeaderCard"
import InvoiceCard from '../components/InvoiceCard';
import ContractCard from '../components/ContractCard';
import FollowUpCard from '../components/FollowUpCard';
import SearchFilterComponnet from '../components/SearchFilterComponent';
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
            { title: "Birthday", color: colors.white, bgColor: colors.blueAccent },
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


const taskData = [
    {
        tags: [
            { title: "High", color: colors.white, bgColor: colors.red },
        ],
        title: "Pre Wedding Shoot",
        name: "Sarah & John",
        progress: {
            colors: colors.yellowAccent,
            percent: 70,
        },
    },
    {
        tags: [
            { title: "Medium", color: colors.white, bgColor: colors.tealPrimary },
        ],
        title: "Corporate Interview Editing",
        name: "Tech Summit 2026",
        progress: {
            colors: colors.orange,
            percent: 40,
        },
    },
    {
        tags: [
            { title: "Low", color: colors.white, bgColor: colors.blueAccent },
        ],
        title: "Social Media Promo Cut",
        name: "Brand Campaign",
        progress: {
            colors: colors.blueAccent,
            percent: 55,
        },
    },
    {
        tags: [
            { title: "Urgent", color: colors.white, bgColor: colors.red },
        ],
        title: "Event Highlight Reel",
        name: "Music Festival 2026",
        progress: {
            colors: colors.red,
            percent: 10,
        },
    },
    {
        tags: [
            { title: "In Progress", color: colors.white, bgColor: colors.greenAccent },
        ],
        title: "Wedding Teaser Video",
        name: "Emma & Liam",
        progress: {
            colors: colors.greenAccent,
            percent: 85,
        },
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
const ClientProfile = () => {
    const [activeTab, setActiveTab] = useState('ABOUT');
const tabs = ['ABOUT', 'OVERVIEW','JOBS', 'CONTRACTS & DOCS','MAIL',"INVOICES & PAYMENTS"];

    return (
        <View
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.headWrapper}>
                <CustomHeader title="Profile" onPress={""} />
             <ProfileHeaderCard
  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  name="Sarah Lee"
//   role="Lead Photographer"
  status="Completed"
  statusColor={colors.yellowPrimary}
  statusBg={colors.yellowSecondary}
  onMorePress={() => console.log("More pressed")}
  onStatusPress={() => console.log("Status pressed")}
/>
                <ProfileTabs
                    activeTab={activeTab}
                    onTabPress={setActiveTab}
                    tabs={tabs}
                />

            </View>

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.tabsData}
                showsVerticalScrollIndicator={false}
            >
                {activeTab === 'ABOUT' && <ProfileDetails  type="Client"/>}
                {activeTab === 'OVERVIEW' && <WorkloadOverview  type="Client"  />}
                {activeTab === 'JOBS' && <JobList tab='clientjob' Data={JobsData} />}
                {activeTab === 'TASKS' && <JobList tab="task" Data={taskData} />}
                {activeTab === "AVAILABILITY" && <Availibility />}
                {activeTab === "INVOICES & PAYMENTS" && <View style={styles.invoiceContainer}>
                    
                    {/* <SearchFilterComponnet/> */}
                    
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
      ))}</View>
}

                         {activeTab === "CONTRACTS & DOCS" && <View style={styles.contractsContainer}>
                            
                            
                            {/* <SearchFilterComponnet/> */}
                             {invoices.map((invoice) => (
  <ContractCard 
  contract={{
    title: 'Wedding Contract',
    type: 'Contract',
    uploadedBy: 'Sarah Lee',
    date: 'Oct 1, 2025',
    status: 'SIGNED'
  }}
  onMorePress={() => console.log('More options')}
/>
      ))}</View>
}

{activeTab === "MAIL" && <View style={styles.contractsContainer}> 
    {/* <SearchFilterComponnet/> */}
    {invoices.map((invoice) => (
<FollowUpCard
  title="Follow Up"
  date="Mar 1, 2026"
  email="sarahjohnson@gmail.com"
  status="DELIVERED"
  onViewPress={() => console.log('View pressed')}
/>
      ))}</View>
}




            </ScrollView>


            {/* <View style={{ height: responsiveHeight(6) }} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        paddingBottom: responsiveHeight(4),
    },
    headerCard: {
        backgroundColor: colors.white,
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(2.5),

        // marginBottom: responsiveHeight(1),
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    invoiceContainer:{
        paddingHorizontal: responsiveWidth(4),

    },
    avatar: {
        width: responsiveWidth(18),
        height: responsiveWidth(18),
        borderRadius: responsiveWidth(9),
        marginRight: responsiveWidth(4),
    },
    infoContainer: {
        flex: 1,
    },
    contractsContainer:{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical:responsiveHeight(2)
    },
    tabsData: {
        flexGrow: 1,   // 🔥 THIS IS THE KEY FIX
        paddingBottom: responsiveHeight(5),
    },
    name: {
        fontSize: responsiveFontSize(2.8),
        fontWeight: '700',
        color: colors.textPrimary || '#111827',
        marginBottom: responsiveHeight(0.4),
    },
    title: {
        fontSize: responsiveFontSize(2.0),
        color: colors.textSecondary || '#6b7280',
        marginBottom: responsiveHeight(0.8),
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.successLight || '#ecfdf5',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(0.6),
        borderRadius: responsiveWidth(10),
        alignSelf: 'flex-start',
    },
    statusDot: {
        width: responsiveWidth(2.4),
        height: responsiveWidth(2.4),
        borderRadius: responsiveWidth(1.2),
        backgroundColor: '#10b981',
        marginRight: responsiveWidth(2),
    },
    statusText: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        color: '#065f46',
    },
    tabsWrapper: {
        backgroundColor: colors.card || '#ffffff',
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(2),
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: responsiveHeight(1.2),
    },
    headingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tabItem: {
        fontSize: responsiveFontSize(1.9),
        fontWeight: '600',
        color: colors.textSecondary || '#6b7280',
        paddingBottom: responsiveHeight(1.4),
    },
    activeTab: {
        color: colors.black,
        fontWeight: '700',
    },
    tabUnderline: {
        height: responsiveHeight(0.4),
        width: responsiveWidth(14), // approx width of "ABOUT"
        backgroundColor: colors.blueAccent || '#2563eb',
        borderRadius: responsiveWidth(1),
        alignSelf: 'flex-start',
        // marginLeft: responsiveWidth(4),
    },
    sectionCard: {
        // backgroundColor: colors.card || '#ffffff',
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(1),
        padding: responsiveWidth(5),
        borderRadius: responsiveWidth(5),

    },
    sectionHeader: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '700',
        color: colors.textPrimary || '#111827',
        marginBottom: responsiveHeight(2.2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: responsiveHeight(2.4),
    },
    icon: {
        marginRight: responsiveWidth(4.5),
        marginTop: responsiveHeight(0.4),
    },
    label: {
        width: responsiveWidth(34),
        fontSize: responsiveFontSize(1.85),
        color: colors.grayDark,
        fontWeight: '500',
    },
    value: {
        flex: 1,
        fontSize: responsiveFontSize(1.85),
        color: colors.black || '#111827',
        fontWeight: '600',
    },
    valueMultiLine: {
        flex: 1,
        fontSize: responsiveFontSize(1.85),
        color: colors.textPrimary || '#111827',
        fontWeight: '500',
        lineHeight: responsiveFontSize(2.2),
    },
});

export default ClientProfile;