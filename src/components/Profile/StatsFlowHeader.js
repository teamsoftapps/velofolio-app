import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../utils/colors';

const StatsFlowHeader = ({
  title = "Workload Overview",
  filterText = "Last 30 Days",
  onPress,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity style={styles.dropdown} onPress={onPress}>
        <Text style={styles.dropdownText}>{filterText}</Text>
        <Icon
          name="caret-down"
          size={responsiveFontSize(2)}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StatsFlowHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },

  headerTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary,
  },

  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.8),
    borderRadius: responsiveWidth(5),
    borderWidth: responsiveWidth(0.5),
    borderColor: colors.borderLight,
  },

  dropdownText: {
    fontSize: responsiveFontSize(1.7),
    color: colors.grayDark,
    marginRight: responsiveWidth(1),
    fontWeight: '600',
  },
});