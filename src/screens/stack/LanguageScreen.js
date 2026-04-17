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

// Map mock flag data based on standard regions
const LANGUAGES = [
  { id: '1', name: 'English (United States)', flag: 'https://flagcdn.com/w40/us.png' },
  { id: '2', name: 'English (UK)', flag: 'https://flagcdn.com/w40/gb.png' },
  { id: '3', name: 'French', flag: 'https://flagcdn.com/w40/fr.png' },
  { id: '4', name: 'German', flag: 'https://flagcdn.com/w40/de.png' },
  { id: '5', name: 'Japanese', flag: 'https://flagcdn.com/w40/jp.png' },
  { id: '6', name: 'Portuguese', flag: 'https://flagcdn.com/w40/pt.png' },
  { id: '7', name: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' },
  { id: '8', name: 'Arabic', flag: 'https://flagcdn.com/w40/sa.png' },
  { id: '9', name: 'Chinese', flag: 'https://flagcdn.com/w40/cn.png' },
  { id: '10', name: 'Italian', flag: 'https://flagcdn.com/w40/it.png' },
];

const LanguageScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedLang, setSelectedLang] = useState('1');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Language</Typography>
        </View>

        <View style={styles.searchContainer}>
          <Feather name="search" size={rs(20)} color="#111827" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Language"
            placeholderTextColor="#111827"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.listCard}>
          {LANGUAGES.map((lang, index) => (
            <TouchableOpacity 
              key={lang.id}
              style={[styles.listItem, index < LANGUAGES.length - 1 && styles.borderBottom]}
              activeOpacity={0.6}
              onPress={() => setSelectedLang(lang.id)}
            >
              <View style={styles.itemLeft}>
                <Image source={{ uri: lang.flag }} style={styles.flagIcon} />
                <Typography style={styles.itemLabel}>{lang.name}</Typography>
              </View>
              {selectedLang === lang.id && (
                <View style={styles.checkCircle}>
                  <Feather name="check" size={rs(12)} color="#FFFFFF" />
                </View>
              )}
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
    paddingVertical: rs(18),
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
  itemLabel: {
    fontSize: rs(15),
    color: '#111827',
    fontWeight: '400',
  },
  checkCircle: {
    width: rs(22),
    height: rs(22),
    borderRadius: rs(11),
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LanguageScreen;
