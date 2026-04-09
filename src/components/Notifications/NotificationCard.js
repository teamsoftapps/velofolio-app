import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NotificationCard({
  iconName = 'notifications-outline',
  title = 'Notification',
  subtitle = '',
  timeAgo = 'just now',
  onPress,
  onDelete = () => {},
  iconColor = '#00B1FF',
  iconBg = '#E0F5FF',
  isUnread = true,
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    const toValue = isOpen ? 0 : -responsiveWidth(20);
    Animated.spring(translateX, {
      toValue,
      useNativeDriver: true,
      tension: 60,
      friction: 8
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.swipeContainer}>
      {/* Delete button layered UNDER the card on the right */}
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={onDelete}
        activeOpacity={0.8}
      >
        <Ionicons name="trash-outline" size={24} color="#FFF" />
      </TouchableOpacity>

      <Animated.View style={[{ transform: [{ translateX }] }]}>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={toggleSlide}
          activeOpacity={1}
        >
          <View style={styles.contentRow}>
            <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
              <Ionicons name={iconName} size={24} color={iconColor} />
            </View>

            <View style={styles.textContainer}>
              <View style={styles.headerRow}>
                <View style={styles.titleRow}>
                  {isUnread && <View style={styles.unreadDot} />}
                  <Text style={styles.title} numberOfLines={1}>{title}</Text>
                </View>
                <Text style={styles.time}>{timeAgo}</Text>
              </View>

              <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
              
              <TouchableOpacity onPress={onPress}>
                <Text style={styles.detailsLink}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  swipeContainer: {
    width: responsiveWidth(92),
    marginBottom: responsiveHeight(1.5),
    borderRadius: responsiveWidth(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: '#EE2A35',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: responsiveWidth(20),
    backgroundColor: '#EE2A35',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: responsiveWidth(4),
    borderBottomRightRadius: responsiveWidth(4),
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconBox: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: responsiveWidth(3.5),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  unreadDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00B1FF',
    marginRight: 6,
  },
  title: {
    fontSize: responsiveWidth(4.2),
    fontWeight: '600',
    color: '#1F2937',
  },
  time: {
    fontSize: responsiveWidth(3.4),
    color: '#9CA3AF',
  },
  subtitle: {
    fontSize: responsiveWidth(3.8),
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  detailsLink: {
    fontSize: responsiveWidth(3.8),
    color: '#00B1FF',
    fontWeight: '500',
  },
});