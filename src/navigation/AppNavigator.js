import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import MainNavigator from './MainNavigator';
import AddJobScreen from '../screens/stack/AddJobScreen';
import AddLeadScreen from '../screens/stack/AddLeadScreen';
import AddInvoiceScreen from '../screens/stack/AddInvoiceScreen';
import AddQuoteScreen from '../screens/stack/AddQuoteScreen';
import AddClientScreen from '../screens/stack/AddClientScreen';
import AddMemberScreen from '../screens/stack/AddMemberScreen';
import QuoteDetailScreen from '../screens/stack/QuoteDetailScreen';
import JobProfileScreen from '../screens/stack/JobProfileScreen';
import TeamScreen from '../screens/stack/TeamScreen';
import LeadsScreen from '../screens/stack/LeadsScreen';
import SettingsScreen from '../screens/stack/SettingsScreen';
import PaymentsScreen from '../screens/stack/PaymentsScreen';
import ReportsScreen from '../screens/stack/ReportsScreen';
import HelpCentreScreen from '../screens/stack/HelpCentreScreen';
import ContactSupportScreen from '../screens/stack/ContactSupportScreen';
import AppUpdateScreen from '../screens/stack/AppUpdateScreen';
import ClientProfileScreen from '../screens/stack/ClientProfileScreen';
import TeamProfileScreen from '../screens/stack/TeamProfileScreen';
import SendEmailScreen from '../screens/stack/SendEmailScreen';
import CompanyProfileScreen from '../screens/stack/CompanyProfileScreen';
import SecurityPasswordScreen from '../screens/stack/SecurityPasswordScreen';
import EmailNotificationsScreen from '../screens/stack/EmailNotificationsScreen';
import RolesPermissionsScreen from '../screens/stack/RolesPermissionsScreen';
import BrandingCustomizationScreen from '../screens/stack/BrandingCustomizationScreen';
import PaymentsBillingScreen from '../screens/stack/PaymentsBillingScreen';
import GoalsReportsScreen from '../screens/stack/GoalsReportsScreen';
import SystemPreferencesScreen from '../screens/stack/SystemPreferencesScreen';
import ChangePasswordScreen from '../screens/stack/ChangePasswordScreen';
import AccountRecoveryScreen from '../screens/stack/AccountRecoveryScreen';
import TwoFactorAuthScreen from '../screens/stack/TwoFactorAuthScreen';
import ActiveSessionsScreen from '../screens/stack/ActiveSessionsScreen';
import DeleteAccountScreen from '../screens/stack/DeleteAccountScreen';
import EmailSettingsScreen from '../screens/stack/EmailSettingsScreen';
import EmailSenderSettingsScreen from '../screens/stack/EmailSenderSettingsScreen';
import NotificationPreferencesScreen from '../screens/stack/NotificationPreferencesScreen';
import EmailTemplatesScreen from '../screens/stack/EmailTemplatesScreen';
import RoleAdminScreen from '../screens/stack/RoleAdminScreen';
import RoleManagerScreen from '../screens/stack/RoleManagerScreen';
import RoleEditorScreen from '../screens/stack/RoleEditorScreen';
import CurrentPlanScreen from '../screens/stack/CurrentPlanScreen';
import BillingHistoryScreen from '../screens/stack/BillingHistoryScreen';
import PaymentMethodsScreen from '../screens/stack/PaymentMethodsScreen';
import AddPaymentCardScreen from '../screens/stack/AddPaymentCardScreen';
import UpgradePlanScreen from '../screens/stack/UpgradePlanScreen';
import UpgradeBusinessScreen from '../screens/stack/UpgradeBusinessScreen';
import GoalsDashboardScreen from '../screens/stack/GoalsDashboardScreen';
import ReportingPreferencesScreen from '../screens/stack/ReportingPreferencesScreen';
import GeneralSettingsScreen from '../screens/stack/GeneralSettingsScreen';
import JobPaymentDefaultsScreen from '../screens/stack/JobPaymentDefaultsScreen';
import WorkflowSettingsScreen from '../screens/stack/WorkflowSettingsScreen';
import FilesAutomationScreen from '../screens/stack/FilesAutomationScreen';
import RecoveryEmailScreen from '../screens/stack/RecoveryEmailScreen';
import BackupPhoneScreen from '../screens/stack/BackupPhoneScreen';
import AddPhoneNumberScreen from '../screens/stack/AddPhoneNumberScreen';
import Verify2FAScreen from '../screens/stack/Verify2FAScreen';
import BeforeYouGoScreen from '../screens/stack/BeforeYouGoScreen';
import ConfirmAccountDeletionScreen from '../screens/stack/ConfirmAccountDeletionScreen';
import DefaultEmailScreen from '../screens/stack/DefaultEmailScreen';
import GmailConnectScreen from '../screens/stack/GmailConnectScreen';
import EditEmailTemplateScreen from '../screens/stack/EditEmailTemplateScreen';
import LanguageScreen from '../screens/stack/LanguageScreen';
import DateFormatScreen from '../screens/stack/DateFormatScreen';
import TimeFormatScreen from '../screens/stack/TimeFormatScreen';
import CurrencyScreen from '../screens/stack/CurrencyScreen';
import InvoiceNumberFormatScreen from '../screens/stack/InvoiceNumberFormatScreen';
import CancelSubscriptionScreen from '../screens/stack/CancelSubscriptionScreen';
import HelpUsImproveScreen from '../screens/stack/HelpUsImproveScreen';
import AffordableOptionsScreen from '../screens/stack/AffordableOptionsScreen';
import SwitchToStarterScreen from '../screens/stack/SwitchToStarterScreen';
import InvoiceDetailScreen from '../screens/stack/InvoiceDetailScreen';
import SendInvoiceScreen from '../screens/stack/SendInvoiceScreen';
import NotificationsScreen from '../screens/stack/NotificationsScreen';
import CustomDrawerContent from '../components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="MainTabs" component={MainNavigator} />
      <Stack.Screen name="AddJob" component={AddJobScreen} />
      <Stack.Screen name="AddLead" component={AddLeadScreen} />
      <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} />
      <Stack.Screen name="AddQuote" component={AddQuoteScreen} />
      <Stack.Screen name="AddClient" component={AddClientScreen} />
      <Stack.Screen name="AddMember" component={AddMemberScreen} />
      <Stack.Screen name="JobProfile" component={JobProfileScreen} />
      <Stack.Screen name="ClientProfile" component={ClientProfileScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Leads" component={LeadsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
      <Stack.Screen name="HelpCentre" component={HelpCentreScreen} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      <Stack.Screen name="AppUpdate" component={AppUpdateScreen} />
      <Stack.Screen name="SendEmail" component={SendEmailScreen} />
      <Stack.Screen name="TeamProfile" component={TeamProfileScreen} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfileScreen} />
      <Stack.Screen
        name="SecurityPassword"
        component={SecurityPasswordScreen}
      />
      <Stack.Screen
        name="EmailNotifications"
        component={EmailNotificationsScreen}
      />
      <Stack.Screen
        name="RolesPermissions"
        component={RolesPermissionsScreen}
      />
      <Stack.Screen
        name="BrandingCustomization"
        component={BrandingCustomizationScreen}
      />
      <Stack.Screen name="PaymentsBilling" component={PaymentsBillingScreen} />
      <Stack.Screen name="GoalsReports" component={GoalsReportsScreen} />
      <Stack.Screen
        name="SystemPreferences"
        component={SystemPreferencesScreen}
      />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="AccountRecovery" component={AccountRecoveryScreen} />
      <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuthScreen} />
      <Stack.Screen name="ActiveSessions" component={ActiveSessionsScreen} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
      <Stack.Screen name="EmailSettings" component={EmailSettingsScreen} />
      <Stack.Screen
        name="EmailSenderSettings"
        component={EmailSenderSettingsScreen}
      />
      <Stack.Screen
        name="NotificationPreferences"
        component={NotificationPreferencesScreen}
      />
      <Stack.Screen name="EmailTemplates" component={EmailTemplatesScreen} />
      <Stack.Screen name="RoleAdmin" component={RoleAdminScreen} />
      <Stack.Screen name="RoleManager" component={RoleManagerScreen} />
      <Stack.Screen name="RoleEditor" component={RoleEditorScreen} />
      <Stack.Screen name="CurrentPlan" component={CurrentPlanScreen} />
      <Stack.Screen name="BillingHistory" component={BillingHistoryScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen name="AddPaymentCard" component={AddPaymentCardScreen} />
      <Stack.Screen name="UpgradePlan" component={UpgradePlanScreen} />
      <Stack.Screen name="UpgradeBusiness" component={UpgradeBusinessScreen} />
      <Stack.Screen name="GoalsDashboard" component={GoalsDashboardScreen} />
      <Stack.Screen
        name="ReportingPreferences"
        component={ReportingPreferencesScreen}
      />
      <Stack.Screen name="GeneralSettings" component={GeneralSettingsScreen} />
      <Stack.Screen
        name="JobPaymentDefaults"
        component={JobPaymentDefaultsScreen}
      />
      <Stack.Screen
        name="WorkflowSettings"
        component={WorkflowSettingsScreen}
      />
      <Stack.Screen name="FilesAutomation" component={FilesAutomationScreen} />
      <Stack.Screen name="RecoveryEmail" component={RecoveryEmailScreen} />
      <Stack.Screen name="BackupPhone" component={BackupPhoneScreen} />
      <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumberScreen} />
      <Stack.Screen name="Verify2FA" component={Verify2FAScreen} />
      <Stack.Screen name="BeforeYouGo" component={BeforeYouGoScreen} />
      <Stack.Screen
        name="ConfirmAccountDeletion"
        component={ConfirmAccountDeletionScreen}
      />
      <Stack.Screen name="DefaultEmail" component={DefaultEmailScreen} />
      <Stack.Screen name="GmailConnect" component={GmailConnectScreen} />
      <Stack.Screen
        name="EditEmailTemplate"
        component={EditEmailTemplateScreen}
      />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="DateFormat" component={DateFormatScreen} />
      <Stack.Screen name="TimeFormat" component={TimeFormatScreen} />
      <Stack.Screen name="Currency" component={CurrencyScreen} />
      <Stack.Screen
        name="InvoiceNumberFormat"
        component={InvoiceNumberFormatScreen}
      />
      <Stack.Screen
        name="CancelSubscription"
        component={CancelSubscriptionScreen}
      />
      <Stack.Screen name="HelpUsImprove" component={HelpUsImproveScreen} />
      <Stack.Screen
        name="AffordableOptions"
        component={AffordableOptionsScreen}
      />
      <Stack.Screen name="SwitchToStarter" component={SwitchToStarterScreen} />
      <Stack.Screen name="InvoiceDetail" component={InvoiceDetailScreen} />
      <Stack.Screen name="SendInvoice" component={SendInvoiceScreen} />
      <Stack.Screen name="QuoteDetail" component={QuoteDetailScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      id="DrawerNav"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: SCREEN_WIDTH * 0.78,
          borderTopRightRadius: 28,
          borderBottomRightRadius: 28,
        },
        overlayColor: 'rgba(0, 0, 0, 0.25)',
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="MainStack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
