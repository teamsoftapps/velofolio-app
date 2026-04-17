import React, { useState } from 'react';
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

const SendInvoiceScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [attachPdf, setAttachPdf] = useState(true);

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Send Invoice to Client</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.inputGroup}>
          <Typography style={styles.label}>To:</Typography>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="recipient@email.com" 
              defaultValue="client@email.com"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Typography style={styles.label}>Email Template</Typography>
          <TouchableOpacity style={styles.dropdownContainer} activeOpacity={0.7}>
            <Typography style={styles.dropdownText}>Invoice email template</Typography>
            <Feather name="chevron-down" size={rs(20)} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Typography style={styles.label}>Subject:</Typography>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Subject line" 
              defaultValue="Invoice from Lumiere Studio"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Typography style={styles.label}>Message</Typography>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="Enter message..." 
              defaultValue="Hi John,&#10;Please find your invoice attached."
              multiline
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.checkboxRow} 
          activeOpacity={0.7}
          onPress={() => setAttachPdf(!attachPdf)}
        >
          <View style={[styles.checkbox, attachPdf && styles.checkboxSelected]}>
            {attachPdf && <Feather name="check" size={rs(14)} color="#FFFFFF" />}
          </View>
          <Typography style={styles.checkboxLabel}>Attach a PDF version of the invoice</Typography>
        </TouchableOpacity>

        <View style={{ height: rh(40) }} />
      </ScrollView>

      <View style={[styles.bottomActions, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.sendButton} 
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Typography style={styles.sendButtonText}>Send</Typography>
        </TouchableOpacity>
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
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    flex: 1,
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    marginLeft: rs(16),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  inputGroup: {
    marginBottom: rs(20),
  },
  label: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(10),
  },
  inputContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: rs(16),
  },
  input: {
    fontSize: rs(15),
    color: '#111827',
    paddingVertical: rs(14),
  },
  dropdownContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: rs(16),
    paddingVertical: rs(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: rs(15),
    color: '#111827',
  },
  textAreaContainer: {
    minHeight: rs(120),
    alignItems: 'flex-start',
  },
  textArea: {
    textAlignVertical: 'top',
    width: '100%',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(8),
  },
  checkbox: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  checkboxSelected: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  checkboxLabel: {
    fontSize: rs(15),
    color: '#111827',
  },
  bottomActions: {
    paddingHorizontal: rs(20),
    paddingTop: rs(16),
  },
  sendButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default SendInvoiceScreen;
