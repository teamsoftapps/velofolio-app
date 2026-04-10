// // components/ProfileTabs.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';
// import colors from '../utils/colors';


// const tabs = ['ABOUT', 'OVERVIEW', 'JOBS', 'TASKS', 'AVAILABILITY'];

// const ProfileTabs = ({ activeTab, onTabPress }) => {
//       const activeIndex = tabs.findIndex(tab => tab === activeTab);

//   return (
//     <ScrollView style={styles.tabsWrapper}>
//       <View style={styles.tabs}>
//         {tabs.map(tab => (
//           <TouchableOpacity key={tab} onPress={() => onTabPress(tab)}>
//             <Text
//               style={[
//                 styles.tabItem,
//                 activeTab === tab && styles.activeTab,
//               ]}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View   style={[
//           styles.tabUnderline,
//           {
//             left: `${activeIndex * 23}%`, // 100% / 5 tabs = 20%
//           },
//         ]} />
//     </ScrollView>
//   );
// };

// export default ProfileTabs;
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';

const defaulttabs = ['ABOUT', 'OVERVIEW', 'JOBS', 'TASKS', 'AVAILABILITY'];

const ProfileTabs = ({ activeTab, onTabPress, tabs = defaulttabs }) => {
  



  return (
    <View style={styles.tabsWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}

      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabPress(tab)}
          
            style={[styles.tabButton,{borderBottomWidth:activeTab===tab?responsiveWidth(1):0}]}
          >
            <Text
              style={[
                styles.tabItem,
                activeTab === tab && styles.activeTab,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Animated.View
        style={[
          styles.tabUnderline,
         
        ]}
      />
    </View>
  );
};

export default ProfileTabs;
const styles = StyleSheet.create({
  tabsWrapper: {
    backgroundColor: colors.card || '#fff',
    paddingTop: responsiveHeight(2),
  },

  tabButton: {
    paddingHorizontal: responsiveWidth(4),
    borderBottomColor:colors.blueAccent
  },

  tabItem: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: colors.textSecondary || '#6b7280',
    paddingBottom: responsiveHeight(1.4),
  },

  activeTab: {
    color: colors.black,
    fontWeight: '700',
  },

  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(0.4),
    backgroundColor: colors.blueAccent || '#2563eb',
    borderRadius: responsiveWidth(1),
  },
});