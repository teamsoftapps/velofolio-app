import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const BackupButton = ({ onPress, title = "Add a Backup 2FA Phone Number" }) => {
  return (
    <TouchableOpacity style={styles.backupButton} onPress={onPress}>
      <View style={styles.plusIconContainer}>
        <Ionicons name="add" size={28} color={colors.textPrimary} />
      </View>
      <Text style={styles.backupText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BackupButton;

const styles = StyleSheet.create({
  backupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveWidth(2),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  plusIconContainer: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
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