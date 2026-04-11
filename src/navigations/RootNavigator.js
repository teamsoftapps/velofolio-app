import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthNavigator from './AuthNavigator';
import MainStack from "../navigations/MainStack"

const RootNavigator = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(u => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return null;

  return user ? <MainStack /> : <AuthNavigator />;
};

export default RootNavigator;
