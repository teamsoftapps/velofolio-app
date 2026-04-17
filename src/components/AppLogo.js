import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AppLogo = ({ size = 'default' }) => {
  const isSmall = size === 'small';

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/applogo.png')}
        style={isSmall ? styles.logoSmall : styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  logo: {
    width: 140,
    height: 60,
  },
  logoSmall: {
    width: 110,
    height: 30,
  },
});

export default AppLogo;
