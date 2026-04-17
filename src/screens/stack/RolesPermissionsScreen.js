import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ROLES = [
  {
    title: 'Admin',
    description: 'Full system access',
    route: 'RoleAdmin',
  },
  {
    title: 'Manager',
    description: 'Manage jobs & clients',
    route: 'RoleManager',
  },
  {
    title: 'Editor',
    description: 'Limited editing access',
    route: 'RoleEditor',
  },
];

const RolesPermissionsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Roles & Permissions</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {ROLES.map((role, index) => (
          <TouchableOpacity
            key={index}
            style={styles.roleCard}
            activeOpacity={0.7}
            onPress={() => {
              if (role.route) {
                navigation.navigate(role.route);
              }
            }}
          >
            <View style={styles.roleInfo}>
              <Typography style={styles.roleTitle}>{role.title}</Typography>
              <Typography style={styles.roleDescription}>{role.description}</Typography>
            </View>
            <Feather name="chevron-right" size={rs(20)} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.createButton} activeOpacity={0.7}>
          <Feather name="plus" size={rs(20)} color="#111827" style={styles.createIcon} />
          <Typography style={styles.createText}>Create Role</Typography>
        </TouchableOpacity>

        <View style={{ height: rh(100) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  roleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rs(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(4),
  },
  roleDescription: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: 'transparent',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    marginTop: rs(8),
  },
  createIcon: {
    marginRight: rs(8),
  },
  createText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
});

export default RolesPermissionsScreen;
