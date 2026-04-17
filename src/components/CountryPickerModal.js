import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import Typography from './Typography';
import { rs, rh } from '../utils/dimensions';

const countries = [
  { name: 'United States', code: '+1', flag: 'us' },
  { name: 'United Kingdom', code: '+44', flag: 'gb' },
  { name: 'Canada', code: '+1', flag: 'ca' },
  { name: 'Australia', code: '+61', flag: 'au' },
  { name: 'Germany', code: '+49', flag: 'de' },
  { name: 'France', code: '+33', flag: 'fr' },
  { name: 'India', code: '+91', flag: 'in' },
  { name: 'UAE', code: '+971', flag: 'ae' },
  { name: 'Saudi Arabia', code: '+966', flag: 'sa' },
  { name: 'Pakistan', code: '+92', flag: 'pk' },
  { name: 'Singapore', code: '+65', flag: 'sg' },
  { name: 'Japan', code: '+81', flag: 'jp' },
  { name: 'Brazil', code: '+55', flag: 'br' },
  { name: 'South Africa', code: '+27', flag: 'za' },
  { name: 'Mexico', code: '+52', flag: 'mx' },
];

const CountryPickerModal = ({ visible, onClose, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => {
        onSelect(item);
        onClose();
      }}
    >
      <View style={styles.countryLeft}>
        <Image
          source={{ uri: `https://flagcdn.com/w40/${item.flag}.png` }}
          style={styles.flagIcon}
        />
        <Typography style={styles.countryName}>{item.name}</Typography>
      </View>
      <Typography style={styles.countryCode}>{item.code}</Typography>
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.indicator} />
          <Typography style={styles.modalTitle}>Select Country</Typography>
          
          <FlatList
            data={countries}
            keyExtractor={(item) => item.flag}
            renderItem={renderItem}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(32),
    borderTopRightRadius: rs(32),
    height: rh(600), // Increased height to show the list
    paddingTop: rs(12),
  },
  indicator: {
    width: rs(40),
    height: rs(4),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(2),
    alignSelf: 'center',
    marginBottom: rs(24),
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: rs(20),
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: rs(20),
    paddingBottom: rh(40),
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  countryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  flagIcon: {
    width: rs(32),
    height: rs(20),
    borderRadius: rs(4),
    marginRight: rs(16),
    resizeMode: 'cover',
  },
  countryName: {
    fontSize: rs(16),
    color: '#111827',
  },
  countryCode: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#6B7280',
  },
});

export default CountryPickerModal;

