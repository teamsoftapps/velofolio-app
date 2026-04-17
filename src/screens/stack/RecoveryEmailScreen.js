import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const RecoveryEmailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Recovery Email</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Current Email Block */}
        <View style={styles.currentBlock}>
          <View style={styles.currentLeft}>
            <Feather name="mail" size={rs(20)} color="#111827" />
            <View style={styles.currentTextContainer}>
              <Typography style={styles.currentLabel}>Current</Typography>
              <Typography style={styles.currentEmail}>demo@gmail.com</Typography>
            </View>
          </View>
          <View style={styles.checkCircle}>
            <Feather name="check" size={rs(12)} color="#FFFFFF" />
          </View>
        </View>

        {/* New Recovery Email Input */}
        <Typography style={styles.inputLabel}>New Recovery Email</Typography>
        <TextInput
          style={styles.inputField}
          placeholder="Write Recovery Email"
          placeholderTextColor="#9CA3AF"
          autoCapitalize="none"
          keyboardType="email-address"
        />

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
  
  currentBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(24),
  },
  currentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentTextContainer: {
    marginLeft: rs(16),
  },
  currentLabel: {
    fontSize: rs(12),
    color: '#9CA3AF',
    marginBottom: rs(2),
  },
  currentEmail: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '500',
  },
  checkCircle: {
    width: rs(20),
    height: rs(20),
    borderRadius: rs(10),
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputLabel: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputField: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    height: rs(52),
    fontSize: rs(15),
    color: '#111827',
    marginBottom: rs(32),
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

export default RecoveryEmailScreen;
