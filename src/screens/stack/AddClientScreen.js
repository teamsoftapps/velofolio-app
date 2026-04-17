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
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LEAD_SOURCES = ['Select lead sources', 'Referral', 'Facebook', 'Website'];
const TIME_ZONES = ['Select client timezone', 'EST', 'CST', 'PST', 'GMT'];

const COUNTRY_CODES = [
  { flag: '🇺🇸', code: '+1', name: 'USA/Canada' },
  { flag: '🇬🇧', code: '+44', name: 'UK' },
  { flag: '🇦🇺', code: '+61', name: 'Australia' },
  { flag: '🇮🇳', code: '+91', name: 'India' },
  { flag: '🇩🇪', code: '+49', name: 'Germany' },
  { flag: '🇫🇷', code: '+33', name: 'France' },
];

const DropdownModal = ({
  visible,
  onClose,
  data,
  onSelect,
  title,
  renderItem,
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
              <Typography style={styles.modalItemText}>
                {renderItem ? renderItem(item) : item}
              </Typography>
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
          style={styles.inputContainer}
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
        title={label || 'Select'}
      />
    </>
  );
};

const AddClientScreen = ({ navigation }) => {
  const [clientType, setClientType] = useState('Client'); // 'Client' or 'Company'
  const insets = useSafeAreaInsets();

  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [street, setStreet] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ScreenWrapper backgroundColor="#FAF9F6" disablePaddingTop={true}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          {/* Main Application Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Add Client</Typography>
          </View>

          {/* Client / Company Toggle */}
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[
                styles.toggleBtn,
                clientType === 'Client' && styles.toggleBtnActive,
              ]}
              onPress={() => setClientType('Client')}
              activeOpacity={0.8}
            >
              <Feather
                name="users"
                size={rs(16)}
                color={clientType === 'Client' ? '#FFF' : '#9CA3AF'}
                style={{ marginRight: rs(8) }}
              />
              <Typography
                style={[
                  styles.toggleBtnText,
                  clientType === 'Client' && styles.toggleBtnTextActive,
                ]}
              >
                Client
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleBtn,
                clientType === 'Company' && styles.toggleBtnActive,
              ]}
              onPress={() => setClientType('Company')}
              activeOpacity={0.8}
            >
              <Feather
                name="briefcase"
                size={rs(16)}
                color={clientType === 'Company' ? '#FFF' : '#9CA3AF'}
                style={{ marginRight: rs(8) }}
              />
              <Typography
                style={[
                  styles.toggleBtnText,
                  clientType === 'Company' && styles.toggleBtnTextActive,
                ]}
              >
                Company
              </Typography>
            </TouchableOpacity>
          </View>

          <Typography style={styles.toggleHelperText}>
            Choose whether you're adding a person or a company.
          </Typography>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Standard Text Inputs */}
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
          />

          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            onChangeText={setLastName}
          />

          <TextInput
            label="Email"
            placeholder="e.g. info@sarah.org"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Special Phone Input */}
          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Phone Number</Typography>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity
                style={styles.phonePrefix}
                activeOpacity={0.8}
                onPress={() => setCountryCodeModalVisible(true)}
              >
                <Typography style={{ fontSize: rs(16), marginRight: rs(4) }}>
                  {countryCode.flag}
                </Typography>
                <Typography style={styles.phonePrefixText}>
                  {countryCode.code}
                </Typography>
                <Feather name="chevron-down" size={rs(16)} color="#9CA3AF" />
              </TouchableOpacity>
              <View style={styles.verticalDivider} />
              <RNTextInput
                placeholder="Phone Number"
                placeholderTextColor="#9CA3AF"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.innerPhoneInput}
              />
            </View>
          </View>

          <DropdownModal
            visible={countryCodeModalVisible}
            onClose={() => setCountryCodeModalVisible(false)}
            data={COUNTRY_CODES}
            onSelect={setCountryCode}
            title="Select Country Code"
            renderItem={item => `${item.flag}  ${item.code} (${item.name})`}
          />

          {/* Geography & Source */}
          <CustomDropdown
            label="Lead Source"
            placeholder="Select lead sources"
            value={leadSource}
            options={LEAD_SOURCES}
            onSelect={setLeadSource}
          />

          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Street Address</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="Enter client address"
                value={street}
                onChangeText={setStreet}
                multiline={true}
                numberOfLines={3}
                style={styles.multiLineInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <TextInput
            label="Country"
            placeholder="Enter client country"
            value={country}
            onChangeText={setCountry}
          />

          <TextInput
            label="City"
            placeholder="Enter client city"
            value={city}
            onChangeText={setCity}
          />

          <CustomDropdown
            label="Time Zone"
            placeholder="Select client timezone"
            value={timeZone}
            options={TIME_ZONES}
            onSelect={setTimeZone}
          />

          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Notes</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="Write note for client"
                value={notes}
                onChangeText={setNotes}
                multiline={true}
                numberOfLines={4}
                style={styles.multiLineInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Footer Buttons */}
          <View style={styles.actionsContainer}>
            <Button
              title="Save Client"
              onPress={() => navigation.goBack()}
              style={styles.saveButton}
            />
            <Button
              title="Cancel"
              variant="outline"
              onPress={() => navigation.goBack()}
              style={styles.cancelButton}
            />
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(16),
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#000' },
  scrollContent: { paddingHorizontal: rs(20), paddingBottom: rh(40) },

  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },

  /* Toggle Tabs */
  toggleRow: {
    flexDirection: 'row',
    marginBottom: rs(8),
    marginTop: rs(4),
    paddingHorizontal: rs(20),
  },
  toggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: rs(8),
    height: rs(40),
    paddingHorizontal: rs(24),
    marginRight: rs(12),
  },
  toggleBtnActive: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  toggleBtnText: {
    color: '#9CA3AF',
    fontSize: rs(15),
    fontWeight: '500',
  },
  toggleBtnTextActive: {
    color: '#FFFFFF',
  },
  toggleHelperText: {
    fontSize: rs(14),
    color: '#6B7280',
    marginBottom: rs(12),
    paddingHorizontal: rs(20),
  },

  /* Form Elements */
  dropdownContainer: { marginVertical: rs(10) },
  label: {
    fontSize: rs(14),
    color: '#111827',
    marginBottom: rs(8),
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
  },
  inputText: { fontSize: rs(15), color: '#1A1A1A' },
  placeholderText: { color: '#9CA3AF' },

  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(12),
  },
  phonePrefix: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phonePrefixText: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '600',
    marginRight: rs(4),
  },
  verticalDivider: {
    height: rs(24),
    width: 1,
    backgroundColor: '#D4D4D4',
    marginHorizontal: rs(12),
  },
  innerPhoneInput: {
    flex: 1,
    fontSize: rs(15),
    color: '#1A1A1A',
    padding: 0,
    margin: 0,
  },

  multiLineInputContainer: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    minHeight: rs(100),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
  },
  multiLineInput: {
    height: undefined,
    minHeight: rs(80),
    textAlignVertical: 'top',
    fontSize: rs(15),
    color: '#1A1A1A',
  },

  bottomPadding: { height: rs(40) },
  actionsContainer: { marginTop: rs(20) },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    marginBottom: rs(12),
  },
  cancelButton: {
    borderColor: '#A3A3A3',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    borderRadius: rs(28),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  modalTitle: { fontSize: rs(18), fontWeight: '700', color: '#111827' },
  modalItem: {
    paddingHorizontal: rs(20),
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemText: { fontSize: rs(16), color: '#1A1A1A' },
});

export default AddClientScreen;
