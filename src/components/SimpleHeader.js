import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SimpleHeader = ({
  title,
  onBackPress,
  rightComponent,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {onBackPress && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackPress}
            activeOpacity={0.7}>
            <Feather name="arrow-left" size={20} color="#1A1A1A" />
          </TouchableOpacity>
        )}
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF', // matching the generic white clean background
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SimpleHeader;
