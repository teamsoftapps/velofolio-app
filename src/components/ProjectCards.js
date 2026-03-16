import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';

import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const { width: screenWidth } = Dimensions.get('window');

const ProjectCard = ({ project, onCardPress, onCheckPress }) => {
  const isCompleted = project.progress === 100;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: project.cardColor }]}
      onPress={() => onCardPress?.(project)}
      activeOpacity={0.9}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{project.title}</Text>

        <TouchableOpacity
          style={[
            styles.checkButton,
            isCompleted && { backgroundColor: colors.bluePrimary },
          ]}
          onPress={() => onCheckPress?.(project)}
        >
          <Icon
            name="check"
            size={16}
            color={isCompleted ? colors.white : colors.textMuted}
          />
        </TouchableOpacity>
      </View>

      {/* Progress Text */}
      <Text style={styles.progressText}>
        {project.progress}% Complete
      </Text>

      {/* ✅ Animated Progress Bar */}
      <Progress.Bar
        progress={project.progress / 100}
        width={null}
        height={8}
        borderRadius={6}
        color={colors.black}
        unfilledColor={colors.white}
        borderWidth={0}
        animated
        style={styles.progressBar}
      />

      {/* Footer */}
      <View style={styles.footerRow}>
        <View style={styles.budgetContainer}>
          <MaterialIcons
            name="currency-exchange"
            size={18}
            color={colors.bluePrimary}
          />
          <Text style={styles.budget}>{project.budget}</Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: project.statusColor },
          ]}
        >
          <Text style={styles.statusText}>{project.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProjectCard);

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.90,
    borderRadius: 16,
    padding: responsiveWidth(4),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(0.5),
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  checkButton: {
    width: responsiveWidth(8),
    height: responsiveHeight(3.7),
    borderRadius: responsiveWidth(12),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: responsiveFontSize(1.8),
    color: colors.textSecondary,
    marginBottom: responsiveHeight(1),
  },
  progressBar: {
    marginBottom: responsiveHeight(2),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
  },
  budget: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    color: colors.bluePrimary,
  },
  statusBadge: {
    paddingHorizontal: responsiveWidth(3.4),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 12,
  },
  statusText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '600',
    color: colors.white,
  },
});