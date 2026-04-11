import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../utils/colors';

const ClientJobCard = ({ job }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Entypo name="dots-two-horizontal" size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{job.title || 'Pre-Wedding Shoot – Sarah & John'}</Text>
      <Text style={styles.description}>{job.description || 'Full Film, Teaser, RAW Photos'}</Text>

      <View style={styles.detailsBox}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Event Date</Text>
          <Text style={styles.detailValue}>Oct 12, 2025, 5:32 AM</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Location</Text>
          <Text style={styles.detailValue}>Toronto City Hall</Text>
        </View>
      </View>

      <View style={styles.teamSection}>
        <Text style={styles.teamLabel}>Team</Text>
        <View style={styles.teamList}>
          <View style={styles.member}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100' }} 
              style={styles.memberAvatar} 
            />
            <Text style={styles.memberName}>Mike</Text>
          </View>
          <View style={styles.member}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }} 
              style={styles.memberAvatar} 
            />
            <Text style={styles.memberName}>Lucas</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClientJobCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F9FAFB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusBadge: {
    backgroundColor: '#10B981', 
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  moreButton: {
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '400',
    marginBottom: 18,
  },
  detailsBox: {
    backgroundColor: '#F0F9FF', 
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 6,
    fontWeight: '400',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  teamSection: {
    marginTop: 0,
  },
  teamLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
    fontWeight: '400',
  },
  teamList: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  memberName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
});
