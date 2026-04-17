import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DefaultEmailScreen = ({ navigation }) => {
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
        
        <Typography style={styles.pageTitle}>Default Email</Typography>
        <Typography style={styles.pageSubtitle}>
          All outgoing emails will be sent from no-reply@velofolio.email. You can change your sender name and reply-to address.
        </Typography>

        <Typography style={styles.inputLabel}>Sender Name</Typography>
        <TextInput
          style={styles.inputField}
          value="Lumiere Studio"
          placeholderTextColor="#9CA3AF"
        />

        <Typography style={styles.inputLabel}>Reply-To Email</Typography>
        <TextInput
          style={styles.inputField}
          value="hello@lumierestudio.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity 
          style={styles.actionButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Typography style={styles.actionButtonText}>Use Default</Typography>
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
    marginBottom: rs(24),
  },
  inputLabel: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputField: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    height: rs(52),
    fontSize: rs(15),
    color: '#111827',
    marginBottom: rs(20),
  },
  actionButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    marginTop: rs(8),
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default DefaultEmailScreen;
