import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const DateRangeFilter = ({
  options = ['7D', '30D', 'MTD', 'YTD', 'Custom'],
  defaultSelected = '7D',
  onSelect,
  containerStyle,
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {options.map((option) => {
          const isSelected = selected === option;
          
          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.pill,
                isSelected && styles.pillSelected,
              ]}
              onPress={() => handleSelect(option)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.pillText,
                  isSelected && styles.pillTextSelected,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DateRangeFilter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: responsiveWidth(3),
    gap: responsiveWidth(2.2),
    paddingVertical: responsiveHeight(1),
  },
  pill: {
    paddingHorizontal: responsiveWidth(4.1),
    paddingVertical: responsiveHeight(1),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.white,
    minWidth: responsiveWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillSelected: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  pillText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    color: colors.textSecondary,
  },
  pillTextSelected: {
    color: colors.white,
    fontWeight: '600',
  },
});