import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or Ionicons, FontAwesome, etc.
import Ionicons from 'react-native-vector-icons/Ionicons'; // or Ionicons, FontAwesome, etc.
import Octicons from 'react-native-vector-icons/Octicons'; // or Ionicons, FontAwesome, etc.
import { logoutUser } from '../services/firebaseAuth';


import colors from '../utils/colors';
import Logo from "../assets/AppLogo.png"
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');

export default function VelofolioSidebar({ visible, onClose }) {
  if (!visible) return null;
const navigation=useNavigation()
  return (
    <>
      {/* Backdrop / overlay – you can add BlurView here like in your example */}
      
      <TouchableOpacity
        style={[StyleSheet.absoluteFill, { zIndex: 99999 }]}
        activeOpacity={1}
        onPress={onClose}
      >
        {/* Optional: <BlurView ... /> */}
      </TouchableOpacity>

      {/* Sidebar container – slides from left */}
      <View style={styles.sidebar}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>


  <TouchableOpacity style={styles.logoitem} onPress={() => { onClose() }}>
               <Image
                     source={Logo}
                     style={styles.logo}
                     resizeMode="contain"
                   />
                   <View>
                       <Ionicons name="chevron-up" size={responsiveWidth(5.5)} color={colors.grayDark} />
                          <Ionicons name="chevron-down" size={responsiveWidth(5.5)} color={colors.grayDark} />
                   </View>
              
            </TouchableOpacity>


          {/* BUSINESS & MANAGEMENT */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>BUSINESS & MANAGEMENT</Text>

            <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("Teams")
            onClose() }}>
              <Icon name="people" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Team Members</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { onClose() }}>
              <Octicons name="person-add" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Leads</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("Payments")
            onClose() }}>
              <Ionicons name="card-outline" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Payments & Invoices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("ReportAnalysis")
            onClose() }}>
              <Icon name="analytics" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Reports & Analytics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("GoalsReports")
            onClose() }}>
              <Icon name="flag" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Goals & Performance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { onClose() }}>
              <Icon name="view-kanban" size={responsiveWidth(5.5)} color={colors.grayDark} /> {/* or grid-view */}
              <Text style={styles.itemText}>Production Board</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate("Settings")
            onClose()

            }}>
              <Icon name="settings" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Settings</Text>
            </TouchableOpacity>
          </View>

          {/* SUPPORT & SYSTEM */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SUPPORT & SYSTEM</Text>

            <TouchableOpacity style={styles.item} onPress={() => { onClose() }}>
              <Icon name="help-outline" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Help Center / FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { onClose() }}>
              <Icon name="support-agent" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>Contact Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => { onClose() }}>
              <Icon name="update" size={responsiveWidth(5.5)} color={colors.grayDark} />
              <Text style={styles.itemText}>App Updates / What's New</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Log Out at bottom */}
        <TouchableOpacity style={styles.logout}  onPress={async () => {
    await logoutUser();        // actually call it
    onClose();                 // close sidebar
    // navigation.navigate("SignIn");
  }}>
          <Icon name="logout" size={responsiveWidth(5.5)} color="#F44336" />
          <Text style={[styles.itemText, { color: '#F44336', fontWeight: '600' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    overlay:{
zIndex:99999
    },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height:"100%",
    left: 0,
    width: responsiveWidth(75), // typical drawer width 70–80%
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    overflow: 'hidden',
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    zIndex:100000
  },
  
  logoitem:{
    backgroundColor:colors.gray,
    marginHorizontal:responsiveWidth(10),
    marginTop:responsiveHeight(2),
    flexDirection:"row",
    padding:responsiveWidth(1),
    paddingHorizontal:responsiveWidth(3.4),
    borderRadius:responsiveWidth(2),
    justifyContent:"space-between"
  },
  logo:{
width:responsiveWidth(30),

height:responsiveHeight(6)
  },
  section: {
    paddingTop: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(5),

  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: colors.gray,
    marginBottom: responsiveHeight(1.8),
    // letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.9),
    gap: responsiveWidth(4),
  },
  itemText: {
    fontSize: responsiveFontSize(2.1),
    color: colors.grayDark,
    flex: 1,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(5),
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: responsiveWidth(4),
  },
});