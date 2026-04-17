import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import DashboardCard from '../../components/DashboardCard';
import PriorityItem from '../../components/PriorityItem';
import RecentJobCard from '../../components/RecentJobCard';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper backgroundColor="#FFFFFF" disablePaddingTop={true}>
      <View style={styles.safeArea}>
        <ProfileHeader
          onProfilePress={() => navigation.getParent('DrawerNav')?.openDrawer()}
          onNotificationPress={() => navigation.navigate('Notifications')}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Today Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Today</Typography>
            <View style={styles.gridContainer}>
              {/* Left Column */}
              <View style={styles.column}>
                <DashboardCard
                  title="Total Revenue"
                  value="$45,200"
                  icon="database"
                  backgroundColor="#FEF3C7"
                  style={styles.tallCard}
                />
                <DashboardCard
                  title="In Progress"
                  subtitle="8 Active Jobs"
                  icon="briefcase"
                  backgroundColor="#F3F4F6"
                  style={styles.shortCard}
                />
              </View>

              {/* Right Column */}
              <View style={styles.column}>
                <DashboardCard
                  title="Pending"
                  value="$45,200"
                  icon="clock"
                  backgroundColor="#D1FAE5"
                  style={styles.shortCard}
                />
                <DashboardCard
                  title="Upcoming Tasks"
                  subtitle="5 Tasks This Week"
                  icon="clipboard"
                  backgroundColor="#E2F5FF"
                  style={styles.tallCard}
                />
              </View>
            </View>
          </View>

          {/* Today's Priorities Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Today's Priorities</Typography>
            <PriorityItem
              icon="📄"
              title="Invoice Overdue"
              description="Payment is past due and needs follow-up"
              color="#DC2626"
            />
            <PriorityItem
              icon="💼"
              title="Job Needs Review"
              description="Payment is past due and needs follow-up"
              color="#3B82F6"
            />
            <PriorityItem
              icon="📅"
              title="Upcoming Event"
              description="Work is completed and awaiting approval"
              color="#F59E0B"
            />
          </View>

          {/* Today & Upcoming Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Today & Upcoming</Typography>
            <RecentJobCard
              type="Wedding"
              status="In Progress"
              title="Wedding Film"
              date="12 Nov 2025 – 4:00 PM"
              client="Mark & Jess"
              progress={90}
              members={[
                'https://i.pravatar.cc/150?img=32',
                'https://i.pravatar.cc/150?img=33',
                'https://i.pravatar.cc/150?img=34',
              ]}
              backgroundColor="#E0F2FE"
              statusColor="#38BDF8"
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(100),
  },
  section: {
    marginTop: rh(24),
  },
  sectionTitle: {
    fontSize: rs(22),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(16),
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  tallCard: {
    minHeight: rh(160),
  },
  shortCard: {
    minHeight: rh(110),
  },
});

export default HomeScreen;
