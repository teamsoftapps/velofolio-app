import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import AuthGradient from '../components/AuthGradient';
import ScreenWrapper from '../components/ScreenWrapper';
import ButtonSimple from '../components/Button';
import CustomText from '../components/CustomText';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper edges={[]}>
      <AuthGradient style={styles.background}>
        <View style={styles.iconsContainer}>
          <Image
            source={require('../assets/welcome-icons.png')}
            style={styles.iconsImage}
            resizeMode="contain"
          />
        </View>

        <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, responsiveHeight(4)) }]}>
          <CustomText
            style={styles.title}
            fontWeight="600"
            color={colors.black}
          >
            Manage Projects,
            {'\n'}
            Payments & Teams,
            {'\n'}
            All in One Place
          </CustomText>

          <ButtonSimple
            title="Get Started"
            backgroundColor={colors.black}
            onPress={() => setModalVisible(true)}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </AuthGradient>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          />

          {/* Bottom card - on top */}
          <View style={styles.modalCard}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Image
                source={require('../assets/AppLogo.png')}
                style={styles.logo}
                resizeMode="contain"
              />

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CustomText style={styles.closeText}>×</CustomText>
              </TouchableOpacity>
            </View>

            <CustomText style={styles.modalTitle} fontWeight="800">
              Get Started
            </CustomText>

            <CustomText style={styles.modalSubtitle} color={colors.black}>
              Manage Projects, Payments & Teams — All in One Place
            </CustomText>

            <ButtonSimple
              textStyle={{ color: colors.white }}
              title="Continue with email"
              backgroundColor={colors.bluePrimary}
              onPress={() => {
                setModalVisible(false);
                navigation?.navigate('SignIn');
              }}
              style={styles.emailBtn}
            />

            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation?.navigate('SignIn');
              }}
              style={styles.googleBtn}
            >
              <Image
                source={require('../assets/Google.png')}
                style={styles.googleIcon}
                resizeMode="contain"
              />
              <CustomText style={styles.googleText} fontWeight="500">
                Sign in with Google
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  background: { flex: 1 },

  iconsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconsImage: {
    width: responsiveWidth(120),
    height: undefined,
    aspectRatio: 1,
  },

  bottomContainer: {
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },

  title: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },

  button: {
    width: responsiveWidth(90),
  },

  buttonText: {
    fontWeight: '300',
    fontSize: responsiveFontSize(2.2),
    color: colors.white,
  },

  /* ---------------- MODAL ---------------- */

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.transparent, // ✅ themed
  },

  modalCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(10),

    paddingHorizontal: responsiveWidth(6), // ✅ responsive
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(5),

    shadowColor: colors.shadow, // ✅ themed
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,

    marginBottom: responsiveHeight(2),
    marginHorizontal: responsiveWidth(4),
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2),
  },

  logo: {
    width: responsiveWidth(30),
  },

  closeText: {
    fontSize: responsiveFontSize(5),
    color: colors.textLight, // ✅ themed
  },

  modalTitle: {
    fontSize: responsiveFontSize(4.2),
    marginBottom: responsiveHeight(1),
    color: colors.black,
  },

  modalSubtitle: {
    width: responsiveWidth(60),
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(2),
    color: colors.black,
  },

  emailBtn: {
    marginBottom: responsiveHeight(2),
  },

  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.borderSoft, // ✅ themed
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7),

    backgroundColor: colors.white, // ✅ themed
  },

  googleIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginRight: responsiveWidth(3),
  },

  googleText: {
    fontSize: responsiveFontSize(2.1),
    color: colors.black,
  },
});

export default WelcomeScreen;
