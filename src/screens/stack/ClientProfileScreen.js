import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';

import AboutTab from '../../components/ClientTabs/AboutTab';
import OverviewTab from '../../components/ClientTabs/OverviewTab';
import JobsTab from '../../components/ClientTabs/JobsTab';
import ContractsDocsTab from '../../components/ClientTabs/ContractsDocsTab';
import InvoicesPaymentsTab from '../../components/ClientTabs/InvoicesPaymentsTab';
import MailTab from '../../components/ClientTabs/MailTab';

const TABS = [
  'ABOUT',
  'OVERVIEW',
  'JOBS',
  'CONTRACTS & DOCS',
  'INVOICES & PAYMENTS',
  'MAIL',
];

const ClientProfileScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { client } = route.params || {};
  const [activeTab, setActiveTab] = useState('ABOUT');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return <AboutTab client={client} />;
      case 'OVERVIEW':
        return <OverviewTab />;
      case 'JOBS':
        return <JobsTab />;
      case 'CONTRACTS & DOCS':
        return <ContractsDocsTab />;
      case 'INVOICES & PAYMENTS':
        return <InvoicesPaymentsTab />;
      case 'MAIL':
        return <MailTab />;
      default:
        return null;
    }
  };

  const getFabText = () => {
    switch (activeTab) {
      case 'JOBS':
        return 'Add Job';
      case 'INVOICES & PAYMENTS':
        return 'Add Invoice';
      case 'MAIL':
        return 'Send Email';
      default:
        return null;
    }
  };

  const getFabIcon = () => {
    return activeTab === 'MAIL' ? 'send' : 'plus';
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      {/* Top Rounded Header Wrapper */}
      <View style={[styles.headerWrapper, { paddingTop: insets.top }]}>
        {/* Header Area */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Client Profile</Typography>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.profileLeft}>
              <Image
                source={{
                  uri:
                    client?.image ||
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                }}
                style={styles.profileAvatar}
              />
              <View style={styles.profileInfo}>
                <Typography style={styles.profileName}>
                  {client?.name || 'Sarah Lee'}
                </Typography>
                <Typography style={styles.dateAdded}>
                  Date Added: Oct 1, 2025
                </Typography>
                <TouchableOpacity style={styles.statusDropdown}>
                  <View style={styles.statusDot} />
                  <Typography style={styles.statusText}>Active</Typography>
                  <Feather name="chevron-down" size={rs(14)} color="#111827" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Feather name="more-horizontal" size={rs(24)} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabBarWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScrollContent}
          >
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={styles.tabButton}
                onPress={() => setActiveTab(tab)}
              >
                <Typography
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Typography>
                {activeTab === tab && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderTabContent()}
      </ScrollView>

      {/* Conditional FAB */}
      {getFabText() && (
        <TouchableOpacity
          style={styles.fabContainer}
          activeOpacity={0.8}
          onPress={() => {
            if (activeTab === 'JOBS') {
              navigation.navigate('AddJob');
            } else if (activeTab === 'INVOICES & PAYMENTS') {
              navigation.navigate('AddInvoice');
            } else if (activeTab === 'MAIL') {
              navigation.navigate('SendEmail');
            }
          }}
        >
          <Feather
            name={getFabIcon()}
            size={rs(18)}
            color="#FFF"
            style={{ marginRight: rs(6) }}
          />
          <Typography style={styles.fabText}>{getFabText()}</Typography>
        </TouchableOpacity>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(32),
    borderBottomRightRadius: rs(32),
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: rs(10) },
    shadowOpacity: 0.03,
    shadowRadius: rs(15),
    elevation: 4,
    zIndex: 10,
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(24),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: rs(22),
    fontWeight: '700',
    color: '#000',
    marginLeft: rs(20),
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rs(20),
  },
  profileLeft: {
    flexDirection: 'row',
  },
  profileAvatar: {
    width: rs(74),
    height: rs(74),
    borderRadius: rs(37),
    marginRight: rs(16),
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(2),
  },
  dateAdded: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginBottom: rs(8),
  },
  statusDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(20),
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: rs(8),
    height: rs(8),
    borderRadius: rs(4),
    backgroundColor: '#FBBF24',
    marginRight: rs(6),
  },
  statusText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#111827',
    marginRight: rs(4),
  },
  moreButton: {
    marginTop: rs(4),
  },
  tabBarWrapper: {
    backgroundColor: 'transparent',
    paddingBottom: rs(4),
  },
  tabScrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: 0,
  },
  tabButton: {
    paddingVertical: rs(14),
    marginRight: rs(24),
    position: 'relative',
  },
  tabText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: '#111827',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: rs(3),
    backgroundColor: '#38BDF8',
    borderTopLeftRadius: rs(2),
    borderTopRightRadius: rs(2),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(24),
    paddingBottom: rh(120),
  },
  fabContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? rh(40) : rh(30),
    right: rs(20),
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingVertical: rs(14),
    borderRadius: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: rs(6),
    elevation: 8,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(14),
  },
});

export default ClientProfileScreen;
