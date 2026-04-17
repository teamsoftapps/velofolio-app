import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTextInput = ({ label, value }) => (
  <View style={styles.inputWrapper}>
    <Typography style={styles.label}>{label}</Typography>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={value}
        editable={false}
      />
    </View>
  </View>
);

const EmailSettingsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Email Settings</Typography>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <CustomTextInput label="Sender Name (From)" value="Velofolio" />
          <CustomTextInput label="Sender Email Address (Reply to)" value="hello@velofolio.com" />
          <CustomTextInput label="Reply-To Email" value="support@velofolio.com" />

          <View style={styles.inputWrapper}>
            <Typography style={styles.label}>Footer Signature</Typography>
            <View style={styles.footerSignatureContainer}>
              <Typography style={styles.footerSignatureText}>
                Lumière Studios{'\n'}
                Wedding Films & Photography{'\n'}
                www.lumierestudios.com
              </Typography>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(4),
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
  headerTitle: { fontSize: rs(22), fontWeight: '600', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  inputWrapper: {
    marginBottom: rs(20),
  },
  label: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputContainer: {
    height: rs(52),
    borderWidth: 1,
    borderColor: '#9CA3AF', // Slightly darker border than regular D1D5DB
    borderRadius: rs(10),
    paddingHorizontal: rs(16),
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: rs(15),
    color: '#111827',
    padding: 0,
    margin: 0,
  },
  footerSignatureContainer: {
    backgroundColor: '#E5E7EB',
    borderRadius: rs(12),
    padding: rs(16),
    minHeight: rs(120),
  },
  footerSignatureText: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
  },
});

export default EmailSettingsScreen;
