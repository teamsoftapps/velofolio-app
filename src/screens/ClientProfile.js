import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomHeader from '../components/CustomHeader';
import ProfileTabs from '../components/Profile/ProfileTabs';
import ProfileDetails from '../components/Profile/ProfileDetail';
import JobList from '../components/Profile/JobnTaskLIst';
import ProfileHeaderCard from '../components/ProfileHeaderCard';
import InvoiceCard from '../components/InvoiceCard';
import ContractCard from '../components/ContractCard';
import FollowUpCard from '../components/FollowUpCard';
import SearchFilterComponent from '../components/SearchFilterComponent';
import AddButton from '../components/AddButton';
import LeadSource from '../components/LeadSource';
import AssignedTeam from '../components/AssignedTeam';
import Notes from '../components/Notes';

const JobsData = [
  {
    tags: [
      { title: 'Wedding', color: colors.white, bgColor: colors.blueAccent },
      {
        title: 'In Progress',
        color: colors.black,
        bgColor: colors.purpleLight,
      },
    ],
    title: 'Wedding Film Mark & Jess',
    details: [
      { label: 'Event Date', value: '12 Nov 2025' },
      { label: 'Location', value: 'New York' },
    ],
    progress: {
      colors: colors.yellowAccent,
      percent: 70,
    },
  },
  {
    tags: [
      { title: 'Corporate', color: colors.white, bgColor: colors.greenAccent },
      { title: 'Pending', color: colors.white, bgColor: colors.greenAccent },
    ],
    title: 'Annual Report Video',
    details: [
      { label: 'Event Date', value: '22 Dec 2025' },
      { label: 'Location', value: 'San Francisco' },
    ],
    progress: {
      colors: colors.greenAccent,
      percent: 45,
    },
  },
  {
    tags: [
      { title: 'Birthday', color: colors.white, bgColor: colors.blueAccent },
      { title: 'Completed', color: colors.white, bgColor: colors.greenAccent },
    ],
    title: "Emma's 30th Birthday Party",
    details: [
      { label: 'Event Date', value: '05 Jan 2026' },
      { label: 'Location', value: 'Los Angeles' },
    ],
    progress: {
      colors: colors.pinkAccent,
      percent: 100,
    },
  },
  {
    tags: [
      { title: 'Festival', color: colors.black, bgColor: colors.purpleLight },
      {
        title: 'In Progress',
        color: colors.white,
        bgColor: colors.greenAccent,
      },
    ],
    title: 'Music Festival Promo',
    details: [
      { label: 'Event Date', value: '18 Feb 2026' },
      { label: 'Location', value: 'Miami' },
    ],
    progress: {
      colors: colors.purpleAccent,
      percent: 30,
    },
  },
];

const taskData = [
  {
    tags: [{ title: 'High', color: colors.white, bgColor: colors.red }],
    title: 'Pre Wedding Shoot',
    name: 'Sarah & John',
    progress: {
      colors: colors.yellowAccent,
      percent: 70,
    },
  },
  {
    tags: [
      { title: 'Medium', color: colors.white, bgColor: colors.tealPrimary },
    ],
    title: 'Corporate Interview Editing',
    name: 'Tech Summit 2026',
    progress: {
      colors: colors.orange,
      percent: 40,
    },
  },
  {
    tags: [{ title: 'Low', color: colors.white, bgColor: colors.blueAccent }],
    title: 'Social Media Promo Cut',
    name: 'Brand Campaign',
    progress: {
      colors: colors.blueAccent,
      percent: 55,
    },
  },
  {
    tags: [{ title: 'Urgent', color: colors.white, bgColor: colors.red }],
    title: 'Event Highlight Reel',
    name: 'Music Festival 2026',
    progress: {
      colors: colors.red,
      percent: 10,
    },
  },
  {
    tags: [
      {
        title: 'In Progress',
        color: colors.white,
        bgColor: colors.greenAccent,
      },
    ],
    title: 'Wedding Teaser Video',
    name: 'Emma & Liam',
    progress: {
      colors: colors.greenAccent,
      percent: 85,
    },
  },
];
const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState('ABOUT');
  const tabs = [
    'ABOUT',
    'OVERVIEW',
    'JOBS',
    'CONTRACTS & DOCS',
    'INVOICE & PAYMENTS',
    'MAIL',
  ];

  return (
    <ScreenWrapper
      backgroundColor={colors.white}
      edges={['bottom', 'left', 'right']}
    >
      <View style={styles.headWrapper}>
        <CustomHeader title="Client Profile" onPress={''} />
        <ProfileHeaderCard
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
          name="Sarah Lee"
          status="Active"
          statusColor={colors.greenAccent}
          statusBg={colors.successLight || '#ecfdf5'}
          onMorePress={() => console.log('More pressed')}
          onStatusPress={() => console.log('Status pressed')}
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
        {activeTab === 'ABOUT' && <ProfileDetails type="Client" />}
        {activeTab === 'OVERVIEW' && (
          <View style={styles.contentPadding}>
            <LeadSource />
            <AssignedTeam />
            <Notes />
          </View>
        )}
        {activeTab === 'JOBS' && <JobList Data={JobsData} />}
        {activeTab === 'CONTRACTS & DOCS' && (
          <View>
            <SearchFilterComponent
              colors={colors}
              placeholder="Search Contracts & Docs"
            />
            <View style={styles.contentPadding}>
              <ContractCard />
              <ContractCard />
            </View>
            <View style={styles.addButtonWrapper}>
              <AddButton
                label="Add Document"
                onPress={() => console.log('Add Document')}
                colors={{ primary: '#000000', textLight: '#FFFFFF' }}
              />
            </View>
          </View>
        )}
        {activeTab === 'INVOICE & PAYMENTS' && (
          <View>
            <SearchFilterComponent colors={colors} />
            <View style={styles.contentPadding}>
              <InvoiceCard />
              <InvoiceCard />
            </View>
            <View style={styles.addButtonWrapper}>
              <AddButton
                label="Add Invoice"
                onPress={() => console.log('Add Invoice')}
                colors={{ primary: '#000000', textLight: '#FFFFFF' }}
              />
            </View>
          </View>
        )}
        {activeTab === 'MAIL' && (
          <View>
            <SearchFilterComponent colors={colors} />
            <View style={styles.contentPadding}>
              <FollowUpCard />
              <FollowUpCard />
              <View style={styles.addButtonWrapper}>
                <AddButton
                  label="Send Email"
                  onPress={() => console.log('Send Email')}
                  colors={{
                    primary: colors.blueAccent,
                    textLight: colors.white,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* <View style={{ height: responsiveHeight(6) }} /> */}
    </ScreenWrapper>
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

    paddingBottom: responsiveHeight(2.5),

    // marginBottom: responsiveHeight(1),
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  headWrapper: {
    backgroundColor: colors.white,
    paddingBottom: responsiveHeight(2.5),
  },
  contentPadding: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  addButtonWrapper: {
    width: responsiveWidth(50),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
