import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFC20E",
        tabBarInactiveTintColor: "#F2F6FF",
        // tabBarLabelStyle: {
        //   color: "#F2F6FF",
        // },
        tabBarStyle: {
          backgroundColor: "#0079C1"
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            style={props.style as StyleProp<ViewStyle>}
            onPress={(e) => {
              Haptics.selectionAsync(); // Trigger haptic feedback
              props.onPress?.(e);
            }}
          />
        ),
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={"#F2F6FF"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={"#F2F6FF"} />,
        }}
      />

<Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="book-outline" color={"#F2F6FF"} />,
        }}
      />
      <Tabs.Screen
        name="connections"
        options={{
          title: 'Connections',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="people-outline" color={"#F2F6FF"} />,
        }}
      />
    </Tabs>
    </>

    
    
  );
}
