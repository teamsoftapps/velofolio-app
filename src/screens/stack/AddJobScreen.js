import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TextInput as RNTextInput,
  Modal,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
];

const PRIORITIES = ['Low', 'Normal', 'High', 'Urgent'];
const STATUSES = [
  'Pending',
  'In Progress',
  'On Hold',
  'Review',
  'Completed',
  'Cancelled',
];
const TEAMS = ['Team Alpha', 'Team Beta', 'Team Gamma', 'Unassigned'];

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
              {renderItem ? (
                renderItem(item)
              ) : (
                <Typography style={styles.modalItemText}>{item}</Typography>
              )}
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
        title={`Select ${label}`}
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

      {/* iOS Modal Wrapped Picker */}
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
                <Typography style={styles.modalTitle}>Select Date</Typography>
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

      {/* Android Native Picker */}
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

const PhoneInputWithCode = ({
  label,
  placeholder,
  value,
  onChangeText,
  countryConfig,
  setCountryConfig,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.dropdownContainer}>
        {label && <Typography style={styles.label}>{label}</Typography>}
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            style={styles.countryCodePicker}
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
          >
            <Typography style={styles.flagEmoji}>
              {countryConfig.flag}
            </Typography>
            <Typography style={styles.countryCodeText}>
              {countryConfig.code}
            </Typography>
            <Feather
              name="chevron-down"
              size={rs(16)}
              color="#9CA3AF"
              style={styles.countryCodeIcon}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <RNTextInput
            placeholder={placeholder}
            style={styles.innerPhoneInput}
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
      <DropdownModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={COUNTRY_CODES}
        onSelect={item => setCountryConfig(item)}
        title="Select Country Region"
        renderItem={item => (
          <View style={styles.countryRow}>
            <Typography style={styles.countryFlag}>{item.flag}</Typography>
            <Typography style={styles.countryName}>
              {item.name} ({item.code})
            </Typography>
          </View>
        )}
      />
    </>
  );
};

const AddJobScreen = ({ navigation }) => {
  const [jobName, setJobName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  const [countryConfig, setCountryConfig] = useState(COUNTRY_CODES[0]);
  const [priority, setPriority] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTeam, setAssignedTeam] = useState('');
  const insets = useSafeAreaInsets();

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
            <Typography style={styles.headerTitle}>Add New Job</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TextInput
            label="Job Name"
            placeholder="Enter Job Name"
            value={jobName}
            onChangeText={setJobName}
          />

          <TextInput
            label="Email"
            placeholder="e.g. info@sarah.org"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Regular Phone Input as seen in screenshot */}
          <TextInput
            label="Phone"
            placeholder="e.g. +1 23 456 7890"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          {/* Complex Phone Input as seen in screenshot */}
          <PhoneInputWithCode
            label="Phone Number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            countryConfig={countryConfig}
            setCountryConfig={setCountryConfig}
          />

          <CustomDropdown
            label="Priority"
            placeholder="Priority e.g. High"
            value={priority}
            options={PRIORITIES}
            onSelect={setPriority}
          />

          <DateInput
            label="Wedding/Event Date"
            placeholder="Select Date"
            value={eventDate}
            onDateChange={setEventDate}
          />

          <CustomDropdown
            label="Status"
            placeholder="Select Status"
            value={status}
            options={STATUSES}
            onSelect={setStatus}
          />

          <CustomDropdown
            label="Assigned Team"
            placeholder="Select Member"
            value={assignedTeam}
            options={TEAMS}
            onSelect={setAssignedTeam}
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

          <View style={styles.actionsContainer}>
            <Button
              title="Save Job"
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rs(56),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    // backgroundColor: '#FAFAFA',
    paddingHorizontal: rs(16),
  },
  inputText: {
    fontSize: rs(16),
    color: '#1A1A1A',
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(56),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: 'transparent',
  },
  countryCodePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(16),
    height: '100%',
  },
  flagEmoji: {
    fontSize: rs(20),
    marginRight: rs(8),
  },
  countryCodeText: {
    fontSize: rs(16),
    color: '#1A1A1A',
    fontWeight: '500',
  },
  countryCodeIcon: {
    marginLeft: rs(4),
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#D4D4D4',
  },
  innerPhoneInput: {
    flex: 1,
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
    borderWidth: 0,
    height: '100%',
    color: '#1A1A1A',
  },
  multiLineInputContainer: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    minHeight: rs(120),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
  },
  multiLineInput: {
    height: undefined,
    minHeight: rs(100),
    textAlignVertical: 'top',
    color: '#1A1A1A',
  },
  bottomPadding: {
    height: rs(40), // decreased since buttons are natively in flow
  },
  actionsContainer: {
    marginTop: rs(24),
  },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    marginBottom: rs(4),
  },
  cancelButton: {
    borderColor: '#000000',
    borderWidth: 1,
  },
  // Modal Styles
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
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryFlag: {
    fontSize: rs(24),
    marginRight: rs(12),
  },
  countryName: {
    fontSize: rs(16),
    color: '#1A1A1A',
  },
});

export default AddJobScreen;
