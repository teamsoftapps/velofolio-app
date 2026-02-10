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
    const tabs = ['All', 'Jobs', 'Payments', 'Clients', 'Team', 'System'];

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

      <ScrollView contentContainerStyle={styles.notificationContainer}>
      {/* <Text>Notifications</Text> */}
<NotificationCard
        iconName="briefcase-outline"
        iconSet='Ionicons'
        iconColor={colors.blueAccent}
        iconBg={colors.blueSecondary}
        title="Job Update"
        subtitle="Wedding film for Sarah moved to Pho"
        timeAgo="10 minutes ago"
        onPress={() => console.log('open details')}
      />
      <NotificationCard
        iconName="briefcase-outline"
        iconSet='Ionicons'
        iconColor={colors.greenAccent}
        iconBg={colors.greenSecondary}
                // iconBg={colors.blueSecondary}

        title="Payment Received"
        subtitle="Wedding film for Sarah moved to Pho"
        timeAgo="1hour ago"
        onPress={() => console.log('open details')}
      />
      <NotificationCard
        iconName="briefcase-outline"
        iconSet='Ionicons'
        iconColor={colors.blueAccent}
                iconBg={colors.blueSecondary}

        title="Job Update"
        subtitle="Wedding film for Sarah moved to Pho"
        timeAgo="10 minutes ago"
        onPress={() => console.log('open details')}
      />
      <NotificationCard
        iconName="briefcase-outline"
        iconSet='Ionicons'
        iconColor={colors.blueAccent}
                iconBg={colors.blueSecondary}

        title="Job Update"
        subtitle="Wedding film for Sarah moved to Pho"
        timeAgo="10 minutes ago"
        onPress={() => console.log('open details')}
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
    // paddingHorizontal: responsiveWidth(4),
    flex: 1,
    gap:responsiveWidth(3),
    // alignItems:"center"

  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: responsiveWidth(5),
    // width:"100%",
 
    gap: responsiveWidth(3),
  },

  inputWrapper: {
    flex: 1,
    marginVertical: responsiveWidth(4),
  },

  rightIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(3),
    borderWidth: 2,
    borderColor: colors.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
  },
  notificationContainer:{
    marginTop:responsiveHeight(2),
alignItems:"center",
gap:responsiveHeight(2)
  }
});