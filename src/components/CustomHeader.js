// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { responsiveWidth } from 'react-native-responsive-dimensions';
// import colors from '../utils/colors';
// import CustomText from './CustomText';
// import ButtonSimple from './Button';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import { useNavigation } from '@react-navigation/native';


// const CustomHeader = ({ title,onPress }) => {
//   const navigation = useNavigation();

// const handlePress = () => {
//   if (onPress && typeof onPress === 'function') {
//     onPress(); // run provided function
//   } else {
//     navigation.goBack(); // default action
//   }
// };
//   const isCentered = title === "Company Profile";
// const isVerify = title === 'Verify' || title === 'Delete My Account' || title === ' ';
//   return (
// <View
//   style={[
//     styles.header,
//     { backgroundColor: isVerify ? 'transparent' : colors.white },
//   ]}
// >
//       <View  style={[
//     styles.leftSide,
//     (title === 'Notifications' ||title ==="Email Sender Settings"||title ==="Notification Preferences"||title === 'Email Settings'||title ==="Recovery Email"||title ==='Email & Notifications'||title ==="Backup Phone" ||title === ''||title === 'Confirm Account Deletion'||title ==="Delete My Account"||title === 'Account Recovery'||title === 'Verify'|| title==="Add Phone Number"||   title==="Change Password"   || title === "Security & Password" || title==="Add Jobs"|| title==="Add Clients" || title==="Company Profile" ||title==="Settings" || title==="Add New Memebers"||title==="Profile" || title==="Payments") && { width: '100%' },title==="Report & Analysis" && { width: '80%' },
//   ]}>
//         <TouchableOpacity style={styles.leftIcon} onPress={handlePress}>
//           <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
//         </TouchableOpacity>
//           {isCentered ? (
//         <View style={styles.centerTitle}>
//           <Text style={styles.headerTitle}>{title}</Text>
//         </View>
//       ) : (
//         <View>
//           <Text style={styles.headerTitle}>{title}</Text>
//         </View>
//       )}
//       </View>
//   {title==="Report & Analysis"&&  <View style={[styles.mail,styles.file]}>
//                     <FontAwesome5 name="file-export" size={responsiveWidth(7)} color={colors.white} />

//           </View>}

//       {   !(title === 'Notifications' ||title ==="Email Sender Settings"||title ==="Notification Preferences"||title === 'Email Settings'||title ==="Recovery Email"||title ==='Email & Notifications'||title ==="Backup Phone" ||title === ''||title === ' '||title === 'Confirm Account Deletion'||title === 'Verify'||title ==="Delete My Account"||title==="Add Phone Number"||title === 'Account Recovery'|| title==="Profile" ||title==="Change Password" ||  title === "Security & Password" || title==="Add Jobs"|| title==="Company Profile" || title==="Add Clients"||title==="Settings"|| title==="Add New Memebers" || title==="Payments"||title==="Report & Analysis")&&
//       <View style={styles.sideContainer}>
//       {title==="Add New Memebers"&&  <View style={styles.mail}>
//                     <Ionicons name="mail-outline" size={responsiveWidth(8)} color={colors.white} />

//           </View>}
//         <ButtonSimple title={`Add ${title==="Calendar"?"New":title==="Teams"?"Member":title.slice(0,-1)}`} onPress={onPress} leftIcon={
//           <Fontisto name="plus-a" size={20} color={colors.white}/>
//         }   style={styles.rightButton}  textStyle={styles.addButtonText}    />

//       </View>}
//     </View>
//   );
// };

// export default CustomHeader;

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: responsiveWidth(4),
//   alignItems: 'center',
//   justifyContent: 'center',
// },
//   leftSide: {
//     width: responsiveWidth(28),
//     alignItems: 'center',
//     flexDirection: 'row',
//     gap: responsiveWidth(4),
//   },
//   mail:{
// padding:responsiveWidth(2),
// backgroundColor:colors.greenAccent,
// width:responsiveWidth(15),
// borderRadius:responsiveWidth(3),
// justifyContent:"center",
// alignItems:"center"
//   },
//   file:{
// width:responsiveWidth(12),
// paddingHorizontal:0,
// paddingLeft:responsiveWidth(2)

//   },
//   leftIcon: {
//     width: responsiveWidth(12),
//     height: responsiveWidth(12),
//     borderColor: colors.inputBorder,
//     borderWidth: 2,
//     borderRadius: responsiveWidth(3),

//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sideContainer:{
//     flexDirection:"row",
//     gap:responsiveWidth(2)
//   },
//   plusIcon: {
//     fontSize: responsiveWidth(7),
//     textAlign: 'center',
//     tintColor: colors.white,
//     color: colors.white,
//   },
//   rightButton: {
//     width: responsiveWidth(36),
//     height: responsiveWidth(12),
//     borderRadius: responsiveWidth(3),
//     // backgroundColor: colors.blueAccent,
//     flexDirection: 'row',
//     gap: responsiveWidth(7),
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal:responsiveWidth(3)
//   },
//   addButtonText: {
//     color: colors.white,
//     fontSize: responsiveWidth(4),
//     fontWeight: '600',
//     marginLeft:responsiveWidth(2)
//   },
// });

// components/CustomHeader.jsx

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import colors from '../utils/colors';
import ButtonSimple from './Button';

/* ================= CONFIG ================= */

const HEADER_CONFIG = {
  "Company Profile": { showAddButton: false },

  "Verify": { transparent: true, showAddButton: false },
  "Delete My Account": { transparent: true, showAddButton: false },
  "Confirm Account Deletion": { showAddButton: false },

  "Report & Analysis": {
    rightIcon: "export",
    showAddButton: false,
  },

  "Notifications": { showAddButton: false },
  "Clients": { showAddButton: false },
  "Jobs": { showAddButton: false },
  "Add Clients": { showAddButton: false },
  "Add Jobs": { showAddButton: false },
  "Email Templates": { showAddButton: false },
  "Edit Email Template": { showAddButton: false },
  "Email Settings": { showAddButton: false },
  "Notification Preferences": { showAddButton: false },
  "Roles & Permissions": { showAddButton: false },
  "Branding & Customization": { showAddButton: false },
  "Payments & Billing": { showAddButton: false },
  "Billing History": { showAddButton: false },
  "Payment Methods": { showAddButton: false },
  "Add Payment Method": { showAddButton: false },
  "Goals & Reports": { showAddButton: false },
  "Reporting Preferences": { showAddButton: false },
  "System Preferences": { showAddButton: false },
  "General Settings": { showAddButton: false },
  "Language": { showAddButton: false },
  "Date Format": { showAddButton: false },
  "Time Format": { showAddButton: false },
  "Currency": { showAddButton: false },
  "First Day of Week": { showAddButton: false },
  "Job & Payment Defaults": { showAddButton: false },
  "Invoice Number Format": { showAddButton: false },
  "Workflow Settings": { showAddButton: false },
  "Files & Automation": { showAddButton: false },
  "Current Plan": { showAddButton: false },
  "Cancel Subscription": { showAddButton: false },
  "Admin": { showAddButton: false },
  "Manager": { showAddButton: false },
  "Editor": { showAddButton: false },
  "Email Sender Settings": { showAddButton: false },
  "Recovery Email": { showAddButton: false },
  "Email & Notifications": { showAddButton: false },
  "Backup Phone": { showAddButton: false },
  "Account Recovery": { showAddButton: false },
  "Add Phone Number": { showAddButton: false },
  "Change Password": { showAddButton: false },
  "Security & Password": { showAddButton: false },
  "Settings": { showAddButton: false },
  "Profile": { showAddButton: false },
  "Client Profile": { showAddButton: false },
  "Payments": { showAddButton: false },
  "Gmail": { showAddButton: false },
  "Gmail Settings": { showAddButton: false },
  " ": { showAddButton: false, transparent: true },

  default: {
    showAddButton: true,
  },
};

const getConfig = (title) => {
  const config = HEADER_CONFIG[title] || HEADER_CONFIG.default;

  // Rule: Hide 'Add' button in header for all screens that are themselves "Add" forms
  if (title.toLowerCase().startsWith("add")) {
    return { ...config, showAddButton: false };
  }

  return config;
};

/* ================= COMPONENT ================= */

const CustomHeader = ({ title = "", onPress, showMore = false, onMorePress, showAddButton }) => {
  const navigation = useNavigation();
  const config = { ...getConfig(title) };
  
  // Override config if prop is explicitly passed
  if (showAddButton !== undefined) {
    config.showAddButton = showAddButton;
  }

  const handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  const getAddTitle = () => {
    if (title === "Calendar") return "Add New";
    if (title === "Teams") return "Add Member";
    if (!title) return "Add";

    // Fix: If title already contains "Add", don't prefix it again
    if (title.toLowerCase().startsWith("add")) return title;

    return `Add ${title.endsWith("s") ? title.slice(0, -1) : title}`;
  };

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: config.transparent ? 'transparent' : colors.white },
      ]}
    >
      {/* LEFT SIDE */}
      <View style={styles.leftSide}>
        <TouchableOpacity style={styles.leftIcon} onPress={handlePress}>
          <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
        </TouchableOpacity>

        <View style={[config.center ? styles.centerTitle : styles.titleWrapper]}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>

      {/* RIGHT ICON (EXPORT) */}
      {config.rightIcon === "export" && (
        <View style={[styles.mail, styles.file]}>
          <FontAwesome5
            name="file-export"
            size={responsiveWidth(7)}
            color={colors.white}
          />
        </View>
      )}

      {/* RIGHT SIDE (MORE OPTIONS) */}
      {showMore && (
        <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
          <Ionicons
            name="ellipsis-vertical"
            size={responsiveWidth(6)}
            color={colors.black || '#000'}
          />
        </TouchableOpacity>
      )}

      {/* ADD BUTTON (Original) */}
      {config.showAddButton && !showMore && (
        <View style={styles.sideContainer}>
          <ButtonSimple
            title={getAddTitle()}
            onPress={onPress}
            leftIcon={
              <Fontisto name="plus-a" size={20} color={colors.white} />
            }
            style={styles.rightButton}
            textStyle={styles.addButtonText}
          />
        </View>
      )}
    </View>
  );
};

export default CustomHeader;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(2),
    minHeight: responsiveWidth(15), // Ensure enough space for alignment
  },

  headerTitle: {
    fontSize: responsiveWidth(4.8),
    fontWeight: '600',
    color: colors.textPrimary || '#111827',
    flex: 1, 
    flexWrap: 'wrap', 
    textAlignVertical: 'center', // Android centering
    includeFontPadding: false,   // Remove internal padding
    lineHeight: responsiveWidth(6), // Maintain consistent line height
  },

  centerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
    flex: 1, // Let it grow to take up center space
    marginRight: responsiveWidth(2),
  },

  leftIcon: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderColor: '#E5E7EB', // Lighter border from screenshot
    borderWidth: 1.5,
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },

  sideContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },

  mail: {
    padding: responsiveWidth(2),
    backgroundColor: colors.greenAccent,
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },

  file: {
    width: responsiveWidth(12),
    paddingHorizontal: 0,
    paddingLeft: responsiveWidth(2),
  },

  rightButton: {
    width: responsiveWidth(36),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
  },

  addButtonText: {
    color: colors.white,
    fontSize: responsiveWidth(4),
    fontWeight: '600',
    marginLeft: responsiveWidth(2),
  },
  moreButton: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    backgroundColor: '#F3F4F6', // Light gray from screenshot
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});