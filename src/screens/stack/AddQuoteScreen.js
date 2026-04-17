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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { rs, rh } from '../../utils/dimensions';

const PO_NUMBERS = ['-'];
const PAYMENTS = ['No split payments', '50/50 Split', 'Custom Installments'];

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
        title={`Select ${label || 'Option'}`}
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

const LineItemRow = ({ label, value, valueStyle }) => (
  <View style={styles.cardLineRow}>
    <Typography style={styles.cardLineLabel}>{label}</Typography>
    <Typography style={[styles.cardLineValue, valueStyle]}>{value}</Typography>
  </View>
);

// Dummy Item Data based on screenshot
const DUMMY_PACKAGES = [
  { id: 1, expanded: false },
  { id: 2, expanded: true },
  { id: 3, expanded: false },
];

const AddQuoteScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [quoteId, setQuoteId] = useState('20251126-01');
  const [issueDate, setIssueDate] = useState('26/11/25');
  const [poNumber, setPoNumber] = useState('-');
  const [intro, setIntro] = useState('');
  const [paymentSchedule, setPaymentSchedule] = useState('No split payments');

  const [autoGenInvoice, setAutoGenInvoice] = useState(true);
  const [showInPortal, setShowInPortal] = useState(true);

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
            <Typography style={styles.headerTitle}>Add Quote</Typography>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TextInput
            label="Quote ID"
            placeholder="e.g. 20251126-01"
            value={quoteId}
            onChangeText={setQuoteId}
          />

          <View style={{ marginBottom: rs(-12) }}>
            <DateInput
              label="Issue Date"
              placeholder="Select Date"
              value={issueDate}
              onDateChange={setIssueDate}
            />
          </View>

          <CustomDropdown
            label="PO Number"
            placeholder="-"
            value={poNumber}
            options={PO_NUMBERS}
            onSelect={setPoNumber}
          />

          {/* Introduction Multiline Input */}
          <View style={styles.dropdownContainer}>
            <Typography style={styles.label}>Introduction</Typography>
            <View style={styles.multiLineInputContainer}>
              <RNTextInput
                placeholder="E.g. Thank your for considering me as your photographer!"
                value={intro}
                onChangeText={setIntro}
                multiline={true}
                numberOfLines={4}
                style={styles.multiLineInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View style={styles.flatDivider} />

          {/* Products & Packages Section */}
          <View style={styles.sectionHeader}>
            <Typography style={styles.sectionTitle}>
              Products & Packages
            </Typography>
            <Typography style={styles.sectionDesc}>
              Add products and packages to this invoice.
            </Typography>
          </View>

          {/* Dummy Active Package Cards */}
          {DUMMY_PACKAGES.map((pkg, index) => (
            <View key={pkg.id} style={styles.packageCard}>
              <View style={styles.packageCardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name="file-text" size={rs(18)} color="#6B7280" />
                  <Typography style={styles.packageCardTitle}>
                    Ultimate Family Memories
                  </Typography>
                </View>
                <Typography style={styles.packageCardTotal}>
                  $1999.00
                </Typography>
              </View>

              <View style={styles.packageCardInner}>
                <View
                  style={[styles.cardLineRow, { alignItems: 'flex-start' }]}
                >
                  <Typography style={[styles.cardLineLabel, { flex: 0.3 }]}>
                    Description
                  </Typography>
                  <View style={{ flex: 0.7 }}>
                    <Typography
                      style={[
                        styles.cardLineValue,
                        { fontWeight: '600', marginBottom: rs(12) },
                      ]}
                    >
                      {
                        'A deluxe package created for\nfamilies wanting timeless wall art\nand keepsake prints.'
                      }
                    </Typography>
                    {pkg.expanded ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          alignSelf: 'flex-end',
                          marginBottom: rs(12),
                        }}
                      >
                        <Typography
                          style={[styles.cardLineValue, { fontWeight: '600' }]}
                        >
                          {'families wanting timeless wal '}
                        </Typography>
                        <Feather
                          name="chevron-down"
                          size={rs(16)}
                          color="#000"
                        />
                      </View>
                    ) : (
                      <Typography
                        style={[
                          styles.cardLineValue,
                          { fontWeight: '600', marginBottom: rs(12) },
                        ]}
                      >
                        {
                          '1.5-hour outdoor or studio session\nAll best photos (40+ fully edited)\n2x Medium 16" x 24" canvases\n10x 5" x 7" premium matte prints\nCustom USB with all images'
                        }
                      </Typography>
                    )}
                  </View>
                </View>

                {pkg.expanded && (
                  <>
                    <LineItemRow
                      label="Unit Price"
                      value="$4999.00"
                      valueStyle={{ fontWeight: '600' }}
                    />
                    <LineItemRow
                      label="Quantity"
                      value="1"
                      valueStyle={{ fontWeight: '600' }}
                    />
                    <LineItemRow
                      label="Discount"
                      value="0%"
                      valueStyle={{ fontWeight: '600' }}
                    />
                  </>
                )}

                <LineItemRow
                  label="Tax"
                  value="No Tax"
                  valueStyle={{ fontWeight: '600' }}
                />
                <LineItemRow
                  label="Amount"
                  value="$4999.00"
                  valueStyle={{ fontWeight: '600' }}
                />
              </View>

              <View style={styles.packageActionsRow}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Feather name="edit-2" size={rs(14)} color="#111827" />
                  <Typography style={styles.actionBtnText}>Edit</Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <Feather name="copy" size={rs(14)} color="#111827" />
                  <Typography style={styles.actionBtnText}>
                    Duplicate
                  </Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <Feather name="trash-2" size={rs(14)} color="#EF4444" />
                  <Typography
                    style={[styles.actionBtnText, { color: '#EF4444' }]}
                  >
                    Delete
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <Button
            title="+ Add Products"
            onPress={() => {}}
            style={styles.addProductsBtn}
            textStyle={{ color: '#FFFFFF' }}
          />

          <View style={[styles.flatDivider, { marginVertical: rs(16) }]} />

          {/* Payment Schedule Section */}
          <View style={styles.sectionHeader}>
            <Typography style={styles.sectionTitle}>
              Payment Schedule
            </Typography>
            <Typography style={styles.sectionDesc}>
              Assign a payment schedule to this invoice.
            </Typography>
          </View>

          <CustomDropdown
            placeholder="Select payment split"
            value={paymentSchedule}
            options={PAYMENTS}
            onSelect={setPaymentSchedule}
          />

          <View style={styles.flatDivider} />

          {/* Summary Box */}
          <View style={styles.summaryCard}>
            <Typography style={styles.summaryLabelTop}>Summary</Typography>

            <View style={styles.summaryInner}>
              <View style={styles.summaryRow}>
                <View style={styles.summaryIconText}>
                  <Feather name="copy" size={rs(14)} color="#6B7280" />
                  <Typography style={styles.summaryLabelText}>
                    Payments
                  </Typography>
                </View>
                <Typography style={styles.summaryValueTextBold}>1</Typography>
              </View>

              <View style={styles.summaryRow}>
                <View style={styles.summaryIconText}>
                  <Feather name="clock" size={rs(14)} color="#6B7280" />
                  <Typography style={styles.summaryLabelText}>Due</Typography>
                </View>
                <Typography style={styles.summaryValueTextRed}>
                  Dec 1, 2025
                </Typography>
              </View>

              <View style={styles.summaryRow}>
                <View style={styles.summaryIconText}>
                  <Feather name="dollar-sign" size={rs(14)} color="#6B7280" />
                  <Typography style={styles.summaryLabelText}>
                    Amount
                  </Typography>
                </View>
                <Typography style={styles.summaryValueTextBold}>
                  100% of order
                </Typography>
              </View>
            </View>
          </View>

          {/* Optional Checkboxes */}
          <View style={styles.checkboxGroup}>
            <Checkbox
              label="Automatically generate an invoice once the quote is accepted."
              isChecked={autoGenInvoice}
              onChange={setAutoGenInvoice}
            />
            <Checkbox
              label="Show in Client Portal"
              isChecked={showInPortal}
              onChange={setShowInPortal}
            />
          </View>

          <View style={[styles.flatDivider, { marginTop: rs(4) }]} />

          <View style={styles.actionsContainer}>
            <Button
              title="Save Quote"
              onPress={() => navigation.navigate('QuoteDetail')}
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

  flatDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: rs(24),
  },

  sectionHeader: { marginBottom: rs(12) },
  sectionTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(4),
  },
  sectionDesc: { fontSize: rs(14), color: '#6B7280' },

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
    // backgroundColor: '#FAFAFA',
    paddingHorizontal: rs(16),
  },
  inputText: { fontSize: rs(15), color: '#1A1A1A' },
  placeholderText: { color: '#9CA3AF' },

  multiLineInputContainer: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    minHeight: rs(120),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
    backgroundColor: '#FAFAFA',
  },
  multiLineInput: {
    height: undefined,
    minHeight: rs(100),
    textAlignVertical: 'top',
    fontSize: rs(15),
    color: '#1A1A1A',
  },

  /* Added Package Cards Styling */
  packageCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(12),
    paddingTop: rs(16),
    paddingBottom: rs(12),
    paddingHorizontal: rs(12),
    marginBottom: rs(16),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  packageCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rs(16),
    paddingHorizontal: rs(4),
  },
  packageCardTitle: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
    marginLeft: rs(8),
  },
  packageCardTotal: {
    fontSize: rs(15),
    fontWeight: '600',
    color: '#111827',
  },
  packageCardInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(8),
    padding: rs(16),
    marginBottom: rs(12),
  },
  cardLineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(10),
  },
  cardLineLabel: {
    fontSize: rs(13),
    color: '#6B7280',
    fontWeight: '400',
  },
  cardLineValue: {
    fontSize: rs(13),
    color: '#111827',
    textAlign: 'right',
  },
  packageActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(8),
    height: rs(36),
    backgroundColor: '#FAF9F6',
    marginHorizontal: rs(4),
  },
  actionBtnText: {
    fontSize: rs(13),
    fontWeight: '500',
    color: '#111827',
    marginLeft: rs(6),
  },

  addProductsBtn: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(12),
    marginBottom: rs(12),
  },

  /* Summary Card Styling */
  summaryCard: {
    backgroundColor: '#EBEBEB',
    borderRadius: rs(12),
    paddingTop: rs(16),
    paddingBottom: rs(16),
    paddingHorizontal: rs(16),
    marginBottom: rs(24),
  },
  summaryLabelTop: {
    fontSize: rs(15),
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: rs(12),
  },
  summaryInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(8),
    padding: rs(14),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  summaryIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryLabelText: {
    marginLeft: rs(8),
    fontSize: rs(14),
    color: '#6B7280',
    fontWeight: '400',
  },
  summaryValueTextBold: {
    fontSize: rs(14),
    color: '#111827',
    fontWeight: '600',
  },
  summaryValueTextRed: {
    fontSize: rs(14),
    color: '#EF4444',
    fontWeight: '600',
  },

  checkboxGroup: {
    marginBottom: rs(10),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rs(8),
  },
  checkboxBox: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(4),
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
    flex: 1,
  },

  bottomPadding: { height: rs(40) },
  actionsContainer: { marginTop: rs(20) },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    marginBottom: rs(12),
  },
  cancelButton: {
    borderColor: '#E5E7EB',
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

export default AddQuoteScreen;
