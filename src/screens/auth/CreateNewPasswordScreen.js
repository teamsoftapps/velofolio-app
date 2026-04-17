import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';
import { rs, rh } from '../../utils/dimensions';

const RULES = [
  { label: '8 character (20 max)', test: (p) => p.length >= 8 && p.length <= 20 },
  { label: '1 letter and 1 number', test: (p) => /[a-zA-Z]/.test(p) && /\d/.test(p) },
  { label: '1 special character (Example: # ? ! $ & @)', test: (p) => /[#?!$&@]/.test(p) },
];

const getStrength = (pass) => {
  const passed = RULES.filter((r) => r.test(pass)).length;
  if (passed === 3) return { label: 'Strong', ratio: 1, color: '#22C55E' };
  if (passed === 2) return { label: 'Medium', ratio: 0.66, color: '#3B82F6' };
  if (passed === 1) return { label: 'Weak', ratio: 0.33, color: '#EF4444' };
  return { label: '', ratio: 0, color: '#D4D4D4' };
};

const CreateNewPasswordScreen = ({ navigation }) => {
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [secureNew, setSecureNew] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const strength = useMemo(() => getStrength(newPass), [newPass]);

  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={rs(20)} color="#1A1A1A" />
        </TouchableOpacity>

        <Typography style={styles.heading}>Create New Password</Typography>
        <Typography style={styles.subtitle}>
          Your new password must be different from previously used password
        </Typography>

        <TextInput
          label="New Password"
          placeholder="••••••••"
          value={newPass}
          onChangeText={setNewPass}
          secureTextEntry={secureNew}
          rightIcon={
            <Feather
              name={secureNew ? 'eye' : 'eye-off'}
              size={rs(20)}
              color="#9CA3AF"
            />
          }
          onRightIconPress={() => setSecureNew(!secureNew)}
        />

        <TextInput
          label="Confirm Password"
          placeholder="••••••••"
          value={confirmPass}
          onChangeText={setConfirmPass}
          secureTextEntry={secureConfirm}
          rightIcon={
            <Feather
              name={secureConfirm ? 'eye' : 'eye-off'}
              size={rs(20)}
              color="#9CA3AF"
            />
          }
          onRightIconPress={() => setSecureConfirm(!secureConfirm)}
        />

        <View style={styles.rulesSection}>
          <Typography style={styles.rulesTitle}>
            Your password must have at least:
          </Typography>
          {RULES.map((rule, i) => {
            const passed = rule.test(newPass);
            return (
              <View key={i} style={styles.ruleRow}>
                <Feather
                  name="check"
                  size={rs(16)}
                  color={passed ? '#22C55E' : '#D4D4D4'}
                  style={styles.ruleIcon}
                />
                <Typography
                  style={[styles.ruleText, passed && styles.ruleTextPassed]}
                >
                  {rule.label}
                </Typography>
              </View>
            );
          })}
        </View>

        <View style={styles.strengthBar}>
          <View
            style={[
              styles.strengthFill,
              { flex: strength.ratio, backgroundColor: strength.color },
            ]}
          />
          <View style={{ flex: 1 - strength.ratio }} />
        </View>

        <View style={styles.strengthLabelRow}>
          <Typography style={styles.strengthLabel}>
            Password strength:{' '}
          </Typography>
          <Typography style={[styles.strengthValue, { color: strength.color }]}>
            {strength.label}
          </Typography>
        </View>

        <View style={{ flex: 1 }} />

        <Button
          title="Update Password"
          onPress={() => navigation.popToTop()}
          variant="primary"
          disabled={!newPass || newPass !== confirmPass}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: rs(20),
    paddingBottom: rh(30),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  heading: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(8),
  },
  rulesSection: {
    marginTop: rs(8),
    marginBottom: rs(12),
  },
  rulesTitle: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: rs(8),
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(6),
  },
  ruleIcon: {
    marginRight: rs(8),
  },
  ruleText: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  ruleTextPassed: {
    color: '#1A1A1A',
  },
  strengthBar: {
    flexDirection: 'row',
    height: rs(4),
    borderRadius: rs(2),
    backgroundColor: '#E5E7EB',
    marginBottom: rs(8),
    overflow: 'hidden',
  },
  strengthFill: {
    borderRadius: rs(2),
  },
  strengthLabelRow: {
    flexDirection: 'row',
    marginBottom: rs(24),
  },
  strengthLabel: {
    fontSize: rs(13),
    color: '#6B7280',
  },
  strengthValue: {
    fontSize: rs(13),
    fontWeight: '600',
  },
});

export default CreateNewPasswordScreen;
