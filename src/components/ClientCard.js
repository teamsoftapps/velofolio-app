import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ClientCard = ({ job = {}, onPress, onMenuPress }) => {
  const {
    clientName = "Unknown Client",
    email = "No email",
    avatarUri = "https://i.pravatar.cc/150",
    status = "Active",
    itemsCount = 0,
    totalAmount = 0,
    paidAmount = 0,
  } = job;

  const getStatusColor = (s) => {
    if (s?.toLowerCase() === 'active') return '#FFBE2B'; // Yellow
    if (s?.toLowerCase() === 'completed') return '#14CB95'; // Green
    if (s?.toLowerCase() === 'overdue') return '#FF3B30'; // Red
    return '#6B7280';
  };

  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.9}>
      <View style={styles.header}>
        <View style={styles.clientInfo}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{clientName}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.statsRow}>
        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Status</Text>
          <Text style={[styles.statValue, { color: getStatusColor(status) }]}>{status}</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Jobs</Text>
          <Text style={styles.statValue}>{itemsCount}</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Total</Text>
          <Text style={styles.statValue}>{formatCurrency(totalAmount)}</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Paid</Text>
          <Text style={styles.statValue}>{formatCurrency(paidAmount)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClientCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(92),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(4.5),
    marginBottom: responsiveHeight(2.2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(6.5),
    backgroundColor: '#F3F4F6',
  },
  textContainer: {
    marginLeft: responsiveWidth(3.5),
    flex: 1,
  },
  name: {
    fontSize: responsiveWidth(4.5),
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  email: {
    fontSize: responsiveWidth(3.5),
    color: '#9CA3AF',
  },
  menuButton: {
    padding: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: responsiveHeight(1.5),
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statColumn: {
    flex: 1,
  },
  statLabel: {
    fontSize: responsiveWidth(3.3),
    color: '#9CA3AF',
    marginBottom: 6,
  },
  statValue: {
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
    color: '#000',
  },
});
