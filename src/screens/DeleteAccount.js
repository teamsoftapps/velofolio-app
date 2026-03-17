import DestructiveActionPage from '../components/DistructiveActionPage';

function DeleteAccountScreen({ navigation }) {
  return (
    <DestructiveActionPage
      title="Delete My Account"
      headline="Are you sure you want to delete your account?"
      warnings={[
        "We're sorry to see you go. Deleting your account will permanently remove your profile, projects, clients, payments, and all associated data from our system.",
        "This action cannot be undone.",
        "If you're experiencing an issue, our support team may be able to help before you decide to leave.",
      ]}
      onBack={() => navigation.goBack()}
      onPrimaryAction={() => {
        // Handle account deletion
        console.log('Deleting account...');
      }}
      primaryActionText="Delete Account"
      onSecondaryAction={() => navigation.goBack()}
      secondaryActionText="Go Back"
      dataExport={{
        show: true,
        title: "Download My Data",
        description: "Want a copy of your data before leaving? You can download a full export of your projects, clients, and invoices.",
        linkText: "Download My Data",
        onLinkPress: () => navigation.navigate('DownloadData'),
      }}
      support={{
        show: true,
        text: "Contact Support",
        onPress: () => navigation.navigate('Support'),
      }}
    />
  );
}
export default DeleteAccountScreen;