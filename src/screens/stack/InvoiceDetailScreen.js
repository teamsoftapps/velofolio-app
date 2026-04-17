import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import InvoiceActionsModal from '../../components/InvoiceActionsModal';
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InvoiceDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [actionsModalVisible, setActionsModalVisible] = React.useState(false);

  const handleAction = (actionId) => {
    console.log('Action performed:', actionId);
    // Logic for different actions would go here
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Invoice 20251126-01</Typography>
          <TouchableOpacity 
            style={styles.moreButton} 
            onPress={() => setActionsModalVisible(true)}
          >
            <Feather name="more-vertical" size={rs(22)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusLeft}>
             <View style={styles.iconCircle}>
               <Feather name="file-text" size={rs(20)} color="#38BDF8" />
             </View>
             <View style={styles.statusTitleBox}>
                <Typography style={styles.statusInvoiceId}>Invoice 20251126-01</Typography>
                <View style={styles.badgePending}>
                  <Typography style={styles.badgeText}>PENDING</Typography>
                </View>
             </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-3" size={rs(16)} color="#111827" style={{marginRight: rs(4)}} />
            <Typography style={styles.editText}>Edit</Typography>
          </TouchableOpacity>
        </View>

        {/* Invoice Summary */}
        <View style={styles.detailsCard}>
          <Typography style={styles.cardTitle}>Invoice</Typography>
          
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Invoice ID:</Typography>
            <Typography style={styles.detailValueBold}>20251126-01</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Issue Date:</Typography>
            <Typography style={styles.detailValueBold}>26 November 2025</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Due Date:</Typography>
            <Typography style={styles.detailValueBold}>Dec 1, 2025</Typography>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoCol}>
              <Typography style={styles.gridLabel}>Invoice for:</Typography>
              <Typography style={styles.gridValueBold}>Sarah Wedding</Typography>
              <Typography style={styles.gridValueSmall}>Wedding</Typography>
              <Typography style={styles.gridValueSmall}>Dec 1, 2025 - 2:20 PM</Typography>
              <Typography style={styles.gridValueSmall}>to 4:00 PM</Typography>
              <Typography style={styles.gridValueSmall}>New York, USA</Typography>
              
              <View style={{marginTop: rs(12)}}>
                <Typography style={styles.gridValueBold}>Sarah Johnson</Typography>
                <Typography style={styles.gridValueSmall}>sarahjohnson@gmail.com</Typography>
                <Typography style={styles.gridValueSmall}>New York, USA</Typography>
                <Typography style={styles.gridValueSmall}>225 Cherry Street #24</Typography>
              </View>
            </View>

            <View style={styles.infoCol}>
              <Typography style={styles.gridLabel}>From:</Typography>
              <Typography style={styles.gridValueBold}>Lumiere Studio</Typography>
            </View>
          </View>

          {/* Itemized Block */}
          <View style={styles.itemizedBlock}>
            <View style={styles.itemHeader}>
              <Feather name="file" size={rs(16)} color="#9CA3AF" style={{marginRight: rs(8)}} />
              <Typography style={styles.itemTitle}>Ultimate Family Memories</Typography>
            </View>
            
            <View style={styles.itemContent}>
               <View style={styles.itemRow}>
                  <Typography style={styles.itemLabel}>Description</Typography>
                  <Typography style={styles.itemValueDesc}>
                    A deluxe package created for families wanting timeless wall art and keepsake prints.
                  </Typography>
               </View>

               <Typography style={styles.featureList}>
                 1.5-hour outdoor or studio session{'\n'}
                 All best photos (40+ fully edited){'\n'}
                 2x Medium 16" x 24" canvases{'\n'}
                 10x 5" x 7" premium matte prints{'\n'}
                 Custom USB with all images
               </Typography>

               <View style={styles.pricingRow}>
                 <Typography style={styles.itemLabel}>Unit Price</Typography>
                 <Typography style={styles.itemValueBold}>$4999.00</Typography>
               </View>
               <View style={styles.pricingRow}>
                 <Typography style={styles.itemLabel}>Quantity</Typography>
                 <Typography style={styles.itemValueBold}>1</Typography>
               </View>
               <View style={styles.pricingRow}>
                 <Typography style={styles.itemLabel}>Amount</Typography>
                 <Typography style={styles.itemValueBold}>$4999.00</Typography>
               </View>
            </View>
          </View>

          <View style={styles.totalsSection}>
             <View style={styles.totalRow}>
                <Typography style={styles.totalLabel}>Subtotal</Typography>
                <Typography style={styles.totalValue}>$4999.00</Typography>
             </View>
             <View style={styles.totalRow}>
                <Typography style={styles.totalLabelBold}>Total Due</Typography>
                <Typography style={styles.totalValueBold}>$4999.00</Typography>
             </View>
          </View>
        </View>

        <View style={{ height: rh(120) }} />
      </ScrollView>

      {/* FAB */}
      <View style={[styles.fabWrapper, { paddingBottom: Math.max(insets.bottom, rs(20)) }]}>
        <TouchableOpacity 
          style={styles.sendFab} 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SendInvoice')}
        >
          <Feather name="send" size={rs(18)} color="#FFFFFF" style={{marginRight: rs(8)}} />
          <Typography style={styles.sendFabText}>Send Invoice</Typography>
        </TouchableOpacity>
      </View>

      <InvoiceActionsModal
        visible={actionsModalVisible}
        onClose={() => setActionsModalVisible(false)}
        onAction={handleAction}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topWhiteContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(30),
    borderBottomRightRadius: rs(30),
    paddingBottom: rs(8),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
    paddingBottom: rs(12),
  },
  backButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    flex: 1,
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  moreButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    padding: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rs(20),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  statusTitleBox: {
    justifyContent: 'center',
  },
  statusInvoiceId: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(2),
  },
  badgePending: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: rs(8),
    paddingVertical: rs(2),
    borderRadius: rs(8),
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    color: '#10B981',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: rs(12),
    paddingVertical: rs(8),
    borderRadius: rs(10),
  },
  editText: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    padding: rs(20),
    marginBottom: rs(20),
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  cardTitle: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(16),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  detailLabel: {
    fontSize: rs(14),
    color: '#9CA3AF',
    width: rs(100),
  },
  detailValueBold: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
    flex: 1,
  },
  infoGrid: {
    flexDirection: 'row',
    marginTop: rs(20),
    marginBottom: rs(24),
  },
  infoCol: {
    flex: 1,
  },
  gridLabel: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginBottom: rs(12),
  },
  gridValueBold: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(4),
  },
  gridValueSmall: {
    fontSize: rs(13),
    color: '#111827',
    marginBottom: rs(2),
  },
  itemizedBlock: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(16),
    overflow: 'hidden',
    marginBottom: rs(20),
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  itemTitle: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#9CA3AF',
  },
  itemContent: {
    backgroundColor: '#FFFFFF',
    margin: rs(8),
    borderRadius: rs(12),
    padding: rs(16),
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: rs(12),
  },
  itemLabel: {
    fontSize: rs(13),
    color: '#9CA3AF',
    flex: 1,
  },
  itemValueDesc: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
    textAlign: 'right',
    flex: 2,
  },
  featureList: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
    textAlign: 'right',
    lineHeight: rs(20),
    marginBottom: rs(20),
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(8),
  },
  itemValueBold: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
  },
  totalsSection: {
    marginTop: rs(12),
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: rs(16),
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(12),
  },
  totalLabel: {
    fontSize: rs(15),
    color: '#111827',
  },
  totalValue: {
    fontSize: rs(15),
    fontWeight: '700',
    color: '#111827',
  },
  totalLabelBold: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  totalValueBold: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: rs(20),
    paddingTop: rs(12),
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
  },
  sendFab: {
    backgroundColor: '#38BDF8',
    borderRadius: rs(24),
    paddingVertical: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  sendFabText: {
    color: '#FFFFFF',
    fontSize: rs(16),
    fontWeight: '600',
  },
});

export default InvoiceDetailScreen;
