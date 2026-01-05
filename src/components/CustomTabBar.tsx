import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const icons = {
  Home: {
    active: require('../assets/icons/home_black.png'),
    inactive: require('../assets/icons/home_gray.png'),
  },
  Jobs: {
    active: require('../assets/icons/jobs_black.png'),
    inactive: require('../assets/icons/jobs_gray.png'),
  },
  Clients: {
    active: require('../assets/icons/clients_black.png'),
    inactive: require('../assets/icons/clients_gray.png'),
  },
  Calendar: {
    active: require('../assets/icons/calendar_gray.png'),
    inactive: require('../assets/icons/calendar_gray.png'),
  },
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const handleCenterPress = () => {
    console.log('Center + button pressed');
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconSource =
          icons[route.name as keyof typeof icons]?.[
            isFocused ? 'active' : 'inactive'
          ];

        const tabStyle = index < 2 ? styles.leftTab : styles.rightTab;

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={tabStyle}>
            <Image
              source={iconSource}
              style={[styles.sideIcon, { opacity: isFocused ? 1 : 0.6 }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}

      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={handleCenterPress}
          activeOpacity={0.8}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 70,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  leftTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  rightTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
  sideIcon: {
    width: 26,
    height: 26,
  },
  centerButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: 'center',
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00A3AD',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  plusText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '300',
    marginTop: -3,
  },
});

export default CustomTabBar;
