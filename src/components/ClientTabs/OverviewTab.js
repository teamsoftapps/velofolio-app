import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from '../Typography';
import { rs } from '../../utils/dimensions';

const SectionHeader = ({ title }) => (
  <Typography style={styles.sectionTitle}>{title}</Typography>
);

const OverviewTab = () => {
  const teamMembers = [
    'https://i.pravatar.cc/150?img=12',
    'https://i.pravatar.cc/150?img=13',
    'https://i.pravatar.cc/150?img=14',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Typography style={styles.sectionTitle}>Lead Source</Typography>
        <View style={styles.leadSourceCard}>
          <View style={styles.leadSourceInner}>
            <View style={styles.socialIconContainer}>
              {/* Using instagram icon from Feather */}
              <Feather name="instagram" size={rs(18)} color="#E1306C" />
            </View>
            <Typography style={styles.leadSourceText}>Instagram</Typography>
          </View>
          <TouchableOpacity>
            <Feather name="edit-2" size={rs(16)} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Typography style={styles.sectionTitle}>Assigned Team</Typography>
        <View style={styles.teamCard}>
          <View style={styles.teamAvatars}>
            {teamMembers.map((uri, index) => (
              <Image
                key={index}
                source={{ uri }}
                style={[
                  styles.teamAvatar,
                  { marginLeft: index === 0 ? 0 : rs(-10) },
                ]}
              />
            ))}
          </View>
          <TouchableOpacity>
            <Feather name="edit-2" size={rs(16)} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Typography style={styles.sectionTitle}>Notes</Typography>
        <View style={styles.notesCard}>
          <Typography style={styles.notesText}>
            During our initial consultation, Sarah mentioned that she prefers a
            pastel color theme for the wedding and wants extra focus on candid
            shots. She also requested a highlight reel for social media, in
            addition to the full video package. Need to confirm the exact start
            time for the reception.
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rs(20),
  },
  section: {
    marginBottom: rs(24),
  },
  sectionTitle: {
    fontSize: rs(16),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  leadSourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F9FF',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
  },
  leadSourceInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIconContainer: {
    width: rs(28),
    height: rs(28),
    backgroundColor: '#FFFFFF',
    borderRadius: rs(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rs(12),
  },
  leadSourceText: {
    fontSize: rs(14),
    fontWeight: '500',
    color: '#111827',
  },
  teamCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F9FF',
    borderRadius: rs(12),
    paddingHorizontal: rs(16),
    paddingVertical: rs(12),
  },
  teamAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamAvatar: {
    width: rs(32),
    height: rs(32),
    borderRadius: rs(16),
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  notesCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: rs(16),
    padding: rs(16),
  },
  notesText: {
    fontSize: rs(14),
    lineHeight: rs(22),
    color: '#6B7280',
  },
});

export default OverviewTab;
