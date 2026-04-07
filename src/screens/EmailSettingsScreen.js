import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import InputField from '../components/InputField';

const EmailSettingsScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    senderName: 'Velofolio',
    senderEmail: 'hello@velofolio.com',
    replyToEmail: 'support@velofolio.com',
    footerSignature: 'Lumière Studios\nWedding Films & Photography\nwww.lumierestudios.com',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={"Email Settings"} />
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
          {/* Sender Name */}
          <InputField
            label="Sender Name (From)"
            value={formData.senderName}
            onChangeText={(text) => handleChange('senderName', text)}
            containerStyle={styles.inputContainer}
          />

          {/* Sender Email Address */}
          <InputField
            label="Sender Email Address (Reply to)"
            value={formData.senderEmail}
            onChangeText={(text) => handleChange('senderEmail', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.inputContainer}
          />

          {/* Reply-To Email */}
          <InputField
            label="Reply-To Email"
            value={formData.replyToEmail}
            onChangeText={(text) => handleChange('replyToEmail', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.inputContainer}
          />

          {/* Footer Signature */}
          <View style={styles.textAreaWrapper}>
            <InputField
              label="Footer Signature"
              value={formData.footerSignature}
              onChangeText={(text) => handleChange('footerSignature', text)}
              multiline
              numberOfLines={4}
              containerStyle={styles.textAreaContainer}
              style={styles.textAreaInput}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  headWrapper: {
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
    paddingTop: responsiveWidth(6),
    paddingBottom: responsiveWidth(8),
  },
  inputContainer: {
    backgroundColor: colors.white || '#ffffff',
    borderColor: colors.inputBorder || '#d1d5db',
    marginBottom: responsiveHeight(2.5),
  },
  textAreaWrapper: {
    marginBottom: responsiveHeight(2.5),
  },
  textAreaContainer: {
    backgroundColor: colors.gray,
    borderColor: 'transparent',
    height: responsiveHeight(15),
    alignItems: 'flex-start',
    paddingTop: responsiveHeight(1.5),
  },
  textAreaInput: {
    height: '100%',
    textAlignVertical: 'top',
    lineHeight: responsiveHeight(2.5),
    color:colors.grayDark
  },
});

export default EmailSettingsScreen;