import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigations/RootNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import CustomText from './src/components/CustomText';
import Toast from 'react-native-toast-message';

GoogleSignin.configure({
  webClientId: '130588342127-kmrjq28tj7eodkio74imb0ouc1cdrdd1.apps.googleusercontent.com',
  offlineAccess: false,
});

const toastConfig = {
  customToast: ({ text1, text2, props }) => (
    <View style={{
      height: 60,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 12,
      paddingHorizontal: 15,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 8,
      borderLeftWidth: 5,
      borderLeftColor: props.status === 'success' ? '#4BB543' : props.status === 'error' ? '#FF0000' : '#3399FF'
    }}>
      <CustomText fontWeight="600" style={{ fontSize: 14 }}>{text1}</CustomText>
      {text2 ? <CustomText style={{ fontSize: 12, color: '#666' }}>{text2}</CustomText> : null}
    </View>
  )
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast config={toastConfig} visibilityTime={10000} />
    </GestureHandlerRootView>
  );
};

export default App;
