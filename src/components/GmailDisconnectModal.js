import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomText from './CustomText';
import ButtonSimple from './Button';

const GmailDisconnectModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Gmail icon using Vector Icons */}
          <MaterialCommunityIcons 
            name="gmail" 
            size={responsiveWidth(18)} 
            color="#EA4335" 
            style={styles.logo}
          />

          {/* Title */}
          <CustomText style={styles.title}>Disconnect</CustomText>

          {/* Description */}
          <CustomText style={styles.description}>
            Are you sure you want to disconnect your Google account?
          </CustomText>

          {/* Action Buttons */}
          <ButtonSimple
            title="Yes, Disconnect"
            onPress={onConfirm}
            style={styles.confirmButton}
            textStyle={styles.confirmButtonText}
          />

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <CustomText style={styles.cancelButtonText}>Cancel</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: responsiveWidth(85),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(6),
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logo: {
    marginBottom: responsiveHeight(2.5),
  },
  title: {
    fontSize: responsiveFontSize(3.2),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1.5),
    textAlign: 'center',
  },
  description: {
    fontSize: responsiveFontSize(1.8),
    color: colors.textSecondary || '#666666',
    textAlign: 'center',
    marginBottom: responsiveHeight(4),
    lineHeight: responsiveHeight(2.6),
    paddingHorizontal: responsiveWidth(4),
  },
  confirmButton: {
    width: '100%',
    height: responsiveHeight(7.5),
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(8),
    marginBottom: responsiveHeight(1.5),
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  cancelButton: {
    width: '100%',
    height: responsiveHeight(7.5),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(8),
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: colors.textPrimary || '#222222',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
  },
});

export default GmailDisconnectModal;
