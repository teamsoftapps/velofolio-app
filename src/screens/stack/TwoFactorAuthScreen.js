import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TwoFactorAuthScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Typography style={styles.title}>Two-Factor Authentication</Typography>
        <Typography style={styles.subtitle}>
          Add your phone number to receive a{'\n'}secure login code every time you sign in.
        </Typography>

        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Feather name="phone" size={rs(20)} color="#111827" style={styles.addIcon} />
          <Typography style={styles.addText}>Add 2FA Phone Number</Typography>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FAFAFA',
    paddingBottom: rs(8),
  },
  header: {
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
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    lineHeight: rs(22),
    marginBottom: rs(24),
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    paddingHorizontal: rs(20),
  },
  addIcon: {
    marginRight: rs(12),
  },
  addText: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#111827',
  },
});

export default TwoFactorAuthScreen;
