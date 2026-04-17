import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typography from '../../components/Typography';
import { rs, rh } from '../../utils/dimensions';
import { GRADIENT_COLORS } from '../../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const UpdateListItem = ({ icon, text }) => (
  <View style={styles.listItem}>
    <Feather
      name={icon}
      size={rs(16)}
      color="#111827"
      style={styles.listIcon}
    />
    <Typography style={styles.listText}>{text}</Typography>
  </View>
);

const AppUpdateScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenWrapper gradientColors={GRADIENT_COLORS}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={rs(24)} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.mainContent}>
          <View style={styles.logoRow}>
            <Image
              source={require('../../assets/Images/applogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            {/* <Typography style={styles.logoText}>VeloFolio</Typography> */}
          </View>

          <Typography style={styles.title}>
            Update Your Application to the Latest Version
          </Typography>
          <Typography style={styles.subtitle}>
            A brand new version of the VeloFolio app is available in the App
            Store. Please update your app to use all of our amazing features
          </Typography>
        </View>

        {/* Footer Buttons */}
        <View
          style={[styles.footer, { paddingBottom: insets.bottom + rs(20) }]}
        >
          <TouchableOpacity style={styles.updateButton} activeOpacity={0.8}>
            <Typography style={styles.updateButtonText}>Update App</Typography>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.whatsNewButton}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
          >
            <Feather
              name="zap"
              size={rs(18)}
              color="#111827"
              style={{ marginRight: rs(8) }}
            />
            <Typography style={styles.whatsNewText}>What's New</Typography>
          </TouchableOpacity>
        </View>
      </View>

      {/* What's New Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Pull Bar */}
            <View style={styles.pullBar} />

            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <View style={{ width: rs(24) }} />
              <Typography style={styles.modalTitle}>What's New</Typography>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.closeIconBox}>
                  <Feather name="x" size={rs(20)} color="#111827" />
                </View>
              </TouchableOpacity>
            </View>

            <Typography style={styles.modalSubtitle}>
              Stay updated with the latest features, improvements, and fixes.
            </Typography>

            {/* Latest Update Banner */}
            <View style={styles.bannerCard}>
              <View style={styles.bannerLeft}>
                <View style={styles.latestBadge}>
                  <Typography style={styles.latestBadgeText}>
                    Latest Update
                  </Typography>
                </View>
                <Typography style={styles.versionTitle}>
                  Version 2.4 — Workflow & Invoicing Improvements
                </Typography>
                <Typography style={styles.versionDate}>
                  March 18, 2026
                </Typography>
              </View>
              <View style={styles.bannerRight}>
                {/* Visual placeholder for the mockup image */}
                <View style={styles.imagePlaceholder}>
                  <Feather name="layout" size={rs(40)} color="#38BDF8" />
                </View>
              </View>
            </View>

            <Typography style={styles.listLabel}>Update List</Typography>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.listScroll}
            >
              <UpdateListItem
                icon="settings"
                text="New job status management system"
              />
              <UpdateListItem
                icon="zap"
                text="Improved invoice creation flow"
              />
              <UpdateListItem
                icon="folder"
                text="Redesigned client overview cards"
              />
              <UpdateListItem
                icon="send"
                text="Faster navigation with floating action buttons"
              />
              <UpdateListItem
                icon="check-square"
                text="Minor bug fixes and performance improvements"
              />
            </ScrollView>

            <TouchableOpacity
              style={styles.modalActionButton}
              onPress={() => setModalVisible(false)}
            >
              <Typography style={styles.modalActionButtonText}>
                Update Now
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: rs(20),
    paddingTop: rs(10),
  },
  backButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(12),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: rs(24),
    justifyContent: 'center',
    paddingBottom: rh(50),
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(32),
  },
  logo: {
    width: rs(100),
    height: rs(48),
    marginRight: rs(12),
  },
  logoText: {
    fontSize: rs(22),
    fontWeight: '700',
    color: '#111827',
  },
  title: {
    fontSize: rs(32),
    fontWeight: '800',
    color: '#111827',
    lineHeight: rs(40),
    marginBottom: rs(20),
  },
  subtitle: {
    fontSize: rs(16),
    color: '#374151',
    lineHeight: rs(24),
  },
  footer: {
    paddingHorizontal: rs(24),
  },
  updateButton: {
    height: rs(58),
    backgroundColor: '#000000',
    borderRadius: rs(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rs(12),
  },
  updateButtonText: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  whatsNewButton: {
    height: rs(58),
    borderWidth: 1,
    borderColor: '#111827',
    borderRadius: rs(30),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  whatsNewText: {
    fontSize: rs(16),
    fontWeight: '600',
    color: '#111827',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(30),
    borderTopRightRadius: rs(30),
    paddingTop: rs(12),
    paddingHorizontal: rs(24),
    paddingBottom: Platform.OS === 'ios' ? rs(40) : rs(24),
    height: SCREEN_HEIGHT * 0.85,
  },
  pullBar: {
    width: rs(60),
    height: rs(5),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(3),
    alignSelf: 'center',
    marginBottom: rs(20),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rs(10),
  },
  modalTitle: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#111827',
  },
  closeIconBox: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSubtitle: {
    fontSize: rs(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: rs(20),
    marginBottom: rs(24),
    paddingHorizontal: rs(20),
  },
  bannerCard: {
    backgroundColor: '#E0F2FE',
    borderRadius: rs(20),
    padding: rs(20),
    flexDirection: 'row',
    marginBottom: rs(24),
  },
  bannerLeft: {
    flex: 1,
  },
  latestBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FBBF24',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(10),
    marginBottom: rs(12),
  },
  latestBadgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  versionTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(6),
  },
  versionDate: {
    fontSize: rs(13),
    color: '#9CA3AF',
  },
  bannerRight: {
    width: rs(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: rs(60),
    height: rs(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  listLabel: {
    fontSize: rs(13),
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: rs(16),
  },
  listScroll: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(16),
  },
  listIcon: {
    width: rs(24),
    marginRight: rs(12),
  },
  listText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#374151',
    flex: 1,
  },
  modalActionButton: {
    height: rs(54),
    backgroundColor: '#38BDF8',
    borderRadius: rs(27),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rs(20),
  },
  modalActionButtonText: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default AppUpdateScreen;
