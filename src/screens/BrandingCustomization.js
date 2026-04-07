import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import CustomHeader from '../components/CustomHeader';
import CustomText from '../components/CustomText';

const BrandingCustomization = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <CustomHeader title="Branding & Customization" />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons 
              name="monitor-share" 
              size={responsiveWidth(18)} 
              color={colors.textPrimary || '#222222'} 
            />
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-circle" size={responsiveWidth(6)} color={colors.textPrimary || '#222222'} />
            </View>
          </View>
          
          <CustomText style={styles.title}>Manage on Web</CustomText>
          
          <CustomText style={styles.description}>
            For full branding customization, please use the web dashboard.
          </CustomText>
        </View>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(10), // Offset to center better visually
  },
  card: {
    width: '100%',
    backgroundColor: '#EBEBEB', // Light gray background as per image
    borderRadius: responsiveWidth(6),
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(8),
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: responsiveHeight(3),
    position: 'relative',
  },
  checkBadge: {
    position: 'absolute',
    top: responsiveHeight(2.5),
    left: responsiveWidth(6.5),
    backgroundColor: '#EBEBEB',
    borderRadius: 100,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: colors.textPrimary || '#222222',
    marginBottom: responsiveHeight(2),
    textAlign: 'center',
  },
  description: {
    fontSize: responsiveFontSize(1.9),
    color: colors.grayDark || '#666666',
    textAlign: 'center',
    lineHeight: responsiveHeight(2.8),
    paddingHorizontal: responsiveWidth(4),
  },
});

export default BrandingCustomization;
