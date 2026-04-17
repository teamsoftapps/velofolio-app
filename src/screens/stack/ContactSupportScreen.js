import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InputLabel = ({ label }) => (
  <Typography style={styles.inputLabel}>{label}</Typography>
);

const CustomInput = ({ placeholder, value, onChangeText, multiline, numberOfLines }) => (
  <View style={[styles.inputContainer, multiline && styles.multilineInput]}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, multiline && { textAlignVertical: 'top', height: rs(100) }]}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  </View>
);

const ContactSupportScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [formData, setFormData] = useState({
    name: 'Mike Mayfield',
    email: 'mikemayfield@gmail.com',
    subject: '',
    category: '',
    message: '',
  });

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentPadding}>
          <Typography style={styles.title}>Contact Support</Typography>
          <Typography style={styles.subtitle}>
            Need help? Fill out the form below and our support team will get back to you as soon as possible.
          </Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <InputLabel label="Full Name" />
        <CustomInput
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={text => setFormData({ ...formData, name: text })}
        />

        <InputLabel label="Email" />
        <CustomInput
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={text => setFormData({ ...formData, email: text })}
        />

        <InputLabel label="Subject:" />
        <CustomInput
          placeholder='e.g., "Issue with invoice creation"'
          value={formData.subject}
          onChangeText={text => setFormData({ ...formData, subject: text })}
        />

        <InputLabel label="Category / Topic" />
        <TouchableOpacity style={styles.dropdown}>
          <Typography style={styles.dropdownText}>Select Category / Topic</Typography>
          <Feather name="chevron-down" size={rs(20)} color="#111827" />
        </TouchableOpacity>

        <InputLabel label="Message / Details" />
        <CustomInput
          placeholder="Please describe your issue in detail..."
          value={formData.message}
          onChangeText={text => setFormData({ ...formData, message: text })}
          multiline
          numberOfLines={4}
        />

        <View style={styles.attachmentHeader}>
          <Typography style={styles.attachmentTitle}>Attachment</Typography>
          <Typography style={styles.optionalText}>(optional)</Typography>
        </View>

        <TouchableOpacity style={styles.uploadBox}>
          <Feather name="upload-cloud" size={rs(32)} color="#38BDF8" style={{ marginBottom: rs(12) }} />
          <Typography style={styles.uploadTextPill}>
            <Typography style={styles.uploadLink}>Click to Upload</Typography> or drag and drop
          </Typography>
          <Typography style={styles.uploadLimit}>(limit 5MB, PNG/JPG/PDF)</Typography>
        </TouchableOpacity>

        {/* Mock Attachments */}
        <View style={styles.attachmentCard}>
          <View style={styles.attachmentInfo}>
            <View style={styles.fileIconBox}>
                <Typography style={styles.fileIconText}>JPEG</Typography>
            </View>
            <View style={{ flex: 1 }}>
              <Typography style={styles.fileName}>issueimage.jpg</Typography>
              <View style={styles.fileMetaRow}>
                <Typography style={styles.fileSize}>Size: 446KB • </Typography>
                <Feather name="check-circle" size={rs(14)} color="#10B981" />
                <Typography style={styles.fileStatus}> Completed</Typography>
              </View>
            </View>
            <TouchableOpacity>
              <Feather name="trash-2" size={rs(20)} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.attachmentCard}>
          <View style={styles.attachmentInfo}>
            <View style={styles.fileIconBox}>
                <Typography style={styles.fileIconText}>JPEG</Typography>
            </View>
            <View style={{ flex: 1 }}>
              <Typography style={styles.fileName}>issueimage2.jpg</Typography>
              <View style={styles.fileMetaRow}>
                <Typography style={styles.fileSize}>Size: 480KB • </Typography>
                <Feather name="loader" size={rs(14)} color="#38BDF8" />
                <Typography style={[styles.fileStatus, { color: '#38BDF8' }]}> Uploading...</Typography>
              </View>
              <View style={styles.progressBarBg}>
                <View style={styles.progressBarFill} />
              </View>
            </View>
            <TouchableOpacity>
              <Feather name="x" size={rs(20)} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
           <Typography style={styles.sendButtonText}>Send</Typography>
        </TouchableOpacity>

        <View style={styles.tipBox}>
            <Typography style={styles.tipText}>Tip: Check our FAQs for quick answers</Typography>
        </View>

        <Typography style={styles.availabilityText}>Support available Mon–Fri, 9AM–6PM.</Typography>

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
    paddingBottom: rs(20),
    marginBottom: rs(4),
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
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
  contentPadding: {
    paddingHorizontal: rs(20),
    marginTop: rs(10),
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(14),
    color: '#9CA3AF',
    lineHeight: rs(20),
  },
  scrollContent: {
    paddingHorizontal: rs(24),
    paddingTop: rs(24),
  },
  inputLabel: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#374151',
    marginBottom: rs(12),
    marginTop: rs(20),
  },
  inputContainer: {
    height: rs(54),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
  },
  multilineInput: {
    height: rs(120),
    paddingTop: rs(12),
    justifyContent: 'flex-start',
  },
  input: {
    fontSize: rs(14),
    color: '#111827',
  },
  dropdown: {
    height: rs(54),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  attachmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(24),
    marginBottom: rs(16),
  },
  attachmentTitle: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#374151',
  },
  optionalText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginLeft: rs(6),
  },
  uploadBox: {
    height: rs(180),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: rs(20),
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  uploadTextPill: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '500',
  },
  uploadLink: {
    color: '#38BDF8',
  },
  uploadLimit: {
    fontSize: rs(12),
    color: '#9CA3AF',
    marginTop: rs(8),
  },
  attachmentCard: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    padding: rs(16),
    marginBottom: rs(12),
  },
  attachmentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIconBox: {
    width: rs(44),
    height: rs(44),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  fileIconText: {
    fontSize: rs(10),
    fontWeight: '800',
    color: '#FFFFFF',
    backgroundColor: '#EF4444',
    padding: rs(2),
    borderRadius: rs(3),
  },
  fileName: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#374151',
    marginBottom: rs(4),
  },
  fileMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileSize: {
    fontSize: rs(12),
    color: '#9CA3AF',
  },
  fileStatus: {
    fontSize: rs(12),
    color: '#10B981',
    fontWeight: '500',
  },
  progressBarBg: {
    height: rs(5),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(3),
    marginTop: rs(8),
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    width: '60%',
    backgroundColor: '#38BDF8',
    borderRadius: rs(3),
  },
  sendButton: {
    height: rs(56),
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rs(20),
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sendButtonText: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  tipBox: {
    backgroundColor: '#E0F2FE',
    borderRadius: rs(10),
    paddingVertical: rs(10),
    alignItems: 'center',
    marginTop: rs(16),
  },
  tipText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  availabilityText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: rs(16),
  },
});

export default ContactSupportScreen;
