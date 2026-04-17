import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';

const PlaceholderScreen = ({ name }) => (
  <ScreenWrapper backgroundColor="#FFFFFF">
    <View style={styles.container}>
      <Text style={styles.text}>{name} Screen</Text>
      <Text style={styles.subtext}>Coming Soon</Text>
    </View>
  </ScreenWrapper>
);

export const JobsScreen = () => <PlaceholderScreen name="Jobs" />;
export const ClientsScreen = () => <PlaceholderScreen name="Clients" />;
export const CalendarScreen = () => <PlaceholderScreen name="Calendar" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  subtext: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
});
