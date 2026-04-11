import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logoutUser } from '../services/firebaseAuth';
import colors from '../utils/colors';
import CustomText from './CustomText';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DrawerContent(props) {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    if (!uid) return;

    const userRef = database().ref(`/users/${uid}`);
    const onValueChange = userRef.on('value', snapshot => {
      setUserData(snapshot.val());
    });

    return () => userRef.off('value', onValueChange);
  }, []);

  const navigate = screen => {
    navigation.closeDrawer();
    const tabScreens = ['Home', 'Jobs', 'Teams', 'Clients', 'Calendar'];
    if (tabScreens.includes(screen)) {
      navigation.navigate('AppTabs', { screen, params: { fromDrawer: true } });
    } else {
      navigation.getParent()?.navigate(screen, { fromDrawer: true });
    }
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.headerWrapper, { paddingTop: Math.max(insets.top, responsiveHeight(2)) }]}>
          <TouchableOpacity 
            style={styles.profileHeader}
            onPress={() => navigate('Profile')}
            activeOpacity={0.8}
          >
            <View style={styles.avatarWrapper}>
              <Image
                source={require('../assets/Profile.png')}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>
            
            <CustomText style={styles.studioName} fontWeight="500">
              {userData?.name || 'Lumiere Studio'}
            </CustomText>

            <View style={styles.chevronContainer}>
              <MaterialCommunityIcons 
                name="unfold-more-horizontal" 
                size={responsiveWidth(5)} 
                color={colors.textLight || '#9CA3AF'} 
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {/* BUSINESS & MANAGEMENT */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="400">
              BUSINESS & MANAGEMENT
            </CustomText>
            
            <TouchableOpacity style={styles.item} onPress={() => navigate('Teams')}>
              <Feather name="users" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Team Members</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Clients')}>
              <Feather name="target" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Leads</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Payments')}>
              <Feather name="credit-card" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Payments & Invoices</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('ReportAnalysis')}>
              <Feather name="bar-chart-2" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Reports & Analytics</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('GoalsReports')}>
              <Feather name="trending-up" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Goals & Performance</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Jobs')}>
              <Feather name="sidebar" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Production Board</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Settings')}>
              <Feather name="sliders" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Settings</CustomText>
            </TouchableOpacity>
          </View>

          {/* SUPPORT & SYSTEM */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="400">
              SUPPORT & SYSTEM
            </CustomText>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Settings')}>
              <Feather name="help-circle" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Help Center / FAQ</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <Feather name="headphones" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>Contact Support</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Notifications')}>
              <Feather name="refresh-cw" size={responsiveWidth(5)} color="#9CA3AF" />
              <CustomText style={styles.itemText}>App Updates / What's New</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            await logoutUser();
            navigation.closeDrawer();
          }}
        >
          <Feather name="log-out" size={responsiveWidth(5.5)} color="#9CA3AF" />
          <CustomText style={styles.logoutText} fontWeight="500">Log Out</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(2),
  },
  profileHeader: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(4),
  },
  avatarWrapper: {
    backgroundColor: '#FFF',
    borderRadius: responsiveWidth(10),
    padding: 2,
    marginRight: responsiveWidth(3),
  },
  avatar: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
  },
  studioName: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: '#111827',
  },
  chevronContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    paddingBottom: responsiveHeight(2),
  },
  section: {
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.6),
    color: '#D1D5DB', // Very light gray as in image
    marginBottom: responsiveHeight(2),
    letterSpacing: 0.8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.2),
    marginBottom: 4,
    gap: responsiveWidth(4),
  },
  itemText: {
    fontSize: responsiveFontSize(2),
    color: '#6B7280', // Darker gray for items
  },
  footer: {
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(3),
    backgroundColor: '#FFF',
    borderTopWidth: 0,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
  },
  logoutText: {
    fontSize: responsiveFontSize(2),
    color: '#6B7280',
  },
});
