import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import ScreenWrapper from '../components/ScreenWrapper';
import ButtonSimple from '../components/Button';
import CustomText from '../components/CustomText';
import colors from '../utils/colors';

const WelcomeScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../assets/welcome-gradient.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.iconsContainer}>
          <Image
            source={require('../assets/welcome-icons.png')}
            style={styles.iconsImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottomContainer}>
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
      </ImageBackground>

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
              title="Continue with email"
              backgroundColor={colors.bluePrimary}
              onPress={() => {
                setModalVisible(false);
                navigation?.navigate('SignUp');
              }}
              style={styles.emailBtn}
            />

            <TouchableOpacity style={styles.googleBtn}>
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
    paddingBottom: responsiveHeight(4),
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },
  button: { width: responsiveWidth(90) },
  buttonText: { fontWeight: '300', fontSize: responsiveFontSize(2.2) },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  modalCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(10),
    paddingHorizontal: 24,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: responsiveWidth(1),
    shadowRadius: responsiveWidth(4),
    elevation: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    marginHorizontal: responsiveHeight(2),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2),
  },
  logo: { width: responsiveWidth(30) },
  appName: {
    fontSize: responsiveFontSize(2.6),
    marginLeft: responsiveWidth(2),
    flex: 1,
  },
  closeText: { fontSize: responsiveFontSize(5), color: '#999' },
  modalTitle: {
    fontSize: responsiveFontSize(4.2),
    marginBottom: responsiveHeight(1),
  },
  modalSubtitle: {
    width: responsiveWidth(60),
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(2),
  },
  emailBtn: { marginBottom: responsiveHeight(2) },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.5),
    borderColor: '#E0E0E0',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7),
    backgroundColor: '#fff',
  },
  googleIcon: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    marginRight: responsiveWidth(3),
  },
  googleText: { fontSize: responsiveFontSize(2.1), color: colors.black },
});

export default WelcomeScreen;
