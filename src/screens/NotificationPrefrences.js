import React, { useState } from 'react';
import NotificationSettingsPage from '../components/PermisionNNotificaationSetting';

function NotificationPreferencesScreen({ navigation }) {
  // State for all notification toggles
  const [notifications, setNotifications] = useState({
    // Job Notifications
    jobAssigned: true,
    jobDeadline: true,
    jobCompleted: false,
    
    // Client & Lead Notifications
    newLead: true,
    leadAssigned: true,
    clientUpdated: false,
    
    // Payment Notifications
    paymentReceived: true,
    paymentOverdue: true,
    paymentReminder: false,
    
    // System Alerts
    commentTagged: true,
    weeklySummary: false,
    maintenanceUpdates: false,
  });

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    {
      title: 'Job Notifications',
      items: [
        {
          title: 'Job Assigned to You',
          value: notifications.jobAssigned,
          onToggle: () => toggleNotification('jobAssigned'),
        },
        {
          title: 'Job Deadline Approaching',
          value: notifications.jobDeadline,
          onToggle: () => toggleNotification('jobDeadline'),
        },
        {
          title: 'Job Marked as Completed',
          value: notifications.jobCompleted,
          onToggle: () => toggleNotification('jobCompleted'),
        },
      ],
    },
    {
      title: 'Client & Lead Notifications',
      items: [
        {
          title: 'New Lead Added',
          value: notifications.newLead,
          onToggle: () => toggleNotification('newLead'),
        },
        {
          title: 'Lead Assigned to You',
          value: notifications.leadAssigned,
          onToggle: () => toggleNotification('leadAssigned'),
        },
        {
          title: 'Client Updated Their Info',
          value: notifications.clientUpdated,
          onToggle: () => toggleNotification('clientUpdated'),
        },
      ],
    },
    {
      title: 'Payment Notifications',
      items: [
        {
          title: 'New Payment Received',
          value: notifications.paymentReceived,
          onToggle: () => toggleNotification('paymentReceived'),
        },
        {
          title: 'Payment Overdue',
          value: notifications.paymentOverdue,
          onToggle: () => toggleNotification('paymentOverdue'),
        },
        {
          title: 'Payment Reminder Sent',
          value: notifications.paymentReminder,
          onToggle: () => toggleNotification('paymentReminder'),
        },
      ],
    },
    {
      title: 'System Alerts',
      items: [
        {
          title: 'New Comment Tagging You',
          value: notifications.commentTagged,
          onToggle: () => toggleNotification('commentTagged'),
        },
        {
          title: 'Weekly Summary Report',
          value: notifications.weeklySummary,
          onToggle: () => toggleNotification('weeklySummary'),
        },
        {
          title: 'System Maintenance Updates',
          value: notifications.maintenanceUpdates,
          onToggle: () => toggleNotification('maintenanceUpdates'),
        },
      ],
    },
  ];

  return (
    <NotificationSettingsPage
      title="Notification Preferences"
      onBack={() => navigation.goBack()}
      sections={sections}
      colors={{
        background: '#f8f9fa',
        headerBg: '#ffffff',
        sectionBg: '#ffffff',
        textPrimary: '#222222',
        textSecondary: '#8e8e93',
        headerText: '#8e8e93',
        switchOnTrack: '#0ea5e9', // Blue when ON
        switchOffTrack: '#e5e5ea', // Gray when OFF
        switchThumb: '#ffffff',
      }}
    />
  );
}

export default NotificationPreferencesScreen;