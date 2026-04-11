import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
import SearchFilterComponent from '../components/SearchFilterComponent';
import TaskCard from '../components/TaskCard';
import WorkflowTimeline from '../components/Profile/WorkflowTimeline';
import QuoteCard from '../components/QuoteCard';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const taskData = [
  {
    tags: [{ title: 'High', color: colors.white, bgColor: colors.red }],
    title: 'Edit Wedding Photos',
    description: 'Footage received from the videographer.',
    name: 'Sarah & John',
    progress: {
      colors: colors.yellowAccent,
      percent: 70,
    },
  },
];

const JobProfile = ({ navigation, route }) => {
  const job = route?.params?.job || { title: 'Wedding Film – Mark & Jess' };
  const [activeTab, setActiveTab] = useState('ABOUT');
  const tabs = ['ABOUT', 'TASKS', 'WORKFLOW', 'INVOICES', 'QUOTES'];
  
  return (
    <ScreenWrapper
      backgroundColor={colors.white}
      edges={['bottom', 'left', 'right']}
    >
    <View style={styles.headerArea}>
      <CustomHeader
        title={job.title}
        showMore={true}
        onMorePress={() => console.log('More options')}
      />

      <ProfileHeaderCard
        variant="job"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
        role="Sarah Johnson"
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
        {activeTab === 'ABOUT' && <ProfileDetails type="Job" />}

        {activeTab === 'TASKS' && (
          <View style={{ flex: 1, paddingBottom: 100 }}>
            <SearchFilterComponent colors={colors} placeholder="Search Tasks" />
            <View style={{ paddingHorizontal: responsiveWidth(5) }}>
              {taskData.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
            </View>
          </View>
        )}

        {activeTab === 'WORKFLOW' && (
          <View style={{ flex: 1, paddingVertical: responsiveHeight(2) }}>
            <WorkflowTimeline />
          </View>
        )}

        {activeTab === 'INVOICES' && (
          <View>
            <SearchFilterComponent
              colors={colors}
              placeholder="Search Invoices"
            />
            <View style={styles.contentPadding}>
              <InvoiceCard />
              <InvoiceCard />
            </View>
          </View>
        )}

        {activeTab === 'QUOTES' && (
          <View style={{ flex: 1 }}>
            <SearchFilterComponent
              colors={colors}
              placeholder="Search Quotes"
            />
            <View style={styles.contentPadding}>
              <QuoteCard />
            </View>
          </View>
        )}
      </ScrollView>

      {activeTab !== 'ABOUT' && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => console.log('Action')}
        >
          <Feather name="plus" size={20} color={colors.white} />
          <Text style={styles.fabText}>
            Add {activeTab === 'TASKS' ? 'Task' : activeTab.slice(0, -1)}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  </ScreenWrapper>
  );
};

export default JobProfile;

const styles = StyleSheet.create({
  headerArea: {
    backgroundColor: colors.white,
  },
  tabsData: {
    flexGrow: 1,
  },
  contentPadding: {
    paddingHorizontal: responsiveWidth(4),
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
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});
