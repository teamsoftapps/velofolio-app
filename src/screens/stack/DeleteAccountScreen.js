import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DeleteAccountScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Delete My Account</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Typography style={styles.title}>Are you sure you want to delete your account?</Typography>
        
        <Typography style={styles.bodyText}>
          We're sorry to see you go. Deleting your account will permanently remove your profile, projects, clients, payments, and all associated data from our system.
        </Typography>
        
        <Typography style={styles.bodyText}>
          This action cannot be undone.
        </Typography>
        
        <Typography style={styles.bodyText}>
          If you're experiencing an issue, our support team may be able to help before you decide to leave.
        </Typography>

        <View style={styles.infoCard}>
          <Typography style={styles.infoTitle}>Download My Data</Typography>
          <Typography style={styles.infoSubtitle}>
            Want a copy of your data before leaving?{'\n'}
            You can download a full export of your{'\n'}
            projects, clients, and invoices.
          </Typography>
          <TouchableOpacity activeOpacity={0.7}>
            <Typography style={styles.downloadLink}>Download My Data</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.contactSupportBtn}>
          <Typography style={styles.contactSupportText}>Contact Support</Typography>
        </TouchableOpacity>
        
        <Button
          title="Delete Account"
          onPress={() => navigation.navigate('BeforeYouGo')}
          style={styles.deleteButton}
        />
        
        <Button
          title="Go Back"
          variant="outline"
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
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
    marginRight: rs(16),
    backgroundColor: '#FFFFFF',
  },
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
  },
  title: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(16),
  },
  bodyText: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(20),
  },
  infoCard: {
    backgroundColor: '#E5E7EB',
    borderRadius: rs(20),
    padding: rs(24),
    alignItems: 'center',
    marginTop: rs(10),
    marginBottom: rs(40),
  },
  infoTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  infoSubtitle: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(20),
    marginBottom: rs(16),
  },
  downloadLink: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#38BDF8',
    textDecorationLine: 'underline',
  },
  footer: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(40),
  },
  contactSupportBtn: {
    alignItems: 'center',
    marginBottom: rs(24),
  },
  contactSupportText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#38BDF8',
    textDecorationLine: 'underline',
  },
  deleteButton: {
    backgroundColor: '#EF4444', // Red color
    borderRadius: rs(28),
    marginBottom: rs(12),
  },
  goBackButton: {
    borderColor: '#D1D5DB',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    borderRadius: rs(28),
  },
});

export default DeleteAccountScreen;
