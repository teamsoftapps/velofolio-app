import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const RolesPermissions = ({ navigation }) => {
  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access',
    },
    {
      id: 2,
      name: 'Manager',
      description: 'Manage jobs & clients',
    },
    {
      id: 3,
      name: 'Editor',
      description: 'Limited editing access',
    },
  ];

  const handleRolePress = (role) => {
    navigation.navigate('RoleDetail', { roleName: role.name });
  };

  const handleCreateRole = () => {
    navigation.navigate('RoleDetail', { roleName: 'New Role' });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Roles & Permissions" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={styles.roleCard}
            onPress={() => handleRolePress(role)}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <CustomText style={styles.roleName}>{role.name}</CustomText>
              <CustomText style={styles.roleDescription}>{role.description}</CustomText>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.grayDark || '#999999'} />
          </TouchableOpacity>
        ))}

        {/* Create Role Button */}
        <TouchableOpacity 
          style={styles.createButton} 
          onPress={handleCreateRole}
          activeOpacity={0.7}
        >
          <Ionicons name="add-outline" size={24} color={colors.textPrimary || '#222222'} />
          <CustomText style={styles.createButtonText}>Create Role</CustomText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1.5),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flex: 1,
  },
  roleName: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(0.5),
  },
  roleDescription: {
    fontSize: responsiveFontSize(1.7),
    color: colors.grayDark || '#999999',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(2.2),
    marginTop: responsiveHeight(1),
    backgroundColor: 'transparent',
  },
  createButtonText: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(2),
  },
});

export default RolesPermissions;
