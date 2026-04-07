import SubSettingsPage from '../components/SubSettingPage';
import colors from '../utils/colors';

function EmailSenderSettingsScreen({ navigation }) {
  const sections = [
    {
      title: 'Business',
      items: [
        { 
          icon: 'mail-outline', 
          iconType: 'Ion', 
          title: 'Default Email',
          value: 'no-reply@velofolio.app',
          onPress: () => navigation.navigate('DefaultEmail')
        },
        { 
          icon: 'logo-google', 
          iconType: 'Ion', 
          title: 'Gmail',
          badge: 'RECOMMENDED',
          onPress: () => navigation.navigate('GmailSettings')
        },
      ],
    },
  ];

  return (
    <SubSettingsPage
      title="Email Sender Settings"
      onBack={() => navigation.goBack()}
      sections={sections}
      colors={{
        background: '#f8f9fa',
        headerBg: '#ffffff',
        sectionBg: '#ffffff',
        textPrimary: '#222222',
        textSecondary: '#8e8e93',
        iconColor: '#444444',
        chevronColor: '#999999',
        badgeBg: colors.greenPrimary,      // Green for recommended
        badgeText: '#ffffff',    // White text on green
        headerText: '#8e8e93',
      }}
    />
  );
}

export default EmailSenderSettingsScreen;   