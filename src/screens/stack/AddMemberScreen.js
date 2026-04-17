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
import DateTimePicker from '@react-native-community/datetimepicker';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import MemberSuccessModal from '../../components/MemberSuccessModal';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ROLES = ['Admin', 'Manager', 'Photographer', 'Editor'];
const STATUSES = ['Active', 'Inactive', 'Pending'];
const AVAILABILITIES = ['Free', 'Busy', 'On Leave'];
const GENDERS = ['Male', 'Female', 'Non-binary', 'Other'];

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

const DateInput = ({ label, placeholder, value, onDateChange }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    if (Platform.OS === 'android') setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate.toLocaleDateString());
    }
  };

  return (
    <View style={styles.dropdownContainer}>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <TouchableOpacity
        style={styles.inputContainer}
        activeOpacity={0.8}
        onPress={() => setShow(true)}
      >
        <Typography
          style={[styles.inputText, !value && styles.placeholderText]}
        >
          {value || placeholder}
        </Typography>
        <Feather name="calendar" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>

      {Platform.OS === 'ios' && show && (
        <Modal transparent animationType="slide" visible={show}>
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShow(false)}
          >
            <View
              style={styles.modalContent}
              onStartShouldSetResponder={() => true}
            >
              <View style={styles.modalHeader}>
                <Typography style={styles.modalTitle}>
                  Select {label || 'Date'}
                </Typography>
                <TouchableOpacity onPress={() => setShow(false)}>
                  <Typography
                    style={{
                      color: '#38BDF8',
                      fontWeight: 'bold',
                      fontSize: rs(16),
                    }}
                  >
                    Done
                  </Typography>
                </TouchableOpacity>
              </View>
              <View style={{ minHeight: rs(200), justifyContent: 'center' }}>
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="spinner"
                  onChange={onChange}
                  textColor="#000000"
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {Platform.OS === 'android' && show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const AddMemberScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [joinedDate, setJoinedDate] = useState('');
  const [availability, setAvailability] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setRole('');
    setStatus('');
    setJoinedDate('');
    setAvailability('');
    setDob('');
    setGender('');
    setAddress('');
    setSuccessModalVisible(false);
  };

  const handleSendInvitation = () => {
    // Here logic for API call would go
    setSuccessModalVisible(true);
  };

  return (
    <ScreenWrapper backgroundColor="#FAF9F6" disablePaddingTop={true}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Main Application Header */}
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Add New Member</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
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

          {/* Styled Phone Input */}
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

          {/* Member Metadata Settings */}
          <CustomDropdown
            label="Role"
            placeholder="Select member role"
            value={role}
            options={ROLES}
            onSelect={setRole}
          />

          <CustomDropdown
            label="Status"
            placeholder="Select member status"
            value={status}
            options={STATUSES}
            onSelect={setStatus}
          />

          <DateInput
            label="Joined Date"
            placeholder="Select Date"
            value={joinedDate}
            onDateChange={setJoinedDate}
          />

          {/* Additional Personal Information */}
          <CustomDropdown
            label="Availability"
            placeholder="Select availability e.g. Free, Busy"
            value={availability}
            options={AVAILABILITIES}
            onSelect={setAvailability}
          />

          <DateInput
            label="Date of Birth"
            placeholder="Select Date"
            value={dob}
            onDateChange={setDob}
          />

          <CustomDropdown
            label="Gender"
            placeholder="Select Gender"
            value={gender}
            options={GENDERS}
            onSelect={setGender}
          />

          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Address</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="Enter member address"
                value={address}
                onChangeText={setAddress}
                multiline={true}
                numberOfLines={4}
                style={styles.multiLineInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Footer Interactive Handlers */}
          <View style={styles.actionsContainer}>
            <Button
              title="Send Invitation"
              onPress={handleSendInvitation}
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

      <MemberSuccessModal
        visible={successModalVisible}
        onClose={() => setSuccessModalVisible(false)}
        onDone={() => {
          setSuccessModalVisible(false);
          navigation.goBack();
        }}
        onInviteAnother={resetForm}
      />
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#000' },

  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },

  scrollContent: { paddingHorizontal: rs(20), paddingBottom: rh(40) },

  /* Generic Form Elements */
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

  /* Phone Specific Styling */
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FAFAFA',
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

  /* MultiLine Blocks */
  multiLineInputContainer: {
    borderWidth: 1,
    borderColor: '#A3A3A3',
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

  /* Footer Layout Padding */
  bottomPadding: { height: rs(40) },
  actionsContainer: { marginTop: rs(10) },
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

  /* Native Modals System */
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

export default AddMemberScreen;
