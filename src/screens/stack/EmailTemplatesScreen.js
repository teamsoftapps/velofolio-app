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

const TEMPLATES = [
  { id: 1, title: 'Booking Confirmation', description: 'Your booking with {{client_name}} is confirmed!' },
  { id: 2, title: 'Invoice Sent', description: 'Your booking with {{client_name}} is confirmed!' },
  { id: 3, title: 'Payment Reminder', description: 'Your booking with {{client_name}} is confirmed!' },
  { id: 4, title: 'Contract Sent', description: 'Your booking with {{client_name}} is confirmed!' },
  { id: 5, title: 'Job Assigned', description: 'Your booking with {{client_name}} is confirmed!' },
];

const EmailTemplatesScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Email Templates</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {TEMPLATES.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.templateCard} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('EditEmailTemplate')}
          >
            <View style={styles.templateInfo}>
              <Typography style={styles.templateTitle}>{item.title}</Typography>
              <Typography style={styles.templateDesc}>{item.description}</Typography>
            </View>
            <Feather name="chevron-right" size={rs(20)} color="#D1D5DB" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addTemplateButton} activeOpacity={0.7}>
          <Feather name="plus" size={rs(20)} color="#111827" style={styles.addIcon} />
          <Typography style={styles.addTemplateText}>Add Template</Typography>
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
  templateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(16),
    marginBottom: rs(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  templateInfo: {
    flex: 1,
    paddingRight: rs(16),
  },
  templateTitle: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#111827',
    marginBottom: rs(4),
  },
  templateDesc: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  addTemplateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    paddingVertical: rs(16),
    marginTop: rs(12),
  },
  addIcon: {
    marginRight: rs(8),
  },
  addTemplateText: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#111827',
  },
});

export default EmailTemplatesScreen;
