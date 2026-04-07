import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';
import InputField from '../components/InputField';
import ButtonSimple from '../components/Button';

const AddPaymentMethod = ({ navigation }) => {
  const [name, setName] = useState('Sarah Johnson');
  const [cardNumber, setCardNumber] = useState('4978');
  const [expDate, setExpDate] = useState('01/27');
  const [cvv, setCvv] = useState('000');
  const [isDefault, setIsDefault] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Add Payment Method" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Card Preview */}
          <LinearGradient
            colors={['#1A1A1A', '#00A4D6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.cardPreview}
          >
            <View style={styles.cardTop}>
              <CustomText style={styles.previewName}>{name || 'Cardholder Name'}</CustomText>
              <MaterialCommunityIcons name="wifi" size={24} color={colors.white} style={styles.wifiIcon} />
            </View>

            <View style={styles.cardMiddle}>
              <CustomText style={styles.previewLabel}>Card Number</CustomText>
              <CustomText style={styles.previewNumber}>
                {cardNumber || '4978'} <CustomText style={styles.previewX}>XXXX XXXX XXXX</CustomText>
              </CustomText>
            </View>

            <View style={styles.cardBottom}>
              <View>
                <CustomText style={styles.previewLabel}>Expiry Date</CustomText>
                <CustomText style={styles.previewValue}>{expDate || '01/27'}</CustomText>
              </View>
              <View style={{ marginLeft: responsiveWidth(10) }}>
                <CustomText style={styles.previewLabel}>CVV</CustomText>
                <CustomText style={styles.previewValueX}>{cvv ? '***' : 'XXX'}</CustomText>
              </View>
              <View style={styles.mcLogoContainer}>
                <View style={[styles.mcCircle, { backgroundColor: '#EB001B' }]} />
                <View style={[styles.mcCircle, { backgroundColor: '#F79E1B', marginLeft: -12 }]} />
              </View>
            </View>
          </LinearGradient>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <CustomText style={styles.label}>Full Name</CustomText>
              <InputField
                value={name}
                onChangeText={setName}
                placeholder="Enter full name"
                containerStyle={styles.inputContainer}
              />
            </View>

            <View style={styles.inputGroup}>
              <CustomText style={styles.label}>Card Number</CustomText>
              <View style={styles.inputWithIcon}>
                <MaterialCommunityIcons 
                  name="credit-card-outline" 
                  size={24} 
                  color={colors.textPrimary || '#222222'} 
                  style={styles.fieldIcon} 
                />
                <TextInput
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  placeholder="Enter card number"
                  placeholderTextColor={colors.textPlaceholder || '#999999'}
                  style={styles.textInput}
                />
              </View>
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <CustomText style={styles.label}>Exp Date</CustomText>
                <InputField
                  value={expDate}
                  onChangeText={setExpDate}
                  placeholder="MM/YY"
                  containerStyle={styles.inputContainer}
                />
              </View>
              <View style={[styles.inputGroup, { flex: 1, marginLeft: responsiveWidth(4) }]}>
                <CustomText style={styles.label}>CVV Code</CustomText>
                <InputField
                  value={cvv}
                  onChangeText={setCvv}
                  placeholder="000"
                  secureTextEntry
                  containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Default Checkbox */}
            <TouchableOpacity 
              style={styles.checkboxContainer} 
              onPress={() => setIsDefault(!isDefault)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, isDefault && styles.checkboxChecked]}>
                {isDefault && <Ionicons name="checkmark" size={16} color={colors.white} />}
              </View>
              <CustomText style={styles.checkboxLabel}>Set as default payment method</CustomText>
            </TouchableOpacity>
          </View>

          {/* Add Button */}
          <ButtonSimple
            title="Add"
            onPress={() => navigation.goBack()}
            style={styles.addButton}
            textStyle={styles.addButtonText}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(2),
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(4),
  },
  cardPreview: {
    width: '100%',
    height: responsiveHeight(24),
    borderRadius: responsiveWidth(6),
    padding: responsiveWidth(6),
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewName: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  wifiIcon: {
    transform: [{ rotate: '90deg' }],
  },
  cardMiddle: {
    marginVertical: responsiveHeight(1),
  },
  previewLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: responsiveFontSize(1.4),
    marginBottom: 4,
  },
  previewNumber: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    letterSpacing: 1,
  },
  previewX: {
    color: 'rgba(255,255,255,0.4)',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  previewValue: {
    color: colors.white,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
  },
  previewValueX: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    letterSpacing: 2,
  },
  mcLogoContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  mcCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    opacity: 0.9,
  },
  form: {
    gap: responsiveHeight(2),
  },
  inputGroup: {
    marginBottom: responsiveHeight(1),
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1),
  },
  inputContainer: {
    backgroundColor: '#F7F7F7',
    borderColor: colors.gray || '#E1E1E1',
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(7),
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderColor: colors.gray || '#E1E1E1',
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(3),
  },
  fieldIcon: {
    marginRight: responsiveWidth(2),
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: responsiveFontSize(2),
    color: colors.black || '#000000',
    padding: 0,
  },
  rowInputs: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.bluePrimary || '#00B1E7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
  },
  checkboxChecked: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
  },
  checkboxLabel: {
    fontSize: responsiveFontSize(1.8),
    color: colors.textPrimary || '#222222',
  },
  addButton: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
  },
  addButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
});

export default AddPaymentMethod;
