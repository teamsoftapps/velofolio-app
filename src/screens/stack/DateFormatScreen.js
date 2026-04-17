import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FORMATS = [
  { id: '1', label: 'DD/MM/YYYY' },
  { id: '2', label: 'MM/DD/YYYY' },
  { id: '3', label: 'YYYY/MM/DD' },
  { id: '4', label: 'YYYY/DD/MM' },
];

const DateFormatScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedFormat, setSelectedFormat] = useState('1');

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Date Format</Typography>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.listCard}>
          {FORMATS.map((format, index) => (
            <TouchableOpacity 
              key={format.id}
              style={[styles.listItem, index < FORMATS.length - 1 && styles.borderBottom]}
              activeOpacity={0.6}
              onPress={() => setSelectedFormat(format.id)}
            >
              <Typography style={styles.itemLabel}>{format.label}</Typography>
              {selectedFormat === format.id && (
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
    paddingBottom: rs(8),
    marginBottom: rs(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
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

export default DateFormatScreen;
