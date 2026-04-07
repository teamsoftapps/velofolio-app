import SubSettingsPage from '../components/SubSettingPage';

function EmailNotificationsScreen({ navigation }) {
  const sections = [
    {
      title: 'Email & Notifications',
      items: [
        { 
          icon: 'mail-outline', 
          iconType: 'Ion', 
          title: 'Email Settings',
          onPress: () => navigation.navigate('EmailSettings')
        },
        { 
          icon: 'at-outline', 
          iconType: 'Ion', 
          title: 'Email Sender Settings',
          onPress: () => navigation.navigate('EmailSenderSettings')
        },
        { 
          icon: 'notifications-outline', 
          iconType: 'Ion', 
          title: 'Notification Preferences',
          onPress: () => navigation.navigate('NotificationPrefrences')
        },
        { 
          icon: 'email-multiple-outline', 
          iconType: 'Mdi', 
          title: 'Email Templates',
          onPress: () => navigation.navigate('EmailTemplates')
        },
      ],
    },
  ];

  return (
    <SubSettingsPage
      title="Email & Notifications"
      onBack={() => navigation.goBack()}
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

export default EmailNotificationsScreen;