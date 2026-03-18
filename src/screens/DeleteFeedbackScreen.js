import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';

const DeleteFeedbackScreen = ({ navigation }) => {
  const [selectedReasons, setSelectedReasons] = useState(['Other']);

  const reasons = [
    { id: '1', label: 'I no longer need the app' },
    { id: '2', label: 'I found a better alternative' },
    { id: '3', label: 'The app is too expensive' },
    { id: '4', label: 'I experienced technical issues' },
    { id: '5', label: 'Missing features I need' },
    { id: '6', label: "I'm concerned about privacy" },
    { id: '7', label: 'Other' },
  ];

  const toggleReason = (id) => {
    if (selectedReasons.includes(id)) {
      setSelectedReasons(selectedReasons.filter((item) => item !== id));
    } else {
      setSelectedReasons([...selectedReasons, id]);
    }
  };

  const handleContinue = () => {
    navigation.navigate('ConfirmDelete');
  };

  const renderCheckbox = (item) => {
    const isSelected = selectedReasons.includes(item.id);
    
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.checkboxRow}
        onPress={() => toggleReason(item.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && (
            <Ionicons name="checkmark" size={16} color={colors.white} />
          )}
        </View>
        <Text style={styles.checkboxLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headWrapper}>
        <CustomHeader title={" "} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.heading}>Before you go...</Text>
          <Text style={styles.subheading}>Why did you decide to delete your account?</Text>
        </View>

        {/* Checkboxes List */}
        <View style={styles.checkboxList}>
          {reasons.map(renderCheckbox)}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.goBackButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(6),
    paddingBottom: responsiveWidth(8),
    flexGrow: 1,
  },
  titleSection: {
    marginBottom: responsiveWidth(6),
  },
  heading: {
    fontSize: responsiveWidth(6),
    fontWeight: '500',
    color: colors.textPrimary ,
    marginBottom: responsiveWidth(2),
  },
  subheading: {
    fontSize: responsiveWidth(4),
    color: colors.textSecondary || '#8e8e93',
  },
  checkboxList: {
    marginBottom: responsiveWidth(8),
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveWidth(4),
  },
  checkbox: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    borderRadius: responsiveWidth(1.5),
    borderWidth: 2,
    borderColor: colors.inputBorder || '#c7c7cc',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
  },
  checkboxSelected: {
    backgroundColor: colors.blueAccent || '#007aff',
    borderColor: colors.blueAccent || '#007aff',
  },
  checkboxLabel: {
    fontSize: responsiveWidth(4.2),
    color: colors.textPrimary || '#222222',
    fontWeight: '400',
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingTop: responsiveWidth(4),
  },
  continueButton: {
    backgroundColor: colors.blueAccent || '#007aff',
    borderRadius: responsiveWidth(50),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    marginBottom: responsiveWidth(3),
  },
  continueButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '400',
    color: colors.white,
  },
  goBackButton: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border || '#c7c7cc',
  },
  goBackButtonText: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '400',
    color: colors.black || '#222222',
  },
});

export default DeleteFeedbackScreen;