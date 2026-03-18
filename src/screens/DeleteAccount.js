import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
import colors from '../utils/colors';

const DeleteAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={"Delete My Account"} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Warning Message */}
        <Text style={styles.heading}>Are you sure you want to delete your account?</Text>
        
        <Text style={styles.description}>
          We're sorry to see you go. Deleting your account will permanently remove your profile, projects, clients, payments, and all associated data from our system.
        </Text>
        
        <Text style={styles.warning}>This action cannot be undone.</Text>
        
        <Text style={styles.supportText}>
          If you're experiencing an issue, our support team may be able to help before you decide to leave.
        </Text>

        {/* Download Data Card */}
        <View style={styles.downloadCard}>
          <Text style={styles.downloadTitle}>Download My Data</Text>
          <Text style={styles.downloadDescription}>
            Want a copy of your data before leaving?{'\n'}
            You can download a full export of your{'\n'}
            projects, clients, and invoices.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('DownloadData')}>
            <Text style={styles.downloadLink}>Download My Data</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Support */}
        <TouchableOpacity onPress={() => navigation.navigate('Support')}>
          <Text style={styles.supportLink}>Contact Support</Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => navigation.navigate('DeleteFeedbackScreen')}
        >
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    // backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    // paddingTop: responsiveWidth(6),
    paddingBottom: responsiveWidth(8),
  },
  heading: {
    fontSize: responsiveWidth(4.9),
    fontWeight: '500',
    color: colors.black,
    marginBottom: responsiveWidth(4),
    lineHeight: responsiveWidth(7.5),
  },
  description: {
    fontSize: responsiveWidth(3.9),
    color: colors.grayDark12,
    lineHeight: responsiveWidth(5.8),
    marginBottom: responsiveWidth(3),
  },
  warning: {
    fontSize: responsiveWidth(3.8),
    color: colors.grayDark12,
    lineHeight: responsiveWidth(5.8),
    marginBottom: responsiveWidth(3),
  },
  supportText: {
    fontSize: responsiveWidth(3.8),
    color: colors.grayDark12,
    lineHeight: responsiveWidth(5.8),
    marginBottom: responsiveWidth(8),
  },
  downloadCard: {
    backgroundColor: '#e8e8e8',
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveWidth(6),
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
    marginBottom: responsiveWidth(6),
  },
  downloadTitle: {
    fontSize: responsiveWidth(4.4),
    fontWeight: '500',
    color: colors.black,
    marginBottom: responsiveWidth(3),
  },
  downloadDescription: {
    fontSize: responsiveWidth(3.5),
    color: colors.grayDark12,
    textAlign: 'center',
    lineHeight: responsiveWidth(5.2),
    marginBottom: responsiveWidth(3),
  },
  downloadLink: {
    fontSize: responsiveWidth(3.8),
    color: colors.blueAccent,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  supportLink: {
    fontSize: responsiveWidth(3.8),
    color: colors.blueAccent,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: responsiveWidth(5),
  },
  deleteButton: {
    backgroundColor: colors.red,
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    marginBottom: responsiveWidth(3),
  },
  deleteButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '400',
    color: colors.white,
  },
  goBackButton: {
    backgroundColor: colors.white,
  borderRadius: responsiveWidth(50),  
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c7c7cc',
  },
  goBackButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '400',
    color: colors.black,
  },
});

export default DeleteAccountScreen;