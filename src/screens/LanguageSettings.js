import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
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

const LanguageSettings = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('English (United States)');

  const languages = [
    { name: 'English (United States)', flag: '🇺🇸' },
    { name: 'English (UK)', flag: '🇬🇧' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Chinese', flag: '🇨🇳' },
    { name: 'Italian', flag: '🇮🇹' },
  ];

  const filtered = languages.filter(l => 
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <CustomHeader title="Language" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            placeholder="Search Language"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.optionsCard}>
          {filtered.map((item, index) => (
            <React.Fragment key={item.name}>
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => setSelected(item.name)}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  <CustomText style={styles.flag}>{item.flag}</CustomText>
                  <CustomText style={styles.optionTitle}>{item.name}</CustomText>
                </View>
                {selected === item.name && (
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={14} color={colors.white} />
                  </View>
                )}
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
    paddingVertical: responsiveHeight(2.2),
    paddingHorizontal: responsiveWidth(4),
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    marginRight: responsiveWidth(3),
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

export default LanguageSettings;
