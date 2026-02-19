import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { theme } from '@/src/theme/theme';

function TabIcon({ name, focused, label }: { name: string; focused: boolean; label: string }) {
  // Using simplified text icons for now since I can't guarantee icon set availability
  // In a real app, I'd use MaterialIcons or similar
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <View
        style={{
          width: 48,
          height: 32,
          borderRadius: 16,
          backgroundColor: focused ? theme.colors.surfaceContainer : 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{
          fontSize: 20,
          color: focused ? theme.colors.primary : theme.colors.textSecondary
        }}>
          {name === 'home' ? '🏠' : name === 'search' ? '🔍' : name === 'profile' ? '👤' : '📊'}
        </Text>
      </View>
      <Text style={{
        fontSize: 10,
        fontWeight: focused ? '700' : '500',
        color: focused ? theme.colors.white : theme.colors.textSecondary
      }}>
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#333333',
          height: 80,
          paddingTop: 8,
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon name="home" focused={focused} label="Home" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabIcon name="search" focused={focused} label="Search" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabIcon name="profile" focused={focused} label="Profile" />,
        }}
      />
    </Tabs>
  );
}
