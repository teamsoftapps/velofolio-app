import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Typography from './Typography';
import { rs, rh } from '../utils/dimensions';

const STATUS_OPTIONS = [
  { label: 'Pending', color: '#9CA3AF' },
  { label: 'In Progress', color: '#38BDF8' },
  { label: 'Review', color: '#F59E0B' },
  { label: 'Completed', color: '#34D399' },
  { label: 'On Hold', color: '#FBBF24' },
  { label: 'Cancelled', color: '#EF4444' },
];

const SetStatusModal = ({ visible, onClose, currentStatus, onSelect }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus || 'In Progress');

  const handleDone = () => {
    onSelect(selectedStatus);
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer}>
          <Typography style={styles.title}>Set Status</Typography>

          <View style={styles.optionsContainer}>
            {STATUS_OPTIONS.map((item) => {
              const isSelected = selectedStatus === item.label;
              return (
                <TouchableOpacity
                  key={item.label}
                  style={[
                    styles.statusItem,
                    isSelected && styles.selectedStatusItem,
                  ]}
                  onPress={() => setSelectedStatus(item.label)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.dot, { backgroundColor: item.color }]} />
                  <Typography style={styles.statusLabel}>{item.label}</Typography>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.doneButton}
            onPress={handleDone}
            activeOpacity={0.8}
          >
            <Typography style={styles.doneButtonText}>Done</Typography>
          </TouchableOpacity>
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
    padding: rs(24),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#000000',
    marginBottom: rs(24),
  },
  optionsContainer: {
    width: '100%',
    marginBottom: rs(24),
  },
  statusItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: rs(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(12),
    marginBottom: rs(8),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedStatusItem: {
    borderColor: '#000000',
    backgroundColor: '#F3F4F6',
  },
  dot: {
    width: rs(10),
    height: rs(10),
    borderRadius: rs(5),
    marginRight: rs(10),
  },
  statusLabel: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#000000',
  },
  doneButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    paddingVertical: rs(16),
    borderRadius: rs(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rs(8),
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: rs(18),
    fontWeight: '700',
  },
});

export default SetStatusModal;
