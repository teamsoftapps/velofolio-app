import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';

const ActiveSessionsScreen = () => {
  // Sample data for active sessions
  const sessions = [
    {
      id: '1',
      deviceName: 'Apple iOS 16',
      deviceIcon: 'mobile-alt',
      location: 'New York, US',
      date: 'Mar 4, 2025 at 10:36',
      isCurrent: true,
    },
    {
      id: '2',
      deviceName: 'Chrome on macOS',
      deviceIcon: 'desktop',
      location: 'New York, US',
      date: 'Feb 4, 2026 at 11:20',
      isCurrent: false,
    },
    {
      id: '3',
      deviceName: 'Chrome on macOS',
      deviceIcon: 'desktop',
      location: 'Houston, US',
      date: 'Feb 13, 2026 at 2:41',
      isCurrent: false,
    },
  ];

  const handleLogout = (sessionId) => {
    console.log('Logout session:', sessionId);
  };

  const handleLogoutAll = () => {
    console.log('Logout from all devices');
  };

  const renderSessionItem = (session) => (
    <View key={session.id} style={styles.sessionCard}>
      <View style={styles.sessionLeft}>
        <View style={styles.iconContainer}>
          <FontAwesome5 
            name={session.deviceIcon} 
            size={responsiveWidth(5)} 
            color={colors.textbluePrimary} 
          />
        </View>
        <View style={styles.sessionInfo}>
          <View style={styles.deviceNameRow}>
            <Text style={styles.deviceName}>{session.deviceName}</Text>
            {session.isCurrent && (
              <View style={styles.currentBadge}>
                <Text style={styles.currentText}>CURRENT</Text>
              </View>
            )}
          </View>
          <Text style={styles.sessionDetails}>
            {session.location} . {session.date}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => handleLogout(session.id)}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with CustomHeader */}
      <View style={styles.headWrapper}>
        <CustomHeader title={""} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Active Sessions & Devices</Text>
          <Text style={styles.subtitle}>
            You have <Text style={styles.highlight}>4 active</Text> sessions
          </Text>
        </View>

        {/* Sessions List */}
        <View style={styles.sessionsList}>
          {sessions.map(renderSessionItem)}
        </View>

        {/* Logout All Button */}
        <TouchableOpacity 
          onPress={handleLogoutAll}
          style={styles.logoutAllButton}
        >
          <Text style={styles.logoutAllText}>Logout from all devices</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ActiveSessionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#F5F5F5',
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    // backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveWidth(4),
    paddingBottom: responsiveWidth(8),
  },
  titleSection: {
    marginBottom: responsiveWidth(6),
  },
  title: {
    fontSize: responsiveWidth(6),
    fontWeight: '500',
    color: colors.textbluePrimary,
    marginBottom: responsiveWidth(2),
  },
  subtitle: {
    fontSize: responsiveWidth(4),
    color: colors.textSecondary,
  },
  highlight: {
    color: colors.textbluePrimary,
    fontWeight: '500',
  },
  sessionsList: {
    gap: responsiveWidth(3),
  },
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    // Shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sessionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(2.5),
    backgroundColor: colors.background || '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
  },
  sessionInfo: {
    flex: 1,
  },
  deviceNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveWidth(1),
    flexWrap: 'wrap',
    gap: responsiveWidth(2),
  },
  deviceName: {
    fontSize: responsiveWidth(4),
    fontWeight: '500',
    color: colors.textbluePrimary,
  },
  currentBadge: {
    backgroundColor: colors.lightBlue || '#E3F2FD',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveWidth(0.5),
    borderRadius: responsiveWidth(1),
  },
  currentText: {
    fontSize: responsiveWidth(2.8),
    fontWeight: '500',
    color: colors.bluePrimary || '#2196F3',
  },
  sessionDetails: {
    fontSize: responsiveWidth(3.5),
    color: colors.textSecondary,
  },
  logoutButton: {
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
  },
  logoutText: {
    fontSize: responsiveWidth(3.5),
    color: colors.bluePrimary || '#2196F3',
    fontWeight: '400',
  },
  logoutAllButton: {
    marginTop: responsiveWidth(6),
    alignSelf: 'center',
    paddingVertical: responsiveWidth(3),
  },
  logoutAllText: {
    fontSize: responsiveWidth(4),
    color: colors.bluePrimary || '#2196F3',
    fontWeight: '4  00',
    textDecorationLine: 'underline',
  },
});