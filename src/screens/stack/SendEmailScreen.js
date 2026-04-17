import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Modal,
  FlatList,
  TextInput as RNTextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';

const EMAIL_TEMPLATES = [
  'Welcome Email',
  'Follow Up',
  'Invoice Reminder',
  'Thank You',
  'Meeting Request',
];

const DropdownModal = ({
  visible,
  onClose,
  data,
  onSelect,
  title,
}) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <TouchableOpacity
      style={styles.modalOverlay}
      activeOpacity={1}
      onPress={onClose}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Typography style={styles.modalTitle}>{title}</Typography>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                onSelect(item);
                onClose();
              }}
            >
              <Typography style={styles.modalItemText}>{item}</Typography>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TouchableOpacity>
  </Modal>
);

const CustomDropdown = ({ label, placeholder, value, options, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.dropdownContainer}>
        {label && <Typography style={styles.label}>{label}</Typography>}
        <TouchableOpacity
          style={styles.dropdownInputContainer}
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
        >
          <Typography
            style={[styles.inputText, !value && styles.placeholderText]}
          >
            {value || placeholder}
          </Typography>
          <Feather name="chevron-down" size={rs(20)} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
      <DropdownModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={options}
        onSelect={onSelect}
        title={`Select ${label}`}
      />
    </>
  );
};

const SendEmailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const [to, setTo] = useState('');
  const [template, setTemplate] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScreenWrapper backgroundColor="#FAF9F6" disablePaddingTop={true}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Send Email</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TextInput
            label="To:"
            placeholder="sarahjohnson@gmail.com"
            value={to}
            onChangeText={setTo}
            keyboardType="email-address"
          />

          <CustomDropdown
            label="Email Template"
            placeholder="Choose an existing email template"
            value={template}
            options={EMAIL_TEMPLATES}
            onSelect={setTemplate}
          />

          <TextInput
            label="Subject:"
            placeholder="Write subject line"
            value={subject}
            onChangeText={setSubject}
          />

          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Message</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="Type text here"
                value={message}
                onChangeText={setMessage}
                multiline={true}
                numberOfLines={6}
                style={styles.multiLineInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View style={styles.actionsContainer}>
            <Button
              title="Send Email"
              onPress={() => navigation.goBack()}
              style={styles.saveButton}
            />
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
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
  },
  headerTitle: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#000',
  },
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(40),
  },
  dropdownContainer: {
    marginVertical: rs(12),
  },
  label: {
    fontSize: rs(14),
    color: '#1A1A1A',
    marginBottom: rs(8),
    fontWeight: '500',
  },
  dropdownInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rs(56),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
  },
  inputText: {
    fontSize: rs(16),
    color: '#1A1A1A',
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  multiLineInputContainer: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    minHeight: rs(140),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
  },
  multiLineInput: {
    height: undefined,
    minHeight: rs(120),
    textAlignVertical: 'top',
    color: '#1A1A1A',
    fontSize: rs(16),
  },
  actionsContainer: {
    marginTop: rs(32),
  },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
  },
  bottomPadding: {
    height: rs(40),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(24),
    borderTopRightRadius: rs(24),
    maxHeight: '70%',
    paddingBottom: rs(20),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  modalItem: {
    paddingHorizontal: rs(20),
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemText: {
    fontSize: rs(16),
    color: '#1A1A1A',
  },
});

export default SendEmailScreen;
