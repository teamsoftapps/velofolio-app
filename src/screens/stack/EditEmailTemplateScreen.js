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

const EditEmailTemplateScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Edit Email Template</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Typography style={styles.inputLabel}>Name</Typography>
        <TextInput
          style={styles.inputField}
          value="Booking Confirmation"
          placeholderTextColor="#9CA3AF"
        />

        <Typography style={styles.inputLabel}>Subject</Typography>
        <TextInput
          style={styles.inputField}
          value="Your booking with {{client_name}} is confirmed!"
          placeholderTextColor="#9CA3AF"
        />

        <Typography style={styles.inputLabel}>Reply-To Email</Typography>
        <TextInput
          style={[styles.inputField, styles.textArea]}
          value={"Hi {{client_name}},\nYour booking for {{event_date}} is confirmed.\nWe're excited to work with you!"}
          placeholderTextColor="#9CA3AF"
          multiline={true}
          textAlignVertical="top"
        />

        <View style={styles.infoBox}>
          <Feather name="pen-tool" size={rs(20)} color="#111827" style={styles.infoIcon} />
          <Typography style={styles.infoText}>
            Email signature from Settings will appear under this message.
          </Typography>
        </View>

        <TouchableOpacity style={styles.saveButton} activeOpacity={0.9} onPress={() => navigation.goBack()}>
          <Typography style={styles.saveButtonText}>Save Template</Typography>
        </TouchableOpacity>

        <View style={{ height: rh(40) }} />
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
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(8),
  },
  inputField: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    height: rs(52),
    fontSize: rs(15),
    color: '#111827',
    marginBottom: rs(20),
  },
  textArea: {
    height: rs(140),
    paddingTop: rs(16),
    paddingBottom: rs(16),
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E0F2FE', // light blue
    borderRadius: rs(12),
    padding: rs(16),
    marginBottom: rs(32),
  },
  infoIcon: {
    marginRight: rs(12),
    marginTop: rs(2), 
  },
  infoText: {
    flex: 1,
    fontSize: rs(14),
    color: '#111827',
    lineHeight: rs(20),
  },
  saveButton: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default EditEmailTemplateScreen;
