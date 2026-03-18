import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  TextInput,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import React, { useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';

const ConfirmDeleteScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const deleteItems = [
    'All projects and job history',
    'Client records and documents',
    'Payments and invoices',
    'Team data',
    'Account access',
  ];

  const handleDelete = () => {
    // Handle account deletion logic
    console.log('Deleting account with password:', password);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={"Confirm Account Deletion"} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Warning Section */}
          <Text style={styles.warningText}>This will permanently delete:</Text>

          {/* Bullet List */}
          <View style={styles.bulletList}>
            {deleteItems.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Irreversible Warning */}
          <Text style={styles.irreversibleText}>This action is irreversible.</Text>

          {/* Password Confirmation */}
          <Text style={styles.confirmText}>
            To confirm, enter your password below.
          </Text>

          {/* Password Label */}
          <Text style={styles.passwordLabel}>Password</Text>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor={colors.textSecondary || '#8e8e93'}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons 
                name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} 
                size={responsiveWidth(6)} 
                color={colors.textSecondary || '#8e8e93'} 
              />
            </TouchableOpacity>
          </View>

          {/* Spacer to push buttons down */}
          <View style={styles.spacer} />

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[styles.deleteButton]}
            onPress={handleDelete}
            disabled={!password}
          >
            <Text style={styles.deleteButtonText}>Permanently Delete Account</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#f8f9fa',
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(6),
    paddingBottom: responsiveWidth(8),
    flexGrow: 1,
  },
  warningText: {
    fontSize: responsiveWidth(4),
    color: colors.textSecondary || '#8e8e93',
    marginBottom: responsiveWidth(3),
  },
  bulletList: {
    marginBottom: responsiveWidth(4),
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveWidth(2),
  },
  bullet: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    marginRight: responsiveWidth(2),
    lineHeight: responsiveWidth(5.5),
  },
  bulletText: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    lineHeight: responsiveWidth(5.5),
    flex: 1,
  },
  irreversibleText: {
    fontSize: responsiveWidth(4),
    color: colors.textSecondary || '#8e8e93',
    marginBottom: responsiveWidth(4),
  },
  confirmText: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveWidth(4),
  },
  passwordLabel: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    fontWeight: '500',
    marginBottom: responsiveWidth(2),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: colors.border || '#e5e5ea',
    paddingHorizontal: responsiveWidth(4),
    height: responsiveWidth(14),
  },
  input: {
    flex: 1,
    fontSize: responsiveWidth(4.5),
    color: colors.textPrimary || '#222222',
    height: '100%',
  },
  eyeIcon: {
    padding: responsiveWidth(2),
  },
  spacer: {
    flex: 1,
    minHeight: responsiveWidth(10),
  },
  deleteButton: {
    backgroundColor: colors.danger || '#ff3b30',
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    marginBottom: responsiveWidth(3),
  },
  deleteButtonDisabled: {
    backgroundColor: colors.danger + '80' || '#ff3b3080', // 50% opacity
  },
  deleteButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '600',
    color: colors.white,
  },
  cancelButton: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border || '#c7c7cc',
  },
  cancelButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
  },
});

export default ConfirmDeleteScreen;