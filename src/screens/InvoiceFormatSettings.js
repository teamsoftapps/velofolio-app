import React, { useState } from 'react';
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

const InvoiceFormatSettings = () => {
  const [selected, setSelected] = useState('2025-INV-001');

  const formats = [
    '2025-INV-001',
    'INV-001-2025',
    '001-INV-2025',
    '001-2025-INV',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Invoice Number Format" />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.optionsCard}>
          {formats.map((item, index) => (
            <React.Fragment key={item}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => setSelected(item)}
                activeOpacity={0.7}
              >
                <CustomText style={styles.optionTitle}>{item}</CustomText>
                {selected === item && (
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={14} color={colors.white} />
                  </View>
                )}
              </TouchableOpacity>
              {index < formats.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>
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
    marginBottom: responsiveHeight(4),
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  optionsCard: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionTitle: {
    fontSize: responsiveFontSize(2),
    color: colors.textPrimary || '#222222',
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00B1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default InvoiceFormatSettings;
