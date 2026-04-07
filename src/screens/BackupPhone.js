import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import InputField from '../components/InputField';
import PhoneInputField from '../components/PhoneInputField';

const BackupPhoneScreen = ({ navigation }) => {
  const [newPhone, setNewPhone] = useState('');
  
  const currentPhone = '+1 (514) 550-3281';
  
  const [selectedCountry, setSelectedCountry] = useState({
    flag: '🇺🇸',
    code: '+1',
  });

  const handleContinue = () => {
   navigation.navigate('VerifyAccount', {
  type: 'phone',
  contact: '+1 (514) 550-3281'
});
  };

  const handleCountryPress = () => {
    // Open country picker
    console.log('Open country picker');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={"Backup Phone"} />
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
          {/* Current Phone - Using InputField (read-only) */}
          <InputField
            label="Current"
            value={currentPhone}
            editable={false}
            containerStyle={styles.currentInputContainer}
            style={styles.currentInput}
          />

          {/* New Phone Section */}
          <Text style={styles.sectionLabel}>New Phone</Text>
          
          <PhoneInputField
            value={newPhone}
            onChangeText={setNewPhone}
            country={selectedCountry}
            onPressCountry={handleCountryPress}
            placeholder="Phone Number"
          />

          {/* Spacer to push button down */}
          <View style={styles.spacer} />

          {/* Continue Button */}
          <TouchableOpacity 
            style={[styles.continueButton, !newPhone && styles.continueButtonDisabled]}
            onPress={handleContinue}
            disabled={!newPhone}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#f8f9fa',
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
    flexGrow: 1,
  },
  currentInputContainer: {
    backgroundColor: colors.white ,
    borderColor: colors.inputBorder ,
  },
  currentInput: {
    color: colors.grayDark12,
  },
  sectionLabel: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    fontWeight: '500',
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
  },
  spacer: {
    flex: 1,
    maxHeight: responsiveHeight(4),
  },
  continueButton: {
    backgroundColor: colors.blueAccent ,
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveHeight(2.2),
    alignItems: 'center',
    // Shadow
    shadowColor: colors.blueAccent ,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  continueButtonDisabled: {
    backgroundColor: (colors.blueAccent ) + '80', // 50% opacity
    shadowOpacity: 0,
    elevation: 0,
  },
  continueButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '500',
    color: colors.white,
  },
});

export default BackupPhoneScreen;