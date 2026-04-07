import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const PaymentsBilling = ({ navigation }) => {
  const sections = [
    {
      title: 'Email & Notifications', // Following the mockup title
      items: [
        { 
          id: 1, 
          title: 'Current Plan', 
          icon: 'flash-outline', 
          screen: 'CurrentPlan' 
        },
        { 
          id: 2, 
          title: 'Billing History', 
          icon: 'calendar-outline', 
          screen: 'BillingHistory' 
        },
        { 
          id: 3, 
          title: 'Payment Methods', 
          icon: 'card-outline', 
          screen: 'PaymentMethods' 
        },
      ],
    },
  ];

  const handlePress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Payments & Billing" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {sections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <CustomText style={styles.sectionTitle}>{section.title}</CustomText>
            <View style={styles.card}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.row,
                    itemIndex === section.items.length - 1 && styles.lastRow
                  ]}
                  onPress={() => handlePress(item.screen)}
                  activeOpacity={0.7}
                >
                  <View style={styles.rowLeft}>
                    <Ionicons name={item.icon} size={24} color={colors.textPrimary || '#222222'} />
                    <CustomText style={styles.rowLabel}>{item.title}</CustomText>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color={colors.grayDark || '#999999'} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  sectionContainer: {
    marginBottom: responsiveHeight(3),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#999999',
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(1),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(5),
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    fontSize: responsiveFontSize(2),
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(4),
    fontWeight: '400',
  },
});

export default PaymentsBilling;
