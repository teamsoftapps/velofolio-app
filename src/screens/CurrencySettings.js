import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
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

const CurrencySettings = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('USD');

  const currencies = [
    { code: 'USD', name: 'United States Dollar', flag: '🇺🇸', symbol: '$' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: '$' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: '$' },
    { code: 'CHF', name: 'Switzerland Franc', flag: '🇨🇭', symbol: 'CHF' },
    { code: 'CNY', name: 'China Yuan Renminbi', flag: '🇨🇳', symbol: '¥' },
    { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', symbol: '$' },
    { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', symbol: '$' },
  ];

  const filtered = currencies.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Currency" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.optionsCard}>
          {filtered.map((item, index) => (
            <React.Fragment key={item.code}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => setSelected(item.code)}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  <CustomText style={styles.flag}>{item.flag}</CustomText>
                  <View style={styles.textContainer}>
                    <CustomText style={styles.code}>{item.code}</CustomText>
                    <CustomText style={styles.name}>{item.name}</CustomText>
                  </View>
                </View>
                <View style={styles.optionRight}>
                  {selected === item.code && (
                    <View style={styles.checkCircle}>
                      <Ionicons name="checkmark" size={14} color={colors.white} />
                    </View>
                  )}
                  <CustomText style={styles.symbol}>{item.symbol}</CustomText>
                </View>
              </TouchableOpacity>
              {index < filtered.length - 1 && <View style={styles.divider} />}
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
  },
  searchContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: responsiveFontSize(1.9),
    color: '#333',
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: 20,
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
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  flag: {
    fontSize: 24,
    marginRight: responsiveWidth(4),
  },
  textContainer: {
    flex: 1,
  },
  code: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#000',
  },
  name: {
    fontSize: responsiveFontSize(1.6),
    color: '#999',
    marginTop: 2,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00B1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: responsiveFontSize(2.2),
    color: '#000',
    width: 30,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: responsiveWidth(4),
  },
});

export default CurrencySettings;
