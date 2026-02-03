import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors'; // ← adjust path if needed

/**
 * Reusable action buttons (edit + delete)
 *
 * @param {function} onEdit       - callback for edit button
 * @param {function} onDelete     - callback for delete button
 * @param {object} data           - data object passed to both callbacks
 * @param {string} [direction='row']   - 'row' | 'row-reverse' | 'column'
 * @param {number} [size=7]       - responsiveWidth multiplier for icon size
 * @param {object} [style]        - custom style for the container
 * @param {object} [buttonStyle]  - custom style applied to each button
 */
const ActionButtons = ({
  onEdit,
  onDelete,
  data,
  direction = 'row',
  size = 7,
  style,
  buttonStyle,
}) => {
  const iconSize = responsiveWidth(size);

  return (
    <View
      style={[
        styles.container,
        { flexDirection: direction },
        style,
      ]}
    >
      <TouchableOpacity
        style={[styles.iconButton, buttonStyle]}
        onPress={() => onEdit?.(data)}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name="edit"
          size={iconSize}
          color={colors.blueAccent}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconButton, buttonStyle]}
        onPress={() => onDelete?.(data)}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name="delete"   // ← using outline version (softer look)
          size={iconSize}
          color={colors.red}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },

  iconButton: {
    width: responsiveWidth(10.5),
    height: responsiveWidth(10.5),
    borderRadius: 999,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // subtle shadow — looks good on most designs
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
});