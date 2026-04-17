import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Typography from './Typography';

import { rs } from '../utils/dimensions';

const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  rightIcon,
  onRightIconPress,
  style,
  keyboardType = 'default',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
        ]}
      >
        <RNTextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.iconContainer}
            activeOpacity={0.7}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: rs(12),
  },
  label: {
    fontSize: rs(14),
    color: '#1A1A1A',
    marginBottom: rs(8),
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rs(56),
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: rs(12),
    backgroundColor: 'transparent',
    paddingHorizontal: rs(16),
  },
  inputContainerFocused: {
    borderColor: '#000000',
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    fontSize: rs(16),
    color: '#1A1A1A',
  },
  iconContainer: {
    marginLeft: rs(10),
    padding: rs(4),
  },
});

export default TextInput;
