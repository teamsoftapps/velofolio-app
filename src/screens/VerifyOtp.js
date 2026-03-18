// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ImageBackground,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';

// import ScreenWrapper from '../components/ScreenWrapper';
// import CustomText from '../components/CustomText';
// import ButtonSimple from '../components/Button';
// import OTPInput from '../components/OTPInput';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import colors from '../utils/colors';
// import { useNavigation } from '@react-navigation/native';

// const VerifyOtp = () => {
//   const navigation = useNavigation();
//   const [otp, setOtp] = useState('');

//   return (
//     <ScreenWrapper backgroundColor="transparent">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <ImageBackground
//           source={require('../assets/authbg.png')}
//           style={styles.bg}
//           resizeMode="cover"
//         >
//           <View style={styles.container}>
//             {/* Back */}
//             <TouchableOpacity
//               style={styles.backBtn}
//               onPress={() => navigation.goBack()}
//               activeOpacity={0.8}
//             >
//               <Ionicons
//                 name="arrow-back-outline"
//                 size={responsiveFontSize(2.8)}
//                 color={colors.black}
//               />
//             </TouchableOpacity>

//             {/* Title */}
//             <CustomText style={styles.title} fontWeight="700">
//               Verify Your Account
//             </CustomText>

//             {/* Subtitle */}
//             <CustomText style={styles.subtitle}>
//               Enter the 4-digit code we just sent to{'\n'}
//               <CustomText fontWeight="600">
//                 your email noah@gmail.com
//               </CustomText>
//             </CustomText>

//             {/* OTP */}
//             <OTPInput value={otp} setValue={setOtp} />

//             {/* Button */}
//             <ButtonSimple
//               textStyle={{ color: colors.white }}
//               onPress={() => {
//                 navigation.navigate('newpassword');
//               }}
//               title="Verify & Continue"
//               backgroundColor={colors.black}
//               disabled={otp.length !== 4}
//             />

//             {/* Resend */}
//             <TouchableOpacity style={styles.resendRow}>
//               <CustomText color={colors.textSecondary}>
//                 Didn't get the code?{' '}
//               </CustomText>
//               <CustomText color={colors.black} fontWeight="600">
//                 Resend Code
//               </CustomText>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </ScrollView>
//     </ScreenWrapper>
//   );
// };

// export default VerifyOtp;
// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//     width: '100%',
//   },

//   container: {
//     flex: 1,
//     paddingHorizontal: responsiveWidth(7),
//     paddingTop: responsiveHeight(4),
//   },

//   backBtn: {
//     width: responsiveWidth(11),
//     height: responsiveWidth(11),
//     borderColor: colors.black,
//     borderWidth: responsiveWidth(0.5),
//     borderRadius: responsiveWidth(4),
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: responsiveHeight(3),
//   },

//   backIcon: {
//     fontSize: responsiveFontSize(5),
//   },

//   title: {
//     fontSize: responsiveFontSize(3.5),
//     marginBottom: responsiveHeight(1),
//   },

//   subtitle: {
//     fontSize: responsiveFontSize(1.9),
//     color: colors.textSecondary,
//   },

//   resendRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: responsiveHeight(4),
//   },
// });





import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/CustomText';
import ButtonSimple from '../components/Button';
import OTPInput from '../components/OTPInput';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';


  const VerifyOtp = ({ route }) => {
    const { type = 'default' } = route.params || {};
    const { phone } = route.params || {};
    const isTFA = type === 'TFA';
    // const isTFA = type === 'TFA';
    
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
  return (
    <ScreenWrapper backgroundColor={isTFA ? colors.grayLight : 'transparent'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {isTFA ? (
          // TFA: Gray background, no image
          <View style={[styles.container, styles.tfaContainer]}>
            {/* Back */}
       <View style={styles.headWrapper}>
        <CustomHeader title="Verify" />

      </View>
            {/* Title - "Verify" for TFA */}
            <CustomText
              style={[
                styles.title,
                isTFA && { textAlign: 'center', color: colors.black,fontSize:responsiveFontSize(3) },
              ]}
              fontWeight="500"
            >
              {isTFA ? 'OTP VERIFICATION' : 'Verify Your Account'}
            </CustomText>

            {/* Subtitle */}
            <CustomText
              style={[
                styles.subtitle,
                isTFA && { textAlign: 'center' },
              ]}
            >
              {isTFA ? (
                <>
                  Enter the 4-digit code we just sent to{'\n'}
                  your phone number{' '}
                  <CustomText fontWeight="600">+1 (514) 550-3281</CustomText>
                </>
              ) : (
                <>
                  Enter the 4-digit code we just sent to{'\n'}
                  <CustomText fontWeight="600">
                    your email noah@gmail.com
                  </CustomText>
                </>
              )}
            </CustomText>

            {/* OTP */}
            <View style={isTFA && styles.tfaOtpWrapper}>
              <OTPInput 
                value={otp} 
                setValue={setOtp} 
                style={isTFA && styles.tfaOtpInput}
              />
            </View>

            {/* Button */}
            <ButtonSimple
              textStyle={{ color: colors.white }}
              onPress={() => {
               navigation.navigate('TwoFactor', {
  phone,
});
              }}
              title="Verify & Continue"
              backgroundColor={isTFA ? colors.blueAccent : colors.black}
              // disabled={otp.length !== 4}
            />

            {/* Resend */}
            <TouchableOpacity style={styles.resendRow}>
              <CustomText color={colors.textSecondary}>
                Didn't get the code?{' '}
              </CustomText>
              <CustomText color={isTFA ? colors.primary : colors.black} fontWeight="600">
                Resend Code
              </CustomText>
            </TouchableOpacity>
          </View>
        ) : (
          // Default: Image background
          <ImageBackground
            source={require('../assets/authbg.png')}
            style={styles.bg}
            resizeMode="cover"
          >
            <View style={styles.container}>
              {/* Back */}
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="arrow-back-outline"
                  size={responsiveFontSize(2.8)}
                  color={colors.black}
                />
              </TouchableOpacity>

              {/* Title */}
              <CustomText style={styles.title} fontWeight="700">
                Verify Your Account
              </CustomText>

              {/* Subtitle */}
              <CustomText style={styles.subtitle}>
                Enter the 4-digit code we just sent to{'\n'}
                <CustomText fontWeight="600">
                  your email noah@gmail.com
                </CustomText>
              </CustomText>

              {/* OTP */}
              <OTPInput value={otp} setValue={setOtp} />

              {/* Button */}
              <ButtonSimple
                textStyle={{ color: colors.white }}
                onPress={() => {
                  navigation.navigate('newpassword');
                }}
                title="Verify & Continue"
                backgroundColor={colors.black}
                disabled={otp.length !== 4}
              />

              {/* Resend */}
              <TouchableOpacity style={styles.resendRow}>
                <CustomText color={colors.textSecondary}>
                  Didn't get the code?{' '}
                </CustomText>
                <CustomText color={colors.black} fontWeight="600">
                  Resend Code
                </CustomText>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
    paddingTop: responsiveHeight(2),
  },
header:{
// flex:1,
flexDirection:"row",
gap:responsiveWidth(3),
alignItems:"center",
},
headWrapper: {
    // backgroundColor: colors.white,
    // borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    // paddingVertical: responsiveWidth(3),
    // paddingHorizontal: responsiveWidth(3),
    marginBottom:responsiveHeight(1)
  },
  tfaContainer: {
    backgroundColor: colors.grayLight || '#f3f4f6',
    // justifyContent: 'center',
  },

  backBtn: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderColor: colors.black,
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },

  title: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(1),
  },

  subtitle: {
    fontSize: responsiveFontSize(1.9),
    color: colors.textSecondary,
    marginBottom: responsiveHeight(4),
  },

  tfaOtpWrapper: {
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
  },

  tfaOtpInput: {
    // Additional OTP input styles for TFA if needed
  },

  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
  },
});