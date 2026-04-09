import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logoutUser } from '../services/firebaseAuth';
import colors from '../utils/colors';
import CustomText from './CustomText';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function DrawerContent({ navigation }) {
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

  const navigate = (screen) => {
    navigation.closeDrawer();
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Upper Content Area */}
      <DrawerContentScrollView 
        contentContainerStyle={{ paddingTop: 0 }}
        style={{ flex: 1 }} 
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header Card */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            style={styles.profileHeader} 
            onPress={() => navigate('Profile')}
            activeOpacity={0.7}
          >
            <View style={styles.profileLeft}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={require('../assets/Profile.png')}
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.profileInfo}>
                <CustomText style={styles.studioName} fontWeight="700">
                  {userData?.name || "Lumiere Studio"}
                </CustomText>
                <CustomText style={styles.userRole} color={colors.textSecondary}>
                  Account Owner
                </CustomText>
              </View>
            </View>
            <View style={styles.arrowsContainer}>
              <Feather name="chevron-right" size={responsiveWidth(5)} color={colors.textSecondary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.menuContainer}>
          {/* BUSINESS & MANAGEMENT */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="600">BUSINESS & MANAGEMENT</CustomText>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Teams')}>
              <View style={styles.iconContainer}>
                <Feather name="users" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Team Members</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="bullseye" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Leads</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Payments')}>
              <View style={styles.iconContainer}>
                <Feather name="credit-card" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Payments & Invoices</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('ReportAnalysis')}>
              <View style={styles.iconContainer}>
                <Feather name="bar-chart-2" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Reports & Analytics</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('GoalsReports')}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="bullseye-arrow" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Goals & Performance</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <View style={styles.iconContainer}>
                <Feather name="layout" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Production Board</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigate('Settings')}>
              <View style={styles.iconContainer}>
                <Feather name="sliders" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Settings</CustomText>
            </TouchableOpacity>
          </View>

          {/* SUPPORT & SYSTEM */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="600">SUPPORT & SYSTEM</CustomText>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <View style={styles.iconContainer}>
                <Feather name="info" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Help Center / FAQ</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <View style={styles.iconContainer}>
                <Feather name="headphones" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>Contact Support</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
              <View style={styles.iconContainer}>
                <Feather name="refresh-cw" size={responsiveWidth(5)} color={colors.black} />
              </View>
              <CustomText style={styles.itemText}>App Updates</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      {/* Modern Log Out Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            await logoutUser();
            navigation.closeDrawer();
          }}
        >
          <View style={styles.logoutIconContainer}>
             <Feather name="log-out" size={responsiveWidth(4.5)} color="#FFF" />
          </View>
          <CustomText style={styles.logoutText} fontWeight="600">Log Out</CustomText>
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
  headerContainer: {
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(6),
    paddingBottom: responsiveHeight(2),
  },
  profileHeader: {
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Subtle Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    padding: 2,
    borderRadius: responsiveWidth(10),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFF',
  },
  avatar: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
  },
  profileInfo: {
    marginLeft: responsiveWidth(3.5),
  },
  studioName: {
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  userRole: {
    fontSize: responsiveFontSize(1.6),
    marginTop: 2,
  },
  arrowsContainer: {
    padding: responsiveWidth(1),
  },
  menuContainer: {
    paddingBottom: responsiveHeight(4),
  },
  section: {
    marginTop: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(6),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.5),
    color: '#9CA3AF',
    marginBottom: responsiveHeight(2.5),
    letterSpacing: 1.2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.8), // Increased spacing
    marginBottom: 4,
  },
  iconContainer: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(2.5),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
  },
  itemText: {
    fontSize: responsiveFontSize(2),
    color: '#374151',
  },
  footer: {
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(4),
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1F2', // Light red tint
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(4),
    gap: responsiveWidth(3),
  },
  logoutIconContainer: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2.5),
    backgroundColor: '#F43F5E', // Solid red
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: responsiveFontSize(2),
    color: '#F43F5E',
  },
});
