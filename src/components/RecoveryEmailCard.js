import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const RecoveryEmailCard = ({ email, verified = true }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="mail-outline"
          size={responsiveWidth(6)}
          color={colors.textSecondary || '#8e8e93'}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Current</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {verified && (
        <Ionicons
          name="checkmark-circle"
          size={responsiveWidth(6)}
          color={colors.success }
        />
      )}
    </View>
  );
};

export default RecoveryEmailCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveWidth(6),
    shadowColor: colors.black || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginRight: responsiveWidth(3),
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: responsiveWidth(3.5),
    color: colors.textSecondary || '#8e8e93',
  },
  email: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222',
    fontWeight: '450',
  },
});