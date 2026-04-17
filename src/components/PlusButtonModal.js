import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const PlusButtonModal = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const options = [
    { label: 'Add New Job', icon: 'plus', route: 'AddJob' },
    { label: 'Add New Lead', icon: 'plus', route: 'AddLead' },
    { label: 'Add New Client', icon: 'plus', route: 'AddClient' },
    { label: 'Add New Member', icon: 'plus', route: 'AddMember' },
  ];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.optionItem}
                    activeOpacity={0.7}
                    onPress={() => {
                      onClose();
                      if (option.route) {
                        navigation.navigate(option.route);
                      }
                    }}
                  >
                    <Feather name={option.icon} size={20} color="#111827" style={{ marginRight: 12 }} />
                    <Text style={styles.optionLabel}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={onClose}
                activeOpacity={0.9}
              >
                <Feather name="x" size={28} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: Platform.OS === 'ios' ? 120 : 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    marginBottom: 10,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  closeButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 42 : 30,
  },
});

export default PlusButtonModal;
