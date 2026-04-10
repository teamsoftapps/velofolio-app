import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function DrawerContent(props) {
  const { navigation } = props;
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
    // Navigate directly using screen name and pass fromDrawer param
    navigation.navigate(screen, { fromDrawer: true });
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header Card */}
        <View style={styles.headerWrapper}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require('../assets/Profile.png')}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity
              style={styles.profileInfoArea}
              onPress={() => navigate('Profile')}
              activeOpacity={0.7}
            >
              <CustomText style={styles.studioName} fontWeight="600">
                {userData?.name || 'Lumiere Studio'}
              </CustomText>
              <View style={styles.chevronContainer}>
                <Feather
                  name="chevron-up"
                  size={responsiveWidth(3.5)}
                  color={colors.textSecondary}
                  style={{ marginBottom: -4 }}
                />
                <Feather
                  name="chevron-down"
                  size={responsiveWidth(3.5)}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.menuContainer}>
          {/* BUSINESS & MANAGEMENT */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="500">
              BUSINESS & MANAGEMENT
            </CustomText>
            
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Home')}
            >
              <Feather
                name="grid"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Dashboard</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Calendar')}
            >
              <Feather
                name="calendar"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Calendar</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Teams')}
            >
              <Feather
                name="users"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Team Members</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Clients')}
            >
              <MaterialCommunityIcons
                name="bullseye"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Leads</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Payments')}
            >
              <Feather
                name="credit-card"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>
                Payments & Invoices
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('ReportAnalysis')}
            >
              <Feather
                name="bar-chart-2"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>
                Reports & Analytics
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('GoalsReports')}
            >
              <MaterialCommunityIcons
                name="bullseye-arrow"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>
                Goals & Performance
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Jobs')}
            >
              <Feather
                name="layout"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Production Board</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Settings')}
            >
              <Feather
                name="sliders"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Settings</CustomText>
            </TouchableOpacity>
          </View>

          {/* SUPPORT & SYSTEM */}
          <View style={styles.section}>
            <CustomText style={styles.sectionTitle} fontWeight="500">
              SUPPORT & SYSTEM
            </CustomText>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Settings')}
            >
              <Feather
                name="info"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Help Center / FAQ</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.closeDrawer()}
            >
              <Feather
                name="headphones"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>Contact Support</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Notifications')}
            >
              <Feather
                name="refresh-cw"
                size={responsiveWidth(5)}
                color={colors.textSecondary}
              />
              <CustomText style={styles.itemText}>
                App Updates / What's New
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      {/* Log Out Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            await logoutUser();
            navigation.closeDrawer();
          }}
        >
          <Feather
            name="log-out"
            size={responsiveWidth(5.5)}
            color={colors.textSecondary}
          />
          <CustomText style={styles.logoutText} fontWeight="500">
            Log Out
          </CustomText>
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
    paddingTop: responsiveHeight(7),
    paddingBottom: responsiveHeight(2),
  },
  profileHeader: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
  },
  avatarWrapper: {
    backgroundColor: '#FFF',
    borderRadius: responsiveWidth(10),
    padding: 2,
    marginRight: responsiveWidth(3),
  },
  avatar: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
  },
  profileInfoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studioName: {
    fontSize: responsiveFontSize(1.9),
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
    color: '#9CA3AF',
    marginBottom: responsiveHeight(2.5),
    letterSpacing: 0.5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),
    marginBottom: 4,
    gap: responsiveWidth(4),
  },
  itemText: {
    fontSize: responsiveFontSize(2),
    color: '#374151',
  },
  footer: {
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(3),
    backgroundColor: '#FFF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
  },
  logoutText: {
    fontSize: responsiveFontSize(2),
    color: colors.textSecondary,
  },
});
