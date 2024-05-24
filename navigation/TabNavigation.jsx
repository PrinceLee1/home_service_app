import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingScreen from "../screens/BookingScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../utils/colors";
import HomeNavigation from "./HomeNavigation";
const Tab = createBottomTabNavigator();
export default function tabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="text-[12px] -mt-[7px]" style={{ color: color }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="text-[12px] -mt-[7px]" style={{ color: color }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="text-[12px] -mt-[7px]" style={{ color: color }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
