import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import Button from './Button';
import { rs, rh } from '../utils/dimensions';

const MemberSuccessModal = ({ visible, onClose, onDone, onInviteAnother }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Feather name="check" size={rs(40)} color="#FFFFFF" />
            </View>
          </View>

          <Typography style={styles.title}>
            Team Member{'\n'}Added Successfully
          </Typography>
          
          <Typography style={styles.subtitle}>
            They're now part of your workspace.
          </Typography>

          <View style={styles.buttonContainer}>
            <Button
              title="Done"
              onPress={onDone}
              style={styles.doneButton}
            />
            <Button
              title="Invite Another Member"
              variant="outline"
              onPress={onInviteAnother}
              style={styles.inviteButton}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rs(20),
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(32),
    padding: rs(32),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  iconContainer: {
    marginBottom: rs(24),
  },
  iconCircle: {
    width: rs(80),
    height: rs(80),
    borderRadius: rs(40),
    backgroundColor: '#FFB800', // Yellow/Orange color from design
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: rs(6),
    borderColor: '#FFFBE6', // Lighter ring around the circle
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    lineHeight: rs(32),
    marginBottom: rs(12),
  },
  subtitle: {
    fontSize: rs(16),
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: rs(32),
  },
  buttonContainer: {
    width: '100%',
  },
  doneButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    height: rs(56),
    marginBottom: rs(4),
  },
  inviteButton: {
    borderColor: '#D1D5DB',
    borderRadius: rs(28),
    height: rs(56),
  },
});

export default MemberSuccessModal;
