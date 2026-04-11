import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomHeader from '../components/CustomHeader';
import ProfileTabs from '../components/Profile/ProfileTabs';
import ProfileDetails from '../components/Profile/ProfileDetail';
import ProfileHeaderCard from '../components/ProfileHeaderCard';
import InvoiceCard from '../components/InvoiceCard';
import ContractCard from '../components/ContractCard';
import FollowUpCard from '../components/FollowUpCard';
import SearchFilterComponent from '../components/SearchFilterComponent';
import ClientJobCard from '../components/ClientJobCard';
import AddButton from '../components/AddButton';
import LeadSource from '../components/LeadSource';
import AssignedTeam from '../components/AssignedTeam';
import Notes from '../components/Notes';
import Feather from 'react-native-vector-icons/Feather';

const ClientProfile = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('ABOUT');
  const tabs = [
    'ABOUT',
    'OVERVIEW',
    'JOBS',
    'CONTRACTS & DOCS',
    'INVOICES & PAYMENTS',
    'MAIL',
  ];

  const jobsData = [
    {
      title: 'Pre-Wedding Shoot – Sarah & John',
      description: 'Full Film, Teaser, RAW Photos',
    },
  ];

  const renderFAB = () => {
    let label = '';
    if (activeTab === 'JOBS') label = 'Job';
    if (activeTab === 'CONTRACTS & DOCS') label = 'Document';
    if (activeTab === 'INVOICES & PAYMENTS') label = 'Invoice';
    if (activeTab === 'MAIL') label = 'Email';

    if (!label) return null;

    return (
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log(`Add ${label}`)}
      >
        <Feather name="plus" size={20} color={colors.white} />
        <Text style={styles.fabText}>
          {activeTab === 'MAIL' ? 'Send Email' : `Add ${label}`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper
      backgroundColor={colors.white}
      edges={['bottom', 'left', 'right']}
    >
      <View style={styles.headWrapper}>
        <CustomHeader title="Client Profile" />
        <ProfileHeaderCard
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
          name="Sarah Lee"
          dateAdded="Oct 1, 2025"
          status="Active"
          variant="client"
        />
        <ProfileTabs
          activeTab={activeTab}
          onTabPress={setActiveTab}
          tabs={tabs}
        />
      </View>

      <View style={{ flex: 1 }}>
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

          {activeTab === 'JOBS' && (
            <View style={styles.tabContent}>
              <SearchFilterComponent
                colors={colors}
                placeholder="Search Jobs"
              />
              <View style={styles.cardList}>
                {jobsData.map((job, index) => (
                  <ClientJobCard key={index} job={job} />
                ))}
              </View>
            </View>
          )}

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

          {activeTab === 'INVOICES & PAYMENTS' && (
            <View>
              <SearchFilterComponent
                colors={colors}
                placeholder="Search Invoices"
              />
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
        {renderFAB()}
      </View>
    </ScreenWrapper>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: colors.white,
  },
  tabsData: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  tabContent: {
    flex: 1,
  },
  cardList: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: 10,
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
  fab: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    right: responsiveWidth(5),
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});
