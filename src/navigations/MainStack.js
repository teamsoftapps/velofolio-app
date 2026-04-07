import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';
import Teams from '../screens/Teams';
import CustomTabBar from '../components/CustomTabBar';
import ActonModal from '../components/ActionModal';
import VelofolioSidebar from '../components/Sidebar';
import ChangePassword from '../screens/ChangePassword';
import DeleteAccount from '../screens/DeleteAccount';
import SecuritynPassword from '../screens/SecuritynPassword';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import AddJobs from '../screens/AddJobs';
import AddClients from '../screens/AddClients';
import AddTeams from '../screens/AddTeams';
import Payments from '../screens/Payments';
import ReportAnalysis from '../screens/ReportAnalysis';
import ClientProfile from '../screens/ClientProfile';
import CompanyProfile from '../screens/CompanyProfileForm';
import TwoFactorAuthScreen from "../screens/TFA"
import AddPhone from "../screens/AddPhone"
import VerifyOtp from '../screens/VerifyOtp';
import Sessions from "../screens/Sessions"
import AccountRecoveryScreen from "../screens/AccountRecoveryScreen"
import DeleteFeedbackScreen from "../screens/DeleteFeedbackScreen"
import ConfirmDelete from "../screens/ConfirmDeleteScreen"
import EmailRecovery from "../screens/EmailRecovery"
import BackupPhoneScreen from "../screens/BackupPhone"
import VerifyPhoneMailOtp from "../screens/VerifyPhoneMailOtp"
import EmailnNotificationSettings from "../screens/EmailnNotificationSettings"
import EmailSettings from "../screens/EmailSettingsScreen"
import NotificationPrefrences from "../screens/NotificationPrefrences"
import DefaultEmailScreen from "../screens/DefaultEmailScreen";
import EmailSenderSettingsScreen from "../screens/EmailSenderSetting";
import GmailScreen from "../screens/GmailScreen";
import GmailConnectedScreen from "../screens/GmailConnected";
import GmailSettingPage from "../screens/GmailSettingPage";
import EmailTemplates from "../screens/EmailTemplates";
import EditEmailTemplate from "../screens/EditEmailTemplate";
import RolesPermissions from "../screens/RolesPermissions";
import RoleDetail from "../screens/RoleDetail";
import BrandingCustomization from "../screens/BrandingCustomization";
import PaymentsBilling from "../screens/PaymentsBilling";
import CurrentPlan from "../screens/CurrentPlan";
import CancelSubscription from "../screens/CancelSubscription";
import BillingHistory from "../screens/BillingHistory";
import PaymentMethods from "../screens/PaymentMethods";
import AddPaymentMethod from "../screens/AddPaymentMethod";
import GoalsReports from "../screens/GoalsReports";
import GoalsDashboard from "../screens/GoalsDashboard";
import ReportingPreferences from "../screens/ReportingPreferences";
import SystemPreferences from "../screens/SystemPreferences";
import GeneralSettings from "../screens/GeneralSettings";
import LanguageSettings from "../screens/LanguageSettings";
import DateFormatSettings from "../screens/DateFormatSettings";
import TimeFormatSettings from "../screens/TimeFormatSettings";
import CurrencySettings from "../screens/CurrencySettings";
import FirstDaySettings from "../screens/FirstDaySettings";
import JobPaymentDefaults from "../screens/JobPaymentDefaults";
import InvoiceFormatSettings from "../screens/InvoiceFormatSettings";
import WorkflowSettings from "../screens/WorkflowSettings";
import FilesAutomation from "../screens/FilesAutomation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabsNavigator() {
  const [modal, setModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <ActonModal modal={modal} setModal={setModal} />
      <VelofolioSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      >
        <Tab.Screen name="Home">{props => <HomeScreen {...props} setSidebarVisible={setSidebarVisible} />}</Tab.Screen>
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Teams" component={Teams} />
        <Tab.Screen name="Clients" component={ClientsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tabs */}
      <Stack.Screen name="Tabs" component={AppTabsNavigator} />

      {/* Global screens accessible from tabs */}
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="SecuritynPassword" component={SecuritynPassword} />
      <Stack.Screen name="DeleteFeedbackScreen" component={DeleteFeedbackScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ConfirmDelete" component={ConfirmDelete} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddJobs" component={AddJobs} />
      <Stack.Screen name="AddClients" component={AddClients} />
      <Stack.Screen name="AddTeams" component={AddTeams} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="ReportAnalysis" component={ReportAnalysis} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="TwoFactor" component={TwoFactorAuthScreen} />
      <Stack.Screen name="Sessions" component={Sessions} />
      <Stack.Screen name="Recovery" component={AccountRecoveryScreen} />
      <Stack.Screen name="RecoveryEmail" component={EmailRecovery} />
      <Stack.Screen name="NotificationPrefrences" component={NotificationPrefrences} />
      <Stack.Screen name="AddPhoneNumber" component={AddPhone} />
      <Stack.Screen name="BackupPhone" component={BackupPhoneScreen} />
      <Stack.Screen name="VerifyAccount" component={VerifyPhoneMailOtp} />
      <Stack.Screen name="EmailNotificationSettings" component={EmailnNotificationSettings} />
      <Stack.Screen name="EmailSettings" component={EmailSettings} />
      <Stack.Screen name="EmailSenderSettings" component={EmailSenderSettingsScreen} />
        <Stack.Screen name="DefaultEmail" component={DefaultEmailScreen} />
<Stack.Screen name="GmailConnected" component={GmailConnectedScreen} />
<Stack.Screen name="GmailSettingPage" component={GmailSettingPage} />
<Stack.Screen name="EmailTemplates" component={EmailTemplates} />
<Stack.Screen name="EditEmailTemplate" component={EditEmailTemplate} />
<Stack.Screen name="RolesPermissions" component={RolesPermissions} />
<Stack.Screen name="RoleDetail" component={RoleDetail} />
<Stack.Screen name="BrandingCustomization" component={BrandingCustomization} />
<Stack.Screen name="PaymentsBilling" component={PaymentsBilling} />
<Stack.Screen name="CurrentPlan" component={CurrentPlan} />
<Stack.Screen name="CancelSubscription" component={CancelSubscription} />
<Stack.Screen name="BillingHistory" component={BillingHistory} />
<Stack.Screen name="PaymentMethods" component={PaymentMethods} />
<Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
<Stack.Screen name="GoalsReports" component={GoalsReports} />
<Stack.Screen name="GoalsDashboard" component={GoalsDashboard} />
<Stack.Screen name="ReportingPreferences" component={ReportingPreferences} />
<Stack.Screen name="SystemPreferences" component={SystemPreferences} />
<Stack.Screen name="GeneralSettings" component={GeneralSettings} />
<Stack.Screen name="LanguageSettings" component={LanguageSettings} />
<Stack.Screen name="DateFormatSettings" component={DateFormatSettings} />
<Stack.Screen name="TimeFormatSettings" component={TimeFormatSettings} />
<Stack.Screen name="CurrencySettings" component={CurrencySettings} />
<Stack.Screen name="FirstDaySettings" component={FirstDaySettings} />
<Stack.Screen name="JobPaymentDefaults" component={JobPaymentDefaults} />
<Stack.Screen name="InvoiceFormatSettings" component={InvoiceFormatSettings} />
<Stack.Screen name="WorkflowSettings" component={WorkflowSettings} />
<Stack.Screen name="FilesAutomation" component={FilesAutomation} />
<Stack.Screen name="GmailSettings" component={GmailScreen} />
      <Stack.Screen
        name="otpTFA"
        component={VerifyOtp}
        initialParams={{ type: 'TFA' }}
      />
    </Stack.Navigator>
  );
}