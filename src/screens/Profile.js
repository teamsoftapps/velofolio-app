// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ScreenWrapper from '../components/ScreenWrapper'
// import { responsiveWidth } from 'react-native-responsive-dimensions'
// import colors from '../utils/colors'
// import CustomHeader from '../components/CustomHeader'

// const Profile = () => {
//   return (
//     <ScreenWrapper>
    //         <View style={styles.headWrapper}>
    //     <CustomHeader title="Profile" onPress={""}/>

    //     <View style={styles.searchContainer}>
         

       
    //     </View>
    //   </View>
//     </ScreenWrapper>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({
//      headWrapper: {
//     backgroundColor: colors.white,
//     borderBottomLeftRadius: responsiveWidth(6),
//     borderBottomRightRadius: responsiveWidth(6),
//     paddingVertical: responsiveWidth(3),
//     paddingHorizontal:responsiveWidth(3)
//   },
//   cardContainer: {
//     marginTop: responsiveWidth(4),
//     // paddingHorizontal: responsiveWidth(4),
//     flex: 1,
//     gap:responsiveWidth(3),
//     // alignItems:"center"

//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // paddingHorizontal: responsiveWidth(5),
//     gap: responsiveWidth(3),
//   },

//   inputWrapper: {
//     flex: 1,
//     marginVertical: responsiveWidth(4),
//   },

//   rightIcon: {
//     width: responsiveWidth(14),
//     height: responsiveWidth(14),
//     borderRadius: responsiveWidth(3),
//     borderWidth: 2,
//     borderColor: colors.inputBorder,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: responsiveWidth(1),
//   },
// })
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors'; // your colors file

// ────────────────────────────────────────────────
// Import icons from react-native-vector-icons
// ────────────────────────────────────────────────
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../components/CustomHeader';

const UserProfileScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Profile Header */}
        <View style={styles.headWrapper}>
        <CustomHeader title="Profile" onPress={""} />
   <View style={styles.headerCard}>
        <View style={styles.profileRow}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            }} // ← replace with real image
            style={styles.avatar}
          />

          <View style={styles.infoContainer}>
            <Text style={styles.name}>Sarah Lee</Text>
            <Text style={styles.title}>Lead Photographer</Text>

            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Active</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={responsiveFontSize(2.3)}
                color={colors.grayDark || '#6b7280'}
              />
            </View>
          </View>

          <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Feather
              name="more-horizontal"
              size={responsiveFontSize(2.8)}
              color={colors.grayDark || '#6b7280'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <View style={styles.tabs}>
          <Text style={[styles.tabItem, styles.activeTab]}>ABOUT</Text>
          <Text style={styles.tabItem}>OVERVIEW</Text>
          <Text style={styles.tabItem}>JOBS</Text>
          <Text style={styles.tabItem}>TASKS</Text>
          <Text style={styles.tabItem}>AVAILABILITY</Text>
        </View>

        <View style={styles.tabUnderline} />
      </View>
      
      </View>
   

      {/* Personal Details */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Personal Details</Text>

        <View style={styles.row}>
          <Ionicons
            name="person-outline"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>Sarah Lee</Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons
            name="cake-variant-outline"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Date of Birth</Text>
          <Text style={styles.value}>January 1, 1987</Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons
            name="gender-female"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>Female</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Address</Text>
          <Text style={styles.valueMultiLine}>
            225 Cherry Street #24,{'\n'}
            New York, NY
          </Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="event-available"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Joining Date</Text>
          <Text style={styles.value}>Jan 12, 2024</Text>
        </View>
      </View>

      {/* Contact Details */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionHeader}>Contact Details</Text>

        <View style={styles.row}>
          <MaterialIcons
            name="mail-outline"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>sarah@studio.com</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="call-outline"
            size={responsiveFontSize(2.5)}
            color={colors.grayDark || '#64748b'}
            style={styles.icon}
          />
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+1(514) 550-3281</Text>
        </View>
      </View>

      {/* Bottom spacing */}
      <View style={{ height: responsiveHeight(6) }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  contentContainer: {
    paddingBottom: responsiveHeight(4),
  },
  headerCard: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(2.5),

    // marginBottom: responsiveHeight(1),
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    borderRadius: responsiveWidth(9),
    marginRight: responsiveWidth(4),
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(0.4),
  },
  title: {
    fontSize: responsiveFontSize(2.0),
    color: colors.textSecondary || '#6b7280',
    marginBottom: responsiveHeight(0.8),
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successLight || '#ecfdf5',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.6),
    borderRadius: responsiveWidth(10),
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: responsiveWidth(2.4),
    height: responsiveWidth(2.4),
    borderRadius: responsiveWidth(1.2),
    backgroundColor: '#10b981',
    marginRight: responsiveWidth(2),
  },
  statusText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: '#065f46',
  },
  tabsWrapper: {
    backgroundColor: colors.card || '#ffffff',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: responsiveHeight(1.2),
  },
  tabItem: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: colors.textSecondary || '#6b7280',
    paddingBottom: responsiveHeight(1.4),
  },
  activeTab: {
    color: colors.black ,
    fontWeight: '700',
  },
  tabUnderline: {
    height: responsiveHeight(0.4),
    width: responsiveWidth(14), // approx width of "ABOUT"
    backgroundColor: colors.blueAccent || '#2563eb',
    borderRadius: responsiveWidth(1),
    alignSelf: 'flex-start',
    // marginLeft: responsiveWidth(4),
  },
  sectionCard: {
    // backgroundColor: colors.card || '#ffffff',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(5),
   
  },
  sectionHeader: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(2.2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(2.4),
  },
  icon: {
    marginRight: responsiveWidth(4.5),
    marginTop: responsiveHeight(0.4),
  },
  label: {
    width: responsiveWidth(34),
    fontSize: responsiveFontSize(1.85),
    color: colors.grayDark,
    fontWeight: '500',
  },
  value: {
    flex: 1,
    fontSize: responsiveFontSize(1.85),
    color: colors.black || '#111827',
    fontWeight: '600',
  },
  valueMultiLine: {
    flex: 1,
    fontSize: responsiveFontSize(1.85),
    color: colors.textPrimary || '#111827',
    fontWeight: '500',
    lineHeight: responsiveFontSize(2.2),
  },
});

export default UserProfileScreen;