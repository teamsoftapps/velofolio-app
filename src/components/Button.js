import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from './Typography';
import { rs } from '../utils/dimensions';

const Button = ({
  title,
  onPress,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'social'
  iconSrc,
  iconNode,
  style,
  textStyle,
  disabled = false,
}) => {
  const getContainerStyles = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryContainer;
      case 'secondary':
        return styles.secondaryContainer;
      case 'outline':
      case 'social':
        return styles.outlineContainer;
      default:
        return styles.primaryContainer;
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return styles.primaryText;
      case 'outline':
      case 'social':
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.baseContainer,
        getContainerStyles(),
        disabled && styles.disabledContainer,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {iconNode && <View style={styles.iconContainer}>{iconNode}</View>}
        <Typography style={[styles.baseText, getTextStyles(), textStyle]}>
          {title}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    height: rs(56),
    borderRadius: rs(28),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rs(24),
    marginVertical: rs(8),
  },
  primaryContainer: {
    backgroundColor: '#000000',
  },
  secondaryContainer: {
    backgroundColor: '#35A9DF',
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
  disabledContainer: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: rs(12),
  },
  baseText: {
    fontSize: rs(16),
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#1A1A1A',
  },
});

export default Button;
