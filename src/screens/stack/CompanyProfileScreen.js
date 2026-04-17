import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Image,
  Modal,
  FlatList,
  TextInput as RNTextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COUNTRY_CODES = [
  { flag: '🇺🇸', code: '+1', name: 'USA/Canada' },
  { flag: '🇬🇧', code: '+44', name: 'UK' },
  { flag: '🇦🇺', code: '+61', name: 'Australia' },
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
          keyExtractor={(_, index) => index.toString()}
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

const CustomInputWithRightIcon = ({
  label,
  placeholder,
  value,
  icon,
  onIconPress,
  onPress,
  onChangeText,
}) => (
  <View style={styles.dropdownContainer}>
    {label && <Typography style={styles.label}>{label}</Typography>}
    <TouchableOpacity
      style={styles.inputContainer}
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
    >
      <RNTextInput
        style={[styles.inputText, !onPress && { flex: 1, padding: 0 }]}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        editable={!onPress}
        onChangeText={onChangeText}
        pointerEvents={onPress ? 'none' : 'auto'}
      />
      {icon && (
        <TouchableOpacity
          onPress={onIconPress || onPress}
          disabled={!onIconPress && !onPress}
        >
          <Feather name={icon} size={rs(20)} color="#9CA3AF" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  </View>
);

const CompanyProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [showToast, setShowToast] = useState(true);

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
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
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Company Profile</Typography>
          </View>

          {/* Profile Avatar */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                style={styles.avatarImage}
              />
            </View>
            <TouchableOpacity style={styles.editAvatarBtn} activeOpacity={0.8}>
              <Feather name="edit-2" size={rs(12)} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TextInput label="Company / Studio Name" value="Lumiere Studio" />
          <TextInput label="Website" value="www.lumierestudio.com" />
          <TextInput
            label="Company Email"
            placeholder="Enter your business email address"
          />

          {/* Phone Input */}
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
                keyboardType="phone-pad"
                style={styles.innerPhoneInput}
              />
            </View>
          </View>

          <CustomInputWithRightIcon
            label="Street Address"
            placeholder="Enter your street address"
          />
          <CustomInputWithRightIcon
            label="City / Suburb"
            placeholder="Enter your city or suburb"
          />
          <CustomInputWithRightIcon
            label="State / County"
            placeholder="Enter your state or county"
          />
          <TextInput
            label="Postcode / Zip"
            placeholder="Enter your postcode or zip code"
          />
          <CustomInputWithRightIcon
            label="Country"
            placeholder="Select your country"
          />
          <CustomInputWithRightIcon
            label="Timezone"
            placeholder="e.g., GMT -08:00 Pacific Time"
          />

          <View style={styles.bottomPadding} />
        </ScrollView>

        {/* Changes Saved Toast */}
        {/* {showToast && (
          <View style={styles.toastContainer}>
            <View style={styles.toast}>
              <View style={styles.toastIconWrapper}>
                <Feather name="check" size={rs(14)} color="#111827" />
              </View>
              <Typography style={styles.toastText}>Changes saved</Typography>
            </View>
          </View>
        )} */}
      </KeyboardAvoidingView>

      <DropdownModal
        visible={countryCodeModalVisible}
        onClose={() => setCountryCodeModalVisible(false)}
        data={COUNTRY_CODES}
        onSelect={setCountryCode}
        title="Select Country Code"
        renderItem={item => `${item.flag}  ${item.code} (${item.name})`}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(24),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(20),
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: rs(20),
    top: rs(10),
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  headerTitle: { fontSize: rs(20), fontWeight: '600', color: '#111827' },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rs(8),
  },
  avatarContainer: {
    width: rs(80),
    height: rs(80),
    borderRadius: rs(40),
    borderWidth: rs(2),
    borderColor: '#38BDF8',
    padding: rs(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: rs(40),
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: rs(0),
    right: rs(140),
    backgroundColor: '#38BDF8',
    width: rs(24),
    height: rs(24),
    borderRadius: rs(12),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { paddingHorizontal: rs(20), paddingBottom: rh(80) },
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
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(12),
  },
  phonePrefix: { flexDirection: 'row', alignItems: 'center' },
  phonePrefixText: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '500',
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
  bottomPadding: { height: rs(40) },
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
  toastContainer: {
    position: 'absolute',
    bottom: rs(30),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  toast: {
    backgroundColor: '#374151',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(16),
    paddingVertical: rs(10),
    borderRadius: rs(8),
  },
  toastIconWrapper: {
    width: rs(20),
    height: rs(20),
    borderRadius: rs(10),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rs(10),
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: rs(14),
    fontWeight: '500',
  },
});

export default CompanyProfileScreen;
