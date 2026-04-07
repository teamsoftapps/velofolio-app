import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import InputField from '../components/InputField';
import ButtonSimple from '../components/Button';
import CustomText from '../components/CustomText';

const GmailSettingPage = ({ navigation }) => {
  const [senderName, setSenderName] = useState('Lumiere Studio');
  const [connectedEmail, setConnectedEmail] = useState('hello@lumierestudio.com');

  const handleSave = () => {
    console.log('Settings saved:', { senderName, connectedEmail });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header using CustomHeader Component */}
      <View style={styles.headWrapper}>
        <CustomHeader title="Gmail Settings" />
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
          {/* Sender Name Input */}
          <View style={styles.inputGroup}>
            <CustomText style={styles.label}>Sender Name (From)</CustomText>
            <InputField
              value={senderName}
              onChangeText={setSenderName}
              placeholder="Enter sender name"
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Connected Email Input */}
          <View style={styles.inputGroup}>
            <CustomText style={styles.label}>Connected Email Address</CustomText>
            <InputField
              value={connectedEmail}
              onChangeText={setConnectedEmail}
              placeholder="Enter email address"
              keyboardType="email-address"
              autoCapitalize="none"
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Save Button */}
          <ButtonSimple
            title="Save Settings"
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
    backgroundColor: colors.screenBackground || '#F9F9F9',
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
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
  inputGroup: {
    marginBottom: responsiveHeight(3),
  },
  label: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(1.5),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: colors.gray || '#E1E1E1',
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(8),
  },
  saveButton: {
    backgroundColor: colors.bluePrimary || '#00B1E7',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(7.5),
    marginTop: responsiveHeight(1),
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

export default GmailSettingPage;
