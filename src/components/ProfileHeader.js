import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Typography from './Typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { rs } from '../utils/dimensions';

const ProfileHeader = ({
  userName = 'Mike Mayfield',
  greeting = 'Welcome Back! 👋',
  profileImageUrl = 'https://i.pravatar.cc/150?img=11',
  onProfilePress,
  onSearchPress,
  onNotificationPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + (Platform.OS === 'ios' ? 0 : rs(12)) },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={onProfilePress} activeOpacity={0.7} style={styles.imageContainer}>
            <Image
              source={{ uri: profileImageUrl }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Typography style={styles.greetingText}>{greeting}</Typography>
            <Typography style={styles.nameText}>{userName}</Typography>
          </View>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onSearchPress}
            activeOpacity={0.7}
          >
            <Feather name="search" size={rs(22)} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onNotificationPress}
            activeOpacity={0.7}
          >
            <Feather name="bell" size={rs(22)} color="#1A1A1A" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: rs(32),
    borderBottomRightRadius: rs(32),
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: rs(15) },
    shadowOpacity: 0.04,
    shadowRadius: rs(20),
    elevation: 4,
    zIndex: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: rs(16),
    paddingHorizontal: rs(20),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: rs(52),
    height: rs(52),
    borderRadius: rs(26),
    backgroundColor: '#EDF2F7',
    marginRight: rs(12),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: rs(14),
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: rs(2),
  },
  nameText: {
    fontSize: rs(20),
    fontWeight: '700',
    color: '#1A1A1A',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(14),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: rs(10),
    backgroundColor: '#FFFFFF',
  },
  notificationDot: {
    position: 'absolute',
    top: rs(10),
    right: rs(12),
    width: rs(8),
    height: rs(8),
    borderRadius: rs(4),
    backgroundColor: '#F59E0B',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
});

export default ProfileHeader;
