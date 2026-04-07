import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView,
  Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import GmailDisconnectModal from '../components/GmailDisconnectModal';

const GmailConnectedScreen = ({ navigation, route }) => {
  const [disconnectModalVisible, setDisconnectModalVisible] = useState(false);
  
  // Connected email from route params or state
  const connectedEmail = route?.params?.email || 'hello@lumierestudio.com';

  const handleDisconnect = () => {
    setDisconnectModalVisible(true);
  };

  const onConfirmDisconnect = () => {
    setDisconnectModalVisible(false);
    console.log('Gmail disconnected');
    navigation.navigate('Gmail'); // Navigate back to unconnected state
  };

  const handleSettings = () => {
    navigation.navigate('GmailSettingPage');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={" "} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
            <Text style={styles.title}>Gmail</Text>
        {/* Description Text */}
        <Text style={styles.description}>
          Connect your Gmail account to send emails directly from your inbox.
        </Text>

        {/* Connected Email Card */}
        <View style={styles.connectedCard}>
          <Text style={styles.emailText}>{connectedEmail}</Text>
          <View style={styles.connectedBadge}>
            <Ionicons name="checkmark-circle" size={16} color={colors.success || '#34c759'} />
            <Text style={styles.connectedText}>Connected</Text>
          </View>
        </View>

        {/* Spacer to push buttons down */}
        <View style={styles.spacer} />

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.disconnectButton}
          onPress={handleDisconnect}
          activeOpacity={0.8}
        >
          <Text style={styles.disconnectButtonText}>Disconnect</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={handleSettings}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Gmail Disconnect Modal */}
      <GmailDisconnectModal
        visible={disconnectModalVisible}
        onClose={() => setDisconnectModalVisible(false)}
        onConfirm={onConfirmDisconnect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground ,
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    // backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
      title: {
        fontSize: responsiveWidth(5.8),
        marginBottom: responsiveHeight(2),
        color: colors.textPrimary ,
        fontWeight: '600',
    },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(4),
    paddingBottom: responsiveWidth(8),
    flexGrow: 1,
  },
  description: {
    fontSize: responsiveWidth(3.8),
    color: colors.textSecondary || '#6b7280',
    lineHeight: responsiveHeight(2.8),
    marginBottom: responsiveHeight(3),
  },
  connectedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e8e8e8',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(4),
    borderWidth: 1,
    borderColor: colors.border || '#d1d5db',
  },
  emailText: {
    fontSize: responsiveWidth(4),
    color: colors.grayDark12,
    fontWeight: '400',
  },
  connectedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1),
  },
  connectedText: {
    fontSize: responsiveWidth(3.5),
    color: colors.success || '#34c759',
    fontWeight: '400',
  },
  spacer: {
    flex: 1,
  },
  disconnectButton: {
    backgroundColor: '#e8e8e8',
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveHeight(2),
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: colors.border || '#d1d5db',
  },
  disconnectButtonText: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222222',
    fontWeight: '400',
  },
  settingsButton: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(50),
        paddingVertical: responsiveHeight(2),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border || '#d1d5db',
  },
  settingsButtonText: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222222',
    fontWeight: '400',
  },
});

export default GmailConnectedScreen;