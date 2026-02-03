import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors'; // adjust path if needed

const ClientAvatarInfo = ({
  avatarUri,
  clientName,
  email,
  defaultAvatarUri = 'https://i.pravatar.cc/150', // fallback for image loading error
}) => {
  const initials = clientName?.trim()?.[0]?.toUpperCase() || '?';

  return (
    <View style={styles.container}>
      {avatarUri ? (
        <Image
          source={{ uri: avatarUri }}
          style={styles.avatar}
          defaultSource={{ uri: defaultAvatarUri }}
          // resizeMode="cover"   ← optional, usually good for avatars
        />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text
          style={styles.name}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {clientName || 'Unknown Client'}
        </Text>

        <View style={styles.emailWrapper}>
          <Text
            style={styles.email}
            numberOfLines={1}
            ellipsizeMode="tail"           // "middle" also popular for long emails
            // allowFontScaling={false}    // uncomment if font must not scale
          >
            {email || 'No email provided'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ClientAvatarInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // grows to fill available space
    marginVertical:responsiveHeight(1.4)
  },

  avatar: {
    width: responsiveWidth(12.5),
    height: responsiveWidth(12.5),
    borderRadius: 999,
    marginRight: responsiveWidth(4),
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.9)',
  },

  avatarFallback: {
    width: responsiveWidth(12.5),
    height: responsiveWidth(12.5),
    borderRadius: 999,
    backgroundColor: colors.purpleLight || '#D1C4E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.9)',
  },

  avatarText: {
    fontSize: responsiveFontSize(2.8), // bigger than before → looks better
    fontWeight: '700',
    color: colors.white,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary || '#111827',
    marginBottom: responsiveHeight(0.4),
  },

  emailWrapper: {
    overflow: 'hidden', // safety net
  },

  email: {
    fontSize: responsiveFontSize(1.65),
    color: colors.textSecondary || '#6B7280',
    letterSpacing: 0.2,
    flexShrink: 1, // ← prevents stretching parent
  },
});