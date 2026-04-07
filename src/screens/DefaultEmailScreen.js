import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform,
  Text
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import JobForm from '../components/Form';

const DefaultEmailScreen = ({ navigation }) => {
  const [descriptionVisible, setDescriptionVisible] = useState(true);

  const fields = [
    {
      name: 'senderName',
      label: 'Sender Name',
      type: 'text',
      placeholder: 'Enter sender name',
    },
    {
      name: 'replyToEmail',
      label: 'Reply-To Email',
      type: 'text',
      placeholder: 'Enter reply-to email',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
  ];

  const handleSubmit = (formData) => {
    console.log('Default Email Settings:', formData);
    // Save logic here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={" "} />
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
          {/* Description Text */}
            <Text style={styles.title}>
            Default Email
          </Text>
          <Text style={styles.description}>
            All outgoing emails will be sent from no-reply@velofolio.email. You can change your sender name and reply-to address.
          </Text>

          {/* Form */}
          <JobForm
            fields={fields}
            onSubmit={handleSubmit}
            submitText="Use Default"
            type='passsave'
          />
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
    // backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(4),
    paddingBottom: responsiveWidth(8),
  },
  title:{
 fontSize: responsiveWidth(5.8),
     marginBottom: responsiveHeight(3),

  },
  description: {
    fontSize: responsiveWidth(3.8),
    color: colors.textSecondary || '#6b7280',
    lineHeight: responsiveHeight(2.8),
    marginBottom: responsiveHeight(3),
  },
});

export default DefaultEmailScreen;