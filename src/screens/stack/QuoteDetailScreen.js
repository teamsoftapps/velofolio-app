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
import { rs, rh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const QuoteDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      <View style={[styles.topWhiteContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
          <Typography style={styles.headerTitle}>Quote 20251126</Typography>
          <TouchableOpacity style={styles.moreButton}>
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
                <Typography style={styles.statusInvoiceId}>Quote 20251126</Typography>
                <View style={styles.badgePending}>
                  <Typography style={styles.badgeText}>PENDING</Typography>
                </View>
             </View>
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Feather name="send" size={rs(16)} color="#111827" style={{marginRight: rs(4)}} />
            <Typography style={styles.sendText}>Send</Typography>
          </TouchableOpacity>
        </View>

        {/* Quote Overview */}
        <View style={styles.detailsCard}>
          <Typography style={styles.cardTitle}>Quote</Typography>
          
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Quote ID:</Typography>
            <Typography style={styles.detailValueBold}>20251126-01</Typography>
          </View>
          <View style={styles.detailRow}>
            <Typography style={styles.detailLabel}>Issue Date:</Typography>
            <Typography style={styles.detailValueBold}>26 November 2025</Typography>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoCol}>
              <Typography style={styles.gridLabel}>Quote for:</Typography>
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

          {/* Package Summary Block */}
          <View style={styles.packageCard}>
            <View style={styles.packageHeader}>
               <View style={styles.yellowBadge}>
                 <Typography style={styles.yellowBadgeText}>Premium Portrait Package</Typography>
               </View>
               <Typography style={styles.packagePrice}>$1999.00</Typography>
            </View>
            
            <View style={styles.packageBody}>
              <Typography style={styles.packageDesc}>
                A deluxe package created for families wanting timeless wall art and keepsake prints.
              </Typography>

              <Typography style={styles.featureList}>
                1.5-hour outdoor or studio session{'\n'}
                All best photos (40+ fully edited){'\n'}
                2x Medium 16" x 24" canvases{'\n'}
                10x 5" x 7" premium matte prints{'\n'}
                Custom USB with all images
              </Typography>
            </View>
          </View>

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
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: rs(14),
    paddingVertical: rs(10),
    borderRadius: rs(10),
  },
  sendText: {
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
  packageCard: {
    marginTop: rs(12),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: rs(20),
    overflow: 'hidden',
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: rs(20),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  yellowBadge: {
    backgroundColor: '#FEF9C3',
    paddingHorizontal: rs(10),
    paddingVertical: rs(6),
    borderRadius: rs(10),
    borderWidth: 1,
    borderColor: '#FDE047',
  },
  yellowBadgeText: {
    fontSize: rs(12),
    fontWeight: '600',
    color: '#A16207',
  },
  packagePrice: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
  },
  packageBody: {
    padding: rs(20),
  },
  packageDesc: {
    fontSize: rs(15),
    fontWeight: '600',
    lineHeight: rs(22),
    color: '#111827',
    marginBottom: rs(24),
  },
  featureList: {
    fontSize: rs(15),
    fontWeight: '500',
    lineHeight: rs(26),
    color: '#111827',
  },
});

export default QuoteDetailScreen;
