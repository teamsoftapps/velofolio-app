import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import FilterModal from '../../components/FilterModal';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Dummy list explicitly parsing the designs
const CLIENT_DATA = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarahjohnson@gmail.com',
    status: 'Active',
    statusColor: '#F59E0B', // Yellow
    jobs: 3,
    total: '$2,400',
    paid: '$1,800',
    initial: 'S',
  },
  {
    id: 2,
    name: 'Willow Studio',
    email: 'hello@willowstudio.com',
    status: 'Completed',
    statusColor: '#10B981', // Green
    jobs: 3,
    total: '$2,400',
    paid: '$1,800',
    initial: 'W',
  },
  {
    id: 3,
    name: 'Peter Parker',
    email: 'peterparker@gmail.com',
    status: 'Overdue',
    statusColor: '#EF4444', // Red
    jobs: 3,
    total: '$2,400',
    paid: '$1,800',
    initial: 'P',
    isInitialsBg: true, // Peter uses the Yellow 'P' avatar rather than an image
  },
];

const ClientsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Active');
  const [selectedTeam, setSelectedTeam] = useState([
    'Sarah Johnson',
    'Anna David',
  ]);
  const [selectedLeadSource, setSelectedLeadSource] = useState('Website');
  const [selectedEventType, setSelectedEventType] = useState('Wedding');
  const [selectedPayment, setSelectedPayment] = useState('Paid');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTitleWrap}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Clients</Typography>
          </View>
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Feather name="bell" size={rs(22)} color="#111827" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Search Area */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search client"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(true)}
          >
            <Feather name="sliders" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <FilterModal
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        onApply={() => setIsFilterVisible(false)}
        status={selectedStatus}
        setStatus={setSelectedStatus}
        team={selectedTeam}
        setTeam={setSelectedTeam}
        leadSource={selectedLeadSource}
        setLeadSource={setSelectedLeadSource}
        eventType={selectedEventType}
        setEventType={setSelectedEventType}
        paymentStatus={selectedPayment}
        setPaymentStatus={setSelectedPayment}
      />


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CLIENT_DATA.map(client => (
          <TouchableOpacity
            key={client.id}
            style={styles.clientCard}
            onPress={() => navigation.navigate('ClientProfile', { client })}
            activeOpacity={0.7}
          >
            {/* Top User Metadata Row */}
            <View style={styles.cardTopRow}>
              <View style={styles.userInfoWrap}>
                {client.isInitialsBg ? (
                  <View style={styles.initialsAvatar}>
                    <Typography style={styles.initialsText}>
                      {client.initial}
                    </Typography>
                  </View>
                ) : (
                  <View style={styles.imageAvatarPlaceholder}>
                    <View style={styles.innerAvatarSim} />
                  </View>
                )}
                <View style={styles.userNameBlock}>
                  <Typography style={styles.userNameText}>
                    {client.name}
                  </Typography>
                  <Typography style={styles.userEmailText}>
                    {client.email}
                  </Typography>
                </View>
              </View>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {/* Metric Metrics Row */}
            <View style={styles.metricRow}>
              <View style={styles.metricItemBox}>
                <Typography style={styles.metricLabel}>Status</Typography>
                <Typography
                  style={[styles.metricValue, { color: client.statusColor }]}
                >
                  {client.status}
                </Typography>
              </View>

              <View style={styles.metricItemBox}>
                <Typography style={styles.metricLabel}>Jobs</Typography>
                <Typography style={styles.metricValue}>
                  {client.jobs}
                </Typography>
              </View>

              <View style={styles.metricItemBox}>
                <Typography style={styles.metricLabel}>Total</Typography>
                <Typography style={styles.metricValue}>
                  {client.total}
                </Typography>
              </View>

              <View style={styles.metricItemBox}>
                <Typography style={styles.metricLabel}>Paid</Typography>
                <Typography style={styles.metricValue}>
                  {client.paid}
                </Typography>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: rh(80) }} />
      </ScrollView>

      {/* FAB Layout */}
      <TouchableOpacity
        style={styles.fabContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddClient')}
      >
        <Feather
          name="plus"
          size={rs(18)}
          color="#FFF"
          style={{ marginRight: rs(6) }}
        />
        <Typography style={styles.fabText}>Add Client</Typography>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  notificationDot: {
    position: 'absolute',
    top: rs(10),
    right: rs(12),
    width: rs(8),
    height: rs(8),
    borderRadius: rs(4),
    backgroundColor: '#F59E0B',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },

  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(24),
    marginBottom: rs(24),
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    marginTop: rs(8),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(15),
    color: '#111827',
  },
  filterButton: {
    width: rs(48),
    height: rs(48),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContent: { paddingHorizontal: rs(16), paddingBottom: rh(80) },

  /* Card Layout UX */
  clientCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    paddingTop: rs(20),
    paddingBottom: rs(16),
    paddingHorizontal: rs(20),
    marginBottom: rs(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  initialsAvatar: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: '#FBBF24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontSize: rs(18),
    fontWeight: '600',
    color: '#111827',
  },
  imageAvatarPlaceholder: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: '#6B7280',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  innerAvatarSim: {
    width: rs(20),
    height: rs(20),
    borderRadius: rs(10),
    backgroundColor: '#D1D5DB', // Simulator for the actual user image node
  },
  userNameBlock: {
    marginLeft: rs(12),
  },
  userNameText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(2),
  },
  userEmailText: {
    fontSize: rs(13),
    color: '#6B7280',
  },

  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: rs(16),
  },

  /* Metrics Grid Grid System */
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItemBox: {
    flex: 1,
  },
  metricLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: rs(6),
  },
  metricValue: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },

  /* FAB Rules */
  fabContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? rh(100) : rh(90),
    right: rs(20),
    backgroundColor: '#000000',
    borderRadius: rs(28),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(14),
    paddingHorizontal: rs(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(15),
  },

});

export default ClientsScreen;
