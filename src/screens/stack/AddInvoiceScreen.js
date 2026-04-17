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
const PRODUCTS = ['Ultimate Family Memories', 'Basic Wedding Package', 'Corporate Shoot'];
const PAYMENTS = ['No split payments', '50/50 Split', 'Custom Installments'];

const DropdownModal = ({ visible, onClose, data, onSelect, title, renderItem }) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
    <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
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
              {renderItem ? renderItem(item) : <Typography style={styles.modalItemText}>{item}</Typography>}
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
          <Typography style={[styles.inputText, !value && styles.placeholderText]}>
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
        <Typography style={[styles.inputText, !value && styles.placeholderText]}>
          {value || placeholder}
        </Typography>
        <Feather name="calendar" size={rs(20)} color="#9CA3AF" />
      </TouchableOpacity>

      {Platform.OS === 'ios' && show && (
        <Modal transparent animationType="slide" visible={show}>
          <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setShow(false)}>
            <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
              <View style={styles.modalHeader}>
                <Typography style={styles.modalTitle}>Select Date</Typography>
                <TouchableOpacity onPress={() => setShow(false)}>
                  <Typography style={{ color: '#38BDF8', fontWeight: 'bold', fontSize: rs(16) }}>
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
        <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />
      )}
    </View>
  );
};

const AddInvoiceScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [invoiceId, setInvoiceId] = useState('20251126-01');
  const [issueDate, setIssueDate] = useState('26/11/25');
  const [poNumber, setPoNumber] = useState('-');
  const [paymentSchedule, setPaymentSchedule] = useState('No split payments');
  
  // Modal states
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Ultimate Family Memories');

  return (
    <ScreenWrapper backgroundColor="#FAF9F6" disablePaddingTop={true}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        
        {/* Main Application Header */}
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>New Invoice</Typography>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <TextInput
            label="Invoice ID"
            placeholder="e.g. 20251126-01"
            value={invoiceId}
            onChangeText={setInvoiceId}
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
          
          <View style={styles.flatDivider} />

          {/* Products & Packages Section */}
          <View style={styles.sectionHeader}>
            <Typography style={styles.sectionTitle}>Products & Packages</Typography>
            <Typography style={styles.sectionDesc}>Add products and packages to this invoice.</Typography>
          </View>

          <View style={styles.emptyStateCard}>
            <Typography style={styles.emptyStateTitle}>Start Adding Items to your Invoice</Typography>
            <Typography style={styles.emptyStateDesc}>
              You currently don’t have any product or package add to your Invoice. Click the button below to start adding them.
            </Typography>
            <TouchableOpacity 
              style={styles.addProductsBtn} 
              activeOpacity={0.8}
              onPress={() => setItemModalVisible(true)}
            >
              <Feather name="plus" size={rs(18)} color="#FFFFFF" style={{ marginRight: rs(8) }} />
              <Typography style={styles.addProductsBtnText}>Add Products & Packages</Typography>
            </TouchableOpacity>
          </View>
          
          {/* Subtotal Block */}
          <View style={styles.subtotalCard}>
            <View style={styles.subtotalRow}>
              <Typography style={styles.subtotalLabel}>Subtotal</Typography>
              <Typography style={styles.subtotalValue}>$0.00</Typography>
            </View>
            <View style={styles.subtotalRow}>
              <Typography style={styles.discountText}>Discount</Typography>
              <Typography style={styles.discountText}>None</Typography>
            </View>
            <View style={[styles.subtotalRow, { marginTop: rs(10) }]}>
              <Typography style={styles.totalDueLabel}>Total Due</Typography>
              <Typography style={styles.totalDueValue}>$0.00</Typography>
            </View>
          </View>

          <View style={[styles.flatDivider, { marginVertical: rs(16) }]} />

          {/* Payment Schedule Section */}
          <View style={styles.sectionHeader}>
            <Typography style={styles.sectionTitle}>Payment Schedule</Typography>
            <Typography style={styles.sectionDesc}>Assign a payment schedule to this invoice.</Typography>
          </View>

          <CustomDropdown
            placeholder="Select payment split"
            value={paymentSchedule}
            options={PAYMENTS}
            onSelect={setPaymentSchedule}
          />

          <View style={styles.infoAlertBox}>
            <Feather name="info" size={rs(18)} color="#38BDF8" style={{ marginTop: rs(2) }} />
            <Typography style={styles.infoAlertText}>
              A payment schedule cannot be calculated because the total amount due is $0.00.
            </Typography>
          </View>

          <View style={styles.actionsContainer}>
            <Button title="Save Invoice" onPress={() => navigation.goBack()} style={styles.saveButton} />
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

      {/* Embedded Add Item Modal */}
      <Modal visible={itemModalVisible} transparent animationType="slide" onRequestClose={() => setItemModalVisible(false)}>
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setItemModalVisible(false)}>
          <View style={[styles.modalContent, styles.addItemModalContent]} onStartShouldSetResponder={() => true}>
            <View style={[styles.modalHeader, { borderBottomWidth: 0, paddingBottom: rs(8) }]}>
              <Typography style={styles.modalTitle}>Add Item</Typography>
              <TouchableOpacity onPress={() => setItemModalVisible(false)} style={styles.closeIconCircle}>
                <Feather name="x" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>
            
            <View style={{ paddingHorizontal: rs(20), paddingBottom: rh(40) }}>
              <CustomDropdown
                label="Choose Existing Product / Package"
                placeholder="Ultimate Family Memories"
                value={selectedProduct}
                options={PRODUCTS}
                onSelect={setSelectedProduct}
              />
              <CustomDropdown
                label="Product / Package Name *"
                placeholder="Ultimate Family Memories"
                value={selectedProduct}
                options={PRODUCTS}
                onSelect={setSelectedProduct}
              />

              <Typography style={styles.label}>Image (optional)</Typography>
              <TouchableOpacity style={styles.uploadBox} activeOpacity={0.8}>
                <Feather name="cloud-upload" size={rs(28)} color="#000" style={{ marginBottom: rs(10) }} />
                <Typography style={styles.uploadText}>Click to upload an image.</Typography>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

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
    marginVertical: rs(12),
  },

  sectionHeader: { marginBottom: rs(12) },
  sectionTitle: { fontSize: rs(16), fontWeight: '700', color: '#111827', marginBottom: rs(4) },
  sectionDesc: { fontSize: rs(14), color: '#6B7280' },

  emptyStateCard: {
    backgroundColor: '#EBEBEB',
    borderRadius: rs(12),
    padding: rs(24),
    alignItems: 'center',
    marginBottom: rs(24),
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
  emptyStateTitle: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: rs(8),
    textAlign: 'center',
  },
  emptyStateDesc: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: rs(20),
    lineHeight: rs(20),
  },
  addProductsBtn: {
    backgroundColor: '#38BDF8',
    height: rs(44),
    borderRadius: rs(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: rs(20),
  },
  addProductsBtnText: {
    color: '#FFFFFF',
    fontSize: rs(15),
    fontWeight: '500',
  },

  subtotalCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(12),
    padding: rs(16),
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(8),
  },
  subtotalLabel: { fontSize: rs(15), color: '#111827', fontWeight: '500' },
  subtotalValue: { fontSize: rs(15), color: '#111827', fontWeight: '600' },
  discountText: { fontSize: rs(14), color: '#38BDF8' },
  totalDueLabel: { fontSize: rs(16), color: '#111827', fontWeight: '600' },
  totalDueValue: { fontSize: rs(16), color: '#111827', fontWeight: '700' },

  infoAlertBox: {
    backgroundColor: '#E0F2FE',
    borderRadius: rs(12),
    padding: rs(12),
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: rs(16),
  },
  infoAlertText: {
    flex: 1,
    marginLeft: rs(8),
    fontSize: rs(13),
    color: '#111827',
    lineHeight: rs(18),
  },

  dropdownContainer: { marginVertical: rs(10) },
  label: { fontSize: rs(14), color: '#6B7280', marginBottom: rs(8), fontWeight: '500' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: '#FAFAFA',
    paddingHorizontal: rs(16),
  },
  inputText: { fontSize: rs(15), color: '#1A1A1A' },
  placeholderText: { color: '#9CA3AF' },
  
  bottomPadding: { height: rs(40) },
  actionsContainer: { marginTop: rs(32) },
  saveButton: { backgroundColor: '#38BDF8', borderRadius: rs(28), marginBottom: rs(12) },
  cancelButton: { borderColor: '#E5E7EB', borderWidth: 1, backgroundColor: '#FAFAFA' },
  
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(24),
    borderTopRightRadius: rs(24),
    maxHeight: '70%',
    paddingBottom: rs(20),
  },
  addItemModalContent: {
    maxHeight: '85%',
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
  modalTitle: { fontSize: rs(20), fontWeight: '700', color: '#111827' },
  closeIconCircle: {
    width: rs(32),
    height: rs(32),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalItem: { paddingHorizontal: rs(20), paddingVertical: rs(16), borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  modalItemText: { fontSize: rs(16), color: '#1A1A1A' },

  uploadBox: {
    height: rs(140),
    backgroundColor: '#EBEBEB',
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rs(4),
  },
  uploadText: {
    fontSize: rs(14),
    color: '#000',
    fontWeight: '400',
  },
});

export default AddInvoiceScreen;
