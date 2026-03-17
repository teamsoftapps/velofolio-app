import FeatureSetupPage from './components/FeatureSetupPage';

function TwoFactorAuthScreen({ navigation }) {
  return (
    <FeatureSetupPage
      title="Two-Factor Authentication"
      onBack={() => navigation.goBack()}
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