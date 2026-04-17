import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SESSIONS = [
  {
    id: 1,
    device: 'Apple IOS 16',
    isCurrent: true,
    location: 'New York, US',
    date: 'Mar 4, 2025 at 10:36',
    icon: 'smartphone',
  },
  {
    id: 2,
    device: 'Chrome on macOS',
    isCurrent: false,
    location: 'New York, US',
    date: 'Feb 4, 2026 at 11:20',
    icon: 'monitor',
  },
  {
    id: 3,
    device: 'Chrome on macOS',
    isCurrent: false,
    location: 'Houston, US',
    date: 'Feb 13, 2026 at 2:41',
    icon: 'monitor',
  },
];

const ActiveSessionsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Typography style={styles.title}>Active Sessions & Devices</Typography>
        <Typography style={styles.subtitle}>
          You have <Typography style={styles.boldSubtitle}>4 active</Typography> sessions
        </Typography>

        {SESSIONS.map((session) => (
          <View key={session.id} style={styles.sessionCard}>
            <View style={styles.iconContainer}>
              <Feather name={session.icon} size={rs(24)} color="#111827" />
            </View>
            <View style={styles.sessionDetails}>
              <View style={styles.deviceRow}>
                <Typography style={styles.deviceText}>{session.device}</Typography>
                {session.isCurrent && (
                  <View style={styles.currentBadge}>
                    <Typography style={styles.currentBadgeText}>CURRENT</Typography>
                  </View>
                )}
              </View>
              <Typography style={styles.locationText}>
                {session.location} . {session.date}
              </Typography>
            </View>
            <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
              <Typography style={styles.logoutText}>Log out</Typography>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutAllButton} activeOpacity={0.7}>
          <Typography style={styles.logoutAllText}>Logout from all devices</Typography>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FAFAFA',
    paddingBottom: rs(8),
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
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
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    marginBottom: rs(24),
  },
  boldSubtitle: {
    fontWeight: '700',
    color: '#111827',
  },
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(12),
    padding: rs(16),
    marginBottom: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconContainer: {
    marginRight: rs(16),
  },
  sessionDetails: {
    flex: 1,
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(4),
  },
  deviceText: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#111827',
    marginRight: rs(8),
  },
  currentBadge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: rs(8),
    paddingVertical: rs(2),
    borderRadius: rs(8),
  },
  currentBadgeText: {
    fontSize: rs(10),
    fontWeight: '700',
    color: '#38BDF8',
  },
  locationText: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  logoutButton: {
    paddingLeft: rs(12),
  },
  logoutText: {
    fontSize: rs(14),
    color: '#38BDF8',
    fontWeight: '500',
  },
  logoutAllButton: {
    alignItems: 'center',
    marginTop: rs(24),
    marginBottom: rs(40),
  },
  logoutAllText: {
    fontSize: rs(15),
    color: '#38BDF8',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default ActiveSessionsScreen;
