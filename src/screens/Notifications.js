import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../utils/colors'
import CustomHeader from '../components/CustomHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tag from '../components/Tag'
import NotificationCard from "../components/Notifications/NotificationCard"

const Notifications = () => {
    const tabs = ['All', 'Jobs', 'Payments', 'Clients', 'Teams'];

const [activeTab, setActiveTab] = useState('All');

  return (
        <ScreenWrapper backgroundColor="transparent" >
          <View style={styles.headWrapper}>
        <CustomHeader title="Notifications"  />

        <ScrollView horizontal contentContainerStyle={styles.tabsContainer} showsHorizontalScrollIndicator={false}>
{
    tabs.map((tab,index)=>(
        
            <Tag key={tab} 
            onPress={()=>setActiveTab(tab)}
            color={activeTab === tab ? colors.white : colors.black}
  bgColor={activeTab === tab ? colors.black : colors.white}
  borderWidth={activeTab === tab ? 0 : 2}
  text={tab}/>
    ))
}


        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.notificationContainer} showsVerticalScrollIndicator={false}>
        <NotificationCard
          iconName="briefcase-outline"
          iconColor="#00B1FF"
          iconBg="#E0F5FF"
          title="Job Update"
          subtitle="Wedding Film for Sarah moved to In Pr..."
          timeAgo="10 minutes ago"
          isUnread={true}
          onPress={() => console.log('Job details')}
        />
        <NotificationCard
          iconName="card-outline"
          iconColor="#14CB95"
          iconBg="#E0F9ED"
          title="Payment Received"
          subtitle="Invoice #INV-021 paid by Lumière Stu..."
          timeAgo="1 hour ago"
          isUnread={true}
          onPress={() => console.log('Payment details')}
        />
        <NotificationCard
          iconName="people-outline"
          iconColor="#FFBE2B"
          iconBg="#FFF2C0"
          title="Team Activity"
          subtitle="Alex added a new job: Music Video Sh..."
          timeAgo="2:30 PM"
          isUnread={false}
          onPress={() => console.log('Team details')}
        />
        <NotificationCard
          iconName="warning-outline"
          iconColor="#FF3B30"
          iconBg="#FFE5E5"
          title="Action Required"
          subtitle="Invoice #INV-018 is overdue"
          timeAgo="2:30 PM"
          isUnread={false}
          onPress={() => console.log('Action details')}
        />
      </ScrollView>

    </ScreenWrapper>
  )
}

export default Notifications

const styles = StyleSheet.create({
  mainwrapper:{
    paddingHorizontal:responsiveWidth(3),
    paddingVertical:responsiveHeight(2)
  },
  headWrapper: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal:responsiveWidth(3)
  },
  cardContainer: {
    marginTop: responsiveWidth(4),
    flex: 1,
    gap:responsiveWidth(3),
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  notificationContainer:{
    marginTop:responsiveHeight(2),
    alignItems:"center",
    gap:responsiveHeight(2),
    paddingBottom: responsiveHeight(5),
  }
});