import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const LeadSource = ({
  source = 'Instagram',
  iconName = 'instagram',
  iconColor = '#E4405F',
  onEdit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Lead Source</Text>
      <View style={styles.contentRow}>
        <View style={styles.sourceContainer}>
          <Icon name={iconName} size={24} color={iconColor} />
          <Text style={styles.sourceText}>{source}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Icon name="pencil" size={18} color={colors.textMuted} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeadSource;

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(1),
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blueSecondary,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.7),
    borderRadius: 10,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  sourceText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color: colors.textPrimary,
  },
  editButton: {
    padding: responsiveWidth(1),
  },
});