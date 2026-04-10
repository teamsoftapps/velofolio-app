import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import ScreenWrapper from '../components/ScreenWrapper';
import DashboardHeader from '../components/DashboardHeader';
import CustomText from '../components/CustomText';
import colors from '../utils/colors';
import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import UpcomingJobsSection from '../components/UpcomingJobsSection';
import ToastService from '../utils/ToastService';
import { logoutUser, parseError } from '../services/firebaseAuth';

const Home = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const actionItems = [
    { id: '1', title: 'New Job' },
    { id: '2', title: 'New Client' },
    { id: '3', title: 'Team Member' },
  ];

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    if (!uid) return;

    const userRef = database().ref(`/users/${uid}`);

    const listener = userRef.on(
      'value',
      snapshot => {
        setUserData(snapshot.val());
      },
      error => {
        console.error(error);
        ToastService.error('Database Error', parseError(error));
      }
    );

    return () => userRef.off('value', listener);
  }, []);

  const recentActivity = [
    {
      id: '1',
      icon: require('../assets/invoice.png'),
      title: 'Invoice Overdue',
      subtitle: 'Payment is past due and needs follow-up.',
      bgColor: colors.white,
      iconBg: colors.success,
    },
    {
      id: '2',
      icon: require('../assets/suitcase.png'),
      title: 'Job Needs Review',
      subtitle: 'Alex assigned to new job: ‘Music Video Shoot’.',
      bgColor: colors.white,
      iconBg: colors.info,
    },
    {
      id: '3',
      icon: require('../assets/calender.png'),
      title: 'Upcoming Event',
      subtitle: 'Work is Completed and Needs Approval.',
      bgColor: colors.white,
      iconBg: colors.warning,
    },
  ];

  const renderActivityItem = ({ item }) => (
    <View style={[styles.activityCard, { backgroundColor: item.bgColor }]}>
      <View style={styles.activityLeft}>
        <View style={[styles.activityIconContainer]}>
          <Image
            source={item.icon}
            style={styles.activityIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.activityText}>
          <CustomText style={styles.activityTitle} fontWeight="600">
            {item.title}
          </CustomText>
          <CustomText
            style={styles.activitySubtitle}
            color={colors.textDiscription}
          >
            {item.subtitle}
          </CustomText>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenWrapper backgroundColor={colors.screenBackground} edges={['bottom', 'left', 'right']}>
      <ScrollView>
        <DashboardHeader name={(userData?.displayName || userData?.name) || "User"} onMenuPress={() => navigation.openDrawer()} />

        <View style={styles.container}>
          <CustomText style={styles.todayTitle} fontWeight="600">
            Today
          </CustomText>

          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <TouchableOpacity style={[styles.card, styles.revenueCard]}>
                <FontAwesome5
                  name="coins"
                  size={responsiveWidth(16)}
                  color={colors.black}
                  style={styles.icon}
                />
                <View>
                  <CustomText style={styles.cardTitle}>
                    Total Revenue
                  </CustomText>
                  <CustomText style={styles.amount}>$45,200</CustomText>
                </View>
                <Feather
                  name="arrow-right"
                  size={responsiveWidth(5)}
                  color={colors.black}
                  style={styles.arrow}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.card, styles.progressCard]}>
                <MaterialCommunityIcons
                  name="briefcase-clock-outline"
                  size={responsiveWidth(8)}
                  color={colors.black}
                  style={[styles.icon, styles.iconRight]}
                />
                <View>
                  <CustomText style={styles.cardTitle}>In Progress</CustomText>
                  <CustomText style={styles.count}>8 Active Jobs</CustomText>
                </View>
                <Feather
                  name="arrow-right"
                  size={responsiveWidth(5)}
                  color={colors.black}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.column}>
              <TouchableOpacity style={[styles.card, styles.pendingCard]}>
                <Feather
                  name="clock"
                  size={responsiveWidth(8)}
                  color={colors.black}
                  style={[styles.icon, styles.iconRight]}
                />
                <View>
                  <CustomText style={styles.cardTitle}>Pending</CustomText>
                  <CustomText style={styles.amount}>$45,200</CustomText>
                </View>
                <Feather
                  name="arrow-right"
                  size={responsiveWidth(5)}
                  color={colors.black}
                  style={styles.arrow}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.card, styles.tasksCard]}>
                <Feather
                  name="clipboard"
                  size={responsiveWidth(14)}
                  color={colors.black}
                  style={styles.icon}
                />
                <View>
                  <CustomText style={styles.cardTitle}>
                    Upcoming Tasks
                  </CustomText>
                  <CustomText style={styles.count}>
                    5 Tasks This Week
                  </CustomText>
                </View>
                <Feather
                  name="arrow-right"
                  size={responsiveWidth(5)}
                  color={colors.black}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: responsiveHeight(2),
            }}
          >
            <CustomText style={styles.todayTitle} fontWeight="600">
              Today's Priorities
            </CustomText>

          </View>
          <View style={styles.activityContainer}>
            <FlatList
              data={recentActivity}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
          <UpcomingJobsSection />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
  },
  todayTitle: {
    fontSize: responsiveFontSize(2.8),
    color: colors.black,
    paddingLeft: responsiveWidth(1),
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  column: {
    flex: 1,
  },
  card: {
    width: '100%',
    backgroundColor: colors.cardBackground,
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
    marginBottom: responsiveHeight(2),
    position: 'relative',
  },
  revenueCard: {
    backgroundColor: colors.yellowSecondary,
    height: responsiveHeight(21),
    display: 'flex',
    justifyContent: 'space-between',
  },
  pendingCard: {
    backgroundColor: colors.greenSecondary,
    height: responsiveHeight(14),
    display: 'flex',
    justifyContent: 'space-between',
  },
  progressCard: {
    backgroundColor: colors.lightGray,
    height: responsiveHeight(14),
    display: 'flex',
    justifyContent: 'space-between',
  },
  tasksCard: {
    backgroundColor: colors.blueSecondary,
    height: responsiveHeight(21),
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: responsiveHeight(1.5),
  },
  iconRight: {
    alignSelf: 'flex-end',
  },
  cardTitle: {
    fontSize: responsiveFontSize(2.2),
    color: colors.black,
    fontWeight: '500',
  },
  amount: {
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  count: {
    fontSize: responsiveFontSize(1.8),
    color: colors.textDiscription,
  },
  arrow: {
    position: 'absolute',
    bottom: responsiveHeight(2.5),
    right: responsiveWidth(4),
    opacity: 0.8,
  },
  activityContainer: {
    marginVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(1),
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
    marginBottom: responsiveHeight(1.5),
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  activityIconContainer: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
  },
  activityIcon: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
    marginBottom: responsiveHeight(0.5),
  },
  activitySubtitle: {
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(2.8),
  },
});

export default Home;
