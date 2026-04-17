import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const GmailConnectScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.pageTitle}>Gmail</Typography>
        <Typography style={styles.pageSubtitle}>
          Connect your Gmail account to send emails directly from your inbox.
        </Typography>

        <TouchableOpacity style={styles.connectButton} activeOpacity={0.8}>
          <Image 
            source={require('../../assets/Images/googleicon.png')} 
            style={styles.gmailIcon} 
          />
          <Typography style={styles.connectText}>Connect Gmail</Typography>
        </TouchableOpacity>

        <View style={{ height: rh(40) }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  pageTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  pageSubtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(32),
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingVertical: rs(16),
  },
  gmailIcon: {
    width: rs(20),
    height: rs(16),
    resizeMode: 'contain',
    marginRight: rs(10),
  },
  connectText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
});

export default GmailConnectScreen;
