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

const BrandingCustomizationScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FFFFFF" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Branding & Customization</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoCard}>
          <Feather name="monitor" size={rs(48)} color="#111827" style={styles.icon} />
          <Typography style={styles.title}>Manage on Web</Typography>
          <Typography style={styles.subtitle}>
            For full branding customization, please use{'\n'}the web dashboard.
          </Typography>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
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
  },
  headerTitle: { fontSize: rs(20), fontWeight: '600', color: '#111827' },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(40),
  },
  infoCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(24),
    paddingVertical: rs(48),
    paddingHorizontal: rs(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: rs(20),
  },
  title: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  subtitle: {
    fontSize: rs(15),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(22),
  },
});

export default BrandingCustomizationScreen;
