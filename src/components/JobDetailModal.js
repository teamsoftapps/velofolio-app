import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { rs, rh } from '../utils/dimensions';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MemberAvatar = ({ url, style }) => (
  <View style={[styles.avatarContainer, style]}>
    <Image source={{ uri: url }} style={styles.avatar} />
  </View>
);

const JobDetailModal = ({ visible, job, onClose }) => {
  if (!job && !visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Backdrop overlay */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <View style={styles.modalSheet}>
          {/* Decorative Handle */}
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>

          <ScrollView
            style={styles.scrollContent}
            contentContainerStyle={styles.scrollContentContainer}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            <View style={styles.imageHeaderContainer}>
              <Image
                source={{
                  uri:
                    job?.image ||
                    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
                }}
                style={styles.headerImage}
              />
              <View style={styles.badgeContainer}>
                <View
                  style={[styles.statusBadge, { backgroundColor: '#38BDF8' }]}
                >
                  <Typography style={styles.statusBadgeText}>
                    In Progress
                  </Typography>
                </View>
              </View>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                <Feather name="x" size={rs(20)} color="#111827" />
              </TouchableOpacity>
            </View>

            <View style={styles.mainPadding}>
              <Typography style={styles.jobTitle}>
                {job?.title || 'Job Title'}
              </Typography>

              <View style={styles.metaGrid}>
                <View style={styles.metaItem}>
                  <Typography style={styles.metaLabel}>Members</Typography>
                  <View style={styles.membersRow}>
                    {job?.members?.slice(0, 3).map((url, i) => (
                      <MemberAvatar
                        key={i}
                        url={url}
                        style={{ marginLeft: i === 0 ? 0 : rs(-10) }}
                      />
                    ))}
                  </View>
                </View>

                <View style={styles.metaItem}>
                  <Typography style={styles.metaLabel}>Due Date</Typography>
                  <TouchableOpacity style={styles.datePickerBtn}>
                    <Typography style={styles.dateValue}>
                      {job?.date || 'Select Date'}
                    </Typography>
                    <Feather
                      name="chevron-down"
                      size={rs(14)}
                      color="#9CA3AF"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.metaItem}>
                  <Typography style={styles.metaLabel}>Client</Typography>
                  <View style={styles.clientBadge}>
                    <Typography style={styles.clientBadgeText}>
                      {job?.client?.toUpperCase()}
                    </Typography>
                  </View>
                </View>
              </View>

              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Feather
                    name="align-left"
                    size={rs(18)}
                    color="#4B5563"
                    style={{ marginRight: rs(8) }}
                  />
                  <Typography style={styles.sectionTitle}>
                    Description
                  </Typography>
                </View>
                <TouchableOpacity>
                  <Typography style={styles.editLink}>Edit</Typography>
                </TouchableOpacity>
              </View>
              <Typography style={styles.descriptionText}>
                {job?.description || 'No description provided.'}
              </Typography>

              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Feather
                    name="paperclip"
                    size={rs(18)}
                    color="#4B5563"
                    style={{ marginRight: rs(8) }}
                  />
                  <Typography style={styles.sectionTitle}>
                    Attachment
                  </Typography>
                </View>
                <TouchableOpacity>
                  <Typography style={styles.addLink}>Add</Typography>
                </TouchableOpacity>
              </View>

              <View style={styles.attachmentCard}>
                <Image
                  source={{ uri: job?.image }}
                  style={styles.attachmentThumb}
                />
                <View style={styles.attachmentInfo}>
                  <Typography style={styles.attachmentName}>
                    Wedding.jpg
                  </Typography>
                  <Typography style={styles.attachmentMeta}>
                    Added Nov 1, 2025, 12:59 PM
                  </Typography>
                </View>
                <Feather
                  name="more-horizontal"
                  size={rs(20)}
                  color="#6B7280"
                />
              </View>

              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Feather
                    name="message-square"
                    size={rs(18)}
                    color="#4B5563"
                    style={{ marginRight: rs(8) }}
                  />
                  <Typography style={styles.sectionTitle}>
                    Comments & Activity
                  </Typography>
                </View>
              </View>

              <View style={styles.commentInputContainer}>
                <Typography style={styles.commentPlaceholder}>
                  Write a comment
                </Typography>
              </View>

              <View style={styles.commentItem}>
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=44' }}
                  style={styles.commentAvatar}
                />
                <View style={styles.commentBubbleContainer}>
                  <View style={styles.commentUserRow}>
                    <Typography style={styles.commentUserName}>
                      Sarah Johnson
                    </Typography>
                    <Typography style={styles.commentTime}>
                      Just Now
                    </Typography>
                  </View>
                  <View style={styles.commentBubble}>
                    <Typography style={styles.commentText}>
                      What is the update?
                    </Typography>
                  </View>
                  <View style={styles.commentActions}>
                    <Typography style={styles.commentActionText}>
                      Edit
                    </Typography>
                    <Typography
                      style={[
                        styles.commentActionText,
                        { marginLeft: rs(12) },
                      ]}
                    >
                      Delete
                    </Typography>
                  </View>
                </View>
              </View>

              <View style={styles.activityItem}>
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=44' }}
                  style={styles.commentAvatar}
                />
                <View style={styles.activityContent}>
                  <Typography style={styles.commentUserName}>
                    Sarah Johnson{' '}
                    <Typography style={styles.activityActionText}>
                      added
                    </Typography>{' '}
                    Priya Sharma
                  </Typography>
                  <Typography style={styles.activityActionText}>
                    to this card
                  </Typography>
                  <Typography style={styles.activityTime}>
                    Nov 1, 2025, 12:59 PM
                  </Typography>
                </View>
              </View>

              <View style={{ height: rs(40) }} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalSheet: {
    height: '70%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: rs(30),
    borderTopRightRadius: rs(30),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
    overflow: 'hidden',
  },
  handleContainer: {
    width: '100%',
    height: rs(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: rs(8),
  },
  handle: {
    width: rs(40),
    height: rs(4),
    backgroundColor: '#E5E7EB',
    borderRadius: rs(2),
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: rs(40),
  },
  mainPadding: {
    paddingHorizontal: rs(20),
  },
  imageHeaderContainer: {
    width: '100%',
    height: rh(180),
    paddingHorizontal: rs(20),
    position: 'relative',
    marginBottom: rs(10),
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: rs(20),
  },
  badgeContainer: {
    position: 'absolute',
    top: rs(20),
    left: rs(35),
  },
  statusBadge: {
    paddingHorizontal: rs(12),
    paddingVertical: rs(6),
    borderRadius: rs(20),
  },
  statusBadgeText: {
    color: '#FFFFFF',
    fontSize: rs(12),
    fontWeight: '700',
  },
  closeBtn: {
    position: 'absolute',
    top: rs(20),
    right: rs(35),
    width: rs(36),
    height: rs(36),
    borderRadius: rs(18),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobTitle: {
    fontSize: rs(22),
    fontWeight: '700',
    color: '#111827',
    marginVertical: rs(12),
  },
  metaGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rs(24),
  },
  metaItem: {
    flex: 1,
  },
  metaLabel: {
    fontSize: rs(13),
    color: '#9CA3AF',
    marginBottom: rs(8),
  },
  membersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: rs(28),
    height: rs(28),
    borderRadius: rs(14),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  datePickerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1F2',
    paddingHorizontal: rs(8),
    paddingVertical: rs(4),
    borderRadius: rs(12),
    alignSelf: 'flex-start',
  },
  dateValue: {
    fontSize: rs(12),
    color: '#F87171',
    fontWeight: '600',
    marginRight: rs(4),
  },
  clientBadge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: rs(10),
    paddingVertical: rs(4),
    borderRadius: rs(12),
    alignSelf: 'flex-start',
  },
  clientBadgeText: {
    fontSize: rs(11),
    color: '#38BDF8',
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: rs(20),
    marginBottom: rs(12),
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#9CA3AF',
  },
  editLink: {
    fontSize: rs(13),
    color: '#38BDF8',
    fontWeight: '500',
  },
  addLink: {
    fontSize: rs(13),
    color: '#38BDF8',
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: rs(14),
    color: '#374151',
    lineHeight: rs(20),
  },
  attachmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: rs(12),
    padding: rs(12),
    marginTop: rs(8),
  },
  attachmentThumb: {
    width: rs(60),
    height: rs(44),
    borderRadius: rs(8),
    marginRight: rs(12),
  },
  attachmentInfo: {
    flex: 1,
  },
  attachmentName: {
    fontSize: rs(14),
    fontWeight: '600',
    color: '#111827',
  },
  attachmentMeta: {
    fontSize: rs(12),
    color: '#9CA3AF',
  },
  commentInputContainer: {
    height: rs(48),
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    justifyContent: 'center',
    marginBottom: rs(20),
  },
  commentPlaceholder: {
    fontSize: rs(14),
    color: '#9CA3AF',
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: rs(20),
  },
  commentAvatar: {
    width: rs(36),
    height: rs(36),
    borderRadius: rs(18),
    marginRight: rs(12),
  },
  commentBubbleContainer: {
    flex: 1,
  },
  commentUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rs(4),
  },
  commentUserName: {
    fontSize: rs(14),
    fontWeight: '700',
    color: '#111827',
    marginRight: rs(8),
  },
  commentTime: {
    fontSize: rs(12),
    color: '#38BDF8',
    fontWeight: '500',
  },
  commentBubble: {
    backgroundColor: '#F9FAFB',
    padding: rs(12),
    borderRadius: rs(12),
  },
  commentText: {
    fontSize: rs(14),
    color: '#111827',
  },
  commentActions: {
    flexDirection: 'row',
    marginTop: rs(8),
  },
  commentActionText: {
    fontSize: rs(12),
    color: '#9CA3AF',
    fontWeight: '500',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: rs(16),
    borderRadius: rs(16),
    marginTop: rs(12),
  },
  activityContent: {
    flex: 1,
  },
  activityActionText: {
    fontWeight: '400',
    color: '#6B7280',
  },
  activityTime: {
    fontSize: rs(12),
    color: '#38BDF8',
    fontWeight: '500',
    marginTop: rs(4),
  },
});

export default JobDetailModal;
