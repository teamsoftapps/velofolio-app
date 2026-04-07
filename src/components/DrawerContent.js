import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logoutUser } from '../services/firebaseAuth';
import colors from '../utils/colors';

export default function DrawerContent({ navigation }) {
  const navigate = (screen) => {
    navigation.closeDrawer();
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        {/* Studio Profile Header */}
        <TouchableOpacity style={styles.profileHeader} onPress={() => navigation.closeDrawer()}>
          <View style={styles.profileLeft}>
            <Image
              source={require('../assets/Profile.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
            <Text style={styles.studioName}>Lumiere Studio</Text>
          </View>
          <View style={styles.arrowsContainer}>
            <Feather name="chevron-up" size={responsiveWidth(4)} color={colors.textSecondary} />
            <Feather name="chevron-down" size={responsiveWidth(4)} color={colors.textSecondary} style={{ marginTop: -responsiveHeight(0.5) }} />
          </View>
        </TouchableOpacity>

        {/* BUSINESS & MANAGEMENT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BUSINESS & MANAGEMENT</Text>

          <TouchableOpacity style={styles.item} onPress={() => navigate('Teams')}>
            <Feather name="users" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Team Members</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
            <MaterialCommunityIcons name="bullseye" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Leads</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate('Payments')}>
            <Feather name="credit-card" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Payments & Invoices</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate('ReportAnalysis')}>
            <Feather name="bar-chart-2" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Reports & Analytics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate('GoalsReports')}>
            <MaterialCommunityIcons name="bullseye-arrow" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Goals & Performance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
            <Feather name="layout" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Production Board</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate('Settings')}>
            <Feather name="sliders" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* SUPPORT & SYSTEM */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUPPORT & SYSTEM</Text>

          <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
            <Feather name="info" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Help Center / FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
            <Feather name="headphones" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>Contact Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.closeDrawer()}>
            <Feather name="refresh-cw" size={responsiveWidth(5)} color={colors.textSecondary} />
            <Text style={styles.itemText}>App Updates / What's New</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      {/* Log Out */}
      <TouchableOpacity
        style={styles.logout}
        onPress={async () => {
          await logoutUser();
          navigation.closeDrawer();
        }}
      >
        <Feather name="log-out" size={responsiveWidth(5)} color="#F44336" />
        <Text style={[styles.itemText, { color: '#F44336', fontWeight: '500' }]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    overflow: 'hidden',
  },
  profileHeader: {
    backgroundColor: '#F3F4F6', // light grey pill background
    marginHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    flexDirection: 'row',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    marginRight: responsiveWidth(3),
    backgroundColor: '#E5E7EB', // fallback
  },
  studioName: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    color: '#111827',
  },
  arrowsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingTop: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(4),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: responsiveHeight(1),
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.3),
    gap: responsiveWidth(4),
  },
  itemText: {
    fontSize: responsiveFontSize(2.2),
    color: '#6B7280',
    flex: 1,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(6),
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    gap: responsiveWidth(4),
  },
});
