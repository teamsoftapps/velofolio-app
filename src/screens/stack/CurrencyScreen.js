import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CURRENCIES = [
  { id: '1', code: 'USD', name: 'United States Dollar', symbol: '$', flag: 'https://flagcdn.com/w40/us.png' },
  { id: '2', code: 'GBP', name: 'British Pound', symbol: '£', flag: 'https://flagcdn.com/w40/gb.png' },
  { id: '3', code: 'EUR', name: 'Euro', symbol: '€', flag: 'https://flagcdn.com/w40/eu.png' },
  { id: '4', code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: 'https://flagcdn.com/w40/jp.png' },
  { id: '5', code: 'AUD', name: 'Australian Dollar', symbol: '$', flag: 'https://flagcdn.com/w40/au.png' },
  { id: '6', code: 'CAD', name: 'Canadian Dollar', symbol: '$', flag: 'https://flagcdn.com/w40/ca.png' },
  { id: '7', code: 'CHF', name: 'Switzerland Franc', symbol: 'CHF', flag: 'https://flagcdn.com/w40/ch.png' },
  { id: '8', code: 'CNY', name: 'China Yuan Renminbi', symbol: '¥', flag: 'https://flagcdn.com/w40/cn.png' },
  { id: '9', code: 'HKD', name: 'Hong Kong Dollar', symbol: '$', flag: 'https://flagcdn.com/w40/hk.png' },
  { id: '10', code: 'NZD', name: 'New Zealand Dollar', symbol: '$', flag: 'https://flagcdn.com/w40/nz.png' },
];

const CurrencyScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedCurrency, setSelectedCurrency] = useState('1');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Currency</Typography>
        </View>

        <View style={styles.searchContainer}>
          <Feather name="search" size={rs(20)} color="#111827" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#111827"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.listCard}>
          {CURRENCIES.map((curr, index) => (
            <TouchableOpacity 
              key={curr.id}
              style={[styles.listItem, index < CURRENCIES.length - 1 && styles.borderBottom]}
              activeOpacity={0.6}
              onPress={() => setSelectedCurrency(curr.id)}
            >
              <View style={styles.itemLeft}>
                <Image source={{ uri: curr.flag }} style={styles.flagIcon} />
                <View>
                  <Typography style={styles.itemCode}>{curr.code}</Typography>
                  <Typography style={styles.itemName}>{curr.name}</Typography>
                </View>
              </View>
              
              <View style={styles.itemRight}>
                {selectedCurrency === curr.id && (
                  <View style={styles.checkCircle}>
                    <Feather name="check" size={rs(12)} color="#FFFFFF" />
                  </View>
                )}
                <Typography style={[styles.itemSymbol, selectedCurrency === curr.id && styles.symbolSelected]}>{curr.symbol}</Typography>
              </View>
            </TouchableOpacity>
          ))}
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
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(16),
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: rs(20),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    height: rs(50),
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    marginRight: rs(12),
  },
  searchInput: {
    flex: 1,
    fontSize: rs(15),
    color: '#111827',
  },
  
  scrollContent: {
    paddingHorizontal: rs(20),
  },
  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(16),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rs(16),
    paddingHorizontal: rs(16),
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    width: rs(24),
    height: rs(16),
    resizeMode: 'cover',
    borderRadius: rs(2),
    marginRight: rs(16),
  },
  itemCode: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '500',
    marginBottom: rs(2),
  },
  itemName: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkCircle: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  itemSymbol: {
    fontSize: rs(18),
    fontWeight: '600',
    color: '#111827',
  },
  symbolSelected: {
    color: '#111827', // The mockup keeps it black even when selected
  },
});

export default CurrencyScreen;
