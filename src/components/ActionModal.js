import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

export default function ActionModal({ setModal, modal }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => setModal(false)}
    >
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        activeOpacity={1}
        onPress={() => setModal(false)}
      >
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
      </TouchableOpacity>

      {/* The White List Container */}
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.option}>
          <Feather name="plus" size={responsiveWidth(5)} color={colors.black} />
          <Text style={styles.optionText}>Add New Job</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Feather name="plus" size={responsiveWidth(5)} color={colors.black} />
          <Text style={styles.optionText}>Add New Lead</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Feather name="plus" size={responsiveWidth(5)} color={colors.black} />
          <Text style={styles.optionText}>Add New Client</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, { marginBottom: 0 }]}>
          <Feather name="plus" size={responsiveWidth(5)} color={colors.black} />
          <Text style={styles.optionText}>Add New Member</Text>
        </TouchableOpacity>
      </View>

      {/* X Action Button matching Tab bar */}
      <View style={styles.closeButtonWrapper}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModal(false)}
          activeOpacity={0.85}
        >
          <Ionicons name="close" size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: responsiveHeight(14.5),
    left: responsiveWidth(5),
    right: responsiveWidth(5),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(3),
  },
  option: {
    backgroundColor: '#F3F4F6', // light grey background matching screenshot
    paddingVertical: responsiveHeight(1.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(1.5),
    marginBottom: responsiveHeight(1.5),
    gap: responsiveWidth(3), // space between plus and text
  },
  optionText: {
    textAlign: "center",
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
    color: '#111827',
  },
  closeButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: responsiveHeight(2.8),
    alignItems: 'center',
    zIndex: 10,
  },
  closeButton: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00B1E7', // A soft blue shadow to match tab bar center button glow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});