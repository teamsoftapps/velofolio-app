import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { rs } from '../utils/dimensions';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // Card width is 75% of screen to show next item

const BoardJobCard = ({
  title,
  client,
  date,
  clientBgColor = '#E0F2FE',
  clientTextColor = '#38BDF8',
  dateBgColor = '#FEE2E2',
  dateTextColor = '#EF4444',
  description,
  image,
  attachmentsCount,
  commentsCount,
  members = [],
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
      <Typography style={styles.title} numberOfLines={1}>{title}</Typography>
      
      <View style={styles.badgesRow}>
        <View style={[styles.badge, { backgroundColor: clientBgColor }]}>
          <Typography style={[styles.badgeText, { color: clientTextColor }]}>
            {client.toUpperCase()}
          </Typography>
        </View>
        <View style={[styles.badge, { backgroundColor: dateBgColor }]}>
          <Typography style={[styles.badgeText, { color: dateTextColor }]}>
            {date.toUpperCase()}
          </Typography>
        </View>
      </View>

      {description ? (
        <Typography style={styles.description} numberOfLines={1}>
          {description}
        </Typography>
      ) : null}

      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : null}

      <View style={styles.bottomRow}>
        <View style={styles.avatarsContainer}>
          {members.map((url, index) => (
            <Image
              key={index}
              source={{ uri: url }}
              style={[
                styles.avatar,
                { marginLeft: index === 0 ? 0 : rs(-10) }
              ]}
            />
          ))}
        </View>
        
        <View style={styles.statsContainer}>
          {attachmentsCount !== undefined && (
            <View style={styles.statItem}>
              <Feather name="paperclip" size={rs(14)} color="#6B7280" />
              <Typography style={styles.statText}>{attachmentsCount}</Typography>
            </View>
          )}
          {commentsCount !== undefined && (
            <View style={[styles.statItem, { marginLeft: rs(12) }]}>
              <Feather name="message-circle" size={rs(14)} color="#6B7280" />
              <Typography style={styles.statText}>{commentsCount}</Typography>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: rs(20),
    padding: rs(16),
    marginRight: rs(16),
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: rs(18),
    fontWeight: '700',
    color: '#111827',
    marginBottom: rs(12),
  },
  badgesRow: {
    flexDirection: 'row',
    marginBottom: rs(16),
  },
  badge: {
    paddingHorizontal: rs(12),
    paddingVertical: rs(6),
    borderRadius: rs(20),
    marginRight: rs(8),
  },
  badgeText: {
    fontSize: rs(11),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: rs(14),
    color: '#9CA3AF',
    marginBottom: rs(16),
  },
  image: {
    width: '100%',
    height: rs(120),
    borderRadius: rs(12),
    marginBottom: rs(16),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: rs(28),
    height: rs(28),
    borderRadius: rs(14),
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: rs(14),
    color: '#6B7280',
    marginLeft: rs(4),
  },
});

export default BoardJobCard;
