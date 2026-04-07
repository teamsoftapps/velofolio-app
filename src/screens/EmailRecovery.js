import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  TextInput,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import React, { useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CurrentEmailCard from "../components/RecoveryEmailCard"

const RecoveryEmailScreen = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState('');
  
  const currentEmail = 'demo@gmail.com';

  const handleContinue = () => {
navigation.navigate('VerifyAccount', {
  type: 'email',
  contact: 'noah@gmail.com'
});
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={"Recovery Email"} />
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
          {/* Current Email Card */}
 <CurrentEmailCard email={currentEmail} />
          {/* New Email Section */}
          <Text style={styles.sectionLabel}>New Recovery Email</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
              placeholder="Write Recovery Email"
              placeholderTextColor={colors.textSecondary || '#8e8e93'}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
            />
          </View>

          {/* Spacer to push button down */}
          <View style={styles.spacer} />

          {/* Continue Button */}
          <TouchableOpacity 
            style={[styles.continueButton]}
            onPress={handleContinue}
            // disabled={!newEmail}
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
  currentEmailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveWidth(6),
    // Shadow
    shadowColor: colors.black || '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emailIconContainer: {
    marginRight: responsiveWidth(3),
  },
  emailInfo: {
    flex: 1,
  },
  currentLabel: {
    fontSize: responsiveWidth(3.5),
    color: colors.textSecondary || '#8e8e93',
    marginBottom: responsiveWidth(0.5),
  },
  currentEmail: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222222',
    fontWeight: '500',
  },
  verifiedBadge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: responsiveWidth(4),
    color: colors.textPrimary || '#222222',
    fontWeight: '400',
    marginBottom: responsiveWidth(3),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: colors.border || '#e5e5ea',
    paddingHorizontal: responsiveWidth(4),
    height: responsiveWidth(14),
    justifyContent: 'center',
  },
  input: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222222',
    height: '100%',
  },
  spacer: {
    flex: 1,
    maxHeight: responsiveWidth(10),
  },
  continueButton: {
    backgroundColor: colors.blueAccent ,
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    // // Shadow
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
    backgroundColor: colors.blueAccent + '80' || '#007aff80', // 50% opacity
    shadowOpacity: 0,
    elevation: 0,
  },
  continueButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '400',
    color: colors.white,
  },
});

export default RecoveryEmailScreen;