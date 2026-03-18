import { View } from 'react-native';
import FeatureSetupPage from '../components/FeaturePage';
import React from 'react';
function TwoFactorAuthScreen({ navigation,route }) {
const newPhone = route.params?.phone;

  const [phones, setPhones] = React.useState([]);

  React.useEffect(() => {
    if (newPhone) {
      setPhones(prev => {
        if (prev.includes(newPhone)) return prev;
        return [...prev, newPhone];
      });
    }
  }, [newPhone]);

  const isVerified = phones.length > 0;
  return (
    <FeatureSetupPage
      title="Two-Factor Authentication"
      isVerified={isVerified}
      phones={phones}
      onBack={() => navigation.navigate("SecuritynPasswords")}
      headline="Two-Factor Authentication"
      description="Add your phone number to receive a secure login code every time you sign in."
      actions={[
        {
          icon: 'call-outline',
          title: 'Add 2FA Phone Number',
          onPress: () => navigation.navigate('AddPhoneNumber'),
        },
      ]}
    />
    

  );
}
export default TwoFactorAuthScreen;