import SubSettingsPage from '../components/SubSettingPage';

function AccountRecoveryScreen({ navigation }) {
  const sections = [
    {
      title: 'Business',
      items: [
        { 
          icon: 'email-multiple', 
          iconType: 'Mdi', 
          title: 'Recovery Email',
          value: 'demo@email.com',
          onPress: () => navigation.navigate('RecoveryEmail')
        },
        { 
          icon: 'backup-restore', 
          iconType: 'Mdi', 
          title: 'Backup Phone Number',
          onPress: () => navigation.navigate('BackupPhone')
        },
      ],
    },
  ];

  return (
    <SubSettingsPage
      title="Account Recovery"
      onBack={() => navigation.goBack()}
      sections={sections}
      colors={{
        background: '#f8f9fa',
        headerBg: '#ffffff',
        sectionBg: '#ffffff',
        textPrimary: '#222222',
        textSecondary: '#8e8e93',
        iconColor: '#444444',
        chevronColor: '#c7c7cc',
        headerText: '#8e8e93',
      }}
    />
  );
}

export default AccountRecoveryScreen;