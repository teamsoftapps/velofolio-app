import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomText from './CustomText';

const IncrementDecrementModal = ({
  visible,
  onClose,
  title,
  description,
  value,
  onIncrement,
  onDecrement,
  onSave,
  suffix = '',
  unit = '',
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <CustomText style={styles.title}>{title}</CustomText>
              <CustomText style={styles.description}>{description}</CustomText>

              <View style={styles.controlsRow}>
                <TouchableOpacity
                  style={styles.controlButton}
                  onPress={onDecrement}
                  activeOpacity={0.7}
                >
                  <Ionicons name="remove" size={24} color="#333" />
                </TouchableOpacity>

                <View style={styles.valueDisplay}>
                  <CustomText style={styles.valueText}>
                    {value}{suffix}
                  </CustomText>
                </View>

                <TouchableOpacity
                  style={styles.controlButton}
                  onPress={onIncrement}
                  activeOpacity={0.7}
                >
                  <Ionicons name="add" size={24} color="#333" />
                </TouchableOpacity>
              </View>

              {unit ? <CustomText style={styles.unitText}>{unit}</CustomText> : null}

              <TouchableOpacity
                style={styles.saveButton}
                onPress={onSave}
                activeOpacity={0.8}
              >
                <CustomText style={styles.saveButtonText}>Save</CustomText>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: responsiveWidth(85),
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: responsiveFontSize(1.8),
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueDisplay: {
    minWidth: 90,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color: '#000',
  },
  unitText: {
    fontSize: responsiveFontSize(1.6),
    color: '#999',
    marginBottom: 24,
  },
  saveButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#00B1FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
});

export default IncrementDecrementModal;
