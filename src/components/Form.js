// components/forms/JobForm.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Modal,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Picker } from '@react-native-picker/picker'; // adjust path if needed
import InputField from './InputField'; // adjust path
import colors from '../utils/colors';

export default function JobForm({
  fields,
  onSubmit,
  onCancel,
  submitText = 'Save Job',
  type = '',
}) {
  // ── Form state ────────────────────────────────────────────────
  const [formData, setFormData] = useState({});
  const [isPassword, setisPassword] = useState(false); // for password toggle
  const [showPicker, setShowPicker] = useState(false);
  const [activePickerField, setActivePickerField] = useState(null);
  const [tempDate, setTempDate] = useState(new Date());
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [activeSelectField, setActiveSelectField] = useState(null);

  const handleChange = (name, value) => {
    console.log('changing field:', name, value); // 🔥 add this

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const allowedKeys = fields.map(f => f.name);

    const filteredData = Object.keys(formData).reduce((acc, key) => {
      if (allowedKeys.includes(key)) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});
    if (
      !Object.values(filteredData).every(
        v => v !== undefined && v !== null && v.toString().trim() !== '',
      )
    ) {
      return;
    }

    onSubmit?.(filteredData);
  };

  // ── Render helper ─────────────────────────────────────────────
  const renderField = field => {
    const value = formData[field.name] ?? '';

    if (field.type === 'password') {
      return (
        <InputField
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          value={value}
          onChangeText={text => handleChange(field.name, text)}
          keyboardType={field.keyboardType}
          autoCapitalize={field.autoCapitalize}
          multiline={field.multiline}
          numberOfLines={field.numberOfLines}
          labelStyle={styles.label}
          containerStyle={styles.inputContainer}
          isPassword={isPassword}
        />
      );
    }
    if (field.type === 'text') {
      return (
        <InputField
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          value={value}
          onChangeText={text => handleChange(field.name, text)}
          keyboardType={field.keyboardType}
          autoCapitalize={field.autoCapitalize}
          multiline={field.multiline}
          numberOfLines={field.numberOfLines}
          labelStyle={styles.label}
          containerStyle={styles.inputContainer}
        />
      );
    }
    if (field.type === 'textarea') {
      return (
        <InputField
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          value={value}
          onChangeText={text => handleChange(field.name, text)}
          keyboardType={field.keyboardType}
          autoCapitalize={field.autoCapitalize}
          multiline={field.multiline}
          numberOfLines={field.numberOfLines}
          labelStyle={styles.label}
          containerStyle={styles.texrarea}
          style={styles.texrareaInput}
        />
      );
    }
    if (field.type === 'select') {
      if (Platform.OS === 'ios') {
        const selectedOption = field.options.find(
          opt => (opt.value || opt) === value,
        );
        const displayLabel = selectedOption
          ? selectedOption.label || selectedOption
          : field.placeholder || 'Select...';

        return (
          <View key={field.name} style={styles.fieldWrapper}>
            <Text style={styles.label}>{field.label}</Text>
            <TouchableOpacity
              style={styles.selectTouchable}
              onPress={() => {
                setActiveSelectField(field);
                setShowSelectModal(true);
              }}
            >
              <View style={styles.selectContent}>
                <Text style={[styles.selectText, !value && styles.placeholder]}>
                  {displayLabel}
                </Text>
                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color={colors.grayDark || '#9CA3AF'}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <View key={field.name} style={styles.fieldWrapper}>
          <Text style={styles.label}>{field.label}</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => handleChange(field.name, itemValue)}
              style={styles.picker}
              dropdownIconColor={colors.iconSecondary}
              mode="dropdown" // Android dropdown style
            >
              <Picker.Item
                label={field.placeholder || 'Select...'}
                value=""
                enabled={false}
              />
              {field.options.map(opt => (
                <Picker.Item
                  key={opt.value || opt}
                  label={opt.label || opt}
                  value={opt.value || opt}
                  color={Platform.OS === 'ios' ? colors.black : undefined}
                />
              ))}
            </Picker>
          </View>
        </View>
      );
    }
    if (field.type === 'date') {
      const dateValue = value ? new Date(value) : new Date();
      return (
        <View key={field.name} style={styles.selectWrapper}>
          <Text style={styles.label}>{field.label}</Text>

          <TouchableOpacity
            style={styles.selectTouchable}
            onPress={() => {
              setActivePickerField(field.name);
              setTempDate(dateValue);
              setShowPicker(true);
            }}
          >
            <View style={styles.selectContent}>
              <Text style={[styles.selectText, !value && styles.placeholder]}>
                {value || field.placeholder}
              </Text>
              <Ionicons
                name="calendar-outline"
                size={20}
                color={colors.grayDark || '#9CA3AF'}
              />
            </View>
          </TouchableOpacity>

          {Platform.OS === 'ios' ? (
            <Modal
              visible={showPicker && activePickerField === field.name}
              transparent={true}
              animationType="slide"
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => setShowPicker(false)}>
                      <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>{field.label}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        const formattedDate = tempDate
                          .toISOString()
                          .split('T')[0];
                        handleChange(field.name, formattedDate);
                        setShowPicker(false);
                      }}
                    >
                      <Text
                        style={[styles.modalButtonText, { fontWeight: 'bold' }]}
                      >
                        Done
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <DateTimePicker
                    value={tempDate}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                      if (selectedDate) setTempDate(selectedDate);
                    }}
                  />
                </View>
              </View>
            </Modal>
          ) : (
            showPicker &&
            activePickerField === field.name && (
              <DateTimePicker
                value={dateValue}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowPicker(false);
                  if (selectedDate) {
                    const formattedDate = selectedDate
                      .toISOString()
                      .split('T')[0];
                    handleChange(field.name, formattedDate);
                  }
                }}
              />
            )
          )}
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.formContainer}>
      {fields.map(renderField)}

      {/* iOS Select Modal */}
      {Platform.OS === 'ios' && activeSelectField && (
        <Modal
          visible={showSelectModal}
          transparent={true}
          animationType="fade"
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowSelectModal(false)}
          >
            <View style={styles.selectModalContent}>
              <View style={styles.selectModalHeader}>
                <Text style={styles.modalTitle}>{activeSelectField.label}</Text>
              </View>
              <ScrollView>
                {activeSelectField.options.map((opt, index) => {
                  const optVal = opt.value || opt;
                  const optLabel = opt.label || opt;
                  const isSelected =
                    (formData[activeSelectField.name] || '') === optVal;

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.optionItem,
                        index === activeSelectField.options.length - 1 && {
                          borderBottomWidth: 0,
                        },
                      ]}
                      onPress={() => {
                        handleChange(activeSelectField.name, optVal);
                        setShowSelectModal(false);
                      }}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          isSelected && styles.selectedOptionText,
                        ]}
                      >
                        {optLabel}
                      </Text>
                      {isSelected && (
                        <Ionicons
                          name="checkmark"
                          size={20}
                          color={colors.blueAccent}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
              <TouchableOpacity
                style={styles.selectModalCancel}
                onPress={() => setShowSelectModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.red }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {submitText !== 'CompanyProfile' && (
        <View>
          <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
            <Text style={styles.submitText}>{submitText}</Text>
          </TouchableOpacity>
          {type !== 'passsave' && (
            <TouchableOpacity
              style={[styles.Button, styles.cancel]}
              onPress={() => onCancel?.()}
            >
              <Text style={styles.cancelText}>Cancel </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    // paddingBottom: responsiveHeight(2),
  },
  selectWrapper: {
    marginBottom: responsiveHeight(2.5),
  },
  label: {
    fontSize: responsiveWidth(4.4),
    fontWeight: '400',
    marginBottom: responsiveHeight(0.8),
  },
  selectTouchable: {
    height: responsiveHeight(7.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    backgroundColor: '#F9FAFB', // Light gray background like in image
  },
  selectContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: responsiveWidth(3),
    backgroundColor: 'transparent',
  },
  selectText: {
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  placeholder: {
    color: colors.textPlaceholder,
  },
  Button: {
    marginTop: responsiveHeight(2),
    backgroundColor: colors.blueAccent,
    paddingVertical: responsiveHeight(2),

    borderRadius: responsiveWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    backgroundColor: 'transparent',
    borderWidth: responsiveWidth(0.6),
    borderColor: colors.gray,
  },
  cancelText: {
    color: colors.black,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  submitText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '400',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: responsiveWidth(3),
    backgroundColor: 'transparent',
    overflow: 'hidden', // clean corners
    marginBottom: responsiveHeight(2),
  },
  picker: {
    height: responsiveHeight(7.5),
    width: '100%',
    color: colors.black,
    fontSize: responsiveFontSize(2),
  },
  texrarea: {
    height: responsiveHeight(14),
    borderRadius: responsiveWidth(3),
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: responsiveHeight(1),
  },

  texrareaInput: {
    height: responsiveHeight(12),
    textAlignVertical: 'top', // 🔥 VERY IMPORTANT
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
    paddingBottom: responsiveHeight(4),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: responsiveWidth(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  modalTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: colors.black,
  },
  modalButtonText: {
    fontSize: responsiveFontSize(2),
    color: colors.blueAccent,
  },
  selectModalContent: {
    backgroundColor: colors.white,
    marginHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(5),
    borderRadius: responsiveWidth(4),
    maxHeight: responsiveHeight(50),
    overflow: 'hidden',
  },
  selectModalHeader: {
    padding: responsiveWidth(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    alignItems: 'center',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: responsiveWidth(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  optionText: {
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  selectedOptionText: {
    color: colors.blueAccent,
    fontWeight: '600',
  },
  selectModalCancel: {
    padding: responsiveWidth(4),
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
});
