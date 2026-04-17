import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HELP_TOPICS = [
  {
    id: 1,
    icon: 'send',
    title: 'Getting Started',
    description: 'Learn the basics of setting up your workspace and navigating the platform.',
    iconColor: '#38BDF8',
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Clients & ...',
    description: 'Add clients, customer rel...',
    iconColor: '#38BDF8',
  },
];

const FAQS = [
  {
    id: 1,
    question: 'How do I create a new job?',
    answer: 'Learn the basics of setting up your workspace and navigating the platform.',
  },
  { id: 2, question: 'How do I send an invoice to a client?' },
  { id: 3, question: 'How can I invite a team member?' },
  { id: 4, question: 'How do I update job status?' },
  { id: 5, question: 'Can I download invoices as PDF?' },
  { id: 6, question: 'How do I enable 2F authentication?' },
];

const HelpCentreScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [expandedId, setExpandedId] = useState(1);

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentPadding}>
          <Typography style={styles.title}>Help Center</Typography>
          <Typography style={styles.subtitle}>
            Find quick answers, learn how features work, or contact our support team if you need help.
          </Typography>

          <View style={styles.searchBar}>
            <Feather name="search" size={rs(20)} color="#9CA3AF" />
            <TextInput
              placeholder="Search for guides, features, or questions..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Typography style={styles.sectionTitle}>Browse Help Topics</Typography>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topicsScroll}
        >
          {HELP_TOPICS.map(topic => (
            <View key={topic.id} style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <Feather name={topic.icon} size={rs(24)} color={topic.iconColor} />
                <Feather name="arrow-up-right" size={rs(20)} color={topic.iconColor} />
              </View>
              <Typography style={styles.topicTitle}>{topic.title}</Typography>
              <Typography style={styles.topicDescription} numberOfLines={2}>
                {topic.description}
              </Typography>
            </View>
          ))}
        </ScrollView>

        <Typography style={styles.sectionTitle}>Popular Questions</Typography>
        {FAQS.map(faq => (
          <TouchableOpacity
            key={faq.id}
            style={styles.faqCard}
            onPress={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            activeOpacity={0.7}
          >
            <View style={styles.faqHeader}>
              <Typography
                style={[
                  styles.faqQuestion,
                  expandedId === faq.id && { color: '#111827', fontWeight: '700' },
                ]}
              >
                {faq.question}
              </Typography>
              <Feather
                name={expandedId === faq.id ? 'minus' : 'plus'}
                size={rs(20)}
                color="#6B7280"
              />
            </View>
            {expandedId === faq.id && faq.answer && (
              <Typography style={styles.faqAnswer}>{faq.answer}</Typography>
            )}
          </TouchableOpacity>
        ))}

        <View style={styles.stillNeedHelpCard}>
          <Typography style={styles.stillNeedHelpTitle}>Still Need Help?</Typography>
          <Typography style={styles.stillNeedHelpText}>
            If you can't find what you're looking for, our support team is here to help.
          </Typography>
          <TouchableOpacity onPress={() => navigation.navigate('ContactSupport')}>
            <Typography style={styles.contactSupportText}>Contact Support</Typography>
          </TouchableOpacity>
        </View>

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
    paddingBottom: rs(20),
    marginBottom: rs(4),
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(8),
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
  contentPadding: {
    paddingHorizontal: rs(20),
    marginTop: rs(10),
  },
  title: {
    fontSize: rs(24),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  subtitle: {
    fontSize: rs(14),
    color: '#9CA3AF',
    lineHeight: rs(20),
    marginBottom: rs(20),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(54),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    marginLeft: rs(10),
    fontSize: rs(14),
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
  },
  sectionTitle: {
    fontSize: rs(15),
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: rs(16),
  },
  topicsScroll: {
    paddingBottom: rs(24),
    paddingRight: rs(20),
  },
  topicCard: {
    width: rs(240),
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    marginRight: rs(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(16),
  },
  topicTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  topicDescription: {
    fontSize: rs(13),
    color: '#9CA3AF',
    lineHeight: rs(18),
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    padding: rs(20),
    marginBottom: rs(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    flex: 1,
    fontSize: rs(15),
    color: '#6B7280',
    fontWeight: '500',
    marginRight: rs(10),
  },
  faqAnswer: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginTop: rs(12),
    lineHeight: rs(18),
  },
  stillNeedHelpCard: {
    backgroundColor: '#EEEEEE',
    borderRadius: rs(16),
    padding: rs(24),
    marginTop: rs(12),
    alignItems: 'center',
  },
  stillNeedHelpTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(8),
  },
  stillNeedHelpText: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: rs(16),
    lineHeight: rs(20),
  },
  contactSupportText: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#38BDF8',
    textDecorationLine: 'underline',
  },
});

export default HelpCentreScreen;
