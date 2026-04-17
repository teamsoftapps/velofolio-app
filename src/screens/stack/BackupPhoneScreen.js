import React from 'react';
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
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BackupPhoneScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Backup Phone</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Current Phone */}
        <Typography style={styles.inputLabel}>Current</Typography>
        <TextInput
          style={styles.disabledField}
          value="+1 (514) 550-3281"
          editable={false}
        />

        {/* New Phone */}
        <Typography style={styles.inputLabel}>New Phone</Typography>
        
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity style={styles.countrySelector} activeOpacity={0.6}>
            <Image 
              source={{uri: 'https://flagcdn.com/w40/us.png'}} 
              style={styles.flagIcon} 
            />
            <Typography style={styles.countryCode}>+1</Typography>
            <Feather name="chevron-down" size={rs(16)} color="#9CA3AF" />
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TextInput
            style={styles.phoneInputField}
            placeholder="Phone Number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.continueButton} activeOpacity={0.9} onPress={() => navigation.goBack()}>
          <Typography style={styles.continueButtonText}>Continue</Typography>
        </TouchableOpacity>

      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
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
  
  inputLabel: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(8),
  },
  disabledField: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF', // darker border to match mock
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    height: rs(52),
    fontSize: rs(15),
    color: '#6B7280',
    marginBottom: rs(24),
  },

  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    height: rs(52),
    marginBottom: rs(32),
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(16),
  },
  flagIcon: {
    width: rs(22),
    height: rs(16),
    resizeMode: 'cover',
    borderRadius: rs(2),
  },
  countryCode: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '500',
    marginHorizontal: rs(6),
  },
  divider: {
    width: 1,
    height: rs(24),
    backgroundColor: '#D1D5DB',
  },
  phoneInputField: {
    flex: 1,
    paddingHorizontal: rs(16),
    fontSize: rs(15),
    color: '#111827',
    height: '100%',
  },

  continueButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default BackupPhoneScreen;
