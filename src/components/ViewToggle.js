import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';

const SegmentToggle = ({ options, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {options?.map((option) => {
        const isSelected = option === selected;
        return (
          <TouchableOpacity
            key={option}
            onPress={() => onSelect(option)}
            style={[styles.button, isSelected && styles.selectedButton]}
            activeOpacity={0.8}
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
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    height: 52,
    padding: 4,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: colors.blueAccent, 
  },
  text: {
    color: '#374151',
    fontWeight: '500',
    fontSize: 15,
  },
  selectedText: {
    color: colors.white,
    fontWeight: '700',
  },
});
