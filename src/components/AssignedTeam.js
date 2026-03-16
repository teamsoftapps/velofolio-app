import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const AssignedTeam = ({
  members = [
    { id: '1', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: '2', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: '3', avatar: 'https://i.pravatar.cc/150?img=9' },
  ],
  maxDisplay = 3,
  onEdit,
}) => {
  const displayMembers = members.slice(0, maxDisplay);
  const remainingCount = members.length - maxDisplay;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Assigned Team</Text>
      <View style={styles.contentRow}>
        <View style={styles.avatarsContainer}>
          {displayMembers.map((member, index) => (
            <Image
              key={member.id}
              source={{ uri: member.avatar }}
              style={[
                styles.avatar,
                { marginLeft: index > 0 ? -responsiveWidth(2.5) : 0 },
              ]}
            />
          ))}
          {remainingCount > 0 && (
            <View style={[styles.avatar, styles.moreBadge]}>
              <Text style={styles.moreText}>+{remainingCount}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Icon name="pencil" size={16} color={colors.textMuted} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssignedTeam;

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
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(12),
    borderWidth: 2,
    borderColor: colors.white,
  },
  moreBadge: {
    backgroundColor: colors.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -responsiveWidth(2.5),
  },
  moreText: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: '700',
    color: colors.white,
  },
  editButton: {
    padding: responsiveWidth(1),
  },
});