import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../utils/colors';

const JobDetailModal = ({ visible, onClose, job }) => {
  const [comment, setComment] = useState('');

  if (!visible) return null;

  // Comprehensive default data
  const defaultJob = {
    title: 'Wedding Film – Mark & Jess',
    status: 'In Progress',
    members: [
      'https://i.pravatar.cc/150?u=1',
      'https://i.pravatar.cc/150?u=2',
    ],
    dueDate: 'OCT 7, 2025',
    client: 'SARAH JOHNSON',
    description: 'Footage received from the videographer. Editor to create a 3-minute highlight reel and full-length film by the deadline. Color correction and background music selection in progress.',
    attachments: [
      { id: 1, name: 'Wedding.jpg', time: 'Added Nov 1, 2025, 12:59 PM', uri: 'https://images.unsplash.com/photo-1519741497674-281482c3a157?w=600' }
    ],
    comments: [
      { id: 1, user: 'Sarah Johnson', text: 'What is the update?', time: 'Just Now', avatar: 'https://i.pravatar.cc/150?u=3' },
      { id: 2, type: 'activity', user: 'Sarah Johnson', action: 'added Priya Sharma to this card', time: 'Nov 1, 2025, 12:59 PM', avatar: 'https://i.pravatar.cc/150?u=3' }
    ]
  };

  // Merge provided job data with defaults
  const displayJob = {
    ...defaultJob,
    ...job,
    // Deep merge for nested arrays if they exist in partial job
    members: job?.members || defaultJob.members,
    attachments: job?.attachments || defaultJob.attachments,
    comments: job?.comments || defaultJob.comments,
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header Image */}
            <View style={styles.imageHeader}>
              <Image
                source={{ uri: displayJob.attachments?.[0]?.uri || 'https://images.unsplash.com/photo-1519741497674-281482c3a157?w=800' }}
                style={styles.bannerImage}
                resizeMode="cover"
              />
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{displayJob.status || 'In Progress'}</Text>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={20} color={colors.black} />
              </TouchableOpacity>
            </View>

            <View style={styles.mainPadding}>
              {/* Title */}
              <Text style={styles.title}>{displayJob.title}</Text>

              {/* Info Row: Members, Due Date, Client */}
              <View style={styles.infoRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.infoLabel}>Members</Text>
                  <View style={styles.membersContainer}>
                    {displayJob.members?.map((uri, index) => (
                      <Image key={index} source={{ uri }} style={[styles.memberAvatar, index > 0 && { marginLeft: -10 }]} />
                    ))}
                  </View>
                </View>

                <View style={styles.infoCol}>
                  <Text style={styles.infoLabel}>Due Date</Text>
                  <TouchableOpacity style={styles.dateSelector}>
                    <Text style={styles.dateText}>{displayJob.dueDate}</Text>
                    <Feather name="chevron-down" size={16} color={colors.grayDark} />
                  </TouchableOpacity>
                </View>

                <View style={[styles.infoCol, { flex: 1.2 }]}>
                  <Text style={styles.infoLabel}>Client</Text>
                  <View style={styles.clientTag}>
                    <Text style={styles.clientText}>{displayJob.client}</Text>
                  </View>
                </View>
              </View>

              {/* Description */}
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Feather name="align-left" size={20} color={colors.grayDark} />
                  <Text style={styles.sectionTitle}>Description</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editLink}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.descriptionText}>{displayJob.description}</Text>

              {/* Attachment */}
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Entypo name="attachment" size={20} color={colors.grayDark} />
                  <Text style={styles.sectionTitle}>Attachment</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.addLink}>Add</Text>
                </TouchableOpacity>
              </View>
              
              {displayJob.attachments?.map((attachment) => (
                <View key={attachment.id} style={styles.attachmentCard}>
                  <View style={styles.attachmentThumbContainer}>
                    <Image 
                      source={{ uri: attachment.uri || 'https://images.unsplash.com/photo-1519741497674-281482c3a157?w=200' }} 
                      style={styles.attachmentThumb} 
                    />
                  </View>
                  <View style={styles.attachmentInfo}>
                    <Text style={styles.attachmentName}>{attachment.name}</Text>
                    <Text style={styles.attachmentTime}>{attachment.time}</Text>
                  </View>
                  <TouchableOpacity>
                     <Entypo name="dots-two-horizontal" size={20} color={colors.grayDark} />
                  </TouchableOpacity>
                </View>
              ))}

              {/* Comments & Activity */}
              <View style={[styles.sectionTitleRow, { marginBottom: 15 }]}>
                <Feather name="message-square" size={20} color={colors.grayDark} />
                <Text style={styles.sectionTitle}>Comments & Activity</Text>
              </View>

              {/* Comment Input */}
              <View style={styles.commentInputContainer}>
                <TextInput
                  placeholder="Write a comment"
                  style={styles.commentInput}
                  value={comment}
                  onChangeText={setComment}
                  placeholderTextColor={colors.grayDark}
                />
              </View>

              {/* Activity List */}
              <View style={styles.activityList}>
                 {displayJob.comments?.map((item) => (
                   <View key={item.id} style={styles.activityItem}>
                      <Image source={{ uri: item.avatar }} style={styles.activityAvatar} />
                      <View style={styles.activityContent}>
                         {item.type === 'activity' ? (
                           <View>
                              <Text style={styles.activityUserText}>
                                <Text style={styles.bold}>{item.user}</Text> {item.action}
                              </Text>
                              <Text style={styles.activityTime}>{item.time}</Text>
                           </View>
                         ) : (
                           <View>
                              <View style={styles.commentHeader}>
                                <Text style={styles.bold}>{item.user}</Text>
                                <Text style={styles.activityTime}>{item.time}</Text>
                              </View>
                              <View style={styles.commentBubble}>
                                <Text style={styles.commentText}>{item.text}</Text>
                              </View>
                              <View style={styles.commentActions}>
                                <TouchableOpacity><Text style={styles.commentActionText}>Edit</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.commentActionText}>Delete</Text></TouchableOpacity>
                              </View>
                           </View>
                         )}
                      </View>
                   </View>
                 ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '92%',
    paddingBottom: responsiveHeight(2),
  },
  imageHeader: {
    width: '100%',
    padding: responsiveWidth(4),
  },
  bannerImage: {
    width: '100%',
    height: responsiveHeight(26),
    borderRadius: 16,
    backgroundColor: '#F3F4F6', // Placeholder color
  },
  statusBadge: {
    position: 'absolute',
    top: responsiveHeight(3),
    left: responsiveWidth(7),
    backgroundColor: colors.blueAccent,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
  },
  statusText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
  closeButton: {
    position: 'absolute',
    top: responsiveHeight(3),
    right: responsiveWidth(7),
    backgroundColor: colors.white,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  mainPadding: {
    paddingHorizontal: responsiveWidth(5),
  },
  title: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: responsiveHeight(2.5),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
  },
  infoCol: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.grayDark,
    marginBottom: 8,
  },
  membersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: '#E5E7EB',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  dateText: {
    color: colors.red,
    fontSize: 11,
    fontWeight: '600',
    marginRight: 4,
  },
  clientTag: {
    backgroundColor: '#E2F5FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  clientText: {
    color: colors.blueAccent,
    fontSize: 11,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: responsiveHeight(2),
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.grayDark,
  },
  editLink: {
    color: colors.blueAccent,
    fontWeight: '600',
  },
  addLink: {
    color: colors.blueAccent,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
    marginBottom: 10,
  },
  attachmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  attachmentThumbContainer: {
    width: 60,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
    overflow: 'hidden',
  },
  attachmentThumb: {
    width: '100%',
    height: '100%',
  },
  attachmentInfo: {
    flex: 1,
  },
  attachmentName: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.black,
  },
  attachmentTime: {
    fontSize: 11,
    color: colors.grayDark,
    marginTop: 2,
  },
  commentInputContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
  commentInput: {
    fontSize: 14,
    color: colors.black,
  },
  activityList: {
    marginBottom: responsiveHeight(10),
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activityAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityUserText: {
    fontSize: 14,
    color: colors.black,
  },
  activityTime: {
    fontSize: 12,
    color: colors.blueAccent,
    marginTop: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  commentBubble: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
  commentText: {
    fontSize: 14,
    color: colors.black,
  },
  commentActions: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 8,
  },
  commentActionText: {
    fontSize: 12,
    color: colors.grayDark,
    textDecorationLine: 'underline',
  },
});

export default JobDetailModal;
