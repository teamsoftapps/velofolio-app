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
import { rs, rh } from '../utils/dimensions';

const InvoiceActionsModal = ({ visible, onClose, onAction }) => {
  const actions = [
    {
      id: 'paid',
      label: 'Mark as Paid',
      icon: 'check-circle',
      color: '#111827',
    },
    {
      id: 'download',
      label: 'Download Invoice PDF',
      icon: 'download',
      color: '#111827',
    },
    {
      id: 'status',
      label: 'Change Invoice Status',
      icon: 'refresh-cw',
      color: '#111827',
    },
    {
      id: 'delete',
      label: 'Delete Invoice',
      icon: 'trash-2',
      color: '#EF4444',
      isDestructive: true,
    },
  ];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.indicator} />
          
          <View style={styles.actionsContainer}>
            {actions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.actionButton}
                activeOpacity={0.7}
                onPress={() => {
                  onAction && onAction(action.id);
                  onClose();
                }}
              >
                <Feather 
                  name={action.icon} 
                  size={rs(18)} 
                  color={action.color} 
                  style={styles.icon} 
                />
                <Typography style={[styles.actionText, { color: action.color }]}>
                  {action.label}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(32),
    borderTopRightRadius: rs(32),
    paddingHorizontal: rs(20),
    paddingBottom: rh(40),
    paddingTop: rs(12),
  },
  indicator: {
    width: rs(40),
    height: rs(4),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(2),
    alignSelf: 'center',
    marginBottom: rs(24),
  },
  actionsContainer: {
    width: '100%',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    marginBottom: rs(12),
  },
  icon: {
    marginRight: rs(8),
  },
  actionText: {
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default InvoiceActionsModal;
