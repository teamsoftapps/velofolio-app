import { View, StyleSheet, Image } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { GRADIENT_COLORS } from '../../constants/theme';

import { rs, rh } from '../../utils/dimensions';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/onboarding.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Typography style={styles.title}>
          Manage Projects,{'\n'}Payments & Teams,{'\n'}All in One Place
        </Typography>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignIn')}
          variant="primary"
          style={styles.button}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: rs(30),
  },
  imageContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: rh(20),
  },
  image: {
    width: rs(375) * 1.2,
    height: '100%',
    transform: [{ scale: 1.25 }],
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rs(10),
  },
  title: {
    fontSize: rs(28),
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    lineHeight: rs(38),
  },
  buttonContainer: {
    padding: rs(20),
    width: '100%',
  },
  button: {
    width: '100%',
    height: rh(60),
    borderRadius: rs(30),
  },
});

export default OnboardingScreen;
