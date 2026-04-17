import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const ContractsTab = () => (
  <View style={styles.tabContentContainer}>
    <View style={styles.financialCard}>
      <View style={styles.financialHeader}>
        <View style={[styles.financialIconBox, { backgroundColor: '#E0F2FE', borderColor: '#E0F2FE' }]}>
          <Feather name="file-text" size={rs(20)} color="#38BDF8" />
        </View>
         <View style={styles.financialTitleCol}>
            <Typography style={styles.financialTitle}>Wedding Contract</Typography>
         </View>
         <TouchableOpacity style={{ padding: rs(4) }}>
           <Feather name="more-horizontal" size={rs(20)} color="#9CA3AF" />
         </TouchableOpacity>
      </View>
      <View style={styles.financialRow}>
        <Feather name="file-plus" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Type</Typography>
        <Typography style={styles.financialValue}>Contract</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="arrow-up" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Uploaded By</Typography>
        <Typography style={styles.financialValue}>Sarah Lee</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="calendar" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Date</Typography>
        <Typography style={styles.financialValue}>Oct 1, 2025</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="refresh-cw" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Status</Typography>
        <View style={styles.badgeYellow}><Typography style={styles.badgeYellowText}>SIGNED</Typography></View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  tabContentContainer: { flex: 1 },
  financialCard: {
     backgroundColor: '#FFFFFF',
     borderRadius: rs(16),
     padding: rs(20),
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.05,
     shadowRadius: rs(10),
     elevation: 2,
     marginBottom: rs(16),
  },
  financialHeader: {
     flexDirection: 'row',
     alignItems: 'flex-start',
     marginBottom: rs(20),
  },
  financialIconBox: {
     width: rs(40),
     height: rs(40),
     backgroundColor: '#F9FAFB',
     borderRadius: rs(12),
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: rs(16),
     borderWidth: 1,
     borderColor: '#F3F4F6',
  },
  financialTitleCol: {
     flex: 1,
  },
  financialTitle: {
     fontSize: rs(15),
     fontWeight: '700',
     color: '#111827',
     marginBottom: rs(4),
     lineHeight: rs(20),
  },
  financialRow: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: rs(12),
  },
  financialLabel: {
     fontSize: rs(13),
     color: '#6B7280',
     flex: 1,
     marginLeft: rs(12),
  },
  financialValue: {
     fontSize: rs(13),
     fontWeight: '700',
     color: '#111827',
  },
  badgeYellow: {
     backgroundColor: '#FEF3C7',
     paddingHorizontal: rs(10),
     paddingVertical: rs(4),
     borderRadius: rs(12),
  },
  badgeYellowText: {
     color: '#F59E0B',
     fontWeight: '700',
     fontSize: rs(11),
  }
});

export default ContractsTab;
