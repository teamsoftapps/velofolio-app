import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ConfirmAccountDeletionScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleDelete = () => {
    setSuccessModalVisible(true);
    setTimeout(() => {
      setSuccessModalVisible(false);
      navigation.goBack();
    }, 3000);
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.pageTitle}>Confirm Account Deletion</Typography>
        <Typography style={styles.infoText}>This will permanently delete:</Typography>

        <View style={styles.bulletList}>
          <Typography style={styles.bulletItem}>• All projects and job history</Typography>
          <Typography style={styles.bulletItem}>• Client records and documents</Typography>
          <Typography style={styles.bulletItem}>• Payments and invoices</Typography>
          <Typography style={styles.bulletItem}>• Team data</Typography>
          <Typography style={styles.bulletItem}>• Account access</Typography>
        </View>

        <Typography style={styles.infoText}>This action is irreversible.</Typography>
        <Typography style={[styles.infoText, { color: '#111827', marginTop: rs(16) }]}>
          To confirm, enter your password below.
        </Typography>

        <Typography style={styles.inputLabel}>Password</Typography>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Feather name={passwordVisible ? "eye" : "eye-off"} size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={{ height: rh(60) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.deleteButton} 
          activeOpacity={0.9}
          onPress={handleDelete}
        >
          <Typography style={styles.deleteButtonText}>Permanently Delete Account</Typography>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cancelButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Typography style={styles.cancelButtonText}>Cancel</Typography>
        </TouchableOpacity>
      </View>

      {/* Success Scheduled Modal */}
      <Modal visible={successModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            
            <View style={styles.iconCircle}>
              <Feather name="check" size={rs(32)} color="#F59E0B" />
            </View>
            
            <Typography style={styles.modalDesc}>
              Your account will be scheduled for deletion in 14 days. You can log back in anytime during this period to restore it.
            </Typography>

          </View>
        </View>
      </Modal>

    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
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
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  pageTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(16),
  },
  infoText: {
    fontSize: rs(15),
    color: '#6B7280',
    marginBottom: rs(16),
  },
  bulletList: {
    marginBottom: rs(24),
  },
  bulletItem: {
    fontSize: rs(15),
    color: '#111827',
    marginBottom: rs(4),
  },
  inputLabel: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(8),
    marginTop: rs(8),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    height: rs(52),
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: rs(16),
    fontSize: rs(15),
    color: '#111827',
    height: '100%',
  },
  eyeIcon: {
    paddingHorizontal: rs(16),
    justifyContent: 'center',
    height: '100%',
  },
  
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  deleteButton: {
    backgroundColor: '#DC2626',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginBottom: rs(12),
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#111827',
    fontSize: rs(16),
    fontWeight: '500',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    padding: rs(30),
    alignItems: 'center',
  },
  iconCircle: {
    width: rs(64),
    height: rs(64),
    borderRadius: rs(32),
    borderWidth: rs(4),
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  modalDesc: {
    fontSize: rs(15),
    color: '#111827',
    textAlign: 'center',
    lineHeight: rs(22),
    fontWeight: '500',
  },
});

export default ConfirmAccountDeletionScreen;
