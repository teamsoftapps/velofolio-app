import React, { useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur'; // expo install expo-blur  (or use @react-native-community/blur for bare RN)
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');
import CheckMark from "../components/Checkmark"


const SuccessModal = ({
  visible,
  onClose,
  onInviteAnother,
  title = "Team Member",
  titleBold = "Added Successfully",
  subtitle = "They're now part of your workspace.",
  buttonText = "Done",
  secondaryButtonText = "Invite Another Member",
  showSecondaryButton = true,
  showButtons = true,
  subtitleStyle,
}) => {
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      {/* Backdrop with blur */}
      <BlurView
        intensity={80}
        tint="dark"
        style={StyleSheet.absoluteFill}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              {
                opacity: opacityAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
         
<CheckMark/>
            {title && <Text style={styles.title}>{title}</Text>}
            {titleBold && <Text style={styles.titleBold}>{titleBold}</Text>}

            <Text style={styles.subtitle}>
              {subtitle}
            </Text>

            {showButtons && (
              <>
                {/* Done button */}
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={onClose}
                  activeOpacity={0.9}
                >
                  <Text style={styles.doneButtonText}>{buttonText}</Text>
                </TouchableOpacity>

                {/* Optional secondary button */}
                {showSecondaryButton && onInviteAnother && (
                  <TouchableOpacity
                    style={styles.inviteButton}
                    onPress={() => {
                      onClose();
                      onInviteAnother();
                    }}
                    activeOpacity={0.9}
                  >
                    <Text style={styles.inviteButtonText}>{secondaryButtonText}</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </Animated.View>
        </TouchableOpacity>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)', // extra darkness under blur
  },
  modalContainer: {
    width: responsiveHeight(42),
    maxWidth: 380,
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(6),
    alignItems: 'center',
  
  },
  sparkles: {
    position: 'relative',
    marginBottom: 24,
  },
  mainSparkle: {
    transform: [{ rotate: '-15deg' }],
  },
  smallSparkle1: {
    position: 'absolute',
    top: -12,
    right: -16,
    transform: [{ rotate: '30deg' }],
  },
  smallSparkle2: {
    position: 'absolute',
    bottom: -8,
    left: -10,
    transform: [{ rotate: '45deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
  titleBold: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayDark,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  doneButton: {
    width: '100%',
    backgroundColor: colors.blueAccent,
    borderRadius: responsiveWidth(10),
    paddingVertical: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1),
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  inviteButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: responsiveWidth(10),
    paddingVertical:responsiveHeight(1.3),
    alignItems: 'center',
  },
  inviteButtonText: {
    color: '#374151',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
});

export default SuccessModal;