import SubSettingsPage from '../components/SubSettingPage';

function SecurityPasswordScreen({ navigation }) {
  const sections = [
    {
      title: 'Account Security',
      items: [
        { 
          icon: 'shield-checkmark-outline', 
          iconType: 'Ion', 
          title: 'Change Password',
          onPress: () => navigation.navigate('ChangePassword')
        },
        { 
          icon: 'lock-reset', 
        //   iconType: 'Ion', 
          title: 'Account Recovery',
          onPress: () => navigation.navigate('Recovery')
        },
        { 
          icon: 'lock', 
        //   iconType: 'Ion', 
          title: 'Two-Factor Authentication',
          badge: 'DISABLED',
          onPress: () => navigation.navigate('TwoFactor')
        },
        { 
          icon: 'chatbox-ellipses-outline', 
          iconType: 'Ion', 
          title: 'Active Sessions & Devices',
          onPress: () => navigation.navigate('Sessions')
        },
      ],
    },
    {
      title: 'Data & Safety',
      items: [
        { 
          icon: 'trash-outline', 
          iconType: 'Ion', 
          title: 'Delete My Account',
        //   danger: true,
          onPress: () => navigation.navigate('DeleteAccount')
        },
        { 
          icon: 'download-outline', 
          iconType: 'Ion', 
          title: 'Download My Data',
          onPress: () => navigation.navigate('DownloadData')
        },
      ],
    },
  ];

  return (
    <SubSettingsPage
      title="Security & Password"
      onBack={() => navigation.navigate("Settings")}
      sections={sections}
      colors={{
        background: '#f8f9fa',
        headerBg: '#ffffff',
        sectionBg: '#ffffff',
        textPrimary: '#222222',
        iconColor: '#444444',
        chevronColor: '#999999',
        badgeBg: '#e5e5ea',
        badgeText: '#8e8e93',
        headerText: '#8e8e93',
      }}
    />
  );
}
export default SecurityPasswordScreen;