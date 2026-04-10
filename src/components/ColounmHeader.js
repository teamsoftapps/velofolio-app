import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const ColumnHeader = ({ title, count, onAddPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}{' '}
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{count}</Text>
          </View>
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={onAddPress}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="add" 
          size={24} 
          color={colors.black} 
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
    paddingVertical: responsiveHeight(1.5),
    marginBottom: 5,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countBadge: {
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  countText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grayDark,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});