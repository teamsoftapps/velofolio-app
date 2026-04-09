
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Tag from "./Tag";
import TeamComponent from "./TeamComponent";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.card}>
      {/* Header with Tags and More icon */}
      <View style={styles.header}>
        <View style={styles.tagsContainer}>
          <Tag
            text="High"
            bgColor={colors.red}
            color={colors.white}
            icon={<MaterialIcons name="flag" size={14} color={colors.white} />}
          />
          <Tag
            text="In Progress"
            bgColor={colors.blueAccent}
            color={colors.white}
          />
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color={colors.grayDark} />
        </TouchableOpacity>
      </View>

      {/* Task Title */}
      <Text style={styles.title}>{task.title || "Edit Wedding Photos"}</Text>

      {/* Task Description */}
      <Text style={styles.description}>
        {task.description || "Footage received from the videographer."}
      </Text>

      {/* Footer with Date and Team */}
      <View style={styles.footer}>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={18} color={colors.grayDark} />
          <Text style={styles.dateLabel}>
            Due Date: <Text style={styles.dateValue}>Oct 12, 2025</Text>
          </Text>
        </View>

        <View style={styles.teamWrapper}>
          <TeamComponent />
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: responsiveWidth(90),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Elevation for Android
    // elevation: 3,
    // // Shadow for iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.05,
    // shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.black,
    marginBottom: responsiveHeight(0.8),
  },
  description: {
    fontSize: responsiveFontSize(1.7),
    color: colors.grayDark,
    marginBottom: responsiveHeight(2),
    fontWeight: '400',
    lineHeight: responsiveFontSize(2.2),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(0.5),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  dateLabel: {
    fontSize: responsiveFontSize(1.7),
    color: colors.grayDark,
    fontWeight: '500',
  },
  dateValue: {
    color: colors.red,
    fontWeight: '600',
  },
  teamWrapper: {
    // scale down the team component slightly if needed or adjust its container
  }
});
