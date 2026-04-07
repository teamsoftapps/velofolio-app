import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const EmailTemplates = ({ navigation }) => {
  const templates = [
    {
      id: 1,
      title: 'Booking Confirmation',
      snippet: 'Your booking with {{client_name}} is confirmed!',
    },
    {
      id: 2,
      title: 'Invoice Sent',
      snippet: 'Your booking with {{client_name}} is confirmed!',
    },
    {
      id: 3,
      title: 'Payment Reminder',
      snippet: 'Your booking with {{client_name}} is confirmed!',
    },
    {
      id: 4,
      title: 'Contract Sent',
      snippet: 'Your booking with {{client_name}} is confirmed!',
    },
    {
      id: 5,
      title: 'Job Assigned',
      snippet: 'Your booking with {{client_name}} is confirmed!',
    },
  ];

  const handleEdit = (template) => {
    navigation.navigate('EditEmailTemplate', { template });
  };

  const handleAdd = () => {
    navigation.navigate('EditEmailTemplate');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Email Templates" />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {templates.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.templateCard}
            onPress={() => handleEdit(item)}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <CustomText style={styles.itemTitle}>{item.title}</CustomText>
              <CustomText style={styles.itemSnippet} numberOfLines={1}>
                {item.snippet}
              </CustomText>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.grayDark || '#999999'} />
          </TouchableOpacity>
        ))}

        {/* Add Template Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAdd}
          activeOpacity={0.7}
        >
          <Ionicons name="add-outline" size={24} color={colors.textPrimary || '#222222'} />
          <CustomText style={styles.addButtonText}>Add Template</CustomText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerWrapper: {
    borderBottomLeftRadius: responsiveWidth(6),
    borderBottomRightRadius: responsiveWidth(6),
    paddingVertical: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(4),
  },
  templateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1.5),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(0.5),
  },
  itemSnippet: {
    fontSize: responsiveFontSize(1.6),
    color: colors.grayDark || '#666666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray || '#E1E1E1',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    marginTop: responsiveHeight(1),
    backgroundColor: 'transparent',
  },
  addButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: colors.textPrimary || '#222222',
    marginLeft: responsiveWidth(2),
  },
});

export default EmailTemplates;
