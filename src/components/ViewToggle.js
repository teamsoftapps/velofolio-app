import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';



const SegmentToggle= ({ options, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {options?.map((option) => {
        const isSelected = option === selected;
        return (
          <TouchableOpacity
            key={option}
            onPress={() => onSelect(option)}
            style={[styles.button, isSelected && styles.selectedButton]}
          >
            <Text style={[styles.text, isSelected && styles.selectedText]}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentToggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0', // grey background
    borderRadius: responsiveWidth(12),
    overflow: 'hidden',
    width: responsiveWidth(48),
    height: responsiveHeight(6),
    padding:responsiveWidth(1),
    justifyContent:"space-between"
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: colors.blueAccent, // active color,
    borderRadius:responsiveWidth(12),
    
  },
  text: {
    color: '#555',
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});
