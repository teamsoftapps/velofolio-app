import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PasswordInput = ({ label, placeholder, value, onChangeText }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.inputWrapper}>
      <Typography style={styles.label}>{label}</Typography>
      <View style={styles.inputContainer}>
        <RNTextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          activeOpacity={0.7}
          style={styles.iconButton}
        >
          <Feather
            name={isSecure ? 'eye-off' : 'eye'}
            size={rs(20)}
            color="#111827"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChangePasswordScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Change Password</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <PasswordInput
            label="Current Password"
            placeholder="••••••••"
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <PasswordInput
            label="New Password"
            placeholder="••••••••"
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <PasswordInput
            label="Confirm New Password"
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <Button
            title="Save Changes"
            onPress={() => navigation.goBack()}
            style={styles.saveButton}
          />

          <View style={styles.resetContainer}>
            <Typography style={styles.resetText}>
              Forgot your current password?{' '}
            </Typography>
            <TouchableOpacity activeOpacity={0.7}>
              <Typography style={styles.resetLink}>Reset via Email</Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(10),
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
  headerTitle: { fontSize: rs(22), fontWeight: '600', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  inputWrapper: {
    marginBottom: rs(20),
  },
  label: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FAFAFA',
  },
  inputText: {
    flex: 1,
    fontSize: rs(15),
    color: '#111827',
    padding: 0,
    margin: 0,
    marginRight: rs(10),
  },
  iconButton: {
    padding: rs(4),
  },
  saveButton: {
    marginTop: rs(10),
    marginBottom: rs(30),
  },
  resetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  resetLink: {
    fontSize: rs(14),
    color: '#38BDF8',
    fontWeight: '500',
  },
});

export default ChangePasswordScreen;
