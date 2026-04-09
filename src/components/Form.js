// components/forms/JobForm.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
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
  submitText = 'Save Job',
  type = '',
}) {
  // ── Form state ────────────────────────────────────────────────
  const [formData, setFormData] = useState({});
  const [isPassword, setisPassword] = useState(false); // for password toggle

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
                label={field.options.find(o => !value) ? 'Select...' : ' '}
                value=""
                enabled={false} // optional: gray out placeholder
              />
              {field.options.map(opt => (
                <Picker.Item
                  key={opt.value}
                  label={opt.label}
                  value={opt.value}
                  color={Platform.OS === 'ios' ? colors.black : undefined}
                />
              ))}
            </Picker>
          </View>
        </View>
      );
    }
    if (field.type === 'date') {
      return (
        <View key={field.name} style={styles.selectWrapper}>
          <Text style={styles.label}>{field.label}</Text>

          <TouchableOpacity
            style={styles.selectTouchable}
            onPress={() => {
              // Placeholder logic – replace with real picker later
              if (field.type === 'select') {
                const idx = field.options.indexOf(value);
                const next = field.options[(idx + 1) % field.options.length];
                handleChange(field.name, next);
              } else {
                handleChange(field.name, '2026-07-15'); // demo
              }
            }}
          >
            <Text style={[styles.selectText, !value && styles.placeholder]}>
              {value || field.placeholder}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.formContainer}>
      {fields.map(renderField)}
      {submitText !== 'CompanyProfile' && (
        <View>
          <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
            <Text style={styles.submitText}>{submitText}</Text>
          </TouchableOpacity>
          {type !== 'passsave' && (
            <TouchableOpacity
              style={[styles.Button, styles.cancel]}
              // onPress={() => onSubmit?.(formData)}
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
    backgroundColor: 'transparent',
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
});
