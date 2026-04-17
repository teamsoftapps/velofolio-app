import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const InvoicesTab = ({ navigation }) => (
  <View style={styles.tabContentContainer}>
    <TouchableOpacity 
      style={styles.financialCard} 
      activeOpacity={0.9}
      onPress={() => navigation.navigate('InvoiceDetail')}
    >
      <View style={styles.financialHeader}>
        <View style={styles.financialIconBox}>
          <Feather name="file-text" size={rs(20)} color="#38BDF8" />
        </View>
         <View style={styles.financialTitleCol}>
            <Typography style={styles.financialTitle}>Invoice 20251126-01</Typography>
            <Typography style={styles.financialSubtitle}>Issued: Mar 1, 2026</Typography>
         </View>
         <TouchableOpacity 
           style={styles.sendButton}
           onPress={() => navigation.navigate('SendInvoice')}
         >
           <Feather name="send" size={rs(14)} color="#111827" style={{marginRight: rs(6)}} />
           <Typography style={styles.sendBtnText}>Send</Typography>
         </TouchableOpacity>
      </View>
      <View style={styles.financialRow}>
        <Feather name="calendar" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Due Date</Typography>
        <Typography style={styles.financialValue}>Mar 14, 2026</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="dollar-sign" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Amount</Typography>
        <Typography style={styles.financialValue}>$4999.00</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="arrow-down-left" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Paid</Typography>
        <Typography style={styles.financialValue}>$2000.00</Typography>
      </View>
      <View style={styles.financialRow}>
        <Feather name="refresh-cw" size={rs(16)} color="#9CA3AF" />
        <Typography style={styles.financialLabel}>Status</Typography>
        <View style={styles.badgeYellow}><Typography style={styles.badgeYellowText}>PENDING</Typography></View>
      </View>
    </TouchableOpacity>
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
  financialSubtitle: {
     fontSize: rs(13),
     color: '#6B7280',
  },
  sendButton: {
     flexDirection: 'row',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: '#E5E7EB',
     paddingHorizontal: rs(10),
     paddingVertical: rs(6),
     borderRadius: rs(8),
     marginLeft: rs(8),
  },
  sendBtnText: {
     fontSize: rs(13),
     fontWeight: '600',
     color: '#111827',
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

export default InvoicesTab;
