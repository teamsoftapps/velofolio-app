import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomText from './CustomText';

const PhoneVerificationCard = ({ 
  phoneNumber = "+1 (514) 550-3281", 
  countryCode = "+1",
  isVerified = true,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      {/* Main Phone Number Card */}
      <View style={styles.phoneCard}>
        <View style={styles.leftSection}>
          {/* Country Flag & Code */}
     <View style={styles.flagContainer}>
  <Text style={styles.flagEmoji}>🇺🇸</Text>
  <Text style={styles.countryCode}>{countryCode}</Text>
  <Ionicons name="chevron-down" size={14} color={colors.textSecondary} />
</View>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          
          {isVerified && (
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={16} color={colors.success} />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          )}
          
          <Text style={styles.helperText}>Codes are sent by text message</Text>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <FontAwesome5 name="trash" size={20} color={colors.red} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Backup 2FA Button */}
      {/* <TouchableOpacity style={styles.backupButton} onPress={onAddBackup}>
        <View style={styles.plusIconContainer}>
          <Ionicons name="add" size={28} color={colors.textPrimary} />
        </View>
        <Text style={styles.backupText}>Add a Backup 2FA Phone Number</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default PhoneVerificationCard;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveWidth(4),
  },
  flagEmoji: {
  fontSize: responsiveWidth(5),
},
  phoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveWidth(3),
    // Shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    marginRight: responsiveWidth(3),
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
  },
  flag: {
    width: responsiveWidth(6),
    height: responsiveWidth(4),
    borderRadius: 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.inputBorder,
  },
  usFlag: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flagStripeRed: {
    height: '14.28%',
    backgroundColor: '#B22234',
  },
  flagStripeWhite: {
    height: '14.28%',
    backgroundColor: colors.white,
  },
  countryCode: {
    fontSize: responsiveWidth(3.5),
    color: colors.textPrimary,
    fontWeight: '500',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    borderLeftColor:colors.gray,
    borderLeftWidth:responsiveWidth(0.4),
    paddingLeft:responsiveWidth(2)
  },
  phoneNumber: {
    fontSize: responsiveWidth(4.5),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: responsiveWidth(1),
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
    marginBottom: responsiveWidth(1),
  },
  verifiedText: {
    fontSize: responsiveWidth(3.5),
    color: colors.success,
    fontWeight: '600',
  },
  helperText: {
    fontSize: responsiveWidth(3.2),
    color: colors.textSecondary,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    padding: responsiveWidth(2),
  },
  backupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveWidth(2),
    // Shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  plusIconContainer: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
    // borderWidth: 2,
    // borderColor: colors.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
  },
  backupText: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary,
    fontWeight: '500',
  },
});