import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomInput = ({ label, placeholder, value, onChangeText, keyboardType = 'default', maxLength, icon }) => (
  <View style={styles.inputWrapper}>
    <Typography style={styles.label}>{label}</Typography>
    <View style={styles.inputContainer}>
      {icon && <Feather name={icon} size={rs(18)} color="#6B7280" style={styles.inputIcon} />}
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  </View>
);

const AddPaymentCardScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('Sarah Johnson');
  const [number, setNumber] = useState('4978212189261321'); // updated default based on screenshot
  const [exp, setExp] = useState('01/27');
  const [cvv, setCvv] = useState('212');
  const [isDefault, setIsDefault] = useState(true);

  // Format visual card number: e.g. "4978  2121..."
  // Pad the input with X's up to 16 characters
  const paddedNumber = number.replace(/\s/g, '').padEnd(16, 'X');
  // Format into chunks of 4 with a space between groups
  const formattedNumber = paddedNumber.replace(/(.{4})/g, '$1 ').trim();

  const handleAdd = () => {
    // Navigate back to PaymentMethods and trigger success modal
    navigation.navigate('PaymentMethods', { success: true });
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>Add Payment Method</Typography>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Card Preview */}
          <ImageBackground
            source={require('../../assets/Images/card.png')}
            style={styles.cardPreview}
            imageStyle={{ borderRadius: rs(16) }}
          >
            <View style={styles.cardTop}>
              <Typography style={styles.cardNamePreview}>{name || 'Cardholder Name'}</Typography>
            </View>

            <View style={styles.cardMiddle}>
              <Typography style={styles.cardInfoLabel}>Card Number</Typography>
              <Typography style={styles.cardNumberPreview}>{formattedNumber}</Typography>
            </View>

            <View style={styles.cardBottom}>
              <View style={styles.cardBottomItem}>
                <Typography style={styles.cardInfoLabel}>Expiry Date</Typography>
                <Typography style={styles.cardValuePreview}>{exp || 'MM/YY'}</Typography>
              </View>
              <View style={[styles.cardBottomItem, styles.cvvBox]}>
                <Typography style={styles.cardInfoLabel}>CVV</Typography>
                <Typography style={[styles.cardValuePreview, styles.cvvPreview]}>XXX</Typography>
              </View>
            </View>
          </ImageBackground>

          {/* Form */}
          <CustomInput
            label="Full Name"
            placeholder="Sarah Johnson"
            value={name}
            onChangeText={setName}
          />
          
          <CustomInput
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            value={number}
            onChangeText={setNumber}
            keyboardType="number-pad"
            maxLength={19}
            icon="credit-card"
          />

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <CustomInput
                label="Exp Date"
                placeholder="MM/YY"
                value={exp}
                onChangeText={setExp}
                maxLength={5}
              />
            </View>
            <View style={styles.halfInput}>
              <CustomInput
                label="CVV Code"
                placeholder="XXX"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="number-pad"
                maxLength={4}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.checkboxRow} 
            activeOpacity={0.7}
            onPress={() => setIsDefault(!isDefault)}
          >
            <View style={[styles.checkbox, isDefault && styles.checkboxActive]}>
              {isDefault && <Feather name="check" size={rs(14)} color="#FFFFFF" />}
            </View>
            <Typography style={styles.checkboxLabel}>Set as default payment method</Typography>
          </TouchableOpacity>

          <View style={{ height: rh(100) }} />
        </ScrollView>

        <View style={[styles.bottomButtonContainer, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.8}
            onPress={handleAdd}
          >
            <Typography style={styles.addButtonText}>Add</Typography>
          </TouchableOpacity>
        </View>

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
  headerTitle: { fontSize: rs(22), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  cardPreview: {
    borderRadius: rs(16),
    padding: rs(24),
    marginBottom: rs(30),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    minHeight: rs(200),
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNamePreview: {
    fontSize: rs(18),
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardMiddle: {
    marginVertical: rs(20),
  },
  cardInfoLabel: {
    fontSize: rs(12),
    color: 'rgba(255,255,255,0.6)',
    marginBottom: rs(4),
  },
  cardNumberPreview: {
    fontSize: rs(18),
    color: '#FFFFFF',
    letterSpacing: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  cardBottomItem: {
    flex: 1,
  },
  cvvBox: {
    marginLeft: rs(20),
  },
  cardValuePreview: {
    fontSize: rs(16),
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cvvPreview: {
    color: '#38BDF8', // Emphasized CVV slightly in original mockup
  },
  mcLogoBox: {
    width: rs(40),
    height: rs(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mcCircleLeft: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    backgroundColor: '#EB001B',
    position: 'absolute',
    right: rs(14),
    zIndex: 1,
  },
  mcCircleRight: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    backgroundColor: '#F79E1B',
    position: 'absolute',
    right: 0,
  },
  
  // Forms
  inputWrapper: {
    marginBottom: rs(16),
  },
  label: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(52),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(10),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
  },
  inputIcon: {
    marginRight: rs(10),
  },
  inputText: {
    flex: 1,
    fontSize: rs(15),
    color: '#111827',
    padding: 0,
    margin: 0,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(8),
    marginBottom: rs(20),
  },
  checkbox: {
    width: rs(24),
    height: rs(24),
    borderRadius: rs(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: rs(12),
  },
  checkboxActive: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  checkboxLabel: {
    fontSize: rs(14),
    color: '#111827',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
    backgroundColor: 'transparent',
  },
  addButton: {
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
  addButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default AddPaymentCardScreen;
