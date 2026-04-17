import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import CountryPickerModal from '../../components/CountryPickerModal';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AddPhoneNumberScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ 
    name: 'United States', 
    code: '+1', 
    flag: 'us' 
  });

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Add Phone Number</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.inputLabel}>Add a Phone Number</Typography>
        
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity 
            style={styles.countrySelector} 
            activeOpacity={0.6}
            onPress={() => setShowCountryModal(true)}
          >
            <Image 
              source={{uri: `https://flagcdn.com/w40/${selectedCountry.flag}.png`}} 
              style={styles.flagIcon} 
            />
            <Typography style={styles.countryCode}>{selectedCountry.code}</Typography>
            <Feather name="chevron-down" size={rs(16)} color="#9CA3AF" />
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TextInput
            style={styles.phoneInputField}
            placeholder="Phone Number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity 
          style={styles.continueButton} 
          activeOpacity={0.9} 
          onPress={() => navigation.navigate('Verify2FA', { phoneNumber })}
        >
          <Typography style={styles.continueButtonText}>Continue</Typography>
        </TouchableOpacity>

      </ScrollView>

      <CountryPickerModal
        visible={showCountryModal}
        onClose={() => setShowCountryModal(false)}
        onSelect={setSelectedCountry}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(12),
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
  headerTitle: { fontSize: rs(24), fontWeight: '700', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
  },
  inputLabel: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(16),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    height: rs(60),
    marginBottom: rs(32),
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(16),
  },
  flagIcon: {
    width: rs(24),
    height: rs(18),
    resizeMode: 'cover',
    borderRadius: rs(2),
  },
  countryCode: {
    fontSize: rs(16),
    color: '#111827',
    fontWeight: '500',
    marginHorizontal: rs(8),
  },
  divider: {
    width: 1,
    height: rs(30),
    backgroundColor: '#D1D5DB',
  },
  phoneInputField: {
    flex: 1,
    paddingHorizontal: rs(16),
    fontSize: rs(16),
    color: '#111827',
    height: '100%',
  },
  continueButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(28),
    paddingVertical: rs(18),
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: rs(18),
    fontWeight: '700',
  },
});

export default AddPhoneNumberScreen;
