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

const ContractCard = ({ contract, onMorePress }) => {
  // Default data if not provided
  const data = contract || {
    type: 'Contract',
    uploadedBy: 'Sarah Lee',
    date: 'Oct 1, 2025',
    status: 'SIGNED',
    title: 'Wedding Contract'
  };

  return (
    <View style={styles.card}>
      {/* Header with Icon and Title */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="description"
            size={responsiveFontSize(2.5)}
            color={colors.blueAccent || '#3b82f6'}
          />
        </View>
        <Text style={styles.title}>{data.title}</Text>

        <TouchableOpacity
          onPress={onMorePress}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Feather
            name="more-horizontal"
            size={responsiveFontSize(4.8)}
            color={colors.grayDark || '#6b7280'}
          />
        </TouchableOpacity>
      </View>

      {/* Details Container */}
      <View style={styles.detailsContainer}>
        {/* Type Row */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="description"
              size={responsiveFontSize(2.5)}
              color={colors.grayDark || '#6b7280'}
              style={styles.rowIcon}
            />
            <Text style={styles.label}>Type</Text>
          </View>
          <Text style={styles.value}>{data.type}</Text>
        </View>

        {/* Uploaded By Row */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Feather
              name="upload"
              size={responsiveFontSize(2.5)}
              color={colors.grayDark || '#6b7280'}
              style={styles.rowIcon}
            />
            <Text style={styles.label}>Uploaded By</Text>
          </View>
          <Text style={styles.value}>{data.uploadedBy}</Text>
        </View>

        {/* Date Row */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="calendar-today"
              size={responsiveFontSize(2.5)}
              color={colors.grayDark || '#6b7280'}
              style={styles.rowIcon}
            />
            <Text style={styles.label}>Date</Text>
          </View>
          <Text style={styles.value}>{data.date}</Text>
        </View>

        {/* Status Row */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="loop"
              size={responsiveFontSize(2.5)}
              color={colors.grayDark || '#6b7280'}
              style={styles.rowIcon}
            />
            <Text style={styles.label}>Status</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{data.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContractCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    backgroundColor: colors.white,
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(2),

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    backgroundColor: colors.blueSecondary,
    padding: responsiveWidth(1.9)
  },
  iconContainer: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
    // backgroundColor: colors.blueSecondary || '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(2),
  },
  title: {
    flex: 1,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    color: colors.black || '#1f2937',
  },
  detailsContainer: {
    gap: responsiveHeight(1.5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  rowIcon: {
    width: responsiveWidth(5),
  },
  label: {
    fontSize: responsiveFontSize(1.9),
    color: colors.grayDark || '#6b7280',
  },
  value: {
    fontSize: responsiveFontSize(1.9),
    color: colors.black || '#1f2937',
    fontWeight: '500',
  },
  statusContainer: {
    backgroundColor: colors.yellowSecondary || '#fef3c7',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: responsiveWidth(50),
  },
  statusText: {
    fontSize: responsiveFontSize(1.6),
    color: colors.yellowAccent || '#d97706',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});