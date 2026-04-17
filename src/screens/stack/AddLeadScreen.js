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

const PRIORITIES = ['Low', 'Medium', 'High'];
const STATUSES = ['New', 'In Progress', 'Lost', 'Won'];
const JOB_TYPES = ['Wedding', 'Birthday', 'Corporate', 'Other'];
const LEAD_SOURCES = ['Facebook', 'Instagram', 'Website', 'Referral'];

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

const Checkbox = ({ label, isChecked, onChange }) => (
  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={() => onChange(!isChecked)}
    activeOpacity={0.8}
  >
    <View style={[styles.checkboxBox, isChecked && styles.checkboxBoxChecked]}>
      {isChecked && <Feather name="check" size={rs(16)} color="#FFFFFF" />}
    </View>
    <Typography style={styles.checkboxLabel}>{label}</Typography>
  </TouchableOpacity>
);

const AddLeadScreen = ({ navigation }) => {
  const [clientName, setClientName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [noDateConfirmed, setNoDateConfirmed] = useState(false);
  const [jobType, setJobType] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [notes, setNotes] = useState('');
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
            <Typography style={styles.headerTitle}>Add Lead</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.clientContactCard}>
            <Typography style={styles.label}>Primary Client Contact</Typography>
            <View style={styles.inputBoxAlt}>
              <RNTextInput
                placeholder="Start entering client name"
                placeholderTextColor="#9CA3AF"
                value={clientName}
                onChangeText={setClientName}
                style={styles.innerRNInput}
              />
            </View>

            <Typography style={styles.orText}>OR</Typography>

            <TouchableOpacity
              style={styles.addClientButton}
              activeOpacity={0.8}
            >
              <Feather
                name="plus"
                size={rs(20)}
                color="#FFFFFF"
                style={{ marginRight: rs(8) }}
              />
              <Typography style={styles.addClientText}>
                Add New Client
              </Typography>
            </TouchableOpacity>
          </View>

          <TextInput
            label="Lead Name"
            placeholder="Enter Lead Name"
            value={leadName}
            onChangeText={setLeadName}
          />

          <CustomDropdown
            label="Priority"
            placeholder="Low / Medium / High"
            value={priority}
            options={PRIORITIES}
            onSelect={setPriority}
          />

          <CustomDropdown
            label="Status"
            placeholder="Select Status"
            value={status}
            options={STATUSES}
            onSelect={setStatus}
          />

          <View style={{ marginBottom: rs(-12) }}>
            <DateInput
              label="Wedding/Event Date"
              placeholder="Select Date"
              value={eventDate}
              onDateChange={setEventDate}
            />
          </View>

          <Checkbox
            label="No date has been confirmed yet"
            isChecked={noDateConfirmed}
            onChange={setNoDateConfirmed}
          />

          <CustomDropdown
            label="Job Type"
            placeholder="Wedding"
            value={jobType}
            options={JOB_TYPES}
            onSelect={setJobType}
          />

          <CustomDropdown
            label="Lead Source"
            placeholder="e.g. Facebook, Instagram, Website"
            value={leadSource}
            options={LEAD_SOURCES}
            onSelect={setLeadSource}
          />

          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Notes</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="Write note"
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
              title="Save Lead"
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#000' },

  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },

  scrollContent: { paddingHorizontal: rs(20), paddingBottom: rh(40) },

  clientContactCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(20),
  },
  inputBoxAlt: {
    height: rs(56),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: 'transparent',
    paddingHorizontal: rs(16),
    justifyContent: 'center',
  },
  innerRNInput: {
    fontSize: rs(16),
    color: '#1A1A1A',
    padding: 0,
    margin: 0,
  },
  orText: {
    textAlign: 'center',
    color: '#111827',
    fontSize: rs(14),
    fontWeight: '500',
    marginVertical: rs(14),
  },
  addClientButton: {
    backgroundColor: '#38BDF8',
    height: rs(48),
    borderRadius: rs(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  addClientText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '500',
  },

  dropdownContainer: { marginVertical: rs(12) },
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
  inputText: { fontSize: rs(16), color: '#1A1A1A' },
  placeholderText: { color: '#9CA3AF' },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rs(16),
  },
  checkboxBox: {
    width: rs(24),
    height: rs(24),
    borderRadius: rs(6),
    borderWidth: 1,
    borderColor: '#9CA3AF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  checkboxBoxChecked: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  checkboxLabel: {
    fontSize: rs(14),
    color: '#111827',
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
  bottomPadding: { height: rs(40) },
  actionsContainer: { marginTop: rs(24) },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    marginBottom: rs(4),
  },
  cancelButton: { borderColor: '#000000', borderWidth: 1 },

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
  modalTitle: { fontSize: rs(18), fontWeight: '700', color: '#111827' },
  modalItem: {
    paddingHorizontal: rs(20),
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemText: { fontSize: rs(16), color: '#1A1A1A' },
});

export default AddLeadScreen;
