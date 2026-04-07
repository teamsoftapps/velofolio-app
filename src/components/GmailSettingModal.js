import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, TouchableOpacity, View, Modal,
  Animated, Easing
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import InputField from '../components/InputField';
import ButtonSimple from '../components/Button';

const GmailSettingsModal = ({ visible, onClose, onSave }) => {
  const [senderName, setSenderName] = useState('Lumiere Studio');
  const [connectedEmail, setConnectedEmail] = useState('hello@lumierestudio.com');
  const [loading, setLoading] = useState(false);

  const [animations] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    if (!loading) return;

    const loops = animations.map((anim, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(index * 150),
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
          }),
        ])
      );
    });

    loops.forEach(loop => loop.start());
    return () => loops.forEach(loop => loop.stop());
  }, [loading]);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSave?.({ senderName, connectedEmail });
      onClose?.();
    }, 3000);
  };

  const getDotStyle = (anim) => ({
    transform: [{ translateY: anim.interpolate({ inputRange: [0,1], outputRange: [0,-10] }) }],
  });

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}       // CONTROL VISIBILITY HERE
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        {loading && (
          <View style={styles.loaderOverlay}>
            <View style={styles.dotsContainer}>
              {animations.map((anim, i) => (
                <Animated.View
                  key={i}
                  style={[styles.dot, getDotStyle(anim), { marginRight: i < animations.length-1 ? responsiveWidth(2) : 0 }]}
                />
              ))}
            </View>
          </View>
        )}

        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Gmail Settings</Text>

          <InputField
            label="Sender Name (From)"
            value={senderName}
            onChangeText={setSenderName}
            containerStyle={styles.inputContainer}
          />

          <InputField
            label="Connected Email Address"
            value={connectedEmail}
            onChangeText={setConnectedEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.inputContainer}
          />

          <ButtonSimple
            title="Save Settings"
            onPress={handleSave}
            backgroundColor={'#00B1FF'}
            style={styles.saveButton}
            textStyle={styles.saveButtonText}
            disabled={loading}
          />

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
            disabled={loading}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: responsiveWidth(1.25),
    backgroundColor: colors.white,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(3),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: responsiveWidth(5.5),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: colors.grayMedium || '#d1d5db',
    marginBottom: responsiveHeight(2.5),
  },
  saveButton: {
    borderRadius: responsiveWidth(50),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    height: responsiveHeight(6.5),
    elevation: 3,
    shadowColor: '#00B1FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  saveButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: responsiveWidth(4.2),
  },
  cancelButton: {
    borderRadius: responsiveWidth(50),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingVertical: responsiveHeight(2),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  cancelButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
  },
});

export default GmailSettingsModal;