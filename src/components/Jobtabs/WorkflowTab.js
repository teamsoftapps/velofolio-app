import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs, rh } from '../../utils/dimensions';

const WorkflowTab = () => {
   return (
     <View style={[styles.tabContentContainer, { flexDirection: 'row' }]}>
       <View style={styles.timelineLineContainer}>
         <View style={[styles.timeNode, styles.timeNodeGreen]}><Feather name="check" size={rs(10)} color="#FFF" /></View>
         <View style={[styles.timeLine, styles.timeLineGreen]} />
         <View style={[styles.timeNode, styles.timeNodeGreen]}><Feather name="check" size={rs(10)} color="#FFF" /></View>
         <View style={[styles.timeLine, styles.timeLineBlue, { height: rh(120) }]} />
         <View style={[styles.timeNode, styles.timeNodeBlueOpen]} />
         <View style={[styles.timeLine, styles.timeLineGray, { height: rh(110) }]} />
         <View style={[styles.timeNode, styles.timeNodeGrayOpen]} />
       </View>

       <View style={styles.timelineContentContainer}>
          <View style={styles.workflowCardGreen}>
             <Typography style={styles.workflowTitle}>Lead Created</Typography>
             <Typography style={styles.workflowDate}>25 Nov, 2025</Typography>
          </View>
          <View style={[styles.workflowCardGreen, { height: rh(120), justifyContent: 'flex-start' }]}>
             <View style={styles.workflowRow}>
                <Typography style={styles.workflowTitle}>Job Accepted</Typography>
                <Typography style={styles.workflowDate}>25 Nov, 2025</Typography>
             </View>
             <Typography style={styles.workflowDesc}>This triggers automatically if the quote is approved, contract signed, or invoice paid, turning the lead into an active job.</Typography>
          </View>
          <View style={[styles.workflowCardBlue, { height: rh(110)}]}>
             <Typography style={styles.workflowTitle}>Sarah Wedding</Typography>
             <View style={styles.workflowDetailsGrid}>
                <View style={styles.workflowDetailItem}>
                   <Feather name="map-pin" size={rs(14)} color="#9CA3AF" />
                   <Typography style={styles.workflowDetailText}>New York, USA</Typography>
                </View>
                <View style={styles.workflowDetailItem}>
                   <Feather name="calendar" size={rs(14)} color="#9CA3AF" />
                   <Typography style={styles.workflowDetailText}>Dec 1, 2025 from{"\n"}2:20 PM to 4:00 PM</Typography>
                </View>
             </View>
             <View style={[styles.badgeBlueBg, { alignSelf: 'flex-start', marginTop: rs(10)}]}><Typography style={styles.badgeTextWhite}>WEDDING</Typography></View>
          </View>
          <View style={styles.workflowCardGray}>
             <Typography style={styles.workflowTitle}>Job Complete</Typography>
          </View>
       </View>
     </View>
   );
};

const styles = StyleSheet.create({
  tabContentContainer: { flex: 1 },
  timelineLineContainer: {
     width: rs(30),
     alignItems: 'center',
     marginRight: rs(16),
  },
  timeNode: {
     width: rs(18),
     height: rs(18),
     borderRadius: rs(9),
     justifyContent: 'center',
     alignItems: 'center',
     zIndex: 2,
  },
  timeNodeGreen: { backgroundColor: '#34D399' },
  timeNodeBlueOpen: { borderColor: '#38BDF8', borderWidth: 2, backgroundColor: '#FAFAFA' },
  timeNodeGrayOpen: { borderColor: '#D1D5DB', borderWidth: 2, backgroundColor: '#FAFAFA' },
  timeLine: {
     width: rs(2),
     height: rh(70),
     marginVertical: rs(-4),
     zIndex: 1,
  },
  timeLineGreen: { backgroundColor: '#34D399' },
  timeLineBlue: { backgroundColor: '#38BDF8' },
  timeLineGray: { backgroundColor: '#D1D5DB' },
  timelineContentContainer: {
     flex: 1,
     paddingBottom: rs(20),
  },
  workflowCardGreen: {
     backgroundColor: '#ECFDF5',
     borderRadius: rs(12),
     padding: rs(16),
     height: rh(65),
     justifyContent: 'center',
     marginBottom: rh(25), 
  },
  workflowCardBlue: {
     backgroundColor: '#E0F2FE',
     borderRadius: rs(12),
     padding: rs(16),
     marginBottom: rh(25), 
  },
  workflowCardGray: {
     backgroundColor: '#F3F4F6',
     borderRadius: rs(12),
     padding: rs(16),
     height: rh(65),
     justifyContent: 'center',
  },
  workflowRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     width: '100%',
  },
  workflowTitle: {
     fontSize: rs(15),
     fontWeight: '600',
     color: '#111827',
  },
  workflowDate: {
     fontSize: rs(13),
     color: '#9CA3AF',
  },
  workflowDesc: {
     fontSize: rs(13),
     color: '#6B7280',
     marginTop: rs(8),
     lineHeight: rs(18),
  },
  workflowDetailsGrid: {
     flexDirection: 'row',
     marginTop: rs(12),
  },
  workflowDetailItem: {
     flexDirection: 'row',
     alignItems: 'flex-start',
     marginRight: rs(16),
  },
  workflowDetailText: {
     fontSize: rs(13),
     color: '#6B7280',
     marginLeft: rs(6),
  },
  badgeBlueBg: {
     backgroundColor: '#38BDF8',
     paddingHorizontal: rs(10),
     paddingVertical: rs(4),
     borderRadius: rs(12),
  },
  badgeTextWhite: {
     color: '#FFFFFF',
     fontSize: rs(11),
     fontWeight: '600',
  },
});

export default WorkflowTab;
