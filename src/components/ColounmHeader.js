import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors'; // ← your colors file

const ColumnHeader = ({ title, count, onAddPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}{' '}
          
          <Text style={styles.count}>
            ({count})
          </Text>
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={onAddPress}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="add" 
          size={responsiveWidth(7)} 
          color={colors.black || '#007AFF'} // or your accent color
        />
      </TouchableOpacity>
    </View>
  );
};

export default ColumnHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.8),
  
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder || '#e5e7eb',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: responsiveWidth(5),
    fontWeight: '700',
    color: colors.textDark || '#1f2937',
  },
  count: {
    fontSize: responsiveWidth(4.1),
    fontWeight: '500',
    color: colors.textLight || '#6b7280', // lighter gray for the number
  },
  addButton: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    backgroundColor:colors.gray, // subtle blue tint (adjust to your theme)
    justifyContent: 'center',
    alignItems: 'center',

  },
});