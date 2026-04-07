import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import InputField from '../components/InputField';
import ButtonSimple from '../components/Button';
import CustomText from '../components/CustomText';

const EditEmailTemplate = ({ navigation, route }) => {
  const template = route?.params?.template;

  const [name, setName] = useState(template?.title || '');
  const [subject, setSubject] = useState(template?.snippet || '');
  const [body, setBody] = useState(
    template?.body || 
    "Hi {{client_name}},\nYour booking for {{event_date}} is confirmed.\nWe're excited to work with you!"
  );

  const handleSave = () => {
    console.log('Template saved:', { name, subject, body });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Edit Email Template" />
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
          {/* Name Input */}
          <View style={styles.inputGroup}>
            <CustomText style={styles.label}>Name</CustomText>
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="Enter template name"
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Subject Input */}
          <View style={styles.inputGroup}>
            <CustomText style={styles.label}>Subject</CustomText>
            <InputField
              value={subject}
              onChangeText={setSubject}
              placeholder="Enter subject"
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Body / Reply-To Email Input */}
          <View style={styles.inputGroup}>
            <CustomText style={styles.label}>Reply-To Email</CustomText>
            <InputField
              value={body}
              onChangeText={setBody}
              placeholder="Enter body"
              multiline
              numberOfLines={6}
              containerStyle={styles.textAreaContainer}
              style={styles.textAreaInput}
            />
          </View>

          {/* Note Banner */}
          <View style={styles.noteBanner}>
            <MaterialCommunityIcons name="fountain-pen-tip" size={20} color={colors.textPrimary || '#222222'} />
            <CustomText style={styles.noteText}>
              Email signature from Settings will appear under this message.
            </CustomText>
          </View>

          {/* Save Button */}
          <ButtonSimple
            title="Save Template"
            onPress={handleSave}
            style={styles.saveButton}
            textStyle={styles.saveButtonText}
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
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
  inputGroup: {
    marginBottom: responsiveHeight(2.5),
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: colors.gray || '#E1E1E1',
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(7),
  },
  textAreaContainer: {
    backgroundColor: colors.white,
    borderColor: colors.gray || '#E1E1E1',
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(20),
    alignItems: 'flex-start',
    paddingTop: responsiveHeight(2),
  },
  textAreaInput: {
    height: '100%',
    textAlignVertical: 'top',
    fontSize: responsiveFontSize(1.8),
    color: colors.textPrimary || '#222222',
  },
  noteBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7FD',
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(4),
  },
  noteText: {
    fontSize: responsiveFontSize(1.6),
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(2),
    flex: 1,
  },
  saveButton: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
    elevation: 3,
    shadowColor: '#00B1E7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
});

export default EditEmailTemplate;
