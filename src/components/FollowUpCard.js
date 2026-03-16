import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const FollowUpCard = ({ 
  title = "Follow Up", 
  date = "Mar 1, 2026", 
  email = "sarahjohnson@gmail.com", 
  status = "DELIVERED",
  onViewPress 
}) => {
  return (
    <View style={styles.card}>
      {/* Header Row: Icon + Title/Date + View Button */}
      <View style={styles.headerContainer}>
        {/* Left: Mail Icon */}
        <View style={styles.iconContainer}>
          <MaterialIcons 
            name="email" 
            size={responsiveFontSize(2.8)} 
            color={colors.black || '#6b7280'} 
          />
        </View>

        {/* Middle: Title and Date */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        {/* Right: View Button */}
        <TouchableOpacity 
          style={styles.viewButton}
          onPress={onViewPress}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <MaterialIcons 
            name="visibility" 
            size={responsiveFontSize(2.2)} 
            color={colors.black || '#6b7280'} 
          />
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* To Row */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <Feather 
              name="arrow-up" 
              size={responsiveFontSize(2.5)} 
              color={colors.grayDark || '#6b7280'} 
            />
            <Text style={styles.label}>To</Text>
          </View>
          <Text style={styles.emailText}>{email}</Text>
        </View>

        {/* Status Row */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <MaterialIcons 
              name="loop" 
              size={responsiveFontSize(2.5)} 
              color={colors.grayDark || '#6b7280'} 
            />
            <Text style={styles.label}>Status</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FollowUpCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    backgroundColor: colors.white,
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(2.5),
    backgroundColor: colors.grayLight || '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    color: colors.black || '#1f2937',
  },
  date: {
    fontSize: responsiveFontSize(1.8),
    color: colors.grayDark || '#6b7280',
    marginTop: responsiveHeight(0.3),
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.veryLightGray ,
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    gap: responsiveWidth(1.5),
    borderColor:colors.inputBorder,
    borderWidth:responsiveWidth(0.4)
  },
  viewText: {
    fontSize: responsiveFontSize(1.8),
    color: colors.black || '#6b7280',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: colors.grayLight || '#e5e7eb',
    marginVertical: responsiveHeight(2),
  },
  detailsContainer: {
    gap: responsiveHeight(1.5),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
    width: responsiveWidth(20),
  },
  label: {
    fontSize: responsiveFontSize(1.9),
    color: colors.grayDark || '#6b7280',
  },
  emailText: {
    fontSize: responsiveFontSize(1.9),
    color: colors.black || '#1f2937',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  statusBadge: {
    backgroundColor: colors.greenLight || '#dcfce7',
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(2.5),
    borderRadius: responsiveWidth(50),
  },
  statusText: {
    fontSize: responsiveFontSize(1.7),
    color: colors.emred ,
    fontWeight: '600',
  },
});