import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';

import AboutTab from '../../components/Jobtabs/AboutTab';
import TasksTab from '../../components/Jobtabs/TasksTab';
import WorkflowTab from '../../components/Jobtabs/WorkflowTab';
import InvoicesTab from '../../components/Jobtabs/InvoicesTab';
import QuotesTab from '../../components/Jobtabs/QuotesTab';
import ContractsTab from '../../components/Jobtabs/ContractsTab';
import { Modal } from 'react-native';

const TABS = ['ABOUT', 'TASKS', 'WORKFLOW', 'INVOICES', 'QUOTES', 'CONTRACTS'];

// ---- MAIN SCREEN ----

const JobProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('ABOUT');
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return <AboutTab />;
      case 'TASKS':
        return <TasksTab />;
      case 'WORKFLOW':
        return <WorkflowTab />;
      case 'INVOICES':
        return <InvoicesTab navigation={navigation} />;
      case 'QUOTES':
        return <QuotesTab navigation={navigation} />;
      case 'CONTRACTS':
        return <ContractsTab />;
      default:
        return null;
    }
  };

  const getFabText = () => {
    switch (activeTab) {
      case 'TASKS':
        return 'Add More Task';
      case 'WORKFLOW':
        return 'Add Workflow';
      case 'INVOICES':
        return 'Add Invoice';
      case 'QUOTES':
        return 'Add Quote';
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper backgroundColor="#FAFAFA" disablePaddingTop={true}>
      {/* Top Rounded Header Wrapper */}
      <View style={[styles.headerWrapper, { paddingTop: insets.top }]}>
        {/* Header Area */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={rs(24)} color="#111827" />
            </TouchableOpacity>
            <Typography style={styles.headerTitle}>
              Wedding Film –{'\n'}Mark & Jess
            </Typography>
            <TouchableOpacity 
              style={styles.moreButton}
              onPress={() => setShowOptionsModal(true)}
            >
              <Feather name="more-vertical" size={rs(24)} color="#111827" />
            </TouchableOpacity>
          </View>

          <View style={styles.clientCard}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              }}
              style={styles.clientAvatar}
            />
            <View style={styles.clientInfo}>
              <Typography style={styles.clientName}>Sarah Johnson</Typography>
              <Typography style={styles.clientEmail}>
                sarahjohnson@gmail.com
              </Typography>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabBarWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScrollContent}
          >
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={styles.tabButton}
                onPress={() => setActiveTab(tab)}
              >
                <Typography
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Typography>
                {activeTab === tab && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderTabContent()}
      </ScrollView>

      {/* Conditional FAB */}
      {getFabText() && (
        <TouchableOpacity 
          style={styles.fabContainer}
          activeOpacity={0.8}
          onPress={() => {
            if (activeTab === 'TASKS') {
              navigation.navigate('AddLead');
            } else if (activeTab === 'INVOICES') {
              navigation.navigate('AddInvoice');
            } else if (activeTab === 'QUOTES') {
              navigation.navigate('AddQuote');
            }
          }}
        >
          <Feather
            name="plus"
            size={rs(18)}
            color="#FFF"
            style={{ marginRight: rs(6) }}
          />
          <Typography style={styles.fabText}>{getFabText()}</Typography>
        </TouchableOpacity>
      )}

      {/* Options Modal */}
      <Modal visible={showOptionsModal} transparent animationType="fade">
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowOptionsModal(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7} onPress={() => setShowOptionsModal(false)}>
              <Feather name="eye" size={rs(20)} color="#111827" style={styles.modalIcon} />
              <Typography style={styles.modalText}>View Client</Typography>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7} onPress={() => setShowOptionsModal(false)}>
              <Feather name="user" size={rs(20)} color="#111827" style={styles.modalIcon} />
              <Typography style={styles.modalText}>Edit Client</Typography>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7} onPress={() => setShowOptionsModal(false)}>
              <Feather name="edit-3" size={rs(20)} color="#111827" style={styles.modalIcon} />
              <Typography style={styles.modalText}>Edit Job</Typography>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.modalItem, styles.noBorder]} activeOpacity={0.7} onPress={() => setShowOptionsModal(false)}>
              <Feather name="trash-2" size={rs(20)} color="#EF4444" style={styles.modalIcon} />
              <Typography style={[styles.modalText, { color: '#EF4444' }]}>Remove Job</Typography>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(32),
    borderBottomRightRadius: rs(32),
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: rs(10) },
    shadowOpacity: 0.03,
    shadowRadius: rs(15),
    elevation: 4,
    zIndex: 10,
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: rs(20),
  },
  backButton: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    flex: 1,
    fontSize: rs(22),
    fontWeight: '700',
    color: '#000',
    marginLeft: rs(16),
    marginRight: rs(10),
    lineHeight: rs(28),
  },
  moreButton: {
    width: rs(40),
    height: rs(40),
    backgroundColor: '#F3F4F6',
    borderRadius: rs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  clientCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: rs(16),
    padding: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(20),
  },
  clientAvatar: {
    width: rs(48),
    height: rs(48),
    borderRadius: rs(24),
    marginRight: rs(16),
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
    marginBottom: rs(4),
  },
  clientEmail: {
    fontSize: rs(14),
    color: '#6B7280',
  },
  tabBarWrapper: {
    backgroundColor: 'transparent',
    paddingBottom: rs(4),
  },
  tabScrollContent: {
    paddingHorizontal: rs(20),
    paddingBottom: 0,
  },
  tabButton: {
    paddingVertical: rs(14),
    marginRight: rs(24),
    position: 'relative',
  },
  tabText: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: '#111827',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: rs(3),
    backgroundColor: '#38BDF8',
    borderTopLeftRadius: rs(2),
    borderTopRightRadius: rs(2),
  },
  scrollContent: {
    paddingHorizontal: rs(20),
    paddingTop: rs(24),
    paddingBottom: rh(120),
  },
  fabContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? rh(30) : rh(20),
    right: rs(20),
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rs(20),
    paddingVertical: rs(14),
    borderRadius: rs(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: rs(6),
    elevation: 5,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: rs(14),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(24),
    borderTopRightRadius: rs(24),
    paddingHorizontal: rs(20),
    paddingTop: rs(20),
    paddingBottom: rh(40),
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    marginBottom: rs(12),
    paddingHorizontal: rs(16),
  },
  noBorder: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  modalIcon: {
    marginRight: rs(16),
  },
  modalText: {
    fontSize: rs(16),
    fontWeight: '500',
    color: '#111827',
  },
});

export default JobProfileScreen;
